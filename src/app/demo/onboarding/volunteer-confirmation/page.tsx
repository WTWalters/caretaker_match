"use client";

import Link from "next/link";

const CTM_GREEN = "#1e3a2f";
const CTM_GOLD = "#c4922a";

function IPhone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: 390 }}>
      <div className="absolute rounded-l-sm" style={{ left: -12, top: 100, width: 4, height: 32, background: "#2a2a2a" }} />
      <div className="absolute rounded-l-sm" style={{ left: -12, top: 148, width: 4, height: 52, background: "#2a2a2a" }} />
      <div className="absolute rounded-l-sm" style={{ left: -12, top: 212, width: 4, height: 52, background: "#2a2a2a" }} />
      <div className="absolute rounded-r-sm" style={{ right: -12, top: 165, width: 4, height: 72, background: "#2a2a2a" }} />
      <div className="rounded-[50px] p-[10px]" style={{ background: "#1a1a1a", boxShadow: "0 0 0 1px #3a3a3a, 0 40px 100px rgba(0,0,0,0.5)" }}>
        <div className="bg-white rounded-[42px] overflow-hidden flex flex-col" style={{ height: 812 }}>
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
          <div className="flex-1 overflow-y-auto" style={{ background: "#f5f0e3" }}>
            {children}
          </div>
          <div className="flex-shrink-0 flex justify-center" style={{ paddingTop: 8, paddingBottom: 12, background: "#f5f0e3" }}>
            <div className="rounded-full" style={{ width: 130, height: 5, background: "rgba(0,0,0,0.18)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VolunteerConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4" style={{ background: "#f5f0e3", fontFamily: "system-ui, sans-serif" }}>
      <div className="mb-6 text-center">
        <Link href="/demo/commonspirit" className="text-xs font-medium hover:underline" style={{ color: CTM_GREEN }}>← Back to demo</Link>
        <p className="text-xs text-gray-400 mt-1">Volunteer Confirmation — CareTaker Match Demo</p>
      </div>

      <IPhone>
        {/* App bar — Robert's view */}
        <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ background: CTM_GREEN }}>
          <div className="flex items-center gap-2">
            <img src="/ctm-logo.png" alt="CTM" className="w-7 h-7 object-contain rounded-full" />
            <div>
              <div className="text-white font-semibold text-sm leading-tight">CaretakerMatch</div>
              <div className="text-xs italic" style={{ color: "rgba(255,255,255,0.65)" }}>No One Recovers Alone</div>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
            <img src="/profiles/robert.jpg" alt="Robert M." className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="px-4 py-6 flex flex-col gap-4">
          {/* Confirmation header */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: "#EAF3DE" }}>🤝</div>
            <h2 className="text-xl font-bold text-center" style={{ color: CTM_GREEN }}>Coffee Meet Confirmed!</h2>
            <p className="text-sm text-center" style={{ color: "#555" }}>
              You&apos;re meeting <strong>Jennifer W.</strong> before her surgery. Thank you for making a difference.
            </p>
          </div>

          {/* Meeting details */}
          <div className="rounded-xl p-4 space-y-3" style={{ background: "white", border: "1px solid #e0d8c8" }}>
            <div className="flex items-center gap-3">
              <span className="text-lg">📅</span>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: CTM_GREEN }}>Date & Time</div>
                <div className="text-sm font-medium" style={{ color: "#1a1a1a" }}>Tomorrow, Jun 15 at 10:00 AM</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">📍</span>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: CTM_GREEN }}>Location</div>
                <div className="text-sm font-medium" style={{ color: "#1a1a1a" }}>Starbucks — 1234 Main St</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">🦵</span>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: CTM_GREEN }}>Jennifer&apos;s Procedure</div>
                <div className="text-sm font-medium" style={{ color: "#1a1a1a" }}>Total Knee Replacement — Jun 18</div>
              </div>
            </div>
          </div>

          {/* Volunteer-specific: How to prepare */}
          <div className="rounded-xl p-4" style={{ background: CTM_GREEN }}>
            <div className="text-[10px] font-semibold uppercase tracking-wide mb-3" style={{ color: CTM_GOLD }}>How to Prepare</div>
            {[
              { icon: "💬", text: "Share your own recovery story — it builds trust" },
              { icon: "👂", text: "Listen to Jennifer's concerns about surgery" },
              { icon: "📋", text: "Discuss the 3-day post-op visit schedule" },
              { icon: "❤️", text: "Reassure her — you've been through this" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-2.5 mb-2.5 last:mb-0">
                <span className="text-sm flex-shrink-0 mt-0.5">{item.icon}</span>
                <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.92)" }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Privacy note — volunteer perspective */}
          <div className="rounded-xl p-3.5 flex items-start gap-2.5" style={{ background: "#EBF4FF" }}>
            <span className="text-blue-500 flex-shrink-0 mt-0.5 text-sm">🔒</span>
            <p className="text-xs leading-relaxed" style={{ color: "#1e40af" }}>
              <span className="font-semibold">Privacy protected:</span>{" "}
              All communication is routed through a secure proxy. You won&apos;t see Jennifer&apos;s phone number or address until mutual consent is given after the coffee meet.
            </p>
          </div>

          {/* Action buttons */}
          <button className="w-full py-3.5 rounded-xl text-white font-semibold text-sm" style={{ background: CTM_GREEN }}>
            Get Directions
          </button>
          <button className="w-full py-3.5 rounded-xl font-semibold text-sm" style={{ border: `1.5px solid ${CTM_GREEN}`, color: CTM_GREEN, background: "white" }}>
            Contact Jennifer (via Secure Proxy)
          </button>

          {/* Demo navigation */}
          <div className="flex items-center justify-center gap-3 pt-2 pb-1">
            <Link href="/demo/onboarding/coffee-meet" className="text-xs hover:underline" style={{ color: CTM_GOLD }}>
              ← Patient&apos;s View
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/demo/commonspirit" className="text-xs hover:underline" style={{ color: CTM_GREEN }}>
              Back to demo
            </Link>
          </div>
        </div>
      </IPhone>
    </div>
  );
}
