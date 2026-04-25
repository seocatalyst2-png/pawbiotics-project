import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { FAQSchema } from "@/components/seo/Schema";
import { getAllBlogPosts } from "@/data/blog-posts";
import type { FAQItem } from "@/lib/seo";

const supportingDogFoodPosts = [
  {
    slug: "homemade-chicken-dog-food-recipes-vet-approved",
    title: "Homemade Chicken Dog Food Recipes Vet Approved",
    category: "Dogs",
    publishedDate: "2026-04-25",
    readingTime: "7 min read",
    metaDescription:
      "Vet-informed guidance for homemade chicken dog food with practical prep ideas, portion tips, and safe feeding reminders.",
    href: "/blog/homemade-chicken-dog-food-recipes-vet-approved",
  },
  {
    slug: "vet-approved-homemade-dog-food-recipes-for-large-dogs",
    title: "Vet Approved Homemade Dog Food Recipes for Large Dogs",
    category: "Dogs",
    publishedDate: "2026-04-25",
    readingTime: "7 min read",
    metaDescription:
      "A practical large-breed homemade feeding guide with vet-informed calorie and portion control principles.",
    href: "/blog/vet-approved-homemade-dog-food-recipes-for-large-dogs",
  },
  {
    slug: "how-to-portion-homemade-dog-food",
    title: "How to Portion Homemade Dog Food",
    category: "Dogs",
    publishedDate: "2026-04-25",
    readingTime: "6 min read",
    metaDescription:
      "Learn how to portion homemade dog food using body condition, weight trend, and activity with a safer adjustment process.",
    href: "/blog/how-to-portion-homemade-dog-food",
  },
  {
    slug: "how-much-homemade-dog-food-should-i-feed-my-dog",
    title: "How Much Homemade Dog Food Should I Feed My Dog",
    category: "Dogs",
    publishedDate: "2026-04-25",
    readingTime: "7 min read",
    metaDescription:
      "A vet-informed estimate framework for how much homemade dog food to feed, with practical monitoring and safety notes.",
    href: "/blog/how-much-homemade-dog-food-should-i-feed-my-dog",
  },
] as const;

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
      "The Pawbiotics blog covers practical dog and cat health guides in simple language. We focus on symptoms, prevention, vaccines, feeding basics, and when to call your veterinarian.",
  },
  {
    question: "How should I use these pet health guides?",
    answer:
      "Start with the symptom or care topic your pet has right now. Read the quick answer first, then use the checklist and vet-warning section for next steps.",
  },
  {
    question: "Are these guides written for both dogs and cats?",
    answer:
      "Yes. The hub includes both dog and cat guides, and each article clearly shows species, intent, and practical actions for pet parents.",
  },
  {
    question: "Where can I find vaccine and preventive care guides?",
    answer:
      "Use the Pet Care & Vaccination section on this page. It groups vaccine planning and preventive care content for kittens, cats, and puppies.",
  },
  {
    question: "When should I contact a vet instead of reading more?",
    answer:
      "If your pet has breathing trouble, repeated vomiting, severe pain, collapse signs, or rapid worsening symptoms, contact a veterinarian immediately.",
  },
  {
    question: "Do these guides replace veterinary diagnosis?",
    answer:
      "No. These guides are educational and help you prepare better questions and monitoring notes. Diagnosis and treatment decisions should always come from your veterinarian.",
  },
];

export default function BlogPage() {
  const blogPosts = [...supportingDogFoodPosts, ...getAllBlogPosts()];
  const featuredDogGuides = blogPosts.filter((post) => post.category === "Dogs").slice(0, 6);
  const featuredCatGuides = blogPosts.filter((post) => post.category === "Cats").slice(0, 6);
  const vaccinationAndCareGuides = blogPosts
    .filter((post) => {
      const keywords = `${post.slug} ${post.title}`.toLowerCase();
      return ["vaccin", "injection", "fvrcp", "spay", "recovery", "heat"].some((term) =>
        keywords.includes(term)
      );
    })
    .slice(0, 6);

  const sectionCardTones = [
    "border-teal-100 bg-teal-50/60",
    "border-amber-100 bg-amber-50/65",
    "border-emerald-100 bg-emerald-50/60",
    "border-sky-100 bg-sky-50/65",
    "border-violet-100 bg-violet-50/60",
    "border-rose-100 bg-rose-50/60",
  ] as const;

  const renderFeatureSection = (
    title: string,
    description: string,
    posts: typeof blogPosts
  ) => (
    <section className="border-t border-gray-100 bg-gradient-to-b from-white to-brand-50/20 py-12">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          <p className="mt-2 text-sm leading-7 text-gray-600">{description}</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Link
              key={`${title}-${post.slug}`}
              href={"href" in post ? post.href : `/blog/${post.slug}`}
              className={`rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 ${sectionCardTones[index % sectionCardTones.length]}`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                {post.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{post.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{post.metaDescription}</p>
              <p className="mt-3 text-xs font-medium text-gray-500">
                Published {post.publishedDate} • {post.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );

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
            This blog helps pet parents understand everyday health questions in simple English. You
            can find dog and cat symptom guides, preventive care articles, vaccine explainers, and
            practical checklists for when to monitor at home and when to call a vet.
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

      {renderFeatureSection(
        "Dog Health Guides",
        "Focused guides for common dog symptoms, recovery questions, and daily care decisions.",
        featuredDogGuides
      )}

      {renderFeatureSection(
        "Cat Health Guides",
        "Practical cat-focused pages for respiratory signs, oral symptoms, hydration, and recovery support.",
        featuredCatGuides
      )}

      {renderFeatureSection(
        "Pet Care & Vaccination",
        "Preventive care explainers for kitten and puppy schedules, vaccine basics, and spay-related planning.",
        vaccinationAndCareGuides
      )}

      <section className="py-14">
        <Container>
          <div className="mb-6 max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-900">All Blog Articles</h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Browse the full library by topic. Use these articles to compare symptoms, connect
              related guides, and prepare for more productive vet visits.
            </p>
          </div>
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
                  href={"href" in post ? post.href : `/blog/${post.slug}`}
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
            <Link
              href="/tools/dog-food-calculator"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Dog Food Calculator
            </Link>
            <Link
              href="/tools/puppy-feeding-schedule"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Puppy Feeding Schedule
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <Container>
          <FaqAccordion items={blogFaqs} />
        </Container>
      </section>
    </>
  );
}
