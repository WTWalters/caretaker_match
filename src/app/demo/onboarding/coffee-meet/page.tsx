"use client";

import Link from "next/link";

export default function CoffeeMeetStub() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#f5f0e3" }}>
      <div className="text-center max-w-sm">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#1e3a2f" }}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .23 2.698-1.15 2.698H3.948c-1.379 0-2.15-1.698-1.15-2.698L4 15.3" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold italic mb-2" style={{ fontFamily: "Georgia, serif", color: "#1a1a1a" }}>Coffee Meet</h2>
        <p className="text-gray-500 text-sm mb-8">This step is coming soon. Before surgery, the matched patient and volunteer meet for coffee — a low-key, no-commitment introduction to make sure the connection feels right.</p>
        <Link href="/demo/commonspirit" className="text-sm font-medium hover:underline" style={{ color: "#1e3a2f" }}>
          ← Back to demo
        </Link>
      </div>
    </div>
  );
}
