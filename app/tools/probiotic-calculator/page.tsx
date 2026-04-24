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
      "There is no one-size-fits-all amount for every dog. A safer approach is to use your dog's size, age, current symptoms, and the product label together. Start low, monitor tolerance, and ask your veterinarian to confirm what is appropriate for your dog's needs.",
  },
  {
    question: "Can I give probiotics to my dog every day?",
    answer:
      "Many dogs can use probiotics daily, especially for ongoing digestive support. However, formulas and strain blends vary, so daily use should still follow product instructions and your vet's guidance. If your dog has chronic symptoms, check in with a licensed veterinarian before long-term supplementation.",
  },
  {
    question: "Do probiotics help dog diarrhea?",
    answer:
      "In mild cases, probiotics may help support gut balance and stool quality, especially when paired with hydration and routine feeding. They are supportive tools, not emergency treatment. If diarrhea is severe, persistent, or includes blood, contact a licensed veterinarian promptly.",
  },
  {
    question: "How long do probiotics take to work in dogs?",
    answer:
      "Some dogs show changes in a few days, while others may need 1 to 2 weeks of consistent use. Track stool quality, appetite, gas, and energy rather than relying on one symptom alone. If there is no clear progress, review the plan with your veterinarian.",
  },
  {
    question: "Can puppies take probiotics?",
    answer:
      "Puppies can sometimes use probiotics, but they need age-appropriate products and careful monitoring. Because young dogs can dehydrate quickly with digestive issues, it is best to confirm product choice and timing with your veterinarian first.",
  },
  {
    question: "When should I call a vet instead of using probiotics?",
    answer:
      "Call a vet right away for blood in stool, repeated vomiting, dehydration, refusal to eat, significant lethargy, or worsening symptoms. Probiotics should not delay care when red-flag symptoms are present.",
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
    heading: "How to use this calculator",
    body: [
      "Enter your dog's weight, age group, and main gut-health concern. The tool then gives a typical support direction using safe, educational language.",
      "It does not output a medical dose and it does not replace professional diagnosis. Always compare any result with product instructions and vet guidance.",
    ],
    bullets: [
      "Use current weight for best estimate quality",
      "Choose the concern that matches today's symptom pattern",
      "Review output with your product label before starting",
    ],
  },
  {
    heading: "What affects probiotic needs in dogs",
    body: [
      "Probiotic needs can vary by life stage, digestive sensitivity, stress level, diet changes, and recovery after antibiotics.",
      "Two dogs with similar weight may still respond differently, so start conservatively and monitor response over time.",
    ],
    bullets: [
      "Body size and age group",
      "Symptom severity and duration",
      "Current food, treats, and medication changes",
      "Product strain blend and label instructions",
    ],
  },
  {
    heading: "Common mistakes pet owners make",
    body: [
      "Most probiotic setbacks happen when products are introduced too fast or when multiple new supplements are started at once.",
      "Another common issue is waiting too long before seeking veterinary care when symptoms are worsening.",
    ],
    bullets: [
      "Starting at a full label amount on day one",
      "Changing diet and supplement at the same time",
      "Ignoring hydration during diarrhea episodes",
      "Delaying vet care for persistent symptoms",
    ],
  },
  {
    heading: "Signs probiotics are working",
    body: [
      "Look for small improvements before expecting major changes. In many dogs, progress appears as steadier stool quality and better daily comfort.",
      "Track trends over several days instead of judging from one meal or one bowel movement.",
    ],
    bullets: [
      "More consistent stool pattern",
      "Reduced gas or bloating discomfort",
      "Stable appetite and energy",
      "Fewer digestion-related flare-ups",
    ],
  },
  {
    heading: "Signs you should stop and call a vet",
    body: [
      "If symptoms become severe, probiotics should not be used as a delay strategy. Fast veterinary assessment is the safer option.",
      "For diarrhea-specific guidance, review our dedicated support page and escalate quickly when red flags appear.",
    ],
    bullets: [
      "Blood in stool or black stool",
      "Repeated vomiting or refusal to drink",
      "Marked lethargy or weakness",
      "No improvement after 24 to 48 hours",
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

            <div className="space-y-3">
              <article className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-3xl">🐶</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8a7060]">
                    visual preview
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#2c1f0e]">Dog-friendly guidance</p>
                <p className="mt-1 text-xs text-[#8a7060]">
                  Built for practical daily decisions, not hard medical dosing.
                </p>
              </article>

              <div className="grid grid-cols-2 gap-3">
                <article className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-3 shadow-sm">
                  <p className="text-xl">🦠</p>
                  <p className="mt-1 text-xs font-semibold text-[#2c1f0e]">Gut health</p>
                </article>
                <article className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-3 shadow-sm">
                  <p className="text-xl">🛡️</p>
                  <p className="mt-1 text-xs font-semibold text-[#2c1f0e]">Immunity</p>
                </article>
                <article className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-3 shadow-sm">
                  <p className="text-xl">🍽️</p>
                  <p className="mt-1 text-xs font-semibold text-[#2c1f0e]">Digestion</p>
                </article>
                <article className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-3 shadow-sm">
                  <p className="text-xl">✨</p>
                  <p className="mt-1 text-xs font-semibold text-[#2c1f0e]">Allergies</p>
                </article>
              </div>
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
            <p className="mt-2 text-sm leading-7 text-[#5a4535]">
              Start with a low, label-based approach, monitor your dog closely, and involve your
              veterinarian if symptoms continue or worsen.
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
              {"bullets" in section && Array.isArray(section.bullets) && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5a4535]">
                  {section.bullets.map((bullet: string) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.heading === "Signs you should stop and call a vet" && (
                <p className="mt-4 text-sm leading-7 text-[#5a4535]">
                  Learn more in our{" "}
                  <Link href="/dogs/probiotics/diarrhea" className="font-semibold text-[#e8734a]">
                    dog diarrhea support guide
                  </Link>
                  , read{" "}
                  <Link href="/blog/do-dogs-need-probiotics" className="font-semibold text-[#e8734a]">
                    do dogs need probiotics
                  </Link>
                  , or review our{" "}
                  <Link href="/health-conditions/diarrhea" className="font-semibold text-[#e8734a]">
                    diarrhea health conditions page
                  </Link>
                  .
                </p>
              )}
            </article>
          ))}
        </Container>
      </section>

      <section className="border-t border-[#2c1f0e]/10 bg-white py-12">
        <Container>
          <div className="rounded-2xl border border-[#2c1f0e]/10 bg-[#faf6f0] p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">
              Reviewed &amp; written for educational use
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5a4535]">
              This calculator is designed from general pet health guidance patterns and written for
              educational use by pet owners. It is not a diagnostic or treatment tool, and it should
              not replace veterinary care.
            </p>
            <p className="mt-2 text-sm leading-7 text-[#5a4535]">
              For persistent digestive symptoms, skin flare-ups, or repeated discomfort, consult a
              licensed veterinarian.
            </p>
          </div>
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
