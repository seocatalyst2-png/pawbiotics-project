import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { getAllBlogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Pet Health & Probiotics Blog",
  description:
    "Read beginner-friendly pet health and probiotics articles for dogs and cats. Explore gut health tips, common conditions, and practical vet guidance.",
  alternates: {
    canonical: "https://pawbiotics.us/blog",
  },
  openGraph: {
    title: "Pet Health & Probiotics Blog",
    description:
      "Read beginner-friendly pet health and probiotics articles for dogs and cats. Explore gut health tips, common conditions, and practical vet guidance.",
    url: "https://pawbiotics.us/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Pet Health & Probiotics Blog"
        description="Explore practical, beginner-friendly articles on dog and cat health, gut wellness, and probiotic support. Start here for clear guidance you can trust."
      />

      <section className="py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {post.category}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h2>
                <p className="mt-2 text-xs text-gray-500">
                  {post.publishedDate} • {post.readingTime}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600">{post.metaDescription}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-brand-700 hover:text-brand-800"
                >
                  Read full post &rarr;
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <Container>
          <h2 className="text-2xl font-semibold text-gray-900">Explore more pet health pages</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/dogs"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Dog Health Guides
            </Link>
            <Link
              href="/cats"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Cat Health Guides
            </Link>
            <Link
              href="/health-conditions"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Common Health Conditions
            </Link>
            <Link
              href="/vets/houston-tx"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Local Vets in Houston
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
