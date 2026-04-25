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
      "They can be safe when properly balanced and reviewed over time. Large dogs need tighter calorie control, structured monitoring, and regular plan updates as body condition changes.",
  },
  {
    question: "Why do large dogs need different feeding planning?",
    answer:
      "Large-breed dogs can gain or lose body condition gradually without obvious visual change. Their meal planning should include measured portions, growth-safe adjustments, and frequent rechecks.",
  },
  {
    question: "How does weight gain affect large dogs?",
    answer:
      "Extra weight often increases load on hips, knees, and spine. Preventing gradual overfeeding is one of the most practical ways to support long-term comfort and mobility.",
  },
  {
    question: "Why are calcium and phosphorus important in large-breed homemade diets?",
    answer:
      "Calcium and phosphorus balance matters for bone support, especially in large-breed growth periods. Homemade plans should be reviewed so mineral ratios are not unintentionally off.",
  },
  {
    question: "How often should large dogs eat homemade meals?",
    answer:
      "Many adult large dogs do well with two measured meals daily. Puppies and high-needs dogs may require different frequency based on veterinary guidance.",
  },
  {
    question: "How can I monitor body condition at home?",
    answer:
      "Check for a visible waist from above, a gentle abdominal tuck from the side, and easy rib feel without pressing hard. Review these signs monthly with weight trend notes.",
  },
  {
    question: "When should I involve a veterinarian?",
    answer:
      "Before major diet changes, and anytime you notice limping, rapid weight shifts, recurring GI symptoms, or low stamina.",
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
          <article className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Why large dogs need a different feeding strategy
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Large dogs often look stable even when calories drift too high. That is why structured
              portion measurement, regular weigh-ins, and body condition checks are more important than
              feeding by appetite alone. For a broader foundation, review the main{" "}
              <Link href="/blog/vet-approved-homemade-dog-food-recipes" className="font-semibold text-brand-700">
                homemade dog food recipes
              </Link>{" "}
              page first.
            </p>
          </article>

          <section className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900">Joint support considerations</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li>Keep body condition lean to reduce long-term joint load.</li>
                <li>Avoid frequent high-calorie extras that push weight up slowly.</li>
                <li>Discuss mobility-support nutrients with your veterinarian when needed.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900">Calorie and mineral caution</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li>Calorie density varies by recipe, even when portions look similar.</li>
                <li>Calcium/phosphorus imbalance can be a risk in unreviewed homemade plans.</li>
                <li>Use vet-reviewed balancing steps before long-term feeding.</li>
              </ul>
            </article>
          </section>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Large-breed recipe examples</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-900">Lean turkey + rice + zucchini</p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Simple low-irritation base for dogs needing predictable digestion.
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-900">Chicken + sweet potato + green beans</p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Practical for measured portions with moderate fiber support.
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-900">Beef + pumpkin + oats (vet-reviewed)</p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Example framework when chicken is not ideal for a specific dog.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-sky-100 bg-sky-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Feeding frequency and monitoring routine
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Most adult large dogs do well on two measured meals daily. Reassess body condition every
              2 to 4 weeks, track stool quality, and use the{" "}
              <Link href="/tools/dog-food-calculator" className="font-semibold text-brand-700">
                dog food calculator
              </Link>{" "}
              for estimate checks before discussing updates with your veterinarian. If portions keep
              drifting, use our{" "}
              <Link href="/blog/how-to-portion-homemade-dog-food" className="font-semibold text-brand-700">
                portion homemade dog food
              </Link>{" "}
              walkthrough for tighter control.
            </p>
          </article>

          <article className="rounded-2xl border border-violet-100 bg-violet-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Key takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Large dogs need slower, measured calorie adjustments.</li>
              <li>Joint health is closely tied to body condition management.</li>
              <li>Calcium/phosphorus balance should be reviewed in homemade plans.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Common mistakes</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Increasing portions too quickly after high-activity days.</li>
              <li>Skipping regular body condition checks because appetite seems normal.</li>
              <li>Using unbalanced recipes long-term without professional review.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-rose-900">When to call a vet</h2>
            <p className="mt-3 text-sm leading-7 text-rose-900">
              Ask your veterinarian if your large dog shows limping, decreased stamina, repeated GI
              symptoms, or noticeable weight shifts. This article is educational and should not replace
              individualized veterinary planning.
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
            <Link href="/blog/how-to-portion-homemade-dog-food" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">Portion homemade dog food</Link>
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
