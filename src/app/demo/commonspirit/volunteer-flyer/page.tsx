"use client";

import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";

const CTM_GREEN = "#1e3a2f";
const CTM_GOLD = "#c4922a";
const VOLUNTEER_URL = "https://caretakermatch.com/demo/onboarding/volunteer";

export default function VolunteerFlyer() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{ background: "#f5f0e3", fontFamily: "Georgia, serif" }}
    >
      <div
        className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        style={{ border: `3px solid ${CTM_GOLD}` }}
      >
        {/* Header band */}
        <div className="px-8 py-6 text-center" style={{ background: CTM_GREEN }}>
          <p className="text-xs font-sans font-semibold tracking-widest uppercase mb-1" style={{ color: CTM_GOLD }}>
            CommonSpirit Health
          </p>
          <h1 className="text-3xl font-bold italic text-white mb-0.5">CaretakerMatch</h1>
          <p className="text-sm italic text-white/80">Give back. Make a real difference in recovery.</p>
        </div>

        {/* Body */}
        <div className="px-8 py-7 flex flex-col items-center gap-6">

          {/* Icon */}
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#fffbf0", border: `2px solid ${CTM_GOLD}` }}>
            <svg className="w-8 h-8" fill="none" stroke={CTM_GOLD} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
          </div>

          {/* Headline */}
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2" style={{ color: "#1a1a1a" }}>You recovered. Now help someone else.</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#444", fontFamily: "system-ui, sans-serif" }}>
              Volunteer with CaretakerMatch and be paired with a surgical patient who needs support —
              the kind only you can truly offer.
            </p>
          </div>

          {/* Bullets */}
          <ul className="w-full space-y-2.5 font-sans text-sm" style={{ color: "#333" }}>
            {[
              "Flexible commitment — you set your availability",
              "Matched by joint type & recovery experience",
              "Rides, meals, and friendly check-ins",
              "Full training and background screening provided",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: CTM_GOLD }}>
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-full h-px" style={{ background: "#e0d8c8" }} />

          {/* QR code */}
          <div className="flex flex-col items-center gap-3">
            <p className="font-sans text-xs font-semibold tracking-wider uppercase text-center" style={{ color: CTM_GOLD }}>
              Scan to become a volunteer
            </p>
            <div className="p-3 rounded-xl" style={{ background: "white", border: `2px solid ${CTM_GOLD}` }}>
              <QRCodeSVG
                value={VOLUNTEER_URL}
                size={160}
                bgColor="#ffffff"
                fgColor={CTM_GREEN}
                level="M"
              />
            </div>
            <p className="font-sans text-[10px] text-center break-all" style={{ color: "#888" }}>{VOLUNTEER_URL}</p>
          </div>
        </div>

        {/* Footer band */}
        <div className="px-6 py-4 text-center" style={{ background: CTM_GOLD }}>
          <p className="font-sans text-xs font-semibold text-white tracking-wide">HIPAA Compliant &bull; Background Checked &bull; Free of Charge</p>
        </div>
      </div>

      <Link href="/demo/commonspirit" className="mt-6 font-sans text-sm hover:underline" style={{ color: CTM_GREEN }}>
        ← Back to demo
      </Link>
    </div>
  );
}
