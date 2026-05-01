import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2c1f0e] pb-8 pt-14 text-[#faf6f0]/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              Science-backed pet health education for dogs and cats.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/health-conditions" className="hover:text-white">
                  Health Conditions
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Local & Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/vets" className="hover:text-white">
                  Find a Vet
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/probiotics" className="hover:text-white">
                  Probiotics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Tools</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/tools/probiotic-calculator" className="hover:text-white">
                  Probiotic Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/dog-food-calculator" className="hover:text-white">
                  Dog Food Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/puppy-feeding-schedule" className="hover:text-white">
                  Puppy Feeding Schedule
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-white">
                  Site Search
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Pawbiotics.us. All rights reserved. Information on this
          site is educational and not a substitute for veterinary advice.
        </div>
      </div>
    </footer>
  );
}
