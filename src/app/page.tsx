"use client";

import Image from "next/image";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.webp"
            alt="Elderly woman with younger caregiver companion in home setting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)' }}>
              CareTaker Match
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-6">
              Connecting Care with Compassion
            </p>
          </div>

          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Matching vetted peer volunteers with recovering surgical patients — because nobody should go home alone.
          </p>

          <button
            onClick={() => scrollToSection('mission')}
            className="bg-teal hover:bg-teal-700 text-white font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8">
            Recovery Is Better Together
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Every year, thousands of surgical patients are sent to expensive nursing facilities — not because they can't recover at home, but because they have no one to help. CareTaker Match bridges that gap by connecting these patients with trained, vetted peer volunteers who've been through similar surgeries. It's not just healthcare — it's human connection.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">1 in 5</div>
              <p className="text-gray-600">surgical patients lack home support</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">$23K+</div>
              <p className="text-gray-600">average SNF stay that could be avoided</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">30-day</div>
              <p className="text-gray-600">recovery window under CMS TEAM</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy text-center mb-16">
            How CareTaker Match Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-4">Match</h3>
              <p className="text-gray-600 leading-relaxed">
                Our algorithm matches patients with volunteers based on procedure type, proximity, and compatibility.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-4">Meet</h3>
              <p className="text-gray-600 leading-relaxed">
                Patient and volunteer meet over a sponsored coffee before surgery. No commitment, no personal info shared.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-4">Recover</h3>
              <p className="text-gray-600 leading-relaxed">
                The volunteer supports the patient's 30-day recovery with check-ins, rides, and companionship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
            Coming Soon
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            CareTaker Match is currently in development with pilot programs planned at leading health systems.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/80 mb-4">© 2026 CareTaker Match, Inc.</p>
          <div className="space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/40">|</span>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}