"use client";

import { useState } from "react";
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

function StarRating({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) {
  return (
    <div>
      <div className="text-sm font-semibold mb-2" style={{ color: CTM_GREEN }}>{label}</div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onChange(star)}
            className="text-3xl transition-transform hover:scale-110"
            style={{ color: star <= value ? CTM_GOLD : "#d4d0c8" }}
          >
            ★
          </button>
        ))}
      </div>
      <div className="flex justify-between text-[10px] mt-1 px-0.5" style={{ color: "#999" }}>
        <span>Poor</span>
        <span>Excellent</span>
      </div>
    </div>
  );
}

function NpsScale({ value, onChange }: { value: number | null; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="text-sm font-semibold mb-1" style={{ color: CTM_GREEN }}>
        How likely are you to recommend CareTaker Match?
      </div>
      <div className="text-xs mb-2" style={{ color: "#73726c" }}>0 = Not at all likely · 10 = Extremely likely</div>
      <div className="flex gap-1">
        {Array.from({ length: 11 }, (_, i) => i).map((n) => {
          const active = value === n;
          let bg = "white";
          let borderColor = "#e0d8c8";
          if (active) {
            if (n <= 6) { bg = "#fee2e2"; borderColor = "#f87171"; }
            else if (n <= 8) { bg = "#fef9c3"; borderColor = "#facc15"; }
            else { bg = "#dcfce7"; borderColor = "#22c55e"; }
          }
          return (
            <button
              key={n}
              onClick={() => onChange(n)}
              className="flex-1 py-2 rounded-lg text-xs font-bold transition-all"
              style={{
                background: bg,
                border: `1.5px solid ${borderColor}`,
                color: active ? "#1a1a1a" : "#999",
              }}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between text-[9px] mt-1" style={{ color: "#aaa" }}>
        <span>Detractor</span>
        <span>Passive</span>
        <span>Promoter</span>
      </div>
    </div>
  );
}

export default function VolunteerWrapupPage() {
  const [personRating, setPersonRating] = useState(5);
  const [experienceRating, setExperienceRating] = useState(5);
  const [nps, setNps] = useState<number | null>(10);
  const [feedback, setFeedback] = useState("");
  const [stayConnected, setStayConnected] = useState(true);
  const [volunteerAgain, setVolunteerAgain] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4" style={{ background: "#f5f0e3", fontFamily: "system-ui, sans-serif" }}>
      <div className="mb-6 text-center">
        <Link href="/demo/commonspirit" className="text-xs font-medium hover:underline" style={{ color: CTM_GREEN }}>← Back to demo</Link>
        <p className="text-xs text-gray-400 mt-1">Volunteer Wrap-up — CareTaker Match Demo</p>
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
          <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
            <img src="/profiles/robert.jpg" alt="Robert M." className="w-full h-full object-cover" />
          </div>
        </div>

        {submitted ? (
          <div className="px-5 py-10 flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl" style={{ background: "#EAF3DE" }}>🏅</div>
            <h2 className="text-xl font-bold text-center" style={{ color: CTM_GREEN }}>Thank You, Robert!</h2>
            <p className="text-sm text-center leading-relaxed" style={{ color: "#555" }}>
              Your support made a real difference in Jennifer&apos;s recovery. You&apos;re making healthcare more human.
            </p>

            {/* Badge earned */}
            <div className="w-full rounded-xl p-4" style={{ background: CTM_GREEN }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: CTM_GOLD }}>⭐</div>
                <div>
                  <div className="text-white font-bold text-sm">Recovery Champion Badge</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>3 encounters completed · Top-rated volunteer</div>
                </div>
              </div>
            </div>

            {volunteerAgain && (
              <div className="w-full rounded-xl p-4 flex items-start gap-3" style={{ background: "#EAF3DE" }}>
                <span className="text-lg">💚</span>
                <div>
                  <div className="text-sm font-semibold" style={{ color: CTM_GREEN }}>You&apos;re in the active pool!</div>
                  <div className="text-xs mt-0.5" style={{ color: "#555" }}>We&apos;ll notify you when a new patient near you needs support.</div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-4">
              <Link href="/demo/onboarding/patient-wrapup" className="text-xs hover:underline" style={{ color: CTM_GOLD }}>
                ← Patient&apos;s View
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/demo/commonspirit" className="text-xs hover:underline" style={{ color: CTM_GREEN }}>
                Back to demo
              </Link>
            </div>
          </div>
        ) : (
          <div className="px-4 py-5 flex flex-col gap-5">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-lg font-bold" style={{ color: CTM_GREEN }}>How Was Your Experience?</h2>
              <p className="text-xs mt-1" style={{ color: "#73726c" }}>Your encounter with Jennifer W. is complete</p>
            </div>

            {/* Encounter summary */}
            <div className="rounded-xl p-3 flex items-center gap-3" style={{ background: "white", border: "1px solid #e0d8c8" }}>
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src="/profiles/jennifer.jpg" alt="Jennifer W." className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: "#1a1a1a" }}>Jennifer W.</div>
                <div className="text-xs" style={{ color: "#73726c" }}>Patient · Total Knee Replacement</div>
                <div className="text-xs" style={{ color: "#73726c" }}>3 visits over 2 weeks</div>
              </div>
            </div>

            {/* Star rating: person */}
            <div className="rounded-xl p-4" style={{ background: "white", border: "1px solid #e0d8c8" }}>
              <StarRating value={personRating} onChange={setPersonRating} label="Rate Your Experience with Jennifer" />
            </div>

            {/* Star rating: volunteering experience */}
            <div className="rounded-xl p-4" style={{ background: "white", border: "1px solid #e0d8c8" }}>
              <StarRating value={experienceRating} onChange={setExperienceRating} label="Rate the Volunteering Experience" />
            </div>

            {/* NPS */}
            <div className="rounded-xl p-4" style={{ background: "white", border: "1px solid #e0d8c8" }}>
              <NpsScale value={nps} onChange={setNps} />
            </div>

            {/* Feedback */}
            <div className="rounded-xl p-4" style={{ background: "white", border: "1px solid #e0d8c8" }}>
              <div className="text-sm font-semibold mb-2" style={{ color: CTM_GREEN }}>How can we improve CareTaker Match?</div>
              <textarea
                className="w-full rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2"
                style={{ border: "1px solid #e0d8c8", background: "#fafaf8", minHeight: 80 }}
                placeholder="What would make the volunteer experience better? Any tools or support you wished you had..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>

            {/* Stay connected */}
            <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: "#EAF3DE" }}>
              <button
                onClick={() => setStayConnected(!stayConnected)}
                className="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors"
                style={{
                  background: stayConnected ? CTM_GREEN : "white",
                  border: `2px solid ${stayConnected ? CTM_GREEN : "#ccc"}`,
                }}
              >
                {stayConnected && <span className="text-white text-sm">✓</span>}
              </button>
              <div>
                <div className="text-sm font-semibold" style={{ color: CTM_GREEN }}>Stay connected with Jennifer</div>
                <div className="text-xs mt-0.5" style={{ color: "#555" }}>
                  Continue checking in during her recovery. She can opt out anytime.
                </div>
              </div>
            </div>

            {/* Volunteer again opt-in */}
            <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: "white", border: `1.5px solid ${CTM_GOLD}` }}>
              <button
                onClick={() => setVolunteerAgain(!volunteerAgain)}
                className="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors"
                style={{
                  background: volunteerAgain ? CTM_GOLD : "white",
                  border: `2px solid ${volunteerAgain ? CTM_GOLD : "#ccc"}`,
                }}
              >
                {volunteerAgain && <span className="text-white text-sm">✓</span>}
              </button>
              <div>
                <div className="text-sm font-semibold" style={{ color: CTM_GOLD }}>I&apos;d volunteer again</div>
                <div className="text-xs mt-0.5" style={{ color: "#555" }}>
                  Stay in the active pool to be matched with future patients in your area.
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={() => setSubmitted(true)}
              className="w-full py-3.5 rounded-xl text-white font-semibold text-sm"
              style={{ background: CTM_GREEN }}
            >
              Submit Review
            </button>

            <Link href="/demo/commonspirit" className="text-center text-xs hover:underline pb-2" style={{ color: CTM_GREEN }}>
              ← Back to demo
            </Link>
          </div>
        )}
      </IPhone>
    </div>
  );
}
