import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-32 lg:grid-cols-2">
      <div>
        <p className="mb-6 inline-flex rounded-full border border-[#d4860a]/30 bg-[#d4860a]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#d4860a]">
          🌿 Pet Gut Health Education
        </p>
        <h1 className="font-serif text-4xl font-black leading-tight text-[#2c1f0e] sm:text-5xl">
          Probiotics for Dogs and Cats
          <span className="block text-[#e8734a]">Gut Health That Works</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#5a4535]">
          Pawbiotics is your trusted guide to pet probiotic science. Learn which
          strains support digestion, immunity, and long-term dog and cat gut
          health.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/probiotics"
            className="rounded-full bg-[#e8734a] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#e8734a]/30 transition hover:bg-[#c45d35]"
          >
            Read the Guide
          </Link>
          <Link
            href="#what-are-probiotics"
            className="font-semibold text-[#2c1f0e] underline decoration-2 underline-offset-4 hover:text-[#e8734a]"
          >
            What are probiotics?
          </Link>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="relative rounded-[28px] bg-white p-8 shadow-2xl shadow-[#2c1f0e]/20">
          <div className="mb-5 flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b8d4b9] to-[#f2ece2] text-7xl">
            🐕
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7a9e7b]">
            Featured Guide
          </p>
          <h2 className="mt-2 font-serif text-xl font-bold text-[#2c1f0e]">
            Natural Probiotics for Dogs
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#8a7060]">
            Learn simple ways to support pet probiotics and daily gut balance.
          </p>
        </div>
      </div>
    </section>
  );
}
