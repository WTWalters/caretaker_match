import type { Metadata } from "next";
import PartnerSignupForm from "@/components/site/PartnerSignupForm";
import PartnerIconSprite from "@/components/site/PartnerIconSprite";
import "@/styles/ctm-ccp.css";

export const metadata: Metadata = {
  title: "Become a Community Care Partner — CaretakerMatch",
  description:
    "Sign up to become a Community Care Partner and help patients recover safely at home after surgery.",
  alternates: { canonical: "/community-care-partner" },
  openGraph: {
    title: "Become a Community Care Partner — CaretakerMatch",
    description:
      "Help someone in your community heal at home. No medical experience needed.",
    type: "website",
    images: [{ url: "/site/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/site/og-image.png"] },
};

export default function CommunityCarePartnerPage() {
  return (
    <div className="ctm-ccp">
      <PartnerIconSprite />

      <section id="hero">
        <div className="wrap">
          <div className="eyebrow center">Community Care Partners</div>
          <h1>Become a Community Care Partner</h1>
          <p className="sub">Help someone in your community heal at home. No medical experience needed — just reliability and warmth.</p>
          <a href="#signup" className="btn btn-primary">Sign Up</a>
        </div>
      </section>

      <div className="divider"></div>

      <section id="what">
        <div className="wrap">
          <div className="eyebrow center">What You'll Do</div>
          <h2 className="center">Everyday help that matters</h2>
          <div className="do-grid">
            <div className="do-item"><div className="icon-circle"><svg className="icon" width="24" height="24"><use href="#i-car"/></svg></div><p>Rides to appointments</p></div>
            <div className="do-item"><div className="icon-circle"><svg className="icon" width="24" height="24"><use href="#i-meal"/></svg></div><p>Meals &amp; groceries</p></div>
            <div className="do-item"><div className="icon-circle"><svg className="icon" width="24" height="24"><use href="#i-pill"/></svg></div><p>Medication reminders</p></div>
            <div className="do-item"><div className="icon-circle"><svg className="icon" width="24" height="24"><use href="#i-checkin"/></svg></div><p>Wellness check-ins</p></div>
            <div className="do-item"><div className="icon-circle"><svg className="icon" width="24" height="24"><use href="#i-encourage"/></svg></div><p>Companionship</p></div>
            <div className="do-item"><div className="icon-circle"><svg className="icon" width="24" height="24"><use href="#i-home"/></svg></div><p>Light household help</p></div>
          </div>
          <div className="no-clinical"><strong>No clinical care. No medical tasks.</strong></div>
        </div>
      </section>

      <section id="onboarding">
        <div className="wrap">
          <div className="eyebrow center">How It Works</div>
          <h2 className="center">Getting started is simple</h2>
          <div className="steps">
            <div className="step"><div className="icon-circle"><svg className="icon" width="22" height="22"><use href="#i-apply"/></svg></div><h3>Apply</h3><p>Share your availability.</p></div>
            <div className="step"><div className="icon-circle"><svg className="icon" width="22" height="22"><use href="#i-secure"/></svg></div><h3>Verify &amp; Train</h3><p>Background check &amp; orientation.</p></div>
            <div className="step"><div className="icon-circle"><svg className="icon" width="22" height="22"><use href="#i-match"/></svg></div><h3>Get Matched</h3><p>Paired with a patient nearby.</p></div>
            <div className="step"><div className="icon-circle"><svg className="icon" width="22" height="22"><use href="#i-partner"/></svg></div><h3>Support</h3><p>Help their first 30 days home.</p></div>
          </div>
        </div>
      </section>

      <section id="signup" style={{ background: "var(--paper-deep)" }}>
        <div className="wrap">
          <div className="eyebrow center">Sign Up</div>
          <h2 className="center">Ready to help someone heal at home?</h2>
          <div className="lead-copy"><p>We'll follow up with background check and training details.</p></div>
          <PartnerSignupForm />
        </div>
      </section>

    </div>
  );
}
