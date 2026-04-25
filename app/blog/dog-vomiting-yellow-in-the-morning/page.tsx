import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";

const PAGE_URL = "https://pawbiotics.us/blog/dog-vomiting-yellow-in-the-morning";

export const metadata: Metadata = {
  title: "Dog Vomiting Yellow in the Morning: Why It Happens",
  description:
    "Dog vomiting yellow in the morning? Learn why empty stomach bile can trigger it and practical feeding schedule tips.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Dog Vomiting Yellow in the Morning: Why It Happens",
    description:
      "Dog vomiting yellow in the morning? Learn why empty stomach bile can trigger it and practical feeding schedule tips.",
    url: PAGE_URL,
    type: "article",
  },
};

const faqs: FAQItem[] = [
  {
    question: "Why does my dog vomit yellow in the morning?",
    answer:
      "A common reason is a long overnight gap without food. When the stomach is empty, bile can build up and irritate the gut. This can trigger early-morning yellow vomiting. Repeated episodes should be checked by your vet.",
  },
  {
    question: "Is morning yellow vomit always serious?",
    answer:
      "Not always. A single mild episode may happen in otherwise stable dogs. But repeated morning vomiting is different and needs attention. If other warning signs appear, seek veterinary care quickly.",
  },
  {
    question: "Can feeding schedule changes help?",
    answer:
      "In some dogs, yes. Smaller meals spaced better through the day, including a light late-evening meal, may reduce empty-stomach irritation. Make changes gradually, not all at once. Discuss major changes with your veterinarian.",
  },
  {
    question: "What is bile buildup overnight?",
    answer:
      "Overnight, the stomach may stay empty for many hours. Bile can still move into the upper digestive tract and irritate the stomach lining. This can lead to yellow vomit in the morning. Timing patterns are important clues.",
  },
  {
    question: "Can I prevent morning yellow vomiting?",
    answer:
      "Some prevention steps include stable meal timing, avoiding late rich treats, and keeping a predictable routine. Track episodes and food timing in a simple log. If it continues, your vet can help adjust diet strategy safely.",
  },
  {
    question: "When should I call a vet for morning vomiting?",
    answer:
      "Call sooner if episodes repeat, your dog seems weak, or there is blood, pain, dehydration, or appetite loss. Puppies, seniors, and chronically ill dogs should be seen earlier. Waiting too long can increase risk.",
  },
];

export default function DogVomitingYellowInTheMorningPage() {
  return (
    <>
      <ArticleSchema
        headline="Dog Vomiting Yellow in the Morning"
        description="Simple guide to morning yellow vomit in dogs and practical feeding schedule support."
        pageUrl={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://pawbiotics.us/" },
          { label: "Blog", href: "https://pawbiotics.us/blog" },
          { label: "Dog Vomiting Yellow in the Morning", href: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container>
          <p className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Morning Pattern Guide
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Dog Vomiting Yellow in the Morning
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
            Morning yellow vomit often points to an empty stomach pattern. Overnight bile irritation
            can trigger it in some dogs. Timing changes may help mild cases, but repeat episodes should
            still be checked by a veterinarian.
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
              Morning yellow vomiting often happens when your dog&apos;s stomach stays empty overnight.
              Bile can irritate the stomach and trigger vomiting. A feeding schedule fix may help some
              mild cases. Repeating episodes still need vet review.
            </p>
          </article>
        </Container>
      </section>

      <section className="py-6">
        <Container className="space-y-5">
          <article className="rounded-3xl border border-teal-100 bg-teal-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Empty stomach effect</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Long fasting windows can irritate some dogs. If meals are too far apart, yellow bile may
              come up in the morning.
            </p>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Bile buildup overnight explained
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Bile helps digestion, but if it sits in an empty stomach pattern, it can irritate the
              lining. This can trigger yellow vomit before breakfast.
            </p>
          </article>

          <article className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Feeding schedule fixes
            </h2>
            <ul className="mt-3 space-y-2">
              {[
                "Use smaller meals at steady times",
                "Avoid long overnight gaps when possible",
                "Discuss a light late-evening meal with your vet",
                "Change schedule gradually",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                  <span className="mt-1 text-brand-700">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-sky-100 bg-sky-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Prevention tips</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Keep routine stable, avoid late rich snacks, and track morning patterns. If symptoms keep
              repeating, your vet may suggest diet timing or digestive support adjustments.
            </p>
          </article>

          <article className="rounded-3xl border border-indigo-100 bg-indigo-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Cluster guide links</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Start with the main{" "}
              <Link href="/blog/dog-spewing-yellow" className="font-semibold text-brand-700">
                dog spewing yellow
              </Link>{" "}
              page. Then compare{" "}
              <Link href="/blog/dog-vomiting-yellow-bile" className="font-semibold text-brand-700">
                yellow bile causes
              </Link>{" "}
              and{" "}
              <Link href="/blog/dog-throwing-up-yellow-foam" className="font-semibold text-brand-700">
                yellow foam patterns
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
                "Morning yellow vomit often links to empty stomach timing.",
                "Overnight bile irritation is a common pattern.",
                "Meal schedule changes can help some mild cases.",
                "Repeat episodes should be reviewed by a vet.",
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
                "Morning vomiting repeats for multiple days",
                "Your dog has pain, weakness, or dehydration",
                "Blood appears in vomit",
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
