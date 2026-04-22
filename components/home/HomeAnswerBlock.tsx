import Link from "next/link";
import { benefitCards } from "@/data/home-content";

export default function HomeAnswerBlock() {
  return (
    <section id="what-are-probiotics" className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-20 lg:grid-cols-2">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e8734a]">
          What Are Probiotics?
        </p>
        <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#2c1f0e]">
          The Science of Pet Gut Health, Explained Simply
        </h2>
        <p className="mt-5 text-base leading-8 text-[#5a4535]">
          Probiotics are beneficial live microorganisms that support digestion,
          nutrient absorption, and immune balance in dogs and cats.
        </p>

        <div className="mt-6 rounded-r-2xl border-l-4 border-[#e8734a] bg-[#f2ece2] p-5">
          <h3 className="font-serif text-lg font-semibold text-[#2c1f0e]">
            Quick answer: what is a probiotic for pets?
          </h3>
          <p className="mt-2 text-sm leading-7 text-[#5a4535]">
            A probiotic is a live beneficial bacterium that supports better
            digestion, stronger stool quality, and improved gut resilience.
          </p>
        </div>

        <p className="mt-5 text-base leading-8 text-[#5a4535]">
          Prebiotics feed those beneficial bacteria. Together they help maintain
          long-term dog gut health and cat gut health.
        </p>

        <Link
          href="/probiotics"
          className="mt-6 inline-flex rounded-full bg-[#e8734a] px-6 py-3 font-semibold text-white transition hover:bg-[#c45d35]"
        >
          Explore All Guides
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {benefitCards.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-5 shadow-sm"
          >
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2ece2] text-xl">
              {item.icon}
            </div>
            <h3 className="font-semibold text-[#2c1f0e]">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#8a7060]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
