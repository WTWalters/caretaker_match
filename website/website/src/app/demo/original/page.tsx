"use client";

import { useState } from "react";
import Link from "next/link";
import { IntakeData, initialIntakeData, WalkingDistance, AssistiveDevice, AgeRange, Gender } from "@/types/intake";

export default function OriginalDemo() {
  const [data, setData] = useState<IntakeData>(initialIntakeData);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Family Support",
    "Mobility Assessment",
    "Demographics",
    "Health Assessment",
    "Contact Information",
    "Summary"
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

  const updateData = (updates: Partial<IntakeData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Family Support Assessment</h2>
            <p className="text-gray-600 mb-6">Do you have family or friends available to help with your recovery?</p>

            <div className="space-y-4">
              <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="familySupport"
                  checked={data.hasFamilySupport === true}
                  onChange={() => updateData({ hasFamilySupport: true })}
                  className="text-teal focus:ring-teal"
                />
                <span className="text-gray-700">Yes, I have family/friends available</span>
              </label>

              <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="familySupport"
                  checked={data.hasFamilySupport === false}
                  onChange={() => updateData({ hasFamilySupport: false })}
                  className="text-teal focus:ring-teal"
                />
                <span className="text-gray-700">No, I need help finding support</span>
              </label>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Mobility Assessment</h2>

            <div>
              <p className="text-gray-600 mb-4">How far can you walk without stopping to rest?</p>
              <div className="space-y-3">
                {[
                  { value: 'more_than_2_blocks', label: 'More than 2 blocks' },
                  { value: '1_block', label: 'About 1 block' },
                  { value: 'less_than_1_block', label: 'Less than 1 block' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="walkingDistance"
                      checked={data.walkingDistance === option.value}
                      onChange={() => updateData({ walkingDistance: option.value as WalkingDistance })}
                      className="text-teal focus:ring-teal"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-600 mb-4">Do you currently use any walking aids?</p>
              <div className="space-y-3">
                {[
                  { value: 'none', label: 'None' },
                  { value: 'cane', label: 'Cane' },
                  { value: 'walker', label: 'Walker' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="assistiveDevice"
                      checked={data.assistiveDevice === option.value}
                      onChange={() => updateData({ assistiveDevice: option.value as AssistiveDevice })}
                      className="text-teal focus:ring-teal"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Demographics</h2>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => updateData({ name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-3">Age Range</p>
              <div className="space-y-3">
                {[
                  { value: 'under_65', label: 'Under 65' },
                  { value: '65_to_75', label: '65 to 75' },
                  { value: 'over_75', label: 'Over 75' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="ageRange"
                      checked={data.ageRange === option.value}
                      onChange={() => updateData({ ageRange: option.value as AgeRange })}
                      className="text-teal focus:ring-teal"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Health Assessment</h2>

            <div>
              <p className="text-gray-600 mb-4">Do you currently smoke?</p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="smoker"
                    checked={data.smoker === false}
                    onChange={() => updateData({ smoker: false })}
                    className="text-teal focus:ring-teal"
                  />
                  <span className="text-gray-700">No</span>
                </label>

                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="smoker"
                    checked={data.smoker === true}
                    onChange={() => updateData({ smoker: true })}
                    className="text-teal focus:ring-teal"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
              </div>
            </div>

            <div>
              <p className="text-gray-600 mb-4">Are you willing to provide care to others in return?</p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="willingToGiveCare"
                    checked={data.willingToGiveCare === true}
                    onChange={() => updateData({ willingToGiveCare: true })}
                    className="text-teal focus:ring-teal"
                  />
                  <span className="text-gray-700">Yes, I would like to help others too</span>
                </label>

                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="willingToGiveCare"
                    checked={data.willingToGiveCare === false}
                    onChange={() => updateData({ willingToGiveCare: false })}
                    className="text-teal focus:ring-teal"
                  />
                  <span className="text-gray-700">No, I just need help for now</span>
                </label>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Contact Information</h2>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Address</label>
              <input
                type="text"
                value={data.address.line1}
                onChange={(e) => updateData({ address: { ...data.address, line1: e.target.value } })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent mb-3"
                placeholder="Street address"
              />
              <input
                type="text"
                value={data.address.line2 || ''}
                onChange={(e) => updateData({ address: { ...data.address, line2: e.target.value } })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                placeholder="Apartment, suite, etc. (optional)"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => updateData({ phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => updateData({ email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Assessment Summary</h2>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Family Support</h3>
                  <p className="text-gray-600">
                    {data.hasFamilySupport === true ? 'Has family/friends available' :
                     data.hasFamilySupport === false ? 'Needs support matching' : 'Not answered'}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Mobility</h3>
                  <p className="text-gray-600">
                    {data.walkingDistance || 'Not specified'} | {data.assistiveDevice || 'Not specified'}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Demographics</h3>
                  <p className="text-gray-600">
                    {data.name || 'Name not provided'} | {data.ageRange || 'Age not specified'}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Reciprocity</h3>
                  <p className="text-gray-600">
                    {data.willingToGiveCare === true ? 'Willing to help others' :
                     data.willingToGiveCare === false ? 'Needs care only' : 'Not specified'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-teal-800 mb-2">Demo Complete!</h3>
              <p className="text-teal-700">
                This demonstrates the original patient intake workflow built for Tom's initial algorithm.
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

          <h1 className="text-xl font-serif font-bold text-navy">Original Patient Demo</h1>

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
        <div className="max-w-2xl mx-auto">
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
                Next
              </button>
            ) : (
              <Link
                href="/demo"
                className="px-6 py-3 bg-coral hover:bg-coral-600 text-white rounded-lg transition-colors"
              >
                Back to Demo Hub
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}