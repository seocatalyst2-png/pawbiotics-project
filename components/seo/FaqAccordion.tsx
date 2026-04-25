"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/seo";

export default function FaqAccordion({ items }: { items: FAQItem[] }) {
  if (!items.length) return null;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article key={item.question} className="overflow-hidden rounded-xl border border-gray-100">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-brand-50/50"
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                <span
                  className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▾
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-sm leading-6 text-gray-600">{item.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
