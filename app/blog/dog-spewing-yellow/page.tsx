import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/Schema";
import type { FAQItem } from "@/lib/seo";

const PAGE_URL = "https://pawbiotics.us/blog/dog-spewing-yellow";

export const metadata: Metadata = {
  title: "Dog Spewing Yellow: Causes, What It Means & What To Do",
  description:
    "Dog spewing yellow liquid? Learn why it happens, what it means, and when to see a vet with simple, clear guidance.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Dog Spewing Yellow: Causes, What It Means & What To Do",
    description:
      "Dog spewing yellow liquid? Learn why it happens, what it means, and when to see a vet with simple, clear guidance.",
    url: PAGE_URL,
    type: "article",
  },
};

const faqs: FAQItem[] = [
  {
    question: "Why is my dog spewing yellow liquid?",
    answer:
      "Yellow vomit is often bile. Bile can come up when a dog has an empty stomach for too long. It can also happen with mild stomach irritation. If it keeps happening, your vet should check your dog.",
  },
  {
    question: "Is yellow vomit dangerous?",
    answer:
      "Sometimes it is mild. Sometimes it is a warning sign. One small episode may pass, but repeated vomiting is different. If your dog seems weak, painful, or dehydrated, seek vet care quickly.",
  },
  {
    question: "Why does it happen in the morning?",
    answer:
      "Morning yellow vomit can happen after a long gap without food overnight. The empty stomach plus bile can irritate the gut lining. A small late-evening meal may help some dogs. Ask your vet before making major feeding changes.",
  },
  {
    question: "What does yellow foam mean?",
    answer:
      "Yellow foam is often bile mixed with saliva and stomach fluid. It can appear when the stomach is mostly empty. It does not always mean a severe problem, but it should still be watched. If episodes repeat, your vet should evaluate the cause.",
  },
  {
    question: "Can I treat it at home?",
    answer:
      "For a mild, single episode in an otherwise normal dog, you can monitor closely and keep water available. Offer small, gentle meals and avoid rich treats. Do not use human medicines without vet guidance. If vomiting continues, call your veterinarian.",
  },
  {
    question: "When should I see a vet?",
    answer:
      "See a vet if vomiting repeats, your dog cannot keep water down, or there is blood, pain, weakness, or dehydration. Puppies, seniors, and dogs with chronic disease should be seen earlier. It is safer to call early than to wait too long.",
  },
  {
    question: "Can probiotics help if my dog is vomiting bile?",
    answer:
      "In some cases, gut-support probiotics may help overall digestive balance. They are supportive, not a cure for serious vomiting. Use dog-specific products and discuss timing with your vet. If symptoms continue, medical review is still needed.",
  },
];

export default function DogSpewingYellowPage() {
  return (
    <>
      <ArticleSchema
        headline="Dog Spewing Yellow"
        description="Simple guide to dog spewing yellow bile, common causes, and when to see a vet."
        pageUrl={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://pawbiotics.us/" },
          { label: "Blog", href: "https://pawbiotics.us/blog" },
          { label: "Dog Spewing Yellow", href: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container>
          <p className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Digestive Health Guide
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Dog Spewing Yellow
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
            If your dog is spewing yellow liquid, it is often bile. This can happen when the stomach
            is empty. It can also happen with mild digestive upset. Most mild cases improve fast, but
            repeat episodes need veterinary advice.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-brand-100 bg-white px-4 py-3 text-sm leading-7 text-gray-700 shadow-sm">
            This content is for educational purposes. Always consult a veterinarian for medical advice.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <article className="rounded-3xl border border-brand-100 bg-brand-50/50 p-6 shadow-sm">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
              <span aria-hidden>💬</span>
              Quick Answer
            </p>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-gray-900">
              Why is my dog spewing yellow?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Yellow vomit is usually bile. It often happens when a dog&apos;s stomach is empty for too
              long. It can also happen with mild irritation. Worry more if it happens often or comes
              with pain, weakness, blood, or dehydration.
            </p>
          </article>
        </Container>
      </section>

      <section className="py-6">
        <Container className="space-y-5">
          <article className="rounded-3xl border border-teal-100 bg-teal-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              What does yellow vomit mean in dogs?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              In many dogs, yellow vomit means bile is coming up from the digestive tract. This can
              happen when the stomach is empty. It can also happen during mild gut irritation.
            </p>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Common causes of dog spewing yellow
            </h2>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                <span className="mt-1 text-brand-700">▸</span>
                <span>Long gaps between meals</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                <span className="mt-1 text-brand-700">▸</span>
                <span>Mild stomach irritation</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                <span className="mt-1 text-brand-700">▸</span>
                <span>Eating grass, fatty food, or table scraps</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                <span className="mt-1 text-brand-700">▸</span>
                <span>Stress-related digestive changes</span>
              </li>
            </ul>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h2 className="font-serif text-2xl font-semibold text-gray-900">
                Dog spewing yellow foam
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Yellow foam usually means bile plus saliva and stomach fluid. This often appears when
                there is little food in the stomach. Repeating yellow foam should still be checked by a
                vet.
              </p>
            </article>

            <article className="rounded-3xl border border-sky-100 bg-sky-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h2 className="font-serif text-2xl font-semibold text-gray-900">
                Why it happens in the morning
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Overnight, the stomach may stay empty for many hours. For some dogs, this leads to
                morning bile vomiting. Small meal timing changes may help, but discuss them with your
                veterinarian first.
              </p>
            </article>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-lime-100 bg-lime-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h2 className="font-serif text-2xl font-semibold text-gray-900">When it is not serious</h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                A one-time mild episode in a dog that is still alert, drinking water, and acting mostly
                normal may be less urgent. Still monitor closely for any new signs.
              </p>
            </article>

            <article className="rounded-3xl border border-rose-100 bg-rose-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h2 className="font-serif text-2xl font-semibold text-gray-900">When it becomes serious</h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Repeated vomiting, weakness, pain, blood, dehydration, or refusal to drink are warning
                signs. These need fast veterinary attention.
              </p>
            </article>
          </div>

          <article className="rounded-3xl border border-cyan-100 bg-cyan-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">What you can do at home</h2>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                <span className="mt-1 text-brand-700">✔</span>
                <span>Keep fresh water available</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                <span className="mt-1 text-brand-700">✔</span>
                <span>Offer small, gentle meals</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                <span className="mt-1 text-brand-700">✔</span>
                <span>Avoid rich treats and sudden food switches</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                <span className="mt-1 text-brand-700">✔</span>
                <span>Track timing, frequency, and behavior changes</span>
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-indigo-100 bg-indigo-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Should you change your dog&apos;s diet?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Sometimes diet timing or food type may help. But sudden diet changes can make symptoms
              worse. For safer next steps, you can use the{" "}
              <Link href="/tools/dog-food-calculator" className="font-semibold text-brand-700">
                dog food calculator
              </Link>{" "}
              and discuss changes with your veterinarian.
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              If you want a deeper breakdown, read{" "}
              <Link href="/blog/dog-vomiting-yellow-bile" className="font-semibold text-brand-700">
                Dog Vomiting Yellow Bile
              </Link>
              ,{" "}
              <Link href="/blog/dog-throwing-up-yellow-foam" className="font-semibold text-brand-700">
                Dog Throwing Up Yellow Foam
              </Link>
              , and{" "}
              <Link
                href="/blog/dog-vomiting-yellow-in-the-morning"
                className="font-semibold text-brand-700"
              >
                Dog Vomiting Yellow in the Morning
              </Link>{" "}
              for symptom-specific guidance.
            </p>
          </article>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <article className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Key Takeaways</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Yellow vomit is often bile from an empty stomach.",
                "One mild episode may pass, but repeated episodes need vet review.",
                "Morning vomiting can happen after long overnight fasting.",
                "Watch for red flags like blood, pain, and dehydration.",
                "Track symptoms and meal timing to help your vet.",
                "Use supportive tools, but do not self-treat severe symptoms.",
              ].map((point, index) => (
                <article
                  key={point}
                  className="rounded-2xl border border-brand-100 bg-brand-50/40 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-sm font-semibold text-gray-900">Takeaway {index + 1}</h3>
                  <p className="mt-2 flex items-start gap-2 text-sm leading-7 text-gray-700">
                    <span className="mt-1 text-brand-700">✔</span>
                    <span>{point}</span>
                  </p>
                </article>
              ))}
            </div>
          </article>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <article className="rounded-3xl border border-amber-200 bg-amber-50/70 p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-amber-900">When to Call a Vet</h2>
            <ul className="mt-4 space-y-2">
              {[
                "Vomiting happens many times in one day",
                "Your dog cannot keep water down",
                "You see blood or your dog seems in pain",
                "There is weakness, lethargy, or dehydration",
                "Your dog is a puppy, senior, or has chronic disease",
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
              <Link href="/health-conditions/diarrhea" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-sm hover:text-brand-700">
                Diarrhea guide
              </Link>
              <Link href="/dogs/probiotics/digestion" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-sm hover:text-brand-700">
                Dog digestion support
              </Link>
              <Link href="/tools/probiotic-calculator" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-sm hover:text-brand-700">
                Probiotic calculator
              </Link>
              <Link href="/tools/dog-food-calculator" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-sm hover:text-brand-700">
                Dog food calculator
              </Link>
              <Link href="/contact" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-sm hover:text-brand-700">
                Contact Pawbiotics
              </Link>
              <Link href="/vets/houston-tx" className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-sm hover:text-brand-700">
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

      <section className="py-4">
        <Container>
          <article className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">
              Related Guides About Yellow Dog Vomit
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
              If your dog&apos;s yellow vomit looks different or happens at a specific time, these guides
              explain the next most common situations.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/dog-vomiting-yellow-bile"
              className="group block rounded-2xl border border-teal-100 bg-teal-50/50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md"
            >
              <h3 className="font-serif text-xl font-semibold text-gray-900 transition group-hover:text-brand-700">
                <span className="mr-2" aria-hidden>
                  🟡
                </span>
                Dog Vomiting Yellow Bile
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                Learn what bile is, why it comes up, and when yellow bile vomiting needs vet care.
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-700">Open guide &rarr;</p>
            </Link>

            <Link
              href="/blog/dog-throwing-up-yellow-foam"
              className="group block rounded-2xl border border-amber-100 bg-amber-50/50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-md"
            >
              <h3 className="font-serif text-xl font-semibold text-gray-900 transition group-hover:text-brand-700">
                <span className="mr-2" aria-hidden>
                  🫧
                </span>
                Dog Throwing Up Yellow Foam
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                Understand the difference between yellow liquid and yellow foam, plus what it may mean.
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-700">Open guide &rarr;</p>
            </Link>

            <Link
              href="/blog/dog-vomiting-yellow-in-the-morning"
              className="group block rounded-2xl border border-violet-100 bg-violet-50/50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-md"
            >
              <h3 className="font-serif text-xl font-semibold text-gray-900 transition group-hover:text-brand-700">
                <span className="mr-2" aria-hidden>
                  🌅
                </span>
                Dog Vomiting Yellow in the Morning
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                Learn why dogs may vomit yellow bile early in the morning and how feeding schedule
                changes may help.
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-700">Open guide &rarr;</p>
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
