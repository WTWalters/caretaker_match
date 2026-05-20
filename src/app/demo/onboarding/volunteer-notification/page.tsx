"use client";

import Link from "next/link";

const CTM_GREEN = "#1e3a2f";
const CTM_GOLD = "#c4922a";

const details = [
  { icon: "🦵", label: "Procedure", value: "Total Knee Replacement" },
  { icon: "📅", label: "Surgery Date", value: "June 18, 2026" },
  { icon: "⏰", label: "Support Needed", value: "3-day post-op visits (approx. 2–3 weeks)" },
  { icon: "📍", label: "Distance", value: "8 miles from you" },
];

function IPhone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: 390 }}>
      {/* Side buttons */}
      <div className="absolute rounded-l-sm" style={{ left: -12, top: 100, width: 4, height: 32, background: "#2a2a2a" }} />
      <div className="absolute rounded-l-sm" style={{ left: -12, top: 148, width: 4, height: 52, background: "#2a2a2a" }} />
      <div className="absolute rounded-l-sm" style={{ left: -12, top: 212, width: 4, height: 52, background: "#2a2a2a" }} />
      <div className="absolute rounded-r-sm" style={{ right: -12, top: 165, width: 4, height: 72, background: "#2a2a2a" }} />
      {/* Shell */}
      <div className="rounded-[50px] p-[10px]" style={{ background: "#1a1a1a", boxShadow: "0 0 0 1px #3a3a3a, 0 40px 100px rgba(0,0,0,0.5)" }}>
        <div className="bg-white rounded-[42px] overflow-hidden flex flex-col" style={{ height: 812 }}>
          {/* Status bar */}
          <div className="relative flex items-center justify-between px-8 flex-shrink-0" style={{ paddingTop: 14, paddingBottom: 6 }}>
            <span className="text-[13px] font-semibold">9:41</span>
            <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full" style={{ width: 120, height: 34 }} />
            <div className="flex items-center gap-1.5">
              <svg width="17" height="11" viewBox="0 0 17 11">
                <rect x="0" y="5" width="3" height="6" rx="0.5" fill="black" />
                <rect x="4.5" y="3" width="3" height="8" rx="0.5" fill="black" />
                <rect x="9" y="1" width="3" height="10" rx="0.5" fill="black" />
                <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="black" />
              </svg>
              <svg width="27" height="13" viewBox="0 0 27 13">
                <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="black" fill="none" />
                <rect x="2" y="2" width="16" height="9" rx="2" fill="black" />
                <path d="M23.5 4.5v4c1.1-.5 1.8-1.2 1.8-2s-.7-1.5-1.8-2z" fill="black" />
              </svg>
            </div>
          </div>
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto" style={{ background: "#f5f0e3" }}>
            {children}
          </div>
          {/* Home indicator */}
          <div className="flex-shrink-0 flex justify-center" style={{ paddingTop: 8, paddingBottom: 12, background: "#f5f0e3" }}>
            <div className="rounded-full" style={{ width: 130, height: 5, background: "rgba(0,0,0,0.18)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VolunteerNotificationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4" style={{ background: "#f5f0e3", fontFamily: "system-ui, sans-serif" }}>
      <div className="mb-6 text-center">
        <Link href="/demo/commonspirit" className="text-xs font-medium hover:underline" style={{ color: CTM_GREEN }}>← Back to demo</Link>
        <p className="text-xs text-gray-400 mt-1">Volunteer Notification — CareTaker Match Demo</p>
      </div>

      <IPhone>
        {/* App bar */}
        <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ background: CTM_GREEN }}>
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
            <span className="text-xl">💛</span>
            <span className="text-white font-bold text-base">New Match Request!</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
            A patient has requested you as their volunteer. Review the details and respond within 24 hours.
          </p>
        </div>

        {/* Patient card */}
        <div className="mx-4 mt-4 rounded-2xl bg-white p-4" style={{ border: `1.5px solid ${CTM_GREEN}` }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: CTM_GREEN }}>
              JW
            </div>
            <div>
              <div className="font-bold text-base" style={{ color: "#1a1a1a" }}>Jennifer W.</div>
              <div className="text-sm" style={{ color: "#73726c" }}>Age 67 • Chicago, IL</div>
            </div>
          </div>

          <div className="h-px mb-3" style={{ background: "#e8e2d8" }} />

          <div className="space-y-2.5">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-3">
                <span className="text-sm mt-0.5 flex-shrink-0">{d.icon}</span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: CTM_GREEN }}>
                    {d.label}
                  </div>
                  <div className="text-sm font-medium leading-snug" style={{ color: "#1a1a1a" }}>{d.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 p-3 rounded-xl italic text-sm leading-relaxed" style={{ border: `1px solid ${CTM_GREEN}`, color: "#3a3a3a", background: "#fafaf8" }}>
            "Lives alone. Needs 3-day post-op support. Looking for someone reliable and compassionate."
          </div>
        </div>

        {/* Action buttons */}
        <div className="mx-4 mt-4 flex flex-col gap-3">
          <Link
            href="/demo/onboarding/coffee-meet"
            className="w-full py-3.5 rounded-xl text-center text-white font-semibold text-sm block"
            style={{ background: CTM_GREEN }}
          >
            ✓ Accept &amp; Propose Coffee Times
          </Link>
          <button
            className="w-full py-3.5 rounded-xl text-center font-semibold text-sm"
            style={{ border: "1.5px solid #ccc", color: "#555", background: "white" }}
          >
            ✗ Decline (Not Available)
          </button>
        </div>

        {/* Info banner */}
        <div className="mx-4 mt-3 mb-4 p-3 rounded-xl flex items-start gap-2.5" style={{ background: "#EBF4FF" }}>
          <span className="text-blue-500 flex-shrink-0 mt-0.5 text-sm">ℹ️</span>
          <p className="text-xs leading-relaxed" style={{ color: "#1e40af" }}>
            <span className="font-semibold">Coffee meet first:</span>{" "}
            If you accept, you&apos;ll schedule a brief coffee meeting before surgery to get acquainted.
          </p>
        </div>
      </IPhone>
    </div>
  );
}
