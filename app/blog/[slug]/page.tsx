import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import FAQ from "@/components/seo/FAQ";
import {
  ArticleSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/seo/Schema";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/data/blog-posts";

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

  const postUrl = `https://pawbiotics.us/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: postUrl,
      type: "article",
    },
  };
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
          {post.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-gray-900">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
              {!!section.bullets?.length && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </Container>
      </section>

      {!!post.internalLinks.length && (
        <section className="border-t border-gray-100 bg-gray-50 py-10">
          <Container>
            <h2 className="text-2xl font-semibold text-gray-900">Related pages</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {post.internalLinks.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
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
            <FAQ items={post.faqs} />
          </Container>
        </section>
      )}
    </>
  );
}
