(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VolunteerDemo
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
function VolunteerDemo() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const steps = [
        "Welcome",
        "Personal Information",
        "Recovery Experience",
        "Availability & Commitment",
        "Matching Preferences",
        "Background & References",
        "Application Summary"
    ];
    const handleNext = ()=>{
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
    const renderStep = ()=>{
        switch(currentStep){
            case 0:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-10 h-10 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-serif font-bold text-navy mb-4",
                            children: "Welcome, Future Caregiver!"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto",
                            children: "Thank you for your interest in becoming a CareTaker Match volunteer. Your willingness to help others during their recovery journey makes all the difference."
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-teal-50 border border-teal-200 rounded-lg p-6 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-teal-800 mb-3",
                                    children: "What You'll Do as a Volunteer:"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-teal-700 space-y-2 text-left max-w-md mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Provide companionship during 30-day recovery period"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Help with transportation to appointments"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Assist with basic daily activities"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Share your own recovery experience and wisdom"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Participate in sponsored meet-and-greet before commitment"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "This application takes about 10 minutes to complete."
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this);
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Personal Information"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Full Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: data.name,
                                            onChange: (e)=>updateData({
                                                    name: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
                                            placeholder: "Enter your full name"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Age *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: data.age,
                                            onChange: (e)=>updateData({
                                                    age: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select age range"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "18-30",
                                                    children: "18-30"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "31-50",
                                                    children: "31-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "51-65",
                                                    children: "51-65"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "66-75",
                                                    children: "66-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "75+",
                                                    children: "75+"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Email Address *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: data.email,
                                            onChange: (e)=>updateData({
                                                    email: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
                                            placeholder: "your@email.com"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "Phone Number *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            value: data.phone,
                                            onChange: (e)=>updateData({
                                                    phone: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
                                            placeholder: "(555) 123-4567"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-gray-700 font-medium mb-2",
                                    children: "Address *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: data.address,
                                    onChange: (e)=>updateData({
                                            address: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
                                    placeholder: "Street address, City, State, ZIP"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Your Recovery Experience"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "Have you personally undergone a surgical recovery? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 203,
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
                                                    name: "hasRecoveryExperience",
                                                    checked: data.hasRecoveryExperience === true,
                                                    onChange: ()=>updateData({
                                                            hasRecoveryExperience: true
                                                        }),
                                                    className: "text-teal focus:ring-teal"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "Yes, I have personal surgical recovery experience"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "hasRecoveryExperience",
                                                    checked: data.hasRecoveryExperience === false,
                                                    onChange: ()=>updateData({
                                                            hasRecoveryExperience: false
                                                        }),
                                                    className: "text-teal focus:ring-teal"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "No, but I want to help others in their recovery"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this),
                        data.hasRecoveryExperience && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6 border-t pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "What type of surgery?"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: data.surgeryType,
                                            onChange: (e)=>updateData({
                                                    surgeryType: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
                                            placeholder: "e.g., knee replacement, hip replacement"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-700 font-medium mb-2",
                                            children: "What year?"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: data.recoveryYear,
                                            onChange: (e)=>updateData({
                                                    recoveryYear: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
                                            placeholder: "e.g., 2022"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 230,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "Have you provided care for someone else during recovery? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 256,
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
                                                    name: "caregiverExperience",
                                                    checked: data.caregiverExperience === true,
                                                    onChange: ()=>updateData({
                                                            caregiverExperience: true
                                                        }),
                                                    className: "text-teal focus:ring-teal"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "Yes, I have caregiver experience"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "caregiverExperience",
                                                    checked: data.caregiverExperience === false,
                                                    onChange: ()=>updateData({
                                                            caregiverExperience: false
                                                        }),
                                                    className: "text-teal focus:ring-teal"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "No, this would be my first time as a caregiver"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Availability & Commitment"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "When are you typically available? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                                    children: [
                                        'Weekday mornings',
                                        'Weekday afternoons',
                                        'Weekday evenings',
                                        'Weekend mornings',
                                        'Weekend afternoons',
                                        'Weekend evenings'
                                    ].map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: data.availability.includes(time),
                                                    onChange: ()=>toggleArrayValue(data.availability, time, 'availability'),
                                                    className: "text-teal focus:ring-teal"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-700",
                                                    children: time
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, time, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 289,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "How much time can you commit per week? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        '2-4 hours per week',
                                        '5-8 hours per week',
                                        '9-15 hours per week',
                                        '16+ hours per week (extensive support)'
                                    ].map((commitment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "timeCommitment",
                                                    checked: data.timeCommitment === commitment,
                                                    onChange: ()=>updateData({
                                                            timeCommitment: commitment
                                                        }),
                                                    className: "text-teal focus:ring-teal"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: commitment
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, commitment, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "How far are you willing to travel to help? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        'Within 5 miles',
                                        'Within 10 miles',
                                        'Within 20 miles',
                                        'Within 30 miles',
                                        'Distance is not a concern'
                                    ].map((distance)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "travelDistance",
                                                    checked: data.travelDistance === distance,
                                                    onChange: ()=>updateData({
                                                            travelDistance: distance
                                                        }),
                                                    className: "text-teal focus:ring-teal"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: distance
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, distance, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 331,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                    lineNumber: 286,
                    columnNumber: 11
                }, this);
            case 4:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Matching Preferences"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 358,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "Do you have a preference for the gender of patients you help?"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 361,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        'No preference',
                                        'Prefer to help women',
                                        'Prefer to help men'
                                    ].map((pref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "genderPreference",
                                                    checked: data.genderPreference === pref,
                                                    onChange: ()=>updateData({
                                                            genderPreference: pref
                                                        }),
                                                    className: "text-teal focus:ring-teal"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: pref
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, pref, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 360,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "Do you have an age preference for patients you help?"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        'No preference',
                                        'Prefer helping young adults (18-40)',
                                        'Prefer helping middle-aged adults (40-65)',
                                        'Prefer helping seniors (65+)'
                                    ].map((pref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "agePreference",
                                                    checked: data.agePreference === pref,
                                                    onChange: ()=>updateData({
                                                            agePreference: pref
                                                        }),
                                                    className: "text-teal focus:ring-teal"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: pref
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, pref, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 378,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 font-medium mb-4",
                                    children: "Which surgery types are you most comfortable helping with?"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                    children: [
                                        'Knee replacement',
                                        'Hip replacement',
                                        'Shoulder surgery',
                                        'Spine surgery',
                                        'General orthopedic',
                                        'Any surgery type'
                                    ].map((surgery)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: data.surgeryPreferences.includes(surgery),
                                                    onChange: ()=>toggleArrayValue(data.surgeryPreferences, surgery, 'surgeryPreferences'),
                                                    className: "text-teal focus:ring-teal"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: surgery
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, surgery, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 412,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 403,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 401,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                    lineNumber: 357,
                    columnNumber: 11
                }, this);
            case 5:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Background & References"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 430,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 border border-blue-200 rounded-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-blue-800 mb-3",
                                    children: "Background Check Required"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-700 mb-4",
                                    children: "For the safety of all participants, CareTaker Match requires a background check for all volunteers. This is provided at no cost to you."
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 434,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-start space-x-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: data.backgroundCheckConsent,
                                            onChange: (e)=>updateData({
                                                    backgroundCheckConsent: e.target.checked
                                                }),
                                            className: "text-teal focus:ring-teal mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 440,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-700",
                                            children: "I consent to a background check and understand this is required to volunteer *"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 432,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-gray-700 font-medium mb-2",
                                    children: "Personal References"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm mb-3",
                                    children: "Please provide contact information for 2-3 personal references (friends, family, colleagues, etc.)"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 454,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: data.references,
                                    onChange: (e)=>updateData({
                                            references: e.target.value
                                        }),
                                    rows: 4,
                                    className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none",
                                    placeholder: "Example: Jane Smith (friend) - jane@email.com - (555) 123-4567 Dr. Robert Jones (former colleague) - rjones@clinic.com - (555) 987-6543"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-gray-700 font-medium mb-2",
                                    children: "What motivates you to volunteer? *"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm mb-3",
                                    children: "Tell us about your motivation for becoming a CareTaker Match volunteer"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: data.motivation,
                                    onChange: (e)=>updateData({
                                            motivation: e.target.value
                                        }),
                                    rows: 4,
                                    className: "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none",
                                    placeholder: "Share your personal story and motivation for helping others during recovery..."
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 466,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                    lineNumber: 429,
                    columnNumber: 11
                }, this);
            case 6:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-serif font-semibold text-navy mb-4",
                            children: "Application Summary"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 485,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 rounded-lg p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium text-gray-900 mb-2",
                                                    children: "Personal Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-600 space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Name:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.name || 'Not provided'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Age:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 493,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.age || 'Not specified'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Email:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 494,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.email || 'Not provided'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Phone:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.phone || 'Not provided'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 489,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium text-gray-900 mb-2",
                                                    children: "Experience"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-600 space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Personal Recovery:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.hasRecoveryExperience === true ? `Yes (${data.surgeryType} in ${data.recoveryYear})` : data.hasRecoveryExperience === false ? 'No personal experience' : 'Not specified'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Caregiver Experience:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.caregiverExperience === true ? 'Yes' : data.caregiverExperience === false ? 'No' : 'Not specified'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium text-gray-900 mb-2",
                                                    children: "Availability"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-600 space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Time Commitment:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.timeCommitment || 'Not specified'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Travel Distance:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 517,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.travelDistance || 'Not specified'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Available Times:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.availability.length > 0 ? data.availability.join(', ') : 'Not specified'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 513,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium text-gray-900 mb-2",
                                                    children: "Preferences"
                                                }, void 0, false, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-600 space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Gender Preference:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.genderPreference || 'Not specified'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Age Preference:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 526,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.agePreference || 'Not specified'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Surgery Types:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                data.surgeryPreferences.length > 0 ? data.surgeryPreferences.join(', ') : 'Not specified'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 522,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-medium text-gray-900 mb-2",
                                            children: "Background Check"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 533,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: data.backgroundCheckConsent ? '✓ Consented to required background check' : '❌ Background check consent required'
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 534,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 487,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-teal-50 border border-teal-200 rounded-lg p-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-teal-800 mb-2",
                                    children: "Next Steps"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 544,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-teal-700 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "1. Background check processing (2-3 business days)"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 546,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "2. Reference verification"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "3. Brief orientation call with CareTaker Match team"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 548,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "4. Addition to volunteer matching pool"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 549,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "5. Notification when matched with a patient"
                                        }, void 0, false, {
                                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                            lineNumber: 550,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 545,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 543,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center bg-white border-2 border-teal-200 rounded-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-navy mb-2",
                                    children: "Thank You for Your Application!"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Your willingness to help others during their recovery journey is truly appreciated. We'll be in touch within 2-3 business days."
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 556,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 554,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                    lineNumber: 484,
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
                                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                        lineNumber: 576,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 575,
                                    columnNumber: 13
                                }, this),
                                "Back to Demo Hub"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 574,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-serif font-bold text-navy",
                            children: "Volunteer Application"
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 581,
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
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 583,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                    lineNumber: 573,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                lineNumber: 572,
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
                                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                lineNumber: 593,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-gray-200 rounded-full h-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-teal h-2 rounded-full transition-all duration-300",
                                    style: {
                                        width: `${(currentStep + 1) / steps.length * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 595,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                lineNumber: 594,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-600",
                                children: [
                                    Math.round((currentStep + 1) / steps.length * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                lineNumber: 600,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                        lineNumber: 592,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                    lineNumber: 591,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                lineNumber: 590,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "py-8 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-lg p-8 mb-8",
                            children: renderStep()
                        }, void 0, false, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 608,
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
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 614,
                                    columnNumber: 13
                                }, this),
                                currentStep < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNext,
                                    className: "px-6 py-3 bg-teal hover:bg-teal-700 text-white rounded-lg transition-colors",
                                    children: currentStep === 0 ? 'Start Application' : 'Next'
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AIProgramming$2f$caretaker_match$2f$website$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/demo",
                                    className: "px-6 py-3 bg-teal hover:bg-teal-700 text-white rounded-lg transition-colors",
                                    children: "Complete Application"
                                }, void 0, false, {
                                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                                    lineNumber: 630,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                            lineNumber: 613,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                    lineNumber: 607,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
                lineNumber: 606,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AIProgramming/caretaker_match/website/website/src/app/demo/volunteer/page.tsx",
        lineNumber: 570,
        columnNumber: 5
    }, this);
}
_s(VolunteerDemo, "CeNbVyYb55VAOU2C2is0xDsB1vE=");
_c = VolunteerDemo;
var _c;
__turbopack_context__.k.register(_c, "VolunteerDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=13a8d_caretaker_match_website_website_src_app_demo_volunteer_page_tsx_48eb69dd._.js.map