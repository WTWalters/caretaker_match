"use client";

import { useState } from "react";
import Link from "next/link";

interface PatientData {
  // Procedure Information
  surgeryType: string;
  surgeryDate: string;
  surgeon: string;
  hospital: string;

  // Family Support Assessment
  hasFamilySupport: boolean | null;
  familyDetails: string;

  // Enhanced Mobility Assessment (Modified RAPT)
  walkingDistance: string;
  assistiveDevice: string;
  stairClimbing: string;
  homeLayout: string;

  // Demographics
  name: string;
  age: string;
  gender: string;
  address: string;
  phone: string;
  email: string;

  // Health & Risk Factors
  smoker: boolean | null;
  alcoholPerDay: string;
  bmi: string;
  bloodThinners: boolean | null;
  heartConditions: boolean | null;
  diabetic: boolean | null;

  // Social & Support Assessment
  livingSituation: string;
  transportation: string;
  socialSupport: string;
  previousSurgeries: boolean | null;

  // Reciprocity Assessment
  willingToGiveCare: boolean | null;
  interestLevel: string;
  timeAvailability: string;

  // Home Recovery Readiness
  homeModifications: string[];
  recoveryEquipment: string[];
  caregiverNeeds: string[];

  // Risk Score & Recommendation
  raptScore: number;
  recommendedCare: string;
}

const initialData: PatientData = {
  surgeryType: '',
  surgeryDate: '',
  surgeon: '',
  hospital: '',
  hasFamilySupport: null,
  familyDetails: '',
  walkingDistance: '',
  assistiveDevice: '',
  stairClimbing: '',
  homeLayout: '',
  name: '',
  age: '',
  gender: '',
  address: '',
  phone: '',
  email: '',
  smoker: null,
  alcoholPerDay: '',
  bmi: '',
  bloodThinners: null,
  heartConditions: null,
  diabetic: null,
  livingSituation: '',
  transportation: '',
  socialSupport: '',
  previousSurgeries: null,
  willingToGiveCare: null,
  interestLevel: '',
  timeAvailability: '',
  homeModifications: [],
  recoveryEquipment: [],
  caregiverNeeds: [],
  raptScore: 0,
  recommendedCare: ''
};

export default function PatientDemo() {
  const [data, setData] = useState<PatientData>(initialData);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Surgery Information",
    "Family Support Screen",
    "Enhanced Mobility Assessment",
    "Personal Information",
    "Health Risk Assessment",
    "Social Support Evaluation",
    "Home Recovery Planning",
    "Modified RAPT Results"
  ];

  const handleNext = () => {
    if (currentStep === 6) {
      // Calculate RAPT score before showing results
      calculateRAPTScore();
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateData = (updates: Partial<PatientData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const toggleArrayValue = (array: string[], value: string, field: keyof PatientData) => {
    const newArray = array.includes(value)
      ? array.filter(item => item !== value)
      : [...array, value];
    updateData({ [field]: newArray });
  };

  // Enhanced RAPT Score Calculation (Tom's Updated Algorithm)
  const calculateRAPTScore = () => {
    let score = 0;

    // Age scoring (enhanced)
    if (data.age === '18-50') score += 4;
    else if (data.age === '51-65') score += 3;
    else if (data.age === '66-75') score += 2;
    else if (data.age === '76-85') score += 1;
    // 85+ gets 0 points

    // Gender scoring
    if (data.gender === 'male') score += 1;

    // Walking distance (core RAPT component)
    if (data.walkingDistance === 'more_than_2_blocks') score += 3;
    else if (data.walkingDistance === '1_to_2_blocks') score += 2;
    else if (data.walkingDistance === 'less_than_1_block') score += 1;

    // Stair climbing (enhanced assessment)
    if (data.stairClimbing === 'no_difficulty') score += 3;
    else if (data.stairClimbing === 'some_difficulty') score += 2;
    else if (data.stairClimbing === 'significant_difficulty') score += 1;

    // Home layout consideration (new factor)
    if (data.homeLayout === 'single_level') score += 2;
    else if (data.homeLayout === 'bedroom_main_floor') score += 1;

    // Health risk factors (enhanced)
    if (data.smoker === false) score += 1;
    if (data.bloodThinners === false) score += 1;
    if (data.heartConditions === false) score += 1;
    if (data.diabetic === false) score += 1;

    // Social support (new major factor)
    if (data.hasFamilySupport === true) score += 3;
    if (data.socialSupport === 'strong') score += 2;
    else if (data.socialSupport === 'moderate') score += 1;

    // Previous surgery experience
    if (data.previousSurgeries === true) score += 1;

    // Living situation
    if (data.livingSituation === 'live_with_others') score += 2;
    else if (data.livingSituation === 'live_alone_nearby_support') score += 1;

    // Determine recommendation based on enhanced scoring
    let recommendation = '';
    if (score >= 14) {
      recommendation = 'Excellent candidate for home recovery with minimal support';
    } else if (score >= 10) {
      recommendation = 'Good candidate for home recovery with volunteer support';
    } else if (score >= 7) {
      recommendation = 'Home recovery possible with intensive volunteer support';
    } else if (score >= 5) {
      recommendation = 'Consider short-term SNF with transition to home';
    } else {
      recommendation = 'SNF recommended for safety and optimal recovery';
    }

    updateData({
      raptScore: score,
      recommendedCare: recommendation
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Upcoming Surgery Information</h2>
            <p className="text-gray-600 mb-6">Let's start by understanding your upcoming procedure.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Type of Surgery *</label>
                <select
                  value={data.surgeryType}
                  onChange={(e) => updateData({ surgeryType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                >
                  <option value="">Select surgery type</option>
                  <option value="knee_replacement">Total Knee Replacement</option>
                  <option value="hip_replacement">Total Hip Replacement</option>
                  <option value="shoulder_replacement">Shoulder Replacement</option>
                  <option value="knee_arthroscopy">Knee Arthroscopy</option>
                  <option value="spine_surgery">Spine Surgery</option>
                  <option value="other_orthopedic">Other Orthopedic</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Surgery Date *</label>
                <input
                  type="date"
                  value={data.surgeryDate}
                  onChange={(e) => updateData({ surgeryDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Surgeon *</label>
                <input
                  type="text"
                  value={data.surgeon}
                  onChange={(e) => updateData({ surgeon: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="Dr. Smith"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Hospital/Surgery Center *</label>
                <input
                  type="text"
                  value={data.hospital}
                  onChange={(e) => updateData({ hospital: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="General Hospital"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Family & Support Assessment</h2>

            <div>
              <p className="text-gray-700 font-medium mb-4">Do you have family or friends who can help during your recovery? *</p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="hasFamilySupport"
                    checked={data.hasFamilySupport === true}
                    onChange={() => updateData({ hasFamilySupport: true })}
                    className="text-navy focus:ring-navy"
                  />
                  <span className="text-gray-700">Yes, I have reliable family/friends available</span>
                </label>

                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="hasFamilySupport"
                    checked={data.hasFamilySupport === false}
                    onChange={() => updateData({ hasFamilySupport: false })}
                    className="text-navy focus:ring-navy"
                  />
                  <span className="text-gray-700">No, I need help finding support</span>
                </label>
              </div>
            </div>

            {data.hasFamilySupport !== null && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {data.hasFamilySupport ? 'Tell us about your support system' : 'What type of support are you looking for?'}
                </label>
                <textarea
                  value={data.familyDetails}
                  onChange={(e) => updateData({ familyDetails: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                  placeholder={data.hasFamilySupport
                    ? "Describe who will be available to help and what support they can provide..."
                    : "What kind of assistance would be most helpful during your recovery..."
                  }
                />
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Enhanced Mobility Assessment</h2>
            <p className="text-gray-600 mb-6">This enhanced assessment helps us understand your current mobility and predict your recovery needs.</p>

            <div>
              <p className="text-gray-700 font-medium mb-4">How far can you currently walk without stopping to rest? *</p>
              <div className="space-y-3">
                {[
                  { value: 'more_than_2_blocks', label: 'More than 2 blocks (excellent mobility)' },
                  { value: '1_to_2_blocks', label: '1 to 2 blocks (good mobility)' },
                  { value: 'less_than_1_block', label: 'Less than 1 block (limited mobility)' },
                  { value: 'very_limited', label: 'Very limited walking ability' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="walkingDistance"
                      checked={data.walkingDistance === option.value}
                      onChange={() => updateData({ walkingDistance: option.value })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">Can you climb a flight of stairs (10-15 steps)? *</p>
              <div className="space-y-3">
                {[
                  { value: 'no_difficulty', label: 'No difficulty at all' },
                  { value: 'some_difficulty', label: 'Some difficulty, but manageable' },
                  { value: 'significant_difficulty', label: 'Significant difficulty' },
                  { value: 'cannot_climb', label: 'Cannot climb stairs' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="stairClimbing"
                      checked={data.stairClimbing === option.value}
                      onChange={() => updateData({ stairClimbing: option.value })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">What is your home layout? *</p>
              <div className="space-y-3">
                {[
                  { value: 'single_level', label: 'Single level (ranch style, no stairs)' },
                  { value: 'bedroom_main_floor', label: 'Bedroom on main floor, minimal stairs' },
                  { value: 'bedroom_upstairs', label: 'Bedroom upstairs, daily stair use required' },
                  { value: 'multiple_levels', label: 'Multiple levels, frequent stair use' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="homeLayout"
                      checked={data.homeLayout === option.value}
                      onChange={() => updateData({ homeLayout: option.value })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">Do you currently use any walking aids?</p>
              <div className="space-y-3">
                {[
                  { value: 'none', label: 'No assistive devices' },
                  { value: 'cane', label: 'Cane' },
                  { value: 'walker', label: 'Walker' },
                  { value: 'wheelchair', label: 'Wheelchair (part-time)' },
                  { value: 'mobility_scooter', label: 'Mobility scooter' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="assistiveDevice"
                      checked={data.assistiveDevice === option.value}
                      onChange={() => updateData({ assistiveDevice: option.value })}
                      className="text-navy focus:ring-navy"
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
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Personal Information</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => updateData({ name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Age Range *</label>
                <select
                  value={data.age}
                  onChange={(e) => updateData({ age: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                >
                  <option value="">Select age range</option>
                  <option value="18-50">18-50</option>
                  <option value="51-65">51-65</option>
                  <option value="66-75">66-75</option>
                  <option value="76-85">76-85</option>
                  <option value="85+">85+</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Gender *</label>
                <select
                  value={data.gender}
                  onChange={(e) => updateData({ gender: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                >
                  <option value="">Select gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">Prefer not to say</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Address *</label>
                <input
                  type="text"
                  value={data.address}
                  onChange={(e) => updateData({ address: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="Street address, City, State, ZIP"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => updateData({ phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateData({ email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Health Risk Assessment</h2>
            <p className="text-gray-600 mb-6">Understanding your health status helps us determine the safest recovery plan.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 font-medium mb-4">Do you currently smoke? *</p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="smoker"
                      checked={data.smoker === false}
                      onChange={() => updateData({ smoker: false })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">No</span>
                  </label>

                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="smoker"
                      checked={data.smoker === true}
                      onChange={() => updateData({ smoker: true })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-gray-700 font-medium mb-4">Do you take blood thinners? *</p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="bloodThinners"
                      checked={data.bloodThinners === false}
                      onChange={() => updateData({ bloodThinners: false })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">No</span>
                  </label>

                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="bloodThinners"
                      checked={data.bloodThinners === true}
                      onChange={() => updateData({ bloodThinners: true })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-gray-700 font-medium mb-4">Do you have heart conditions? *</p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="heartConditions"
                      checked={data.heartConditions === false}
                      onChange={() => updateData({ heartConditions: false })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">No</span>
                  </label>

                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="heartConditions"
                      checked={data.heartConditions === true}
                      onChange={() => updateData({ heartConditions: true })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-gray-700 font-medium mb-4">Are you diabetic? *</p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="diabetic"
                      checked={data.diabetic === false}
                      onChange={() => updateData({ diabetic: false })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">No</span>
                  </label>

                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="diabetic"
                      checked={data.diabetic === true}
                      onChange={() => updateData({ diabetic: true })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Alcohol consumption per day</label>
                <select
                  value={data.alcoholPerDay}
                  onChange={(e) => updateData({ alcoholPerDay: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                >
                  <option value="">Select frequency</option>
                  <option value="none">None</option>
                  <option value="1_drink">1 drink or less</option>
                  <option value="2_drinks">2 drinks</option>
                  <option value="3_drinks">3 drinks</option>
                  <option value="more_than_3">More than 3 drinks</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Social Support Evaluation</h2>

            <div>
              <p className="text-gray-700 font-medium mb-4">What is your living situation? *</p>
              <div className="space-y-3">
                {[
                  { value: 'live_with_others', label: 'Live with spouse/family who can help' },
                  { value: 'live_alone_nearby_support', label: 'Live alone but have nearby family/friends' },
                  { value: 'live_alone_limited_support', label: 'Live alone with limited nearby support' },
                  { value: 'live_alone_no_support', label: 'Live alone with no nearby support' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="livingSituation"
                      checked={data.livingSituation === option.value}
                      onChange={() => updateData({ livingSituation: option.value })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">How would you rate your social support network? *</p>
              <div className="space-y-3">
                {[
                  { value: 'strong', label: 'Strong - Many people I can rely on for help' },
                  { value: 'moderate', label: 'Moderate - Some people available to help occasionally' },
                  { value: 'limited', label: 'Limited - Few people available, uncertain reliability' },
                  { value: 'minimal', label: 'Minimal - Very few or no people to help' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="socialSupport"
                      checked={data.socialSupport === option.value}
                      onChange={() => updateData({ socialSupport: option.value })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">How will you get to medical appointments? *</p>
              <div className="space-y-3">
                {[
                  { value: 'family_drives', label: 'Family/friends will drive me' },
                  { value: 'can_drive_self', label: 'I can drive myself (non-surgical leg)' },
                  { value: 'rideshare', label: 'Uber/Lyft or taxi' },
                  { value: 'medical_transport', label: 'Medical transport service' },
                  { value: 'uncertain', label: 'Uncertain - need help arranging' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="transportation"
                      checked={data.transportation === option.value}
                      onChange={() => updateData({ transportation: option.value })}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">Have you had major surgery before?</p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="previousSurgeries"
                    checked={data.previousSurgeries === true}
                    onChange={() => updateData({ previousSurgeries: true })}
                    className="text-navy focus:ring-navy"
                  />
                  <span className="text-gray-700">Yes, I have surgery experience</span>
                </label>

                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="previousSurgeries"
                    checked={data.previousSurgeries === false}
                    onChange={() => updateData({ previousSurgeries: false })}
                    className="text-navy focus:ring-navy"
                  />
                  <span className="text-gray-700">No, this is my first major surgery</span>
                </label>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Home Recovery Planning</h2>

            <div>
              <p className="text-gray-700 font-medium mb-4">What home modifications might you need? (Select all that apply)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Grab bars in bathroom',
                  'Raised toilet seat',
                  'Shower chair/bench',
                  'Ramps for stairs/steps',
                  'Stair railings',
                  'Bedroom setup on main floor',
                  'Clear pathways',
                  'Better lighting',
                  'None needed'
                ].map((modification) => (
                  <label key={modification} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={data.homeModifications.includes(modification)}
                      onChange={() => toggleArrayValue(data.homeModifications, modification, 'homeModifications')}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">{modification}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">What recovery equipment do you anticipate needing? (Select all that apply)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Walker or cane',
                  'Ice machine/cold therapy',
                  'Compression stockings',
                  'Reacher/grabber tool',
                  'Dressing aids',
                  'Commode chair',
                  'Elevated cushions',
                  'Physical therapy equipment',
                  'Not sure yet'
                ].map((equipment) => (
                  <label key={equipment} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={data.recoveryEquipment.includes(equipment)}
                      onChange={() => toggleArrayValue(data.recoveryEquipment, equipment, 'recoveryEquipment')}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">{equipment}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">What type of caregiver support would be most helpful? (Select all that apply)</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Transportation to appointments',
                  'Help with daily activities (dressing, bathing)',
                  'Meal preparation assistance',
                  'Medication reminders',
                  'Light housekeeping',
                  'Companionship and emotional support',
                  'Exercise/physical therapy encouragement',
                  'Emergency contact availability',
                  'Help with pets',
                  'Errands and grocery shopping'
                ].map((need) => (
                  <label key={need} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={data.caregiverNeeds.includes(need)}
                      onChange={() => toggleArrayValue(data.caregiverNeeds, need, 'caregiverNeeds')}
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-gray-700">{need}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <p className="text-gray-700 font-medium mb-4">Would you be interested in providing care to others in the future? *</p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="willingToGiveCare"
                    checked={data.willingToGiveCare === true}
                    onChange={() => updateData({ willingToGiveCare: true })}
                    className="text-navy focus:ring-navy"
                  />
                  <span className="text-gray-700">Yes, I'd like to help others once I recover</span>
                </label>

                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="willingToGiveCare"
                    checked={data.willingToGiveCare === false}
                    onChange={() => updateData({ willingToGiveCare: false })}
                    className="text-navy focus:ring-navy"
                  />
                  <span className="text-gray-700">No, I just need help for my own recovery</span>
                </label>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-6">Enhanced RAPT Assessment Results</h2>

            <div className="bg-gradient-to-r from-navy to-navy-700 text-white rounded-lg p-6 text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Your Modified RAPT Score</h3>
              <div className="text-4xl font-bold mb-2">{data.raptScore}/20</div>
              <p className="text-navy-100">Based on Tom Eickmann's Enhanced Algorithm</p>
            </div>

            <div className={`rounded-lg p-6 border-l-4 ${
              data.raptScore >= 14 ? 'bg-green-50 border-green-400' :
              data.raptScore >= 10 ? 'bg-blue-50 border-blue-400' :
              data.raptScore >= 7 ? 'bg-yellow-50 border-yellow-400' :
              data.raptScore >= 5 ? 'bg-orange-50 border-orange-400' :
              'bg-red-50 border-red-400'
            }`}>
              <h3 className={`font-semibold mb-3 ${
                data.raptScore >= 14 ? 'text-green-800' :
                data.raptScore >= 10 ? 'text-blue-800' :
                data.raptScore >= 7 ? 'text-yellow-800' :
                data.raptScore >= 5 ? 'text-orange-800' :
                'text-red-800'
              }`}>
                Clinical Recommendation
              </h3>
              <p className={`text-lg ${
                data.raptScore >= 14 ? 'text-green-700' :
                data.raptScore >= 10 ? 'text-blue-700' :
                data.raptScore >= 7 ? 'text-yellow-700' :
                data.raptScore >= 5 ? 'text-orange-700' :
                'text-red-700'
              }`}>
                {data.recommendedCare}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Assessment Factors</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Age Range:</span>
                    <span className="font-medium">{data.age || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mobility Level:</span>
                    <span className="font-medium">{data.walkingDistance?.replace('_', ' ') || 'Not assessed'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home Layout:</span>
                    <span className="font-medium">{data.homeLayout?.replace('_', ' ') || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Social Support:</span>
                    <span className="font-medium">{data.socialSupport || 'Not assessed'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Family Available:</span>
                    <span className="font-medium">{data.hasFamilySupport ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="font-semibold text-navy mb-4">Next Steps</h3>
                <div className="space-y-2 text-sm text-navy-700">
                  {data.raptScore >= 10 ? (
                    <>
                      <p>✓ Eligible for CareTaker Match program</p>
                      <p>✓ Volunteer matching will begin</p>
                      <p>✓ Pre-surgery meet & greet scheduled</p>
                      <p>✓ Recovery support plan created</p>
                    </>
                  ) : (
                    <>
                      <p>• Clinical team will review assessment</p>
                      <p>• Additional support options will be explored</p>
                      <p>• Alternative care arrangements discussed</p>
                      <p>• Follow-up appointment scheduled</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-navy-200 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-navy mb-2">Assessment Complete</h3>
              <p className="text-gray-600 mb-4">
                Your enhanced RAPT assessment has been completed using Dr. Eickmann's updated algorithm.
                This comprehensive evaluation considers mobility, social support, and home environment factors.
              </p>
              <p className="text-sm text-gray-500">
                Results will be reviewed with your surgical team during your pre-operative appointment.
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

          <h1 className="text-xl font-serif font-bold text-navy">Enhanced Patient Assessment</h1>

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
                className="bg-navy h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-600">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
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
                className="px-6 py-3 bg-navy hover:bg-navy-700 text-white rounded-lg transition-colors"
              >
                Next
              </button>
            ) : (
              <Link
                href="/demo"
                className="px-6 py-3 bg-navy hover:bg-navy-700 text-white rounded-lg transition-colors"
              >
                Complete Assessment
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}