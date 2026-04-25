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
      "Homemade plans can work well for large dogs when they are balanced and reviewed regularly. Large breeds can drift into overfeeding without obvious day-to-day changes, so trend tracking matters. Use measured portions, monthly body condition checks, and ingredient consistency. Reassess any plan when activity, age, or stool quality shifts.",
  },
  {
    question: "Why do large dogs need different feeding planning?",
    answer:
      "Large-breed dogs often need slower, more deliberate feeding adjustments than smaller dogs. A small daily calorie surplus can add up and stress joints over months. Their planning should combine measured portions, controlled treat intake, and regular condition reviews. This approach supports steadier mobility and long-term comfort.",
  },
  {
    question: "How does weight gain affect large dogs?",
    answer:
      "Even moderate excess weight can increase mechanical load on hips, knees, and spine. You may notice shorter stamina, slower recovery, or subtle mobility changes first. Preventing gradual overfeeding is often more effective than trying to correct a large gain later. Keep weekly trends visible so action can happen early.",
  },
  {
    question: "Why are calcium and phosphorus important in large-breed homemade diets?",
    answer:
      "Calcium and phosphorus balance is especially important for bone and structural support in larger dogs, particularly while growing. Homemade recipes can look balanced but still miss mineral targets. That is why vet-reviewed balancing is important before long-term use. If growth or mobility concerns exist, ask for a more detailed nutrition review.",
  },
  {
    question: "How often should large dogs eat homemade meals?",
    answer:
      "Many adult large dogs do well with two measured meals per day because it supports routine and appetite control. Puppies, working dogs, or dogs with specific conditions may need different frequency. Keep feeding times consistent and avoid late-night extras that inflate calories. Adjust schedule only after reviewing stool and energy response.",
  },
  {
    question: "How can I monitor body condition at home?",
    answer:
      "Check for a visible waist from above, a gentle abdominal tuck from the side, and ribs that are easy to feel with light pressure. Pair this with weekly scale checks so visual impressions are supported by numbers. If condition is drifting, make small changes and recheck in 10 to 14 days. Consistency beats frequent dramatic adjustments.",
  },
  {
    question: "When should I involve a veterinarian?",
    answer:
      "Ask your veterinarian before major recipe changes and quickly if you notice limping, recurring GI issues, rapid weight shifts, or reduced stamina. Large dogs can mask discomfort until strain builds. A timely review can prevent prolonged mismatch between intake and needs. Bring your recipe details and meal weights to the appointment.",
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
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Last updated: April 2026
          </p>
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

          <article className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Real Feeding Example</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              <span className="font-semibold">Example dog:</span> 78 lb, 3-year-old Labrador,
              moderate-to-high activity. <span className="font-semibold">Daily intake:</span> two
              measured homemade meals with lean protein base, structured carb portion, and controlled
              treat allowance. This works because waist remains visible, joints tolerate daily exercise,
              and monthly weight trend stays in target range.
            </p>
          </article>

          <article className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              How to Apply This in Real Life
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Step 1: Start from a conservative large-breed portion estimate.</li>
              <li>Step 2: Split into two measured daily meals with consistent timing.</li>
              <li>Step 3: Track body condition and mobility signs every 2 to 4 weeks.</li>
              <li>
                Step 4: If drift appears, refine with the{" "}
                <Link href="/blog/how-to-portion-homemade-dog-food" className="font-semibold text-brand-700">
                  portion homemade dog food
                </Link>{" "}
                method.
              </li>
              <li>
                Step 5: Align final plan with core{" "}
                <Link href="/blog/vet-approved-homemade-dog-food-recipes" className="font-semibold text-brand-700">
                  homemade dog food recipes
                </Link>{" "}
                guidance and veterinary review.
              </li>
            </ol>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Comparison Table: Small vs Large Dog Planning
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Planning point</th>
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Small dog</th>
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Large dog</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Calorie drift impact</td>
                    <td className="border border-gray-200 px-3 py-2">Visible faster in short term</td>
                    <td className="border border-gray-200 px-3 py-2">Can accumulate subtly over months</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Joint load concern</td>
                    <td className="border border-gray-200 px-3 py-2">Moderate depending on breed</td>
                    <td className="border border-gray-200 px-3 py-2">Higher priority in most cases</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Monitoring cadence</td>
                    <td className="border border-gray-200 px-3 py-2">Regular checks helpful</td>
                    <td className="border border-gray-200 px-3 py-2">Structured monthly checks recommended</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="rounded-2xl border border-lime-100 bg-lime-50/60 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Quick Checklist</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700">
              <li>✔ Portion measured by routine, not guess</li>
              <li>✔ Stool pattern remains predictable</li>
              <li>✔ Energy and mobility are stable</li>
              <li>✔ Weight trend remains within target</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">What if...</h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-gray-700">
              <p>
                <span className="font-semibold">What if my dog refuses food?</span> Check meal
                temperature, simplify ingredients, and avoid rotating recipes too quickly.
              </p>
              <p>
                <span className="font-semibold">What if weight increases?</span> Reduce calories in
                small steps and cross-check with{" "}
                <Link href="/blog/how-much-homemade-dog-food-should-i-feed-my-dog" className="font-semibold text-brand-700">
                  how much to feed your dog
                </Link>{" "}
                planning.
              </p>
              <p>
                <span className="font-semibold">What if diarrhea starts?</span> Return to a simpler
                formula, hydrate carefully, and call your veterinarian if symptoms persist.
              </p>
            </div>
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
