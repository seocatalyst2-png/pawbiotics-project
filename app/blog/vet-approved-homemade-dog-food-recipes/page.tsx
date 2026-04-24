import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FAQ from "@/components/seo/FAQ";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";

const PAGE_URL = "https://pawbiotics.us/blog/vet-approved-homemade-dog-food-recipes";

export const metadata: Metadata = {
  title: "Vet Approved Homemade Dog Food Recipes | Safe & Balanced Meals for Dogs",
  description:
    "Explore vet-informed homemade dog food recipes, including chicken-based meals, large breed diets, and safe feeding tips for balanced nutrition.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Vet Approved Homemade Dog Food Recipes | Safe & Balanced Meals for Dogs",
    description:
      "Explore vet-informed homemade dog food recipes, including chicken-based meals, large breed diets, and safe feeding tips for balanced nutrition.",
    url: PAGE_URL,
    type: "article",
  },
};

const faqs: FAQItem[] = [
  {
    question: "Are homemade dog food recipes vet approved?",
    answer:
      "Some homemade recipes are commonly recommended by veterinarians as starting frameworks, but true suitability depends on your dog's age, size, health conditions, and calorie needs. A licensed veterinarian should review any long-term homemade plan.",
  },
  {
    question: "Is homemade dog food better than kibble?",
    answer:
      "Not automatically. Both homemade and commercial diets can work when balanced correctly. Homemade meals can offer ingredient control, but they also require careful planning to avoid nutrient gaps.",
  },
  {
    question: "What is the best protein for homemade dog food?",
    answer:
      "There is no single best protein for every dog. Chicken, turkey, beef, and fish can all be useful options depending on tolerance, allergy history, and veterinary advice.",
  },
  {
    question: "Can I feed my dog chicken and rice every day?",
    answer:
      "Chicken and rice can be used short-term in specific situations, but as a long-term daily diet it may be incomplete without additional nutrients. Ask your veterinarian before using it as a regular meal plan.",
  },
  {
    question: "How much homemade dog food should I feed my dog?",
    answer:
      "Use weight, body condition, activity level, and food calorie density to estimate a starting range. Portions should be adjusted slowly and monitored over time. Our dog food calculator can help you start.",
  },
  {
    question: "Do I need supplements in homemade dog food?",
    answer:
      "In many cases, yes. Homemade diets often need targeted vitamin and mineral support to remain balanced long-term. A veterinarian can recommend the right approach for your dog.",
  },
  {
    question: "Are homemade diets safe for large dogs?",
    answer:
      "They can be, but large and giant breeds need careful nutrient and calorie management. Growth and joint support considerations are especially important, so veterinary oversight is strongly recommended.",
  },
  {
    question: "How do vets feel about homemade dog food?",
    answer:
      "Many veterinarians support homemade feeding when it is balanced, monitored, and customized. Most concerns come from incomplete recipes, inconsistent portions, or missing nutrient coverage.",
  },
  {
    question: "Can puppies eat homemade dog food?",
    answer:
      "Puppies have higher and more sensitive growth requirements, so homemade diets should be designed very carefully. Always consult a veterinarian before feeding puppies homemade meals regularly.",
  },
  {
    question: "When should I consult a veterinarian?",
    answer:
      "Consult a vet before switching diet, and immediately if your dog has chronic digestive symptoms, unexplained weight changes, low appetite, persistent diarrhea, or known medical conditions.",
  },
];

const recipes = [
  {
    title: "Homemade chicken dog food recipe (vet-informed)",
    ingredients: [
      "Lean cooked chicken (boneless, skinless)",
      "Cooked white or brown rice",
      "Steamed carrots and green beans",
      "Small amount of dog-safe oil (if advised)",
    ],
    steps: [
      "Cook chicken fully and shred into small pieces.",
      "Prepare rice without added salt or seasoning.",
      "Steam vegetables until soft and chop finely.",
      "Combine ingredients and cool before serving.",
    ],
    feedingNote:
      "Use as a general starting meal structure and adjust portions based on your dog's size, weight trend, and food-label/vet guidance.",
    safetyNote:
      "Do not include onion, garlic, heavy seasoning, or cooked bones. Ask your veterinarian about long-term nutrient balance.",
  },
  {
    title: "Ground turkey + rice recipe",
    ingredients: [
      "Lean ground turkey",
      "Cooked rice",
      "Chopped zucchini or pumpkin",
      "Water for moisture and texture",
    ],
    steps: [
      "Cook turkey thoroughly and drain excess fat.",
      "Cook rice separately and allow it to cool.",
      "Steam vegetables and mix with turkey and rice.",
      "Add a little water if mixture is too dry.",
    ],
    feedingNote:
      "This can be a useful rotation option for dogs that tolerate turkey well, but calorie density still varies by ingredient ratios.",
    safetyNote:
      "Portion gradually during transitions. Monitor stool quality and appetite during the first week.",
  },
  {
    title: "Beef + vegetable recipe",
    ingredients: [
      "Lean ground beef",
      "Cooked sweet potato or oats",
      "Steamed spinach or peas",
      "Optional vet-recommended supplement support",
    ],
    steps: [
      "Brown beef fully and remove excess grease.",
      "Cook carbohydrate base until soft.",
      "Steam vegetables and chop into small pieces.",
      "Mix all ingredients evenly and cool before feeding.",
    ],
    feedingNote:
      "Beef-based meals may be higher in calories depending on cut, so start with conservative portions and reassess weekly.",
    safetyNote:
      "Fat level matters. Dogs with sensitive digestion may need lower-fat options under veterinary guidance.",
  },
  {
    title: "Large breed dog recipe (adjusted portions)",
    ingredients: [
      "Lean turkey or chicken",
      "Cooked rice or barley",
      "Steamed low-fiber vegetables",
      "Plenty of water for hydration support",
    ],
    steps: [
      "Cook protein fully and cut into manageable pieces.",
      "Cook grain source until digestible.",
      "Steam vegetables and combine with protein and grain.",
      "Divide into measured meal containers for consistency.",
    ],
    feedingNote:
      "Large breeds often benefit from careful portion consistency and slower calorie adjustments to protect long-term body condition.",
    safetyNote:
      "For large dogs, rapid weight gain can increase joint stress. Recheck portions with your veterinarian regularly.",
  },
];

export default function VetApprovedHomemadeDogFoodRecipesPage() {
  return (
    <>
      <ArticleSchema
        headline="Vet Approved Homemade Dog Food Recipes"
        description="Vet-informed homemade dog food recipes and safe feeding guidance for balanced daily meals."
        pageUrl={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://pawbiotics.us/" },
          { label: "Blog", href: "https://pawbiotics.us/blog" },
          { label: "Vet Approved Homemade Dog Food Recipes", href: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/40 to-white py-14">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-700">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog" className="hover:text-brand-700">
                  Blog
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-gray-700">Vet Approved Homemade Dog Food Recipes</li>
            </ol>
          </nav>

          <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Vet Approved Homemade Dog Food Recipes
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Many pet owners choose homemade food for ingredient transparency, flexibility, and better
            control over what goes into their dog&apos;s bowl. The key is nutritional balance. This
            guide shares vet-informed recipe patterns and practical feeding tips, but every long-term
            plan should be reviewed with your veterinarian.
          </p>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Are homemade dog food recipes vet approved?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Some homemade recipes are commonly recommended by veterinarians as starting points. To
              be safe long-term, meals must be balanced, adjusted for the individual dog, and
              reviewed by a licensed veterinarian.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 py-12">
        <Container className="space-y-5">
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Why pet owners choose homemade dog food
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Homemade diets can help pet owners understand ingredients more clearly and avoid foods
              their dog does not tolerate well. They can also support routine consistency for dogs
              with sensitive digestion.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              What makes a dog food recipe &quot;vet approved&quot;
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
              <li>Balanced nutrients for long-term feeding, not just short-term relief diets</li>
              <li>Portions adjusted for body condition, age, and activity level</li>
              <li>Safe preparation and ingredient handling practices</li>
              <li>Veterinary review for ongoing monitoring and updates</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Common mistakes in homemade dog food
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
              <li>Using one recipe for every dog regardless of size or condition</li>
              <li>Skipping long-term nutrient planning or supplement discussion</li>
              <li>Overfeeding calorie-dense ingredients without portion tracking</li>
              <li>Introducing major diet changes too quickly</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Nutritional basics</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Balanced homemade meals generally need protein, healthy fats, digestible carbohydrate
              sources, and micronutrient support. The exact ratio varies by dog, so avoid assuming
              one universal formula works for all.
            </p>
          </article>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-brand-50/30 py-12">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Recipe ideas</h2>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {recipes.map((recipe) => (
              <article
                key={recipe.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-gray-900">{recipe.title}</h3>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Ingredients
                  </p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-600">
                    {recipe.ingredients.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Preparation steps
                  </p>
                  <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-gray-600">
                    {recipe.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-700">
                  <span className="font-semibold text-gray-900">Feeding note:</span> {recipe.feedingNote}
                </p>
                <p className="mt-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-6 text-amber-900">
                  <span className="font-semibold">Safety note:</span> {recipe.safetyNote}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 py-12">
        <Container className="space-y-5">
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Homemade chicken dog food recipes vet approved
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Chicken-based homemade recipes are popular because they are simple and often easy to
              digest. They should still be part of a balanced plan and reviewed by a veterinarian.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Vet approved homemade dog food recipes for large dogs
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Large dogs may need tighter calorie and growth monitoring. Use measured portions and
              reassess body condition routinely to avoid gradual overfeeding.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              How to portion homemade dog food
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Start with a conservative estimated range, then adjust slowly based on weight trend,
              stool quality, appetite, and activity. Recheck every 1-2 weeks during transitions.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              How much homemade dog food should I feed my dog
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Use your dog&apos;s weight, body condition, and activity to estimate a starting amount.
              Calories vary by recipe, so portioning should be paired with brand/ingredient calorie
              checks and veterinary guidance.
            </p>
          </article>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-brand-50/40 py-12">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Helpful links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
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
            <Link
              href="/tools/probiotic-calculator"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Probiotic Calculator
            </Link>
            <Link
              href="/dogs/probiotics/digestion"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Dog Digestion Support
            </Link>
            <Link
              href="/health-conditions/diarrhea"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Diarrhea Condition Guide
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Contact Pawbiotics
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-brand-50/40 py-12">
        <Container>
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Talk to a local vet before changing your dog&apos;s diet
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/vets/houston-tx"
                className="rounded-full border border-gray-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 hover:border-brand-300"
              >
                Houston vets
              </Link>
              <Link
                href="/vets/dallas-tx"
                className="rounded-full border border-gray-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 hover:border-brand-300"
              >
                Dallas vets
              </Link>
              <Link
                href="/vets/austin-tx"
                className="rounded-full border border-gray-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 hover:border-brand-300"
              >
                Austin vets
              </Link>
              <Link
                href="/vets/miami-fl"
                className="rounded-full border border-gray-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 hover:border-brand-300"
              >
                Miami vets
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container>
          <FAQ items={faqs} />
        </Container>
      </section>
    </>
  );
}
