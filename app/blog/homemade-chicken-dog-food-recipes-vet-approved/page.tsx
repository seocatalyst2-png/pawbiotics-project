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
      "Many homemade chicken dog food recipes are used as vet-informed starting points, but no single recipe is universally appropriate. Safety depends on calorie balance, mineral balance, your dog's health history, and regular monitoring.",
  },
  {
    question: "Can I feed chicken and rice daily?",
    answer:
      "Chicken and rice is often useful short-term for digestive rest, but daily long-term feeding may be incomplete without additional nutrients. Ask your veterinarian before using it as a permanent plan.",
  },
  {
    question: "When is chicken not ideal for a dog?",
    answer:
      "Chicken may not be ideal for dogs with suspected poultry sensitivity, chronic itchy skin linked to diet, or repeated GI flares after chicken meals. In those cases, your veterinarian may suggest a different protein trial.",
  },
  {
    question: "What safety ingredients should I avoid in chicken recipes?",
    answer:
      "Avoid onions, garlic, heavy salt, spicy seasoning, xylitol-containing products, and cooked bones. Keep ingredients simple and measured so digestive response is easier to track.",
  },
  {
    question: "How long can homemade chicken food stay in the fridge?",
    answer:
      "Use refrigerated portions within 2 to 3 days and freeze the rest in pre-portioned containers. Labeling with date and meal size reduces waste and improves consistency.",
  },
  {
    question: "How should I transition to homemade chicken meals?",
    answer:
      "Most dogs do better with a gradual transition over 5 to 7 days. Start with a small mix-in amount, then increase only if stool quality, appetite, and energy remain stable.",
  },
  {
    question: "When should I call my veterinarian during the transition?",
    answer:
      "Call your vet for vomiting, persistent diarrhea, appetite drop lasting more than a day, or any sudden behavior change. Ask early if your dog has chronic disease, is a puppy, or is a senior.",
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
          <article className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Why chicken is commonly used</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Chicken is widely used because it is easy to cook, easy to portion, and often tolerated
              by dogs during simple diet transitions. It also pairs well with digestible carbs and
              fiber-rich ingredients, making it practical for beginner meal prep. If you are building
              a full routine, start with our main{" "}
              <Link href="/blog/vet-approved-homemade-dog-food-recipes" className="font-semibold text-brand-700">
                homemade dog food recipes
              </Link>{" "}
              guide and then tailor from there.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Lean protein source that can be batch cooked</li>
              <li>Works with rice, sweet potato, and pumpkin bases</li>
              <li>Simple flavor profile for dogs with sensitive digestion</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">When chicken may not be ideal</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              If your dog has recurring itchiness, ear irritation, or GI flare-ups after poultry meals,
              chicken may not be the best long-term protein. Work with your veterinarian on a trial
              period before committing to a routine.
            </p>
          </article>

          <section className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900">Chicken and rice variation</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                A gentle starter option for short-term transitions: cooked lean chicken, plain white
                rice, and a small amount of cooked carrots.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900">
                Chicken and sweet potato variation
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Useful for dogs that do well with slightly higher fiber: chicken, mashed sweet potato,
                and cooked green beans in measured portions.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-gray-900">Chicken and pumpkin variation</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Helpful during stool quality monitoring: chicken with plain pumpkin puree and a gentle
                carb source, adjusted slowly based on digestive response.
              </p>
            </article>
          </section>

          <article className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Ingredient safety notes</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Cook chicken thoroughly and remove all bones and skin-heavy portions.</li>
              <li>Skip onions, garlic, heavy seasoning blends, and high-sodium broth.</li>
              <li>Use plain pumpkin puree only, not sweetened pie filling.</li>
              <li>Add supplements only with vet-reviewed guidance for balance.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-sky-100 bg-sky-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Transition, storage, and reheating tips
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Transition gradually over 5 to 7 days and monitor stool daily.</li>
              <li>Store 2 to 3 days of meals in the fridge and freeze the rest by portion size.</li>
              <li>Reheat gently until warm, not hot, and avoid repeated re-heating cycles.</li>
              <li>
                Use the{" "}
                <Link href="/tools/dog-food-calculator" className="font-semibold text-brand-700">
                  dog food calculator
                </Link>{" "}
                to estimate starting amounts before finalizing with your vet.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-violet-100 bg-violet-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Key takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Homemade chicken dog food recipes are practical but still need nutritional balance.</li>
              <li>Use variation recipes as frameworks, not fixed prescriptions.</li>
              <li>Track appetite, stool, and weight trend during transitions.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Common mistakes</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li>Using one recipe for months without reviewing body condition.</li>
              <li>Adding unmeasured treats that distort calorie totals.</li>
              <li>Relying on visual cup estimates instead of measured portions.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-rose-900">When to call a vet</h2>
            <p className="mt-3 text-sm leading-7 text-rose-900">
              Contact your veterinarian for repeated vomiting, persistent diarrhea, appetite drop,
              ongoing itch/skin symptoms, or unexplained weight change while using homemade chicken
              recipes. This guide is educational only and not a diagnosis or treatment plan.
            </p>
          </article>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-brand-50/40 py-12">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Related guides</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/blog/vet-approved-homemade-dog-food-recipes" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">Homemade dog food recipes</Link>
            <Link href="/blog/vet-approved-homemade-dog-food-recipes-for-large-dogs" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">Large dog homemade recipes</Link>
            <Link href="/blog/how-to-portion-homemade-dog-food" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">Portion homemade dog food</Link>
            <Link href="/blog/how-much-homemade-dog-food-should-i-feed-my-dog" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">How much to feed your dog</Link>
          </div>

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
