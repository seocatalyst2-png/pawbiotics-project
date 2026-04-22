import Link from "next/link";
import { strains } from "@/data/home-content";

export default function HomeStrainsSection() {
  return (
    <section id="strains" className="mx-auto w-full max-w-6xl px-4 py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e8734a]">
            Probiotic Strains
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-[#2c1f0e]">
            Best Strains for Pet Gut Health
          </h2>
        </div>
        <Link
          href="/dogs/probiotics/food-allergy"
          className="font-semibold text-[#2c1f0e] underline decoration-2 underline-offset-4 hover:text-[#e8734a]"
        >
          Full strain guide
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {strains.map((strain, index) => (
          <article
            key={strain.scientificName}
            className={`rounded-3xl p-8 text-white shadow-lg ${
              index % 2 === 0 ? "bg-[#2c1f0e]" : "bg-[#3d5a3e]"
            }`}
          >
            <p className="font-serif text-lg italic">{strain.scientificName}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-white/60">
              {strain.nickname}
            </p>
            <h3 className="mt-4 text-xl font-semibold">{strain.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/80">{strain.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {strain.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
