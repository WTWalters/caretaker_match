"use client";

import Link from "next/link";

const CTM_GREEN = "#1e3a2f";
const CTM_GOLD = "#c4922a";

const details = [
  {
    icon: "👤",
    iconColor: "#2563eb",
    label: "Procedure",
    value: "Total Knee Replacement",
  },
  {
    icon: "📅",
    iconColor: CTM_GREEN,
    label: "Surgery Date",
    value: "June 18, 2026",
  },
  {
    icon: "⏰",
    iconColor: "#dc2626",
    label: "Support Needed",
    value: "3-day post-op visits (approx. 2-3 weeks)",
  },
  {
    icon: "📍",
    iconColor: "#dc2626",
    label: "Distance",
    value: "8 miles from you",
  },
];

export default function VolunteerNotificationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8" style={{ background: "#f5f0e3" }}>
      <div className="w-full max-w-sm mx-auto flex flex-col" style={{ fontFamily: "system-ui, sans-serif" }}>

        {/* App bar */}
        <div className="flex items-center justify-between px-4 py-3 rounded-t-2xl" style={{ background: CTM_GREEN }}>
          <div className="flex items-center gap-2">
            <img src="/ctm-logo.png" alt="CTM" className="w-7 h-7 object-contain rounded-full" />
            <div>
              <div className="text-white font-semibold text-sm leading-tight">CaretakerMatch</div>
              <div className="text-xs italic" style={{ color: "rgba(255,255,255,0.65)" }}>No One Recovers Alone</div>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: CTM_GOLD }}>
            RM
          </div>
        </div>

        {/* Gold match request banner */}
        <div className="mx-4 mt-4 rounded-2xl p-4" style={{ background: CTM_GOLD }}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-2xl">💛</span>
            <span className="text-white font-bold text-lg">New Match Request!</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
            A patient has requested you as their volunteer. Review the details below and respond within 24 hours.
          </p>
        </div>

        {/* Patient card */}
        <div className="mx-4 mt-4 rounded-2xl bg-white p-4" style={{ border: `1.5px solid ${CTM_GREEN}` }}>
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0" style={{ background: CTM_GREEN }}>
              JW
            </div>
            <div>
              <div className="font-bold text-base" style={{ color: "#1a1a1a" }}>Jennifer W.</div>
              <div className="text-sm" style={{ color: "#73726c" }}>Age 67 • Chicago, IL</div>
            </div>
          </div>

          <div className="h-px mb-3" style={{ background: "#e8e2d8" }} />

          {/* Detail rows */}
          <div className="space-y-3">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-3">
                <span className="text-base mt-0.5 flex-shrink-0">{d.icon}</span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: CTM_GREEN }}>
                    {d.label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{d.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Patient note */}
          <div className="mt-4 p-3 rounded-xl italic text-sm leading-relaxed" style={{ border: `1px solid ${CTM_GREEN}`, color: "#3a3a3a" }}>
            "Lives alone. Needs 3-day post-op support. Looking for someone reliable and compassionate."
          </div>
        </div>

        {/* Action buttons */}
        <div className="mx-4 mt-5 flex flex-col gap-3">
          <Link
            href="/demo/onboarding/coffee-meet"
            className="w-full py-4 rounded-xl text-center text-white font-semibold text-base block"
            style={{ background: CTM_GREEN }}
          >
            ✓ Accept &amp; Propose Coffee Times
          </Link>
          <button
            className="w-full py-4 rounded-xl text-center font-semibold text-base"
            style={{ border: "1.5px solid #ccc", color: "#555", background: "white" }}
          >
            ✗ Decline (Not Available)
          </button>
        </div>

        {/* Info banner */}
        <div className="mx-4 mt-4 mb-2 p-3 rounded-xl flex items-start gap-2.5" style={{ background: "#EBF4FF" }}>
          <span className="text-blue-500 flex-shrink-0 mt-0.5">ℹ️</span>
          <p className="text-sm leading-relaxed" style={{ color: "#1e40af" }}>
            <span className="font-semibold">Coffee meet first:</span>{" "}
            If you accept, you&apos;ll schedule a brief coffee meeting before the surgery to get acquainted.
          </p>
        </div>

        <div className="text-center mt-4 mb-2">
          <Link href="/demo/onboarding/matching" className="text-sm hover:underline" style={{ color: CTM_GREEN }}>
            ← Back to matching
          </Link>
        </div>
      </div>
    </div>
  );
}
