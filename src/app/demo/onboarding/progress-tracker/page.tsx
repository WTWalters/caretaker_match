"use client";

import { useState } from "react";
import Link from "next/link";

const CTM_GREEN = "#1e3a2f";
const CTM_GOLD = "#c4922a";

type StepStatus = "complete" | "active" | "pending";

interface JourneyStep {
  label: string;
  status: StepStatus;
  message?: string;
}

const PATIENT_STEPS: JourneyStep[] = [
  { label: "Enrolled", status: "complete" },
  { label: "Approved", status: "complete" },
  { label: "Finding Match", status: "active", message: "Good news! We're matching you with qualified volunteers in your area. You'll see your top 3 matches within 24-48 hours." },
  { label: "Coffee Meet", status: "pending" },
  { label: "Recovery Support", status: "pending" },
];

const VOLUNTEER_STEPS: JourneyStep[] = [
  { label: "Applied", status: "complete" },
  { label: "Background Check", status: "complete" },
  { label: "Training", status: "active", message: "You're in training! Complete your online modules to become a certified CaretakerMatch volunteer." },
  { label: "Approved", status: "pending" },
  { label: "Available", status: "pending" },
];

function StepIndicator({ status }: { status: StepStatus }) {
  if (status === "complete") {
    return (
      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 z-10" style={{ background: CTM_GREEN, border: `2px solid ${CTM_GREEN}` }}>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  if (status === "active") {
    return (
      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 z-10" style={{ background: CTM_GOLD, border: `2px solid ${CTM_GOLD}` }}>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 z-10 bg-white" style={{ border: "2px solid #ccc" }}>
      <div className="w-2 h-2 rounded-full" style={{ background: "#ccc" }} />
    </div>
  );
}

export default function ProgressTrackerPage() {
  const [view, setView] = useState<"patient" | "volunteer">("patient");
  const steps = view === "patient" ? PATIENT_STEPS : VOLUNTEER_STEPS;
  const activeStep = steps.find((s) => s.status === "active");
  const activeLabel = activeStep?.label ?? "Complete";
  const activeIndex = steps.findIndex((s) => s.status === "active");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ background: "#f5f0e3", fontFamily: "system-ui, sans-serif" }}>

      {/* Toggle */}
      <div className="flex rounded-2xl p-1 mb-8 shadow-sm" style={{ background: "white" }}>
        {(["patient", "volunteer"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className="px-8 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={
              view === v
                ? { background: CTM_GREEN, color: "white" }
                : { color: "#555", background: "transparent" }
            }
          >
            {v === "patient" ? "Patient View" : "Volunteer View"}
          </button>
        ))}
      </div>

      {/* Tracker card */}
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg" style={{ border: `1.5px solid ${CTM_GREEN}` }}>

        {/* Journey label */}
        <div className="text-center mb-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: CTM_GREEN }}>Your Journey</div>
          <div className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>{activeLabel}</div>
        </div>

        {/* Step track */}
        <div className="relative flex items-center justify-between mb-8">
          {/* Background line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 rounded-full" style={{ background: "#e0d8c8", zIndex: 0 }} />

          {/* Colored progress line */}
          {activeIndex > 0 && (
            <div
              className="absolute top-1/2 -translate-y-1/2 h-1 rounded-full"
              style={{
                left: 0,
                width: `${(activeIndex / (steps.length - 1)) * 100}%`,
                background: `linear-gradient(to right, ${CTM_GREEN}, ${CTM_GOLD})`,
                zIndex: 1,
              }}
            />
          )}

          {steps.map((step) => (
            <div key={step.label} className="flex flex-col items-center gap-2" style={{ zIndex: 2 }}>
              <StepIndicator status={step.status} />
              <span
                className="text-xs font-medium text-center whitespace-nowrap"
                style={{ color: step.status === "active" ? CTM_GOLD : step.status === "complete" ? CTM_GREEN : "#999" }}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Status message */}
        {activeStep?.message && (
          <div className="rounded-xl px-5 py-4" style={{ border: `1px solid ${CTM_GREEN}`, background: "#f9fdf6" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3a3a3a" }}>
              <span className="font-semibold" style={{ color: CTM_GREEN }}>Good news!</span>{" "}
              {activeStep.message.replace(/^Good news! /, "")}
            </p>
          </div>
        )}
      </div>

      <Link href="/demo/commonspirit" className="mt-6 text-sm hover:underline" style={{ color: CTM_GREEN }}>
        ← Back to demo
      </Link>
    </div>
  );
}
