"use client";

import { useState } from "react";
import Link from "next/link";

interface VolunteerData {
  // Personal Info
  name: string;
  email: string;
  phone: string;
  address: string;
  age: string;

  // Experience
  hasRecoveryExperience: boolean | null;
  surgeryType: string;
  recoveryYear: string;
  caregiverExperience: boolean | null;

  // Availability
  availability: string[];
  timeCommitment: string;
  travelDistance: string;

  // Preferences
  genderPreference: string;
  agePreference: string;
  surgeryPreferences: string[];

  // Background
  backgroundCheckConsent: boolean;
  references: string;
  motivation: string;
}

const initialData: VolunteerData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  age: '',
  hasRecoveryExperience: null,
  surgeryType: '',
  recoveryYear: '',
  caregiverExperience: null,
  availability: [],
  timeCommitment: '',
  travelDistance: '',
  genderPreference: '',
  agePreference: '',
  surgeryPreferences: [],
  backgroundCheckConsent: false,
  references: '',
  motivation: ''
};

export default function VolunteerDemo() {
  const [data, setData] = useState<VolunteerData>(initialData);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Welcome",
    "Personal Information",
    "Recovery Experience",
    "Availability & Commitment",
    "Matching Preferences",
    "Background & References",
    "Application Summary"
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateData = (updates: Partial<VolunteerData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const toggleArrayValue = (array: string[], value: string, field: keyof VolunteerData) => {
    const newArray = array.includes(value)
      ? array.filter(item => item !== value)
      : [...array, value];
    updateData({ [field]: newArray });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>

            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Welcome, Future Caregiver!</h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
              Thank you for your interest in becoming a CareTaker Match volunteer. Your willingness to help others during their recovery journey makes all the difference.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-teal-800 mb-3">What You'll Do as a Volunteer:</h3>
              <ul className="text-teal-700 space-y-2 text-left max-w-md mx-auto">
                <li>• Provide companionship during 30-day recovery period</li>
                <li>• Help with transportation to appointments</li>
                <li>• Assist with basic daily activities</li>
                <li>• Share your own recovery experience and wisdom</li>
                <li>• Participate in sponsored meet-and-greet before commitment</li>
              </ul>
            </div>

            <p className="text-gray-600">
              This application takes about 10 minutes to complete.
            </p>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Personal Information</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => updateData({ name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Age *</label>
                <select
                  value={data.age}
                  onChange={(e) => updateData({ age: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                >
                  <option value="">Select age range</option>
                  <option value="18-30">18-30</option>
                  <option value="31-50">31-50</option>
                  <option value="51-65">51-65</option>
                  <option value="66-75">66-75</option>
                  <option value="75+">75+</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateData({ email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => updateData({ phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Address *</label>
              <input
                type="text"
                value={data.address}
                onChange={(e) => updateData({ address: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                placeholder="Street address, City, State, ZIP"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Your Recovery Experience</h2>

            <div>
              <p className="text-gray-700 font-medium mb-4">Have you personally undergone a surgical recovery? *</p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="hasRecoveryExperience"
                    checked={data.hasRecoveryExperience === true}
                    onChange={() => updateData({ hasRecoveryExperience: true })}
                    className="text-teal focus:ring-teal"
                  />
                  <span className="text-gray-700">Yes, I have personal surgical recovery experience</span>
                </label>

                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="hasRecoveryExperience"
                    checked={data.hasRecoveryExperience === false}
                    onChange={() => updateData({ hasRecoveryExperience: false })}
                    className="text-teal focus:ring-teal"
                  />
                  <span className="text-gray-700">No, but I want to help others in their recovery</span>
                </label>
              </div>
            </div>

            {data.hasRecoveryExperience && (
              <div className="grid md:grid-cols-2 gap-6 border-t pt-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">What type of surgery?</label>
                  <input
                    type="text"
                    value={data.surgeryType}
                    onChange={(e) => updateData({ surgeryType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    placeholder="e.g., knee replacement, hip replacement"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">What year?</label>
                  <input
                    type="text"
                    value={data.recoveryYear}
                    onChange={(e) => updateData({ recoveryYear: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    placeholder="e.g., 2022"
                  />
                </div>
              </div>
            )}

            <div>
              <p className="text-gray-700 font-medium mb-4">Have you provided care for someone else during recovery? *</p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="caregiverExperience"
                    checked={data.caregiverExperience === true}
                    onChange={() => updateData({ caregiverExperience: true })}
                    className="text-teal focus:ring-teal"
                  />
                  <span className="text-gray-700">Yes, I have caregiver experience</span>
                </label>

                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="caregiverExperience"
                    checked={data.caregiverExperience === false}
                    onChange={() => updateData({ caregiverExperience: false })}
                    className="text-teal focus:ring-teal"
                  />
                  <span className="text-gray-700">No, this would be my first time as a caregiver</span>
                </label>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Availability & Commitment</h2>

            <div>
              <p className="text-gray-700 font-medium mb-4">When are you typically available? *</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Weekday mornings', 'Weekday afternoons', 'Weekday evenings', 'Weekend mornings', 'Weekend afternoons', 'Weekend evenings'].map((time) => (
                  <label key={time} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={data.availability.includes(time)}
                      onChange={() => toggleArrayValue(data.availability, time, 'availability')}
                      className="text-teal focus:ring-teal"
                    />
                    <span className="text-sm text-gray-700">{time}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">How much time can you commit per week? *</p>
              <div className="space-y-3">
                {[
                  '2-4 hours per week',
                  '5-8 hours per week',
                  '9-15 hours per week',
                  '16+ hours per week (extensive support)'
                ].map((commitment) => (
                  <label key={commitment} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="timeCommitment"
                      checked={data.timeCommitment === commitment}
                      onChange={() => updateData({ timeCommitment: commitment })}
                      className="text-teal focus:ring-teal"
                    />
                    <span className="text-gray-700">{commitment}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">How far are you willing to travel to help? *</p>
              <div className="space-y-3">
                {[
                  'Within 5 miles',
                  'Within 10 miles',
                  'Within 20 miles',
                  'Within 30 miles',
                  'Distance is not a concern'
                ].map((distance) => (
                  <label key={distance} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="travelDistance"
                      checked={data.travelDistance === distance}
                      onChange={() => updateData({ travelDistance: distance })}
                      className="text-teal focus:ring-teal"
                    />
                    <span className="text-gray-700">{distance}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Matching Preferences</h2>

            <div>
              <p className="text-gray-700 font-medium mb-4">Do you have a preference for the gender of patients you help?</p>
              <div className="space-y-3">
                {['No preference', 'Prefer to help women', 'Prefer to help men'].map((pref) => (
                  <label key={pref} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="genderPreference"
                      checked={data.genderPreference === pref}
                      onChange={() => updateData({ genderPreference: pref })}
                      className="text-teal focus:ring-teal"
                    />
                    <span className="text-gray-700">{pref}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">Do you have an age preference for patients you help?</p>
              <div className="space-y-3">
                {[
                  'No preference',
                  'Prefer helping young adults (18-40)',
                  'Prefer helping middle-aged adults (40-65)',
                  'Prefer helping seniors (65+)'
                ].map((pref) => (
                  <label key={pref} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="agePreference"
                      checked={data.agePreference === pref}
                      onChange={() => updateData({ agePreference: pref })}
                      className="text-teal focus:ring-teal"
                    />
                    <span className="text-gray-700">{pref}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">Which surgery types are you most comfortable helping with?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Knee replacement',
                  'Hip replacement',
                  'Shoulder surgery',
                  'Spine surgery',
                  'General orthopedic',
                  'Any surgery type'
                ].map((surgery) => (
                  <label key={surgery} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={data.surgeryPreferences.includes(surgery)}
                      onChange={() => toggleArrayValue(data.surgeryPreferences, surgery, 'surgeryPreferences')}
                      className="text-teal focus:ring-teal"
                    />
                    <span className="text-gray-700">{surgery}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Background & References</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Background Check Required</h3>
              <p className="text-blue-700 mb-4">
                For the safety of all participants, CareTaker Match requires a background check for all volunteers.
                This is provided at no cost to you.
              </p>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.backgroundCheckConsent}
                  onChange={(e) => updateData({ backgroundCheckConsent: e.target.checked })}
                  className="text-teal focus:ring-teal mt-1"
                />
                <span className="text-blue-700">
                  I consent to a background check and understand this is required to volunteer *
                </span>
              </label>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Personal References</label>
              <p className="text-gray-600 text-sm mb-3">
                Please provide contact information for 2-3 personal references (friends, family, colleagues, etc.)
              </p>
              <textarea
                value={data.references}
                onChange={(e) => updateData({ references: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
                placeholder="Example:&#10;Jane Smith (friend) - jane@email.com - (555) 123-4567&#10;Dr. Robert Jones (former colleague) - rjones@clinic.com - (555) 987-6543"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">What motivates you to volunteer? *</label>
              <p className="text-gray-600 text-sm mb-3">
                Tell us about your motivation for becoming a CareTaker Match volunteer
              </p>
              <textarea
                value={data.motivation}
                onChange={(e) => updateData({ motivation: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
                placeholder="Share your personal story and motivation for helping others during recovery..."
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Application Summary</h2>

            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Personal Information</h3>
                  <div className="text-gray-600 space-y-1">
                    <p><strong>Name:</strong> {data.name || 'Not provided'}</p>
                    <p><strong>Age:</strong> {data.age || 'Not specified'}</p>
                    <p><strong>Email:</strong> {data.email || 'Not provided'}</p>
                    <p><strong>Phone:</strong> {data.phone || 'Not provided'}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Experience</h3>
                  <div className="text-gray-600 space-y-1">
                    <p><strong>Personal Recovery:</strong> {
                      data.hasRecoveryExperience === true ? `Yes (${data.surgeryType} in ${data.recoveryYear})` :
                      data.hasRecoveryExperience === false ? 'No personal experience' : 'Not specified'
                    }</p>
                    <p><strong>Caregiver Experience:</strong> {
                      data.caregiverExperience === true ? 'Yes' :
                      data.caregiverExperience === false ? 'No' : 'Not specified'
                    }</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Availability</h3>
                  <div className="text-gray-600 space-y-1">
                    <p><strong>Time Commitment:</strong> {data.timeCommitment || 'Not specified'}</p>
                    <p><strong>Travel Distance:</strong> {data.travelDistance || 'Not specified'}</p>
                    <p><strong>Available Times:</strong> {data.availability.length > 0 ? data.availability.join(', ') : 'Not specified'}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Preferences</h3>
                  <div className="text-gray-600 space-y-1">
                    <p><strong>Gender Preference:</strong> {data.genderPreference || 'Not specified'}</p>
                    <p><strong>Age Preference:</strong> {data.agePreference || 'Not specified'}</p>
                    <p><strong>Surgery Types:</strong> {data.surgeryPreferences.length > 0 ? data.surgeryPreferences.join(', ') : 'Not specified'}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Background Check</h3>
                <p className="text-gray-600">
                  {data.backgroundCheckConsent ?
                    '✓ Consented to required background check' :
                    '❌ Background check consent required'
                  }
                </p>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-teal-800 mb-2">Next Steps</h3>
              <div className="text-teal-700 space-y-2">
                <p>1. Background check processing (2-3 business days)</p>
                <p>2. Reference verification</p>
                <p>3. Brief orientation call with CareTaker Match team</p>
                <p>4. Addition to volunteer matching pool</p>
                <p>5. Notification when matched with a patient</p>
              </div>
            </div>

            <div className="text-center bg-white border-2 border-teal-200 rounded-lg p-6">
              <h3 className="font-semibold text-navy mb-2">Thank You for Your Application!</h3>
              <p className="text-gray-600">
                Your willingness to help others during their recovery journey is truly appreciated.
                We'll be in touch within 2-3 business days.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-6 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/demo" className="flex items-center text-navy hover:text-teal transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Demo Hub
          </Link>

          <h1 className="text-xl font-serif font-bold text-navy">Volunteer Application</h1>

          <div className="text-sm text-gray-500">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Progress:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-teal h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-600">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-teal hover:bg-teal-700 text-white rounded-lg transition-colors"
              >
                {currentStep === 0 ? 'Start Application' : 'Next'}
              </button>
            ) : (
              <Link
                href="/demo"
                className="px-6 py-3 bg-teal hover:bg-teal-700 text-white rounded-lg transition-colors"
              >
                Complete Application
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}