import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Contact Pawbiotics | Pet Health & Probiotics Support",
  description:
    "Contact Pawbiotics for questions about pet health guides, probiotics, and local vet resources. We are here to support dog and cat owners across the United States.",
  alternates: {
    canonical: "https://pawbiotics.us/contact",
  },
  openGraph: {
    title: "Contact Pawbiotics | Pet Health & Probiotics Support",
    description:
      "Contact Pawbiotics for questions about pet health guides, probiotics, and local vet resources. We are here to support dog and cat owners across the United States.",
    url: "https://pawbiotics.us/contact",
    type: "website",
  },
};

const faqs = [
  {
    question: "How can I contact Pawbiotics?",
    answer:
      "You can reach us by email at support@pawbiotics.us. We review messages regularly and do our best to respond quickly.",
  },
  {
    question: "Do you provide veterinary advice?",
    answer:
      "Pawbiotics provides educational information only. We do not diagnose, treat, or replace care from a licensed veterinarian.",
  },
  {
    question: "Can you recommend a local vet?",
    answer:
      "We share local vet resource pages to help you compare options, but final care decisions should always be made with a licensed veterinary professional.",
  },
  {
    question: "How quickly will I get a response?",
    answer:
      "Most messages receive a response within 1 to 2 business days, depending on message volume.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container className="text-center">
          <p className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Contact Pawbiotics
          </p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Have a question about pet health, probiotics, or finding a local vet? We&apos;re here
            to help.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Email</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                For support, partnerships, or general questions, email our team at:
              </p>
              <a
                href="mailto:support@pawbiotics.us"
                className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                support@pawbiotics.us
              </a>
            </article>

            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Location</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Serving pet owners across the United States.
              </p>
              <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
                For urgent pet issues, please contact a licensed veterinarian immediately.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 py-12">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900">Send us a message</h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill out this simple form and our team will review your message.
            </p>

            <form className="mt-6 space-y-4" action="#">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-800 outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-800 outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-800 outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Submit
              </button>
            </form>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <Container>
          <h2 className="text-2xl font-semibold text-gray-900">Helpful links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/dogs"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Dog Health Guides
            </Link>
            <Link
              href="/cats"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Cat Health Guides
            </Link>
            <Link
              href="/health-conditions"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Health Conditions
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
            >
              Blog
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 pb-12">
        <Container>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-5">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-gray-100 p-4">
                  <h3 className="text-base font-semibold text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
