"use client";

import { useState } from "react";
import Link from "next/link";

const SAAS_FEE = 4200;
const LICENCE_FEE = 4000;
const TOTAL_ANNUAL_COST = SAAS_FEE + LICENCE_FEE;

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function fmtK(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return fmt(n);
}

export default function HospitalROICalculator() {
  const [tjrCases, setTjrCases] = useState(300);
  const [snfRate, setSnfRate] = useState(15);
  const [redirectRate, setRedirectRate] = useState(30);
  const [savingsPerPatient, setSavingsPerPatient] = useState(9400);

  // Derived calculations
  const snfPatients = Math.round(tjrCases * (snfRate / 100));
  const redirectedPatients = Math.round(snfPatients * (redirectRate / 100));
  const annualSavings = redirectedPatients * savingsPerPatient;
  const netSavings = annualSavings - TOTAL_ANNUAL_COST;
  const roi = TOTAL_ANNUAL_COST > 0 ? Math.round(annualSavings / TOTAL_ANNUAL_COST) : 0;

  // TEAM downside risk estimate (based on deck methodology)
  const teamRiskLow = Math.round(tjrCases * 0.15 * 0.40 * 9400 + tjrCases * 0.15 * 0.08 * 17000 + tjrCases * 0.05 * 12000);
  const teamRiskHigh = Math.round(tjrCases * 0.15 * 0.60 * 9400 + tjrCases * 0.15 * 0.12 * 17000 + tjrCases * 0.08 * 12000);

  const InputField = ({
    label,
    value,
    onChange,
    min,
    max,
    step,
    prefix,
    suffix,
    note,
  }: {
    label: string;
    value: number;
    onChange: (v: number) => void;
    min: number;
    max: number;
    step: number;
    prefix?: string;
    suffix?: string;
    note?: string;
  }) => (
    <div>
      <label className="block text-sm font-semibold text-[#1e3a2f] mb-1">{label}</label>
      {note && <p className="text-xs text-gray-500 mb-2">{note}</p>}
      <div className="flex items-center gap-2">
        {prefix && <span className="text-[#1e3a2f] font-bold">{prefix}</span>}
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full border-2 border-[#1e3a2f]/30 rounded-lg px-3 py-2 text-lg font-bold text-[#1e3a2f] bg-white focus:outline-none focus:border-[#1e3a2f] transition-colors"
        />
        {suffix && <span className="text-[#1e3a2f] font-bold">{suffix}</span>}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-2 accent-[#1e3a2f]"
      />
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0d8" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#1e3a2f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">CareTaker Match</h1>
              <p className="text-green-200 mt-1">Hospital Executive ROI Calculator</p>
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center px-4 py-2 border border-green-300 text-sm font-medium rounded-md text-green-100 hover:bg-green-800 transition-colors"
            >
              ← Back to Demo Hub
            </Link>
          </div>
        </div>
      </div>

      {/* Hero banner */}
      <div style={{ backgroundColor: "#1e3a2f" }} className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-amber-400 text-4xl font-bold">$300K–$500K</p>
              <p className="text-green-200 text-sm mt-1">Est. 90-day downside risk / yr<br />(300 TJR cases under CMS TEAM)</p>
            </div>
            <div>
              <p className="text-amber-400 text-4xl font-bold">15%</p>
              <p className="text-green-200 text-sm mt-1">Of TJR patients<br />discharged to SNF</p>
            </div>
            <div>
              <p className="text-amber-400 text-4xl font-bold">~40–60%</p>
              <p className="text-green-200 text-sm mt-1">Of SNF admissions driven<br />by social need, not clinical</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 pb-16">

        {/* Context card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-[#1e3a2f]">
          <h2 className="text-xl font-serif font-bold text-[#1e3a2f] mb-2">The Problem for Your Hospital</h2>
          <p className="text-gray-700 leading-relaxed">
            Under <strong>CMS TEAM</strong> (effective January 2026), hospitals are fully accountable for all Part A + B spending
            through <strong>90 days post-discharge</strong> — SNF costs, readmissions, complications, PT/OT, and home health.
            Redirecting even a fraction of avoidable SNF discharges to home recovery generates substantial, measurable savings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">

          {/* Inputs */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-serif font-bold text-[#1e3a2f] mb-6">Your Hospital's Numbers</h2>
            <div className="space-y-6">
              <InputField
                label="Annual TJR Cases"
                value={tjrCases}
                onChange={setTjrCases}
                min={50}
                max={2000}
                step={10}
                note="Total joint replacement procedures per year"
              />
              <InputField
                label="SNF Discharge Rate"
                value={snfRate}
                onChange={setSnfRate}
                min={5}
                max={30}
                step={1}
                suffix="%"
                note="Industry average ~15% (MedPAC FY2024)"
              />
              <InputField
                label="Redirectable to Home"
                value={redirectRate}
                onChange={setRedirectRate}
                min={10}
                max={60}
                step={5}
                suffix="%"
                note="Conservative base case 30%; literature supports 40–60%"
              />
              <InputField
                label="Savings per Redirected Patient"
                value={savingsPerPatient}
                onChange={setSavingsPerPatient}
                min={7000}
                max={12000}
                step={100}
                prefix="$"
                note="SNF $10,600 − Home $1,200 = $9,400 (CMS derived)"
              />
            </div>
          </div>

          {/* Formula Chain */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-serif font-bold text-[#1e3a2f] mb-6">Your ROI — Based on Your Numbers</h2>

            {/* Step chain */}
            <div className="space-y-3 mb-8">
              {/* Step 1 */}
              <div className="flex items-center justify-between bg-[#f5f0d8] rounded-lg px-4 py-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">TJR Cases / yr</p>
                  <p className="text-2xl font-bold text-[#1e3a2f]">{tjrCases.toLocaleString()}</p>
                </div>
                <span className="text-gray-400 text-xl">×</span>
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">SNF Discharge Rate</p>
                  <p className="text-2xl font-bold text-amber-600">{snfRate}%</p>
                </div>
              </div>

              <div className="text-center text-[#1e3a2f] font-bold text-sm">↓</div>

              {/* Step 2 */}
              <div className="flex items-center justify-between bg-[#f5f0d8] rounded-lg px-4 py-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">SNF Patients / yr</p>
                  <p className="text-2xl font-bold text-[#1e3a2f]">{snfPatients.toLocaleString()}</p>
                </div>
                <span className="text-gray-400 text-xl">×</span>
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Redirectable</p>
                  <p className="text-2xl font-bold text-amber-600">{redirectRate}%</p>
                </div>
              </div>

              <div className="text-center text-[#1e3a2f] font-bold text-sm">↓</div>

              {/* Step 3 */}
              <div className="flex items-center justify-between bg-[#f5f0d8] rounded-lg px-4 py-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Patients Redirected</p>
                  <p className="text-2xl font-bold text-[#1e3a2f]">~{redirectedPatients.toLocaleString()}</p>
                </div>
                <span className="text-gray-400 text-xl">×</span>
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Savings / Patient</p>
                  <p className="text-2xl font-bold text-amber-600">{fmt(savingsPerPatient)}</p>
                </div>
              </div>

              <div className="text-center text-[#1e3a2f] font-bold text-sm">↓</div>

              {/* Result */}
              <div style={{ backgroundColor: "#1e3a2f" }} className="rounded-xl px-6 py-5 text-center">
                <p className="text-green-200 text-sm uppercase tracking-widest mb-1">Annual Savings</p>
                <p className="text-5xl font-bold text-white">{fmtK(annualSavings)}</p>
              </div>
            </div>

            {/* Cost & ROI */}
            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Annual CaretakerMatch SaaS fee</span>
                <span className="font-medium">{fmt(SAAS_FEE)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Annual Licence fee</span>
                <span className="font-medium">{fmt(LICENCE_FEE)}</span>
              </div>
              <div className="flex justify-between font-semibold text-[#1e3a2f] border-t border-gray-200 pt-2 mt-2">
                <span>Net Savings</span>
                <span className={netSavings >= 0 ? "text-green-700" : "text-red-600"}>{fmtK(netSavings)}</span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-gray-600 font-medium">Return on Investment</span>
                <span
                  style={{ backgroundColor: "#1e3a2f" }}
                  className="text-white font-bold px-4 py-1 rounded-full text-lg"
                >
                  {roi}× ROI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* TEAM Risk Context */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-serif font-bold text-[#1e3a2f] mb-3">
            Your Estimated CMS TEAM Downside Risk
          </h3>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">{fmtK(teamRiskLow)}–{fmtK(teamRiskHigh)}</p>
              <p className="text-sm text-gray-500">Est. 90-day downside exposure / yr</p>
            </div>
            <div className="flex-1 min-w-60">
              <p className="text-sm text-gray-600 leading-relaxed">
                Based on your <strong>{tjrCases} TJR cases</strong>, estimated TEAM exposure includes SNF excess costs,
                readmission differentials (HRRP), and Days 31–90 complications. CareTaker Match's{" "}
                <strong>~{redirectedPatients} redirected patients</strong> directly reduce this exposure.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            † Methodology: TJR × 15% SNF × 40–60% avoidable × $9,400 + readmission differential (HRRP, 2× rate × ~$17K) + Days 31–90 complications.
            Modeled estimate — not independently published. Source: CMS TEAM · HRRP · MedPAC FY2024.
          </p>
        </div>

        {/* What Your Hospital Gets */}
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-[#1e3a2f] mb-6 text-center">What Your Hospital Gets</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl shadow-sm border-t-4 border-[#1e3a2f] p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏛️</span>
                <h3 className="text-lg font-bold text-[#1e3a2f]">HRRP + TEAM Penalty Reduction</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Fewer SNF days = lower 90-day episode cost</li>
                <li>• Reduces HRRP 30-day readmission exposure</li>
                <li>• Addresses dual financial liability simultaneously</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border-t-4 border-teal p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">➕</span>
                <h3 className="text-lg font-bold text-teal-800">Reduced Readmission Risk</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 30-day readmission: SNF 8–12% → Home 3–6%</li>
                <li>• Volunteers support medication adherence</li>
                <li>• Transport to follow-up PT/OT & early warning checks</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border-t-4 border-amber-400 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⭐</span>
                <h3 className="text-lg font-bold text-amber-700">Patient Satisfaction (HCAHPS)</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Home recovery with community support drives higher discharge scores</li>
                <li>• Improves star ratings & value-based incentives</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border-t-4 border-purple-400 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">✅</span>
                <h3 className="text-lg font-bold text-purple-800">Zero Clinical Burden</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• CaretakerMatch handles all vetting, matching & volunteer coordination</li>
                <li>• Staff do nothing extra</li>
                <li>• iPad intake + Epic EMR via SMART on FHIR</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-xs text-gray-400">
            Sources: CMS TEAM Model (Jan 2026) · CMS PDPM Technical Report · MedPAC FY2024 · Dobson/DaVanzo CJR Analysis ·
            Treu EA et al. Journal of Arthroplasty, 2024 · Peace AJ et al. Journal of Arthroplasty, 2023
          </p>
        </div>

        {/* Footer nav */}
        <div className="text-center mt-10">
          <Link
            href="/demo"
            className="inline-flex items-center font-medium transition-colors"
            style={{ color: "#1e3a2f" }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Demo Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
