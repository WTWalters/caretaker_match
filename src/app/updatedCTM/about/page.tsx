import type { Metadata } from "next";
import Link from "next/link";

const BASE = "/updatedCTM";

export const metadata: Metadata = {
  title: "About Us — CareTaker Match",
  description:
    "Meet the clinicians, healthcare executives, and technologists building CareTaker Match — the peer volunteer recovery platform.",
};

const team = [
  {
    initials: "TE",
    name: "Dr. Tom Eickmann",
    title: "Chief Medical Officer & Founder",
    bio: "Orthopedic surgeon and the originator of the CareTaker Match concept. Chief Medical Officer at Orthopedic Centers of Colorado. Healthcare consultant and entrepreneur with significant experience in post-acute care economics.",
  },
  {
    initials: "HS",
    name: "Hamid Sabet",
    title: "CEO",
    bio: "Senior healthcare executive with leadership roles at Kaiser Permanente, Johnson & Johnson, and Boston Scientific. Deep expertise across clinical operations, innovation leadership, and the total joint replacement ecosystem.",
  },
  {
    initials: "WW",
    name: "Whit Walters",
    title: "CIO / CTO",
    bio: "2x CTO and former Chief Architect in healthcare with 30+ years building clinical data platforms and EMR integrations. Five Google Cloud certifications including ML Engineer. Industry analyst at GigaOm covering cloud, data, and AI.",
  },
  {
    initials: "VM",
    name: "Vivek Mohan",
    title: "Founder",
    bio: "Mechanical engineer with a 25-year history in process re-engineering. Built care delivery pathways and created surgical Centers of Excellence. As a surgeoneer, he blends engineering and surgical practice to improve the value of care.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Intro */}
      <section
        className="pt-14 pb-10 px-6 text-center"
        style={{ backgroundColor: "var(--color-warm-cream)" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--color-redesign-coral)" }}
        >
          Our Team
        </p>
        <h1
          className="text-3xl md:text-5xl font-serif font-bold mb-4"
          style={{ color: "var(--color-redesign-navy)" }}
        >
          The people behind CareTaker Match
        </h1>
        <p
          className="text-base max-w-lg mx-auto leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Founded by clinicians, healthcare executives, and technologists who
          saw a gap in post&#8209;surgical care &mdash; and built a way to close
          it.
        </p>
      </section>

      {/* Team Grid */}
      <section
        className="py-10 px-6"
        style={{ backgroundColor: "var(--color-warm-cream)" }}
      >
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {team.map((member) => (
            <div
              key={member.initials}
              className="bg-white rounded-lg border p-7 text-center"
              style={{ borderColor: "var(--color-border-warm)" }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold"
                style={{
                  backgroundColor: "var(--color-border-warm)",
                  color: "#888",
                }}
              >
                {member.initials}
              </div>
              <h3
                className="text-lg font-serif font-bold"
                style={{ color: "var(--color-redesign-navy)" }}
              >
                {member.name}
              </h3>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: "var(--color-redesign-teal)" }}
              >
                {member.title}
              </p>
              <p
                className="text-sm leading-relaxed text-left"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing band */}
      <section
        className="py-12 px-6 text-center"
        style={{ backgroundColor: "var(--color-warm-cream-dark)" }}
      >
        <h2
          className="text-2xl font-serif font-bold mb-3"
          style={{ color: "var(--color-redesign-navy)" }}
        >
          Built from clinical experience
        </h2>
        <p
          className="max-w-md mx-auto leading-relaxed mb-5"
          style={{ color: "var(--color-text-secondary)" }}
        >
          CareTaker Match wasn&rsquo;t designed in a boardroom. It grew from
          thousands of surgical cases and one simple observation: patients
          recover better when someone is there.
        </p>
        <Link
          href={`${BASE}/why`}
          className="text-sm font-medium"
          style={{ color: "var(--color-redesign-teal)" }}
        >
          Read why we built this →
        </Link>
      </section>

      {/* Contact band */}
      <section
        className="py-10 px-6 text-center"
        style={{ backgroundColor: "var(--color-redesign-navy)" }}
      >
        <h2 className="text-lg font-serif font-bold text-white mb-3">
          Get in Touch
        </h2>
        <a
          href="mailto:hello@caretakermatch.com"
          className="inline-block text-white font-bold text-sm px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-redesign-teal)" }}
        >
          hello@caretakermatch.com
        </a>
      </section>
    </>
  );
}
