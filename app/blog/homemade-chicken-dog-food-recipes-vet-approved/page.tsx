import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";
import FaqAccordionClient from "../vet-approved-homemade-dog-food-recipes/FaqAccordionClient";

const PAGE_URL = "https://pawbiotics.us/blog/homemade-chicken-dog-food-recipes-vet-approved";

export const metadata: Metadata = {
  title: "Homemade Chicken Dog Food Recipes Vet Approved | Pawbiotics",
  description:
    "Explore vet-informed homemade chicken dog food recipes with practical prep tips, portion guidance, and safe feeding notes for everyday use.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Homemade Chicken Dog Food Recipes Vet Approved | Pawbiotics",
    description:
      "Explore vet-informed homemade chicken dog food recipes with practical prep tips, portion guidance, and safe feeding notes for everyday use.",
    url: PAGE_URL,
    type: "article",
  },
};

const faqs: FAQItem[] = [
  {
    question: "Are homemade chicken dog food recipes vet approved?",
    answer:
      "Some chicken-based recipes are commonly used as vet-informed starting points, but long-term safety depends on nutritional balance and your dog's specific needs.",
  },
  {
    question: "Can I feed chicken and rice daily?",
    answer:
      "Chicken and rice can be helpful short-term, but many dogs need a broader nutrient profile for daily long-term feeding. Ask your veterinarian before making it a permanent diet.",
  },
  {
    question: "Do I still need supplements with homemade chicken meals?",
    answer:
      "In many cases yes, especially for calcium and micronutrient balance. A licensed veterinarian can help confirm what your recipe may be missing.",
  },
  {
    question: "How should I store homemade chicken dog food?",
    answer:
      "Refrigerate short-term portions and freeze extra portions in measured containers. Safe storage and reheating practices help reduce contamination risk.",
  },
  {
    question: "When should I call my veterinarian?",
    answer:
      "Call your vet for persistent diarrhea, vomiting, low appetite, weight changes, or if your dog has chronic health conditions before diet changes.",
  },
];

export default function HomemadeChickenDogFoodRecipesVetApprovedPage() {
  return (
    <>
      <ArticleSchema
        headline="Homemade Chicken Dog Food Recipes Vet Approved"
        description="Vet-informed homemade chicken dog food guidance with safe prep and feeding notes."
        pageUrl={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://pawbiotics.us/" },
          { label: "Blog", href: "https://pawbiotics.us/blog" },
          { label: "Homemade Chicken Dog Food Recipes Vet Approved", href: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-gray-100 bg-brand-50/40 py-14">
        <Container>
          <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Homemade Chicken Dog Food Recipes Vet Approved
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Chicken-based homemade meals are popular because they are practical, digestible, and easy
            to prepare. This guide uses vet-informed principles and safety-first feeding language to
            help you build a better routine.
          </p>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Quick answer</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Chicken recipes can be a useful starting structure, but they should still be balanced,
              portioned for your specific dog, and reviewed with your veterinarian for long-term use.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 py-12">
        <Container className="space-y-5">
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Practical chicken recipe framework
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
              <li>Cooked lean chicken as primary protein</li>
              <li>Digestible carb source (rice or similar)</li>
              <li>Cooked vegetables for fiber diversity</li>
              <li>Vet-reviewed calcium and micronutrient support</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Portioning and transition tips
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Start with an estimated range, then adjust slowly based on body condition and stool
              response. For planning support, use the{" "}
              <Link href="/tools/dog-food-calculator" className="font-semibold text-brand-700">
                dog food calculator
              </Link>{" "}
              and discuss your final plan with a veterinarian.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-rose-900">Safety reminder</h2>
            <p className="mt-3 text-sm leading-7 text-rose-900">
              Educational only. Avoid onions, garlic, heavy seasoning, and cooked bones. If symptoms
              worsen, contact a licensed veterinarian immediately.
            </p>
          </article>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-brand-50/40 py-12">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Helpful links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
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
