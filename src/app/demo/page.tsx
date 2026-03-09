"use client";

import Image from "next/image";
import Link from "next/link";

export default function DemoHub() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center">
          <Link href="/" className="flex items-center text-navy hover:text-teal transition-colors">
            <h1 className="text-2xl font-serif font-bold">CareTaker Match</h1>
          </Link>
        </div>
      </header>

      {/* Demo Hub Content */}
      <main className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              Interactive Product Demo
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Select a persona to experience CareTaker Match from different perspectives.
              Each demo showcases the complete workflow for that user type.
            </p>
          </div>

          {/* Demo Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Original Tom Demo */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy text-center mb-4">
                Original Patient Demo
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Experience the original patient intake workflow built for Tom, featuring the initial algorithm and assessment flow.
              </p>
              <div className="text-center">
                <Link
                  href="/demo/original"
                  className="inline-block bg-coral hover:bg-coral-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Launch Original Demo
                </Link>
              </div>
            </div>

            {/* New Volunteer Demo */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy text-center mb-4">
                Volunteer Journey
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Experience the volunteer workflow from signup through recovery support with updated matching algorithms.
              </p>
              <div className="text-center">
                <Link
                  href="/demo/volunteer"
                  className="inline-block bg-teal hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Launch Volunteer Demo
                </Link>
              </div>
            </div>

            {/* New Patient Demo */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy text-center mb-4">
                Patient Journey
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Experience the updated patient journey from intake through recovery with Tom's latest algorithm enhancements.
              </p>
              <div className="text-center">
                <Link
                  href="/demo/patient"
                  className="inline-block bg-navy hover:bg-navy-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Launch Patient Demo
                </Link>
              </div>
            </div>

            {/* Clinician Demo */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy text-center mb-4">
                Clinician Workflow
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Experience the clinician's iPad workflow for discharge planning and patient-volunteer matching oversight.
              </p>
              <div className="text-center">
                <Link
                  href="/demo/clinician"
                  className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Launch Clinician Demo
                </Link>
              </div>
            </div>

          </div>

          {/* Architecture Diagram Section */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal to-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-4">
                System Architecture
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
                Explore the complete technical architecture powering CareTaker Match, from frontend interfaces to backend services and HIPAA-compliant infrastructure.
              </p>
              <Link
                href="/demo/architecture"
                className="inline-block bg-gradient-to-r from-teal to-navy hover:from-teal-700 hover:to-navy-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                View Architecture Diagram
              </Link>
            </div>
          </div>

          {/* Demo Info */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              <strong>Demo Environment:</strong> These are demonstration environments with sample data.
              No real patient information is used.
            </p>
            <p className="text-sm text-gray-500">Demo v1.0 — March 2026</p>
          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center text-teal hover:text-teal-700 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to CareTaker Match
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}