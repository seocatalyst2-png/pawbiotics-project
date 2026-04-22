import Link from "next/link";
import { blogCards } from "@/data/home-content";

export default function HomeBlogSection() {
  return (
    <section id="blog" className="mx-auto w-full max-w-6xl px-4 py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e8734a]">
            Latest Guides
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-[#2c1f0e]">
            Pet Gut Health Insights
          </h2>
        </div>
        <Link
          href="/probiotics"
          className="font-semibold text-[#2c1f0e] underline decoration-2 underline-offset-4 hover:text-[#e8734a]"
        >
          All articles
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {blogCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1"
          >
            <div className="mb-4 flex h-36 items-center justify-center rounded-2xl bg-[#b8d4b9] text-5xl">
              {card.emoji}
            </div>
            <span className="rounded-full bg-[#3d5a3e]/10 px-3 py-1 text-xs font-semibold text-[#3d5a3e]">
              {card.tag}
            </span>
            <h3 className="mt-4 font-serif text-xl font-bold text-[#2c1f0e]">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#8a7060]">{card.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
