import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";
import FaqAccordionClient from "../vet-approved-homemade-dog-food-recipes/FaqAccordionClient";

const PAGE_URL =
  "https://pawbiotics.us/blog/vet-approved-homemade-dog-food-recipes-for-large-dogs";

export const metadata: Metadata = {
  title: "Vet Approved Homemade Dog Food Recipes for Large Dogs | Pawbiotics",
  description:
    "Learn vet-informed homemade dog food guidance for large dogs, including portion control, growth-safe feeding practices, and practical meal planning.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vet Approved Homemade Dog Food Recipes for Large Dogs | Pawbiotics",
    description:
      "Learn vet-informed homemade dog food guidance for large dogs, including portion control, growth-safe feeding practices, and practical meal planning.",
    url: PAGE_URL,
    type: "article",
  },
};

const faqs: FAQItem[] = [
  {
    question: "Are homemade diets safe for large dogs?",
    answer:
      "They can be safe when balanced and monitored carefully. Large and giant breeds usually need tighter calorie and growth tracking than smaller dogs.",
  },
  {
    question: "Why is portion control important for large breeds?",
    answer:
      "Large breeds can gain weight quickly when portions are too generous. Slower, controlled adjustments support better long-term body condition and mobility.",
  },
  {
    question: "Do large dogs need different recipe planning?",
    answer:
      "Yes, often. Ingredient balance, calorie density, and feeding frequency may need to be tailored more carefully for larger body size and growth pattern.",
  },
  {
    question: "Can I use one homemade recipe forever?",
    answer:
      "Not usually. Most dogs benefit from periodic review and adjustments as activity, age, and body condition change over time.",
  },
  {
    question: "When should I involve a veterinarian?",
    answer:
      "Before major diet changes and whenever your dog has rapid weight shifts, digestive issues, joint concerns, or chronic health conditions.",
  },
];

export default function VetApprovedHomemadeDogFoodRecipesForLargeDogsPage() {
  return (
    <>
      <ArticleSchema
        headline="Vet Approved Homemade Dog Food Recipes for Large Dogs"
        description="Vet-informed homemade feeding strategies for large dogs."
        pageUrl={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://pawbiotics.us/" },
          { label: "Blog", href: "https://pawbiotics.us/blog" },
          { label: "Vet Approved Homemade Dog Food Recipes for Large Dogs", href: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-gray-100 bg-brand-50/40 py-14">
        <Container>
          <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Vet Approved Homemade Dog Food Recipes for Large Dogs
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Large dogs can thrive on homemade meals when portions and nutrient balance are managed
            carefully. This guide shares vet-informed planning points for safer long-term feeding.
          </p>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Quick answer</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Large dogs usually need more precise portion control, slower calorie changes, and
              consistent monitoring to avoid overfeeding and unnecessary joint stress.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 py-12">
        <Container className="space-y-5">
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Meal planning priorities</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
              <li>Keep portions consistent and measured</li>
              <li>Use balanced protein/carb/fat ratios from vet-informed templates</li>
              <li>Track body condition monthly, not just appetite</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Portion adjustment strategy</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Use a conservative starting range, then make small adjustments every 1-2 weeks. For
              quick planning support, try the{" "}
              <Link href="/tools/dog-food-calculator" className="font-semibold text-brand-700">
                dog food calculator
              </Link>{" "}
              before finalizing with your veterinarian.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-rose-900">Safety reminder</h2>
            <p className="mt-3 text-sm leading-7 text-rose-900">
              Educational only. Large-breed nutrition should be personalized with veterinary input,
              especially during growth or weight changes.
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
