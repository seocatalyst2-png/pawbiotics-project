import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";
import DogFoodCalculatorClient from "./DogFoodCalculatorClient";

const PAGE_URL = "https://pawbiotics.us/tools/dog-food-calculator";

export const metadata: Metadata = {
  title: "How Much to Feed My Dog Calculator | Pawbiotics",
  description:
    "Use this dog feeding calculator to estimate how much food to feed your dog or puppy based on weight, age, activity level, and food type.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "How Much to Feed My Dog Calculator | Pawbiotics",
    description:
      "Use this dog feeding calculator to estimate how much food to feed your dog or puppy based on weight, age, activity level, and food type.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs: FAQItem[] = [
  {
    question: "How much food should I feed my dog?",
    answer:
      "There is no one amount that fits every dog. A safer approach is to use your dog's weight, age, activity level, body condition, and the specific calorie guidance on your food label as your starting point.",
  },
  {
    question: "How many times should a dog eat a day?",
    answer:
      "Most adult dogs do well with two meals daily. Puppies usually need more frequent meals, while seniors often benefit from consistent smaller portions with close monitoring.",
  },
  {
    question: "How much puppy food should I feed?",
    answer:
      "Puppy feeding depends on growth stage, breed size, and calorie density of the food. Start with the puppy chart on your food label and adjust with veterinary guidance.",
  },
  {
    question: "How much food should I feed a puppy?",
    answer:
      "Puppies usually need more frequent meals and gradual portion adjustments as they grow. Use food-label guidance for your puppy's current weight and discuss changes with your veterinarian.",
  },
  {
    question: "How much dog food should I feed my dog by weight?",
    answer:
      "Weight is one important factor, but not the only one. Activity, age, body condition, and food calories all affect portions, so use weight-based ranges as a starting point only.",
  },
  {
    question: "How much Freshpet should I feed my dog?",
    answer:
      "Freshpet and other fresh foods can vary in calories by recipe, so check the package feeding chart and adjust slowly based on your dog's response and veterinary guidance.",
  },
  {
    question: "How much homemade dog food should I feed my dog?",
    answer:
      "Homemade diets vary a lot in calories and nutrients. Use portion estimates carefully and work with a veterinarian to ensure your dog's diet is balanced and appropriate.",
  },
  {
    question: "Should I ask a vet before changing my dog's food?",
    answer:
      "Yes, especially if your dog has chronic symptoms, major weight changes, allergies, digestive issues, or is very young or senior. A licensed vet can personalize feeding safely.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "https://pawbiotics.us/" },
  { label: "Tools", href: PAGE_URL },
  { label: "Dog Food Calculator", href: PAGE_URL },
];

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How Much to Feed My Dog Calculator",
  description:
    "Educational dog feeding calculator for estimating daily food guidance by weight, age, activity level, and food type.",
  url: PAGE_URL,
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "How Much to Feed My Dog Calculator",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: PAGE_URL,
  description:
    "Tool for estimating general daily feeding guidance for dogs and puppies. Educational only.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const educationalSections = [
  {
    heading: "How this dog feeding calculator works",
    body: "This calculator combines weight, life stage, activity, food type, and body condition to produce a general feeding starting point. It does not replace label instructions or veterinary advice.",
  },
  {
    heading: "How many times should a dog eat a day?",
    body: "Many adult dogs do well with two meals per day. Puppies often need more frequent feeding, and seniors may benefit from consistent smaller portions.",
  },
  {
    heading: "How much puppy food should I feed?",
    body: "Puppy needs change quickly as they grow. Use your puppy food label chart first, then fine-tune with your veterinarian based on body condition and growth pace.",
  },
  {
    heading: "Dry food vs wet food vs fresh food",
    body: "Calories can differ significantly by food type and brand. Always compare calories per cup, can, or packet before adjusting portions.",
  },
  {
    heading: "How much Freshpet should I feed my dog?",
    body: "Freshpet-style products use product-specific charts. Use those charts as your primary guide and adjust gradually based on your dog's weight trend and stool quality.",
  },
  {
    heading: "How much homemade dog food should I feed my dog?",
    body: "Homemade diets can vary in calorie density and nutrient balance. Portioning should be conservative at first and reviewed with a licensed veterinarian.",
  },
  {
    heading: "Signs you may be feeding too much",
    body: "Common signs include rapid weight gain, reduced waist definition, low energy, and frequent soft stool from overfeeding or abrupt portion changes.",
  },
  {
    heading: "Signs you may not be feeding enough",
    body: "Look for unplanned weight loss, poor body condition, persistent hunger behavior, and reduced energy. Discuss ongoing concerns with your veterinarian.",
  },
  {
    heading: "When to ask a veterinarian",
    body: "Ask your vet before major feeding changes, especially for puppies, seniors, dogs with chronic health issues, or dogs with recurring digestive symptoms.",
  },
];

const relatedLinks = [
  { href: "/dogs", label: "Dog health guides" },
  { href: "/blog/do-dogs-need-probiotics", label: "Do dogs need probiotics?" },
  { href: "/health-conditions/immunity", label: "Pet immunity guide" },
  { href: "/tools/probiotic-calculator", label: "Dog probiotic calculator" },
  { href: "/vets/houston-tx", label: "Find vets in Houston" },
  { href: "/contact", label: "Contact Pawbiotics" },
];

const puppyChart = [
  {
    group: "Toy / small puppy",
    startingPoint: "Use lower-to-mid label ranges and reassess weekly during growth phases.",
  },
  {
    group: "Medium puppy",
    startingPoint: "Use mid label guidance as a starting point and adjust based on growth and body condition.",
  },
  {
    group: "Large breed puppy",
    startingPoint: "Use large-breed puppy label guidance carefully and avoid overfeeding during rapid growth.",
  },
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

      <section className="border-b border-gray-100 bg-white py-6">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
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
              <li className="font-medium text-gray-700">Dog Food Calculator</li>
            </ol>
          </nav>
        </Container>
      </section>

      <section className="border-b border-gray-100 bg-brand-50/40 py-14">
        <Container>
          <div className="mx-auto max-w-5xl">
            <p className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-700">
              Free Dog Feeding Tool
            </p>
            <h1 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              How Much to Feed My Dog Calculator
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
              Estimate how much food your dog may need each day based on weight, age, activity
              level, and food type.
            </p>
            <p className="mt-3 rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-gray-700">
              Educational only. Always follow your dog food label and ask your veterinarian for
              personalized feeding advice.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-brand-50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              How much food should I feed my dog?
            </h2>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              There is no single amount that fits every dog. Feeding needs depend on weight, age,
              activity level, body condition, food calories, and whether your dog eats dry food, wet
              food, fresh food, or homemade meals.
            </p>
          </div>
        </Container>
      </section>

      <DogFoodCalculatorClient />

      <section className="border-t border-gray-100 bg-white py-12">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {educationalSections.map((section) => (
              <article
                key={section.heading}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <h2 className="font-serif text-xl font-semibold text-gray-900">{section.heading}</h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">{section.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-brand-50/40 py-12">
        <Container>
          <div className="mx-auto max-w-5xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Puppy feeding chart</h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Use this as a general starting point only. Puppy food labels and vet guidance should
              always come first.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-700">
                    <th className="px-3 py-2 font-semibold">Puppy group</th>
                    <th className="px-3 py-2 font-semibold">General starting guidance</th>
                  </tr>
                </thead>
                <tbody>
                  {puppyChart.map((row) => (
                    <tr key={row.group} className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-gray-900">{row.group}</td>
                      <td className="px-3 py-2 text-gray-600">{row.startingPoint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-brand-50/40 py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Helpful links</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-white py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-sm font-semibold text-gray-900">
                    {faq.question}
                    <span className="text-gray-500 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-white pb-14 pt-10">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Educational use only
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              This tool gives general feeding guidance and is not a medical or nutrition
              prescription. Food calories vary by brand and recipe. Always follow product label
              instructions and consult a licensed veterinarian for personalized feeding advice.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
