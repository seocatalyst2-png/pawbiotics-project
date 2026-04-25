import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CategoryCard from "@/components/CategoryCard";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pet Health Conditions",
  description:
    "Browse common health conditions in dogs and cats. Learn the basics, signs to watch, and supportive care options.",
  alternates: {
    canonical: "https://pawbiotics.us/health-conditions",
  },
  openGraph: {
    title: "Pet Health Conditions",
    description:
      "Browse common health conditions in dogs and cats. Learn the basics, signs to watch, and supportive care options.",
    url: "https://pawbiotics.us/health-conditions",
    type: "website",
  },
};

const conditions = [
  {
    href: "/health-conditions/diarrhea",
    title: "Diarrhea & Upset Stomach",
    description: "Common causes, when to see a vet, and supportive care.",
    icon: "💧",
    cardClassName: "border-teal-100 bg-teal-50/60 hover:border-teal-200",
    iconClassName: "bg-white/80",
  },
  {
    href: "/health-conditions/allergies",
    title: "Allergies",
    description: "Food, skin, and environmental allergies explained simply.",
    icon: "🌾",
    cardClassName: "border-amber-100 bg-amber-50/60 hover:border-amber-200",
    iconClassName: "bg-white/80",
  },
  {
    href: "/health-conditions/itchy-skin",
    title: "Itchy Skin",
    description: "Causes of itching and how to calm irritated skin.",
    icon: "✨",
    cardClassName: "border-emerald-100 bg-emerald-50/60 hover:border-emerald-200",
    iconClassName: "bg-white/80",
  },
  {
    href: "/health-conditions/yeast-imbalance",
    title: "Yeast Imbalance",
    description: "Signs of yeast overgrowth and supportive steps.",
    icon: "🍃",
    cardClassName: "border-sky-100 bg-sky-50/60 hover:border-sky-200",
    iconClassName: "bg-white/80",
  },
  {
    href: "/health-conditions/urinary-health",
    title: "Urinary Health",
    description: "UTIs, hydration, and urinary support for pets.",
    icon: "🫧",
    cardClassName: "border-yellow-100 bg-yellow-50/70 hover:border-yellow-200",
    iconClassName: "bg-white/80",
  },
  {
    href: "/health-conditions/bad-breath",
    title: "Bad Breath",
    description: "Dental hygiene and gut factors behind pet breath.",
    icon: "🦷",
    cardClassName: "border-orange-100 bg-orange-50/60 hover:border-orange-200",
    iconClassName: "bg-white/80",
  },
  {
    href: "/health-conditions/weight-management",
    title: "Weight Management",
    description: "Practical tips for healthy weight in pets.",
    icon: "⚖️",
    cardClassName: "border-violet-100 bg-violet-50/60 hover:border-violet-200",
    iconClassName: "bg-white/80",
  },
  {
    href: "/health-conditions/anxiety-stress",
    title: "Anxiety & Stress",
    description: "Calming strategies and the gut-brain connection.",
    icon: "🧘",
    cardClassName: "border-rose-100 bg-rose-50/60 hover:border-rose-200",
    iconClassName: "bg-white/80",
  },
];

const vetWarningCards = [
  {
    title: "Severe symptoms appear quickly",
    description:
      "If your dog or cat suddenly declines, do not delay. Rapid worsening usually needs same-day care.",
  },
  {
    title: "Symptoms last beyond 24-48 hours",
    description:
      "If symptoms continue despite supportive home care, book a veterinary exam for a clearer diagnosis.",
  },
  {
    title: "Blood, pain, vomiting, dehydration, or lethargy",
    description:
      "These are high-priority red flags. Prompt veterinary evaluation helps prevent dangerous progression.",
  },
  {
    title: "Your pet has chronic conditions",
    description:
      "Puppies, seniors, and pets with chronic disease can destabilize faster and should be reviewed early.",
  },
];

const healthFaqs: FAQItem[] = [
  {
    question: "What are the most common pet health conditions?",
    answer:
      "Common concerns include diarrhea, allergies, itchy skin, urinary issues, bad breath, anxiety, and weight changes. Many of these begin with subtle signs like appetite change or lower energy. Early tracking helps you decide whether home support is enough or whether your pet needs medical care.",
  },
  {
    question: "When should I call a vet for my dog or cat?",
    answer:
      "Call your vet when symptoms are severe, persist beyond 24 to 48 hours, or include red flags such as blood, repeated vomiting, dehydration, pain, or lethargy. Pets with chronic illness, very young pets, and seniors should usually be seen sooner rather than later.",
  },
  {
    question: "Can probiotics help common pet health issues?",
    answer:
      "In many mild digestive and stress-related cases, probiotics may support gut balance as part of a broader routine. They are not a replacement for diagnosis when symptoms are severe or persistent. Use pet-specific products and discuss strain/dose choices with your veterinarian.",
  },
  {
    question: "Are these guides a substitute for veterinary care?",
    answer:
      "No. These guides are educational and designed to help you recognize patterns and make faster care decisions. They support conversations with your veterinarian but do not replace professional diagnosis, testing, or treatment plans.",
  },
  {
    question: "How do I know if my pet's symptoms are serious?",
    answer:
      "Serious signs include sudden weakness, dehydration, persistent vomiting, blood in stool/urine, breathing difficulty, ongoing pain, or refusal to eat and drink. If you are uncertain, it is safer to call your vet early and share a concise symptom timeline.",
  },
  {
    question: "Should I use a local vet for recurring symptoms?",
    answer:
      "Yes. Recurring symptoms usually need continuity, follow-up, and sometimes diagnostic testing over time. A trusted local clinic can track patterns across visits and adjust treatment more accurately than one-off urgent care alone.",
  },
];

export default function HealthConditionsPage() {
  return (
    <>
      <FAQSchema faqs={healthFaqs} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            Health Conditions
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Common Pet Health Conditions
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Explore clear, practical guidance for common dog and cat health concerns. Each guide helps
            you understand symptoms, supportive options, and when it is time to contact a veterinarian.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/tools/probiotic-calculator" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Probiotic Calculator
            </Link>
            <Link href="/tools/dog-food-calculator" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Dog Food Calculator
            </Link>
            <Link href="/blog/do-dogs-need-probiotics" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Do Dogs Need Probiotics?
            </Link>
            <Link href="/vets/houston-tx" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Houston Vets
            </Link>
            <Link href="/contact" className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Contact
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/30 py-14">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">
            Explore Common Dog and Cat Health Concerns
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
            Choose a condition card to open a dedicated guide with causes, symptom checks, supportive
            care, and practical next steps.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.map((c) => (
              <CategoryCard key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">When Should You Call a Vet?</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vetWarningCards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-14">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Pet Health FAQs</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
            Quick answers to common questions pet parents ask before choosing a condition guide or
            deciding whether to book a veterinary visit.
          </p>
          <div className="mt-6">
            <FaqAccordion items={healthFaqs} />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-gray-500">
            This information is educational and not a substitute for professional veterinary advice.
            Always consult your veterinarian for diagnosis and treatment.
          </p>
        </Container>
      </section>
    </>
  );
}
