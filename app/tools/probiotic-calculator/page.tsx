import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
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

const educationalCards = [
  {
    heading: "How This Calculator Works",
    body: "The tool uses weight bands, age group, and your main concern to generate general guidance. It is not a prescription and does not replace veterinary care.",
  },
  {
    heading: "When Probiotics May Help Dogs",
    body: "Probiotics may support gut balance during mild digestive changes, occasional gas, or post-antibiotic transitions when used carefully.",
  },
  {
    heading: "When Probiotics Are Not Enough",
    body: "If symptoms are severe, persistent, or worsening, probiotics should not delay diagnosis. Prompt veterinary evaluation is the safer path.",
  },
  {
    heading: "How to Introduce Probiotics Safely",
    body: "Start with a low, label-based approach, add changes gradually, and monitor stool quality, appetite, and comfort over several days.",
  },
  {
    heading: "What to Look for in a Dog Probiotic",
    body: "Choose products with clear strain details, species-appropriate labeling, storage guidance, and instructions matched to your dog's size.",
  },
  {
    heading: "Probiotics by Dog Size",
    body: "Small, medium, and large dogs may need different typical label ranges. Product instructions vary, so compare labels and ask your veterinarian.",
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

      <section className="border-b border-[#2c1f0e]/10 bg-[#f8f3ea] py-6">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-[#8a7060]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#e8734a]">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link href="/tools/probiotic-calculator" className="hover:text-[#e8734a]">
                  Tools
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="font-medium text-[#5a4535]">Probiotic Calculator</li>
            </ol>
          </nav>
        </Container>
      </section>

      <section className="border-b border-[#2c1f0e]/10 bg-gradient-to-b from-[#faf6f0] to-[#f8f3ea] py-14">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-[#e8734a]/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-[#e8734a]">
                🌿 Free Pet Health Tool
              </p>
              <h1 className="mt-4 font-serif text-3xl font-bold text-[#2c1f0e] sm:text-4xl">
                Dog Probiotic <span className="text-[#2f8f9d]">Dosage</span> Calculator
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

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Small Dogs", note: "Up to 20 lbs" },
                { label: "Medium Dogs", note: "21 to 60 lbs" },
                { label: "Large Dogs", note: "61+ lbs" },
                { label: "All Breeds", note: "General guidance" },
              ].map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-[#2c1f0e]">{item.label}</p>
                  <p className="mt-1 text-xs text-[#8a7060]">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8f3ea] py-8">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1f6f78] via-[#246f74] to-[#1f6f78] p-6 text-white shadow-lg">
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-10 left-1/3 h-32 w-32 rounded-full bg-white/10" />
            <p className="text-sm font-semibold tracking-wide text-white/90">⚡ Quick Answer</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold">No single dose fits every dog.</h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-white/90">
              The right amount depends on your dog&apos;s weight, age, symptoms, product label, and
              veterinary guidance. Use this tool for general guidance only.
            </p>
          </div>
        </Container>
      </section>

      <CalculatorToolClient />

      <section className="border-t border-[#2c1f0e]/10 bg-white py-12">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {educationalCards.map((section) => (
              <article
                key={section.heading}
                className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-5 shadow-sm"
              >
                <h2 className="font-serif text-xl font-semibold text-[#2c1f0e]">{section.heading}</h2>
                <p className="mt-3 text-sm leading-7 text-[#5a4535]">{section.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#d9b788] bg-[#fff3df] py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">Related guides</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {resourceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-[#d9b788] bg-white px-4 py-2 text-sm font-medium text-[#5a4535] hover:border-[#e8734a]/40 hover:text-[#e8734a]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#2c1f0e]/10 bg-[#f8f3ea] py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">
              Frequently Asked Questions
            </h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-[#2c1f0e]/10 bg-white p-4 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-sm font-semibold text-[#2c1f0e]">
                    {faq.question}
                    <span className="text-[#8a7060] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#5a4535]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#2f8f9d]/20 bg-[#eaf6f7] py-12">
        <Container>
          <div className="mx-auto max-w-5xl rounded-2xl border border-[#2f8f9d]/20 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-[#1f6f78]">Need a Vet&apos;s Opinion?</h2>
            <p className="mt-2 text-sm leading-7 text-[#3f5f62]">
              For personalized care decisions, connect with a licensed veterinarian in your area.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {localVetLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-[#2f8f9d]/25 bg-[#f4fbfc] px-4 py-2 text-sm font-medium text-[#2a6d74] hover:border-[#2f8f9d]/45"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#2c1f0e]/10 bg-[#f8f3ea] pb-14 pt-10">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-[#2c1f0e]/10 bg-white p-6 text-center shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">
              Reviewed &amp; written for educational use
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5a4535]">
              This calculator provides educational guidance only. It does not diagnose, treat, or
              prescribe. Product instructions vary, and a licensed veterinarian should guide final
              decisions.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
