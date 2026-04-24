import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { FAQSchema } from "@/components/seo/Schema";
import { getAllBlogPosts } from "@/data/blog-posts";
import type { FAQItem } from "@/lib/seo";

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

const blogFaqs: FAQItem[] = [
  {
    question: "What does the Pawbiotics blog cover?",
    answer:
      "The Pawbiotics blog covers practical pet health topics including digestion, probiotics, immunity, common symptoms, and vet-care guidance in simple language.",
  },
  {
    question: "Are these guides for dogs and cats?",
    answer:
      "Yes. Our articles are written for both dogs and cats, and we clearly highlight species-specific tips when needed.",
  },
  {
    question: "Do probiotics help with dog diarrhea?",
    answer:
      "In many mild cases, probiotics can support gut balance and stool quality. If symptoms are severe or persistent, contact your veterinarian promptly.",
  },
  {
    question: "When should I contact a vet?",
    answer:
      "Contact a vet right away for blood in stool, repeated vomiting, dehydration, severe lethargy, or if symptoms do not improve within 24 to 48 hours.",
  },
  {
    question: "How often are new pet health articles added?",
    answer:
      "We regularly add new educational articles to help pet parents stay updated on digestion, probiotics, and everyday wellness support.",
  },
];

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <>
      <FAQSchema faqs={blogFaqs} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container className="text-center">
          <p className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Pet Health Library
          </p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Pet Health &amp; Probiotics Blog
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Explore clean, beginner-friendly guides on dog and cat wellness, gut health, and
            probiotic support. Every article is written to help pet parents make safer, clearer care
            decisions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dogs"
              className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Browse Dog Guides
            </Link>
            <Link
              href="/cats"
              className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-brand-200 hover:text-brand-700"
            >
              Browse Cat Guides
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {post.category}
                  </p>
                  <p className="text-xs text-gray-500">{post.readingTime}</p>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-gray-900 transition group-hover:text-brand-700">
                  {post.title}
                </h2>
                <p className="mt-2 text-xs font-medium text-gray-500">Published {post.publishedDate}</p>
                <p className="mt-3 text-sm leading-6 text-gray-600">{post.metaDescription}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-100"
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
          <h2 className="text-2xl font-semibold text-gray-900">Explore by Topic</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/dogs"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Dogs
            </Link>
            <Link
              href="/cats"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Cats
            </Link>
            <Link
              href="/probiotics"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Gut Health
            </Link>
            <Link
              href="/health-conditions"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Health Conditions
            </Link>
            <Link
              href="/vets/houston-tx"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Local Vets
            </Link>
            <Link
              href="/tools/probiotic-calculator"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Dosage Calculator
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <Container>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-5">
              {blogFaqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-gray-100 p-4">
                  <h3 className="text-base font-semibold text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
