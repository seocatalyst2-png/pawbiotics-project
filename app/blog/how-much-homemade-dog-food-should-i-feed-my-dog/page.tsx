import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";
import FaqAccordionClient from "../vet-approved-homemade-dog-food-recipes/FaqAccordionClient";

const PAGE_URL = "https://pawbiotics.us/blog/how-much-homemade-dog-food-should-i-feed-my-dog";

export const metadata: Metadata = {
  title: "How Much Homemade Dog Food Should I Feed My Dog | Pawbiotics",
  description:
    "Use this vet-informed guide to estimate how much homemade dog food to feed, with safer starting ranges, monitoring tips, and adjustment guidance.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How Much Homemade Dog Food Should I Feed My Dog | Pawbiotics",
    description:
      "Use this vet-informed guide to estimate how much homemade dog food to feed, with safer starting ranges, monitoring tips, and adjustment guidance.",
    url: PAGE_URL,
    type: "article",
  },
};

const faqs: FAQItem[] = [
  {
    question: "How much homemade dog food should I feed my dog?",
    answer:
      "Use an estimated range based on weight, activity, and body condition, then refine slowly over time. There is no single amount that fits every dog.",
  },
  {
    question: "Why does feeding amount vary so much?",
    answer:
      "Homemade recipes can differ a lot in calorie density, moisture, and ingredient ratios. Even similar-looking meals may deliver very different calories.",
  },
  {
    question: "How fast should I adjust portions?",
    answer:
      "Adjust gradually and reassess after about 1 to 2 weeks. Quick, large changes can make it harder to track what is helping.",
  },
  {
    question: "Should meal frequency change with portion changes?",
    answer:
      "Sometimes. Many dogs do well with stable timing, but meal frequency can be adapted when appetite, digestion, or schedule consistency requires it.",
  },
  {
    question: "When should I ask a vet before feeding changes?",
    answer:
      "Before major changes, and immediately when your dog has persistent GI symptoms, low appetite, or unexplained weight gain/loss.",
  },
  {
    question: "Can I use tools to estimate portions?",
    answer:
      "Yes. Use tools as educational starting points, then confirm with food labels and veterinary advice for a personalized long-term plan.",
  },
];

export default function HowMuchHomemadeDogFoodShouldIFeedMyDogPage() {
  return (
    <>
      <ArticleSchema
        headline="How Much Homemade Dog Food Should I Feed My Dog"
        description="Vet-informed guidance for estimating homemade dog food portions."
        pageUrl={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://pawbiotics.us/" },
          { label: "Blog", href: "https://pawbiotics.us/blog" },
          { label: "How Much Homemade Dog Food Should I Feed My Dog", href: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-gray-100 bg-brand-50/40 py-14">
        <Container>
          <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            How Much Homemade Dog Food Should I Feed My Dog
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Portion questions are one of the biggest homemade feeding challenges. This page gives a
            safer, vet-informed method to estimate a starting range and adjust with confidence.
          </p>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Quick answer</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              There is no universal cup amount. Start with a practical estimated range, then use body
              condition, stool quality, and weight trend to refine portions over time.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 py-12">
        <Container className="space-y-5">
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">A safer portion method</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
              <li>Estimate using current weight and activity level</li>
              <li>Check your recipe&apos;s calorie density</li>
              <li>Track body condition weekly</li>
              <li>Adjust slowly and reassess</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Useful calculators</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Start with the{" "}
              <Link href="/tools/dog-food-calculator" className="font-semibold text-brand-700">
                dog food calculator
              </Link>{" "}
              for feeding estimates, then review schedule consistency with the{" "}
              <Link href="/tools/puppy-feeding-schedule" className="font-semibold text-brand-700">
                puppy feeding schedule tool
              </Link>{" "}
              where relevant.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-rose-900">Safety note</h2>
            <p className="mt-3 text-sm leading-7 text-rose-900">
              Educational only. Homemade portion planning should be reviewed with your veterinarian,
              especially for dogs with chronic digestive or metabolic concerns.
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
