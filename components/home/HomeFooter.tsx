import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer className="bg-[#2c1f0e] pb-8 pt-14 text-[#faf6f0]/70">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8734a] text-lg">
              🐾
            </span>
            <span className="font-serif text-2xl font-bold text-[#faf6f0]">
              Pawbiotics
            </span>
          </div>
          <p className="mt-4 text-sm leading-7">
            Science-backed pet probiotic education for dogs and cats.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
            For Dogs
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/dogs" className="hover:text-white">Dog Health Guides</Link></li>
            <li><Link href="/dogs/probiotics/diarrhea" className="hover:text-white">Signs Your Dog Needs Help</Link></li>
            <li><Link href="/dogs/probiotics/food-allergy" className="hover:text-white">Best Probiotic Strains</Link></li>
            <li><Link href="/tools/probiotic-calculator" className="hover:text-white">Dosage Calculator Tool</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
            For Cats
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/cats" className="hover:text-white">Cat Gut Health Guides</Link></li>
            <li><Link href="/cats/health/itchy-skin" className="hover:text-white">Probiotics for Cats</Link></li>
            <li><Link href="/cats/health/food-allergy" className="hover:text-white">Cat Health Topics</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 text-xs text-white/50">
        <span>&copy; {new Date().getFullYear()} Pawbiotics. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white">Privacy</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <Link href="/about" className="hover:text-white">About</Link>
        </div>
      </div>
    </footer>
  );
}
