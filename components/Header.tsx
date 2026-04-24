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

        <Link
          href="/probiotics"
          className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700 md:inline-block"
        >
          Shop Probiotics
        </Link>
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
    </header>
  );
}
