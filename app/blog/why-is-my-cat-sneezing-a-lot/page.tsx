import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";

const PAGE_URL = "https://pawbiotics.us/blog/why-is-my-cat-sneezing-a-lot";

export const metadata: Metadata = {
  title: "Why Is My Cat Sneezing a Lot? Causes, Symptoms & What To Do",
  description:
    "Why is your cat sneezing a lot? Learn common causes, when it’s serious, and simple steps to help your cat feel better.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Why Is My Cat Sneezing a Lot? Causes, Symptoms & What To Do",
    description:
      "Why is your cat sneezing a lot? Learn common causes, when it’s serious, and simple steps to help your cat feel better.",
    url: PAGE_URL,
    type: "article",
  },
};

const faqs: FAQItem[] = [
  {
    question: "Why is my cat sneezing so much all of a sudden?",
    answer:
      "Sudden sneezing can happen from irritants like dust, sprays, litter changes, or mild upper airway infections. Sometimes it settles quickly. If sneezing continues or other signs appear, your cat should be examined.",
  },
  {
    question: "What does frequent sneezing in episodes mean?",
    answer:
      "Episode sneezing often means the nose is repeatedly irritated. Triggers can be environmental or infection-related. Track timing and associated signs to help your vet identify likely causes.",
  },
  {
    question: "Is occasional sneezing normal in cats?",
    answer:
      "Yes, occasional sneezing can happen in healthy cats. Concern rises when sneezing becomes daily, lasts for days, or appears with eye discharge, appetite changes, or low energy.",
  },
  {
    question: "When does cat sneezing become serious?",
    answer:
      "Treat sneezing as more serious when discharge turns thick or colored, appetite drops, breathing looks harder, or your cat becomes weak. Kittens and seniors should be checked sooner.",
  },
  {
    question: "Can allergies cause frequent sneezing patterns?",
    answer:
      "Yes. Allergies can cause repeating sneezing episodes, especially with environmental triggers. But recurring sneezing still needs veterinary review to rule out infection or dental causes.",
  },
  {
    question: "What should I track before a vet visit?",
    answer:
      "Track frequency, episode timing, discharge type, appetite, energy, and any trigger changes at home. Short notes and videos can speed diagnosis and treatment planning.",
  },
  {
    question: "Can I treat frequent sneezing at home only?",
    answer:
      "Home support can help mild irritation, but persistent patterns should not rely on home care alone. Avoid human medications unless your vet approves them for your cat.",
  },
];

export default function WhyIsMyCatSneezingALotPage() {
  const relatedGuides = [
    {
      label: "Cat cold symptoms",
      href: "/blog/cat-cold-symptoms",
      description: "Compare sneezing episodes with cold-style symptom patterns.",
      cardClass: "border-teal-100 bg-teal-50/70",
    },
    {
      label: "Why is my cat breathing heavy?",
      href: "/blog/why-is-my-cat-breathing-heavy",
      description: "Escalate faster when sneezing overlaps breathing concerns.",
      cardClass: "border-amber-100 bg-amber-50/70",
    },
    {
      label: "Why is my cat drooling?",
      href: "/blog/why-is-my-cat-drooling",
      description: "Cross-check oral and upper-airway symptom overlap.",
      cardClass: "border-violet-100 bg-violet-50/70",
    },
    {
      label: "Cat not drinking water",
      href: "/blog/cat-not-drinking-water",
      description: "Hydration tracking when illness signs continue.",
      cardClass: "border-rose-100 bg-rose-50/70",
    },
  ];

  return (
    <>
      <ArticleSchema
        headline="Why Is My Cat Sneezing a Lot?"
        description="Learn frequent cat sneezing patterns, episode clues, serious warning signs, and when to call your vet."
        pageUrl={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://pawbiotics.us/" },
          { label: "Blog", href: "https://pawbiotics.us/blog" },
          { label: "Why Is My Cat Sneezing a Lot?", href: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container>
          <p className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Cat Symptom Guide
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Is My Cat Sneezing a Lot?
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
            Frequent sneezing can come from mild irritation, but it can also point to upper-airway illness.
            This page explains why your cat may be sneezing so much, what episode patterns mean, and when
            frequent sneezing becomes serious.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-brand-100 bg-white px-4 py-3 text-sm leading-7 text-gray-700 shadow-sm">
            This content is educational only. It is not a diagnosis. Talk to a veterinarian for treatment decisions.
          </p>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <article className="rounded-3xl border border-brand-100 bg-brand-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Quick answer: why is my cat sneezing so much?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Cats can sneeze frequently because of dust, scent triggers, allergy inflammation, mild infection,
              or other nasal irritation. Repeated sneezing episodes with discharge, appetite loss, or low energy
              need early veterinary review.
            </p>
          </article>
        </Container>
      </section>

      <section className="py-6">
        <Container className="space-y-5">
          <article className="rounded-3xl border border-teal-100 bg-teal-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Frequent sneezing patterns</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Pattern matters more than one sneeze. Daily sneezing, multi-day clusters, or repeat episodes at
              certain times can help identify triggers and urgency.
            </p>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Sneezing in episodes</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Sneezing in a row can mean the nose is trying to clear irritation. If episodes become longer,
              more frequent, or include thick discharge, your cat should be checked soon.
            </p>
          </article>

          <article className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Common causes to consider</h2>
            <ul className="mt-3 space-y-2">
              {[
                "Dust, litter, sprays, or smoke exposure",
                "Allergy-related nasal irritation",
                "Upper respiratory infection patterns",
                "Dental or oral issues affecting nearby tissues",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                  <span className="mt-1 text-brand-700">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-cyan-100 bg-cyan-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Real-world example: repeated evening episodes</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              A cat may sneeze mostly at night after litter cleaning or room spray use. Pattern logging helped
              the owner identify triggers and get earlier veterinary guidance when symptoms continued.
            </p>
          </article>

          <article className="rounded-3xl border border-indigo-100 bg-indigo-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Common mistakes</h2>
            <ul className="mt-3 space-y-2">
              {[
                "Assuming frequent sneezing is always harmless",
                "Waiting too long when discharge gets thicker",
                "Using human medicine without veterinary advice",
                "Ignoring appetite and energy changes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                  <span className="mt-1 text-brand-700">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-violet-100 bg-violet-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Practical checklist</h2>
            <ul className="mt-3 space-y-2">
              {[
                "How often episodes happen each day",
                "Whether sneezing is isolated or in bursts",
                "Eye or nose discharge type and color",
                "Appetite, water intake, and energy trend",
                "Any new environmental triggers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                  <span className="mt-1 text-brand-700">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <article className="rounded-3xl border border-amber-200 bg-amber-50/70 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-amber-900">When to Call a Vet</h2>
            <ul className="mt-4 space-y-2">
              {[
                "Frequent sneezing for several days with no improvement",
                "Thick yellow or green eye or nose discharge",
                "Appetite drop, low energy, or fever-like behavior",
                "Breathing effort, open-mouth breathing, or weakness",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-amber-900">
                  <span className="mt-1">!</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <article className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Key Takeaways</h2>
            <ul className="mt-4 space-y-2">
              {[
                "Frequent sneezing patterns are more important than one isolated sneeze.",
                "Episode tracking helps vets diagnose faster.",
                "Sneezing with appetite or energy decline needs earlier care.",
                "Do not rely on home treatment alone when symptoms persist.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                  <span className="mt-1 text-brand-700">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <article className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Helpful links</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/blog/cat-cold-symptoms" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Cat cold symptoms
              </Link>
              <Link href="/blog/why-is-my-cat-breathing-heavy" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Why is my cat breathing heavy?
              </Link>
              <Link href="/blog/why-is-my-cat-drooling" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Why is my cat drooling?
              </Link>
              <Link href="/health-conditions/allergies" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Allergy condition guide
              </Link>
              <Link href="/health-conditions/itchy-skin" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Itchy skin condition guide
              </Link>
              <Link href="/tools/probiotic-calculator" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Probiotic calculator
              </Link>
              <Link href="/vets/houston-tx" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Houston vets
              </Link>
              <Link href="/contact" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Contact Pawbiotics
              </Link>
            </div>
          </article>
        </Container>
      </section>

      <section className="py-6">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Related Pet Health Guides</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={`group block rounded-3xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${guide.cardClass}`}
              >
                <h3 className="font-serif text-xl font-semibold text-gray-900 group-hover:text-brand-700">{guide.label}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{guide.description}</p>
                <p className="mt-3 text-sm font-semibold text-brand-700">Read guide {"->"}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/30 py-12">
        <Container>
          <FaqAccordion items={faqs} />
        </Container>
      </section>
    </>
  );
}
