"use client";

import { FormEvent, useState } from "react";

export default function HomeCtaSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20">
      <div className="grid grid-cols-1 gap-10 rounded-[28px] bg-gradient-to-br from-[#e8734a] to-[#a0421e] p-8 text-white lg:grid-cols-2 lg:p-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
            Stay Informed
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold">
            Get Expert Pet Gut Health Tips
          </h2>
          <p className="mt-4 text-white/80">
            Weekly insights on pet probiotics, dog gut health, and cat gut health
            in simple language for busy pet parents.
          </p>
        </div>

        <div>
          {!submitted ? (
            <form className="space-y-3" onSubmit={handleSubmit}>
              <label htmlFor="email-input" className="block text-sm text-white/80">
                Your email address
              </label>
              <input
                id="email-input"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border-0 px-5 py-3 text-[#2c1f0e] outline-none ring-0"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-[#2c1f0e] px-6 py-3 font-semibold text-[#faf6f0] transition hover:bg-[#1a1008]"
              >
                Get Free Pet Health Tips
              </button>
              <p className="text-xs text-white/70">No spam. Unsubscribe anytime.</p>
            </form>
          ) : (
            <p className="rounded-xl bg-white/10 p-4 font-semibold">
              You&apos;re in. Check your inbox for a welcome message.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
