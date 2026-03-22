"use client";

import Link from "next/link";

const stages = [
  {
    step: 1,
    label: "Assessment & Enrollment",
    color: "teal",
    bg: "bg-teal-50",
    border: "border-teal-200",
    heading: "text-teal-800",
    badge: "bg-teal text-white",
    patientAccess: "Name, self-reported health data, reciprocity preference",
    volunteerAccess: "None — no volunteer assigned yet",
    clinicianAccess: "Full assessment responses, algorithm score",
    overseerAccess: "Aggregate enrollment metrics only",
    privacyNote:
      "Patient data stays within the clinical environment. No PHI leaves the hospital system at this stage.",
  },
  {
    step: 2,
    label: "Clinician Approval & Matching",
    color: "navy",
    bg: "bg-blue-50",
    border: "border-blue-200",
    heading: "text-blue-900",
    badge: "bg-navy text-white",
    patientAccess: "Notified of match — volunteer first name and city only",
    volunteerAccess: "Notified of match — patient first name, general procedure type",
    clinicianAccess: "Full match details, compatibility scores",
    overseerAccess: "Match assignment log, no PHI",
    privacyNote:
      "The matching algorithm scores compatibility without exposing identifiable health data to volunteers. Proximity is calculated without sharing exact addresses.",
  },
  {
    step: 3,
    label: "Anonymous Introduction",
    color: "coral",
    bg: "bg-orange-50",
    border: "border-orange-200",
    heading: "text-orange-800",
    badge: "bg-coral text-white",
    patientAccess: "Communicates via Twilio proxy — real number never shared",
    volunteerAccess: "Communicates via Twilio proxy — real number never shared",
    clinicianAccess: "Communication status (initiated / no response)",
    overseerAccess: "Full communication log via Twilio, AI toxicity scan active",
    privacyNote:
      "All messages route through a Twilio anonymous proxy. Neither party sees the other's real phone number. The Overseer can view the full log; the Clinician sees status only.",
  },
  {
    step: 4,
    label: "Coffee Meet & Mutual Consent",
    color: "green",
    bg: "bg-green-50",
    border: "border-green-200",
    heading: "text-green-800",
    badge: "bg-green-600 text-white",
    patientAccess: "Consents to share home address with matched volunteer only",
    volunteerAccess: "Receives patient home address after mutual consent",
    clinicianAccess: "Consent status, meeting confirmed / declined",
    overseerAccess: "Consent audit trail, full communication log",
    privacyNote:
      "Address sharing is gated on mutual digital consent captured in-app. Consent is timestamped and stored in the audit log. Either party can withdraw at any time.",
  },
  {
    step: 5,
    label: "Active Recovery",
    color: "purple",
    bg: "bg-purple-50",
    border: "border-purple-200",
    heading: "text-purple-800",
    badge: "bg-purple-600 text-white",
    patientAccess: "In-app messaging, check-in logs visible to self",
    volunteerAccess: "In-app messaging, task completion log",
    clinicianAccess: "Encounter status, escalation alerts only",
    overseerAccess: "Full real-time communication log, AI toxicity flags, escalation tools",
    privacyNote:
      "During active recovery the Overseer monitors all in-app communication for toxicity, harassment, or safety concerns. Clinician access is limited to encounter health status — they cannot read chat.",
  },
  {
    step: 6,
    label: "Monitor Encounter 😇",
    color: "dark-green",
    bg: "bg-[#1e3a2f]/10",
    border: "border-[#1e3a2f]/30",
    heading: "text-[#1e3a2f]",
    badge: "bg-[#1e3a2f] text-white",
    patientAccess: "No change in visible access",
    volunteerAccess: "No change in visible access",
    clinicianAccess: "Escalation notifications if Overseer flags an issue",
    overseerAccess: "AI-flagged messages highlighted, intervention tools (contact caretaker, escalate to clinician, dismiss)",
    privacyNote:
      "AI toxicity analysis runs passively on every message. The Overseer is only paged when a flag is raised — similar to how Uber monitors rides without active human surveillance of every trip.",
  },
  {
    step: 7,
    label: "Close & Evaluate",
    color: "gray",
    bg: "bg-gray-50",
    border: "border-gray-200",
    heading: "text-gray-800",
    badge: "bg-gray-600 text-white",
    patientAccess: "Anonymous outcome survey, no identifiers in response",
    volunteerAccess: "Anonymous outcome survey, badge/recognition if opted in",
    clinicianAccess: "Aggregated outcomes tied to patient (de-identified for research)",
    overseerAccess: "Full encounter archive, incident reports if any",
    privacyNote:
      "Post-encounter, PHI is retained per HIPAA minimum-necessary standards. Communication logs are archived, not deleted, to support incident investigation if needed.",
  },
];

const roles = ["Patient", "Volunteer", "Clinician", "Overseer 😇"];
const roleColors = [
  "bg-coral text-white",
  "bg-teal text-white",
  "bg-gray-700 text-white",
  "bg-[#1e3a2f] text-white",
];

export default function GraduatedPrivacyModelPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-navy">CareTaker Match</h1>
              <p className="text-lg text-gray-600 mt-1">Graduated Privacy Model</p>
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              ← Back to Demo Hub
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Intro */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-10">
          <h2 className="text-2xl font-serif font-semibold text-navy mb-4">
            Privacy Scales With Trust
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CareTaker Match uses a <strong>graduated privacy model</strong> — the amount of
            personal information shared between a patient and volunteer increases only as mutual
            trust is established through verified steps. No party ever sees more than the
            minimum necessary to complete their role at that stage of the encounter.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This model is designed to satisfy HIPAA minimum-necessary access requirements while
            building the confidence patients and volunteers need to form a genuine care
            relationship.
          </p>

          {/* Role legend */}
          <div className="flex flex-wrap gap-3 mt-6">
            {roles.map((role, i) => (
              <span
                key={role}
                className={`px-3 py-1 rounded-full text-sm font-medium ${roleColors[i]}`}
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Stage cards */}
        <div className="space-y-6">
          {stages.map((stage) => (
            <div
              key={stage.step}
              className={`bg-white rounded-lg shadow-sm border ${stage.border} overflow-hidden`}
            >
              {/* Stage header */}
              <div className={`${stage.bg} px-6 py-4 flex items-center gap-4`}>
                <span className={`${stage.badge} text-sm font-bold px-3 py-1 rounded-full`}>
                  Step {stage.step}
                </span>
                <h3 className={`text-lg font-semibold ${stage.heading}`}>{stage.label}</h3>
              </div>

              {/* Access grid */}
              <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                <div className="p-5">
                  <p className="text-xs font-semibold text-coral uppercase tracking-wide mb-2">Patient Sees</p>
                  <p className="text-sm text-gray-700">{stage.patientAccess}</p>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-teal uppercase tracking-wide mb-2">Volunteer Sees</p>
                  <p className="text-sm text-gray-700">{stage.volunteerAccess}</p>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Clinician Sees</p>
                  <p className="text-sm text-gray-700">{stage.clinicianAccess}</p>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{color: "#1e3a2f"}}>Overseer Sees</p>
                  <p className="text-sm text-gray-700">{stage.overseerAccess}</p>
                </div>
              </div>

              {/* Privacy note */}
              <div className="bg-gray-50 border-t border-gray-100 px-6 py-3">
                <p className="text-xs text-gray-500">
                  <span className="font-semibold text-gray-600">Privacy note: </span>
                  {stage.privacyNote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* HIPAA callout */}
        <div className="mt-10 bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <h3 className="text-xl font-serif font-semibold text-navy mb-4">
            HIPAA Alignment
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-teal-700 mb-1">Minimum Necessary</p>
              <p>Each role receives only the data required to perform their function at each stage. Volunteers never access clinical data. Clinicians never read chat.</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700 mb-1">Audit Trail</p>
              <p>All data access, consent actions, and communications are timestamped and stored in an immutable audit log accessible to the Overseer and compliance team.</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700 mb-1">Anonymous Proxy</p>
              <p>All patient-volunteer communication routes through a Twilio anonymous proxy. Real phone numbers are never exchanged. The platform retains a complete message log.</p>
            </div>
          </div>
        </div>

        {/* Footer nav */}
        <div className="text-center mt-12">
          <Link
            href="/demo"
            className="inline-flex items-center text-teal hover:text-teal-700 font-medium transition-colors"
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
