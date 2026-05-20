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
];

export default function CoffeeMeetPage() {
  const [selectedTime, setSelectedTime] = useState("t1");
  const [selectedLocation, setSelectedLocation] = useState("l1");
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    const time = TIME_SLOTS.find((t) => t.id === selectedTime)!;
    const loc = LOCATIONS.find((l) => l.id === selectedLocation)!;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-8" style={{ background: "#f5f0e3" }}>
        <div className="w-full max-w-sm mx-auto" style={{ fontFamily: "system-ui, sans-serif" }}>
          <div className="flex items-center justify-between px-4 py-3 rounded-t-2xl" style={{ background: CTM_GREEN }}>
            <div className="flex items-center gap-2">
              <img src="/ctm-logo.png" alt="CTM" className="w-7 h-7 object-contain rounded-full" />
              <div>
                <div className="text-white font-semibold text-sm leading-tight">CaretakerMatch</div>
                <div className="text-xs italic" style={{ color: "rgba(255,255,255,0.65)" }}>No One Recovers Alone</div>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: CTM_GOLD }}>JW</div>
          </div>

          <div className="bg-white rounded-b-2xl shadow-xl px-6 py-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: "#EAF3DE" }}>☕</div>
            <h2 className="text-xl font-bold text-center" style={{ color: CTM_GREEN }}>You&apos;re all set!</h2>
            <p className="text-sm text-center" style={{ color: "#555" }}>
              Your coffee meet with <strong>Robert M.</strong> is confirmed. Calendar invites have been sent to both of you.
            </p>

            <div className="w-full rounded-xl p-4 space-y-3" style={{ background: "#f5f0e3" }}>
              <div className="flex items-center gap-3">
                <span className="text-lg">📅</span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: CTM_GREEN }}>Date &amp; Time</div>
                  <div className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{time.day} at {time.time}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">📍</span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: CTM_GREEN }}>Location</div>
                  <div className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{loc.name} — {loc.address}</div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-xl p-4" style={{ background: "#EAF3DE" }}>
              <div className="text-[10px] font-semibold uppercase tracking-wide mb-2" style={{ color: CTM_GREEN }}>What to Expect</div>
              {[
                "30–45 minute casual coffee chat",
                "Discuss your recovery needs",
                "Get to know each other before surgery",
                "Robert will answer questions from experience",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm mb-1.5" style={{ color: "#3a3a3a" }}>
                  <span className="font-bold flex-shrink-0" style={{ color: CTM_GREEN }}>✓</span>
                  {item}
                </div>
              ))}
            </div>

            <button className="w-full py-3.5 rounded-xl text-white font-semibold text-base" style={{ background: CTM_GREEN }}>
              Get Directions
            </button>
            <button className="w-full py-3.5 rounded-xl font-semibold text-base" style={{ border: `1.5px solid ${CTM_GREEN}`, color: CTM_GREEN, background: "white" }}>
              Contact Robert
            </button>

            <Link href="/demo/commonspirit" className="text-sm mt-2 hover:underline" style={{ color: CTM_GREEN }}>
              ← Back to demo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8" style={{ background: "#f5f0e3" }}>
      <div className="w-full max-w-sm mx-auto" style={{ fontFamily: "system-ui, sans-serif" }}>

        {/* App bar */}
        <div className="flex items-center justify-between px-4 py-3 rounded-t-2xl" style={{ background: CTM_GREEN }}>
          <div className="flex items-center gap-2">
            <img src="/ctm-logo.png" alt="CTM" className="w-7 h-7 object-contain rounded-full" />
            <div>
              <div className="text-white font-semibold text-sm leading-tight">CaretakerMatch</div>
              <div className="text-xs italic" style={{ color: "rgba(255,255,255,0.65)" }}>No One Recovers Alone</div>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: CTM_GOLD }}>JW</div>
        </div>

        <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden pb-6">

          {/* Great News banner */}
          <div className="mx-4 mt-4 rounded-2xl p-4" style={{ background: CTM_GREEN }}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xl">☕</span>
              <span className="text-white font-bold text-lg">Great News!</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.90)" }}>
              Robert M. has accepted your request! Let&apos;s schedule a coffee meet to get acquainted before your surgery.
            </p>
          </div>

          {/* Robert summary card */}
          <div className="mx-4 mt-4 rounded-xl p-3 flex items-center gap-3" style={{ border: "1px solid #e0d8c8" }}>
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: CTM_GREEN }}>RM</div>
            <div>
              <div className="font-bold text-sm" style={{ color: "#1a1a1a" }}>Robert M.</div>
              <div className="text-xs" style={{ color: "#73726c" }}>94% Match • 8 mi away</div>
              <div className="text-xs" style={{ color: "#73726c" }}>Right Knee Replacement — 2 yrs ago</div>
              <div className="text-xs" style={{ color: "#73726c" }}>Oak Park, IL • Mon–Fri available</div>
            </div>
          </div>

          {/* Step 1: Time */}
          <div className="px-4 mt-5">
            <div className="text-base font-bold mb-0.5" style={{ color: "#1a1a1a" }}>Step 1: Pick a Time</div>
            <div className="text-xs mb-3" style={{ color: "#73726c" }}>Robert proposed these times. Choose what works best for you:</div>
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
                      <div className="text-sm" style={{ color: active ? "rgba(255,255,255,0.8)" : "#555" }}>{slot.time}</div>
                    </div>
                    {active && <span className="text-white text-lg">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Location */}
          <div className="px-4 mt-5">
            <div className="text-base font-bold mb-0.5" style={{ color: "#1a1a1a" }}>Step 2: Choose a Location</div>
            <div className="text-xs mb-3" style={{ color: "#73726c" }}>We&apos;ve suggested locations near the midpoint between you:</div>
            <div className="flex flex-col gap-2">
              {LOCATIONS.map((loc) => {
                const active = selectedLocation === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc.id)}
                    className="w-full rounded-xl px-4 py-3 text-left flex items-center justify-between transition-all"
                    style={{ background: active ? CTM_GREEN : "white", border: `1.5px solid ${active ? CTM_GREEN : "#e0d8c8"}` }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold text-sm" style={{ color: active ? "white" : "#1a1a1a" }}>{loc.name}</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: CTM_GOLD, color: "white" }}>MIDPOINT</span>
                      </div>
                      <div className="text-xs" style={{ color: active ? "rgba(255,255,255,0.75)" : "#73726c" }}>{loc.address}</div>
                      <div className="text-xs" style={{ color: active ? "rgba(255,255,255,0.75)" : "#73726c" }}>📍 {loc.distance}</div>
                    </div>
                    {active && <span className="text-white text-lg">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Confirm */}
          <div className="px-4 mt-5">
            <button
              onClick={() => setConfirmed(true)}
              className="w-full py-4 rounded-xl text-white font-semibold text-base"
              style={{ background: CTM_GOLD }}
            >
              Confirm Coffee Meet ☕
            </button>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link href="/demo/onboarding/volunteer-notification" className="text-sm hover:underline" style={{ color: CTM_GREEN }}>
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}
