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
      "Use a structured process: estimate a starting amount, measure by weight, monitor body condition weekly, and adjust gradually. Small controlled changes are easier to evaluate than large jumps.",
  },
  {
    question: "Why are cups less accurate than weight?",
    answer:
      "One cup can hold very different calories depending on moisture and ingredient density. A food scale gives more consistent daily intake and better trend tracking.",
  },
  {
    question: "How often should I adjust homemade portions?",
    answer:
      "Most dogs do well with reevaluation every 1 to 2 weeks during transitions and monthly once stable. Adjust in small steps and reassess before changing again.",
  },
  {
    question: "What is body condition scoring in simple terms?",
    answer:
      "It is a practical visual-and-touch check: look for a waist from above, a slight abdominal tuck from the side, and ribs that are easy to feel but not prominently visible.",
  },
  {
    question: "Can I use example scenarios to guide portion decisions?",
    answer:
      "Yes, scenarios help you choose safer adjustments. For example, stable stool with mild weight gain may suggest a small calorie reduction, while low energy with weight loss may suggest careful increase.",
  },
  {
    question: "What should I track during a transition checklist?",
    answer:
      "Track meal weight, stool quality, appetite, energy, treats, and weekly body weight. Logging these together helps you see patterns and avoid guesswork.",
  },
  {
    question: "When should I ask a vet about portioning?",
    answer:
      "Ask your veterinarian early if your dog has chronic digestive issues, major weight changes, low appetite, or underlying medical conditions.",
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
          <article className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Step-by-step homemade portioning method
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Estimate a starting daily amount using weight, age, and activity.</li>
              <li>Measure each meal by grams, not just cup volume.</li>
              <li>Split into consistent meal times and avoid random extras.</li>
              <li>Track stool, appetite, energy, and weekly body condition score.</li>
              <li>Adjust in small increments and hold changes for 7 to 14 days.</li>
            </ol>
          </article>

          <section className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900">
                Why weight-based feeding beats cup estimates
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Cup scoops can vary significantly by ingredient texture and moisture. Weighing food
                makes adjustments precise and helps you connect portion changes to outcomes.
              </p>
            </article>
            <article className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900">
                Body condition scoring made beginner-friendly
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Check your dog from above and from the side: you want a visible waist and gentle tuck,
                with ribs that are easy to feel but not sharply visible.
              </p>
            </article>
          </section>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Transition tracking checklist
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
              <li>Daily meal weight in grams</li>
              <li>Stool consistency and frequency</li>
              <li>Appetite score and energy level</li>
              <li>Treats and table-food extras</li>
              <li>Weekly scale weight and body condition notes</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-sky-100 bg-sky-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Example portioning scenarios
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-gray-700">
              <p>
                <span className="font-semibold">Scenario A:</span> Stool is stable but weight rises
                steadily. Reduce total daily grams slightly and reassess in 10 days.
              </p>
              <p>
                <span className="font-semibold">Scenario B:</span> Weight drops and hunger increases.
                Increase portions modestly, then review activity and treats before further changes.
              </p>
              <p>
                <span className="font-semibold">Scenario C:</span> Appetite is inconsistent after a
                recipe switch. Slow the transition and simplify ingredients. If you are unsure about
                daily targets, compare this with our{" "}
                <Link href="/blog/how-much-homemade-dog-food-should-i-feed-my-dog" className="font-semibold text-brand-700">
                  how much to feed your dog
                </Link>{" "}
                guide.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Key takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Portioning works best as a repeatable process, not a one-time guess.</li>
              <li>Weight-based measurement improves consistency and safety.</li>
              <li>Track trends over time before making major changes.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Common mistakes</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Changing portions daily based only on one meal response.</li>
              <li>Ignoring calories from treats and toppers.</li>
              <li>Switching recipes and portion size at the same time.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-rose-900">When to call a vet</h2>
            <p className="mt-3 text-sm leading-7 text-rose-900">
              Call your veterinarian if your dog has rapid weight changes, repeated vomiting or
              diarrhea, notable fatigue, or poor appetite during portion adjustments. For starting
              estimates, use the{" "}
              <Link href="/tools/dog-food-calculator" className="font-semibold text-rose-900 underline">
                dog food calculator
              </Link>{" "}
              and review your plan with a professional.
            </p>
          </article>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-brand-50/40 py-12">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Related guides</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/blog/vet-approved-homemade-dog-food-recipes" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">Homemade dog food recipes</Link>
            <Link href="/blog/homemade-chicken-dog-food-recipes-vet-approved" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">Chicken homemade recipes</Link>
            <Link href="/blog/vet-approved-homemade-dog-food-recipes-for-large-dogs" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">Large dog homemade recipes</Link>
            <Link href="/blog/how-much-homemade-dog-food-should-i-feed-my-dog" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">How much to feed your dog</Link>
          </div>

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
