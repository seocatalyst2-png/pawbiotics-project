import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";

const PAGE_URL = "https://pawbiotics.us/blog/dog-throwing-up-yellow-foam";

export const metadata: Metadata = {
  title: "Dog Throwing Up Yellow Foam: Causes and Next Steps",
  description:
    "Dog throwing up yellow foam? Learn what foam can mean, mild vs serious signs, and what to do next in simple language.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Dog Throwing Up Yellow Foam: Causes and Next Steps",
    description:
      "Dog throwing up yellow foam? Learn what foam can mean, mild vs serious signs, and what to do next in simple language.",
    url: PAGE_URL,
    type: "article",
  },
};

const faqs: FAQItem[] = [
  {
    question: "What is yellow foam when a dog throws up?",
    answer:
      "Yellow foam is often bile mixed with saliva and stomach fluid. It can appear when the stomach is mostly empty. Foam texture does not always mean severe illness. But repeat episodes should be reviewed by your vet.",
  },
  {
    question: "Is yellow foam different from yellow liquid vomit?",
    answer:
      "Yes, texture is the main difference. Foam is lighter and bubbly, while liquid is thinner and more fluid. Both can involve bile. The pattern, timing, and other symptoms help decide urgency.",
  },
  {
    question: "Can stomach irritation cause yellow foam?",
    answer:
      "Yes, mild stomach irritation can trigger yellow foam vomiting in some dogs. Diet changes, rich treats, stress, or long gaps between meals can contribute. Many mild cases improve quickly. If it keeps happening, your vet should evaluate the cause.",
  },
  {
    question: "When is yellow foam not serious?",
    answer:
      "A single mild event in a dog that is alert, drinking, and otherwise normal may be less urgent. Continue close monitoring for new symptoms. If the pattern repeats, it is no longer a simple one-time event. Call your veterinarian for guidance.",
  },
  {
    question: "When does yellow foam become serious?",
    answer:
      "It becomes more concerning when vomiting repeats, blood appears, or your dog cannot keep water down. Pain, weakness, dehydration, and appetite drop are also warning signs. These need prompt veterinary care. Early action is safer.",
  },
  {
    question: "Can I support digestion at home while monitoring?",
    answer:
      "You can offer small gentle meals, keep fresh water available, and avoid rich snacks. Track timing and frequency closely. For digestion support planning, tools and vet guidance can help. Do not delay care if red flags appear.",
  },
];

export default function DogThrowingUpYellowFoamPage() {
  return (
    <>
      <ArticleSchema
        headline="Dog Throwing Up Yellow Foam"
        description="Simple guide to yellow foam vomiting in dogs, mild vs serious signs, and practical steps."
        pageUrl={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://pawbiotics.us/" },
          { label: "Blog", href: "https://pawbiotics.us/blog" },
          { label: "Dog Throwing Up Yellow Foam", href: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container>
          <p className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Vomiting Pattern Guide
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Dog Throwing Up Yellow Foam
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
            Yellow foam can look scary. In many dogs, it is bile mixed with saliva when the stomach is
            empty or irritated. Mild cases can pass. Repeat or severe signs need veterinary care.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-brand-100 bg-white px-4 py-3 text-sm leading-7 text-gray-700 shadow-sm">
            Educational only. Always consult a licensed veterinarian for diagnosis or treatment.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <article className="rounded-3xl border border-brand-100 bg-brand-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Quick answer</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Yellow foam usually means bile with saliva and stomach fluid. It can happen with an empty
              stomach or mild irritation. One mild episode may pass. Repeating foam vomiting should be
              checked by a vet.
            </p>
          </article>
        </Container>
      </section>

      <section className="py-6">
        <Container className="space-y-5">
          <article className="rounded-3xl border border-teal-100 bg-teal-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Foam vs liquid: what is the difference?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Foam is bubbly and lighter. Liquid is more runny. Both can contain bile. The texture
              helps describe episodes to your veterinarian, but the full symptom picture matters more.
            </p>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Why yellow foam happens
            </h2>
            <ul className="mt-3 space-y-2">
              {[
                "Empty stomach",
                "Mild stomach irritation",
                "Digestive sensitivity",
                "Stress-related gut changes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                  <span className="mt-1 text-brand-700">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Digestion issues and yellow foam
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Some dogs with sensitive digestion have foam episodes during routine changes. If this is
              recurring, use a structured approach with your vet and review{" "}
              <Link href="/dogs/probiotics/digestion" className="font-semibold text-brand-700">
                digestion support guidance
              </Link>
              .
            </p>
          </article>

          <article className="rounded-3xl border border-sky-100 bg-sky-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Mild vs serious cases</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Mild cases are short and improve fast. Serious cases repeat, worsen, or include red flags
              like blood, pain, weakness, or dehydration.
            </p>
          </article>

          <article className="rounded-3xl border border-indigo-100 bg-indigo-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Cluster guides</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Read the main{" "}
              <Link href="/blog/dog-spewing-yellow" className="font-semibold text-brand-700">
                dog spewing yellow
              </Link>{" "}
              page, then compare{" "}
              <Link href="/blog/dog-vomiting-yellow-bile" className="font-semibold text-brand-700">
                yellow bile
              </Link>{" "}
              and{" "}
              <Link href="/blog/dog-vomiting-yellow-in-the-morning" className="font-semibold text-brand-700">
                morning yellow vomiting
              </Link>{" "}
              pages for more targeted help.
            </p>
          </article>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <article className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Key Takeaways</h2>
            <ul className="mt-4 space-y-2">
              {[
                "Yellow foam is often bile plus saliva.",
                "Texture helps describe the episode, but pattern matters most.",
                "One mild episode can pass with monitoring.",
                "Repeating episodes need veterinary review.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                  <span className="mt-1 text-brand-700">✔</span>
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
                "Foam vomiting happens again and again",
                "Your dog is weak, painful, or dehydrated",
                "Blood appears or vomiting is severe",
                "Your dog cannot keep food or water down",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-amber-900">
                  <span className="mt-1">⚠</span>
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
              <Link href="/tools/probiotic-calculator" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Probiotic calculator</Link>
              <Link href="/tools/dog-food-calculator" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Dog food calculator</Link>
              <Link href="/health-conditions/diarrhea" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Diarrhea guide</Link>
              <Link href="/contact" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Contact Pawbiotics</Link>
            </div>
          </article>
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
