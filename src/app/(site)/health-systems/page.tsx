import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/ctm-hs.css";

export const metadata: Metadata = {
  title: "For Health Systems & Payers — CaretakerMatch",
  description:
    "How CaretakerMatch helps health systems and payers improve care transitions, activate community resources, and support value-based care.",
  alternates: { canonical: "/health-systems" },
  openGraph: {
    title: "For Health Systems & Payers — CaretakerMatch",
    description:
      "Why appropriate discharge placement is both a clinical and financial priority for health systems today.",
    type: "website",
    images: [{ url: "/site/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/site/og-image.png"] },
};

export default function HealthSystemsPage() {
  return (
    <div className="ctm-hs">
      <section id="hero">
        <div className="wrap">
          <div className="eyebrow center">For Health Systems &amp; Payers</div>
          <h1>The data behind the opportunity</h1>
          <p className="sub">Why appropriate discharge placement is both a clinical and financial priority for health systems today.</p>

          <div className="stat-row">
            <div className="stat"><span className="num">2.5M+</span><span className="lbl">high-volume surgical procedures every year in the U.S.</span></div>
            <div className="stat"><span className="num">Up to 20%</span><span className="lbl">of patients are discharged to a skilled nursing facility</span></div>
            <div className="stat"><span className="num">100%</span><span className="lbl">of Care Partners identity- and background-checked</span></div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="why">
        <div className="wrap">
          <div className="eyebrow center">Why It Matters</div>
          <h2 className="center">Appropriate placement, not just clinical quality</h2>
          <ul className="why-list">
            <li>Many patients discharged to skilled nursing facilities don't need clinical care — they need caregiver support to recover safely at home.</li>
            <li>Community Care Partners provide support during the critical first 30 days after discharge.</li>
            <li>Appropriate placement can reduce avoidable SNF utilization and free up care management capacity.</li>
            <li>Every Care Partner is identity- and background-checked before being matched with a patient.</li>
          </ul>
        </div>
      </section>

      <section id="team-model">
        <div className="wrap">
          <div className="eyebrow center">Regulatory Context</div>
          <h2>The CMS TEAM Model</h2>
          <div className="callout">
            <h3>What it is</h3>
            <p>CMS's TEAM (Transforming Episode Accountability Model) ties post-acute cost and quality directly to reimbursement for participating hospitals. It creates a direct financial incentive for health systems to ensure patients are discharged to the appropriate level of care — not simply the most familiar or convenient one. For hospitals navigating TEAM, community-based, non-clinical support is one lever for improving both patient outcomes and post-acute cost performance.</p>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="wrap center">
          <h2>Explore a pilot with your health system</h2>
          <p>We're piloting with a small number of partner health systems, starting with orthopedic surgery.</p>
          <Link href="/#contact" className="btn" style={{ background: "var(--gold)", color: "#fff" }}>Explore a Pilot</Link>
        </div>
      </section>

    </div>
  );
}
