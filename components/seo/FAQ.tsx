import { FAQItem } from "@/lib/seo";

export default function FAQ({ items }: { items: FAQItem[] }) {
  if (!items.length) return null;

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <article key={item.question} className="rounded-xl border border-gray-100 p-4">
            <h3 className="font-semibold text-gray-900">{item.question}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
