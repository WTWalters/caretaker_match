import Link from "next/link";

const BASE = "/updatedCTM";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-redesign-navy)" }}>
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <Link
              href={BASE}
              className="font-serif text-lg font-bold text-white"
            >
              CareTaker Match
            </Link>
            <div className="mt-2">
              <a
                href="mailto:hello@caretakermatch.com"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                hello@caretakermatch.com
              </a>
            </div>
          </div>
          <div className="text-right">
            <div className="flex gap-5 mb-2">
              <Link
                href={`${BASE}/why`}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Our Mission
              </Link>
              <Link
                href={`${BASE}/about`}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </div>
            <p className="text-xs text-white/50">
              &copy; 2026 CareTaker Match, Inc.
            </p>
            <p className="text-xs text-white/40 mt-1">
              Privacy Policy &bull; Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
