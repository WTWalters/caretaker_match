"use client";

import Link from "next/link";

export default function MatchingStub() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#f5f0e3" }}>
      <div className="text-center max-w-sm">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#1e3a2f" }}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold italic mb-2" style={{ fontFamily: "Georgia, serif", color: "#1a1a1a" }}>Matching</h2>
        <p className="text-gray-500 text-sm mb-8">This step is coming soon. The matching engine pairs patients and volunteers based on procedure experience, geography, availability, and compatibility scores.</p>
        <Link href="/demo/commonspirit" className="text-sm font-medium hover:underline" style={{ color: "#1e3a2f" }}>
          ← Back to demo
        </Link>
      </div>
    </div>
  );
}
