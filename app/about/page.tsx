import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About Pawbiotics | Pet Health, Gut Wellness, and Probiotic Education",
  description:
    "Learn about Pawbiotics, a pet health resource dedicated to helping dog and cat owners understand gut health, probiotics, and everyday wellness.",
  alternates: {
    canonical: "https://pawbiotics.us/about",
  },
  openGraph: {
    title: "About Pawbiotics | Pet Health, Gut Wellness, and Probiotic Education",
    description:
      "Learn about Pawbiotics, a pet health resource dedicated to helping dog and cat owners understand gut health, probiotics, and everyday wellness.",
    url: "https://pawbiotics.us/about",
    type: "website",
  },
};

const coverageAreas = [
  "Dog health",
  "Cat health",
  "Gut health & probiotics",
  "Common pet health conditions",
  "Finding local veterinary care",
];

const trustPoints = [
  "Structured, research-based content",
  "Beginner-friendly explanations",
  "Consistent updates",
  "Focus on real pet owner problems",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container className="text-center">
          <p className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            About Pawbiotics
          </p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">About Pawbiotics</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Pawbiotics is a pet health resource focused on helping dog and cat owners understand
            gut health, probiotics, and everyday wellness.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900">Our mission</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-gray-600">
              <p>
                Our goal is to help pet owners make better day-to-day health decisions with
                confidence.
              </p>
              <p>
                We simplify complex pet health topics so they are easier to understand without
                losing practical value.
              </p>
              <p>
                Every guide is built to provide clear, useful, and realistic next steps for dog and
                cat owners.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <Container>
          <h2 className="text-2xl font-semibold text-gray-900">What we cover</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {coverageAreas.map((item) => (
              <article
                key={item}
                className="rounded-xl border border-gray-100 bg-white px-5 py-4 text-sm font-medium text-gray-700 shadow-sm"
              >
                {item}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 py-12">
        <Container>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-amber-900">Important disclaimer</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-900">
              <li>We are not veterinarians.</li>
              <li>Content is for educational purposes.</li>
              <li>Always consult a licensed vet.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <Container>
          <h2 className="text-2xl font-semibold text-gray-900">Why trust us</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <article
                key={point}
                className="rounded-xl border border-gray-100 bg-white px-5 py-4 text-sm font-medium text-gray-700 shadow-sm"
              >
                {point}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 pb-12 pt-8">
        <Container>
          <h2 className="text-2xl font-semibold text-gray-900">Explore our resources</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Blog
            </Link>
            <Link
              href="/dogs"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Dog Health
            </Link>
            <Link
              href="/cats"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Cat Health
            </Link>
            <Link
              href="/health-conditions"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Health Conditions
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
