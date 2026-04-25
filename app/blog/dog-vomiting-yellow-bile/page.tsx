import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";

const PAGE_URL = "https://pawbiotics.us/blog/dog-vomiting-yellow-bile";

export const metadata: Metadata = {
  title: "Dog Vomiting Yellow Bile: Causes and What To Do",
  description:
    "Dog vomiting yellow bile? Learn what bile means, why it happens, and simple steps to help your dog safely.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Dog Vomiting Yellow Bile: Causes and What To Do",
    description:
      "Dog vomiting yellow bile? Learn what bile means, why it happens, and simple steps to help your dog safely.",
    url: PAGE_URL,
    type: "article",
  },
};

const faqs: FAQItem[] = [
  {
    question: "What is yellow bile in dog vomit?",
    answer:
      "Yellow bile is digestive fluid made by the liver and stored in the gallbladder. It helps break down food in the gut. When a dog vomits on an empty stomach, bile can come up. It often looks yellow or yellow-green.",
  },
  {
    question: "Is yellow bile different from normal vomit?",
    answer:
      "Yes, it can be. Normal vomit may include food, water, or foam. Bile vomit is usually more yellow and often happens when little food is in the stomach. The color and timing can help your vet understand the pattern.",
  },
  {
    question: "Why does my dog vomit bile but act normal?",
    answer:
      "Some dogs have mild bile vomiting with no other strong symptoms. This can happen after long gaps between meals. Even if your dog seems okay, repeated episodes should still be discussed with your vet. Pattern and frequency matter.",
  },
  {
    question: "Can I treat bile vomiting at home first?",
    answer:
      "For a mild one-time episode, you can monitor and keep water available. Offer small, gentle meals and avoid rich snacks. Do not give human medicine unless your vet says it is safe. Repeating episodes need professional guidance.",
  },
  {
    question: "When is bile vomiting serious?",
    answer:
      "It is more serious if vomiting repeats, blood appears, or your dog cannot keep water down. Pain, weakness, dehydration, and appetite loss are also warning signs. Puppies, seniors, and dogs with chronic illness should be seen sooner.",
  },
  {
    question: "Can probiotics help with bile-related vomiting?",
    answer:
      "In some mild digestive patterns, probiotics may support gut balance. They are a support tool, not a cure for urgent illness. Use dog-specific products and ask your veterinarian for proper use. If symptoms continue, your dog needs medical evaluation.",
  },
];

export default function DogVomitingYellowBilePage() {
  return (
    <>
      <ArticleSchema
        headline="Dog Vomiting Yellow Bile"
        description="Simple guide to yellow bile vomiting in dogs."
        pageUrl={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://pawbiotics.us/" },
          { label: "Blog", href: "https://pawbiotics.us/blog" },
          { label: "Dog Vomiting Yellow Bile", href: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container>
          <p className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Digestive Help
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Dog Vomiting Yellow Bile
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
            Yellow bile vomit usually means your dog threw up digestive fluid with little or no food.
            It can happen after long gaps between meals. It may be mild, but repeat episodes should
            always be reviewed by a veterinarian.
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
              Yellow bile vomit often happens when the stomach is empty. It can also happen with mild
              gut irritation. A single mild episode may pass. Repeated bile vomiting needs a vet
              check.
            </p>
          </article>
        </Container>
      </section>

      <section className="py-6">
        <Container className="space-y-5">
          <article className="rounded-3xl border border-teal-100 bg-teal-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">What is bile?</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Bile is a digestive fluid. The liver makes it. The gallbladder stores it. It helps break
              down fats after meals.
            </p>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Why dogs vomit yellow bile
            </h2>
            <ul className="mt-3 space-y-2">
              {[
                "Long time without food",
                "Mild stomach irritation",
                "Sudden diet or treat changes",
                "Stress-related gut sensitivity",
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
              Bile vs regular vomit
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Bile vomit is usually yellow and often appears when the stomach is mostly empty. Regular
              vomit may contain food pieces. Color and timing are useful clues for your vet.
            </p>
          </article>

          <article className="rounded-3xl border border-sky-100 bg-sky-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Mild treatment guidance
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Keep water available. Give small, bland meals. Avoid fatty treats. Track when vomiting
              happens and how often. If it repeats, call your vet.
            </p>
          </article>

          <article className="rounded-3xl border border-indigo-100 bg-indigo-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Helpful next steps
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Start with the main{" "}
              <Link href="/blog/dog-spewing-yellow" className="font-semibold text-brand-700">
                dog spewing yellow
              </Link>{" "}
              guide, then compare related pages on{" "}
              <Link href="/blog/dog-throwing-up-yellow-foam" className="font-semibold text-brand-700">
                yellow foam
              </Link>{" "}
              and{" "}
              <Link href="/blog/dog-vomiting-yellow-in-the-morning" className="font-semibold text-brand-700">
                morning vomiting
              </Link>
              .
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
                "Yellow bile often appears with an empty stomach.",
                "One mild episode may not be urgent.",
                "Repeated bile vomiting needs vet review.",
                "Track timing and pattern to help diagnosis.",
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
                "Vomiting repeats or worsens",
                "Blood appears in vomit",
                "Your dog seems weak, painful, or dehydrated",
                "Your dog cannot keep water down",
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
              <Link href="/dogs/probiotics/digestion" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Dog digestion support</Link>
              <Link href="/contact" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Contact Pawbiotics</Link>
            </div>
          </article>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <article className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Talk to a local vet</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/vets/houston-tx" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Houston</Link>
              <Link href="/vets/dallas-tx" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Dallas</Link>
              <Link href="/vets/austin-tx" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Austin</Link>
              <Link href="/vets/miami-fl" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700">Miami</Link>
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
