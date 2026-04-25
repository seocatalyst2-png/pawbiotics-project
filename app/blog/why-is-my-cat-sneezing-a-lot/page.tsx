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
    question: "Why is my cat sneezing a lot?",
    answer:
      "Cats can sneeze more from dust, scent sprays, mild infections, or allergy triggers. A few sneezes may be normal. But if sneezing keeps happening for days, your cat should be checked by a veterinarian. Ongoing patterns usually need a closer look.",
  },
  {
    question: "Why is my cat sneezing and eyes watering?",
    answer:
      "Sneezing with watery eyes can happen with upper respiratory irritation, allergy triggers, or infection. It may start mild and then increase. If eye discharge becomes thick or your cat seems low energy, call your vet. Early care often helps faster recovery.",
  },
  {
    question: "Is cat sneezing a sign of illness?",
    answer:
      "Sometimes yes, sometimes no. A short sneeze burst can happen from temporary irritation in the air. Repeated sneezing with other signs like eye discharge, appetite drop, or fever can point to illness. Pattern plus symptoms matters more than one sneeze.",
  },
  {
    question: "Why does my cat sneeze multiple times in a row?",
    answer:
      "Cats keep sneezing in a row when the nose is irritated and trying to clear triggers. Dust, scents, mild infections, or inflammation can all cause this. If this happens often, note timing and environment. That record helps your vet find likely causes.",
  },
  {
    question: "Can allergies cause cat sneezing?",
    answer:
      "Yes, allergies can be one reason why cats sneeze. Triggers can include dust, litter changes, perfumes, and cleaning products. Some cats also show skin or eye symptoms at the same time. If triggers keep repeating, your vet can help with a safer long-term plan.",
  },
  {
    question: "What should I do if my cat keeps sneezing?",
    answer:
      "Start by reducing irritants at home and keeping your cat calm, hydrated, and comfortable. Avoid strong sprays or sudden litter changes. Track how often sneezing happens and whether other symptoms appear. If it continues, schedule a veterinary exam.",
  },
  {
    question: "When should I see a vet?",
    answer:
      "See a vet sooner if sneezing is constant, eye or nose discharge worsens, your cat stops eating, or fever signs appear. Kittens, seniors, and chronically ill cats should be seen early. If your cat seems weak or breathing looks harder, seek urgent care.",
  },
  {
    question: "Can I treat cat sneezing at home?",
    answer:
      "You can support mild cases by reducing irritants and monitoring closely, but home care is limited. Do not use human medicine unless your vet says it is safe. If symptoms continue or worsen, your cat needs professional evaluation. Early care prevents delays.",
  },
];

export default function WhyIsMyCatSneezingALotPage() {
  return (
    <>
      <ArticleSchema
        headline="Why Is My Cat Sneezing a Lot?"
        description="Simple guide to cat sneezing causes, warning signs, and practical next steps."
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
            Cat Health Guide
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Is My Cat Sneezing a Lot?
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
            Sneezing in cats can be normal sometimes. Dust or mild irritation may trigger short bursts.
            But if cats keep sneezing often, or other symptoms appear, it needs attention. This guide
            explains simple next steps.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-brand-100 bg-white px-4 py-3 text-sm leading-7 text-gray-700 shadow-sm">
            This content is for educational purposes. Always consult a veterinarian for medical advice.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <article className="rounded-3xl border border-brand-100 bg-brand-50/50 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Why is my cat sneezing a lot?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Many cats sneeze more from dust, allergy triggers, mild infections, or nose irritation.
              One short episode may pass. Ongoing sneezing or extra symptoms like watery eyes, no
              appetite, or fever signs should be checked by a vet.
            </p>
          </article>
        </Container>
      </section>

      <section className="py-6">
        <Container className="space-y-5">
          <article className="rounded-3xl border border-teal-100 bg-teal-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Is it normal for cats to sneeze?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Yes, an occasional sneeze can be normal. It can happen after brief dust exposure or
              strong smells. Trouble starts when sneezing becomes frequent, repeated, or paired with
              eye and appetite changes.
            </p>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Common causes of cat sneezing
            </h2>
            <ul className="mt-3 space-y-2">
              {[
                "Allergies and environmental triggers",
                "Dust or strong scents",
                "Mild respiratory infections",
                "Cold-like upper airway irritation",
                "Dental issues affecting nearby sinus areas",
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
              Why is my cat sneezing a lot and eyes watering?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              This combination can happen with mild infection or allergy irritation. If discharge stays
              clear and your cat acts normal, monitor closely. If discharge thickens or appetite drops,
              call your veterinarian early.
            </p>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-sky-100 bg-sky-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h2 className="font-serif text-2xl font-semibold text-gray-900">
                Cat sneezing in a row (what it means)
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                A burst of sneezes means the nose is irritated and trying to clear particles or mucus.
                It may be short and mild, or part of a recurring pattern. Repeating bursts should be
                logged and discussed with your vet.
              </p>
            </article>

            <article className="rounded-3xl border border-cyan-100 bg-cyan-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h2 className="font-serif text-2xl font-semibold text-gray-900">
                Cat coughing and sneezing (difference)
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Sneezing comes from the nose. Coughing comes from lower airways or throat. Cats can
                show both in some respiratory problems, so pattern tracking is useful for diagnosis.
              </p>
            </article>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-lime-100 bg-lime-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h2 className="font-serif text-2xl font-semibold text-gray-900">When it is not serious</h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                A brief sneeze burst with normal appetite, normal energy, and no strong discharge may be
                less urgent. Still watch closely for change.
              </p>
            </article>

            <article className="rounded-3xl border border-rose-100 bg-rose-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h2 className="font-serif text-2xl font-semibold text-gray-900">When it becomes serious</h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Constant sneezing, thick eye or nose discharge, fever signs, no eating, or low energy
                need fast veterinary review.
              </p>
            </article>
          </div>

          <article className="rounded-3xl border border-indigo-100 bg-indigo-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">What you can do at home</h2>
            <ul className="mt-3 space-y-2">
              {[
                "Reduce dust and strong scents",
                "Keep litter area clean and low-irritant",
                "Offer fresh water and monitor appetite",
                "Track sneezing frequency and discharge changes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                  <span className="mt-1 text-brand-700">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-violet-100 bg-violet-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Should I take my cat to the vet?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Yes, if sneezing keeps happening or extra symptoms appear. It is safer to check early
              than to wait. For related cross-pet digestive reading, you can also view{" "}
              <Link href="/blog/dog-spewing-yellow" className="font-semibold text-brand-700">
                dog spewing yellow
              </Link>{" "}
              for symptom-pattern tracking ideas.
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
                "Cat sneezing a lot can be mild or serious depending on pattern.",
                "Dust, allergies, and infections are common reasons cats keep sneezing.",
                "Eye discharge, no eating, and fever signs need faster vet care.",
                "Simple home steps can help mild cases while you monitor.",
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
                "Eye discharge becomes thick or colored",
                "Fever signs or low energy appear",
                "Your cat stops eating or drinks less",
                "Sneezing stays constant for days",
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
              <Link href="/health-conditions/allergies" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Allergy guide
              </Link>
              <Link href="/health-conditions/itchy-skin" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Itchy skin guide
              </Link>
              <Link href="/tools/probiotic-calculator" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Probiotic calculator
              </Link>
              <Link href="/blog/dog-spewing-yellow" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Dog spewing yellow
              </Link>
              <Link href="/contact" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Contact Pawbiotics
              </Link>
              <Link href="/vets/houston-tx" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Houston vets
              </Link>
            </div>
          </article>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <article className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Talk to a local vet</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/vets/houston-tx" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Houston
              </Link>
              <Link href="/vets/dallas-tx" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Dallas
              </Link>
              <Link href="/vets/austin-tx" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Austin
              </Link>
              <Link href="/vets/miami-fl" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">
                Miami
              </Link>
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
