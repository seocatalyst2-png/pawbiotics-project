import type { Metadata } from "next";
import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Container from "@/components/Container";
import FaqAccordion from "@/components/seo/FaqAccordion";
import {
  ArticleSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/seo/Schema";
import {
  getBlogPostBySlug,
  getBlogPostSlugs,
  type BlogImage,
  type BlogInternalLink,
  type BlogPost,
  type BlogSectionImage,
} from "@/data/blog-posts";
import { generateBlogMeta } from "@/lib/meta";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const meta = generateBlogMeta(post, {
    canonicalPath: `/blog/${post.slug}`,
    openGraphTitle: post.title,
    openGraphType: "article",
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
    openGraph: meta.openGraph,
  };
}

function renderParagraphWithLinks(paragraph: string) {
  const markdownLinkRegex = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null = markdownLinkRegex.exec(paragraph);

  while (match) {
    const [fullMatch, label, href] = match;
    const start = match.index;

    if (start > cursor) {
      nodes.push(paragraph.slice(cursor, start));
    }

    nodes.push(
      <Link
        key={`${href}-${start}`}
        href={href}
        className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 transition-colors hover:text-brand-800"
      >
        {label}
      </Link>
    );

    cursor = start + fullMatch.length;
    match = markdownLinkRegex.exec(paragraph);
  }

  if (cursor < paragraph.length) {
    nodes.push(paragraph.slice(cursor));
  }

  return nodes.length ? nodes : paragraph;
}

const localImageExistenceCache = new Map<string, boolean>();

function isRenderableImageSrc(src: string): boolean {
  if (!src) return false;
  if (/^https?:\/\//i.test(src)) return true;
  if (!src.startsWith("/images/blog/")) return false;

  const cached = localImageExistenceCache.get(src);
  if (typeof cached === "boolean") return cached;

  const absolutePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  const exists = existsSync(absolutePath);
  localImageExistenceCache.set(src, exists);
  return exists;
}

function normalizeImage(image?: BlogImage): BlogImage | null {
  if (!image || !isRenderableImageSrc(image.src)) return null;
  return image;
}

function getSectionImages(post: BlogPost, sectionHeading: string): BlogImage[] {
  if (!post.sectionImages?.length) return [];
  const loweredHeading = sectionHeading.toLowerCase();
  const matches = post.sectionImages.filter((image: BlogSectionImage) =>
    loweredHeading.includes(image.sectionHeadingIncludes.toLowerCase())
  );
  const validMatches = matches.filter((image) => isRenderableImageSrc(image.src));
  return validMatches.slice(0, 2).map(({ src, alt, caption }) => ({ src, alt, caption }));
}

function isSymptomPost(post: BlogPost): boolean {
  if (!["Dogs", "Cats"].includes(post.category)) return false;
  const marker = `${post.slug} ${post.title}`.toLowerCase();
  return [
    "why-is-my",
    "symptom",
    "cough",
    "gag",
    "breath",
    "drool",
    "sneez",
    "swollen",
    "red",
    "dragging",
    "cold",
    "gums",
  ].some((keyword) => marker.includes(keyword));
}

function uniqueLinks(links: BlogInternalLink[]): BlogInternalLink[] {
  const seen = new Set<string>();
  return links.filter((link) => {
    const key = `${link.href}|${link.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getCrossPetLinks(post: BlogPost): BlogInternalLink[] {
  if (!isSymptomPost(post)) return [];
  const key = `${post.slug} ${post.title}`.toLowerCase();

  if (post.category === "Dogs") {
    if (key.includes("breath") || key.includes("gums")) {
      return [
        {
          label: "Cat breath illness guide",
          href: "/blog/why-does-my-cats-breath-smell-so-bad",
          description: "Compare oral and illness warning signs in cats.",
        },
        {
          label: "Cat breath basics",
          href: "/blog/cat-breath-stinks",
          description: "Simple hygiene-first breath guide for cats.",
        },
      ];
    }
    if (key.includes("breath") || key.includes("cough") || key.includes("gag")) {
      return [
        {
          label: "Why is my cat breathing heavy?",
          href: "/blog/why-is-my-cat-breathing-heavy",
          description: "Cross-check respiratory urgency patterns in cats.",
        },
        {
          label: "Cat cold symptoms",
          href: "/blog/cat-cold-symptoms",
          description: "Review upper-airway symptom overlap.",
        },
      ];
    }
    return [
      {
        label: "Why is my cat sneezing a lot?",
        href: "/blog/why-is-my-cat-sneezing-a-lot",
        description: "Compare common symptom progression in cats.",
      },
      {
        label: "Why is my cat drooling?",
        href: "/blog/why-is-my-cat-drooling",
        description: "Cross-check oral symptom escalation signals.",
      },
    ];
  }

  if (key.includes("breath") || key.includes("drool")) {
    return [
      {
        label: "Dog bad breath illness guide",
        href: "/blog/is-bad-breath-in-dogs-a-sign-of-illness",
        description: "Compare when breath odor suggests wider illness.",
      },
      {
        label: "Dog breath basics",
        href: "/blog/dogs-breath-smells",
        description: "See dog oral-care routine and monitoring tips.",
      },
    ];
  }

  return [
    {
      label: "Why is my dog breathing heavy?",
      href: "/blog/why-is-my-dog-breathing-heavy",
      description: "Compare respiratory urgency cues across species.",
    },
    {
      label: "Why is my dog coughing?",
      href: "/blog/why-is-my-dog-coughing",
      description: "Review cough severity guidance in dogs.",
    },
  ];
}

function getAutoRelatedConditions(post: BlogPost): BlogInternalLink[] {
  const key = `${post.slug} ${post.title}`.toLowerCase();
  if (key.includes("breath") || key.includes("gag") || key.includes("cough") || key.includes("cold") || key.includes("sneez")) {
    return [
      {
        label: "Allergies condition guide",
        href: "/health-conditions/allergies",
        description: "Track inflammatory triggers linked to airway symptoms.",
      },
      {
        label: "Immunity condition guide",
        href: "/health-conditions/immunity",
        description: "Understand baseline resilience and recovery support.",
      },
      {
        label: "Diarrhea condition guide",
        href: "/health-conditions/diarrhea",
        description: "Useful when symptoms overlap with digestive stress.",
      },
    ];
  }
  if (key.includes("paw") || key.includes("itch") || key.includes("red") || key.includes("dragging")) {
    return [
      {
        label: "Allergies condition guide",
        href: "/health-conditions/allergies",
        description: "Common skin and irritation-related trigger overview.",
      },
      {
        label: "Itchy skin condition guide",
        href: "/health-conditions/itchy-skin",
        description: "Skin discomfort patterns and care reminders.",
      },
      {
        label: "Diarrhea condition guide",
        href: "/health-conditions/diarrhea",
        description: "Helpful for stool-linked symptom clusters.",
      },
    ];
  }
  if (key.includes("drool") || key.includes("breath")) {
    return [
      {
        label: "Bad breath condition guide",
        href: "/health-conditions/bad-breath",
        description: "Oral-health causes and escalation cues.",
      },
      {
        label: "Allergies condition guide",
        href: "/health-conditions/allergies",
        description: "Inflammation triggers that may affect mouth and airway.",
      },
      {
        label: "Diarrhea condition guide",
        href: "/health-conditions/diarrhea",
        description: "Cross-symptom digestive pattern reference.",
      },
    ];
  }
  return [
    {
      label: "Health conditions hub",
      href: "/health-conditions",
      description: "Explore condition overviews by symptom type.",
    },
    {
      label: "Allergies condition guide",
      href: "/health-conditions/allergies",
      description: "Common trigger map for recurring symptoms.",
    },
    {
      label: "Diarrhea condition guide",
      href: "/health-conditions/diarrhea",
      description: "Digestive companion page for mixed symptom cases.",
    },
  ];
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const postUrl = `https://pawbiotics.us/blog/${post.slug}`;
  const breadcrumbs = [
    { label: "Home", href: "https://pawbiotics.us/" },
    { label: "Blog", href: "https://pawbiotics.us/blog" },
    { label: post.title, href: postUrl },
  ];
  const cardTones = [
    "border-teal-100 bg-teal-50/60",
    "border-amber-100 bg-amber-50/70",
    "border-emerald-100 bg-emerald-50/60",
    "border-sky-100 bg-sky-50/70",
    "border-orange-100 bg-orange-50/65",
    "border-violet-100 bg-violet-50/65",
    "border-rose-100 bg-rose-50/65",
    "border-lime-100 bg-lime-50/65",
  ] as const;
  const sectionIcons = ["🩺", "📌", "✅", "🧠", "🍽️", "🐾", "📋", "🚨"] as const;
  const relatedConditions = uniqueLinks(post.relatedConditions ?? getAutoRelatedConditions(post));
  const crossPetLinks = getCrossPetLinks(post);
  const displayedInternalLinks = uniqueLinks([...post.internalLinks, ...crossPetLinks]).slice(0, 12);
  const crossPetContextLinks = crossPetLinks.slice(0, 2);
  const featuredImage = normalizeImage(post.featuredImage);

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.metaDescription}
        pageUrl={postUrl}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={post.faqs} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <li>
                <Link href="/" className="hover:text-brand-700">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-brand-700">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-700">{post.title}</li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {post.category}
          </p>
          <h1 className="mt-2 max-w-4xl text-3xl font-bold text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Published {post.publishedDate} • {post.readingTime}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">{post.intro}</p>
          {!!featuredImage && (
            <figure className="mt-6 max-w-4xl overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm">
              <Image
                src={featuredImage.src}
                alt={featuredImage.alt}
                width={1200}
                height={700}
                sizes="(min-width: 1024px) 56rem, 100vw"
                className="h-auto w-full object-cover"
              />
              {!!featuredImage.caption && (
                <figcaption className="border-t border-gray-100 px-4 py-2 text-xs leading-5 text-gray-600">
                  {featuredImage.caption}
                </figcaption>
              )}
            </figure>
          )}
          {!!(isSymptomPost(post) && crossPetContextLinks.length) && (
            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
              Compare with similar{" "}
              {post.category === "Dogs" ? "cat" : "dog"} symptom guides:{" "}
              {crossPetContextLinks.map((item, index) => (
                <span key={item.href}>
                  <Link
                    href={item.href}
                    className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 transition-colors hover:text-brand-800"
                  >
                    {item.label}
                  </Link>
                  {index < crossPetContextLinks.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          )}
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6">
          <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-4 text-sm text-brand-900">
            Educational guide only. This article does not replace a veterinary exam, diagnosis, or emergency care.
          </div>
          {post.sections.map((section, index) => {
            const sectionImages = getSectionImages(post, section.heading);
            return (
              <article
                key={section.heading}
                className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${cardTones[index % cardTones.length]}`}
              >
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-700">
                  <span aria-hidden>{sectionIcons[index % sectionIcons.length]}</span>
                  Section {index + 1}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  <h3 className="text-base font-semibold text-gray-800">What this means</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-gray-600">
                      {renderParagraphWithLinks(paragraph)}
                    </p>
                  ))}
                </div>
                {!!sectionImages.length && (
                  <div className={`mt-5 grid gap-3 ${sectionImages.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                    {sectionImages.map((image) => (
                      <figure
                        key={`${section.heading}-${image.src}`}
                        className="overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-sm"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1200}
                          height={675}
                          sizes="(min-width: 1024px) 32rem, (min-width: 640px) 50vw, 100vw"
                          className="h-auto w-full object-cover"
                        />
                        {!!image.caption && (
                          <figcaption className="border-t border-gray-100 px-3 py-2 text-xs leading-5 text-gray-600">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
                {!!section.bullets?.length && (
                  <div className="mt-4">
                    <h3 className="text-base font-semibold text-gray-800">Checklist</h3>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </Container>
      </section>

      {!!post.relatedGuides?.length && (
        <section className="border-t border-gray-100 bg-gradient-to-b from-white to-brand-50/20 py-10">
          <Container>
            <h2 className="text-2xl font-semibold text-gray-900">
              {post.relatedGuidesTitle ?? "Related Guides"}
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {post.relatedGuides.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                >
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                  {!!item.description && (
                    <p className="mt-1 text-xs leading-5 text-gray-600">{item.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {!!relatedConditions.length && (
        <section className="border-t border-gray-100 bg-gradient-to-b from-white to-brand-50/20 py-10">
          <Container>
            <h2 className="text-2xl font-semibold text-gray-900">Related Health Conditions</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedConditions.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                >
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                  {!!item.description && (
                    <p className="mt-1 text-xs leading-5 text-gray-600">{item.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {!!displayedInternalLinks.length && (
        <section className="border-t border-gray-100 bg-gradient-to-b from-white to-brand-50/20 py-10">
          <Container>
            <h2 className="text-2xl font-semibold text-gray-900">Related Guides</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {displayedInternalLinks.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {!!post.faqs.length && (
        <section className="bg-gray-50 py-12">
          <Container>
            <FaqAccordion items={post.faqs} />
          </Container>
        </section>
      )}
    </>
  );
}
