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
      "Use a framework rather than a fixed cup amount: estimate a start point, verify recipe calories, and adjust from trend data. Two dogs with the same body weight can still need different intake based on activity and metabolism. Reassess weekly during transitions and monthly after stabilization. Treat early numbers as drafts, not permanent targets.",
  },
  {
    question: "Which factors change feeding amount the most?",
    answer:
      "Age, activity level, metabolism, reproductive status, health status, and food calorie density all influence intake. A highly active adult may need a noticeably different amount than a sedentary adult of similar weight. Medication and chronic conditions can also shift appetite and needs. Use these factors together instead of relying on one variable.",
  },
  {
    question: "How can I estimate a safe starting range?",
    answer:
      "Start with a conservative range, split into regular meals, and track stool, appetite, and weekly weight for 7 to 14 days. If response is stable, maintain; if not, adjust in small steps. Avoid making multiple major changes simultaneously. Pair this process with your veterinarian's guidance for long-term reliability.",
  },
  {
    question: "What are common signs of overfeeding?",
    answer:
      "Common signs include gradually reduced waist definition, steady weight gain, lower stamina, and sometimes larger stool volume. Review total intake, including treats and toppers, before changing main meals too aggressively. Small consistent calorie reductions usually work better than abrupt cuts. Recheck condition after 1 to 2 weeks.",
  },
  {
    question: "What are common signs of underfeeding?",
    answer:
      "Underfeeding may show as increasing rib/hip prominence, low energy, persistent hunger cues, and poor recovery after activity. Confirm whether recipe calories are lower than expected before assuming appetite behavior alone. Increase cautiously and monitor stool and weight response. Early correction is easier than catching up after prolonged underfeeding.",
  },
  {
    question: "Can I use calculators for homemade feeding amounts?",
    answer:
      "Yes, calculators are useful starting tools, especially when you need a structured estimate quickly. They become more accurate when paired with real recipe calorie checks and body condition monitoring. Use them as guidance, not as a stand-alone prescription. Confirm long-term feeding decisions with your veterinarian.",
  },
  {
    question: "When should I ask a vet before changing amounts?",
    answer:
      "Ask before major changes and immediately if GI signs persist, weight shifts rapidly, or appetite changes unexpectedly with medication or illness. Veterinary review is also important for puppies, seniors, and dogs with chronic disease. Bring your feeding log for better decision-making. Early intervention reduces trial-and-error time.",
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
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Last updated: April 2026
          </p>
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
          <article className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Framework: estimate homemade feeding amount safely
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Confirm current weight and target body condition.</li>
              <li>Estimate daily needs based on age and activity level.</li>
              <li>Check recipe calorie density before deciding portion size.</li>
              <li>Split meals consistently and monitor response for 1 to 2 weeks.</li>
              <li>Adjust gradually based on trend, not one-day fluctuations.</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              To apply this framework in real life, pair it with our{" "}
              <Link href="/blog/how-to-portion-homemade-dog-food" className="font-semibold text-brand-700">
                portion homemade dog food
              </Link>{" "}
              guide and then confirm your estimate with the{" "}
              <Link href="/tools/dog-food-calculator" className="font-semibold text-brand-700">
                dog food calculator
              </Link>
              .
            </p>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Factors that change how much homemade dog food to feed
            </h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <p className="rounded-xl bg-gray-50 p-3 text-sm leading-6 text-gray-700">
                <span className="font-semibold">Age:</span> puppies and seniors may have different
                needs.
              </p>
              <p className="rounded-xl bg-gray-50 p-3 text-sm leading-6 text-gray-700">
                <span className="font-semibold">Weight and body condition:</span> starting point for
                intake.
              </p>
              <p className="rounded-xl bg-gray-50 p-3 text-sm leading-6 text-gray-700">
                <span className="font-semibold">Activity and metabolism:</span> highly active dogs may
                need more.
              </p>
              <p className="rounded-xl bg-gray-50 p-3 text-sm leading-6 text-gray-700">
                <span className="font-semibold">Food calories:</span> recipe density can vary widely.
              </p>
              <p className="rounded-xl bg-gray-50 p-3 text-sm leading-6 text-gray-700 sm:col-span-2">
                <span className="font-semibold">Health status:</span> chronic conditions and medications
                can shift appetite and energy needs.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Example ranges with safety language
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Example ranges are educational only. A moderately active adult dog may start near a
              mid-range estimate, while a sedentary or weight-loss plan may start lower. Confirm with
              actual recipe calories before locking portions.
            </p>
          </article>

          <section className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900">Signs of overfeeding</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li>Waist becomes harder to see from above</li>
                <li>Weight rises steadily for several weeks</li>
                <li>Lower endurance during walks and play</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900">Signs of underfeeding</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li>Ribs and hips become increasingly prominent</li>
                <li>Persistent hunger behavior and food-seeking</li>
                <li>Low recovery after normal activity</li>
              </ul>
            </article>
          </section>

          <article className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Real Feeding Example</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              <span className="font-semibold">Example dog:</span> 48 lb, 5-year-old neutered mixed
              breed, moderate activity. <span className="font-semibold">Daily intake:</span> two
              measured homemade meals plus a fixed low-calorie treat budget. This works because weight
              remains steady over several weeks, stool quality is consistent, and energy is stable on
              normal walk days.
            </p>
          </article>

          <article className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              How to Apply This in Real Life
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Step 1: Start with a conservative estimate from weight and activity.</li>
              <li>Step 2: Confirm recipe calorie density before locking meal size.</li>
              <li>Step 3: Feed on a stable schedule and track weekly trend data.</li>
              <li>
                Step 4: Refine with the{" "}
                <Link href="/blog/how-to-portion-homemade-dog-food" className="font-semibold text-brand-700">
                  portion homemade dog food
                </Link>{" "}
                process.
              </li>
              <li>
                Step 5: Compare with core{" "}
                <Link href="/blog/vet-approved-homemade-dog-food-recipes" className="font-semibold text-brand-700">
                  homemade dog food recipes
                </Link>{" "}
                guidance and use the{" "}
                <Link href="/tools/dog-food-calculator" className="font-semibold text-brand-700">
                  dog food calculator
                </Link>{" "}
                for estimate checks.
              </li>
            </ol>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Comparison Table: Homemade vs Commercial Feeding
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Category</th>
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Homemade routine</th>
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Commercial routine</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Portion precision</td>
                    <td className="border border-gray-200 px-3 py-2">Depends on measuring habits and recipe consistency</td>
                    <td className="border border-gray-200 px-3 py-2">Often easier to estimate from label guidance</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Ingredient control</td>
                    <td className="border border-gray-200 px-3 py-2">High control for custom needs</td>
                    <td className="border border-gray-200 px-3 py-2">Less custom but simpler day-to-day</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Monitoring need</td>
                    <td className="border border-gray-200 px-3 py-2">Higher tracking importance early on</td>
                    <td className="border border-gray-200 px-3 py-2">Still important, but usually less variable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="rounded-2xl border border-lime-100 bg-lime-50/60 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Quick Checklist</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700">
              <li>✔ Portion measured and logged</li>
              <li>✔ Stool quality remains normal</li>
              <li>✔ Energy remains stable day to day</li>
              <li>✔ Weekly weight trend remains stable</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">What if...</h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-gray-700">
              <p>
                <span className="font-semibold">What if my dog refuses food?</span> Check freshness,
                simplify recipe variation, and avoid introducing multiple new ingredients together.
              </p>
              <p>
                <span className="font-semibold">What if weight increases?</span> Reduce total intake
                in small steps and reassess after 1 to 2 weeks before further changes.
              </p>
              <p>
                <span className="font-semibold">What if diarrhea starts?</span> Return to a simpler
                meal structure, hydrate, and seek veterinary help if symptoms persist or worsen.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-sky-100 bg-sky-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Key takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Use a framework that includes calories, condition, and trend monitoring.</li>
              <li>Adjust portions in small steps and wait long enough to assess changes.</li>
              <li>
                Use the{" "}
                <Link href="/tools/dog-food-calculator" className="font-semibold text-brand-700">
                  dog food calculator
                </Link>{" "}
                for estimates, then personalize with veterinary guidance.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-violet-100 bg-violet-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Common mistakes</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Copying another dog&apos;s feeding amount without considering calories.</li>
              <li>Changing meal size and meal frequency at the same time.</li>
              <li>Ignoring treats and extras when evaluating daily intake.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-rose-900">When to call a vet</h2>
            <p className="mt-3 text-sm leading-7 text-rose-900">
              Contact your veterinarian for persistent vomiting/diarrhea, rapid body condition changes,
              appetite loss, or any concern in dogs with chronic illness. This page is educational and
              not a medical prescription.
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
            <Link href="/blog/how-to-portion-homemade-dog-food" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">Portion homemade dog food</Link>
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
