"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#what-are-probiotics", label: "What Are Probiotics?" },
  { href: "#signs", label: "Signs Your Pet Needs Help" },
  { href: "#strains", label: "Probiotic Strains" },
  { href: "/blog", label: "Blog" },
  { href: "#faq", label: "FAQ" },
];

export default function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#2c1f0e]/10 bg-[#faf6f0]/90 backdrop-blur ${
        scrolled ? "shadow-md shadow-[#2c1f0e]/10" : ""
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8734a] text-lg">
            🐾
          </span>
          <span className="font-serif text-2xl font-bold text-[#2c1f0e]">Pawbiotics</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5a4535] transition hover:text-[#e8734a]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/probiotics"
            className="rounded-full bg-[#2c1f0e] px-5 py-2.5 text-sm font-semibold text-[#faf6f0] transition hover:bg-[#e8734a]"
          >
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
