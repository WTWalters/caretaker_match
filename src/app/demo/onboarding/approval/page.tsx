"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

const CTM_GREEN = "#1e3a2f";
const CTM_GOLD = "#c4922a";

type QueueTab = "patients" | "volunteers";
type DemoPhase = "idle" | "checking" | "passed" | "sent";
type CheckState = "waiting" | "running" | "done";
type RecordStatus = "pending" | "approved" | "failed";

interface Check { label: string; result: string; state: CheckState; }

interface Patient {
  id: number; name: string; procedure: string; surgeryDate: string;
  submitted: string; status: RecordStatus; ctmScore: number; isDemo?: boolean; failedCheck?: string;
}

interface VolunteerRecord {
  id: number; name: string; surgeryHistory: string; submitted: string;
  status: RecordStatus; readinessScore: number; isDemo?: boolean; failedCheck?: string;
}

const DEMO_PATIENT_ID = 1;
const DEMO_VOL_ID = 1;

const PATIENTS: Patient[] = [
  { id: 1, name: "Jennifer W.", procedure: "Total Knee Replacement", surgeryDate: "Jun 18, 2026", submitted: "Today, 9:41 AM", status: "pending", ctmScore: 7, isDemo: true },
  { id: 2, name: "Margaret H.", procedure: "Hip Replacement", surgeryDate: "May 28, 2026", submitted: "May 7, 2026", status: "approved", ctmScore: 8 },
  { id: 3, name: "Patricia R.", procedure: "Total Knee Replacement", surgeryDate: "Jun 3, 2026", submitted: "May 6, 2026", status: "failed", ctmScore: 3, failedCheck: "Criminal history" },
];

const VOLUNTEERS: VolunteerRecord[] = [
  { id: 1, name: "Susan M.", surgeryHistory: "Knee Replacement — 2 yrs ago", submitted: "Today, 10:15 AM", status: "pending", readinessScore: 8, isDemo: true },
  { id: 2, name: "Linda K.", surgeryHistory: "Hip Replacement — 3 yrs ago", submitted: "May 8, 2026", status: "approved", readinessScore: 9 },
  { id: 3, name: "David P.", surgeryHistory: "Shoulder Replacement — 1 yr ago", submitted: "May 7, 2026", status: "failed", readinessScore: 2, failedCheck: "Criminal history" },
];

const PATIENT_CHECK_DEFS = [
  { label: "Criminal history", result: "Clear" },
  { label: "Identity verification", result: "Verified" },
  { label: "Sex offender registry", result: "Clear" },
];

const VOL_CHECK_DEFS = [
  { label: "Criminal history", result: "Clear" },
  { label: "Identity verification", result: "Verified" },
  { label: "Sex offender registry", result: "Clear" },
  { label: "Volunteer training", result: "Complete" },
];

function StatusBadge({ status }: { status: RecordStatus }) {
  const map: Record<RecordStatus, { bg: string; color: string; label: string }> = {
    pending: { bg: "#fef3c7", color: "#92400e", label: "Pending" },
    approved: { bg: "#d1fae5", color: "#065f46", label: "Approved" },
    failed: { bg: "#fee2e2", color: "#991b1b", label: "Failed" },
  };
  const s = map[status];
  return (
    <span className="font-sans text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: s.bg, color: s.color }}>
      {s.label}
    </span>
  );
}

function CheckRow({ check }: { check: Check }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b last:border-0" style={{ borderColor: "#ece8de" }}>
      <span className="font-sans text-sm text-gray-700">{check.label}</span>
      <span className="font-sans text-xs font-semibold">
        {check.state === "waiting" && <span className="text-gray-300">—</span>}
        {check.state === "running" && (
          <span className="flex items-center gap-1.5 text-amber-600">
            <span className="animate-spin inline-block w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full" />
            Checking…
          </span>
        )}
        {check.state === "done" && <span className="text-emerald-600">✓ {check.result}</span>}
      </span>
    </div>
  );
}

function ScoreBar({ score, max = 9 }: { score: number; max?: number }) {
  return (
    <div className="flex items-center gap-4 mt-2">
      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "#e5e1d8" }}>
        <div className="h-full rounded-full" style={{ width: `${(score / max) * 100}%`, background: CTM_GREEN, transition: "width 1s ease" }} />
      </div>
      <span className="font-sans font-bold text-lg" style={{ color: CTM_GREEN }}>{score} / {max}</span>
    </div>
  );
}

function IphoneNotification({ visible, onDismiss, recipientName, message }: {
  visible: boolean; onDismiss: () => void; recipientName: string; message: string;
}) {
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-sans text-xs font-bold text-gray-900">CaretakerMatch</p>
                    <p className="font-sans text-[10px] text-gray-400">now</p>
                  </div>
                  <p className="font-sans text-xs text-gray-700 mt-0.5 leading-snug">{message}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="font-sans text-white/10 text-[10px] tracking-widest uppercase">{recipientName}&apos;s iPhone</p>
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

export default function ApprovalDashboard() {
  const [tab, setTab] = useState<QueueTab>("patients");
  const [selectedPatientId, setSelectedPatientId] = useState<number | null>(null);
  const [selectedVolId, setSelectedVolId] = useState<number | null>(null);

  const [patientPhase, setPatientPhase] = useState<DemoPhase>("idle");
  const [volPhase, setVolPhase] = useState<DemoPhase>("idle");
  const [patientChecks, setPatientChecks] = useState<Check[]>(
    PATIENT_CHECK_DEFS.map((c) => ({ ...c, state: "waiting" as CheckState }))
  );
  const [volChecks, setVolChecks] = useState<Check[]>(
    VOL_CHECK_DEFS.map((c) => ({ ...c, state: "waiting" as CheckState }))
  );

  const [showPatientNotif, setShowPatientNotif] = useState(false);
  const [patientNotifVisible, setPatientNotifVisible] = useState(false);
  const [showVolNotif, setShowVolNotif] = useState(false);
  const [volNotifVisible, setVolNotifVisible] = useState(false);

  const runPatientChecks = useCallback(() => {
    setPatientPhase("checking");
    setPatientChecks(PATIENT_CHECK_DEFS.map((c, i) => ({ ...c, state: (i === 0 ? "running" : "waiting") as CheckState })));
    setTimeout(() => setPatientChecks(PATIENT_CHECK_DEFS.map((c, i) => ({ ...c, state: (i === 0 ? "done" : i === 1 ? "running" : "waiting") as CheckState }))), 1500);
    setTimeout(() => setPatientChecks(PATIENT_CHECK_DEFS.map((c, i) => ({ ...c, state: (i < 2 ? "done" : "running") as CheckState }))), 3000);
    setTimeout(() => setPatientChecks(PATIENT_CHECK_DEFS.map((c) => ({ ...c, state: "done" as CheckState }))), 4500);
    setTimeout(() => setPatientPhase("passed"), 5000);
  }, []);

  const runVolChecks = useCallback(() => {
    setVolPhase("checking");
    setVolChecks(VOL_CHECK_DEFS.map((c, i) => ({ ...c, state: (i === 0 ? "running" : "waiting") as CheckState })));
    setTimeout(() => setVolChecks(VOL_CHECK_DEFS.map((c, i) => ({ ...c, state: (i === 0 ? "done" : i === 1 ? "running" : "waiting") as CheckState }))), 1200);
    setTimeout(() => setVolChecks(VOL_CHECK_DEFS.map((c, i) => ({ ...c, state: (i < 2 ? "done" : i === 2 ? "running" : "waiting") as CheckState }))), 2400);
    setTimeout(() => setVolChecks(VOL_CHECK_DEFS.map((c, i) => ({ ...c, state: (i < 3 ? "done" : "running") as CheckState }))), 3600);
    setTimeout(() => setVolChecks(VOL_CHECK_DEFS.map((c) => ({ ...c, state: "done" as CheckState }))), 4800);
    setTimeout(() => setVolPhase("passed"), 5300);
  }, []);

  const handleSelectPatient = (id: number) => {
    setSelectedPatientId(id);
    if (id === DEMO_PATIENT_ID && patientPhase === "idle") runPatientChecks();
  };

  const handleSelectVol = (id: number) => {
    setSelectedVolId(id);
    if (id === DEMO_VOL_ID && volPhase === "idle") runVolChecks();
  };

  const handleSendPatientApproval = () => {
    setPatientPhase("sent");
    setShowPatientNotif(true);
    setTimeout(() => setPatientNotifVisible(true), 80);
  };

  const handleSendVolApproval = () => {
    setVolPhase("sent");
    setShowVolNotif(true);
    setTimeout(() => setVolNotifVisible(true), 80);
  };

  const effectivePatientStatus = (p: Patient): RecordStatus => {
    if (p.id === DEMO_PATIENT_ID && (patientPhase === "passed" || patientPhase === "sent")) return "approved";
    return p.status;
  };

  const effectiveVolStatus = (v: VolunteerRecord): RecordStatus => {
    if (v.id === DEMO_VOL_ID && (volPhase === "passed" || volPhase === "sent")) return "approved";
    return v.status;
  };

  const pendingCount = tab === "patients"
    ? PATIENTS.filter((p) => p.id === DEMO_PATIENT_ID ? patientPhase === "idle" || patientPhase === "checking" : p.status === "pending").length
    : VOLUNTEERS.filter((v) => v.id === DEMO_VOL_ID ? volPhase === "idle" || volPhase === "checking" : v.status === "pending").length;

  const approvedCount = tab === "patients"
    ? PATIENTS.filter((p) => p.id === DEMO_PATIENT_ID ? patientPhase === "passed" || patientPhase === "sent" : p.status === "approved").length
    : VOLUNTEERS.filter((v) => v.id === DEMO_VOL_ID ? volPhase === "passed" || volPhase === "sent" : v.status === "approved").length;

  const failedCount = tab === "patients"
    ? PATIENTS.filter((p) => p.status === "failed").length
    : VOLUNTEERS.filter((v) => v.status === "failed").length;

  const selectedPatient = PATIENTS.find((p) => p.id === selectedPatientId) ?? null;
  const selectedVol = VOLUNTEERS.find((v) => v.id === selectedVolId) ?? null;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#f0ece0", fontFamily: "system-ui, sans-serif" }}>

      {/* Header */}
      <div className="px-8 py-4 flex items-center justify-between shadow-sm" style={{ background: CTM_GREEN }}>
        <div className="flex items-center gap-3">
          <img src="/ctm-logo.png" alt="CTM" className="w-9 h-9 object-contain flex-shrink-0" />
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest uppercase" style={{ color: CTM_GOLD }}>CaretakerMatch</p>
            <h1 className="font-sans text-lg font-bold text-white">Trust &amp; Safety Screening</h1>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex gap-5">
            {[
              { count: pendingCount, label: "Pending", color: "#fbbf24" },
              { count: approvedCount, label: "Approved", color: "#34d399" },
              { count: failedCount, label: "Failed", color: "#f87171" },
            ].map(({ count, label, color }, i, arr) => (
              <div key={label} className="flex items-center gap-5">
                <div className="text-center">
                  <div className="font-sans text-xl font-bold" style={{ color }}>{count}</div>
                  <div className="font-sans text-[10px] text-white/60 uppercase tracking-wide">{label}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.15)" }} />
                )}
              </div>
            ))}
          </div>
          <Link href="/demo/commonspirit" className="font-sans text-xs text-white/50 hover:text-white transition-colors">
            ← Back to demo
          </Link>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 max-w-5xl w-full mx-auto gap-6 p-6">

        {/* Queue sidebar */}
        <div className="w-64 flex-shrink-0">
          {/* Tab toggle */}
          <div className="flex rounded-lg overflow-hidden border mb-3" style={{ borderColor: "#c8c0b0" }}>
            {(["patients", "volunteers"] as QueueTab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="flex-1 py-2 text-xs font-semibold transition-colors"
                style={{
                  background: tab === t ? CTM_GREEN : "white",
                  color: tab === t ? "white" : CTM_GREEN,
                }}
              >
                {t === "patients" ? "Patients" : "Volunteers"}
              </button>
            ))}
          </div>

          <p className="font-sans text-[10px] font-semibold tracking-widest uppercase mb-3" style={{ color: CTM_GREEN }}>
            Approval Queue
          </p>

          <div className="flex flex-col gap-2">
            {tab === "patients"
              ? PATIENTS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectPatient(p.id)}
                    className="w-full text-left p-4 rounded-xl bg-white shadow-sm border-2 transition-all hover:shadow-md"
                    style={{ borderColor: selectedPatientId === p.id ? CTM_GREEN : "transparent" }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-sans font-semibold text-sm" style={{ color: "#1a1a1a" }}>{p.name}</span>
                      <StatusBadge status={effectivePatientStatus(p)} />
                    </div>
                    <p className="font-sans text-xs text-gray-500">{p.procedure}</p>
                    <p className="font-sans text-xs text-gray-400 mt-0.5">Surgery: {p.surgeryDate}</p>
                    {p.isDemo && (
                      <p className="font-sans text-[10px] font-semibold mt-1.5" style={{ color: CTM_GOLD }}>
                        Just enrolled ↑
                      </p>
                    )}
                  </button>
                ))
              : VOLUNTEERS.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => handleSelectVol(v.id)}
                    className="w-full text-left p-4 rounded-xl bg-white shadow-sm border-2 transition-all hover:shadow-md"
                    style={{ borderColor: selectedVolId === v.id ? CTM_GREEN : "transparent" }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-sans font-semibold text-sm" style={{ color: "#1a1a1a" }}>{v.name}</span>
                      <StatusBadge status={effectiveVolStatus(v)} />
                    </div>
                    <p className="font-sans text-xs text-gray-500">{v.surgeryHistory}</p>
                    <p className="font-sans text-xs text-gray-400 mt-0.5">Submitted: {v.submitted}</p>
                    {v.isDemo && (
                      <p className="font-sans text-[10px] font-semibold mt-1.5" style={{ color: CTM_GOLD }}>
                        Just registered ↑
                      </p>
                    )}
                  </button>
                ))
            }
          </div>
        </div>

        {/* Detail panel */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm">
          {tab === "patients" && !selectedPatient && (
            <div className="h-full flex items-center justify-center">
              <p className="font-sans text-sm text-gray-300">Select a patient from the queue to review</p>
            </div>
          )}
          {tab === "volunteers" && !selectedVol && (
            <div className="h-full flex items-center justify-center">
              <p className="font-sans text-sm text-gray-300">Select a volunteer from the queue to review</p>
            </div>
          )}

          {/* Patient detail */}
          {tab === "patients" && selectedPatient && (
            <div className="p-8">
              <div className="flex items-start justify-between mb-7">
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "#1a1a1a", fontFamily: "Georgia, serif" }}>
                    {selectedPatient.name}
                  </h2>
                  <p className="font-sans text-sm text-gray-500 mt-0.5">
                    {selectedPatient.procedure} · Surgery {selectedPatient.surgeryDate}
                  </p>
                  <p className="font-sans text-xs text-gray-400 mt-0.5">Submitted: {selectedPatient.submitted}</p>
                </div>
                <StatusBadge status={effectivePatientStatus(selectedPatient)} />
              </div>

              <div className="rounded-xl p-5 mb-4" style={{ background: "#f8f7f3" }}>
                <p className="font-sans text-[10px] font-semibold tracking-widest uppercase mb-3" style={{ color: CTM_GREEN }}>
                  Background Check
                </p>
                {selectedPatient.id === DEMO_PATIENT_ID
                  ? patientChecks.map((c) => <CheckRow key={c.label} check={c} />)
                  : PATIENT_CHECK_DEFS.map((c) => (
                      <div key={c.label} className="flex items-center justify-between py-2.5 border-b last:border-0" style={{ borderColor: "#ece8de" }}>
                        <span className="font-sans text-sm text-gray-700">{c.label}</span>
                        <span className="font-sans text-xs font-semibold">
                          {selectedPatient.failedCheck === c.label
                            ? <span className="text-red-600">⚠ Flag found</span>
                            : <span className="text-emerald-600">✓ {c.result}</span>}
                        </span>
                      </div>
                    ))}
              </div>

              {(selectedPatient.id !== DEMO_PATIENT_ID || patientPhase === "passed" || patientPhase === "sent") && (
                <div className="rounded-xl p-5 mb-5" style={{ background: "#f8f7f3" }}>
                  <p className="font-sans text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: CTM_GREEN }}>
                    CTM Score{" "}
                    <span className="normal-case text-gray-400 font-normal tracking-normal">(internal — not shown to patient)</span>
                  </p>
                  <ScoreBar score={selectedPatient.ctmScore} />
                  <p className="font-sans text-xs text-gray-400 mt-2">
                    {selectedPatient.status === "failed"
                      ? "Did not pass background check — score not used for matching."
                      : selectedPatient.ctmScore >= 6
                      ? "Strong candidate for home recovery"
                      : "Borderline — review mobility detail before approving"}
                  </p>
                </div>
              )}

              {selectedPatient.id === DEMO_PATIENT_ID && patientPhase === "passed" && (
                <button
                  onClick={handleSendPatientApproval}
                  className="w-full py-3.5 rounded-xl font-sans font-semibold text-white text-sm transition-opacity hover:opacity-90"
                  style={{ background: CTM_GREEN }}
                >
                  Send Approval to Patient →
                </button>
              )}
              {selectedPatient.id === DEMO_PATIENT_ID && patientPhase === "sent" && (
                <div className="w-full py-3.5 rounded-xl text-center font-sans text-sm font-semibold text-emerald-700" style={{ background: "#d1fae5" }}>
                  ✓ Approval notification sent to Jennifer
                </div>
              )}
              {selectedPatient.id !== DEMO_PATIENT_ID && selectedPatient.status === "failed" && (
                <div className="w-full py-3.5 rounded-xl text-center font-sans text-sm font-semibold text-red-700" style={{ background: "#fee2e2" }}>
                  Rejection notice sent to patient
                </div>
              )}
            </div>
          )}

          {/* Volunteer detail */}
          {tab === "volunteers" && selectedVol && (
            <div className="p-8">
              <div className="flex items-start justify-between mb-7">
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "#1a1a1a", fontFamily: "Georgia, serif" }}>
                    {selectedVol.name}
                  </h2>
                  <p className="font-sans text-sm text-gray-500 mt-0.5">Volunteer · {selectedVol.surgeryHistory}</p>
                  <p className="font-sans text-xs text-gray-400 mt-0.5">Submitted: {selectedVol.submitted}</p>
                </div>
                <StatusBadge status={effectiveVolStatus(selectedVol)} />
              </div>

              <div className="rounded-xl p-5 mb-4" style={{ background: "#f8f7f3" }}>
                <p className="font-sans text-[10px] font-semibold tracking-widest uppercase mb-3" style={{ color: CTM_GREEN }}>
                  Background Check &amp; Vetting
                </p>
                {selectedVol.id === DEMO_VOL_ID
                  ? volChecks.map((c) => <CheckRow key={c.label} check={c} />)
                  : VOL_CHECK_DEFS.map((c) => (
                      <div key={c.label} className="flex items-center justify-between py-2.5 border-b last:border-0" style={{ borderColor: "#ece8de" }}>
                        <span className="font-sans text-sm text-gray-700">{c.label}</span>
                        <span className="font-sans text-xs font-semibold">
                          {selectedVol.failedCheck === c.label
                            ? <span className="text-red-600">⚠ Flag found</span>
                            : <span className="text-emerald-600">✓ {c.result}</span>}
                        </span>
                      </div>
                    ))}
              </div>

              {(selectedVol.id !== DEMO_VOL_ID || volPhase === "passed" || volPhase === "sent") && (
                <div className="rounded-xl p-5 mb-5" style={{ background: "#f8f7f3" }}>
                  <p className="font-sans text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: CTM_GREEN }}>
                    Volunteer Readiness Score{" "}
                    <span className="normal-case text-gray-400 font-normal tracking-normal">(internal)</span>
                  </p>
                  <ScoreBar score={selectedVol.readinessScore} />
                  <p className="font-sans text-xs text-gray-400 mt-2">
                    {selectedVol.status === "failed"
                      ? "Did not pass background check — not eligible for matching."
                      : selectedVol.readinessScore >= 7
                      ? "Strong volunteer — mobile, experienced, full commitment available"
                      : "Review availability and physical readiness before approving"}
                  </p>
                </div>
              )}

              {selectedVol.id === DEMO_VOL_ID && volPhase === "passed" && (
                <button
                  onClick={handleSendVolApproval}
                  className="w-full py-3.5 rounded-xl font-sans font-semibold text-white text-sm transition-opacity hover:opacity-90"
                  style={{ background: CTM_GREEN }}
                >
                  Send Approval to Volunteer →
                </button>
              )}
              {selectedVol.id === DEMO_VOL_ID && volPhase === "sent" && (
                <div className="w-full py-3.5 rounded-xl text-center font-sans text-sm font-semibold text-emerald-700" style={{ background: "#d1fae5" }}>
                  ✓ Approval notification sent to Susan
                </div>
              )}
              {selectedVol.id !== DEMO_VOL_ID && selectedVol.status === "failed" && (
                <div className="w-full py-3.5 rounded-xl text-center font-sans text-sm font-semibold text-red-700" style={{ background: "#fee2e2" }}>
                  Rejection notice sent to volunteer
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showPatientNotif && (
        <IphoneNotification
          visible={patientNotifVisible}
          onDismiss={() => { setPatientNotifVisible(false); setTimeout(() => setShowPatientNotif(false), 350); }}
          recipientName="Jennifer"
          message="Great news, Jennifer! You've been approved. We're now finding your perfect volunteer match."
        />
      )}
      {showVolNotif && (
        <IphoneNotification
          visible={volNotifVisible}
          onDismiss={() => { setVolNotifVisible(false); setTimeout(() => setShowVolNotif(false), 350); }}
          recipientName="Susan"
          message="Welcome aboard, Susan! Your background check cleared. You're approved as a CareTaker Match volunteer."
        />
      )}
    </div>
  );
}
