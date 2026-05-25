"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

type Screen = number | "exit-home-support";

interface FormData {
  firstName: string; lastName: string; phone: string;
  procedureType: string; surgeryDate: string; surgeon: string;
  homeSupport: string;
  walkingDistance: string; assistiveDevice: string; ageRange: string; ctmScore: number;
  smoking: string; foodAllergies: string[]; dietaryNeeds: string; pets: string;
  housingType: string; entryStairs: string; interiorLayout: string; homeAddress: string;
  emergencyName: string; emergencyRelationship: string; emergencyPhone: string;
  reciprocity: string;
  consentScrolled: boolean; signature: string; consentTimestamp: string;
}

const TEAL = "#0B8A7E";
const EMPTY: FormData = {
  firstName: "", lastName: "", phone: "",
  procedureType: "", surgeryDate: "", surgeon: "",
  homeSupport: "",
  walkingDistance: "", assistiveDevice: "", ageRange: "", ctmScore: 0,
  smoking: "", foodAllergies: [], dietaryNeeds: "", pets: "",
  housingType: "", entryStairs: "", interiorLayout: "", homeAddress: "",
  emergencyName: "", emergencyRelationship: "", emergencyPhone: "",
  reciprocity: "",
  consentScrolled: false, signature: "", consentTimestamp: "",
};

function calcScore(d: Partial<FormData>): number {
  const walk = d.walkingDistance === ">2blocks" ? 2 : d.walkingDistance === "1-2blocks" ? 1 : 0;
  const assist = d.assistiveDevice === "none" ? 2 : d.assistiveDevice === "cane" ? 1 : 0;
  const age = d.ageRange === "under65" ? 2 : d.ageRange === "65-75" ? 1 : 0;
  const support = d.homeSupport === "alone" ? 3 : d.homeSupport === "family-works" ? 2 : 1;
  return walk + assist + age + support;
}

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
        style={{ "--tw-border-opacity": 1 } as React.CSSProperties}
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

function IPhone({ children, screen }: { children: React.ReactNode; screen: Screen }) {
  const step = typeof screen === "number" ? screen : -1;
  const progress = step > 0 && step <= 11 ? (step / 11) * 100 : 0;
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
          {/* Content */}
          <div className="flex-1 overflow-y-auto">{children}</div>
          {/* Home indicator */}
          <div className="flex-shrink-0 flex justify-center" style={{ paddingTop: 8, paddingBottom: 12 }}>
            <div className="rounded-full" style={{ width: 130, height: 5, background: "rgba(0,0,0,0.18)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

const SURGEONS = ["Dr. Sarah Chen", "Dr. Michael Torres", "Dr. James Okafor", "Dr. Emily Walsh", "Dr. Robert Kim"];
const ALLERGIES = ["Peanuts", "Tree nuts", "Shellfish", "Fish", "Dairy/lactose", "Gluten/wheat", "Eggs", "Soy", "None", "Other"];

export default function PatientOnboarding() {
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

  const toggleAllergy = useCallback((a: string) => {
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
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-3" style={{ fontFamily: "Georgia, serif" }}>CareTaker Match</h1>
            <p className="text-gray-600 text-center text-sm leading-relaxed mb-6">
              Your surgeon thought you might benefit from CareTaker Match — a program that connects people recovering from joint replacement surgery with a volunteer companion who has been through it themselves.
            </p>
            <div className="rounded-2xl p-4 mb-6" style={{ background: "#f0fdf9" }}>
              <p className="text-sm text-center font-medium" style={{ color: TEAL }}>⏱ About 8 minutes to get started. We'll keep you updated at every step.</p>
            </div>
          </div>
          <Btn label="Let's get started" onClick={next} />
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
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">This helps us find safe, verified companions who are right for you.</p>

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
                  {["Caregivers are background checked", "We use bank-level encryption", "You control your information"].map(item => (
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
              disabled={!data.firstName || !data.lastName || !data.phone}
              className="w-full py-4 rounded-2xl text-white font-semibold text-base flex items-center justify-center gap-2 transition-opacity"
              style={{ background: !data.firstName || !data.lastName || !data.phone ? "#9ca3af" : TEAL }}
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
          <h2 className="text-xl font-bold text-gray-900 mb-1">Your Surgery</h2>
          <p className="text-sm text-gray-500 mb-4">Tell us about your upcoming surgery.</p>
          <div className="flex-1 overflow-y-auto flex flex-col gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">What kind of surgery are you having?</p>
              <div className="flex flex-col gap-2">
                {["Knee replacement", "Hip replacement", "Shoulder replacement", "Other joint surgery"].map(o => (
                  <Opt key={o} label={o} selected={data.procedureType === o} onClick={() => set("procedureType", o)} />
                ))}
              </div>
            </div>
            <Field label="Surgery date" type="date" value={data.surgeryDate} onChange={v => set("surgeryDate", v)} />
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Your surgeon</label>
              <select value={data.surgeon} onChange={e => set("surgeon", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 bg-white outline-none">
                <option value="">Select your surgeon</option>
                {SURGEONS.map(s => <option key={s} value={s}>{s}</option>)}
                <option value="not-listed">My surgeon isn't listed</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <Btn label="Continue" onClick={next} disabled={!data.procedureType || !data.surgeryDate || !data.surgeon} />
          </div>
        </div>
      );

      case 3: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">Your Situation at Home</h2>
          <p className="text-sm text-gray-500 mb-4">There are no wrong answers.</p>
          <p className="text-sm font-medium text-gray-700 mb-3">After your surgery, who will typically be at home with you?</p>
          <div className="flex-1 flex flex-col gap-2">
            {[
              { v: "alone", l: "I live alone" },
              { v: "family-works", l: "Family or friends will be around, but they work during the day" },
              { v: "not-sure", l: "I'm not sure yet" },
              { v: "full-support", l: "Family or friends who can be with me most of the time" },
            ].map(o => (
              <Opt key={o.v} label={o.l} selected={data.homeSupport === o.v} onClick={() => set("homeSupport", o.v)} />
            ))}
          </div>
          <div className="mt-4">
            <Btn label="Continue" onClick={() => data.homeSupport === "full-support" ? setScreen("exit-home-support") : next()} disabled={!data.homeSupport} />
          </div>
        </div>
      );

      case 4: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">Physical Readiness</h2>
          <p className="text-sm text-gray-500 mb-4">Just a few quick questions about your mobility.</p>
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
                {[{ v: "none", l: "Nothing, I walk on my own" }, { v: "cane", l: "A cane or walking stick" }, { v: "walker", l: "A walker" }].map(o => (
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
            <Btn label="Continue" onClick={() => { set("ctmScore", calcScore(data)); next(); }}
              disabled={!data.walkingDistance || !data.assistiveDevice || !data.ageRange} />
          </div>
        </div>
      );

      case 5: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">Finding the Right Match</h2>
          <p className="text-sm text-gray-500 mb-4">Help us find the right companion for you.</p>
          <div className="flex-1 overflow-y-auto flex flex-col gap-5">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Do you smoke or use tobacco?</p>
              <div className="flex flex-col gap-2">
                {["No", "Yes, tobacco", "Yes, marijuana or other"].map(o => (
                  <Opt key={o} label={o} selected={data.smoking === o} onClick={() => set("smoking", o)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Food allergies? <span className="text-gray-400 font-normal">Select all that apply.</span></p>
              <div className="flex flex-wrap gap-2">
                {ALLERGIES.map(a => (
                  <button key={a} onClick={() => toggleAllergy(a)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border-2 transition-all"
                    style={{ borderColor: data.foodAllergies.includes(a) ? TEAL : "#e5e7eb", background: data.foodAllergies.includes(a) ? TEAL : "white", color: data.foodAllergies.includes(a) ? "white" : "#374151" }}>
                    {a}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Do you follow any particular diet?</p>
              <div className="flex flex-col gap-2">
                {["No restrictions", "Vegetarian", "Vegan", "Diabetic diet", "Kosher", "Halal", "Other"].map(o => (
                  <Opt key={o} label={o} selected={data.dietaryNeeds === o} onClick={() => set("dietaryNeeds", o)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Do you have any pets at home?</p>
              <div className="flex flex-col gap-2">
                {["No pets", "Dog(s)", "Cat(s)", "Both dogs and cats", "Other"].map(o => (
                  <Opt key={o} label={o} selected={data.pets === o} onClick={() => set("pets", o)} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Btn label="Continue" onClick={next} disabled={!data.smoking || !data.dietaryNeeds || !data.pets} />
          </div>
        </div>
      );

      case 6: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">Your Home</h2>
          <p className="text-sm text-gray-500 mb-4">Tell us a little about where you'll be recovering.</p>
          <div className="flex-1 overflow-y-auto flex flex-col gap-5">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">What type of home do you live in?</p>
              <div className="flex flex-col gap-2">
                {["House", "Apartment", "Condo", "Mobile home", "Other"].map(o => (
                  <Opt key={o} label={o} selected={data.housingType === o} onClick={() => set("housingType", o)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Are there stairs to get into your home?</p>
              <div className="flex flex-col gap-2">
                {[{ v: "none", l: "No, ground floor or elevator access" }, { v: "few", l: "Yes, a few steps (1–4)" }, { v: "full", l: "Yes, a full flight of stairs" }].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.entryStairs === o.v} onClick={() => set("entryStairs", o.v)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Is your bedroom on the main floor?</p>
              <div className="flex flex-col gap-2">
                {[{ v: "main", l: "Yes, I won't need to use stairs inside" }, { v: "stairs", l: "No, I'll need to navigate stairs inside" }].map(o => (
                  <Opt key={o.v} label={o.l} selected={data.interiorLayout === o.v} onClick={() => set("interiorLayout", o.v)} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Btn label="Continue" onClick={next} disabled={!data.housingType || !data.entryStairs || !data.interiorLayout} />
          </div>
        </div>
      );

      case 7: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">Emergency Contact</h2>
          <p className="text-sm text-gray-500 mb-5">Who should we contact in an emergency?</p>
          <div className="flex-1 flex flex-col gap-4">
            <Field label="Contact name" value={data.emergencyName} onChange={v => set("emergencyName", v)} placeholder="John Smith" />
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Relationship</label>
              <select value={data.emergencyRelationship} onChange={e => set("emergencyRelationship", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 bg-white outline-none">
                <option value="">Select relationship</option>
                {["Spouse / Partner", "Parent", "Child", "Sibling", "Friend", "Neighbor", "Other"].map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <Field label="Phone number" type="tel" value={data.emergencyPhone} onChange={v => set("emergencyPhone", v)} placeholder="(555) 000-0000" />
          </div>
          <Btn label="Continue" onClick={next} disabled={!data.emergencyName || !data.emergencyRelationship || !data.emergencyPhone} />
        </div>
      );

      case 8: return (
        <div className="px-6 pt-6 pb-4 flex flex-col h-full">
          <Back onClick={back} />
          <h2 className="text-xl font-bold text-gray-900 mb-4">Paying It Forward</h2>
          <div className="rounded-2xl p-4 mb-5" style={{ background: "#f0fdf9" }}>
            <p className="text-sm text-gray-700 leading-relaxed">Many of our best volunteers are former patients. After you recover, would you be open to helping someone else the same way?</p>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {["Yes, I'd love to give back", "Maybe, ask me again after I've recovered", "I don't think so — that's okay", "Tell me more about what that involves"].map(o => (
              <Opt key={o} label={o} selected={data.reciprocity === o} onClick={() => set("reciprocity", o)} />
            ))}
          </div>
          <div className="mt-4">
            <Btn label="Continue" onClick={next} disabled={!data.reciprocity} />
          </div>
        </div>
      );

      case 9: return (
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
            <p className="text-xs text-gray-400 text-center mt-1">The full agreement is on the next screen. Please read it before signing.</p>
          </div>
          <div className="mt-4">
            <Btn label="Continue to Agreement" onClick={next} />
          </div>
        </div>
      );

      case 10: return (
        <div className="px-6 pt-5 pb-4 flex flex-col h-full relative">
          {/* Consent warning modal */}
          {showWarning && (
            <div className="absolute inset-0 z-10 flex items-end" style={{ background: "rgba(0,0,0,0.5)", borderRadius: 42 }}>
              <div className="w-full bg-white rounded-t-3xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Signature required</h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  To participate in CareTaker Match you must sign the consent agreement. Without your signature, we're unable to enroll you in the program.
                </p>
                <button onClick={() => setShowWarning(false)} className="w-full py-3.5 rounded-2xl text-white font-semibold mb-3" style={{ background: TEAL }}>
                  Go back and sign
                </button>
                <button onClick={() => { setShowWarning(false); setScreen(0); setData(EMPTY); }}
                  className="w-full py-3.5 rounded-2xl font-semibold text-gray-600 bg-gray-100">
                  Exit program
                </button>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mb-3">
            <Back onClick={back} />
            <span className="text-[10px] font-semibold px-2 py-1 rounded-full" style={{ background: "#fef3c7", color: "#92400e" }}>DRAFT — for legal review</span>
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Your Agreement</h2>

          <div ref={consentRef} onScroll={onConsentScroll}
            className="flex-1 overflow-y-auto rounded-xl border-2 border-gray-200 p-4 text-xs text-gray-600 leading-relaxed mb-3" style={{ minHeight: 0 }}>
            <p className="font-bold text-sm text-gray-900 mb-3">CareTaker Match Patient Consent Agreement</p>
            {[
              ["1. Liability Release", "CareTaker Match connects you with a volunteer companion. This is not a medical service. CareTaker Match, its officers, employees, and agents are not liable for any injury, loss, or damages arising from your participation in the program. You agree to participate voluntarily and at your own risk."],
              ["2. HIPAA Compliance", "CareTaker Match operates as a covered entity / business associate under HIPAA. Your protected health information (PHI) will be used only as necessary to facilitate your match. PHI will not be shared with third parties except as required by law or with your explicit consent."],
              ["3. Background Check Authorization", "You authorize CareTaker Match to conduct a background check through a third-party vendor. This check may include criminal history and identity verification. Results will be retained per the CareTaker Match pilot data policy."],
              ["4. Communication Monitoring", "All communications conducted through the CareTaker Match platform may be monitored by CareTaker Match staff for the safety of all participants. Recordings are stored securely and accessible only to authorized staff."],
              ["5. Location Sharing", "Your location may be shared with your matched volunteer during active engagements only. Location data is used solely for safety purposes and is not sold or shared with third parties."],
              ["6. De-identified Research Data", "With your permission, de-identified data from your participation may be used for IRB-approved research studies. Your identity will never be disclosed. You may opt out at any time by contacting CareTaker Match."],
              ["7. Data Sale Prohibition", "CareTaker Match will not sell your personal data or protected health information to any third party for any purpose."],
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

      case 11: return (
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
                <p className="text-xs text-gray-500 mt-0.5">We match you with volunteers who live nearby.</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Field label="Home address" value={data.homeAddress} onChange={v => set("homeAddress", v)} placeholder="123 Main St, Denver, CO 80202" />
            <div className="flex items-center gap-1 mt-2">
              <svg className="w-3 h-3" style={{ color: "#9ca3af" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="text-[11px] text-gray-400">Your address is encrypted and never shared with volunteers.</p>
            </div>
          </div>
          <div className="mt-4">
            <Btn label="Complete Enrollment →" onClick={next} disabled={!data.homeAddress} />
          </div>
        </div>
      );

      case 12: return (
        <div className="flex flex-col h-full" style={{ background: "#f8fafc" }}>
          <div className="px-6 pt-6 pb-5 flex flex-col items-center" style={{ background: TEAL }}>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-xl">You're Enrolled!</h2>
            <p className="text-white/80 text-sm mt-1">Welcome to CareTaker Match{data.firstName ? `, ${data.firstName}` : ""}.</p>
          </div>
          <div className="px-5 pt-4 flex flex-col gap-3 flex-1">
            {[
              { icon: "🔍", label: "Background check", status: "In progress", sub: "Usually done within 48 hours", bg: "#fef3c7", tc: "#92400e" },
              { icon: "🤝", label: "Finding your match", status: "Pending", sub: "We'll look for the right volunteer companion", bg: "#eff6ff", tc: "#1e40af" },
              { icon: "☕", label: "Coffee meeting", status: "Coming soon", sub: "You'll meet your companion for coffee — low-key, no commitment", bg: "#f0fdf4", tc: "#166534" },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: item.bg, color: item.tc }}>{item.status}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
            {data.phone && (
              <div className="p-4 rounded-2xl bg-white shadow-sm">
                <p className="text-xs text-gray-500 text-center">We'll text you at <strong>{data.phone}</strong> to keep you updated.</p>
                <p className="text-xs text-gray-400 text-center mt-1">Questions? Contact your Care Coordinator.</p>
              </div>
            )}
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

      case "exit-home-support": return (
        <div className="flex flex-col h-full px-6 pt-10 pb-4 items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "#f0fdf9" }}>
            <svg className="w-8 h-8" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">You're in great hands!</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            We're glad you have support! It sounds like you have family and friends who can be there for you — that's exactly what you need for a great recovery.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            CareTaker Match is designed for patients who don't have that support at home, so you won't need us this time. Wishing you a smooth recovery.
          </p>
          <p className="text-xs text-gray-400 mb-8">Your information has not been shared with anyone.</p>
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
        <p className="text-xs text-gray-400 mt-1">Patient Enrollment — CareTaker Match Demo</p>
      </div>
      <IPhone screen={screen}>{renderScreen()}</IPhone>
      {typeof screen === "number" && screen > 0 && screen < 12 && (
        <p className="mt-4 text-xs text-gray-400">Screen {screen} of 11</p>
      )}
    </div>
  );
}
