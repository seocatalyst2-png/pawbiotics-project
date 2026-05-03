"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import type { FAQItem } from "@/lib/seo";

function renderAnswerWithLinks(answer: string) {
  const markdownLinkRegex = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null = markdownLinkRegex.exec(answer);

  while (match) {
    const [fullMatch, label, href] = match;
    const start = match.index;

    if (start > cursor) {
      nodes.push(answer.slice(cursor, start));
    }

    nodes.push(
      <Link
        key={`${href}-${start}`}
        href={href}
        className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 transition-colors hover:text-brand-800"
      >
        {label}
      </Link>
    );

    cursor = start + fullMatch.length;
    match = markdownLinkRegex.exec(answer);
  }

  if (cursor < answer.length) {
    nodes.push(answer.slice(cursor));
  }

  return nodes.length ? nodes : answer;
}

export default function FaqAccordion({ items }: { items: FAQItem[] }) {
  if (!items.length) return null;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="rounded-2xl border border-violet-100 bg-gradient-to-b from-white to-violet-50/40 p-6 shadow-sm">
      <h2 className="font-serif text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;
          const buttonId = `faq-question-${index}`;
          return (
            <article
              key={item.question}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-brand-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                <span
                  className={`text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▾
                </span>
              </button>
              <div
                id={answerId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-sm leading-6 text-gray-600">
                    {renderAnswerWithLinks(item.answer)}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
