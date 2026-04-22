import { dogVsCat } from "@/data/home-content";

export default function HomeComparisonSection() {
  return (
    <section className="bg-[#2c1f0e] py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f0a830]">
            Dogs vs. Cats
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-[#faf6f0]">
            Probiotic Needs: Dogs vs Cats
          </h2>
          <p className="mt-4 text-[#faf6f0]/70">
            Different species have different microbiome patterns and support
            needs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/15 bg-white/5 p-8">
            <h3 className="font-serif text-2xl font-bold text-white">🐶 For Dogs</h3>
            <ul className="mt-5 space-y-3">
              {dogVsCat.dogs.map((item) => (
                <li key={item} className="text-sm text-white/80">
                  ✓ {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/15 bg-white/5 p-8">
            <h3 className="font-serif text-2xl font-bold text-white">🐱 For Cats</h3>
            <ul className="mt-5 space-y-3">
              {dogVsCat.cats.map((item) => (
                <li key={item} className="text-sm text-white/80">
                  ✓ {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
