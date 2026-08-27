import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";
import DogFoodCalculatorClient from "./DogFoodCalculatorClient";

const PAGE_URL = "https://pawbiotics.us/tools/dog-food-calculator";

export const metadata: Metadata = {
  title: "Dog Food Calculator by Weight & Age | Daily Calorie & Portion Guide",
  description:
    "Free veterinary dog food calculator. Calculate exact daily calories (RER/MER), cups, grams, and portion-per-meal for puppies, adults, seniors, and weight loss.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Dog Food Calculator by Weight & Age | Daily Calorie & Portion Guide",
    description:
      "Calculate your dog's exact daily caloric needs, food cups, and portion per meal using scientific veterinary RER/MER standards.",
    url: PAGE_URL,
    type: "website",
    siteName: "Pawbiotics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Food Calculator by Weight & Age | Pawbiotics",
    description:
      "Free scientific dog feeding calculator for exact daily calories, cups, and per-meal portions.",
  },
};

const faqs: FAQItem[] = [
  {
    question: "How much food should I feed my dog each day?",
    answer:
      "Daily food amounts depend on your dog's weight, life stage, reproductive status, activity level, and the caloric density (kcal/cup or kcal/can) of the specific food. A standard 30 lb neutered adult dog with moderate activity typically needs around 650 to 750 kcal/day, translating to roughly 1.7 to 2.0 cups of standard dry kibble split into two meals.",
  },
  {
    question: "How do veterinarians calculate a dog's daily calories?",
    answer:
      "Veterinarians use the Resting Energy Requirement (RER) formula: RER = 70 × (Body Weight in kg)^0.75. This is then multiplied by a Maintenance Energy Requirement (MER) factor based on life stage: 1.6 for neutered adults, 1.8 for intact adults, 2.0–3.0 for growing puppies, 1.2–1.4 for seniors, and 1.0 for safe weight loss.",
  },
  {
    question: "How many times a day should a dog eat?",
    answer:
      "Most adult dogs thrive on 2 meals per day spaced 8 to 12 hours apart. Puppies under 6 months need 3 to 4 smaller meals daily to maintain steady blood glucose levels, while toy breeds or dogs prone to hypoglycemia may require 3 frequent meals.",
  },
  {
    question: "How much food should I feed a puppy?",
    answer:
      "Puppies require 2 to 3 times more calories per pound than adult dogs due to rapid skeletal, muscular, and organ development. Feed an AAFCO-approved growth formula and recalculate portions every 1 to 2 weeks as your puppy's weight increases.",
  },
  {
    question: "How many cups of dry food equal one can of wet food?",
    answer:
      "On average, one standard 13.2 oz can of wet dog food contains about 350 to 380 kcal, which is roughly equivalent to 1 cup of standard dry kibble (375 kcal). Wet food contains ~75% water, which is great for hydration but less calorie-dense by volume.",
  },
  {
    question: "How much fresh food or raw food should I feed my dog?",
    answer:
      "Fresh and raw diets usually have a caloric density of 40 to 55 kcal per ounce. A typical feeding guideline is 2% to 3% of an adult dog's ideal body weight per day in fresh food, adjusted for activity level and monitored via weekly weigh-ins.",
  },
  {
    question: "What is the 10% treat rule for dogs?",
    answer:
      "Treats, biscuits, chews, and human food scraps should never make up more than 10% of your dog's total daily calorie budget. The remaining 90% must come from a complete and balanced diet to avoid nutrient deficiencies and obesity.",
  },
  {
    question: "How can I tell if I am feeding my dog too much or too little?",
    answer:
      "Use the Body Condition Score (BCS 1-9): At ideal weight (BCS 4-5), you should easily feel your dog's ribs without a thick fat layer, and see a distinct waist tuck behind the ribs when viewed from above. If ribs protrude, increase food by 10%; if ribs are difficult to feel, reduce portions by 10%.",
  },
  {
    question: "How should I transition my dog to a new food?",
    answer:
      "Always transition foods gradually over 7 to 10 days to prevent gastrointestinal upset: Days 1-2 (25% new, 75% old), Days 3-4 (50% new, 50% old), Days 5-6 (75% new, 25% old), Day 7+ (100% new food). Adding a pet probiotic during transition helps maintain digestive stability.",
  },
  {
    question: "Should I consult a veterinarian before starting a weight loss diet?",
    answer:
      "Yes. Rapid calorie restriction can lead to hepatic lipidosis and nutritional deficiencies. A veterinarian can calculate a safe target weight, recommend a high-fiber therapeutic satiety diet, and rule out underlying metabolic issues like hypothyroidism.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "https://pawbiotics.us/" },
  { label: "Tools", href: "https://pawbiotics.us/tools/dog-food-calculator" },
  { label: "Dog Food Calculator", href: PAGE_URL },
];

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Dog Food & Daily Calorie Calculator",
  description:
    "Scientific canine feeding calculator for estimating daily energy requirements (RER/MER), food cups, grams, and portion-per-meal across all dog life stages.",
  url: PAGE_URL,
  about: {
    "@type": "Thing",
    name: "Canine Nutrition & Feeding Calculations",
  },
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pawbiotics Dog Food & Portion Calculator",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  url: PAGE_URL,
  description:
    "Interactive veterinary dog food calculator estimating daily calories (kcal/day), cups, grams, per-meal servings, treat budget, and water intake.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Resting Energy Requirement (RER) calculation",
    "Maintenance Energy Requirement (MER) life stage multipliers",
    "Pounds (lbs) and Kilograms (kg) unit support",
    "Per-meal portion breakdown",
    "Custom food bag calorie density support",
    "Daily hydration & 10% treat budget advisor",
    "Personalized veterinary AI feeding insights",
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate How Much Food to Feed Your Dog",
  description:
    "Step-by-step guide to calculating your dog's exact daily caloric needs and food cup portions.",
  step: [
    {
      "@type": "HowToStep",
      name: "Weigh your dog accurately",
      text: "Determine your dog's current body weight in pounds or kilograms using a veterinary scale or home scale.",
    },
    {
      "@type": "HowToStep",
      name: "Calculate Resting Energy Requirement (RER)",
      text: "Convert weight to kg, then calculate RER = 70 × (weight in kg)^0.75.",
    },
    {
      "@type": "HowToStep",
      name: "Apply the Life Stage Multiplier (MER)",
      text: "Multiply RER by 1.6 for neutered adults, 2.0-3.0 for puppies, 1.2 for seniors, or 1.0 for weight loss.",
    },
    {
      "@type": "HowToStep",
      name: "Convert Calories into Food Portions",
      text: "Divide total daily calories by the kcal/cup on your dog food bag to get exact cups per day, then divide by number of meals.",
    },
  ],
};

const feedingGuideTable = [
  {
    size: "Toy Breed (2 - 12 lbs)",
    weightKg: "1 - 5.5 kg",
    dailyCalories: "120 - 350 kcal",
    dryKibbleCups: "⅓ to 1 cup",
    cannedFood: "⅓ to 1 can",
    examples: "Chihuahua, Yorkie, Pomeranian",
  },
  {
    size: "Small Breed (13 - 25 lbs)",
    weightKg: "6 - 11.5 kg",
    dailyCalories: "380 - 620 kcal",
    dryKibbleCups: "1 to 1⅔ cups",
    cannedFood: "1 to 1¾ cans",
    examples: "French Bulldog, Beagle, Dachshund",
  },
  {
    size: "Medium Breed (26 - 55 lbs)",
    weightKg: "12 - 25 kg",
    dailyCalories: "650 - 1,150 kcal",
    dryKibbleCups: "1¾ to 3 cups",
    cannedFood: "2 to 3¼ cans",
    examples: "Border Collie, Aussie, Pitbull",
  },
  {
    size: "Large Breed (56 - 90 lbs)",
    weightKg: "25.5 - 41 kg",
    dailyCalories: "1,180 - 1,750 kcal",
    dryKibbleCups: "3 to 4½ cups",
    cannedFood: "3½ to 5 cans",
    examples: "Golden Retriever, Lab, German Shepherd",
  },
  {
    size: "Giant Breed (90+ lbs)",
    weightKg: "41+ kg",
    dailyCalories: "1,800 - 2,600+ kcal",
    dryKibbleCups: "4½ to 7+ cups",
    cannedFood: "5 to 7½+ cans",
    examples: "Great Dane, Mastiff, Saint Bernard",
  },
];

const foodComparisonMatrix = [
  {
    type: "Dry Kibble",
    density: "350 - 450 kcal/cup",
    pros: "Convenient, cost-effective, long shelf life, supports dental scraping",
    cons: "Low moisture (~10%), higher carbohydrates, varies widely in quality",
    bestFor: "Most healthy adult dogs, routine daily feeding on a budget",
  },
  {
    type: "Canned Wet Food",
    density: "300 - 400 kcal/can (13.2 oz)",
    pros: "High moisture (~75%), highly palatable, lower carbs, great aroma",
    cons: "More expensive per calorie, shorter opened shelf life",
    bestFor: "Picky eaters, seniors with dental issues, dogs needing urinary support",
  },
  {
    type: "Fresh / Gently Cooked",
    density: "40 - 50 kcal/oz",
    pros: "Human-grade whole ingredients, highly bioavailable, minimal processing",
    cons: "Requires freezer space, higher cost, perishable",
    bestFor: "Dogs with sensitive digestion, allergies, or picky appetite",
  },
  {
    type: "Raw / BARF Diet",
    density: "45 - 55 kcal/oz",
    pros: "Unprocessed enzymes, natural amino acids, firm stools",
    cons: "Bacterial contamination risk (Salmonella), risk of unbalanced calcium:phosphorus",
    bestFor: "Experienced owners working with veterinary nutritionists",
  },
  {
    type: "Homemade Meals",
    density: "35 - 45 kcal/oz",
    pros: "Total control over ingredients, ideal for complex elimination diets",
    cons: "High risk of micro-nutrient deficiencies without certified vitamin premix",
    bestFor: "Dogs with diagnosed severe multi-food allergies (under vet guidance)",
  },
];

const transitionSchedule = [
  { days: "Days 1 - 2", oldFood: "75%", newFood: "25%", note: "Gentle introduction, monitor stool consistency." },
  { days: "Days 3 - 4", oldFood: "50%", newFood: "50%", note: "Even split, watch for gas or changes in appetite." },
  { days: "Days 5 - 6", oldFood: "25%", newFood: "75%", note: "Nearly transitioned, digestive enzymes adapting." },
  { days: "Day 7+", oldFood: "0%", newFood: "100%", note: "Full new diet achieved safely." },
];

export default function DogFoodCalculatorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <section className="border-b border-gray-100 bg-white py-4">
        <Container>
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-700">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link href="/tools/dog-food-calculator" className="hover:text-brand-700">
                  Tools
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="font-semibold text-gray-800">Dog Food Calculator</li>
            </ol>
          </nav>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 via-white to-white py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
              Scientific Veterinary Feeding Tool
            </span>
            <h1 className="mt-4 font-serif text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Dog Food Calculator by Weight &amp; Life Stage
            </h1>
            <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
              Calculate your dog&apos;s exact daily caloric needs (kcal/day), food cup portions,
              and per-meal breakdown using the clinical veterinary RER &amp; MER energy formulas.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-gray-600">
              <span className="rounded-full bg-white border border-gray-200 px-3.5 py-1.5 shadow-sm">
                ⚖️ Weight &amp; Breed Scaled
              </span>
              <span className="rounded-full bg-white border border-gray-200 px-3.5 py-1.5 shadow-sm">
                🥩 Kibble, Wet, Fresh &amp; Raw
              </span>
              <span className="rounded-full bg-white border border-gray-200 px-3.5 py-1.5 shadow-sm">
                🐶 Puppies, Adults &amp; Seniors
              </span>
              <span className="rounded-full bg-white border border-gray-200 px-3.5 py-1.5 shadow-sm">
                📋 WSAVA Calorie Standard
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* AI Overview / SGE Quick Answer Callout */}
      <section className="bg-white py-8">
        <Container>
          <div className="mx-auto max-w-5xl rounded-3xl border border-brand-200/90 bg-gradient-to-r from-brand-50/70 to-emerald-50/40 p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600 text-sm text-white font-bold">
                ⚡
              </span>
              <h2 className="font-serif text-xl font-bold text-gray-900 sm:text-2xl">
                Quick Summary: How Much Food Does a Dog Need?
              </h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              An adult dog typically requires between <strong>25 and 35 calories per pound of body weight per day</strong> to maintain ideal weight. 
              However, exact portions depend on four clinical variables:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-brand-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-700">1. Body Weight</p>
                <p className="mt-1 text-xs text-gray-600">
                  Larger dogs need more total calories, but fewer calories per pound than small toy breeds.
                </p>
              </div>
              <div className="rounded-2xl border border-brand-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-700">2. Life Stage</p>
                <p className="mt-1 text-xs text-gray-600">
                  Growing puppies require up to 2x-3x RER, while senior dogs need ~20% fewer calories due to slower metabolism.
                </p>
              </div>
              <div className="rounded-2xl border border-brand-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-700">3. Spayed / Neutered</p>
                <p className="mt-1 text-xs text-gray-600">
                  Neutering reduces basal metabolic rate by approximately 20-25%, requiring strict portion control.
                </p>
              </div>
              <div className="rounded-2xl border border-brand-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-700">4. Food Calorie Density</p>
                <p className="mt-1 text-xs text-gray-600">
                  Dry kibble ranges from 320 to 480 kcal/cup; always verify your specific bag&apos;s Guaranteed Analysis.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Calculator Client Component */}
      <DogFoodCalculatorClient />

      {/* Comprehensive Feeding Chart by Breed Size & Weight */}
      <section className="border-t border-gray-100 bg-white py-14">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Quick Reference Guide
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                Dog Food Feeding Chart by Weight &amp; Breed Size
              </h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                General starting guidelines for moderate-activity adult dogs eating standard dry kibble (~375 kcal/cup) or canned wet food (~350 kcal/can).
              </p>
            </div>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                <thead className="bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-700">
                  <tr>
                    <th scope="col" className="px-5 py-3.5">Breed Size (lbs)</th>
                    <th scope="col" className="px-5 py-3.5">Weight (kg)</th>
                    <th scope="col" className="px-5 py-3.5">Daily Caloric Need</th>
                    <th scope="col" className="px-5 py-3.5">Dry Kibble (Cups/day)</th>
                    <th scope="col" className="px-5 py-3.5">Wet Food (Cans/day)</th>
                    <th scope="col" className="px-5 py-3.5">Common Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {feedingGuideTable.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.size}</td>
                      <td className="px-5 py-4 text-gray-600">{row.weightKg}</td>
                      <td className="px-5 py-4 font-bold text-brand-700">{row.dailyCalories}</td>
                      <td className="px-5 py-4 text-gray-800">{row.dryKibbleCups}</td>
                      <td className="px-5 py-4 text-gray-800">{row.cannedFood}</td>
                      <td className="px-5 py-4 text-xs text-gray-500">{row.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-500 text-center">
              * Note: High-energy working dogs or un-neutered dogs will need 20-40% more; seniors or inactive dogs need 15-20% less.
            </p>
          </div>
        </Container>
      </section>

      {/* Food Comparison Matrix */}
      <section className="border-t border-gray-100 bg-brand-50/40 py-14">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Nutritional Comparison
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                Dry Kibble vs Wet vs Fresh vs Raw: Calorie &amp; Portion Breakdown
              </h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                How calorie density impacts portion volume across different dog food diets.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {foodComparisonMatrix.map((item) => (
                <div
                  key={item.type}
                  className="flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-lg font-bold text-gray-900">{item.type}</h3>
                      <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-800">
                        {item.density}
                      </span>
                    </div>
                    <div className="mt-4 space-y-2 text-xs leading-5">
                      <p>
                        <strong className="text-emerald-700">Pros:</strong> {item.pros}
                      </p>
                      <p>
                        <strong className="text-rose-700">Cons:</strong> {item.cons}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-600">
                    <strong>Best for:</strong> {item.bestFor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 7-Day Diet Transition Protocol */}
      <section className="border-t border-gray-100 bg-white py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Digestive Health Guide
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                The 7-Day Safe Food Transition Schedule
              </h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Switching dog foods abruptly can trigger diarrhea, vomiting, and gut microbiome dysbiosis.
                Follow this gradual ratio protocol whenever changing brands or protein sources.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {transitionSchedule.map((step, idx) => (
                <div
                  key={step.days}
                  className="rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50/80 to-white p-5 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {idx + 1}
                  </div>
                  <h3 className="mt-3 font-serif text-base font-bold text-gray-900">{step.days}</h3>
                  <div className="mt-3 space-y-1 text-xs">
                    <p className="font-semibold text-gray-700">Old Food: {step.oldFood}</p>
                    <p className="font-semibold text-brand-700">New Food: {step.newFood}</p>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-gray-500">{step.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-5 text-center text-sm text-brand-900">
              💡 <strong>Pro Tip for Sensitive Stomachs:</strong> Support your dog&apos;s intestinal microflora during diet transitions with a vet-formulated probiotic. Check our{" "}
              <Link href="/tools/probiotic-calculator" className="font-bold underline hover:text-brand-800">
                Dog Probiotic Dosage Calculator
              </Link>{" "}
              to find the ideal CFU target for your dog&apos;s weight.
            </div>
          </div>
        </Container>
      </section>

      {/* Body Condition Score Guide (BCS 1-9) */}
      <section className="border-t border-gray-100 bg-gray-50/70 py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Body Condition Assessment
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                How to Check Your Dog&apos;s Body Condition Score (BCS)
              </h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Scales only show total weight, not fat vs. muscle ratio. Use these three physical checks to evaluate your dog&apos;s physique:
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
                <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-800">
                  BCS 1 - 3: Underweight
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-gray-900">Visible Ribs &amp; Bones</h3>
                <p className="mt-2 text-xs leading-6 text-gray-600">
                  Ribs, lumbar vertebrae, and pelvic bones are easily visible from a distance. No discernible fat cover. Severe abdominal tuck.
                </p>
                <div className="mt-4 border-t border-gray-100 pt-3 text-xs font-semibold text-rose-700">
                  Action: Increase calories by 10-15% &amp; consult your vet.
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-300 bg-emerald-50/40 p-6 shadow-sm">
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  BCS 4 - 5: Ideal Physique
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-gray-900">Easily Felt Ribs &amp; Waist</h3>
                <p className="mt-2 text-xs leading-6 text-gray-600">
                  Ribs easily felt with minimal fat cover. Clear waistline visible when viewed from above (hourglass shape) and abdominal tuck from side.
                </p>
                <div className="mt-4 border-t border-emerald-100 pt-3 text-xs font-semibold text-emerald-800">
                  Action: Maintain current daily caloric intake.
                </div>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                  BCS 6 - 9: Overweight / Obese
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-gray-900">Hidden Ribs &amp; Broad Back</h3>
                <p className="mt-2 text-xs leading-6 text-gray-600">
                  Ribs difficult to palpate under thick fat layer. No waistline when viewed from above. Fat deposits along spine, tail base, and neck.
                </p>
                <div className="mt-4 border-t border-gray-100 pt-3 text-xs font-semibold text-amber-800">
                  Action: Reduce food by 10-15% &amp; restrict treats.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Internal Links & Guides */}
      <section className="border-t border-gray-100 bg-white py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              Related Dog Nutrition &amp; Care Guides
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Explore more tools and veterinary articles to support your dog&apos;s gut health, immunity, and longevity:
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/tools/probiotic-calculator"
                className="group rounded-2xl border border-gray-200 p-4 transition hover:border-brand-300 hover:bg-brand-50/50"
              >
                <p className="font-serif text-base font-bold text-gray-900 group-hover:text-brand-700">
                  🐾 Dog Probiotic Calculator
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Calculate CFU dosage by weight for digestive and allergy relief.
                </p>
              </Link>
              <Link
                href="/tools/puppy-feeding-schedule"
                className="group rounded-2xl border border-gray-200 p-4 transition hover:border-brand-300 hover:bg-brand-50/50"
              >
                <p className="font-serif text-base font-bold text-gray-900 group-hover:text-brand-700">
                  🐶 Puppy Feeding Schedule
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Month-by-month feeding frequency and portion guidelines for puppies.
                </p>
              </Link>
              <Link
                href="/blog/homemade-chicken-dog-food-recipes-vet-approved"
                className="group rounded-2xl border border-gray-200 p-4 transition hover:border-brand-300 hover:bg-brand-50/50"
              >
                <p className="font-serif text-base font-bold text-gray-900 group-hover:text-brand-700">
                  🍗 Vet-Approved Chicken Recipes
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Balanced homemade chicken recipe complete with calcium ratios.
                </p>
              </Link>
              <Link
                href="/blog/how-much-homemade-dog-food-should-i-feed-my-dog"
                className="group rounded-2xl border border-gray-200 p-4 transition hover:border-brand-300 hover:bg-brand-50/50"
              >
                <p className="font-serif text-base font-bold text-gray-900 group-hover:text-brand-700">
                  🥣 Homemade Dog Food Portion Guide
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Exact weight-based portioning rules for cooked home diets.
                </p>
              </Link>
              <Link
                href="/dogs"
                className="group rounded-2xl border border-gray-200 p-4 transition hover:border-brand-300 hover:bg-brand-50/50"
              >
                <p className="font-serif text-base font-bold text-gray-900 group-hover:text-brand-700">
                  🐕 Canine Health &amp; Gut Hub
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Browse condition guides for diarrhea, itching, yeast, and allergies.
                </p>
              </Link>
              <Link
                href="/vets"
                className="group rounded-2xl border border-gray-200 p-4 transition hover:border-brand-300 hover:bg-brand-50/50"
              >
                <p className="font-serif text-base font-bold text-gray-900 group-hover:text-brand-700">
                  🏥 Find Local Vets &amp; Hospitals
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Locate certified veterinarians and emergency clinics across US cities.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="border-t border-gray-100 bg-white py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Common Questions
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                Frequently Asked Questions About Dog Food Portions
              </h2>
            </div>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-brand-200"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-gray-900">
                    {faq.question}
                    <span className="text-gray-400 font-bold transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-gray-600 border-t border-gray-100 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Educational Disclaimer */}
      <section className="border-t border-gray-100 bg-gray-50 py-10">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <h3 className="font-serif text-lg font-bold text-gray-900">
              Veterinary &amp; Nutritional Disclaimer
            </h3>
            <p className="mt-2 text-xs leading-6 text-gray-500">
              The calculations provided by the Pawbiotics Dog Food Calculator are estimates based on standard National Research Council (NRC) and WSAVA caloric equations. Individual canine metabolism, breed genetics, ambient temperature, neuter status, and medical conditions will influence nutritional requirements. Always verify feeding guidelines on your dog food label and consult a licensed veterinarian or board-certified veterinary nutritionist (ACVN) for clinical dietary advice.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

