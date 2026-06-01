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

export default function PatientConsentPage() {
  const [decision, setDecision] = useState<"continue" | "optout" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4" style={{ background: "#f5f0e3", fontFamily: "system-ui, sans-serif" }}>
      <div className="mb-6 text-center">
        <Link href="/demo/commonspirit" className="text-xs font-medium hover:underline" style={{ color: CTM_GREEN }}>← Back to demo</Link>
        <p className="text-xs text-gray-400 mt-1">Patient Consent — CareTaker Match Demo</p>
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
            JW
          </div>
        </div>

        {submitted ? (
          <div className="px-5 py-10 flex flex-col items-center gap-4">
            {decision === "continue" ? (
              <>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl" style={{ background: "#EAF3DE" }}>🤝</div>
                <h2 className="text-xl font-bold text-center" style={{ color: CTM_GREEN }}>You&apos;re Matched!</h2>
                <p className="text-sm text-center leading-relaxed" style={{ color: "#555" }}>
                  Susan M. has also agreed to move forward. You&apos;re officially matched! She&apos;ll be your CareTaker during recovery.
                </p>

                <div className="w-full rounded-xl p-4" style={{ background: CTM_GREEN }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img src="/profiles/susan.jpg" alt="Susan M." className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Susan M. — Your CareTaker</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>Right Knee Replacement · 2 yrs ago</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>94% match score</div>
                    </div>
                  </div>
                </div>

                <div className="w-full rounded-xl p-4" style={{ background: "#EAF3DE" }}>
                  <div className="text-[10px] font-semibold uppercase tracking-wide mb-2" style={{ color: CTM_GREEN }}>What Happens Next</div>
                  {[
                    "Contact info shared securely between you and Susan",
                    "Susan will check in the day before your surgery",
                    "3-day post-op visit schedule begins Jun 18",
                    "All communication monitored for your safety",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm mb-1.5" style={{ color: "#3a3a3a" }}>
                      <span className="font-bold flex-shrink-0" style={{ color: CTM_GREEN }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl" style={{ background: "#FEF3C7" }}>💛</div>
                <h2 className="text-xl font-bold text-center" style={{ color: CTM_GREEN }}>No Problem, Jennifer</h2>
                <p className="text-sm text-center leading-relaxed" style={{ color: "#555" }}>
                  We completely understand. The right match matters. We&apos;ll find you another volunteer who&apos;s a better fit.
                </p>

                <div className="w-full rounded-xl p-4" style={{ background: "#EAF3DE" }}>
                  <div className="text-[10px] font-semibold uppercase tracking-wide mb-2" style={{ color: CTM_GREEN }}>What Happens Next</div>
                  {[
                    "Your preferences have been noted",
                    "We'll re-match you with new candidates",
                    "Your new top 3 matches within 24–48 hours",
                    "Your surgery date is still on track",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm mb-1.5" style={{ color: "#3a3a3a" }}>
                      <span className="font-bold flex-shrink-0" style={{ color: CTM_GOLD }}>→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="flex items-center justify-center gap-3 pt-4">
              <Link href="/demo/onboarding/volunteer-consent" className="text-xs hover:underline" style={{ color: CTM_GOLD }}>
                Volunteer&apos;s View →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/demo/commonspirit" className="text-xs hover:underline" style={{ color: CTM_GREEN }}>
                Back to demo
              </Link>
            </div>
          </div>
        ) : (
          <div className="px-4 py-5 flex flex-col gap-4">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-lg font-bold" style={{ color: CTM_GREEN }}>How Was Your Coffee Meet?</h2>
              <p className="text-xs mt-1" style={{ color: "#73726c" }}>Your meet with Susan M. is complete</p>
            </div>

            {/* Susan summary card */}
            <div className="rounded-xl p-3 flex items-center gap-3" style={{ background: "white", border: "1px solid #e0d8c8" }}>
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src="/profiles/susan.jpg" alt="Susan M." className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: "#1a1a1a" }}>Susan M.</div>
                <div className="text-xs" style={{ color: "#73726c" }}>Right Knee Replacement · 2 yrs ago</div>
                <div className="text-xs" style={{ color: "#73726c" }}>94% match · Oak Park, IL</div>
              </div>
            </div>

            {/* Decision question */}
            <div className="text-center">
              <p className="text-sm font-semibold" style={{ color: CTM_GREEN }}>Would you like Susan as your CareTaker?</p>
              <p className="text-xs mt-1" style={{ color: "#73726c" }}>Both you and Susan must agree to move forward</p>
            </div>

            {/* Continue option */}
            <button
              onClick={() => setDecision("continue")}
              className="w-full rounded-xl p-4 text-left flex items-center gap-3 transition-all"
              style={{
                background: decision === "continue" ? CTM_GREEN : "white",
                border: `2px solid ${decision === "continue" ? CTM_GREEN : "#e0d8c8"}`,
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0" style={{ background: decision === "continue" ? "rgba(255,255,255,0.2)" : "#EAF3DE" }}>
                ✅
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: decision === "continue" ? "white" : "#1a1a1a" }}>
                  Yes, I&apos;d like Susan as my CareTaker
                </div>
                <div className="text-xs mt-0.5" style={{ color: decision === "continue" ? "rgba(255,255,255,0.75)" : "#73726c" }}>
                  I felt comfortable and want to move forward
                </div>
              </div>
              {decision === "continue" && <span className="text-white ml-auto flex-shrink-0">✓</span>}
            </button>

            {/* Opt out option */}
            <button
              onClick={() => setDecision("optout")}
              className="w-full rounded-xl p-4 text-left flex items-center gap-3 transition-all"
              style={{
                background: decision === "optout" ? "#FEF3C7" : "white",
                border: `2px solid ${decision === "optout" ? "#F59E0B" : "#e0d8c8"}`,
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0" style={{ background: decision === "optout" ? "rgba(245,158,11,0.2)" : "#FEF9C3" }}>
                🔄
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>
                  I&apos;d prefer a different match
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#73726c" }}>
                  No hard feelings — we&apos;ll find someone who&apos;s a better fit
                </div>
              </div>
              {decision === "optout" && <span style={{ color: "#F59E0B" }} className="ml-auto flex-shrink-0">✓</span>}
            </button>

            {/* Privacy assurance */}
            <div className="rounded-xl p-3.5 flex items-start gap-2.5" style={{ background: "#EBF4FF" }}>
              <span className="text-blue-500 flex-shrink-0 mt-0.5 text-sm">🔒</span>
              <p className="text-xs leading-relaxed" style={{ color: "#1e40af" }}>
                <span className="font-semibold">Your choice is private.</span>{" "}
                Susan won&apos;t know your decision until both of you have responded. If either person opts out, the match ends gracefully.
              </p>
            </div>

            {/* Submit */}
            <button
              onClick={() => decision && setSubmitted(true)}
              className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-opacity"
              style={{ background: decision ? CTM_GREEN : "#ccc", opacity: decision ? 1 : 0.6 }}
              disabled={!decision}
            >
              Submit My Decision
            </button>

            <Link href="/demo/onboarding/coffee-meet" className="text-center text-xs hover:underline pb-2" style={{ color: CTM_GREEN }}>
              ← Back
            </Link>
          </div>
        )}
      </IPhone>
    </div>
  );
}
