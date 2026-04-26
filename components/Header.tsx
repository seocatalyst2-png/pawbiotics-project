import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/health-conditions", label: "Health Conditions" },
  { href: "/tools", label: "Tools" },
  { href: "/vets/houston-tx", label: "Find a Vet" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2c1f0e]/10 bg-[#faf6f0]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8734a] text-lg">
            🐾
          </span>
          <span className="font-serif text-2xl font-bold text-[#2c1f0e]">
            Pawbiotics
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5a4535] transition hover:text-[#e8734a]"
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
              className="w-44 rounded-full border border-[#2c1f0e]/15 bg-white px-3 py-2 text-sm text-[#5a4535] outline-none transition focus:border-[#e8734a] focus:ring-2 focus:ring-[#e8734a]/20"
            />
          </form>
          <Link
            href="/probiotics"
            className="rounded-full bg-[#2c1f0e] px-4 py-2 text-sm font-semibold text-[#faf6f0] transition hover:bg-[#e8734a]"
          >
            Probiotics
          </Link>
        </div>
      </div>

      <nav className="flex gap-5 overflow-x-auto border-t border-[#2c1f0e]/10 px-4 py-2 md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-sm font-medium text-[#5a4535] transition hover:text-[#e8734a]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <form action="/search" method="get" className="border-t border-[#2c1f0e]/10 px-4 py-2 md:hidden">
        <label htmlFor="site-search-mobile" className="sr-only">
          Search site
        </label>
        <input
          id="site-search-mobile"
          name="q"
          type="search"
          placeholder="Search guides..."
          className="w-full rounded-full border border-[#2c1f0e]/15 bg-white px-3 py-2 text-sm text-[#5a4535] outline-none transition focus:border-[#e8734a] focus:ring-2 focus:ring-[#e8734a]/20"
        />
      </form>
    </header>
  );
}
