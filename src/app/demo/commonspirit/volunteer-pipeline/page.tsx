"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const GREEN = "#2C5F2D";
const LIGHT_GREEN = "#97BC62";
const BG = "#F1EFE8";
const BORDER = "#d3d1c7";
const TEXT = "#3d3d3a";
const MUTED = "#73726c";

const sources = [
  {
    name: "Idealist.org",
    count: "1,200+ CO volunteers",
    note: "National platform",
    active: true,
  },
  {
    name: "Spark the Change",
    count: "450+ local volunteers",
    note: "Denver metro focus",
    active: true,
  },
  {
    name: "Patient Reciprocity",
    count: "197 past patients",
    note: "Self-sustaining pool",
    active: true,
  },
  {
    name: "Faith-Based Orgs",
    count: "600+ potential",
    note: "Partnership underway",
    active: false,
  },
];

const pipelineStages = [
  { label: "1. Referral",              count: 2847, sublabel: "referred",            color: GREEN,        highlight: false },
  { label: "2. Background Check",      count: 2412, sublabel: "cleared (96%)",       color: GREEN,        highlight: false },
  { label: "3. Training & Onboarding", count: 2241, sublabel: "certified (93%)",     color: GREEN,        highlight: false },
  { label: "4. Verified Pool",         count: 412,  sublabel: "available this week", color: "#c4922a",    highlight: true  },
];
const PIPELINE_MAX = 2847;

const procedureData = [
  { label: "Hip Replacement", count: 180, pct: 44, color: GREEN },
  { label: "Knee Replacement", count: 142, pct: 34, color: GREEN },
  { label: "Shoulder", count: 90, pct: 22, color: LIGHT_GREEN },
];

const geoData = [
  { region: "Denver Metro", count: 245 },
  { region: "Colorado Springs", count: 89 },
  { region: "Fort Collins", count: 52 },
  { region: "Boulder", count: 26 },
];


export default function VolunteerPipelinePage() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>

      <div className="min-h-screen py-10 px-5" style={{ background: "#FAFAF9", fontFamily: "system-ui, sans-serif", color: TEXT }}>
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow-sm" style={{ border: `0.5px solid ${BORDER}` }}>

          {/* Header */}
          <div className="mb-5 pb-3" style={{ borderBottom: `0.5px solid ${BORDER}` }}>
            <div className="text-lg font-medium" style={{ color: TEXT }}>CaretakerMatch Volunteer Network</div>
            <div className="text-sm mt-1" style={{ color: MUTED }}>Colorado Region | Real-time Pipeline Status</div>
          </div>

          {/* 3-column grid */}
          <div className="grid gap-5 mb-6" style={{ gridTemplateColumns: "200px 220px 1fr" }}>

            {/* LEFT — Volunteer Sources */}
            <div>
              <div className="text-xs font-medium mb-3 uppercase tracking-wide" style={{ color: MUTED }}>Volunteer Sources</div>
              {sources.map((s) => (
                <div key={s.name} className="mb-2.5 p-3 bg-white rounded-lg" style={{ border: `0.5px solid ${BORDER}` }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium" style={{ color: s.active ? GREEN : LIGHT_GREEN }}>{s.name}</span>
                    {s.active ? (
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-medium" style={{ background: "#EAF3DE", color: "#3B6D11" }}>✓ Active</span>
                    ) : (
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-medium" style={{ background: "#FAEEDA", color: "#854F0B" }}>In Progress</span>
                    )}
                  </div>
                  <div className="text-xs mb-0.5" style={{ color: MUTED }}>{s.count}</div>
                  <div className="text-[11px]" style={{ color: "#9c9a92" }}>{s.note}</div>
                </div>
              ))}
            </div>

            {/* CENTER — Vetting Pipeline bar chart */}
            <div>
              <div className="text-xs font-medium mb-3 uppercase tracking-wide" style={{ color: MUTED }}>Vetting Pipeline</div>
              <div className="rounded-lg p-4 flex flex-col justify-between" style={{ background: BG, height: 280 }}>
                <div className="flex flex-col gap-4">
                  {pipelineStages.map((stage, i) => {
                    const targetPct = Math.round((stage.count / PIPELINE_MAX) * 100);
                    return (
                      <div key={stage.label}>
                        <div className="flex justify-between items-baseline mb-1.5">
                          <span className="text-xs font-medium" style={{ color: TEXT }}>{stage.label}</span>
                          <span
                            className="text-xs font-semibold tabular-nums"
                            style={{ color: stage.highlight ? "#c4922a" : TEXT }}
                          >
                            {stage.count.toLocaleString()}
                          </span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.08)" }}>
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: animated ? `${targetPct}%` : "0%",
                              background: stage.color,
                              transition: `width 0.7s ease-out ${i * 150}ms`,
                            }}
                          />
                        </div>
                        <div className="text-[10px] mt-0.5" style={{ color: MUTED }}>{stage.sublabel}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="text-[11px] text-center pt-2" style={{ color: "#9c9a92", borderTop: `0.5px solid ${BORDER}` }}>
                  Avg onboarding: 3.2 days
                </div>
              </div>
            </div>

            {/* RIGHT — Available Pool */}
            <div>
              <div className="text-xs font-medium mb-3 uppercase tracking-wide" style={{ color: MUTED }}>Available Volunteer Pool</div>

              {/* Top metrics */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="rounded-lg p-3 text-center" style={{ background: BG }}>
                  <div className="text-[11px] mb-1" style={{ color: MUTED }}>Available Now</div>
                  <div className="text-3xl font-medium leading-none" style={{ color: TEXT }}>412</div>
                </div>
                <div className="rounded-lg p-3 text-center" style={{ background: BG }}>
                  <div className="text-[11px] mb-1" style={{ color: MUTED }}>Avg Response</div>
                  <div className="text-3xl font-medium leading-none" style={{ color: TEXT }}>
                    4.2<span className="text-sm font-normal" style={{ color: MUTED }}> hrs</span>
                  </div>
                </div>
              </div>

              {/* By Procedure */}
              <div className="bg-white rounded-lg p-3.5 mb-3" style={{ border: `0.5px solid ${BORDER}` }}>
                <div className="text-xs font-medium mb-2.5" style={{ color: TEXT }}>By Procedure Experience</div>
                {procedureData.map((p) => (
                  <div key={p.label} className="mb-2">
                    <div className="flex justify-between text-[11px] mb-1">
                      <span style={{ color: TEXT }}>{p.label}</span>
                      <span className="font-medium" style={{ color: TEXT }}>{p.count}</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: BG }}>
                      <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: p.color }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Geographic */}
              <div className="bg-white rounded-lg p-3.5 mb-3" style={{ border: `0.5px solid ${BORDER}` }}>
                <div className="text-xs font-medium mb-2.5" style={{ color: TEXT }}>Geographic Distribution</div>
                {geoData.map((g) => (
                  <div key={g.region} className="flex justify-between text-[11px] mb-1.5" style={{ color: MUTED }}>
                    <span>🗺️ {g.region}</span>
                    <span className="font-medium" style={{ color: TEXT }}>{g.count}</span>
                  </div>
                ))}
              </div>

              {/* Success banner */}
              <div className="rounded-lg p-2.5 text-center" style={{ background: "#EAF3DE" }}>
                <div className="text-[11px] font-medium" style={{ color: "#3B6D11" }}>94% Match Success Rate</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="rounded-lg p-3.5" style={{ background: BG, borderLeft: `3px solid ${GREEN}` }}>
            <div className="text-sm font-medium mb-1" style={{ color: TEXT }}>Operational Infrastructure — Day 1</div>
            <div className="text-xs leading-relaxed" style={{ color: MUTED }}>
              Pre-built partnerships with Idealist (200K organizations nationally) and Spark the Change Colorado provide immediate volunteer access. Patient reciprocity model creates self-sustaining growth. All volunteers vetted through automated pipeline averaging 3.2 days from referral to availability.
            </div>
          </div>

          <Link href="/demo/commonspirit" className="inline-block mt-5 text-sm hover:underline" style={{ color: GREEN }}>
            ← Back to demo
          </Link>
        </div>
      </div>
    </>
  );
}
