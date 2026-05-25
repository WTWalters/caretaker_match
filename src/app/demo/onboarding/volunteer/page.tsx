"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

type Screen = number | "exit-no-commitment" | "exit-drugs";

interface FormData {
  firstName: string; lastName: string; phone: string; email: string;
  hadSurgery: string; surgeryJoint: string; surgeryRecency: string;
  recoveryQuality: string; hadHelpAtHome: string;
  walkingDistance: string; assistiveDevice: string; ageRange: string;
  commitment: string; driveRadius: string;
  smokingDrugs: string;
  foodAllergies: string[]; petAllergies: string; petsAtHome: string;
  cookingComfort: string;
  vehicle: string; stairs: string; physicalTasks: string;
  homeAddress: string;
  rolePreference: string;
  consentScrolled: boolean; signature: string; consentTimestamp: string;
}

const TEAL = "#0B8A7E";
const EMPTY: FormData = {
  firstName: "", lastName: "", phone: "", email: "",
  hadSurgery: "", surgeryJoint: "", surgeryRecency: "",
  recoveryQuality: "", hadHelpAtHome: "",
  walkingDistance: "", assistiveDevice: "", ageRange: "",
  commitment: "", driveRadius: "",
  smokingDrugs: "",
  foodAllergies: [], petAllergies: "", petsAtHome: "",
  cookingComfort: "",
  vehicle: "", stairs: "", physicalTasks: "",
  homeAddress: "",
  rolePreference: "",
  consentScrolled: false, signature: "", consentTimestamp: "",
};

// ─── Shared UI ────────────────────────────────────────────────────────────────

function Opt({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-full text-left px-4 py-3.5 rounded-xl border-2 text-sm font-medium transition-all"
      style={{ borderColor: selected ? TEAL : "#e5e7eb", background: selected ? TEAL : "white", color: selected ? "white" : "#374151" }}>
      {label}
    </button>
  );
}

function Field({ label, value, onChange, type = "text", placeholder = "" }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 outline-none transition-colors"
        onFocus={e => (e.target.style.borderColor = TEAL)}
        onBlur={e => (e.target.style.borderColor = "#e5e7eb")} />
    </div>
  );
}

function Btn({ label, onClick, disabled = false }: { label: string; onClick: () => void; disabled?: boolean }) {
  return (
    <button onClick={onClick} disabled={disabled} className="w-full py-4 rounded-2xl text-white font-semibold text-base transition-opacity"
      style={{ background: disabled ? "#9ca3af" : TEAL }}>
      {label}
    </button>
  );
}

function Back({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-1 text-sm font-medium mb-4" style={{ color: TEAL }}>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
  );
}

// ─── iPhone shell ─────────────────────────────────────────────────────────────

function IPhone({ children, screen }: { children: React.ReactNode; screen: Screen }) {
  const step = typeof screen === "number" ? screen : -1;
  const progress = step > 0 && step <= 10 ? (step / 10) * 100 : 0;
  return (
    <div className="relative mx-auto" style={{ width: 390 }}>
      <div className="absolute rounded-l-sm" style={{ left: -12, top: 100, width: 4, height: 32, background: "#2a2a2a" }} />
      <div className="absolute rounded-l-sm" style={{ left: -12, top: 148, width: 4, height: 52, background: "#2a2a2a" }} />
      <div className="absolute rounded-l-sm" style={{ left: -12, top: 212, width: 4, height: 52, background: "#2a2a2a" }} />
      <div className="absolute rounded-r-sm" style={{ right: -12, top: 165, width: 4, height: 72, background: "#2a2a2a" }} />
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
          {/* Progress bar */}
          {step > 0 && (
            <div className="flex-shrink-0" style={{ height: 4, background: "#f3f4f6" }}>
              <div className="h-full transition-all duration-500" style={{ width: `${progress}%`, background: TEAL }} />
            </div>
          )}
          <div className="flex-1 overflow-y-auto">{children}</div>
          <div className="flex-shrink-0 flex justify-center" style={{ paddingTop: 8, paddingBottom: 12 }}>
            <div className="rounded-full" style={{ width: 130, height: 5, background: "rgba(0,0,0,0.18)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

const FOOD_OPTIONS = ["None", "Peanuts/tree nuts", "Shellfish", "Gluten/wheat", "Dairy", "Eggs", "Soy", "Vegetarian", "Vegan", "Halal", "Kosher", "Other"];

export default function VolunteerOnboarding() {
  const [screen, setScreen] = useState<Screen>(0);
  const [data, setData] = useState<FormData>(EMPTY);
  const [showWarning, setShowWarning] = useState(false);

  const set = useCallback(<K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData(p => ({ ...p, [k]: v })), []);

  const next = useCallback(() =>
    setScreen(p => typeof p === "number" ? p + 1 : p), []);

  const back = useCallback(() =>
    setScreen(p => typeof p === "number" && p > 0 ? p - 1 : p), []);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const consentRef = useRef<HTMLDivElement>(null);

  const startDraw = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    drawing.current = true;
    const r = canvasRef.current!.getBoundingClientRect();
    last.current = { x: e.clientX - r.left, y: e.clientY - r.top };
  }, []);

  const onDraw = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d")!;
    const r = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    ctx.beginPath(); ctx.strokeStyle = "#1a1a1a"; ctx.lineWidth = 2.5; ctx.lineCap = "round";
    ctx.moveTo(last.current!.x, last.current!.y); ctx.lineTo(x, y); ctx.stroke();
    last.current = { x, y };
  }, []);

  const endDraw = useCallback(() => {
    drawing.current = false;
    if (canvasRef.current) set("signature", canvasRef.current.toDataURL());
  }, [set]);

  const clearSig = useCallback(() => {
    if (!canvasRef.current) return;
    canvasRef.current.getContext("2d")!.clearRect(0, 0, 338, 80);
    set("signature", "");
  }, [set]);

  const onConsentScroll = useCallback(() => {
    const el = consentRef.current;
    if (el && el.scrollTop + el.clientHeight >= el.scrollHeight - 20) set("consentScrolled", true);
  }, [set]);

  const toggleFood = useCallback((a: string) => {
    const curr = data.foodAllergies;
    if (a === "None") { set("foodAllergies", curr.includes("None") ? [] : ["None"]); return; }
    const without = curr.filter(x => x !== "None");
    set("foodAllergies", without.includes(a) ? without.filter(x => x !== a) : [...without, a]);
  }, [data.foodAllergies, set]);

  function renderScreen() {
    switch (screen) {

      case 0: return (
        <div className="flex flex-col h-full px-6 pt-8 pb-4">
          <div className="flex-1">
            <div className="flex justify-center mb-6">
              <img src="/ctm-logo.png" alt="CaretakerMatch" className="w-20 h-20 object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-3" style={{ fontFamily: "Georgia, serif" }}>Become a Companion</h1>
            <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
              As a volunteer, you'd be paired with a patient recovering from joint replacement surgery — someone just like you, who needs a friend to help them get back on their feet.
            </p>
            <div className="rounded-2xl p-4 mb-4" style={{ background: "#f0fdf9" }}>
              <p className="text-sm text-center font-medium" style={{ color: TEAL }}>⏱ About 12 minutes to register. Your answers are private and protected under HIPAA.</p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "#eff6ff" }}>
              <p className="text-xs text-center text-blue-700">After registration, you'll complete a brief training and background check before being matched.</p>
            </div>
          </div>
          <div className="mt-6">
            <Btn label="Get started" onClick={next} />
          </div>
        </div>
      );

      case 1: return (
        <div className="flex flex-col h-full" style={{ background: "#faf8f4" }}>
          {/* Safety-first app header */}
          <div className="px-5 pt-3 pb-2.5 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <img src="/ctm-logo.png" alt="CaretakerMatch" className="w-7 h-7 object-contain" />
              <div>
                <p className="text-[13px] font-bold leading-tight" style={{ color: "#1a2e28" }}>Caretaker Match</p>
                <p className="text-[9px] text-gray-400 leading-tight">Safe care. Trusted connections.</p>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-semibold border" style={{ background: "#e8f5f0", color: TEAL, borderColor: "#c8e8e0" }}>
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Your safety comes first
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pb-2">
            <div className="flex items-start gap-2 mb-1">
              <h2 className="text-2xl font-bold leading-tight flex-1" style={{ color: "#1a2e28", fontFamily: "Georgia, serif" }}>
                Let&apos;s get to know you
              </h2>
              <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="17" fill="#e8f5f0" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} stroke={TEAL}
                  d="M18 8 L22 14 L29 15.5 L24 21 L25.5 28 L18 24.5 L10.5 28 L12 21 L7 15.5 L14 14 Z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke={TEAL}
                  d="M13.5 18.5 L16.5 21.5 L22.5 15.5" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">This helps us find safe, verified patients who are the right match for you.</p>

            {/* Security banner */}
            <div className="rounded-xl p-3 mb-4 flex items-start gap-2.5" style={{ background: "#edf7f3" }}>
              <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <p className="text-sm font-semibold leading-tight" style={{ color: TEAL }}>We protect your information</p>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">Your information is encrypted and never shared without your permission.</p>
              </div>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-3">
              <Field label="First name" value={data.firstName} onChange={v => set("firstName", v)} placeholder="Jane" />
              <Field label="Last name" value={data.lastName} onChange={v => set("lastName", v)} placeholder="Smith" />
              <div>
                <Field label="Phone number" type="tel" value={data.phone} onChange={v => set("phone", v)} placeholder="(555) 000-0000" />
                <div className="flex items-center gap-1 mt-1.5">
                  <svg className="w-3 h-3" style={{ color: "#9ca3af" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-[11px] text-gray-400">We&apos;ll never share your number.</p>
                </div>
              </div>
              <div>
                <Field label="Email address" type="email" value={data.email} onChange={v => set("email", v)} placeholder="jane@email.com" />
                <div className="flex items-center gap-1 mt-1.5">
                  <svg className="w-3 h-3" style={{ color: "#9ca3af" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-[11px] text-gray-400">Used only to keep you updated.</p>
                </div>
              </div>
            </div>

            {/* Safety commitment */}
            <div className="mt-4 rounded-xl p-4 flex items-start gap-3" style={{ background: "#edf7f3" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: TEAL }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight" style={{ color: TEAL }}>Safety is at the heart of everything we do</p>
                <div className="mt-2 flex flex-col gap-1.5">
                  {["Volunteers are background checked", "We use bank-level encryption", "You control your information"].map(item => (
                    <div key={item} className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 pb-3 flex-shrink-0">
            <button
              onClick={next}
              disabled={!data.firstName || !data.lastName || !data.phone || !data.email}
              className="w-full py-4 rounded-2xl text-white font-semibold text-base flex items-center justify-center gap-2 transition-opacity"
              style={{ background: !data.firstName || !data.lastName || !data.phone || !data.email ? "#9ca3af" : TEAL }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Continue securely →
            </button>
            <p className="text-[11px] text-center text-gray-400 mt-2">Secure · Private · Trusted</p>
          </div>
        </div>
      );

      case 2: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">Your Surgery Experience</h2>
          <p className="text-sm text-gray-500 mb-4">Volunteers who've been through joint replacement surgery often make the best matches.</p>
          <div className="flex-1 overflow-y-auto flex flex-col gap-5">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Have you had joint replacement surgery?</p>
              <div className="flex flex-col gap-2">
                {[{ v: "yes", l: "Yes, I've had joint replacement surgery" }, { v: "no", l: "No, I haven't had this surgery myself" }].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.hadSurgery === o.v} onClick={() => set("hadSurgery", o.v)} />
                ))}
              </div>
            </div>

            {data.hadSurgery === "yes" && (
              <>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Which joint?</p>
                  <div className="flex flex-col gap-2">
                    {[{ v: "hip", l: "Hip" }, { v: "knee", l: "Knee" }, { v: "shoulder", l: "Shoulder" }, { v: "other", l: "Other joint" }].map(o => (
                      <Opt key={o.v} label={o.l} selected={data.surgeryJoint === o.v} onClick={() => set("surgeryJoint", o.v)} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">When was your most recent surgery?</p>
                  <div className="flex flex-col gap-2">
                    {["Within the last year", "1–3 years ago", "3–5 years ago", "More than 5 years ago"].map(o => (
                      <Opt key={o} label={o} selected={data.surgeryRecency === o} onClick={() => set("surgeryRecency", o)} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">How would you describe your recovery?</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { v: "smooth", l: "Smooth — I was up and moving quickly" },
                      { v: "average", l: "Average — took time but went as expected" },
                      { v: "difficult", l: "Difficult — had complications or a harder time" },
                    ].map(o => (
                      <Opt key={o.v} label={o.l} selected={data.recoveryQuality === o.v} onClick={() => set("recoveryQuality", o.v)} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Did you have someone helping you at home?</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { v: "family", l: "Yes, family or friends" },
                      { v: "professional", l: "Yes, a professional caregiver" },
                      { v: "alone", l: "No, I recovered largely on my own" },
                      { v: "facility", l: "I stayed at a rehabilitation facility first" },
                    ].map(o => (
                      <Opt key={o.v} label={o.l} selected={data.hadHelpAtHome === o.v} onClick={() => set("hadHelpAtHome", o.v)} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mt-4">
            <Btn label="Continue" onClick={next}
              disabled={!data.hadSurgery || (data.hadSurgery === "yes" && (!data.surgeryJoint || !data.surgeryRecency || !data.recoveryQuality || !data.hadHelpAtHome))} />
          </div>
        </div>
      );

      case 3: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">Your Physical Readiness</h2>
          <p className="text-sm text-gray-500 mb-4">We want to make sure volunteering is a good fit for where you are physically.</p>
          <div className="flex-1 overflow-y-auto flex flex-col gap-5">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">On a good day, about how far can you walk without stopping?</p>
              <div className="flex flex-col gap-2">
                {[{ v: ">2blocks", l: "More than 2 blocks" }, { v: "1-2blocks", l: "1 to 2 blocks" }, { v: "<1block", l: "Less than 1 block" }].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.walkingDistance === o.v} onClick={() => set("walkingDistance", o.v)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Do you use anything to help you walk?</p>
              <div className="flex flex-col gap-2">
                {[{ v: "none", l: "No" }, { v: "cane", l: "A cane or walking stick" }, { v: "walker", l: "A walker" }].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.assistiveDevice === o.v} onClick={() => set("assistiveDevice", o.v)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Which age range best describes you?</p>
              <div className="flex flex-col gap-2">
                {[{ v: "under65", l: "Under 65" }, { v: "65-75", l: "65 to 75" }, { v: "over75", l: "Over 75" }].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.ageRange === o.v} onClick={() => set("ageRange", o.v)} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Btn label="Continue" onClick={next} disabled={!data.walkingDistance || !data.assistiveDevice || !data.ageRange} />
          </div>
        </div>
      );

      case 4: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">Your Availability</h2>
          <p className="text-sm text-gray-500 mb-4">Patients need the most support in the first 3 days, then regular check-ins for about a month.</p>
          <div className="flex-1 flex flex-col gap-5">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Are you able to bring the patient home from surgery, stay with them for the first 3 days, and then check in on them as they recover?</p>
              <div className="flex flex-col gap-2">
                {[{ v: "yes", l: "Yes, I can do that" }, { v: "no", l: "No, I'm not able to commit to that" }].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.commitment === o.v} onClick={() => set("commitment", o.v)} />
                ))}
              </div>
              {data.commitment === "no" && (
                <div className="mt-3 p-3 rounded-xl" style={{ background: "#fef3c7" }}>
                  <p className="text-xs text-amber-800">Full commitment is required to serve as a primary companion. Tapping Continue will let you know more.</p>
                </div>
              )}
            </div>
            {data.commitment === "yes" && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">How far are you willing to travel to support a patient?</p>
                <div className="flex flex-col gap-2">
                  {["Up to 15 minutes", "Up to 30 minutes", "Up to 45 minutes", "Up to 1 hour"].map(o => (
                    <Opt key={o} label={o} selected={data.driveRadius === o} onClick={() => set("driveRadius", o)} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="mt-4">
            <Btn label="Continue"
              onClick={() => data.commitment === "no" ? setScreen("exit-no-commitment") : next()}
              disabled={!data.commitment || (data.commitment === "yes" && !data.driveRadius)} />
          </div>
        </div>
      );

      case 5: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">About You as a Helper</h2>
          <p className="text-sm text-gray-500 mb-4">This helps us find a great match for you and your patient.</p>
          <div className="flex-1 overflow-y-auto flex flex-col gap-5">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Do you smoke or use any substances?</p>
              <div className="flex flex-col gap-2">
                {[
                  { v: "no", l: "No" },
                  { v: "tobacco", l: "Yes, tobacco" },
                  { v: "recreational", l: "Yes, recreational drugs" },
                  { v: "both", l: "Yes, both tobacco and recreational drugs" },
                ].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.smokingDrugs === o.v} onClick={() => set("smokingDrugs", o.v)} />
                ))}
              </div>
              {(data.smokingDrugs === "recreational" || data.smokingDrugs === "both") && (
                <div className="mt-3 p-3 rounded-xl" style={{ background: "#fef2f2" }}>
                  <p className="text-xs text-red-800">Recreational drug use is a disqualifying factor for the CareTaker Match volunteer program. Continuing will let you know more.</p>
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Any food allergies or dietary restrictions? <span className="text-gray-400 font-normal">Select all that apply.</span></p>
              <div className="flex flex-wrap gap-2">
                {FOOD_OPTIONS.map(a => (
                  <button key={a} onClick={() => toggleFood(a)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border-2 transition-all"
                    style={{ borderColor: data.foodAllergies.includes(a) ? TEAL : "#e5e7eb", background: data.foodAllergies.includes(a) ? TEAL : "white", color: data.foodAllergies.includes(a) ? "white" : "#374151" }}>
                    {a}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Do you have any pet allergies?</p>
              <div className="flex flex-col gap-2">
                {["No allergies", "Allergic to cats", "Allergic to dogs", "Allergic to both", "Other"].map(o => (
                  <Opt key={o} label={o} selected={data.petAllergies === o} onClick={() => set("petAllergies", o)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Do you have any pets at home?</p>
              <div className="flex flex-col gap-2">
                {["No pets", "Yes — dog(s)", "Yes — cat(s)", "Yes — both", "Yes — other"].map(o => (
                  <Opt key={o} label={o} selected={data.petsAtHome === o} onClick={() => set("petsAtHome", o)} />
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-2xl p-4 mb-2" style={{ background: "#f0fdf9" }}>
                <p className="text-sm text-gray-700 leading-relaxed">As a companion, you may be asked to help with light cooking or picking up groceries. Are you comfortable with that?</p>
              </div>
              <div className="flex flex-col gap-2">
                {[{ v: "yes", l: "Yes, happy to help" }, { v: "no", l: "No, I'd prefer not to" }].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.cookingComfort === o.v} onClick={() => set("cookingComfort", o.v)} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Btn label="Continue"
              onClick={() => (data.smokingDrugs === "recreational" || data.smokingDrugs === "both") ? setScreen("exit-drugs") : next()}
              disabled={!data.smokingDrugs || !data.petAllergies || !data.petsAtHome || !data.cookingComfort} />
          </div>
        </div>
      );

      case 6: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">Your Home & Capabilities</h2>
          <p className="text-sm text-gray-500 mb-4">A few questions about getting around.</p>
          <div className="flex-1 overflow-y-auto flex flex-col gap-5">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Do you have access to a vehicle?</p>
              <div className="flex flex-col gap-2">
                {[{ v: "own", l: "Yes, I have my own vehicle" }, { v: "borrow", l: "Sometimes — I can borrow one" }, { v: "none", l: "No vehicle" }].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.vehicle === o.v} onClick={() => set("vehicle", o.v)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Can you navigate stairs at a patient's home?</p>
              <div className="flex flex-col gap-2">
                {[{ v: "yes", l: "Yes, no problem" }, { v: "slowly", l: "Yes, slowly" }, { v: "no", l: "No, I cannot manage stairs" }].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.stairs === o.v} onClick={() => set("stairs", o.v)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Are you comfortable helping with basic physical tasks — steadying someone while walking, helping in/out of a chair, carrying groceries?</p>
              <div className="flex flex-col gap-2">
                {[{ v: "yes", l: "Yes, comfortable" }, { v: "somewhat", l: "Somewhat — I'd need some guidance" }, { v: "no", l: "No, I'd prefer not to" }].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.physicalTasks === o.v} onClick={() => set("physicalTasks", o.v)} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Btn label="Continue" onClick={next} disabled={!data.vehicle || !data.stairs || !data.physicalTasks} />
          </div>
        </div>
      );

      case 7: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">Your Interest</h2>
          <p className="text-sm text-gray-500 mb-4">Help us understand the role that works best for you.</p>
          <div className="flex-1 flex flex-col gap-2">
            {[
              { v: "primary", l: "Primary companion — fully present for the first 3 days, available for a month" },
              { v: "followup", l: "Follow-up visits — check-ins, rides, and errands during the recovery month" },
              { v: "either", l: "Open to either — put me where I'm most needed" },
            ].map(o => (
              <Opt key={o.v} label={o.l} selected={data.rolePreference === o.v} onClick={() => set("rolePreference", o.v)} />
            ))}
          </div>
          <div className="mt-4">
            <Btn label="Continue" onClick={next} disabled={!data.rolePreference} />
          </div>
        </div>
      );

      case 8: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">Before You Sign</h2>
          <p className="text-sm text-gray-500 mb-4">Here's what you're agreeing to:</p>
          <div className="flex-1 flex flex-col gap-3">
            {[
              { icon: "🔍", title: "Background checks", body: "We run background checks on both patients and volunteers to keep everyone safe." },
              { icon: "💬", title: "Monitored communications", body: "All conversations through CareTaker Match are monitored by our team for your safety." },
              { icon: "🔒", title: "Your data is never sold", body: "We will never sell your personal information to anyone, ever." },
              { icon: "📊", title: "Anonymous research", body: "De-identified data may be used to improve the program through HIPAA-compliant studies. You can opt out at any time." },
              { icon: "🛡️", title: "Safety commitment", body: "We thoroughly vet both patients and volunteers. CareTaker Match is not a medical service and cannot be held liable for outcomes." },
            ].map(item => (
              <div key={item.title} className="flex gap-3 p-3 rounded-xl bg-gray-50">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-gray-400 text-center mt-1">The full volunteer agreement is on the next screen. Please read it before signing.</p>
          </div>
          <div className="mt-4">
            <Btn label="Continue to Agreement" onClick={next} />
          </div>
        </div>
      );

      case 9: return (
        <div className="px-6 pt-5 pb-4 flex flex-col h-full relative">
          {showWarning && (
            <div className="absolute inset-0 z-10 flex items-end" style={{ background: "rgba(0,0,0,0.5)", borderRadius: 42 }}>
              <div className="w-full bg-white rounded-t-3xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Signature required</h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  To participate in CareTaker Match you must sign the volunteer agreement. Without your signature, we're unable to register you as a companion.
                </p>
                <button onClick={() => setShowWarning(false)} className="w-full py-3.5 rounded-2xl text-white font-semibold mb-3" style={{ background: TEAL }}>
                  Go back and sign
                </button>
                <button onClick={() => { setShowWarning(false); setScreen(0); setData(EMPTY); }}
                  className="w-full py-3.5 rounded-2xl font-semibold text-gray-600 bg-gray-100">
                  Exit registration
                </button>
              </div>
            </div>
          )}
          <div className="flex justify-between items-center mb-3">
            <Back onClick={back} />
            <span className="text-[10px] font-semibold px-2 py-1 rounded-full" style={{ background: "#fef3c7", color: "#92400e" }}>DRAFT — for legal review</span>
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Volunteer Agreement</h2>
          <div ref={consentRef} onScroll={onConsentScroll}
            className="flex-1 overflow-y-auto rounded-xl border-2 border-gray-200 p-4 text-xs text-gray-600 leading-relaxed mb-3" style={{ minHeight: 0 }}>
            <p className="font-bold text-sm text-gray-900 mb-3">CareTaker Match Volunteer Agreement</p>
            {[
              ["1. Volunteer Role", "I understand I am a volunteer, not a medical professional. My role is that of a supportive friend — transportation, companionship, and basic assistance. I will not provide medical care or advice."],
              ["2. Conduct Standards", "I will not enter a patient's home without explicit invitation. I will treat all patient information as strictly confidential. I will complete required training and background check before being matched."],
              ["3. Background Check Authorization", "I authorize CareTaker Match to conduct a background check through a third-party vendor. This check may include criminal history and identity verification. Results will be retained per the CareTaker Match pilot data policy."],
              ["4. HIPAA Compliance", "I understand that patient health information is protected under HIPAA. I will not disclose any patient information to anyone outside the CareTaker Match program."],
              ["5. Communication Monitoring", "All communications conducted through the CareTaker Match platform may be monitored by CareTaker Match staff for the safety of all participants."],
              ["6. Data Use and Privacy", "My personal data will be used only for matching and program administration. CareTaker Match will not sell my data to any third party. De-identified data may be used for HIPAA-compliant research with my permission."],
              ["7. Withdrawal", "I may withdraw from the program at any time by contacting CareTaker Match. I understand that withdrawing mid-engagement may affect the patient's care plan, and I agree to provide adequate notice where possible."],
              ["8. Liability", "CareTaker Match is not a medical service. I participate voluntarily and at my own risk. CareTaker Match is not liable for any injury, loss, or damages arising from my participation as a volunteer."],
            ].map(([title, body]) => (
              <div key={title} className="mb-3">
                <p className="font-semibold text-gray-800 mb-1">{title}</p>
                <p>{body}</p>
              </div>
            ))}
            <p className="text-gray-400 text-center mt-4">— End of agreement —</p>
          </div>
          {!data.consentScrolled && (
            <p className="text-xs text-center text-gray-400 mb-2">↑ Scroll through the agreement to enable signing</p>
          )}
          {data.consentScrolled && (
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs font-semibold text-gray-700">Sign below</p>
                <button onClick={clearSig} className="text-xs" style={{ color: TEAL }}>Clear</button>
              </div>
              <canvas ref={canvasRef} width={338} height={72}
                className="w-full rounded-xl border-2 border-dashed border-gray-300 cursor-crosshair"
                style={{ touchAction: "none" }}
                onMouseDown={startDraw} onMouseMove={onDraw} onMouseUp={endDraw} onMouseLeave={endDraw} />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Btn label="I agree and sign" onClick={() => { set("consentTimestamp", new Date().toISOString()); next(); }}
              disabled={!data.consentScrolled || !data.signature} />
            <button onClick={() => setShowWarning(true)} className="text-sm text-gray-400 text-center py-2">
              I don't want to sign
            </button>
          </div>
        </div>
      );

      case 10: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-bold text-gray-900">Your Address</h2>
            <svg className="w-5 h-5 flex-shrink-0" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-sm text-gray-500 mb-4">Now that you've signed, we need your address for two things:</p>
          <div className="flex flex-col gap-3 mb-5">
            <div className="flex gap-3 p-3 rounded-xl" style={{ background: "#f0fdf9" }}>
              <span className="text-lg flex-shrink-0">🔍</span>
              <div>
                <p className="text-sm font-semibold text-gray-900">Background check</p>
                <p className="text-xs text-gray-500 mt-0.5">Required to verify your identity and keep everyone safe.</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-xl" style={{ background: "#f0fdf9" }}>
              <span className="text-lg flex-shrink-0">📍</span>
              <div>
                <p className="text-sm font-semibold text-gray-900">Proximity matching</p>
                <p className="text-xs text-gray-500 mt-0.5">We match you with patients who live within your travel range.</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Field label="Home address" value={data.homeAddress} onChange={v => set("homeAddress", v)} placeholder="123 Main St, Denver, CO 80202" />
            <div className="flex items-center gap-1 mt-2">
              <svg className="w-3 h-3" style={{ color: "#9ca3af" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="text-[11px] text-gray-400">Your exact address is never shared with patients.</p>
            </div>
          </div>
          <div className="mt-4">
            <Btn label="Complete Registration →" onClick={next} disabled={!data.homeAddress} />
          </div>
        </div>
      );

      case 11: return (
        <div className="flex flex-col h-full" style={{ background: "#f8fafc" }}>
          <div className="px-6 pt-6 pb-5 flex flex-col items-center" style={{ background: TEAL }}>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-xl">You're Registered!</h2>
            <p className="text-white/80 text-sm mt-1">Welcome to CareTaker Match{data.firstName ? `, ${data.firstName}` : ""}.</p>
          </div>
          <div className="px-5 pt-4 flex flex-col gap-3 flex-1">
            {[
              { icon: "🔍", label: "Background check", status: "In progress", sub: "Check your email for instructions — usually 3–5 business days", bg: "#fef3c7", tc: "#92400e" },
              { icon: "📚", label: "Training", status: "0 of 7 modules", sub: "Self-paced, about 45–60 minutes across multiple sessions", bg: "#eff6ff", tc: "#1e40af", action: true },
              { icon: "🤝", label: "Your first match", status: "Pending", sub: "We'll find a great fit once your background check clears and training is complete", bg: "#f0fdf4", tc: "#166534" },
              { icon: "☕", label: "Coffee meet", status: "Coming soon", sub: "A brief get-to-know-you before the patient's surgery — low-key, no commitment", bg: "#f5f3ff", tc: "#5b21b6" },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: item.bg, color: item.tc }}>{item.status}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.sub}</p>
                  {"action" in item && item.action && (
                    <button className="mt-2 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: TEAL, color: "white" }}>
                      Start training
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 pb-1">
            <div className="flex justify-around pt-3 border-t border-gray-100">
              {[{ icon: "🏠", label: "Home", active: true }, { icon: "💬", label: "Messages", active: false }, { icon: "👤", label: "Profile", active: false }].map(t => (
                <div key={t.label} className="flex flex-col items-center gap-0.5">
                  <span className="text-xl">{t.icon}</span>
                  <span className="text-[10px] font-medium" style={{ color: t.active ? TEAL : "#9ca3af" }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

      case "exit-no-commitment": return (
        <div className="flex flex-col h-full px-6 pt-10 pb-4 items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "#f0fdf9" }}>
            <svg className="w-8 h-8" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Thanks for considering it!</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            CareTaker Match's primary companion role requires being available for the first 3 days after a patient's surgery. We understand that's not possible for everyone right now.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            If your schedule opens up in the future, we'd love to have you. You're always welcome to come back.
          </p>
          <Link href="/demo/commonspirit" className="w-full py-4 rounded-2xl text-white font-semibold text-base text-center block" style={{ background: TEAL }}>
            Exit
          </Link>
        </div>
      );

      case "exit-drugs": return (
        <div className="flex flex-col h-full px-6 pt-10 pb-4 items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "#fef2f2" }}>
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Thank you for your honesty</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            CareTaker Match requires that all volunteers be free from recreational drug use to ensure the safety of our patients.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            We appreciate you considering volunteering. Your information has not been shared with anyone.
          </p>
          <Link href="/demo/commonspirit" className="w-full py-4 rounded-2xl text-white font-semibold text-base text-center block" style={{ background: TEAL }}>
            Exit
          </Link>
        </div>
      );

      default: return null;
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4" style={{ background: "#f5f0e3" }}>
      <div className="mb-6 text-center">
        <Link href="/demo/commonspirit" className="text-xs font-medium hover:underline" style={{ color: "#1e3a2f" }}>← Back to demo</Link>
        <p className="text-xs text-gray-400 mt-1">Volunteer Registration — CareTaker Match Demo</p>
      </div>
      <IPhone screen={screen}>{renderScreen()}</IPhone>
      {typeof screen === "number" && screen > 0 && screen <= 10 && (
        <p className="mt-4 text-xs text-gray-400">Screen {screen} of 10</p>
      )}
    </div>
  );
}
