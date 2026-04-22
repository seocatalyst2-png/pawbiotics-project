import Link from "next/link";
import { popularVetCities } from "@/data/home-content";

export default function HomeLocalSeoSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20">
      <div className="rounded-3xl border border-[#2c1f0e]/10 bg-[#f2ece2] p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e8734a]">
          Local Vet Navigation
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-[#2c1f0e]">
          Popular Vet Pages by City
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5a4535]">
          Explore local veterinary pages built for city-based SEO. This section
          is ready for future programmatic expansion to 100+ US cities.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {popularVetCities.map((item) => (
            <Link
              key={item.slug}
              href={`/vets/${item.slug}`}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2c1f0e] shadow-sm transition hover:bg-[#e8734a] hover:text-white"
            >
              Vets in {item.city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
