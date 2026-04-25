import Link from "next/link";
import { popularPetHealthGuides } from "@/data/home-content";

const pastelCardTones = [
  "border-teal-100 bg-teal-50/70",
  "border-amber-100 bg-amber-50/80",
  "border-emerald-100 bg-emerald-50/70",
  "border-sky-100 bg-sky-50/80",
  "border-rose-100 bg-rose-50/70",
  "border-violet-100 bg-violet-50/70",
] as const;

export default function HomePopularGuidesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e8734a]">
          Popular Now
        </p>
        <h2 className="mt-2 font-serif text-4xl font-bold text-[#2c1f0e]">
          Popular Pet Health Guides
        </h2>
        <p className="mt-4 text-base leading-7 text-[#8a7060]">
          Start with the most-read guides for common dog and cat health questions.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {popularPetHealthGuides.map((guide, index) => (
          <Link
            key={guide.href}
            href={guide.href}
            className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8734a]/50 ${pastelCardTones[index % pastelCardTones.length]}`}
          >
            <div className="mb-4 inline-flex rounded-2xl bg-white/80 px-4 py-3 text-3xl shadow-sm">
              <span aria-hidden>{guide.emoji}</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2c1f0e]">{guide.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#735e4f]">{guide.description}</p>
            <p className="mt-4 text-sm font-semibold text-[#2c1f0e]">Read guide →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
