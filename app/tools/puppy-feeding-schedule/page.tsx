import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";
import PuppyFeedingScheduleClient from "./PuppyFeedingScheduleClient";

const PAGE_URL = "https://pawbiotics.us/tools/puppy-feeding-schedule";

export const metadata: Metadata = {
  title: "Puppy Feeding Schedule by Age | Pawbiotics",
  description:
    "Use this puppy feeding schedule guide to understand how often puppies should eat by age, meal timing, and safe feeding habits.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Puppy Feeding Schedule by Age | Pawbiotics",
    description:
      "Use this puppy feeding schedule guide to understand how often puppies should eat by age, meal timing, and safe feeding habits.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs: FAQItem[] = [
  {
    question: "What is a good puppy feeding schedule?",
    answer:
      "A good puppy schedule is consistent, age-appropriate, and easy to follow daily. Many puppies do best with smaller, regular meals matched to food-label guidance and growth stage.",
  },
  {
    question: "How often should an 8 week puppy eat?",
    answer:
      "Many 8-week puppies do well with 3 to 4 small meals per day. Use your puppy food label as the primary guide and ask your vet for personalized feeding advice.",
  },
  {
    question: "How many times should a 3 month old puppy eat?",
    answer:
      "Many 3-month-old puppies continue doing well with about 3 meals daily, but exact routines can vary by breed size, activity, and food type.",
  },
  {
    question: "When can puppies eat twice a day?",
    answer:
      "Some puppies transition toward 2 meals per day in later growth stages, often closer to the upper end of puppyhood. Timing depends on breed size, growth rate, and veterinary guidance.",
  },
  {
    question: "Should puppies eat dry food or wet food?",
    answer:
      "Both can work when balanced and age-appropriate. The best choice depends on your puppy's tolerance, calorie needs, and what your veterinarian recommends.",
  },
  {
    question: "How do I know if I am feeding my puppy too much?",
    answer:
      "Watch for rapid weight gain, reduced waist definition, and low activity. If you notice changes, review portions carefully and consult your veterinarian.",
  },
  {
    question: "When should I switch my puppy to adult dog food?",
    answer:
      "Switch timing can vary by breed size and growth stage. Many dogs transition later in puppyhood, but your veterinarian can confirm the safest timing for your dog.",
  },
  {
    question: "Should I ask a vet about my puppy's feeding schedule?",
    answer:
      "Yes. A licensed veterinarian can personalize feeding amounts and meal frequency based on growth pattern, body condition, and your puppy's health history.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "https://pawbiotics.us/" },
  { label: "Tools", href: PAGE_URL },
  { label: "Puppy Feeding Schedule", href: PAGE_URL },
];

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Puppy Feeding Schedule by Age",
  description:
    "Educational puppy feeding schedule guide and builder for meal timing by age and breed size.",
  url: PAGE_URL,
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Puppy Feeding Schedule Tool",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: PAGE_URL,
  description:
    "Interactive puppy feeding schedule builder for general educational guidance only.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const educationalSections = [
  {
    heading: "How this puppy feeding schedule works",
    body: "This tool uses age stage, breed size, activity, and food type to suggest a general starting schedule. It does not replace food-label instructions or veterinary advice.",
  },
  {
    heading: "Puppy feeding schedule by age",
    body: "Very young puppies often need more frequent meals, while older puppies may gradually shift toward fewer meals. Growth needs vary by size and breed.",
  },
  {
    heading: "How often should puppies eat?",
    body: "Many puppies eat more frequently than adult dogs. Meal timing should be consistent and adjusted using body condition, appetite trends, and label guidance.",
  },
  {
    heading: "8 week puppy feeding schedule",
    body: "At around 8 weeks, many puppies do well with 3 to 4 small meals spaced through the day, with close monitoring of appetite and stool quality.",
  },
  {
    heading: "3 month puppy feeding schedule",
    body: "At 3 months, many puppies continue with about 3 meals daily, though some routines vary by breed size and activity level.",
  },
  {
    heading: "6 month puppy feeding schedule",
    body: "Around 6 months, some puppies move toward a more structured routine with fewer daily meals. Transition gradually and reassess body condition.",
  },
  {
    heading: "Small breed vs large breed puppy feeding",
    body: "Small breeds may benefit from steadier meal timing, while large breeds often need careful growth management to avoid overfeeding.",
  },
  {
    heading: "When to switch from puppy food to adult food",
    body: "Transition timing depends on breed size and growth pace. Your veterinarian can help decide when your puppy is ready for adult formulas.",
  },
  {
    heading: "Signs your puppy may be eating too much",
    body: "Rapid weight gain, reduced waist shape, or lower activity may signal overfeeding. Re-check label guidance and discuss concerns with your vet.",
  },
  {
    heading: "Signs your puppy may not be eating enough",
    body: "Poor weight gain, low energy, and persistent hunger can suggest underfeeding. Compare with label guidance and seek veterinary input.",
  },
  {
    heading: "When to call your veterinarian",
    body: "Call your vet for ongoing appetite issues, frequent vomiting, persistent diarrhea, poor growth, or sudden body condition changes.",
  },
];

const feedingChart = [
  {
    age: "8-12 weeks",
    meals: "3-4 meals per day",
    notes: "Many puppies do well with smaller, more frequent meals at this stage.",
  },
  {
    age: "3-4 months",
    meals: "3 meals per day",
    notes: "A common rhythm for many growing puppies with consistent meal timing.",
  },
  {
    age: "5-6 months",
    meals: "2-3 meals per day",
    notes: "Some puppies begin gradual transition toward fewer meals based on growth.",
  },
  {
    age: "7-12 months",
    meals: "2 meals per day",
    notes: "Many older puppies move toward adult-like meal timing.",
  },
  {
    age: "12+ months",
    meals: "Usually 2 meals per day",
    notes: "Often close to adult routine, but confirm based on breed and vet advice.",
  },
];

const relatedLinks = [
  { href: "/tools/dog-food-calculator", label: "Dog food calculator" },
  { href: "/tools/probiotic-calculator", label: "Probiotic calculator" },
  { href: "/dogs", label: "Dog health guides" },
  { href: "/blog/do-dogs-need-probiotics", label: "Do dogs need probiotics?" },
  { href: "/health-conditions/diarrhea", label: "Diarrhea condition guide" },
  { href: "/vets/houston-tx", label: "Find vets in Houston" },
  { href: "/contact", label: "Contact Pawbiotics" },
];

export default function PuppyFeedingSchedulePage() {
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
                <Link href="/tools/puppy-feeding-schedule" className="hover:text-brand-700">
                  Tools
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="font-medium text-gray-700">Puppy Feeding Schedule</li>
            </ol>
          </nav>
        </Container>
      </section>

      <section className="border-b border-gray-100 bg-brand-50/40 py-14">
        <Container>
          <div className="mx-auto max-w-5xl">
            <p className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-700">
              Free Puppy Feeding Tool
            </p>
            <h1 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Puppy Feeding Schedule by Age
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
              Build a simple puppy feeding routine based on age, size, activity level, and daily
              meal needs.
            </p>
            <p className="mt-3 rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-gray-700">
              Educational only. Always follow your puppy food label and ask your veterinarian for
              personalized feeding advice.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-brand-50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              How often should puppies eat?
            </h2>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              Most young puppies eat more frequently than adult dogs. Very young puppies often need
              3-4 meals per day, while older puppies may gradually move toward 2 meals per day. The
              right schedule depends on age, breed size, food type, growth rate, and vet guidance.
            </p>
          </div>
        </Container>
      </section>

      <PuppyFeedingScheduleClient />

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
              This chart is a general educational guide. Food labels and veterinary advice should
              always come first.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-700">
                    <th className="px-3 py-2 font-semibold">Puppy age</th>
                    <th className="px-3 py-2 font-semibold">Meals per day</th>
                    <th className="px-3 py-2 font-semibold">General notes</th>
                  </tr>
                </thead>
                <tbody>
                  {feedingChart.map((row) => (
                    <tr key={row.age} className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-gray-900">{row.age}</td>
                      <td className="px-3 py-2 text-gray-700">{row.meals}</td>
                      <td className="px-3 py-2 text-gray-600">{row.notes}</td>
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
    </>
  );
}
