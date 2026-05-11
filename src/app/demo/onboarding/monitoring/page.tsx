"use client";

import Link from "next/link";

export default function MonitoringStub() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#f5f0e3" }}>
      <div className="text-center max-w-sm">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#1e3a2f" }}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h4l2.5-7 4 14 2.5-7H20" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold italic mb-2" style={{ fontFamily: "Georgia, serif", color: "#1a1a1a" }}>Monitoring</h2>
        <p className="text-gray-500 text-sm mb-8">This step is coming soon. During the 30-day recovery window, CaretakerMatch monitors all communications for safety, flags concerns to the Overseer, and tracks recovery milestones.</p>
        <Link href="/demo/commonspirit" className="text-sm font-medium hover:underline" style={{ color: "#1e3a2f" }}>
          ← Back to demo
        </Link>
      </div>
    </div>
  );
}
