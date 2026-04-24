import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FAQ from "@/components/seo/FAQ";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";
import CalculatorToolClient from "./CalculatorToolClient";

const PAGE_URL = "https://pawbiotics.us/tools/probiotic-calculator";

export const metadata: Metadata = {
  title: "Dog Probiotic Dosage Calculator | Pawbiotics",
  description:
    "Use this beginner-friendly dog probiotic calculator to understand general probiotic guidance by dog weight, digestion needs, and gut health goals.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Dog Probiotic Dosage Calculator | Pawbiotics",
    description:
      "Use this beginner-friendly dog probiotic calculator to understand general probiotic guidance by dog weight, digestion needs, and gut health goals.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs: FAQItem[] = [
  {
    question: "How much probiotic should I give my dog?",
    answer:
      "There is no single amount for every dog. Use the product label, your dog's size and age, and your veterinarian's advice to decide a safe starting point.",
  },
  {
    question: "Can I give probiotics to my dog every day?",
    answer:
      "Many dogs can use probiotics daily, but product type and timing vary. Follow label instructions and ask your veterinarian before long-term use.",
  },
  {
    question: "Do probiotics help dog diarrhea?",
    answer:
      "In mild cases, probiotics may support gut balance and stool quality. If diarrhea is severe, persistent, or includes blood, contact a licensed veterinarian promptly.",
  },
  {
    question: "How long do probiotics take to work in dogs?",
    answer:
      "Some dogs show digestive improvement in a few days, while others take 1 to 2 weeks. Track stool quality, appetite, and comfort over time.",
  },
  {
    question: "Can puppies take probiotics?",
    answer:
      "Puppies may use probiotic products designed for their age and weight, but a veterinarian should confirm safety and product choice first.",
  },
  {
    question: "When should I call a vet instead of using probiotics?",
    answer:
      "Call a vet for blood in stool, repeated vomiting, dehydration, refusal to eat, severe lethargy, or symptoms that do not improve quickly.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "https://pawbiotics.us/" },
  { label: "Tools", href: "https://pawbiotics.us/tools/probiotic-calculator" },
  { label: "Dog Probiotic Dosage Calculator", href: PAGE_URL },
];

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Dog Probiotic Dosage Calculator",
  description:
    "Educational tool to estimate general probiotic guidance for dogs based on weight, life stage, and common gut-health goals.",
  url: PAGE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "Pawbiotics",
    url: "https://pawbiotics.us/",
  },
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Dog Probiotic Dosage Calculator",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript",
  url: PAGE_URL,
  description:
    "Beginner-friendly calculator for general probiotic guidance in dogs. Educational only and not a medical dosing tool.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: "Pawbiotics",
    url: "https://pawbiotics.us/",
  },
};

const learningSections = [
  {
    heading: "How this calculator works",
    body: [
      "This tool combines your dog's weight range, age group, and main concern to generate general guidance. It does not create a medical dose or replace professional care.",
      "Because product formulas differ, always compare results with your product label and veterinary advice.",
    ],
  },
  {
    heading: "When probiotics may help dogs",
    body: [
      "Probiotics may support digestive balance in situations like mild stool changes, post-antibiotic recovery, occasional gas, and routine gut wellness.",
    ],
  },
  {
    heading: "When probiotics are not enough",
    body: [
      "If symptoms are severe, worsening, or ongoing, probiotics alone are not enough. Rapid veterinary assessment is safer and helps prevent delays in care.",
    ],
  },
  {
    heading: "How to introduce probiotics safely",
    body: [
      "Start with the lower end of label guidance, introduce slowly, and monitor stool, appetite, and energy daily for tolerance.",
      "Avoid starting multiple new supplements at once so you can track what is helping.",
    ],
  },
  {
    heading: "What to look for in a dog probiotic",
    body: [
      "Choose products with clearly listed strains, species-appropriate labeling, storage instructions, and dosing directions matched to dog size.",
      "For chronic issues, ask your veterinarian which product profile is the best fit.",
    ],
  },
];

const resourceLinks = [
  { href: "/dogs/probiotics/diarrhea", label: "Dog probiotics for diarrhea" },
  { href: "/dogs/probiotics/digestion", label: "Dog digestion support" },
  { href: "/dogs/probiotics/allergies", label: "Dog allergy and skin support" },
  { href: "/blog/do-dogs-need-probiotics", label: "Do dogs need probiotics?" },
  { href: "/blog/dog-probiotics-for-diarrhea", label: "Dog probiotics for diarrhea blog" },
  { href: "/health-conditions/diarrhea", label: "Pet diarrhea condition guide" },
  { href: "/contact", label: "Contact Pawbiotics" },
];

const localVetLinks = [
  { href: "/vets/houston-tx", label: "Houston vets" },
  { href: "/vets/dallas-tx", label: "Dallas vets" },
  { href: "/vets/austin-tx", label: "Austin vets" },
  { href: "/vets/miami-fl", label: "Miami vets" },
];

export default function ProbioticCalculatorPage() {
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

      <section className="border-b border-[#2c1f0e]/10 bg-gradient-to-b from-[#faf6f0] to-white py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-[#e8734a]/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#e8734a]">
                Free Pet Health Tool
              </p>
              <h1 className="mt-4 font-serif text-3xl font-bold text-[#2c1f0e] sm:text-4xl">
                Dog Probiotic Dosage Calculator
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#5a4535]">
                Estimate general probiotic guidance for your dog based on weight, digestion needs,
                and wellness goals.
              </p>
              <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                Educational only. Always consult your vet for diarrhea, vomiting, allergies, or
                ongoing symptoms.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <article className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-4 shadow-sm">
                <p className="text-3xl">🐶</p>
                <p className="mt-2 text-sm font-semibold text-[#2c1f0e]">Dog-friendly guidance</p>
                <p className="mt-1 text-xs text-[#8a7060]">
                  Built for practical daily decisions, not hard medical dosing.
                </p>
              </article>
              <article className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-4 shadow-sm">
                <p className="text-3xl">🐾</p>
                <p className="mt-2 text-sm font-semibold text-[#2c1f0e]">Pet parent focused</p>
                <p className="mt-1 text-xs text-[#8a7060]">
                  Clear recommendations with safety-first vet escalation guidance.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="rounded-2xl border border-[#e8734a]/20 bg-[#fff8f3] p-5">
            <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">
              Quick answer
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#5a4535]">
              There is no single probiotic dose for every dog. The right amount depends on weight,
              age, symptoms, product label, and vet guidance.
            </p>
          </div>
        </Container>
      </section>

      <CalculatorToolClient />

      <section className="border-t border-[#2c1f0e]/10 bg-white py-12">
        <Container className="space-y-5">
          {learningSections.map((section) => (
            <article
              key={section.heading}
              className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-6 shadow-sm"
            >
              <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-[#5a4535]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="border-t border-[#2c1f0e]/10 bg-[#faf6f0] py-12">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">Helpful resources</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {resourceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-[#2c1f0e]/15 bg-white px-4 py-2 text-sm font-medium text-[#5a4535] hover:border-[#e8734a]/30 hover:text-[#e8734a]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#2c1f0e]/10 bg-[#faf6f0] pb-12">
        <Container>
          <div className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">Need a vet&apos;s opinion?</h2>
            <p className="mt-2 text-sm text-[#5a4535]">
              Browse local vet resources and speak with a licensed professional for personalized
              care advice.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {localVetLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-[#2c1f0e]/15 bg-[#faf6f0] px-4 py-2 text-sm font-medium text-[#5a4535] hover:border-[#e8734a]/30 hover:text-[#e8734a]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f2ece2] py-12">
        <Container>
          <FAQ items={faqs} />
        </Container>
      </section>
    </>
  );
}
