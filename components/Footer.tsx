import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                P
              </span>
              <span className="text-lg font-semibold text-gray-900">
                Pawbiotics
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Trusted pet health information and probiotics for dogs and cats.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/dogs" className="hover:text-brand-700">Dogs</Link></li>
              <li><Link href="/cats" className="hover:text-brand-700">Cats</Link></li>
              <li><Link href="/probiotics" className="hover:text-brand-700">Probiotics</Link></li>
              <li><Link href="/health-conditions" className="hover:text-brand-700">Health Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-brand-700">About</Link></li>
              <li><Link href="/" className="hover:text-brand-700">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-brand-700">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-brand-700">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-brand-700">Terms of Use</Link></li>
              <li><Link href="/" className="hover:text-brand-700">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Pawbiotics.us. All rights reserved.
          Information on this site is educational and not a substitute for
          veterinary advice.
        </div>
      </div>
    </footer>
  );
}
