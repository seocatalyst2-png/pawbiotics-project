import type { Metadata } from "next";
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
import { getBlogPostBySlug, getBlogPostSlugs } from "@/data/blog-posts";
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
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6">
          <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-4 text-sm text-brand-900">
            Educational guide only. This article does not replace a veterinary exam, diagnosis, or emergency care.
          </div>
          {post.sections.map((section, index) => (
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
          ))}
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

      {!!post.internalLinks.length && (
        <section className="border-t border-gray-100 bg-gradient-to-b from-white to-brand-50/20 py-10">
          <Container>
            <h2 className="text-2xl font-semibold text-gray-900">Related Guides</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {post.internalLinks.map((item) => (
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
