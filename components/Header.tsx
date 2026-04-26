import Link from "next/link";

const navLinks = [
  { href: "/dogs", label: "Dogs" },
  { href: "/cats", label: "Cats" },
  { href: "/probiotics", label: "Probiotics" },
  { href: "/tools/puppy-feeding-schedule", label: "Tools" },
  { href: "/health-conditions", label: "Health Conditions" },
  { href: "/vets/houston-tx", label: "Local Vets" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
            P
          </span>
          <span className="text-lg font-semibold text-gray-900">
            Pawbiotics
          </span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <form action="/search" method="get" className="hidden lg:block">
            <label htmlFor="site-search" className="sr-only">
              Search site
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search guides..."
              className="w-44 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
            />
          </form>
          <Link
            href="/probiotics"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
          >
            Shop Probiotics
          </Link>
        </div>
      </div>

      <nav className="flex gap-5 overflow-x-auto border-t border-gray-100 px-4 py-2 md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-brand-700"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <form action="/search" method="get" className="border-t border-gray-100 px-4 py-2 md:hidden">
        <label htmlFor="site-search-mobile" className="sr-only">
          Search site
        </label>
        <input
          id="site-search-mobile"
          name="q"
          type="search"
          placeholder="Search guides..."
          className="w-full rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
        />
      </form>
    </header>
  );
}
