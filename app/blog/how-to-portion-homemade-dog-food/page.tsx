import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";
import FaqAccordionClient from "../vet-approved-homemade-dog-food-recipes/FaqAccordionClient";

const PAGE_URL = "https://pawbiotics.us/blog/how-to-portion-homemade-dog-food";

export const metadata: Metadata = {
  title: "How to Portion Homemade Dog Food | Pawbiotics",
  description:
    "Learn a vet-informed approach to portioning homemade dog food using weight, body condition, activity level, and practical monitoring habits.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Portion Homemade Dog Food | Pawbiotics",
    description:
      "Learn a vet-informed approach to portioning homemade dog food using weight, body condition, activity level, and practical monitoring habits.",
    url: PAGE_URL,
    type: "article",
  },
};

const faqs: FAQItem[] = [
  {
    question: "How do I portion homemade dog food safely?",
    answer:
      "Start with an estimated range using weight and activity, then adjust gradually based on body condition and stool quality. Small weekly changes are usually safer than big jumps.",
  },
  {
    question: "Should I portion by cups or by weight?",
    answer:
      "Weight-based portioning is usually more consistent because ingredient density can vary by recipe and moisture level.",
  },
  {
    question: "How often should I adjust portions?",
    answer:
      "Review every 1 to 2 weeks during transition periods. Keep changes gradual so you can track what is helping.",
  },
  {
    question: "What if my dog gains weight too quickly?",
    answer:
      "Reduce portions slightly, reassess treats and extras, and monitor for 1 to 2 weeks. If the pattern continues, consult your veterinarian.",
  },
  {
    question: "When should I ask a vet about portioning?",
    answer:
      "Ask your vet early if your dog has chronic digestive issues, low appetite, major weight changes, or known medical conditions.",
  },
];

export default function HowToPortionHomemadeDogFoodPage() {
  return (
    <>
      <ArticleSchema
        headline="How to Portion Homemade Dog Food"
        description="Vet-informed portioning guide for homemade dog meals."
        pageUrl={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://pawbiotics.us/" },
          { label: "Blog", href: "https://pawbiotics.us/blog" },
          { label: "How to Portion Homemade Dog Food", href: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-gray-100 bg-brand-50/40 py-14">
        <Container>
          <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            How to Portion Homemade Dog Food
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Portioning is one of the most important parts of homemade feeding. This guide gives a
            vet-informed framework to set a starting range, monitor response, and adjust safely.
          </p>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Quick answer</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Portion homemade meals as a starting estimate, then adjust gradually using your dog&apos;s
              body condition, weight trend, energy, and stool quality.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 py-12">
        <Container className="space-y-5">
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Step-by-step portion method
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
              <li>Start with an estimated range from your dog&apos;s current weight and activity.</li>
              <li>Measure meals consistently (preferably by weight).</li>
              <li>Track weekly body condition and stool quality.</li>
              <li>Adjust slowly and reassess after 1 to 2 weeks.</li>
            </ol>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Tools that can help
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Use the{" "}
              <Link href="/tools/dog-food-calculator" className="font-semibold text-brand-700">
                dog food calculator
              </Link>{" "}
              for an initial estimate and the{" "}
              <Link href="/tools/probiotic-calculator" className="font-semibold text-brand-700">
                probiotic calculator
              </Link>{" "}
              for gut-support planning while transitioning meals.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-rose-900">Safety note</h2>
            <p className="mt-3 text-sm leading-7 text-rose-900">
              Educational only. Portion guidance should always be cross-checked with label calories
              and adjusted with your veterinarian for long-term use.
            </p>
          </article>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-brand-50/40 py-12">
        <Container>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/vet-approved-homemade-dog-food-recipes" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Main homemade dog food guide</Link>
            <Link href="/tools/dog-food-calculator" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Dog food calculator</Link>
            <Link href="/tools/puppy-feeding-schedule" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Puppy feeding schedule</Link>
            <Link href="/contact" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Contact Pawbiotics</Link>
            <Link href="/vets/houston-tx" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Houston vets</Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container>
          <FaqAccordionClient items={faqs} />
        </Container>
      </section>
    </>
  );
}
