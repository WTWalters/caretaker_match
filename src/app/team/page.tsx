"use client";

import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
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

      {/* Team Content */}
      <main className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              CareTaker Match was founded by a team with deep experience in healthcare, medical devices,
              clinical practice, and technology. We're building the future of post-acute recovery.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Hamid Sabet - CEO */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl font-semibold text-gray-500">HS</div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-2">Hamid Sabet</h3>
              <p className="text-teal font-medium mb-4">CEO & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Healthcare and medical device executive with decades of experience bringing innovative solutions to market.
                Previously led commercial strategy for major orthopedic device companies including DePuy Synthes (Johnson & Johnson).
                Hamid brings deep relationships across healthcare systems, payers, and device manufacturers.
              </p>
            </div>

            {/* Tom Eickmann - Founder */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl font-semibold text-gray-500">TE</div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-2">Tom Eickmann, MD</h3>
              <p className="text-teal font-medium mb-4">Founder & Clinical Champion</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Board-certified orthopedic surgeon and the originator of the CareTaker Match concept.
                Dr. Eickmann developed the proprietary Modified RAPT clinical scoring algorithm that powers patient-volunteer matching.
                With decades of surgical experience and thousands of joint replacements, Tom saw firsthand how patients without home support
                face unnecessary nursing facility stays — and built CareTaker Match to fix it.
              </p>
            </div>

            {/* Vivek Mohan - Clinical Advisor */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl font-semibold text-gray-500">VM</div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-2">Vivek Mohan, MD</h3>
              <p className="text-teal font-medium mb-4">Clinical Advisor</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Board-certified orthopedic surgeon with extensive experience across joint replacement and surgical recovery protocols.
                Dr. Mohan provides clinical protocol validation, peer network access, and surgical workflow expertise to ensure
                CareTaker Match integrates seamlessly into clinical practice.
              </p>
            </div>

            {/* Whit Walters - CTO */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl font-semibold text-gray-500">WW</div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-2">Whit Walters</h3>
              <p className="text-teal font-medium mb-4">CTO & Technical Co-Founder</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Two-time CTO with 30+ years spanning data architecture, cloud platforms, AI/ML, and enterprise consulting.
                Holds five Google Cloud Professional certifications including ML Engineer and Data Engineer.
                Healthcare data background includes Blue Cross/Blue Shield, Welltok (HL7, HIPAA, EMR integration), and extensive experience with Epic interoperability.
                Built the CareTaker Match MVP and matching algorithm. Currently also serves as Field CTO at GigaOm Research.
              </p>
            </div>

            {/* Jay Swartz - Data Science */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl font-semibold text-gray-500">JS</div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-2">Jay Swartz</h3>
              <p className="text-teal font-medium mb-4">Head of Data Science</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Co-develops the CareTaker Match matching algorithm IP with the CTO.
                Leads ML model development for candidacy scoring and peer-caregiver matching.
                Brings actuarial analysis capability for payer evidence generation — critical for demonstrating value to
                Medicare, United Healthcare, and Kaiser Permanente.
              </p>
            </div>

          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-16">
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