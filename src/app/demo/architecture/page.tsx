"use client";

import Image from "next/image";
import Link from "next/link";

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-navy">CareTaker Match</h1>
              <p className="text-lg text-gray-600 mt-1">System Architecture</p>
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

      {/* Architecture Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-navy mb-4">
              CareTaker Match Platform Architecture
            </h2>
            <p className="text-gray-600 mb-4">
              Comprehensive system design for the peer-to-peer caregiver matching platform,
              showing the complete technology stack, data flow, and integration points.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full">
                HIPAA Compliant
              </span>
              <span className="bg-navy-50 text-navy px-3 py-1 rounded-full">
                Scalable Cloud Architecture
              </span>
              <span className="bg-coral-50 text-coral px-3 py-1 rounded-full">
                Real-time Matching
              </span>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="p-6">
            <div className="relative bg-gray-50 rounded-lg p-4">
              <Image
                src="/architecture-diagram.png"
                alt="CareTaker Match System Architecture Diagram"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            {/* Diagram Details */}
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend Layer */}
              <div className="bg-teal-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-teal-800 mb-2">
                  Frontend Layer
                </h3>
                <ul className="text-sm text-teal-700 space-y-1">
                  <li>• React/TypeScript PWA</li>
                  <li>• iPad-optimized interface</li>
                  <li>• Responsive design system</li>
                  <li>• Offline capability</li>
                </ul>
              </div>

              {/* Backend Services */}
              <div className="bg-navy-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Backend Services
                </h3>
                <ul className="text-sm text-navy space-y-1">
                  <li>• Node.js/Express API</li>
                  <li>• Authentication & authorization</li>
                  <li>• Matching algorithm engine</li>
                  <li>• Background check integration</li>
                </ul>
              </div>

              {/* Data & Security */}
              <div className="bg-coral-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-coral mb-2">
                  Data & Security
                </h3>
                <ul className="text-sm text-coral space-y-1">
                  <li>• PostgreSQL with encryption</li>
                  <li>• HIPAA-compliant hosting</li>
                  <li>• End-to-end encryption</li>
                  <li>• Audit logging</li>
                </ul>
              </div>

              {/* Integration Layer */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  External Integrations
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• EHR systems (HL7 FHIR)</li>
                  <li>• Background check services</li>
                  <li>• Payment processing</li>
                  <li>• Communication APIs</li>
                </ul>
              </div>

              {/* Infrastructure */}
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Cloud Infrastructure
                </h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Google Cloud Platform</li>
                  <li>• Auto-scaling containers</li>
                  <li>• CDN for global delivery</li>
                  <li>• Monitoring & alerting</li>
                </ul>
              </div>

              {/* Compliance */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  Compliance & Quality
                </h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• HIPAA BAA agreements</li>
                  <li>• SOC 2 Type II compliance</li>
                  <li>• Regular security audits</li>
                  <li>• Disaster recovery</li>
                </ul>
              </div>
            </div>

            {/* Download Options */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Download Architecture Diagram
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/architecture-diagram.png"
                  download="CareTaker_Match_Architecture.png"
                  className="inline-flex items-center px-4 py-2 bg-teal text-white rounded-md hover:bg-teal-dark transition-colors"
                >
                  Download PNG
                </a>
                <a
                  href="/architecture-diagram.svg"
                  download="CareTaker_Match_Architecture.svg"
                  className="inline-flex items-center px-4 py-2 bg-navy text-white rounded-md hover:bg-navy-dark transition-colors"
                >
                  Download SVG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}