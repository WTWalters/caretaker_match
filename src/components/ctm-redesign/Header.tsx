"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BASE = "/updatedCTM";

const navLinks = [
  { href: `${BASE}/why`, label: "Our Mission" },
  { href: `${BASE}/about`, label: "About Us" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="py-4 px-6 border-b"
      style={{
        backgroundColor: "var(--color-warm-cream)",
        borderColor: "var(--color-border-warm)",
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href={BASE}
          className="font-serif text-xl font-bold"
          style={{ color: "var(--color-redesign-navy)" }}
        >
          CareTaker Match
        </Link>
        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{
                color: "var(--color-redesign-teal)",
                textDecoration: pathname === link.href ? "underline" : "none",
                textUnderlineOffset: "4px",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
