"use client";

import { useState } from "react";
import Link from "next/link";

interface Patient {
  id: string;
  name: string;
  age: number;
  surgery: string;
  surgeryDate: string;
  raptScore: number;
  recommendation: string;
  status: 'pending_review' | 'approved' | 'needs_snf' | 'matched';
  riskFactors: string[];
  socialSupport: 'strong' | 'moderate' | 'limited' | 'minimal';
  familySupport: boolean;
  matchedVolunteer?: string;
}

interface Volunteer {
  id: string;
  name: string;
  age: number;
  experience: string;
  availability: string;
  matchScore: number;
  backgroundClear: boolean;
  lastActive: string;
}

const mockPatients: Patient[] = [
  {
    id: "P001",
    name: "Margaret Chen",
    age: 72,
    surgery: "Total Knee Replacement",
    surgeryDate: "2026-03-15",
    raptScore: 11,
    recommendation: "Good candidate for volunteer support",
    status: "pending_review",
    riskFactors: ["Diabetes", "Lives alone"],
    socialSupport: "limited",
    familySupport: false
  },
  {
    id: "P002",
    name: "Robert Johnson",
    age: 58,
    surgery: "Hip Replacement",
    surgeryDate: "2026-03-20",
    raptScore: 14,
    recommendation: "Excellent candidate for home recovery",
    status: "approved",
    riskFactors: [],
    socialSupport: "strong",
    familySupport: true,
    matchedVolunteer: "Sarah Thompson"
  },
  {
    id: "P003",
    name: "Dorothy Williams",
    age: 81,
    surgery: "Knee Replacement",
    surgeryDate: "2026-03-18",
    raptScore: 6,
    recommendation: "Consider short-term SNF",
    status: "needs_snf",
    riskFactors: ["Heart condition", "Blood thinners", "No family support"],
    socialSupport: "minimal",
    familySupport: false
  }
];

const mockVolunteers: Volunteer[] = [
  {
    id: "V001",
    name: "Sarah Thompson",
    age: 65,
    experience: "Hip replacement 2023, 5 patients helped",
    availability: "Weekdays, 10+ hrs/week",
    matchScore: 92,
    backgroundClear: true,
    lastActive: "2 hours ago"
  },
  {
    id: "V002",
    name: "Michael Rodriguez",
    age: 59,
    experience: "Knee replacement 2022, 3 patients helped",
    availability: "Flexible schedule, 15+ hrs/week",
    matchScore: 88,
    backgroundClear: true,
    lastActive: "1 day ago"
  },
  {
    id: "V003",
    name: "Janet Foster",
    age: 70,
    experience: "Shoulder surgery 2021, 8 patients helped",
    availability: "Weekends + evenings, 8 hrs/week",
    matchScore: 85,
    backgroundClear: true,
    lastActive: "3 hours ago"
  }
];

export default function ClinicianDemo() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'patients' | 'volunteers' | 'matching' | 'encounters'>('dashboard');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer | null>(null);
  const [showMatchingModal, setShowMatchingModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending_review': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'needs_snf': return 'bg-red-100 text-red-800';
      case 'matched': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRaptScoreColor = (score: number) => {
    if (score >= 14) return 'text-green-600';
    if (score >= 10) return 'text-blue-600';
    if (score >= 7) return 'text-yellow-600';
    if (score >= 5) return 'text-orange-600';
    return 'text-red-600';
  };

  const handleApproveMatch = (patientId: string, volunteerId: string) => {
    setShowMatchingModal(false);
    // In real app, this would update the backend
    console.log(`Approved match: Patient ${patientId} with Volunteer ${volunteerId}`);
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Patients</p>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Review</p>
              <p className="text-2xl font-semibold text-gray-900">7</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Matches</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-teal-100 rounded-lg">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg RAPT Score</p>
              <p className="text-2xl font-semibold text-gray-900">10.3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Assessments</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {mockPatients.slice(0, 3).map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{patient.name}</p>
                    <p className="text-sm text-gray-600">{patient.surgery}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-semibold ${getRaptScoreColor(patient.raptScore)}`}>
                      {patient.raptScore}/20
                    </p>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(patient.status)}`}>
                      {patient.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Active Volunteers</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {mockVolunteers.slice(0, 3).map((volunteer) => (
                <div key={volunteer.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{volunteer.name}</p>
                    <p className="text-sm text-gray-600">{volunteer.experience}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-600 font-medium">
                      {volunteer.matchScore}% match
                    </p>
                    <p className="text-xs text-gray-500">{volunteer.lastActive}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPatients = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Patient Assessments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Surgery</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RAPT Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockPatients.map((patient) => (
                <tr key={patient.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                      <div className="text-sm text-gray-500">Age {patient.age} • {patient.surgeryDate}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.surgery}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-lg font-semibold ${getRaptScoreColor(patient.raptScore)}`}>
                      {patient.raptScore}/20
                    </span>
                    <div className="text-xs text-gray-500 mt-1">{patient.recommendation}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(patient.status)}`}>
                      {patient.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button
                      onClick={() => setSelectedPatient(patient)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Review
                    </button>
                    {patient.status === 'approved' && !patient.matchedVolunteer && (
                      <button
                        onClick={() => {
                          setSelectedPatient(patient);
                          setActiveTab('matching');
                        }}
                        className="text-teal-600 hover:text-teal-900"
                      >
                        Match
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPatient && (
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Patient Details: {selectedPatient.name}</h3>
            <button
              onClick={() => setSelectedPatient(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Assessment Summary</h4>
              <div className="space-y-2 text-sm">
                <p><strong>RAPT Score:</strong> <span className={getRaptScoreColor(selectedPatient.raptScore)}>{selectedPatient.raptScore}/20</span></p>
                <p><strong>Recommendation:</strong> {selectedPatient.recommendation}</p>
                <p><strong>Social Support:</strong> {selectedPatient.socialSupport}</p>
                <p><strong>Family Available:</strong> {selectedPatient.familySupport ? 'Yes' : 'No'}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Risk Factors</h4>
              <div className="space-y-1">
                {selectedPatient.riskFactors.length > 0 ? (
                  selectedPatient.riskFactors.map((factor, index) => (
                    <span key={index} className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mr-2 mb-1">
                      {factor}
                    </span>
                  ))
                ) : (
                  <span className="text-green-600 text-sm">No significant risk factors</span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Approve for Matching
            </button>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">
              Request Additional Info
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Recommend SNF
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderEncounters = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Active Encounter Monitor</h3>
          <p className="text-sm text-gray-500 mt-1">Status overview — full communication details available to Overseer only</p>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            {
              patient: "Margaret Chen",
              caretaker: "Patricia Okafor",
              surgery: "Total Knee Replacement",
              daysSinceSurgery: null,
              status: "pending_meetup" as const,
              statusLabel: "Coffee Meet Pending",
              step: 5,
            },
            {
              patient: "Robert Johnson",
              caretaker: "Sarah Thompson",
              surgery: "Hip Replacement",
              daysSinceSurgery: 2,
              status: "active_green" as const,
              statusLabel: "Active — On Track",
              step: 6,
            },
            {
              patient: "Dorothy Williams",
              caretaker: "James Patterson",
              surgery: "Total Knee Replacement",
              daysSinceSurgery: 7,
              status: "active_red" as const,
              statusLabel: "Flag Raised — Contact Overseer",
              step: 7,
            },
          ].map((enc) => {
            const dotColor =
              enc.status === "active_green"
                ? "bg-green-500"
                : enc.status === "active_red"
                ? "bg-red-500 animate-pulse"
                : "bg-yellow-400";
            const badgeColor =
              enc.status === "active_green"
                ? "bg-green-100 text-green-800"
                : enc.status === "active_red"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800";

            return (
              <div key={enc.patient} className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className={`w-3 h-3 rounded-full flex-shrink-0 ${dotColor}`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {enc.patient} ↔ {enc.caretaker}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{enc.surgery}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Days Post-Op</p>
                    <p className="font-medium text-gray-900">
                      {enc.daysSinceSurgery !== null ? `Day ${enc.daysSinceSurgery}` : "Pre-surgery"}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Encounter Step</p>
                    <p className="font-medium text-gray-900">{enc.step} / 8</p>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>
                    {enc.statusLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
        <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p className="text-sm font-medium text-amber-800">Communication details are Overseer-only</p>
          <p className="text-xs text-amber-700 mt-1">
            All patient-caretaker messages route through Twilio anonymous proxy. The Overseer monitors for AI-flagged toxicity. If a flag is raised, contact the Overseer to review.
          </p>
        </div>
      </div>
    </div>
  );

  const renderMatching = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Patient-Volunteer Matching</h3>
          <p className="text-sm text-gray-600 mt-1">Review and approve suggested matches</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Patient Card */}
            <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
              <h4 className="font-semibold text-blue-900 mb-4">Patient: Margaret Chen</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Age:</strong> 72</p>
                <p><strong>Surgery:</strong> Total Knee Replacement</p>
                <p><strong>RAPT Score:</strong> <span className="text-blue-600 font-semibold">11/20</span></p>
                <p><strong>Location:</strong> Salt Lake City, UT</p>
                <p><strong>Needs:</strong> Transportation, companionship, meal prep</p>
                <p><strong>Availability Needed:</strong> Weekday mornings</p>
              </div>
            </div>

            {/* Volunteer Match */}
            <div className="border border-green-200 rounded-lg p-6 bg-green-50">
              <h4 className="font-semibold text-green-900 mb-4">Suggested Match: Sarah Thompson</h4>
              <div className="space-y-2 text-sm mb-4">
                <p><strong>Age:</strong> 65</p>
                <p><strong>Experience:</strong> Hip replacement 2023, 5 patients helped</p>
                <p><strong>Match Score:</strong> <span className="text-green-600 font-semibold">92%</span></p>
                <p><strong>Location:</strong> 3.2 miles away</p>
                <p><strong>Available:</strong> Weekdays, 10+ hrs/week</p>
                <p><strong>Background:</strong> ✅ Clear</p>
              </div>

              <div className="bg-green-100 p-3 rounded-lg">
                <h5 className="font-medium text-green-800 mb-2">Why this match?</h5>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Similar age demographic (65 vs 72)</li>
                  <li>• Previous knee/hip surgery experience</li>
                  <li>• Lives nearby (3.2 miles)</li>
                  <li>• Available during needed hours</li>
                  <li>• High volunteer rating (4.9/5)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={() => handleApproveMatch("P001", "V001")}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium"
            >
              Approve Match
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 font-medium">
              See Other Options
            </button>
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 font-medium">
              Schedule Meet & Greet
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Match History</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
            <span className="text-sm">Robert Johnson ↔ Michael Rodriguez</span>
            <span className="text-xs text-green-600 font-medium">Active - Day 5 of 30</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
            <span className="text-sm">Betty Anderson ↔ Janet Foster</span>
            <span className="text-xs text-blue-600 font-medium">Meet & Greet Scheduled</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* iPad Frame Effect */}
      <div className="max-w-5xl mx-auto p-4">
        <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
          {/* iPad Header */}
          <div className="bg-white rounded-t-xl px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Link href="/demo" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Demo Hub
              </Link>

              <div className="text-center">
                <h1 className="text-xl font-serif font-bold text-gray-800">CareTaker Match</h1>
                <p className="text-sm text-gray-600">Clinician Dashboard</p>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Dr. Eickmann</span>
              </div>
            </div>
          </div>

          {/* iPad Navigation */}
          <div className="bg-white px-6 py-2 border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z' },
                { id: 'patients', label: 'Patients', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                { id: 'matching', label: 'Matching', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
                { id: 'encounters', label: 'Encounters', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-3 px-2 border-b-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-gray-800 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                  </svg>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* iPad Content Area */}
          <div className="bg-gray-50 rounded-b-xl p-6 min-h-96">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'patients' && renderPatients()}
            {activeTab === 'matching' && renderMatching()}
            {activeTab === 'encounters' && renderEncounters()}
          </div>

          {/* iPad Bottom Bar */}
          <div className="bg-gray-800 rounded-b-2xl p-2 flex justify-center">
            <div className="w-32 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}