import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why CareTaker Match — Our Mission",
  description:
    "An orthopedic surgeon saw patients going to nursing facilities not because they couldn't recover at home, but because they had no one to help. CareTaker Match fixes that.",
};

const stats = [
  { value: "1.5M+", label: "Total joint replacements performed annually in the US" },
  { value: "~5–15%", label: "TJR patients discharged to skilled nursing facilities" },
  { value: "$10,600", label: "Average SNF cost for a 20-day stay" },
];

const teamsPoints = [
  "Hospitals now have a financial incentive to keep patients recovering at home",
  "Patients who lack home support are the most expensive gap",
  "CareTaker Match fills that gap with vetted peer volunteers — at a fraction of SNF cost",
];

const outcomes = [
  { label: "Complication rate", snf: "~8–15%", home: "~4–8%" },
  { label: "30-day readmission", snf: "~8–12%", home: "~3–6%" },
];

export default function WhyPage() {
  return (
    <>
      {/* Origin Hero */}
      <section
        className="pt-14 pb-10 px-6 text-center"
        style={{ backgroundColor: "var(--color-warm-cream)" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--color-redesign-coral)" }}
        >
          Our Mission
        </p>
        <h1
          className="text-3xl md:text-5xl font-serif font-bold leading-tight max-w-xl mx-auto"
          style={{ color: "var(--color-redesign-navy)" }}
        >
          A surgeon saw a problem.
          <br />
          We built the solution.
        </h1>
      </section>

      {/* Tom's Story */}
      <section
        className="py-12 px-6"
        style={{ backgroundColor: "var(--color-warm-cream-dark)" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-4 items-start mb-5">
            <div
              className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-lg font-bold"
              style={{
                backgroundColor: "var(--color-border-warm)",
                color: "#888",
              }}
            >
              TE
            </div>
            <div>
              <h2
                className="text-lg font-serif font-bold"
                style={{ color: "var(--color-redesign-navy)" }}
              >
                Dr. Tom Eickmann
              </h2>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Orthopedic Surgeon &amp; Founder
              </p>
            </div>
          </div>
          <blockquote
            className="text-base italic leading-relaxed pl-5 mb-4"
            style={{
              color: "#444",
              borderLeft: "3px solid var(--color-redesign-coral)",
            }}
          >
            &ldquo;After thousands of joint replacements, I kept seeing the same
            pattern: successful surgeries followed by unnecessary nursing
            facility stays &mdash; not because patients couldn&rsquo;t recover
            at home, but because they had no one there to help. A neighbor, a
            friend, someone who&rsquo;d been through it. That&rsquo;s all they
            needed.&rdquo;
          </blockquote>
          <p
            className="text-sm leading-relaxed pl-5"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Dr. Eickmann&rsquo;s clinical observation became the founding
            insight behind CareTaker Match: what if we could connect these
            patients with peer volunteers who&rsquo;d already recovered from the
            same procedure?
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section
        className="py-14 px-6"
        style={{ backgroundColor: "var(--color-warm-cream)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-serif font-bold text-center mb-8"
            style={{ color: "var(--color-redesign-navy)" }}
          >
            The Problem
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {stats.map((s) => (
              <div
                key={s.value}
                className="bg-white rounded-lg border p-6 text-center"
                style={{ borderColor: "var(--color-border-warm)" }}
              >
                <div
                  className="text-3xl font-bold font-serif mb-2"
                  style={{ color: "var(--color-redesign-teal)" }}
                >
                  {s.value}
                </div>
                <p
                  className="text-sm leading-snug"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-xs text-center mt-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Sources: CMS TEAM Model (Jan 2026), CMS PDPM Technical Report,
            MedPac FY 2024
          </p>
        </div>
      </section>

      {/* TEAMS */}
      <section
        className="py-12 px-6"
        style={{ backgroundColor: "var(--color-warm-cream-dark)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-serif font-bold mb-4"
            style={{ color: "var(--color-redesign-navy)" }}
          >
            Why Now: The TEAMS Initiative
          </h2>
          <p
            className="leading-relaxed mb-5"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Starting January 2026, Medicare&rsquo;s{" "}
            <strong style={{ color: "var(--color-text-primary)" }}>
              TEAMS program
            </strong>{" "}
            (Transforming Episode Accountability Model) shifts financial
            responsibility for 30&#8209;day post&#8209;surgical outcomes to
            hospitals. For the first time, hospitals bear the cost when patients
            end up in skilled nursing facilities unnecessarily.
          </p>
          <div
            className="bg-white rounded-lg border p-5"
            style={{ borderColor: "var(--color-border-warm)" }}
          >
            <h3
              className="text-sm font-bold mb-3"
              style={{ color: "var(--color-redesign-navy)" }}
            >
              What this means:
            </h3>
            <ul className="space-y-2">
              {teamsPoints.map((point) => (
                <li
                  key={point}
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  • {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section
        className="py-14 px-6"
        style={{ backgroundColor: "var(--color-warm-cream)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-serif font-bold text-center mb-3"
            style={{ color: "var(--color-redesign-navy)" }}
          >
            The Solution
          </h2>
          <p
            className="text-center mb-8 max-w-lg mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            CareTaker Match is a clinically&#8209;supervised peer matching
            platform. We connect recovering surgical patients with vetted
            volunteers who&rsquo;ve been through the same procedure.
          </p>

          {/* Cost comparison */}
          <div className="grid md:grid-cols-2 gap-5 max-w-lg mx-auto mb-8">
            <div
              className="rounded-lg border p-6 text-center"
              style={{
                backgroundColor: "#fef0ea",
                borderColor: "#f0c8b8",
              }}
            >
              <p
                className="text-xs uppercase tracking-wider mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Without CTM
              </p>
              <div
                className="text-3xl font-bold font-serif"
                style={{ color: "var(--color-redesign-coral)" }}
              >
                $10,600
              </div>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Skilled Nursing Facility (20&#8209;day stay)
              </p>
            </div>
            <div
              className="rounded-lg border p-6 text-center"
              style={{
                backgroundColor: "#e8f5f1",
                borderColor: "#b8e0d8",
              }}
            >
              <p
                className="text-xs uppercase tracking-wider mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                With CTM
              </p>
              <div
                className="text-3xl font-bold font-serif"
                style={{ color: "var(--color-redesign-teal)" }}
              >
                $1,200
              </div>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Home Recovery + Peer Support
              </p>
            </div>
          </div>

          {/* Outcome comparison */}
          <div className="max-w-lg mx-auto">
            {outcomes.map((o) => (
              <div
                key={o.label}
                className="flex items-center justify-between py-3 border-b text-sm"
                style={{ borderColor: "var(--color-border-warm)" }}
              >
                <span style={{ color: "var(--color-text-secondary)" }}>
                  {o.label}
                </span>
                <div className="flex gap-4">
                  <span style={{ color: "var(--color-redesign-coral)" }}>
                    SNF: {o.snf}
                  </span>
                  <span style={{ color: "var(--color-redesign-teal)" }}>
                    Home: {o.home}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 px-6 text-center"
        style={{ backgroundColor: "var(--color-redesign-navy)" }}
      >
        <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
          Bring CareTaker Match to Your Health System
        </h2>
        <p className="text-sm text-white/70 mb-5 max-w-md mx-auto">
          We&rsquo;re piloting with leading health systems. Let&rsquo;s talk
          about reducing SNF utilization.
        </p>
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
