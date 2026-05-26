import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/ctm-redesign/TrustStrip";

const BASE = "/updatedCTM";

const steps = [
  {
    num: 1,
    title: "Match",
    desc: (
      <>
        Every volunteer is{" "}
        <strong style={{ color: "var(--color-redesign-teal)" }}>
          background checked
        </strong>{" "}
        and matched by procedure type and proximity. No one is paired at random.
      </>
    ),
  },
  {
    num: 2,
    title: "Meet",
    desc: (
      <>
        Patient and volunteer meet over coffee before surgery.{" "}
        <strong style={{ color: "var(--color-redesign-teal)" }}>
          Identities stay anonymous
        </strong>{" "}
        until both people consent to continue.
      </>
    ),
  },
  {
    num: 3,
    title: "Recover",
    desc: (
      <>
        The volunteer supports the patient&rsquo;s 30&#8209;day recovery with
        check&#8209;ins, rides, and companionship &mdash; with{" "}
        <strong style={{ color: "var(--color-redesign-teal)" }}>
          safety monitoring active
        </strong>{" "}
        throughout.
      </>
    ),
  },
];

export default function UpdatedHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.webp"
            alt="Elderly woman with younger companion in a warm home setting"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(240,232,220,0.55), rgba(250,246,240,0.7))",
            }}
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-20">
          <h1
            className="text-5xl md:text-6xl font-serif font-bold mb-5"
            style={{
              color: "var(--color-redesign-navy)",
              textShadow: "0 1px 12px rgba(250,246,240,0.6)",
            }}
          >
            No one heals alone.
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "#444" }}
          >
            Connecting recovering surgical patients with fully vetted peer
            volunteers who&rsquo;ve walked the same road.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "var(--color-warm-cream)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            style={{ color: "var(--color-redesign-navy)" }}
          >
            Recovery is better together
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Every year, thousands of patients leave the hospital after
            successful surgery &mdash; only to face recovery alone. Not because
            they can&rsquo;t heal at home, but because they have no one there to
            help. CareTaker Match changes that by connecting these patients with
            peer volunteers who&rsquo;ve been through the same journey.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "var(--color-warm-cream-dark)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
            style={{ color: "var(--color-redesign-navy)" }}
          >
            How It Works
          </h2>
          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 items-start">
                <div
                  className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
                  style={{
                    backgroundColor: "var(--color-redesign-teal)",
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    className="text-xl font-serif font-bold mb-1"
                    style={{ color: "var(--color-redesign-navy)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Explore Deeper */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "var(--color-warm-cream-dark)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-serif font-bold mb-8"
            style={{ color: "var(--color-redesign-navy)" }}
          >
            Learn More
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href={`${BASE}/why`}
              className="block bg-white rounded-lg p-7 text-center border transition-shadow hover:shadow-md"
              style={{ borderColor: "var(--color-border-warm)" }}
            >
              <div className="text-3xl mb-3">💡</div>
              <h3
                className="text-lg font-serif font-bold mb-2"
                style={{ color: "var(--color-redesign-navy)" }}
              >
                Why We Built This
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--color-text-secondary)" }}
              >
                The problem we&rsquo;re solving and the surgeon who saw it first
              </p>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-redesign-teal)" }}
              >
                Read our story →
              </span>
            </Link>
            <Link
              href={`${BASE}/about`}
              className="block bg-white rounded-lg p-7 text-center border transition-shadow hover:shadow-md"
              style={{ borderColor: "var(--color-border-warm)" }}
            >
              <div className="text-3xl mb-3">👥</div>
              <h3
                className="text-lg font-serif font-bold mb-2"
                style={{ color: "var(--color-redesign-navy)" }}
              >
                Meet the Team
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--color-text-secondary)" }}
              >
                The clinicians, technologists, and executives behind CareTaker
                Match
              </p>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-redesign-teal)" }}
              >
                About us →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hospital/Investor Contact */}
      <section
        className="py-12 px-6 text-center"
        style={{ backgroundColor: "var(--color-redesign-navy)" }}
      >
        <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
          For Health Systems &amp; Partners
        </h2>
        <p className="text-sm text-white/70 mb-5">
          Interested in bringing CareTaker Match to your organization?
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
