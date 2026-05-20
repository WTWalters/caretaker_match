"use client";

import Link from "next/link";

const CTM_GREEN = "#1e3a2f";
const CTM_GOLD = "#c4922a";

interface Step {
  number: string;
  label: string;
  href: string;
  isLive: boolean;
  isWebPortal?: boolean;
  iconD: string;
}

function StepSvg({ d, size = "w-6 h-6" }: { d: string; size?: string }) {
  return (
    <svg className={`${size} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d} />
    </svg>
  );
}

function SafetySvg({ d }: { d: string }) {
  return (
    <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d} />
    </svg>
  );
}

// Fixed height for the mockup frame + "Open demo" link beneath = consistent item height across both rows
const ITEM_HEIGHT = 192;

function Arrow() {
  return (
    <div className="flex-shrink-0 flex items-center justify-center" style={{ height: ITEM_HEIGHT }}>
      <span className="text-gray-400 text-base">→</span>
    </div>
  );
}

function IphoneMockup({ step, badge }: { step: Step; badge?: string }) {
  const frame = (
    <div className="relative w-[82px] h-[168px] rounded-[20px] p-[3px] shadow-2xl" style={{ background: "#111", border: "1px solid #2a2a2a" }}>
      <div className="w-full h-full rounded-[17px] flex flex-col items-center pt-5 pb-3 relative overflow-hidden" style={{ background: "#3d7060" }}>
        <div className="absolute top-[7px] left-1/2 -translate-x-1/2 w-7 h-[5px] rounded-full" style={{ background: "#111" }} />
        <div className="text-[9px] font-mono mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{step.number}</div>
        <div className="w-10 h-10 rounded-full border flex items-center justify-center mt-2" style={{ borderColor: "rgba(255,255,255,0.45)" }}>
          <StepSvg d={step.iconD} />
        </div>
        <div className="text-[8.5px] font-medium text-center mt-2 px-2 leading-tight text-white">{step.label}</div>
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-[14px] h-[14px] rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            </div>
          ))}
        </div>
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
      </div>
    </div>
  );
  return (
    <div className="flex flex-col items-center flex-shrink-0" style={{ height: ITEM_HEIGHT }}>
      {step.isLive ? (
        <Link href={step.href} className="hover:scale-105 transition-transform block">{frame}</Link>
      ) : (
        <div className="opacity-60 cursor-default">{frame}</div>
      )}
      <Link href={step.href} className={`mt-1.5 text-[10px] flex items-center gap-0.5 font-sans ${step.isLive ? "hover:underline" : "pointer-events-none text-gray-400"}`} style={step.isLive ? { color: CTM_GREEN } : {}}>
        Open demo <span>↗</span>
      </Link>
      {badge && (
        <div className="mt-1 text-[8px] font-sans font-semibold text-center" style={{ color: CTM_GOLD }}>{badge}</div>
      )}
    </div>
  );
}

function WebPortalMockup({ step, highlight, badge }: { step: Step; highlight?: boolean; badge?: string }) {
  const frame = (
    <div className="relative w-[138px] h-[168px] rounded-[8px] shadow-2xl overflow-hidden" style={{ background: "#1a1a1a", border: `1px solid ${highlight ? CTM_GOLD : "#333"}` }}>
      <div className="flex items-center gap-1 px-2 py-1.5" style={{ background: "#2a2a2a" }}>
        <div className="w-2 h-2 rounded-full" style={{ background: "#ff5f57" }} />
        <div className="w-2 h-2 rounded-full" style={{ background: "#febc2e" }} />
        <div className="w-2 h-2 rounded-full" style={{ background: "#28c840" }} />
        <div className="flex-1 h-3 rounded-sm mx-1 flex items-center justify-center" style={{ background: "#3a3a3a" }}>
          <span className="font-mono text-[5px]" style={{ color: "rgba(255,255,255,0.4)" }}>caretakermatch.com</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[calc(100%-22px)] gap-2" style={{ background: "#3d7060" }}>
        <div className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>{step.number}</div>
        <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center" style={{ borderColor: highlight ? CTM_GOLD : "rgba(255,255,255,0.6)" }}>
          <StepSvg d={step.iconD} size="w-8 h-8" />
        </div>
        <div className="text-[8.5px] font-medium text-center px-2 leading-tight text-white">{step.label}</div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col items-center flex-shrink-0" style={{ height: ITEM_HEIGHT }}>
      {step.isLive ? (
        <Link href={step.href} className="hover:scale-105 transition-transform block">{frame}</Link>
      ) : (
        <div className="opacity-60 cursor-default">{frame}</div>
      )}
      <Link href={step.href} className={`mt-1.5 text-[10px] flex items-center gap-0.5 font-sans ${step.isLive ? "hover:underline" : "pointer-events-none text-gray-400"}`} style={step.isLive ? { color: CTM_GREEN } : {}}>
        Open demo <span>↗</span>
      </Link>
      {badge && (
        <div className="mt-1 text-[8px] font-sans font-semibold text-center" style={{ color: CTM_GOLD }}>{badge}</div>
      )}
    </div>
  );
}

// ── Patient Journey steps ──────────────────────────────────────────────────
const patientSteps: Step[] = [
  {
    number: "01",
    label: "Patient Enrollment",
    href: "/demo/onboarding/patient",
    isLive: true,
    iconD: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    number: "02",
    label: "Trust & Safety Screening",
    href: "/demo/onboarding/approval",
    isLive: true,
    isWebPortal: true,
    iconD: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    number: "03",
    label: "Patient Volunteer Selection",
    href: "/demo/onboarding/matching",
    isLive: true,
    isWebPortal: true,
    iconD: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    number: "04",
    label: "Recovery & Monitoring",
    href: "/demo/overseer",
    isLive: true,
    isWebPortal: true,
    iconD: "M3 12h4l2.5-7 4 14 2.5-7H20",
  },
];

// ── Volunteer Network steps ────────────────────────────────────────────────
const volunteerEnrollStep: Step = {
  number: "V1",
  label: "Volunteer Enrollment",
  href: "/demo/onboarding/volunteer",
  isLive: true,
  iconD: "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z",
};

const ctmlDatabaseStep: Step = {
  number: "DB",
  label: "CTM Vetted Database",
  href: "/demo/commonspirit/volunteer-pipeline",
  isLive: true,
  isWebPortal: true,
  iconD: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
};

const partners = [
  { icon: "🏛️", label: "Faith-Based Orgs", color: CTM_GOLD },
  { icon: "⭐", label: "Senior Corps", color: CTM_GOLD },
  { icon: "💚", label: "Spark the Change", color: CTM_GREEN },
  { icon: "👥", label: "Direct Signups", color: "#2563eb" },
];

// ── Safety bar ─────────────────────────────────────────────────────────────
const safetyItems = [
  {
    label: "Volunteer Pre-Screening",
    sublabel: "Best practice baseline",
    d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z",
  },
  {
    label: "Identity Verified",
    sublabel: "Patient & volunteer",
    d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "Consent First",
    sublabel: "Both parties sign",
    d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
  },
  {
    label: "Live Monitoring",
    sublabel: "During recovery",
    d: "M3 12h4l2.5-7 4 14 2.5-7H20",
  },
  {
    label: "HIPAA Aligned",
    sublabel: "All touchpoints",
    d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
  },
];

export default function CommonSpiritDemo() {
  return (
    <div className="min-h-screen flex flex-col p-6 select-none" style={{ background: "#f5f0e3", fontFamily: "Georgia, serif" }}>

      {/* CommonSpirit logo */}
      <div className="mb-5 pb-4 border-b" style={{ borderColor: "#ddd8cc" }}>
        <img src="/commonspirit-logo.png" alt="CommonSpirit Health" className="h-28 object-contain object-left" style={{ mixBlendMode: "multiply" }} />
      </div>

      {/* Header */}
      <div className="mb-4">
        <p className="text-xs font-sans font-semibold tracking-widest uppercase mb-2" style={{ color: CTM_GREEN }}>Use Case Demo</p>
        <div className="flex items-center gap-3 mb-1">
          <img src="/ctm-logo.png" alt="CaretakerMatch" className="h-10 w-10 object-contain flex-shrink-0" style={{ mixBlendMode: "multiply" }} />
          <h1 className="text-4xl font-bold italic" style={{ color: "#1a1a1a" }}>CaretakerMatch</h1>
        </div>
        <p className="text-lg italic" style={{ color: "#3a3a3a" }}>
          Fewer SNF days. Better outcomes. Lower cost of care. Deeper community engagement.
        </p>
      </div>

      {/* Main content */}
      <div className="flex gap-6 items-start flex-1">

        {/* Left — Surgeon video (Pre-op Visit) */}
        <div className="flex-shrink-0 w-56">
          <p className="font-sans font-semibold text-xs uppercase tracking-wide mb-1" style={{ color: CTM_GREEN }}>Pre-op Visit</p>
          <p className="font-sans text-xs italic mb-3" style={{ color: "#73726c" }}>Physician introduces CaretakerMatch option</p>
          <div className="w-full aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://app.heygen.com/embeds/2183ea75f04e415c912ba9ceb4eb555b"
              title="Surgeon introducing CTM to patient"
              className="w-full h-full"
              frameBorder="0"
              allow="encrypted-media; fullscreen;"
              allowFullScreen
            />
          </div>
          <p className="font-sans text-xs mt-2 italic cursor-pointer hover:underline" style={{ color: CTM_GOLD }}>Click to play ↗</p>
        </div>

        {/* Arrow from video to workflow */}
        <div className="self-center text-gray-400 text-2xl flex-shrink-0 mt-10">→</div>

        {/* Right — Workflow card */}
        <div className="flex-1 min-w-0">
          <p className="font-sans text-sm italic mb-3 text-center" style={{ color: "#555" }}>
            A clinically-driven, privacy-protected lifecycle for every patient-volunteer match
          </p>

          <div className="rounded-xl overflow-hidden shadow-xl flex flex-col">

            {/* Safety bar */}
            <div className="px-5 py-3" style={{ background: CTM_GREEN }}>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <SafetySvg d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
                    <span className="font-sans text-white font-semibold text-sm">Safety Monitoring / Privacy &amp; Compliance</span>
                  </div>
                  <p className="font-sans text-white/60 text-xs italic mt-1">Active across<br />all stages</p>
                </div>
                <div className="flex flex-1 justify-around">
                  {safetyItems.map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-0.5">
                      <SafetySvg d={item.d} />
                      <span className="font-sans text-white text-[10px] text-center leading-tight font-medium">{item.label}</span>
                      <span className="font-sans text-white/50 text-[9px] text-center leading-tight italic">{item.sublabel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Patient Journey row ── */}
            <div className="px-5 py-5 flex items-start gap-3" style={{ background: "rgba(255,255,255,0.55)" }}>
              {/* Track label — fixed height to align with mockups */}
              <div className="flex-shrink-0 w-20 text-center" style={{ height: ITEM_HEIGHT, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div className="text-[10px] font-sans font-bold uppercase tracking-wider" style={{ color: CTM_GREEN }}>Patient<br />Journey</div>
                <div className="mt-1 w-full h-px" style={{ background: CTM_GREEN, opacity: 0.3 }} />
              </div>

              <IphoneMockup step={patientSteps[0]} />
              <Arrow />
              <WebPortalMockup step={patientSteps[1]} />
              <Arrow />
              {/* Patient Volunteer Selection — convergence point, badge sits inside fixed-height wrapper */}
              <WebPortalMockup step={patientSteps[2]} highlight badge="↑ Vol. Network" />
              <Arrow />
              <WebPortalMockup step={patientSteps[3]} />
            </div>

            {/* ── Volunteer Network band ── */}
            <div className="flex items-start gap-3 px-5 py-5" style={{ background: "#e8f4ee", borderTop: "1.5px dashed #b0cfc0" }}>

              {/* Network label + partners — fixed height */}
              <div className="flex-shrink-0 w-20" style={{ height: ITEM_HEIGHT, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div className="text-[10px] font-sans font-bold uppercase tracking-wider leading-tight mb-2" style={{ color: CTM_GREEN }}>
                  CTM<br />Volunteer<br />Network
                </div>
                <div className="flex flex-col gap-1">
                  {partners.map((p) => (
                    <div key={p.label} className="flex items-center gap-1">
                      <span className="text-[11px]">{p.icon}</span>
                      <span className="text-[8.5px] font-sans font-medium leading-tight" style={{ color: p.color }}>{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Arrow />
              <IphoneMockup step={volunteerEnrollStep} />
              <Arrow />
              <WebPortalMockup step={ctmlDatabaseStep} />

              {/* Upward connector — fixed height so it aligns with mockup tops */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center ml-2" style={{ height: ITEM_HEIGHT }}>
                <span className="text-xl font-bold" style={{ color: CTM_GREEN }}>↑</span>
                <span className="text-[8px] font-sans text-center leading-tight" style={{ color: CTM_GREEN }}>feeds into<br />Patient Vol.<br />Selection</span>
              </div>
            </div>

          </div>

          {/* Volunteer Network Dashboard thumbnail */}
          <div className="mt-4 flex justify-center">
            <div className="flex flex-col items-center gap-1.5">
              <p className="font-sans text-xs font-medium mb-1" style={{ color: CTM_GOLD }}>Volunteer Network Dashboard</p>
              <Link href="/demo/commonspirit/volunteer-pipeline" className="hover:scale-105 transition-transform block">
                <div className="relative w-[216px] h-[120px] rounded-[8px] shadow-xl overflow-hidden" style={{ background: "#1a1a1a", border: "1px solid #333" }}>
                  <div className="flex items-center gap-1 px-2 py-1.5" style={{ background: "#2a2a2a" }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: "#ff5f57" }} />
                    <div className="w-2 h-2 rounded-full" style={{ background: "#febc2e" }} />
                    <div className="w-2 h-2 rounded-full" style={{ background: "#28c840" }} />
                    <div className="flex-1 h-3 rounded-sm mx-1 flex items-center justify-center" style={{ background: "#3a3a3a" }}>
                      <span className="font-mono text-[5px]" style={{ color: "rgba(255,255,255,0.4)" }}>caretakermatch.com</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-around px-4 h-[calc(100%-22px)]" style={{ background: "#3d7060" }}>
                    <div className="flex flex-col gap-1">
                      {[{ w: 40, label: "2,847" }, { w: 32, label: "2,412" }, { w: 26, label: "2,241" }, { w: 18, label: "412" }].map((row, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <div className="h-2 rounded-sm" style={{ width: row.w, background: i === 3 ? CTM_GOLD : "rgba(255,255,255,0.35)" }} />
                          <span className="font-mono text-[7px]" style={{ color: i === 3 ? CTM_GOLD : "rgba(255,255,255,0.6)" }}>{row.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="text-[20px] font-semibold text-white leading-none">412</div>
                      <div className="text-[7px] text-white/60 text-center">volunteers<br />available</div>
                      <div className="mt-1 px-2 py-0.5 rounded-full text-[7px] font-medium" style={{ background: CTM_GOLD, color: "white" }}>94% match</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/demo/commonspirit/volunteer-pipeline" className="text-[10px] font-sans flex items-center gap-0.5 hover:underline" style={{ color: CTM_GOLD }}>
                Open dashboard <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <p className="font-sans text-xs text-gray-500">CaretakerMatch © 2026</p>
        <div className="flex items-center gap-4">
          <Link href="/demo/commonspirit/patient-flyer" className="font-sans text-xs flex items-center gap-1 hover:underline" style={{ color: CTM_GREEN }}>
            <span>📋</span> Patient flyer
          </Link>
          <Link href="/demo/commonspirit/volunteer-flyer" className="font-sans text-xs flex items-center gap-1 hover:underline" style={{ color: CTM_GOLD }}>
            <span>📋</span> Volunteer flyer
          </Link>
          <Link href="/demo/onboarding/progress-tracker" className="font-sans text-xs flex items-center gap-1 hover:underline" style={{ color: CTM_GREEN }}>
            <span>📊</span> Progress tracker
          </Link>
          <p className="font-sans text-xs flex items-center gap-1.5" style={{ color: CTM_GREEN }}>
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: CTM_GREEN }} />
            Click any step to launch demo
          </p>
        </div>
      </div>

    </div>
  );
}
