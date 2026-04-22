"use client";

import { useState } from "react";
import { FAQItem } from "@/lib/seo";

export default function HomeFaqSection({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#f2ece2] py-20">
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e8734a]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-[#2c1f0e]">
            Common Questions About Pet Probiotics
          </h2>
          <p className="mt-4 text-sm text-[#5a4535]">
            Quick answers structured for search intent and AI overview style.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <article
                key={item.question}
                className="rounded-2xl border border-[#2c1f0e]/10 bg-white"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#2c1f0e]"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={`text-xl transition ${isOpen ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-7 text-[#5a4535]">
                    {item.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
