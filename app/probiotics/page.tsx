import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Pet Probiotics Guide",
  description:
    "Learn how probiotics support digestion, immunity, and overall health in dogs and cats. A beginner-friendly guide from Pawbiotics.",
};

const benefits = [
  {
    title: "Better digestion",
    body: "Probiotics help balance gut bacteria, reducing upset stomach and soft stools.",
  },
  {
    title: "Stronger immunity",
    body: "A healthy gut supports a healthy immune system — around 70% of immunity lives in the gut.",
  },
  {
    title: "Skin & coat",
    body: "Good gut health is linked to calmer skin and a softer, shinier coat.",
  },
  {
    title: "Everyday comfort",
    body: "Less gas, bloating, and discomfort means a happier pet.",
  },
];

const faqs = [
  {
    q: "What are pet probiotics?",
    a: "Probiotics are good bacteria and yeasts that support the healthy balance of microbes in your pet's gut.",
  },
  {
    q: "Are probiotics safe for dogs and cats?",
    a: "Most healthy pets tolerate probiotics well. Always check with your veterinarian, especially if your pet has health conditions or takes medication.",
  },
  {
    q: "How long until I see results?",
    a: "Many pet parents notice improvements in digestion within 1–2 weeks of consistent use.",
  },
];

export default function ProbioticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Probiotics"
        title="Probiotics for Dogs and Cats"
        description="A simple, beginner-friendly guide to how probiotics work and how they can support your pet's daily wellness."
      />

      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                What probiotics do
              </h2>
              <p className="mt-3 text-gray-600">
                Your pet&apos;s digestive system is home to billions of bacteria.
                Probiotics help maintain the right balance of good bacteria, which
                supports digestion, immunity, and overall comfort.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-semibold text-gray-900">{b.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{b.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                How to choose a probiotic
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>• Look for species-specific strains for dogs or cats.</li>
                <li>• Check the CFU count (how many live cultures).</li>
                <li>• Prefer products with third-party testing.</li>
                <li>• Start slow and watch how your pet responds.</li>
                <li>• Ask your vet if your pet has any medical conditions.</li>
              </ul>

              <Link
                href="/health-conditions"
                className="mt-6 inline-block rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                See common health topics
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-14">
        <Container>
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">{f.q}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
