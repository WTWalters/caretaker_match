"use client";

import { useState } from "react";
import Link from "next/link";

type EncounterStatus = "pending_meetup" | "active_green" | "active_red";
type View = "dashboard" | "encounter" | "chat";

interface Message {
  id: string;
  sender: "patient" | "caretaker";
  senderName: string;
  text: string;
  timestamp: string;
  flagged?: boolean;
  aiFlag?: string;
}

interface EncounterStep {
  number: number;
  label: string;
  sublabel: string;
  completed: boolean;
  current: boolean;
}

interface Encounter {
  id: string;
  patientName: string;
  patientAge: number;
  surgery: string;
  caretakerName: string;
  surgeryDate: string;
  daysSinceSurgery: number | null;
  status: EncounterStatus;
  matchDate: string;
  currentStep: number;
  flags: string[];
  messages: Message[];
}

const encounterSteps = (currentStep: number): EncounterStep[] => [
  { number: 1, label: "Assessment & Enrollment", sublabel: "iPad Intake", completed: currentStep > 1, current: currentStep === 1 },
  { number: 2, label: "Clinician Approval", sublabel: "EMR Trigger", completed: currentStep > 2, current: currentStep === 2 },
  { number: 3, label: "Matching Algorithm", sublabel: "1–3 Candidates", completed: currentStep > 3, current: currentStep === 3 },
  { number: 4, label: "Anonymous Introduction", sublabel: "In-App Only", completed: currentStep > 4, current: currentStep === 4 },
  { number: 5, label: "Coffee Meet & Consent", sublabel: "Barcode Verified", completed: currentStep > 5, current: currentStep === 5 },
  { number: 6, label: "Active Recovery", sublabel: "Days 0–30", completed: currentStep > 6, current: currentStep === 6 },
  { number: 7, label: "😇 Monitor Encounter", sublabel: "Overseer Escalation", completed: currentStep > 7, current: currentStep === 7 },
  { number: 8, label: "Close & Evaluate", sublabel: "Outcomes", completed: currentStep > 8, current: currentStep === 8 },
];

const mockEncounters: Encounter[] = [
  {
    id: "E001",
    patientName: "Margaret Chen",
    patientAge: 72,
    surgery: "Total Knee Replacement",
    caretakerName: "Patricia Okafor",
    surgeryDate: "2026-03-20",
    daysSinceSurgery: null,
    status: "pending_meetup",
    matchDate: "2026-03-11",
    currentStep: 5,
    flags: [],
    messages: [
      {
        id: "m1",
        sender: "caretaker",
        senderName: "Patricia",
        text: "Hi Margaret! I'm Patricia. I'm really looking forward to meeting you for coffee on Thursday. I had my knee done two years ago so I know exactly what you're going through.",
        timestamp: "Mar 11, 2:14 PM",
      },
      {
        id: "m2",
        sender: "patient",
        senderName: "Margaret",
        text: "Hello Patricia! That's so reassuring. I'm a little nervous about the whole thing. Thursday works great — is 10am okay?",
        timestamp: "Mar 11, 3:02 PM",
      },
      {
        id: "m3",
        sender: "caretaker",
        senderName: "Patricia",
        text: "10am is perfect! There's a nice coffee shop on 5th called Blue Moon — does that work for you? Easy parking.",
        timestamp: "Mar 11, 3:18 PM",
      },
      {
        id: "m4",
        sender: "patient",
        senderName: "Margaret",
        text: "I know Blue Moon! That's perfect. See you Thursday 😊",
        timestamp: "Mar 11, 3:25 PM",
      },
    ],
  },
  {
    id: "E002",
    patientName: "Robert Johnson",
    patientAge: 58,
    surgery: "Hip Replacement",
    caretakerName: "Sarah Thompson",
    surgeryDate: "2026-03-11",
    daysSinceSurgery: 2,
    status: "active_green",
    matchDate: "2026-03-02",
    currentStep: 6,
    flags: [],
    messages: [
      {
        id: "m1",
        sender: "caretaker",
        senderName: "Sarah",
        text: "Good morning Robert! How are you feeling today — day 2! That's a big milestone.",
        timestamp: "Mar 13, 8:05 AM",
      },
      {
        id: "m2",
        sender: "patient",
        senderName: "Robert",
        text: "Morning Sarah. Better than yesterday honestly. Still sore but I managed to walk to the kitchen on my own.",
        timestamp: "Mar 13, 8:22 AM",
      },
      {
        id: "m3",
        sender: "caretaker",
        senderName: "Sarah",
        text: "That's huge progress! Do you need me to swing by this afternoon? I can bring lunch and help with the PT exercises.",
        timestamp: "Mar 13, 8:30 AM",
      },
      {
        id: "m4",
        sender: "patient",
        senderName: "Robert",
        text: "That would be wonderful. Around 1pm?",
        timestamp: "Mar 13, 9:10 AM",
      },
      {
        id: "m5",
        sender: "caretaker",
        senderName: "Sarah",
        text: "1pm it is. I'll bring that chicken soup from Mario's you mentioned. See you soon!",
        timestamp: "Mar 13, 9:15 AM",
      },
    ],
  },
  {
    id: "E003",
    patientName: "Dorothy Williams",
    patientAge: 76,
    surgery: "Total Knee Replacement",
    caretakerName: "James Patterson",
    surgeryDate: "2026-03-06",
    daysSinceSurgery: 7,
    status: "active_red",
    matchDate: "2026-02-25",
    currentStep: 7,
    flags: ["Toxicity detected — caretaker message, Day 6"],
    messages: [
      {
        id: "m1",
        sender: "caretaker",
        senderName: "James",
        text: "Hi Dorothy! Just checking in — how are you feeling today? I'm ready to help with whatever you need.",
        timestamp: "Mar 7, 9:00 AM",
      },
      {
        id: "m2",
        sender: "patient",
        senderName: "Dorothy",
        text: "Thank you James! A little sore but managing. Could you bring some groceries tomorrow morning? Just milk, bread, fruit, and soup.",
        timestamp: "Mar 7, 10:15 AM",
      },
      {
        id: "m3",
        sender: "caretaker",
        senderName: "James",
        text: "Of course! I'll be there around 10am. Anything else you need while I'm at the store?",
        timestamp: "Mar 7, 10:30 AM",
      },
      {
        id: "m4",
        sender: "patient",
        senderName: "Dorothy",
        text: "Maybe some chamomile tea too if they have it. You're so kind James.",
        timestamp: "Mar 7, 10:45 AM",
      },
      {
        id: "m5",
        sender: "caretaker",
        senderName: "James",
        text: "Got everything on the list! On my way, be there in 20 minutes.",
        timestamp: "Mar 8, 9:48 AM",
      },
      {
        id: "m6",
        sender: "patient",
        senderName: "Dorothy",
        text: "James, can you also pick up my prescription from the pharmacy today? And maybe stay a bit longer — I'm feeling lonely and my neighbor wants to meet you.",
        timestamp: "Mar 11, 11:02 AM",
      },
      {
        id: "m7",
        sender: "caretaker",
        senderName: "James",
        text: "I can grab the prescription, sure. I'll try to stay a bit longer but I do have plans at 3pm.",
        timestamp: "Mar 11, 11:20 AM",
      },
      {
        id: "m8",
        sender: "patient",
        senderName: "Dorothy",
        text: "Can you come earlier tomorrow? And I was wondering if you could help rearrange the bedroom furniture so it's easier for me to get around.",
        timestamp: "Mar 12, 8:30 AM",
      },
      {
        id: "m9",
        sender: "caretaker",
        senderName: "James",
        text: "Dorothy, I need to be honest with you. I'm a volunteer, not a hired caregiver, and the requests keep growing every single day. Groceries, prescriptions, furniture moving, meeting your neighbors — this isn't what I signed up for. I'm here to help your recovery but honestly this is getting to be too much and it's exhausting.",
        timestamp: "Mar 12, 9:05 AM",
        flagged: true,
        aiFlag:
          "This message contains language likely to cause emotional distress to a vulnerable post-surgical patient. Concerns: (1) The phrase \"this isn't what I signed up for\" may induce guilt and anxiety in a patient who depends on this relationship for recovery support. (2) \"It's exhausting\" places an emotional burden on the patient. (3) The escalating tone and list of complaints lacks constructive framing and may damage the patient's sense of security. Recommended action: Overseer outreach to caretaker to discuss boundary-setting in a supportive, non-harmful way.",
      },
      {
        id: "m10",
        sender: "patient",
        senderName: "Dorothy",
        text: "I'm so sorry James, I truly didn't realize I was asking too much. I'll try to manage on my own more.",
        timestamp: "Mar 12, 9:42 AM",
      },
      {
        id: "m11",
        sender: "caretaker",
        senderName: "James",
        text: "I shouldn't have said it that way — I'm sorry Dorothy. Can we talk today about what would actually be most helpful for you? I do want to be here for your recovery.",
        timestamp: "Mar 12, 10:05 AM",
      },
    ],
  },
];

const statusConfig = {
  pending_meetup: {
    dot: "bg-yellow-400",
    badge: "bg-yellow-100 text-yellow-800 border-yellow-200",
    label: "Coffee Meet Pending",
    icon: "☕",
  },
  active_green: {
    dot: "bg-green-500",
    badge: "bg-green-100 text-green-800 border-green-200",
    label: "Active — On Track",
    icon: "✓",
  },
  active_red: {
    dot: "bg-red-500",
    badge: "bg-red-100 text-red-800 border-red-200",
    label: "Active — Flag Raised",
    icon: "⚠",
  },
};

export default function OverseerDemo() {
  const [view, setView] = useState<View>("dashboard");
  const [selectedEncounter, setSelectedEncounter] = useState<Encounter | null>(null);
  const [sidebarItem, setSidebarItem] = useState<"encounters" | "alerts" | "reports">("encounters");

  const activeEncounters = mockEncounters.filter((e) => e.status !== "pending_meetup").length;
  const flaggedEncounters = mockEncounters.filter((e) => e.status === "active_red").length;

  const openEncounter = (encounter: Encounter) => {
    setSelectedEncounter(encounter);
    setView("encounter");
  };

  const openChat = () => setView("chat");

  const renderSidebar = () => (
    <aside className="w-64 bg-[#1e3a2f] text-white flex flex-col min-h-screen flex-shrink-0">
      <div className="px-6 py-5 border-b border-[#2d5040]">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-[#1e3a2f] font-bold text-sm">CM</span>
          </div>
          <div>
            <p className="font-semibold text-sm">CareTaker Match</p>
            <p className="text-xs text-green-300">Overseer Portal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {[
          {
            id: "encounters",
            label: "Encounters",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
            badge: mockEncounters.length,
          },
          {
            id: "alerts",
            label: "Alerts",
            icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
            badge: flaggedEncounters,
          },
          {
            id: "reports",
            label: "Reports",
            icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            badge: null,
          },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setSidebarItem(item.id as any);
              setView("dashboard");
              setSelectedEncounter(null);
            }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
              sidebarItem === item.id
                ? "bg-[#2d5040] text-white"
                : "text-green-200 hover:bg-[#2d5040] hover:text-white"
            }`}
          >
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span>{item.label}</span>
            </div>
            {item.badge !== null && item.badge > 0 && (
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  item.id === "alerts" ? "bg-red-500 text-white" : "bg-[#3d6050] text-green-200"
                }`}
              >
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-[#2d5040]">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#2d5040] rounded-full flex items-center justify-center">
            <span className="text-green-300 text-sm font-medium">AO</span>
          </div>
          <div>
            <p className="text-sm font-medium">Admin Overseer</p>
            <p className="text-xs text-green-400">CareTaker Match</p>
          </div>
        </div>
      </div>
    </aside>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-5">
        {[
          { label: "Total Encounters", value: mockEncounters.length, color: "text-gray-900", bg: "bg-white" },
          { label: "Awaiting Coffee Meet", value: 1, color: "text-yellow-700", bg: "bg-yellow-50" },
          { label: "Active — In Recovery", value: activeEncounters, color: "text-green-700", bg: "bg-green-50" },
          { label: "Flagged", value: flaggedEncounters, color: "text-red-700", bg: "bg-red-50" },
        ].map((stat) => (
          <div key={stat.label} className={`${stat.bg} rounded-xl border border-gray-200 p-5`}>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className={`text-3xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Encounter Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-900">Active Encounters</h2>
          <span className="text-xs text-gray-400">All communications routed via Twilio anonymous proxy</span>
        </div>
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr>
              {["Status", "Patient", "Caretaker", "Surgery", "Days Post-Op", "Step", "Action"].map((h) => (
                <th
                  key={h}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockEncounters.map((enc) => {
              const cfg = statusConfig[enc.status];
              return (
                <tr key={enc.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <button
                      onClick={() => openEncounter(enc)}
                      className="flex items-center space-x-2 group"
                    >
                      <span
                        className={`w-3 h-3 rounded-full ${cfg.dot} ${
                          enc.status === "active_red" ? "animate-pulse" : ""
                        }`}
                      />
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full border ${cfg.badge} group-hover:shadow-sm`}
                      >
                        {cfg.label}
                      </span>
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{enc.patientName}</div>
                    <div className="text-xs text-gray-400">Age {enc.patientAge}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{enc.caretakerName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{enc.surgery}</td>
                  <td className="px-6 py-4 text-sm">
                    {enc.daysSinceSurgery !== null ? (
                      <span className="font-medium text-gray-900">Day {enc.daysSinceSurgery}</span>
                    ) : (
                      <span className="text-gray-400 italic">Pre-surgery</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Step {enc.currentStep} of 8</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => openEncounter(enc)}
                      className="text-sm text-[#1e3a2f] font-medium hover:underline"
                    >
                      View →
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderEncounterDetail = () => {
    if (!selectedEncounter) return null;
    const cfg = statusConfig[selectedEncounter.status];
    const steps = encounterSteps(selectedEncounter.currentStep);

    return (
      <div className="space-y-6">
        {/* Back + Header */}
        <div>
          <button
            onClick={() => { setView("dashboard"); setSelectedEncounter(null); }}
            className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Encounters
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedEncounter.patientName} ↔ {selectedEncounter.caretakerName}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {selectedEncounter.surgery} • Matched {selectedEncounter.matchDate}
              </p>
            </div>
            <span className={`text-sm font-medium px-3 py-1.5 rounded-full border ${cfg.badge}`}>
              {cfg.icon} {cfg.label}
            </span>
          </div>
        </div>

        {/* Toxicity Alert Banner */}
        {selectedEncounter.status === "active_red" && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-red-800 text-sm">AI Toxicity Flag — Action Required</h3>
                <p className="text-sm text-red-700 mt-1">{selectedEncounter.flags[0]}</p>
                <div className="mt-3 flex space-x-3">
                  <button
                    onClick={openChat}
                    className="bg-red-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-700 font-medium"
                  >
                    View Communication →
                  </button>
                  <button className="bg-white text-red-700 text-sm px-4 py-2 rounded-lg border border-red-300 hover:bg-red-50 font-medium">
                    Contact Caretaker
                  </button>
                  <button className="bg-white text-gray-600 text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 font-medium">
                    Escalate to Clinician
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 30-Day Encounter Timeline */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-5">
            30-Day Encounter Timeline
          </h3>
          <div className="relative">
            <div className="flex items-start justify-between">
              {steps.map((step, idx) => (
                <div key={step.number} className="flex flex-col items-center flex-1 relative">
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div
                      className={`absolute top-4 left-1/2 w-full h-0.5 ${
                        step.completed ? "bg-green-400" : "bg-gray-200"
                      }`}
                      style={{ transform: "translateX(0)" }}
                    />
                  )}
                  {/* Step circle */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 relative ${
                      step.completed
                        ? "bg-green-500 text-white"
                        : step.current
                        ? "bg-[#1e3a2f] text-white ring-4 ring-green-200"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.completed ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  {/* Label */}
                  <div className="mt-2 text-center px-1">
                    <p className={`text-xs font-medium leading-tight ${step.current ? "text-[#1e3a2f]" : step.completed ? "text-green-700" : "text-gray-400"}`}>
                      {step.label}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-tight">{step.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Encounter Info */}
        <div className="grid grid-cols-3 gap-5">
          {[
            { label: "Patient", value: `${selectedEncounter.patientName}, Age ${selectedEncounter.patientAge}` },
            { label: "Caretaker", value: selectedEncounter.caretakerName },
            { label: "Surgery Date", value: selectedEncounter.surgeryDate },
            { label: "Days Post-Op", value: selectedEncounter.daysSinceSurgery !== null ? `Day ${selectedEncounter.daysSinceSurgery} of 30` : "Pre-surgery" },
            { label: "Communication Channel", value: "Twilio Anonymous Proxy" },
            { label: "Messages in Encounter", value: selectedEncounter.messages.length.toString() },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</p>
              <p className="text-sm font-medium text-gray-900 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderChat = () => {
    if (!selectedEncounter) return null;
    const flaggedMsg = selectedEncounter.messages.find((m) => m.flagged);

    return (
      <div className="space-y-4">
        {/* Back */}
        <button
          onClick={() => setView("encounter")}
          className="flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Encounter
        </button>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Encounter Communication Log</h2>
            <p className="text-sm text-gray-400 mt-0.5">
              {selectedEncounter.patientName} ↔ {selectedEncounter.caretakerName} • All messages via Twilio anonymous proxy • 1 AI flag
            </p>
          </div>
          <span className="text-xs bg-red-100 text-red-700 border border-red-200 px-3 py-1.5 rounded-full font-medium">
            ⚠ Toxicity Flag Active
          </span>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Chat header */}
          <div className="bg-[#1e3a2f] px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-white text-sm font-medium">
                {selectedEncounter.patientName} (Patient) & {selectedEncounter.caretakerName} (Caretaker)
              </span>
            </div>
            <span className="text-green-300 text-xs">Read-only — Overseer view</span>
          </div>

          {/* Messages */}
          <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto bg-gray-50">
            {selectedEncounter.messages.map((msg) => (
              <div key={msg.id}>
                <div
                  className={`flex ${msg.sender === "caretaker" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-lg ${msg.sender === "caretaker" ? "items-end" : "items-start"} flex flex-col`}>
                    <span className="text-xs text-gray-400 mb-1 px-1">
                      {msg.senderName} · {msg.timestamp}
                    </span>
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.flagged
                          ? "bg-red-100 border-2 border-red-400 text-red-900"
                          : msg.sender === "caretaker"
                          ? "bg-[#1e3a2f] text-white"
                          : "bg-white border border-gray-200 text-gray-800"
                      }`}
                    >
                      {msg.text}
                      {msg.flagged && (
                        <div className="mt-1 flex items-center space-x-1">
                          <span className="text-red-500 text-xs font-semibold">⚠ AI Flag</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* AI Flag Reasoning Panel */}
                {msg.flagged && msg.aiFlag && (
                  <div className="mt-3 mx-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-600 text-sm">🤖</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
                          AI Toxicity Analysis
                        </p>
                        <p className="text-sm text-amber-900 leading-relaxed">{msg.aiFlag}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action bar */}
          <div className="px-6 py-4 border-t border-gray-200 bg-white flex items-center justify-between">
            <p className="text-xs text-gray-400">Overseer read-only access — messages sent via Twilio proxy</p>
            <div className="flex space-x-3">
              <button className="bg-[#1e3a2f] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#2d5040] font-medium">
                Contact Caretaker
              </button>
              <button className="bg-white text-gray-700 text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 font-medium">
                Escalate to Clinician
              </button>
              <button className="bg-white text-gray-500 text-sm px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 font-medium">
                Dismiss Flag
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {renderSidebar()}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              {view === "chat"
                ? "Communication Log"
                : view === "encounter" && selectedEncounter
                ? "Encounter Detail"
                : "Encounter Monitor"}
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {flaggedEncounters > 0 && (
              <div className="flex items-center space-x-2 bg-red-50 border border-red-200 rounded-lg px-3 py-1.5">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-700 text-sm font-medium">{flaggedEncounters} active flag</span>
              </div>
            )}
            <Link
              href="/demo"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← Demo Hub
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 px-8 py-6">
          {view === "dashboard" && renderDashboard()}
          {view === "encounter" && renderEncounterDetail()}
          {view === "chat" && renderChat()}
        </main>

        <footer className="px-8 py-3 border-t border-gray-200 bg-white">
          <p className="text-xs text-gray-400">
            Demo environment — sample data only. Communications routed via Twilio anonymous proxy. No real patient information.
          </p>
        </footer>
      </div>
    </div>
  );
}
