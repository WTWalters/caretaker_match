"use client";

import { useState } from "react";
import Link from "next/link";

const CTM_GREEN = "#1e3a2f";
const CTM_GOLD = "#c4922a";

const TIME_SLOTS = [
  { id: "t1", day: "Tomorrow, Jun 15", time: "10:00 AM" },
  { id: "t2", day: "Tomorrow, Jun 15", time: "2:00 PM" },
  { id: "t3", day: "Saturday, Jun 16", time: "11:00 AM" },
];

const LOCATIONS = [
  { id: "l1", name: "Starbucks", address: "1234 Main St", distance: "4.2 mi from you" },
  { id: "l2", name: "Panera Bread", address: "567 Oak Ave", distance: "4.8 mi from you" },
  { id: "l3", name: "Corner Bakery", address: "890 Elm Blvd", distance: "5.1 mi from you" },
  { id: "l4", name: "Virtual Video Call", address: "", distance: "", virtual: true },
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

function AppBar({ avatar }: { avatar: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ background: CTM_GREEN }}>
      <div className="flex items-center gap-2">
        <img src="/ctm-logo.png" alt="CTM" className="w-7 h-7 object-contain rounded-full" />
        <div>
          <div className="text-white font-semibold text-sm leading-tight">CaretakerMatch</div>
          <div className="text-xs italic" style={{ color: "rgba(255,255,255,0.65)" }}>No One Recovers Alone</div>
        </div>
      </div>
      <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: CTM_GOLD }}>
        {avatar}
      </div>
    </div>
  );
}

export default function CoffeeMeetPage() {
  const [selectedTime, setSelectedTime] = useState("t1");
  const [selectedLocation, setSelectedLocation] = useState("l1");
  const [confirmed, setConfirmed] = useState(false);

  const time = TIME_SLOTS.find((t) => t.id === selectedTime)!;
  const loc = LOCATIONS.find((l) => l.id === selectedLocation)!;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4" style={{ background: "#f5f0e3", fontFamily: "system-ui, sans-serif" }}>
      <div className="mb-6 text-center">
        <Link href="/demo/commonspirit" className="text-xs font-medium hover:underline" style={{ color: CTM_GREEN }}>← Back to demo</Link>
        <p className="text-xs text-gray-400 mt-1">Coffee Meet Scheduler — CareTaker Match Demo</p>
      </div>

      <IPhone>
        <AppBar avatar="JW" />

        {confirmed ? (
          /* ── Patient confirmation screen ── */
          <div className="px-4 py-6 flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: "#EAF3DE" }}>☕</div>
              <h2 className="text-xl font-bold text-center" style={{ color: CTM_GREEN }}>You&apos;re all set, Jennifer!</h2>
              <p className="text-sm text-center" style={{ color: "#555" }}>
                Your coffee meet with <strong>Susan M.</strong> is confirmed. Calendar invites have been sent to both of you.
              </p>
            </div>

            <div className="w-full rounded-xl p-4 space-y-3" style={{ background: "white", border: "1px solid #e0d8c8" }}>
              <div className="flex items-center gap-3">
                <span className="text-lg">📅</span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: CTM_GREEN }}>Date &amp; Time</div>
                  <div className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{time.day} at {time.time}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">{loc.virtual ? "💻" : "📍"}</span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: CTM_GREEN }}>Location</div>
                  <div className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                    {loc.virtual ? "Virtual Video Call — link sent to both of you" : `${loc.name} — ${loc.address}`}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">👤</span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: CTM_GREEN }}>Your Volunteer</div>
                  <div className="text-sm font-medium" style={{ color: "#1a1a1a" }}>Susan M. — Right Knee Replacement, 2 yrs ago</div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-xl p-4" style={{ background: "#EAF3DE" }}>
              <div className="text-[10px] font-semibold uppercase tracking-wide mb-2" style={{ color: CTM_GREEN }}>What to Expect</div>
              {[
                "30–45 minute casual coffee chat",
                "Share your concerns about recovery",
                "Ask Susan about her experience",
                "Decide together if the match feels right",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm mb-1.5" style={{ color: "#3a3a3a" }}>
                  <span className="font-bold flex-shrink-0" style={{ color: CTM_GREEN }}>✓</span>
                  {item}
                </div>
              ))}
            </div>

            {/* Privacy note — patient perspective */}
            <div className="w-full rounded-xl p-3.5 flex items-start gap-2.5" style={{ background: "#EBF4FF" }}>
              <span className="text-blue-500 flex-shrink-0 mt-0.5 text-sm">🔒</span>
              <p className="text-xs leading-relaxed" style={{ color: "#1e40af" }}>
                <span className="font-semibold">Your privacy is protected:</span>{" "}
                Susan does not have your phone number or home address. All communication goes through a secure proxy until you both consent to share contact info after the coffee meet.
              </p>
            </div>

            <button className="w-full py-3.5 rounded-xl text-white font-semibold text-sm" style={{ background: CTM_GREEN }}>
              {loc.virtual ? "💻 Join Video Call" : "Get Directions"}
            </button>
            <button className="w-full py-3.5 rounded-xl font-semibold text-sm" style={{ border: `1.5px solid ${CTM_GREEN}`, color: CTM_GREEN, background: "white" }}>
              Contact Susan (via Secure Proxy)
            </button>

            <div className="flex items-center justify-center gap-3 pt-2 pb-1">
              <Link href="/demo/onboarding/volunteer-confirmation" className="text-xs hover:underline" style={{ color: CTM_GOLD }}>
                Volunteer&apos;s View →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/demo/commonspirit" className="text-xs hover:underline" style={{ color: CTM_GREEN }}>
                Back to demo
              </Link>
            </div>
          </div>
        ) : (
          /* ── Scheduler screen ── */
          <div className="px-4 py-4 flex flex-col gap-4">

            {/* Great News banner */}
            <div className="rounded-2xl p-4" style={{ background: CTM_GREEN }}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xl">☕</span>
                <span className="text-white font-bold text-base">Great News!</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.90)" }}>
                Susan M. has accepted your request! Let&apos;s schedule a coffee meet before your surgery.
              </p>
            </div>

            {/* Susan summary card */}
            <div className="rounded-xl p-3 flex items-center gap-3 bg-white" style={{ border: "1px solid #e0d8c8" }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: CTM_GREEN }}>RM</div>
              <div>
                <div className="font-bold text-sm" style={{ color: "#1a1a1a" }}>Susan M.</div>
                <div className="text-xs" style={{ color: "#73726c" }}>94% Match • 8 mi away</div>
                <div className="text-xs" style={{ color: "#73726c" }}>Right Knee Replacement — 2 yrs ago</div>
                <div className="text-xs" style={{ color: "#73726c" }}>Oak Park, IL • Mon–Fri available</div>
              </div>
            </div>

            {/* Step 1: Time */}
            <div>
              <div className="text-sm font-bold mb-0.5" style={{ color: "#1a1a1a" }}>Step 1: Pick a Time</div>
              <div className="text-xs mb-2" style={{ color: "#73726c" }}>Susan proposed these times. Choose what works best:</div>
              <div className="flex flex-col gap-2">
                {TIME_SLOTS.map((slot) => {
                  const active = selectedTime === slot.id;
                  return (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedTime(slot.id)}
                      className="w-full rounded-xl px-4 py-3 text-left flex items-center justify-between transition-all"
                      style={{ background: active ? CTM_GREEN : "white", border: `1.5px solid ${active ? CTM_GREEN : "#e0d8c8"}` }}
                    >
                      <div>
                        <div className="font-semibold text-sm" style={{ color: active ? "white" : "#1a1a1a" }}>{slot.day}</div>
                        <div className="text-xs" style={{ color: active ? "rgba(255,255,255,0.8)" : "#555" }}>{slot.time}</div>
                      </div>
                      {active && <span className="text-white">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Location */}
            <div>
              <div className="text-sm font-bold mb-0.5" style={{ color: "#1a1a1a" }}>Step 2: Choose a Location</div>
              <div className="text-xs mb-2" style={{ color: "#73726c" }}>Suggested near the midpoint between you:</div>
              <div className="flex flex-col gap-2">
                {LOCATIONS.map((location) => {
                  const active = selectedLocation === location.id;
                  return (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location.id)}
                      className="w-full rounded-xl px-4 py-3 text-left flex items-center justify-between transition-all"
                      style={{ background: active ? CTM_GREEN : "white", border: `1.5px solid ${active ? CTM_GREEN : "#e0d8c8"}` }}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-sm mr-0.5">{location.virtual ? "💻" : "☕"}</span>
                          <span className="font-semibold text-sm" style={{ color: active ? "white" : "#1a1a1a" }}>{location.name}</span>
                          {!location.virtual && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: CTM_GOLD, color: "white" }}>MIDPOINT</span>
                          )}
                          {location.virtual && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: "#2563eb", color: "white" }}>VIRTUAL</span>
                          )}
                        </div>
                        {location.virtual ? (
                          <div className="text-xs" style={{ color: active ? "rgba(255,255,255,0.75)" : "#73726c" }}>
                            CTM sets up a secure video link for both of you
                          </div>
                        ) : (
                          <>
                            <div className="text-xs" style={{ color: active ? "rgba(255,255,255,0.75)" : "#73726c" }}>{location.address}</div>
                            <div className="text-xs" style={{ color: active ? "rgba(255,255,255,0.75)" : "#73726c" }}>📍 {location.distance}</div>
                          </>
                        )}
                      </div>
                      {active && <span className="text-white">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Confirm */}
            <button
              onClick={() => setConfirmed(true)}
              className="w-full py-4 rounded-xl text-white font-semibold text-sm"
              style={{ background: CTM_GOLD }}
            >
              Confirm Coffee Meet ☕
            </button>

            <Link href="/demo/onboarding/volunteer-notification" className="text-center text-sm hover:underline pb-2" style={{ color: CTM_GREEN }}>
              ← Back
            </Link>
          </div>
        )}
      </IPhone>
    </div>
  );
}
