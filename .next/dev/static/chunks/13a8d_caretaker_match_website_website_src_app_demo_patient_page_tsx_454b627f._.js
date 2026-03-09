(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PatientDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AIProgramming/caretaker_match/website/website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AIProgramming/caretaker_match/website/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AIProgramming/caretaker_match/website/website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const initialData = {
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
function PatientDemo() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
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
    const handleNext = ()=>{
        if (currentStep === 6) {
            // Calculate RAPT score before showing results
            calculateRAPTScore();
        }
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };
    const handlePrevious = ()=>{
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };
    const updateData = (updates)=>{
        setData((prev)=>({
                ...prev,
                ...updates
            }));
    };
    const toggleArrayValue = (array, value, field)=>{
        const newArray = array.includes(value) ? array.filter((item)=>item !== value) : [
            ...array,
            value
        ];
        updateData({
            [field]: newArray
        });
    };
    // Enhanced RAPT Score Calculation (Tom's Updated Algorithm)
    const calculateRAPTScore = ()=>{
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
    const renderStep = ()=>{
        switch(currentStep){
            case 0:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Upcoming Surgery Information"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "Let's start by understanding your upcoming procedure."
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Type of Surgery *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: data.surgeryType,
                                            onChange: (e)=>updateData({
                                                    surgeryType: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select surgery type"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "knee_replacement",
                                                    children: "Total Knee Replacement"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "hip_replacement",
                                                    children: "Total Hip Replacement"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "shoulder_replacement",
                                                    children: "Shoulder Replacement"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "knee_arthroscopy",
                                                    children: "Knee Arthroscopy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "spine_surgery",
                                                    children: "Spine Surgery"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "other_orthopedic",
                                                    children: "Other Orthopedic"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Surgery Date *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: data.surgeryDate,
                                            onChange: (e)=>updateData({
                                                    surgeryDate: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Surgeon *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: data.surgeon,
                                            onChange: (e)=>updateData({
                                                    surgeon: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent",
                                            placeholder: "Dr. Smith"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Hospital/Surgery Center *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: data.hospital,
                                            onChange: (e)=>updateData({
                                                    hospital: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent",
                                            placeholder: "General Hospital"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this);
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Family & Support Assessment"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "Do you have family or friends who can help during your recovery? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "hasFamilySupport",
                                                    checked: data.hasFamilySupport === true,
                                                    onChange: ()=>updateData({
                                                            hasFamilySupport: true
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "Yes, I have reliable family/friends available"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "hasFamilySupport",
                                                    checked: data.hasFamilySupport === false,
                                                    onChange: ()=>updateData({
                                                            hasFamilySupport: false
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "No, I need help finding support"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this),
                        data.hasFamilySupport !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-gray-700 font-medium mb-2",
                                    children: data.hasFamilySupport ? 'Tell us about your support system' : 'What type of support are you looking for?'
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: data.familyDetails,
                                    onChange: (e)=>updateData({
                                            familyDetails: e.target.value
                                        }),
                                    rows: 3,
                                    className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none",
                                    placeholder: data.hasFamilySupport ? "Describe who will be available to help and what support they can provide..." : "What kind of assistance would be most helpful during your recovery..."
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 299,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                    lineNumber: 268,
                    columnNumber: 11
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Enhanced Mobility Assessment"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "This enhanced assessment helps us understand your current mobility and predict your recovery needs."
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "How far can you currently walk without stopping to rest? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            value: 'more_than_2_blocks',
                                            label: 'More than 2 blocks (excellent mobility)'
                                        },
                                        {
                                            value: '1_to_2_blocks',
                                            label: '1 to 2 blocks (good mobility)'
                                        },
                                        {
                                            value: 'less_than_1_block',
                                            label: 'Less than 1 block (limited mobility)'
                                        },
                                        {
                                            value: 'very_limited',
                                            label: 'Very limited walking ability'
                                        }
                                    ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "walkingDistance",
                                                    checked: data.walkingDistance === option.value,
                                                    onChange: ()=>updateData({
                                                            walkingDistance: option.value
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: option.label
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, option.value, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "Can you climb a flight of stairs (10-15 steps)? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            value: 'no_difficulty',
                                            label: 'No difficulty at all'
                                        },
                                        {
                                            value: 'some_difficulty',
                                            label: 'Some difficulty, but manageable'
                                        },
                                        {
                                            value: 'significant_difficulty',
                                            label: 'Significant difficulty'
                                        },
                                        {
                                            value: 'cannot_climb',
                                            label: 'Cannot climb stairs'
                                        }
                                    ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "stairClimbing",
                                                    checked: data.stairClimbing === option.value,
                                                    onChange: ()=>updateData({
                                                            stairClimbing: option.value
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: option.label
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, option.value, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "What is your home layout? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            value: 'single_level',
                                            label: 'Single level (ranch style, no stairs)'
                                        },
                                        {
                                            value: 'bedroom_main_floor',
                                            label: 'Bedroom on main floor, minimal stairs'
                                        },
                                        {
                                            value: 'bedroom_upstairs',
                                            label: 'Bedroom upstairs, daily stair use required'
                                        },
                                        {
                                            value: 'multiple_levels',
                                            label: 'Multiple levels, frequent stair use'
                                        }
                                    ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "homeLayout",
                                                    checked: data.homeLayout === option.value,
                                                    onChange: ()=>updateData({
                                                            homeLayout: option.value
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: option.label
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, option.value, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "Do you currently use any walking aids?"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            value: 'none',
                                            label: 'No assistive devices'
                                        },
                                        {
                                            value: 'cane',
                                            label: 'Cane'
                                        },
                                        {
                                            value: 'walker',
                                            label: 'Walker'
                                        },
                                        {
                                            value: 'wheelchair',
                                            label: 'Wheelchair (part-time)'
                                        },
                                        {
                                            value: 'mobility_scooter',
                                            label: 'Mobility scooter'
                                        }
                                    ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "assistiveDevice",
                                                    checked: data.assistiveDevice === option.value,
                                                    onChange: ()=>updateData({
                                                            assistiveDevice: option.value
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: option.label
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, option.value, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                    lineNumber: 320,
                    columnNumber: 11
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Personal Information"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 422,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Full Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: data.name,
                                            onChange: (e)=>updateData({
                                                    name: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent",
                                            placeholder: "Enter your full name"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Age Range *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: data.age,
                                            onChange: (e)=>updateData({
                                                    age: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select age range"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "18-50",
                                                    children: "18-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "51-65",
                                                    children: "51-65"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "66-75",
                                                    children: "66-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "76-85",
                                                    children: "76-85"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "85+",
                                                    children: "85+"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 436,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Gender *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: data.gender,
                                            onChange: (e)=>updateData({
                                                    gender: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select gender"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "female",
                                                    children: "Female"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "male",
                                                    children: "Male"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "other",
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "prefer_not_to_say",
                                                    children: "Prefer not to say"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Address *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 468,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: data.address,
                                            onChange: (e)=>updateData({
                                                    address: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent",
                                            placeholder: "Street address, City, State, ZIP"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 469,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Phone Number *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 479,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            value: data.phone,
                                            onChange: (e)=>updateData({
                                                    phone: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent",
                                            placeholder: "(555) 123-4567"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 480,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Email Address *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: data.email,
                                            onChange: (e)=>updateData({
                                                    email: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent",
                                            placeholder: "your@email.com"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 491,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 424,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                    lineNumber: 421,
                    columnNumber: 11
                }, this);
            case 4:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Health Risk Assessment"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 506,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "Understanding your health status helps us determine the safest recovery plan."
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 507,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 font-medium mb-4",
                                            children: "Do you currently smoke? *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 511,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "smoker",
                                                            checked: data.smoker === false,
                                                            onChange: ()=>updateData({
                                                                    smoker: false
                                                                }),
                                                            className: "text-navy focus:ring-navy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: "No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "smoker",
                                                            checked: data.smoker === true,
                                                            onChange: ()=>updateData({
                                                                    smoker: true
                                                                }),
                                                            className: "text-navy focus:ring-navy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: "Yes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 532,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 font-medium mb-4",
                                            children: "Do you take blood thinners? *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "bloodThinners",
                                                            checked: data.bloodThinners === false,
                                                            onChange: ()=>updateData({
                                                                    bloodThinners: false
                                                                }),
                                                            className: "text-navy focus:ring-navy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 541,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: "No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "bloodThinners",
                                                            checked: data.bloodThinners === true,
                                                            onChange: ()=>updateData({
                                                                    bloodThinners: true
                                                                }),
                                                            className: "text-navy focus:ring-navy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 552,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: "Yes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 559,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 539,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 537,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 font-medium mb-4",
                                            children: "Do you have heart conditions? *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 565,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "heartConditions",
                                                            checked: data.heartConditions === false,
                                                            onChange: ()=>updateData({
                                                                    heartConditions: false
                                                                }),
                                                            className: "text-navy focus:ring-navy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: "No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 575,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "heartConditions",
                                                            checked: data.heartConditions === true,
                                                            onChange: ()=>updateData({
                                                                    heartConditions: true
                                                                }),
                                                            className: "text-navy focus:ring-navy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 579,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: "Yes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 566,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 564,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 font-medium mb-4",
                                            children: "Are you diabetic? *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "diabetic",
                                                            checked: data.diabetic === false,
                                                            onChange: ()=>updateData({
                                                                    diabetic: false
                                                                }),
                                                            className: "text-navy focus:ring-navy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 595,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: "No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 602,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "diabetic",
                                                            checked: data.diabetic === true,
                                                            onChange: ()=>updateData({
                                                                    diabetic: true
                                                                }),
                                                            className: "text-navy focus:ring-navy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 606,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: "Yes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 593,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 591,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Alcohol consumption per day"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 619,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: data.alcoholPerDay,
                                            onChange: (e)=>updateData({
                                                    alcoholPerDay: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select frequency"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "none",
                                                    children: "None"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "1_drink",
                                                    children: "1 drink or less"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "2_drinks",
                                                    children: "2 drinks"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "3_drinks",
                                                    children: "3 drinks"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 629,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "more_than_3",
                                                    children: "More than 3 drinks"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 620,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 618,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 509,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                    lineNumber: 505,
                    columnNumber: 11
                }, this);
            case 5:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Social Support Evaluation"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 640,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "What is your living situation? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 643,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            value: 'live_with_others',
                                            label: 'Live with spouse/family who can help'
                                        },
                                        {
                                            value: 'live_alone_nearby_support',
                                            label: 'Live alone but have nearby family/friends'
                                        },
                                        {
                                            value: 'live_alone_limited_support',
                                            label: 'Live alone with limited nearby support'
                                        },
                                        {
                                            value: 'live_alone_no_support',
                                            label: 'Live alone with no nearby support'
                                        }
                                    ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "livingSituation",
                                                    checked: data.livingSituation === option.value,
                                                    onChange: ()=>updateData({
                                                            livingSituation: option.value
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: option.label
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, option.value, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 651,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 644,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 642,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "How would you rate your social support network? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 666,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            value: 'strong',
                                            label: 'Strong - Many people I can rely on for help'
                                        },
                                        {
                                            value: 'moderate',
                                            label: 'Moderate - Some people available to help occasionally'
                                        },
                                        {
                                            value: 'limited',
                                            label: 'Limited - Few people available, uncertain reliability'
                                        },
                                        {
                                            value: 'minimal',
                                            label: 'Minimal - Very few or no people to help'
                                        }
                                    ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "socialSupport",
                                                    checked: data.socialSupport === option.value,
                                                    onChange: ()=>updateData({
                                                            socialSupport: option.value
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: option.label
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, option.value, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 674,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 667,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 665,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "How will you get to medical appointments? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 689,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            value: 'family_drives',
                                            label: 'Family/friends will drive me'
                                        },
                                        {
                                            value: 'can_drive_self',
                                            label: 'I can drive myself (non-surgical leg)'
                                        },
                                        {
                                            value: 'rideshare',
                                            label: 'Uber/Lyft or taxi'
                                        },
                                        {
                                            value: 'medical_transport',
                                            label: 'Medical transport service'
                                        },
                                        {
                                            value: 'uncertain',
                                            label: 'Uncertain - need help arranging'
                                        }
                                    ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "transportation",
                                                    checked: data.transportation === option.value,
                                                    onChange: ()=>updateData({
                                                            transportation: option.value
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: option.label
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 706,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, option.value, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 698,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 688,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "Have you had major surgery before?"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 713,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "previousSurgeries",
                                                    checked: data.previousSurgeries === true,
                                                    onChange: ()=>updateData({
                                                            previousSurgeries: true
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "Yes, I have surgery experience"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 715,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "previousSurgeries",
                                                    checked: data.previousSurgeries === false,
                                                    onChange: ()=>updateData({
                                                            previousSurgeries: false
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 727,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "No, this is my first major surgery"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 726,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 714,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 712,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                    lineNumber: 639,
                    columnNumber: 11
                }, this);
            case 6:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Home Recovery Planning"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 744,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "What home modifications might you need? (Select all that apply)"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 747,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                    children: [
                                        'Grab bars in bathroom',
                                        'Raised toilet seat',
                                        'Shower chair/bench',
                                        'Ramps for stairs/steps',
                                        'Stair railings',
                                        'Bedroom setup on main floor',
                                        'Clear pathways',
                                        'Better lighting',
                                        'None needed'
                                    ].map((modification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: data.homeModifications.includes(modification),
                                                    onChange: ()=>toggleArrayValue(data.homeModifications, modification, 'homeModifications'),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: modification
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, modification, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 760,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 748,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 746,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "What recovery equipment do you anticipate needing? (Select all that apply)"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 774,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                    children: [
                                        'Walker or cane',
                                        'Ice machine/cold therapy',
                                        'Compression stockings',
                                        'Reacher/grabber tool',
                                        'Dressing aids',
                                        'Commode chair',
                                        'Elevated cushions',
                                        'Physical therapy equipment',
                                        'Not sure yet'
                                    ].map((equipment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: data.recoveryEquipment.includes(equipment),
                                                    onChange: ()=>toggleArrayValue(data.recoveryEquipment, equipment, 'recoveryEquipment'),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 788,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: equipment
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 794,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, equipment, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 787,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 775,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 773,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "What type of caregiver support would be most helpful? (Select all that apply)"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 801,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-3",
                                    children: [
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
                                    ].map((need)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: data.caregiverNeeds.includes(need),
                                                    onChange: ()=>toggleArrayValue(data.caregiverNeeds, need, 'caregiverNeeds'),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: need
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, need, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 815,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 802,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 800,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "Would you be interested in providing care to others in the future? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 829,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "willingToGiveCare",
                                                    checked: data.willingToGiveCare === true,
                                                    onChange: ()=>updateData({
                                                            willingToGiveCare: true
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 832,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "Yes, I'd like to help others once I recover"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 839,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 831,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "willingToGiveCare",
                                                    checked: data.willingToGiveCare === false,
                                                    onChange: ()=>updateData({
                                                            willingToGiveCare: false
                                                        }),
                                                    className: "text-navy focus:ring-navy"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 843,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "No, I just need help for my own recovery"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 850,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 842,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 830,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 828,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                    lineNumber: 743,
                    columnNumber: 11
                }, this);
            case 7:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-6",
                            children: "Enhanced RAPT Assessment Results"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 860,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-navy to-navy-700 text-white rounded-lg p-6 text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold mb-2",
                                    children: "Your Modified RAPT Score"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 863,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl font-bold mb-2",
                                    children: [
                                        data.raptScore,
                                        "/20"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 864,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-navy-100",
                                    children: "Based on Tom Eickmann's Enhanced Algorithm"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 865,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 862,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-lg p-6 border-l-4 ${data.raptScore >= 14 ? 'bg-green-50 border-green-400' : data.raptScore >= 10 ? 'bg-blue-50 border-blue-400' : data.raptScore >= 7 ? 'bg-yellow-50 border-yellow-400' : data.raptScore >= 5 ? 'bg-orange-50 border-orange-400' : 'bg-red-50 border-red-400'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `font-semibold mb-3 ${data.raptScore >= 14 ? 'text-green-800' : data.raptScore >= 10 ? 'text-blue-800' : data.raptScore >= 7 ? 'text-yellow-800' : data.raptScore >= 5 ? 'text-orange-800' : 'text-red-800'}`,
                                    children: "Clinical Recommendation"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 875,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-lg ${data.raptScore >= 14 ? 'text-green-700' : data.raptScore >= 10 ? 'text-blue-700' : data.raptScore >= 7 ? 'text-yellow-700' : data.raptScore >= 5 ? 'text-orange-700' : 'text-red-700'}`,
                                    children: data.recommendedCare
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 884,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 868,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 rounded-lg p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-900 mb-4",
                                            children: "Assessment Factors"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 897,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Age Range:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 900,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: data.age || 'Not specified'
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 901,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 899,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Mobility Level:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 904,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: data.walkingDistance?.replace('_', ' ') || 'Not assessed'
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 905,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 903,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Home Layout:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 908,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: data.homeLayout?.replace('_', ' ') || 'Not specified'
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 909,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 907,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Social Support:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 912,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: data.socialSupport || 'Not assessed'
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 913,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 911,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Family Available:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 916,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: data.hasFamilySupport ? 'Yes' : 'No'
                                                        }, void 0, false, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                            lineNumber: 917,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                    lineNumber: 915,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 898,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 896,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-navy-50 rounded-lg p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-navy mb-4",
                                            children: "Next Steps"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 923,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-sm text-navy-700",
                                            children: data.raptScore >= 10 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "✓ Eligible for CareTaker Match program"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                        lineNumber: 927,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "✓ Volunteer matching will begin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                        lineNumber: 928,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "✓ Pre-surgery meet & greet scheduled"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "✓ Recovery support plan created"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                        lineNumber: 930,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "• Clinical team will review assessment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                        lineNumber: 934,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "• Additional support options will be explored"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                        lineNumber: 935,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "• Alternative care arrangements discussed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                        lineNumber: 936,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "• Follow-up appointment scheduled"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                                        lineNumber: 937,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                            lineNumber: 924,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 922,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 895,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border-2 border-navy-200 rounded-lg p-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-navy mb-2",
                                    children: "Assessment Complete"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 945,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-4",
                                    children: "Your enhanced RAPT assessment has been completed using Dr. Eickmann's updated algorithm. This comprehensive evaluation considers mobility, social support, and home environment factors."
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 946,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: "Results will be reviewed with your surgical team during your pre-operative appointment."
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 950,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 944,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                    lineNumber: 859,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "py-6 px-6 border-b border-gray-200 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/demo",
                            className: "flex items-center text-navy hover:text-teal transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 mr-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                    }, void 0, false, {
                                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                        lineNumber: 969,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 968,
                                    columnNumber: 13
                                }, this),
                                "Back to Demo Hub"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 967,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-serif font-bold text-navy",
                            children: "Enhanced Patient Assessment"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 974,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500",
                            children: [
                                "Step ",
                                currentStep + 1,
                                " of ",
                                steps.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 976,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                    lineNumber: 966,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                lineNumber: 965,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-600",
                                children: "Progress:"
                            }, void 0, false, {
                                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                lineNumber: 986,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-gray-200 rounded-full h-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-navy h-2 rounded-full transition-all duration-300",
                                    style: {
                                        width: `${(currentStep + 1) / steps.length * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 988,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                lineNumber: 987,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-600",
                                children: [
                                    Math.round((currentStep + 1) / steps.length * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                lineNumber: 993,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                        lineNumber: 985,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                    lineNumber: 984,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                lineNumber: 983,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "py-8 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-lg p-8 mb-8",
                            children: renderStep()
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 1001,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePrevious,
                                    disabled: currentStep === 0,
                                    className: "px-6 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                    children: "Previous"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 1007,
                                    columnNumber: 13
                                }, this),
                                currentStep < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNext,
                                    className: "px-6 py-3 bg-navy hover:bg-navy-700 text-white rounded-lg transition-colors",
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 1016,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/demo",
                                    className: "px-6 py-3 bg-navy hover:bg-navy-700 text-white rounded-lg transition-colors",
                                    children: "Complete Assessment"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                                    lineNumber: 1023,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                            lineNumber: 1006,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                    lineNumber: 1000,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
                lineNumber: 999,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/patient/page.tsx",
        lineNumber: 963,
        columnNumber: 5
    }, this);
}
_s(PatientDemo, "CeNbVyYb55VAOU2C2is0xDsB1vE=");
_c = PatientDemo;
var _c;
__turbopack_context__.k.register(_c, "PatientDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=13a8d_caretaker_match_website_website_src_app_demo_patient_page_tsx_454b627f._.js.map