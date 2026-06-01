"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const CTM_GREEN = "#1e3a2f";
const CTM_GOLD = "#c4922a";

type DemoPhase = "idle" | "scanning" | "matched" | "confirmed" | "rematch-scanning" | "rematched";

interface MatchReason { icon: string; text: string; }
interface VolunteerMatch {
  id: number; name: string; age: number; location: string; distance: string;
  surgeryHistory: string; availability: string; matchScore: number;
  reasons: MatchReason[]; isTop?: boolean; photo: string;
}

const PATIENT = {
  name: "Jennifer W.", age: 67,
  surgery: "Total Knee Replacement", surgeryDate: "Jun 18, 2026",
  location: "Chicago, IL", ctmScore: 7,
  note: "Lives alone · Needs 3-day post-op support",
};

const FUNNEL_STEPS = [
  { count: 247, label: "volunteers in the CaretakerMatch network", delay: 300 },
  { count: 89,  label: "passed background & identity checks", delay: 900 },
  { count: 31,  label: "within 15 miles of Chicago, IL", delay: 1500 },
  { count: 12,  label: "with joint replacement experience", delay: 2100 },
  { count: 3,   label: "optimal matches identified", delay: 2700, highlight: true },
];

const TOP_MATCHES: VolunteerMatch[] = [
  {
    id: 1, name: "Susan M.", age: 71, location: "Oak Park, IL", distance: "8 miles",
    surgeryHistory: "Right Knee Replacement — 2 yrs ago", availability: "Mon – Fri",
    matchScore: 94, isTop: true, photo: "/profiles/susan.jpg",
    reasons: [
      { icon: "🦵", text: "Same joint: right knee" },
      { icon: "📍", text: "8 miles away" },
      { icon: "📅", text: "Available Jun 18 – 21" },
    ],
  },
  {
    id: 2, name: "Linda K.", age: 58, location: "Evanston, IL", distance: "6 miles",
    surgeryHistory: "Left Hip Replacement — 3 yrs ago", availability: "Flexible",
    matchScore: 87, photo: "/profiles/linda.jpg",
    reasons: [
      { icon: "🏥", text: "Former surgical nurse" },
      { icon: "📍", text: "6 miles away" },
      { icon: "⭐", text: "5-star rated volunteer" },
    ],
  },
  {
    id: 3, name: "Barbara R.", age: 63, location: "Berwyn, IL", distance: "10 miles",
    surgeryHistory: "Left Knee Replacement — 18 mo ago", availability: "Wkends + some weekdays",
    matchScore: 81, photo: "/profiles/barbara.jpg",
    reasons: [
      { icon: "🦵", text: "Similar joint: left knee" },
      { icon: "📍", text: "10 miles away" },
      { icon: "🏋️", text: "Physical therapist background" },
    ],
  },
];

const CAROL_P: VolunteerMatch = {
  id: 4, name: "Carol P.", age: 55, location: "Naperville, IL", distance: "12 miles",
  surgeryHistory: "Left Shoulder Replacement — 14 mo ago", availability: "Weekdays",
  matchScore: 79, photo: "/profiles/carol.jpg",
  reasons: [
    { icon: "💪", text: "Joint replacement experience" },
    { icon: "📍", text: "12 miles away" },
    { icon: "🩺", text: "Completed caretaker training" },
  ],
};

// Round 2: Susan removed, Linda promoted to Top, Carol fills 3rd slot
const REMATCH_POOL: VolunteerMatch[] = [
  { ...TOP_MATCHES[1], isTop: true, matchScore: 91 },   // Linda K. → promoted to Top Match
  { ...TOP_MATCHES[2], matchScore: 84 },                  // Barbara R. → bumped up
  CAROL_P,                                                 // Carol P. → new #3
];

const REMATCH_FUNNEL_STEPS = [
  { count: 246, label: "volunteers in the CaretakerMatch network", delay: 300 },
  { count: 88,  label: "passed background & identity checks", delay: 900 },
  { count: 30,  label: "within 15 miles of Chicago, IL", delay: 1500 },
  { count: 11,  label: "with joint replacement experience", delay: 2100 },
  { count: 3,   label: "optimal matches identified", delay: 2700, highlight: true },
];

function ScoreRing({ score }: { score: number }) {
  const size = 58;
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const fill = (score / 100) * circ;
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e5e1d8" strokeWidth={7} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={score >= 90 ? CTM_GREEN : score >= 85 ? CTM_GOLD : "#6b7280"}
          strokeWidth={7} strokeLinecap="round"
          strokeDasharray={`${fill} ${circ}`}
          style={{ transition: "stroke-dasharray 1.2s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-sans font-bold text-sm leading-none" style={{ color: CTM_GREEN }}>{score}%</span>
        <span className="font-sans text-[9px] text-gray-400 leading-none mt-0.5">match</span>
      </div>
    </div>
  );
}

function FunnelRow({ step, visible }: { step: typeof FUNNEL_STEPS[0]; visible: boolean }) {
  return (
    <div
      className="flex items-center gap-3 py-2.5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-12px)",
        transition: "all 0.4s ease",
      }}
    >
      <div
        className="font-sans font-bold text-base w-10 text-right flex-shrink-0"
        style={{ color: step.highlight ? CTM_GREEN : CTM_GOLD }}
      >
        {step.count}
      </div>
      <div className="w-24 flex-shrink-0">
        <div className="h-px" style={{ background: step.highlight ? CTM_GREEN : "#d4cfc5" }} />
      </div>
      <span
        className="font-sans text-xs"
        style={{ color: step.highlight ? CTM_GREEN : "#6b7280", fontWeight: step.highlight ? 700 : 400 }}
      >
        {step.highlight && "✓ "}{step.label}
      </span>
    </div>
  );
}

function MatchCard({ match, index, visible, onSelect, selected }: {
  match: VolunteerMatch; index: number; visible: boolean; onSelect: () => void; selected: boolean;
}) {
  return (
    <div
      className="rounded-xl p-4 border cursor-pointer transition-all"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.4s ease ${index * 180}ms, transform 0.4s ease ${index * 180}ms, box-shadow 0.15s ease, border-color 0.15s ease`,
        background: selected ? "#eef7f3" : "white",
        borderColor: selected ? CTM_GREEN : match.isTop ? "#c4e8d8" : "#e5e1d8",
        boxShadow: selected ? `0 0 0 2px ${CTM_GREEN}` : match.isTop ? "0 2px 8px rgba(30,58,47,0.10)" : "none",
      }}
      onClick={onSelect}
    >
      <div className="flex items-start gap-3">
        <img
          src={match.photo}
          alt={match.name}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2"
          style={{ borderColor: index === 0 ? CTM_GREEN : index === 1 ? CTM_GOLD : "#d1d5db" }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-sans font-semibold text-sm" style={{ color: "#1a1a1a" }}>{match.name}</span>
            <span className="font-sans text-xs text-gray-400">Age {match.age}</span>
            {match.isTop && (
              <span className="font-sans text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#d1fae5", color: "#065f46" }}>
                Top Match
              </span>
            )}
          </div>
          <p className="font-sans text-xs text-gray-500 mt-0.5">{match.surgeryHistory}</p>
          <p className="font-sans text-xs text-gray-400">{match.location} · {match.availability}</p>
        </div>
        <ScoreRing score={match.matchScore} />
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {match.reasons.map((r) => (
          <span
            key={r.text}
            className="font-sans text-[11px] px-2.5 py-1 rounded-full"
            style={{ background: "#f5f0e3", color: "#444" }}
          >
            {r.icon} {r.text}
          </span>
        ))}
      </div>
    </div>
  );
}

function IphoneNotification({ visible, onDismiss }: { visible: boolean; onDismiss: () => void }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        background: visible ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
        transition: "background 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
      onClick={onDismiss}
    >
      <div
        style={{
          transform: visible ? "scale(1) translateY(0)" : "scale(0.92) translateY(16px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative flex flex-col overflow-hidden shadow-2xl"
          style={{ width: 300, height: 620, borderRadius: 44, background: "#111", border: "8px solid #222" }}
        >
          <div className="flex-1 flex flex-col" style={{ background: "linear-gradient(160deg, #1a3028 0%, #0c1c15 100%)" }}>
            <div className="flex justify-between items-center px-6 pt-4 pb-1">
              <span className="font-sans text-white text-xs font-semibold">9:41</span>
              <div className="w-24 h-5 rounded-full" style={{ background: "#000" }} />
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" d="M1.5 8.5a13 13 0 0121 0M5 12a10 10 0 0114 0M8.5 15.5a6 6 0 017 0M12 19h.01" />
                </svg>
                <div className="flex items-end gap-0.5">
                  {[2, 3, 4, 5].map((h) => (
                    <div key={h} className="w-1 rounded-sm" style={{ height: h, background: "white" }} />
                  ))}
                </div>
              </div>
            </div>
            <div
              className="mx-3 mt-2 rounded-2xl p-3 shadow-xl"
              style={{
                background: "rgba(255,255,255,0.97)",
                transform: visible ? "translateY(0)" : "translateY(-14px)",
                opacity: visible ? 1 : 0,
                transition: "all 0.4s ease 0.2s",
              }}
            >
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: CTM_GREEN }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-sans text-xs font-bold text-gray-900">CaretakerMatch</p>
                    <p className="font-sans text-[10px] text-gray-400">now</p>
                  </div>
                  <p className="font-sans text-xs text-gray-700 mt-0.5 leading-snug">
                    Great news, Jennifer! We&apos;ve found your CaretakerMatch volunteer. Susan M. will be your caregiver for your knee surgery on Jun 18.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-sans text-white/20 text-[10px] tracking-widest uppercase text-center">Jennifer W.&apos;s iPhone</p>
              <p className="font-sans text-white/30 text-[9px] text-center">Susan M. also notified simultaneously</p>
            </div>
            <div className="flex justify-center pb-3">
              <div className="w-28 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            </div>
          </div>
        </div>
        <p className="font-sans text-center text-white/50 text-xs mt-4">Tap anywhere to dismiss</p>
      </div>
    </div>
  );
}

export default function VolunteerSelectionPage() {
  const [phase, setPhase] = useState<DemoPhase>("idle");
  const [funnelVisible, setFunnelVisible] = useState<boolean[]>(new Array(FUNNEL_STEPS.length).fill(false));
  const [cardsVisible, setCardsVisible] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [showNotif, setShowNotif] = useState(false);
  const [notifVisible, setNotifVisible] = useState(false);
  const [matchRound, setMatchRound] = useState<1 | 2>(1);

  // Which data set to display based on round
  const activeFunnel = matchRound === 1 ? FUNNEL_STEPS : REMATCH_FUNNEL_STEPS;
  const activeMatches = matchRound === 1 ? TOP_MATCHES : REMATCH_POOL;

  const runMatching = useCallback(() => {
    setPhase("scanning");
    setFunnelVisible(new Array(FUNNEL_STEPS.length).fill(false));
    setCardsVisible(false);
    setSelectedMatch(null);
    setMatchRound(1);

    FUNNEL_STEPS.forEach((step, i) => {
      setTimeout(() => {
        setFunnelVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, step.delay);
    });

    setTimeout(() => {
      setPhase("matched");
      setCardsVisible(true);
    }, 3400);
  }, []);

  const runRematch = useCallback(() => {
    setPhase("rematch-scanning");
    setMatchRound(2);
    setFunnelVisible(new Array(REMATCH_FUNNEL_STEPS.length).fill(false));
    setCardsVisible(false);
    setSelectedMatch(null);

    REMATCH_FUNNEL_STEPS.forEach((step, i) => {
      setTimeout(() => {
        setFunnelVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, step.delay);
    });

    setTimeout(() => {
      setPhase("rematched");
      setCardsVisible(true);
    }, 3400);
  }, []);

  const confirmMatch = useCallback(() => {
    setPhase("confirmed");
    setShowNotif(true);
    setTimeout(() => setNotifVisible(true), 50);
  }, []);

  const dismissNotif = useCallback(() => {
    setNotifVisible(false);
    setTimeout(() => setShowNotif(false), 400);
  }, []);

  // Auto-select top match when cards appear
  useEffect(() => {
    if (phase === "matched") {
      setTimeout(() => setSelectedMatch(1), 800);   // Susan (id=1)
    } else if (phase === "rematched") {
      setTimeout(() => setSelectedMatch(2), 800);    // Linda (id=2) is now top
    }
  }, [phase]);

  return (
    <div className="min-h-screen flex flex-col select-none" style={{ background: "#f5f0e3", fontFamily: "Georgia, serif" }}>

      {/* Top bar */}
      <div className="px-6 py-3 flex items-center justify-between" style={{ background: CTM_GREEN }}>
        <div className="flex items-center gap-3">
          <Link href="/demo/commonspirit" className="font-sans text-white/50 text-xs hover:text-white/80 transition-colors">← Demo</Link>
          <span className="text-white/20">|</span>
          <span className="font-sans text-white font-semibold text-sm">Personalized Match</span>
        </div>
        <div className="flex items-center gap-6">
          {[
            { label: "Awaiting Match", value: 4 },
            { label: "Matched Today", value: 12 },
            { label: "Active Pairs", value: 38 },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="font-sans text-white font-bold text-base leading-none">{value}</div>
              <div className="font-sans text-white/50 text-[10px] mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1">

        {/* Left sidebar */}
        <div className="w-72 flex-shrink-0 border-r flex flex-col" style={{ background: "#ede8db", borderColor: "#d4cfc5" }}>
          <div className="px-4 py-3 border-b" style={{ borderColor: "#d4cfc5" }}>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest" style={{ color: CTM_GREEN }}>Patient to Match</p>
          </div>

          <div className="p-4">
            <div className="rounded-xl p-4 border shadow-sm" style={{ background: "white", borderColor: "#c4e8d8" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-sm text-white flex-shrink-0" style={{ background: CTM_GREEN }}>
                  JW
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm" style={{ color: "#1a1a1a" }}>{PATIENT.name}</p>
                  <p className="font-sans text-xs text-gray-500">Age {PATIENT.age} · {PATIENT.location}</p>
                </div>
              </div>
              <div className="space-y-1.5 text-xs font-sans">
                <div className="flex justify-between">
                  <span className="text-gray-500">Procedure</span>
                  <span className="font-semibold text-gray-800 text-right">{PATIENT.surgery}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Surgery date</span>
                  <span className="font-semibold text-gray-800">{PATIENT.surgeryDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">CTM Score</span>
                  <span className="font-bold" style={{ color: CTM_GREEN }}>{PATIENT.ctmScore} / 9</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t text-[11px] font-sans text-gray-400 italic" style={{ borderColor: "#f0ece4" }}>
                {PATIENT.note}
              </div>
              <div className="mt-2">
                <span className="font-sans text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: "#d1fae5", color: "#065f46" }}>
                  ✓ Approved for program
                </span>
              </div>
            </div>
          </div>

          <div className="px-4 pb-4 flex-1">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#888" }}>Matching Criteria</p>
            <div className="space-y-1.5">
              {[
                "Joint type & procedure match",
                "Geographic proximity (< 15 mi)",
                "Schedule & availability",
                "Volunteer experience level",
                "Background check status",
              ].map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: CTM_GOLD }} />
                  <span className="font-sans text-xs text-gray-600">{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t" style={{ borderColor: "#d4cfc5" }}>
            {phase === "idle" && (
              <button
                onClick={runMatching}
                className="w-full py-2.5 rounded-lg font-sans font-semibold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: CTM_GREEN }}
              >
                Run Personalized Match →
              </button>
            )}
            {(phase === "scanning" || phase === "rematch-scanning") && (
              <div className="flex items-center justify-center gap-2 py-2.5">
                <span className="animate-spin w-4 h-4 border-2 rounded-full" style={{ borderColor: CTM_GREEN, borderTopColor: "transparent" }} />
                <span className="font-sans text-sm font-semibold" style={{ color: CTM_GREEN }}>
                  {phase === "rematch-scanning" ? "Re-matching…" : "Scanning…"}
                </span>
              </div>
            )}
            {(phase === "matched" || phase === "confirmed") && (
              <div className="flex flex-col gap-2">
                <button
                  onClick={runRematch}
                  className="w-full py-2.5 rounded-lg font-sans text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: CTM_GOLD }}
                >
                  ☕ Coffee Meet Unsuccessful — Re-match
                </button>
                <button
                  onClick={runMatching}
                  className="w-full py-2 rounded-lg font-sans text-xs text-gray-500 border border-gray-300 hover:border-gray-400 transition-colors bg-white"
                >
                  ↺ Reset demo
                </button>
              </div>
            )}
            {phase === "rematched" && (
              <div className="flex flex-col gap-2">
                <div className="rounded-lg p-2.5 text-center" style={{ background: "#FEF3C7" }}>
                  <p className="font-sans text-[10px] font-semibold" style={{ color: "#92400e" }}>Round 2 — Susan M. removed from pool</p>
                </div>
                <button
                  onClick={runMatching}
                  className="w-full py-2 rounded-lg font-sans text-xs text-gray-500 border border-gray-300 hover:border-gray-400 transition-colors bg-white"
                >
                  ↺ Reset demo
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main panel */}
        <div className="flex-1 overflow-y-auto">

          {phase === "idle" && (
            <div className="flex flex-col items-center justify-center h-full gap-4 p-12 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#e5e1d8" }}>
                <svg className="w-8 h-8" fill="none" stroke={CTM_GREEN} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold italic" style={{ color: "#1a1a1a" }}>Ready to find a match for Jennifer</p>
                <p className="font-sans text-sm text-gray-500 mt-1 max-w-sm">
                  Personalized Match will scan the full volunteer network and surface the top 3 candidates based on clinical compatibility, proximity, and availability.
                </p>
              </div>
            </div>
          )}

          {phase !== "idle" && (
            <div className="p-6 flex gap-6 h-full">

              {/* Left: Algorithmic processing */}
              <div className="flex-1 flex flex-col gap-6 min-w-0">
                {/* Round indicator for re-match */}
                {matchRound === 2 && (phase === "rematch-scanning" || phase === "rematched") && (
                  <div className="rounded-xl p-3 flex items-start gap-3" style={{ background: "#FEF3C7", border: "1px solid #F59E0B" }}>
                    <span className="text-lg flex-shrink-0">🔄</span>
                    <div>
                      <p className="font-sans text-xs font-semibold" style={{ color: "#92400e" }}>
                        Re-matching — Round 2
                      </p>
                      <p className="font-sans text-[11px] mt-0.5" style={{ color: "#a16207" }}>
                        Susan M. removed from pool after unsuccessful coffee meet. Recalculating top matches from remaining volunteers.
                      </p>
                    </div>
                  </div>
                )}

                {/* Funnel */}
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: CTM_GREEN }}>
                    Volunteer Network Scan
                  </p>
                  <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#e5e1d8" }}>
                    {activeFunnel.map((step, i) => (
                      <FunnelRow key={i} step={step} visible={funnelVisible[i]} />
                    ))}
                  </div>
                </div>

                {/* Match cards (desktop/Overseer view) */}
                {(phase === "matched" || phase === "confirmed" || phase === "rematched") && (
                  <div>
                    <div className="flex items-center justify-between mb-3 gap-3">
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest flex-shrink-0" style={{ color: CTM_GREEN }}>
                        Top 3 Matches {matchRound === 2 && "— Round 2"}
                      </p>
                      {selectedMatch !== null && phase === "matched" && (
                        <Link
                          href="/demo/onboarding/volunteer-notification"
                          className="font-sans text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-opacity hover:opacity-90 flex-shrink-0 block"
                          style={{ background: CTM_GREEN }}
                        >
                          Confirm Match →
                        </Link>
                      )}
                      {selectedMatch !== null && phase === "rematched" && (
                        <button
                          className="font-sans text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-opacity hover:opacity-90 flex-shrink-0"
                          style={{ background: CTM_GREEN }}
                          onClick={() => alert("In the full app, this would proceed to notify the new volunteer and schedule a coffee meet.")}
                        >
                          Confirm New Match →
                        </button>
                      )}
                      {phase === "confirmed" && (
                        <span className="font-sans text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: "#d1fae5", color: "#065f46" }}>
                          ✓ Confirmed
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-3">
                      {activeMatches.map((match, i) => (
                        <MatchCard
                          key={match.id}
                          match={match}
                          index={i}
                          visible={cardsVisible}
                          onSelect={() => (phase === "matched" || phase === "rematched") && setSelectedMatch(match.id)}
                          selected={selectedMatch === match.id}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right: iPhone showing patient's view */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "#888" }}>
                  Jennifer&apos;s iPhone
                </p>
                <div className="relative" style={{ width: 300 }}>
                  <div className="rounded-[40px] p-[8px]" style={{ background: "#1a1a1a", boxShadow: "0 0 0 1px #3a3a3a, 0 20px 60px rgba(0,0,0,0.4)" }}>
                    <div className="bg-white rounded-[34px] overflow-hidden flex flex-col" style={{ height: 620 }}>
                      {/* Status bar */}
                      <div className="relative flex items-center justify-between px-6 flex-shrink-0" style={{ paddingTop: 12, paddingBottom: 4 }}>
                        <span className="text-[11px] font-semibold">9:41</span>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black rounded-full" style={{ width: 90, height: 26 }} />
                        <div className="flex items-center gap-1">
                          <div className="flex items-end gap-0.5">
                            {[2, 3, 4, 5].map((h) => (
                              <div key={h} className="w-0.5 rounded-sm bg-black" style={{ height: h }} />
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* App header */}
                      <div className="px-4 pt-2 pb-3 flex-shrink-0">
                        <div className="flex items-center gap-2">
                          <img src="/ctm-logo.png" alt="CTM" className="w-6 h-6 object-contain" />
                          <p className="text-[11px] font-bold" style={{ color: CTM_GREEN }}>Your Matches</p>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1 overflow-y-auto px-3 pb-3">
                        {(phase === "scanning" || phase === "rematch-scanning") && (
                          <div className="flex flex-col items-center justify-center h-full gap-3">
                            <span className="animate-spin w-6 h-6 border-2 rounded-full" style={{ borderColor: CTM_GREEN, borderTopColor: "transparent" }} />
                            <p className="font-sans text-xs text-gray-500">
                              {phase === "rematch-scanning" ? "Finding new matches..." : "Finding your best matches..."}
                            </p>
                          </div>
                        )}
                        {(phase === "matched" || phase === "confirmed" || phase === "rematched") && (
                          <div className="flex flex-col gap-2.5">
                            {matchRound === 2 && (
                              <div className="rounded-lg p-2 mb-1" style={{ background: "#FEF3C7" }}>
                                <p className="font-sans text-[10px] font-semibold text-center" style={{ color: "#92400e" }}>
                                  🔄 Updated matches — Susan M. removed
                                </p>
                              </div>
                            )}
                            <p className="font-sans text-[10px] text-gray-400 px-1 mb-1">Based on your profile, location & schedule</p>
                            {activeMatches.map((match, i) => (
                              <div
                                key={match.id}
                                className="rounded-xl p-3 border"
                                style={{
                                  opacity: cardsVisible ? 1 : 0,
                                  transform: cardsVisible ? "translateY(0)" : "translateY(12px)",
                                  transition: `all 0.4s ease ${i * 200}ms`,
                                  borderColor: match.isTop ? "#c4e8d8" : "#e5e7eb",
                                  background: match.isTop ? "#f0fdf9" : "white",
                                }}
                              >
                                <div className="flex items-center gap-2.5">
                                  <img src={match.photo} alt={match.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5">
                                      <span className="font-sans font-semibold text-xs" style={{ color: "#1a1a1a" }}>{match.name}</span>
                                      {match.isTop && (
                                        <span className="font-sans text-[8px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "#d1fae5", color: "#065f46" }}>
                                          Best Match
                                        </span>
                                      )}
                                    </div>
                                    <p className="font-sans text-[10px] text-gray-500 mt-0.5">{match.surgeryHistory}</p>
                                    <p className="font-sans text-[10px] text-gray-400">{match.distance} away · {match.availability}</p>
                                  </div>
                                  <div className="text-center flex-shrink-0">
                                    <div className="font-sans font-bold text-sm" style={{ color: CTM_GREEN }}>{match.matchScore}%</div>
                                    <div className="font-sans text-[8px] text-gray-400">match</div>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {match.reasons.map((r) => (
                                    <span key={r.text} className="font-sans text-[9px] px-2 py-0.5 rounded-full" style={{ background: "#f5f0e3", color: "#555" }}>
                                      {r.icon} {r.text}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                            {phase === "confirmed" && (
                              <div className="rounded-xl p-3 mt-1" style={{ background: "#d1fae5" }}>
                                <p className="font-sans text-xs font-semibold text-center" style={{ color: "#065f46" }}>
                                  ✓ Susan M. confirmed as your companion!
                                </p>
                                <p className="font-sans text-[10px] text-center mt-1" style={{ color: "#047857" }}>
                                  You&apos;ll meet for coffee before your surgery.
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {/* Home indicator */}
                      <div className="flex-shrink-0 flex justify-center" style={{ paddingTop: 6, paddingBottom: 8 }}>
                        <div className="rounded-full" style={{ width: 100, height: 4, background: "rgba(0,0,0,0.18)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showNotif && <IphoneNotification visible={notifVisible} onDismiss={dismissNotif} />}
    </div>
  );
}
