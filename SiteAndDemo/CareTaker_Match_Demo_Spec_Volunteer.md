# CareTaker Match — Interactive Demo Build Specification
## Volunteer Workflow (App 1 of 3)

**Version:** 1.0  
**Author:** Whit Walters, CTO  
**Target Builder:** Claude Code  
**Date:** March 2026  
**Fidelity:** Medium — clean, professional UI that clearly functions as a demo but looks like a real app

---

## 1. Project Context

CareTaker Match is an AI-driven post-acute recovery platform that matches vetted peer volunteers with surgical patients who have no friends or family to help with recovery. The platform reduces Skilled Nursing Facility (SNF) costs under the CMS TEAM Model by facilitating a 30-day clinical encounter between a volunteer and a patient.

This interactive demo is being built **for investor presentations**. When Hamid (CEO) sits down with an investor, he will pull this up on a laptop and walk through the volunteer experience. There is **no backend** — all data is pre-populated dummy data with click-through navigation between workflow states.

**This spec covers the Volunteer persona only.** Patient and Clinician specs will follow separately.

---

## 2. Technical Requirements

### Stack
- **React** (Vite or Next.js — builder's choice)
- **Tailwind CSS** for styling
- **No backend / no API calls** — all state is local, all data is hardcoded demo data
- **Responsive** but optimized for **mobile-width display** (390px) shown inside a phone frame on desktop
  - When viewed on desktop, render the app inside a visual iPhone frame/bezel so it looks like you're looking at a phone app
  - When viewed on actual mobile, drop the frame and go full-screen

### Design Language
- **Color palette:** Teal (#0B8A7E) as primary, Navy (#1A3550) for headers/dark elements, Coral (#E8634A) for alerts/CTAs, Warm off-white (#F7F5F0) for backgrounds
- **Typography:** System font stack (-apple-system, SF Pro, etc.) to mimic native iOS feel
- **Style:** Clean cards, subtle shadows, rounded corners (12px). Should feel like a modern healthcare app — trustworthy, not flashy. Think One Medical or Hims/Hers app aesthetic.
- **Logo:** Use text "CareTaker Match" with a heart icon. No need for an actual logo file.
- **Navigation:** Bottom tab bar (iOS-style) with: Home, My Matches, Calendar, Messages, Profile

### Demo Navigation
- Include a **floating "Demo Controls" button** (small, top-right corner) that opens a panel allowing the presenter to jump to any workflow state. This lets Hamid skip ahead or go back during the pitch without clicking through every screen.
- States should also advance naturally via button clicks for a linear walkthrough.

---

## 3. Demo Scenario

### The Characters
- **Volunteer:** Sarah Chen, age 42, Denver CO. Had a total knee replacement herself 2 years ago. Background check verified. 5 previous successful encounters. 4.9 star rating.
- **Patient:** James Morrison, age 68, Lakewood CO (nearby). Scheduled for total knee replacement on April 15, 2026 at Intermountain Health — Saint Joseph Hospital. No family support. Medicare Part A & B.
- **Clinician:** Dr. Tom Eickmann, Orthopedic Surgeon, Intermountain Health.

### The Timeline
The demo walks through Sarah's experience from signup through encounter close, showing the app at these key moments.

---

## 4. Screen-by-Screen Specification

### Screen 1: Welcome / Onboarding
**Purpose:** First screen a new volunteer sees after downloading the app.

**Content:**
- CareTaker Match logo and tagline: "Recovery is better together"
- Brief value proposition: "Help a neighbor recover from surgery. Make a real difference in someone's life."
- Two buttons: "Sign Up as a Volunteer" (primary CTA) and "I'm a Patient" (secondary, grayed — links to patient app in future)
- Small text at bottom: "Already have an account? Sign In"

**Demo behavior:** Tapping "Sign Up as a Volunteer" advances to Screen 2.

---

### Screen 2: Volunteer Signup — Personal Info
**Purpose:** Capture basic volunteer information.

**Content — Form (pre-filled for demo):**
- First Name: Sarah
- Last Name: Chen
- Email: sarah.chen@email.com
- Phone: (303) 555-0142
- ZIP Code: 80226
- Date of Birth: 06/14/1983

- Checkbox: "I consent to a background check as part of the vetting process."
- Checkbox: "I agree to the Terms of Service and Privacy Policy."

**Bottom:** "Continue" button

**Demo behavior:** Tapping "Continue" advances to Screen 3.

---

### Screen 3: Volunteer Signup — Background & Experience
**Purpose:** Capture information used by the matching algorithm.

**Content — Form (pre-filled for demo):**
- "Have you had a surgical procedure in the past?" → Toggle: Yes
  - If Yes: "What type of surgery?" → Dropdown showing "Total Knee Replacement"
  - "When was your surgery?" → "March 2024"
- "Do you have a valid driver's license?" → Toggle: Yes
- "Can you lift 20 lbs or more?" → Toggle: Yes
- "How far are you willing to travel for a match?" → Slider: 15 miles
- "Why do you want to volunteer?" → Text area pre-filled: "After my own knee replacement, I know how hard recovery is when you're alone. I want to be the person I wish I'd had."

**Bottom:** "Submit Application" button

**Demo behavior:** Tapping "Submit Application" advances to Screen 4.

---

### Screen 4: Application Submitted / Vetting In Progress
**Purpose:** Confirmation that the application was received and background check is underway.

**Content:**
- Checkmark animation or icon
- "Application Submitted!"
- Progress tracker showing 3 steps:
  1. ✅ Application Received
  2. 🔄 Background Check In Progress (highlighted/active)
  3. ⬜ Orientation Complete
- "Your background check typically takes 2–5 business days. We'll notify you when you're approved."
- "What happens next?" expandable section explaining: background check, OIG screening, brief orientation video, then you're in the volunteer pool.

**Demo behavior:** Demo controls allow jumping to Screen 5 (approved state). Or a "Skip to Approved →" demo button.

---

### Screen 5: Home Screen — Approved & Waiting
**Purpose:** The main screen Sarah sees when she's approved but hasn't received a match yet.

**Content:**
- Top: "Welcome, Sarah" with her avatar/initials circle
- Status badge: "✅ Verified Volunteer"
- Stats card:
  - Encounters Completed: 5
  - Rating: ⭐ 4.9
  - Impact: "127 care hours provided"
- Card: "You're in the active volunteer pool. We'll notify you when a patient near you needs help."
- Bottom tab bar: Home (active), My Matches, Calendar, Messages, Profile

**Demo behavior:** Advances to Screen 6 via a push notification simulation or demo control.

---

### Screen 6: Match Notification
**Purpose:** Sarah receives a notification that a nearby patient needs her help.

**Content:**
- Notification-style card (could slide in from top):
  - "🔔 New Match Opportunity"
  - "A neighbor near you needs help with a **Total Knee Replacement** recovery."
  - "Surgery date: April 15, 2026"
  - "Location: ~8 miles from you"
  - "30-day commitment: April 15 – May 15"
- Two buttons: "View Details" (primary) and "Not Available" (secondary/text)

**Demo behavior:** Tapping "View Details" advances to Screen 7.

---

### Screen 7: Match Details — Availability Check
**Purpose:** Sarah reviews the details and confirms her availability for the recovery window.

**Content:**
- Patient info card (anonymized):
  - "James M." (first name + last initial only)
  - Surgery type: Total Knee Replacement
  - Hospital: Intermountain Health — Saint Joseph
  - Surgery date: April 15, 2026
  - Recovery window: April 15 – May 15
- "Key Dates" calendar view showing:
  - April 15: Hospital discharge & ride home
  - April 16: Day 1 check-in
  - April 18: Day 3 check-in
  - April 22: Day 7 check-in
  - Weekly check-ins thereafter
- Toggle availability for each milestone: all default to "Available" (green)
- Privacy notice: "Your personal contact information will not be shared with the patient at this stage."
- Button: "Accept Introduction"

**Demo behavior:** Tapping "Accept Introduction" advances to Screen 8.

---

### Screen 8: Calendar Block Confirmation
**Purpose:** Confirm that a soft calendar block has been pushed.

**Content:**
- "Introduction Accepted!"
- "We've added a tentative recovery window to your calendar: April 15 – May 15"
- Visual showing a calendar with the blocked dates highlighted in teal
- Note: "This is a soft hold. If the match doesn't proceed, it will be automatically removed."
- "Next step: You'll meet James over a sponsored coffee to make sure you're a good fit. You'll receive scheduling details shortly."
- Button: "Got It"

**Demo behavior:** Advances to Screen 9.

---

### Screen 9: Coffee Meet — Scheduling
**Purpose:** The in-app scheduling for the sponsored introduction meeting.

**Content:**
- Header: "☕ Meet James — Your First Round Is On Us"
- Brief explanation: "CareTaker Match sponsors a coffee meeting so you and James can meet in a safe, public setting. Neither of you needs to share personal contact information."
- Location card:
  - "Starbucks — Union Blvd & Wadsworth"
  - Address shown on a small static map placeholder
  - "~4 miles from you"
- Available time slots (radio buttons):
  - "Sat, March 29 — 10:00 AM" ← pre-selected
  - "Sun, March 30 — 2:00 PM"
  - "Mon, March 31 — 11:00 AM"
- Button: "Confirm Meeting"

**Demo behavior:** Advances to Screen 10.

---

### Screen 10: Coffee Meet — Day Of (Barcode Screen)
**Purpose:** The barcode/QR code Sarah shows to the barista to redeem the sponsored coffee.

**Content:**
- Header: "Your Coffee Meet with James"
- "Saturday, March 29 — 10:00 AM"
- "Starbucks — Union Blvd & Wadsworth"
- Large QR code (can be a placeholder/generated dummy)
- "Show this code to your barista for your complimentary drink."
- Status indicator: "Waiting for James to check in..." (with a subtle pulsing animation)
- Small text: "When both barcodes are scanned, your meeting will be verified."

**Demo behavior:** After a moment (or demo control), status changes to "✅ Both checked in! Enjoy your coffee." Advances to Screen 11 after the meeting.

---

### Screen 11: Post-Coffee — Mutual Consent
**Purpose:** After the meeting, Sarah confirms whether she wants to proceed.

**Content:**
- Header: "How did it go?"
- "You met James at Starbucks on March 29."
- Question: "Based on your meeting, are you committed to being James's recovery partner for the next 30 days?"
- Two large buttons:
  - "✅ Yes, I'm Committed" (teal, primary)
  - "I'd prefer not to proceed" (gray, secondary)
- Note: "If you choose not to proceed, you'll be returned to the volunteer pool with no negative impact. James will be matched with another volunteer."
- Privacy note: "Your personal contact information has not been shared and will not be shared unless both parties approve."

**Demo behavior:** Tapping "Yes, I'm Committed" advances to Screen 12. "Waiting for James to confirm" interstitial could appear briefly.

---

### Screen 12: Match Confirmed!
**Purpose:** Both parties have approved. The encounter is now active.

**Content:**
- Celebration moment — checkmark with confetti or subtle animation
- "Match Confirmed! 🎉"
- "You and James are officially matched for his Total Knee Replacement recovery."
- Updated info card:
  - "James Morrison" (full name now visible)
  - Surgery: April 15, 2026
  - Recovery window: April 15 – May 15
- "Your calendar has been updated with confirmed check-in dates."
- "You can now coordinate with James through secure in-app chat."
- Important note: "All communications are monitored for safety. For your protection, please keep all coordination within the app."
- Button: "Open Chat with James"

**Demo behavior:** Advances to Screen 13.

---

### Screen 13: In-App Chat
**Purpose:** Show the secure messaging experience with LLM monitoring indicators.

**Content — Pre-populated conversation:**
- System message: "This is a secure CareTaker Match conversation. All messages are monitored for safety. 🔒"
- James (4:15 PM): "Hi Sarah! Thanks for agreeing to help me out. I'm nervous about the surgery but feeling better knowing someone will be there."
- Sarah (4:18 PM): "Hi James! I totally understand the nerves. I had the same surgery two years ago and I promise you — you'll be great. I'll be there every step of the way."
- James (4:20 PM): "That means a lot. Quick question — what should I have ready at home for when I get back?"
- Sarah (4:22 PM): "Great question! I'll send you a checklist I put together from my own experience. The big things: ice packs, a grabber tool, and a shower chair."
- System message: "📋 Sarah shared: Post-Surgery Home Prep Checklist"

**UI elements:**
- Standard chat bubble layout (Sarah = right/teal, James = left/gray)
- Text input field at bottom with send button
- Small lock icon in the header: "🔒 Encrypted & Monitored"
- If the presenter types something with a phone number (like "Call me at 303-555-1234"), show a subtle system intervention: "⚠️ For your safety, personal contact information is not shared during the active care period. Please keep coordination within the app."

**Demo behavior:** Chat is scrollable. Typing is possible but messages just appear locally. The LLM intervention is triggered by a demo control or by actually typing a phone number pattern.

---

### Screen 14: Active Encounter — Home Dashboard
**Purpose:** Sarah's home screen during the active 30-day encounter.

**Content:**
- Status bar: "Active Encounter — Day 7 of 30"
- Progress bar showing day 7/30
- James's card:
  - "James Morrison — Total Knee Replacement"
  - "Next check-in: Tomorrow, April 22 at 10:00 AM"
  - Quick actions: "Chat" | "View Calendar" | "Log Check-in"
- Check-in tracker:
  - ✅ April 15: Hospital pickup (completed)
  - ✅ April 16: Day 1 check-in (completed)
  - ✅ April 18: Day 3 check-in (completed)
  - 🔵 April 22: Day 7 check-in (upcoming — highlighted)
  - ⬜ April 29: Day 14 check-in
  - ⬜ May 6: Day 21 check-in
  - ⬜ May 13: Day 28 check-in
  - ⬜ May 15: Encounter close
- Bottom tab bar

**Demo behavior:** Tapping "Log Check-in" opens Screen 15. Demo controls allow jumping to Screen 16 (encounter close).

---

### Screen 15: Check-in Log
**Purpose:** Sarah logs a completed check-in visit.

**Content:**
- Header: "Log Check-in — Day 7"
- "How is James doing today?"
- Mood selector (emoji-style): 😟 😐 🙂 😊 😄 — pre-selected: 😊
- "Any concerns to report?"
  - Radio: "No concerns — recovery on track" ← selected
  - Radio: "Minor concern (not urgent)"
  - Radio: "Urgent concern — needs clinical attention"
- "Notes (optional):" — text area pre-filled: "James is moving around well with the walker. Good spirits. Pain managed."
- "Duration of visit:" — "45 minutes" dropdown
- Button: "Submit Check-in"

**Demo behavior:** Submitting shows a "✅ Check-in logged" confirmation and returns to Screen 14 with the day 7 item now checked off.

---

### Screen 16: Encounter Close — Day 30
**Purpose:** The encounter is ending. Final survey and the "air gap" transition.

**Content:**
- Header: "Encounter Complete 🎉"
- "Your 30-day recovery support for James is now complete. Thank you for making a difference!"
- Rating section:
  - "How would you rate your experience?" — 5 stars (pre-filled: 5)
  - "Would you volunteer again?" — Toggle: Yes
- The Community Question:
  - "Did you find this match meaningful enough that you would consider staying in touch with James as a friend?" — Radio: Yes / No (pre-selected: Yes)
- Impact summary card:
  - "Your Impact This Encounter:"
  - 7 check-ins completed
  - 1 hospital pickup
  - 42 in-app messages exchanged
  - 12.5 care hours logged
  - "Social Impact Score: ⭐ 312 points"
- Disclaimer box (subtle, important):
  - "The CareTaker Match communication portal will close in 24 hours. If you and James wish to stay in touch, you are welcome to exchange contact information via the chat. By doing so, you acknowledge that further communication is outside of CareTaker Match's safety protocols."
- Button: "Submit & Close Encounter"

**Demo behavior:** This is the final screen. The demo controls can loop back to any state.

---

## 5. Global UI Components

### Bottom Tab Bar
Present on all post-login screens:
- **Home** (house icon) — Screens 5, 14
- **My Matches** (people icon) — Shows list of encounters (current + 5 past)
- **Calendar** (calendar icon) — Shows the encounter dates
- **Messages** (chat icon) — Opens chat (Screen 13)
- **Profile** (person icon) — Shows Sarah's profile, stats, verification status

### Status Indicators
Throughout the app, use consistent visual indicators:
- 🟢 Green badge = verified/complete
- 🔵 Blue = in progress/upcoming
- 🟡 Yellow = needs attention
- 🔴 Red = urgent/blocked
- 🔒 Lock icon = privacy/encryption indicator

### Demo Controls Panel
Floating button (small, semi-transparent) in top-right corner. Opens a slide-out panel with:
- List of all screens with names
- Current screen highlighted
- Tap to jump to any screen
- "Reset Demo" button to return to Screen 1
- Small "CareTaker Match Demo v1.0" label

---

## 6. Companion Personas (Future Specs)

### Patient App (App 2 — spec to follow)
Mobile-width web app showing James's perspective:
- iPad intake questionnaire (suitability score)
- Match gallery (seeing Sarah's anonymized profile among 1–3 candidates)
- Anonymous in-app call
- Coffee meet from patient's perspective
- Mutual consent
- Active recovery dashboard with check-in confirmations
- Encounter close and rating

### Clinician iPad App (App 3 — spec to follow)
Tablet-width web app showing Dr. Eickmann's perspective:
- Pre-op patient dashboard with discharge strategy flags
- CareTaker Match suitability score review
- "Approve for Home Discharge" workflow
- Match status tracking (pending → coffee meet → confirmed)
- Encounter monitoring dashboard
- TEAM quality reporting view

---

## 7. File Structure Suggestion

```
caretaker-match-demo/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── PhoneFrame.jsx          # iPhone bezel wrapper
│   │   ├── BottomTabBar.jsx        # iOS-style tab bar
│   │   ├── DemoControls.jsx        # Floating demo navigation
│   │   ├── StatusBadge.jsx         # Reusable status indicators
│   │   └── ChatBubble.jsx          # Chat message component
│   ├── screens/
│   │   ├── volunteer/
│   │   │   ├── Welcome.jsx              # Screen 1
│   │   │   ├── SignupPersonal.jsx       # Screen 2
│   │   │   ├── SignupExperience.jsx     # Screen 3
│   │   │   ├── ApplicationSubmitted.jsx # Screen 4
│   │   │   ├── HomeApproved.jsx         # Screen 5
│   │   │   ├── MatchNotification.jsx    # Screen 6
│   │   │   ├── MatchDetails.jsx         # Screen 7
│   │   │   ├── CalendarConfirm.jsx      # Screen 8
│   │   │   ├── CoffeeMeetSchedule.jsx   # Screen 9
│   │   │   ├── CoffeeMeetBarcode.jsx    # Screen 10
│   │   │   ├── MutualConsent.jsx        # Screen 11
│   │   │   ├── MatchConfirmed.jsx       # Screen 12
│   │   │   ├── Chat.jsx                 # Screen 13
│   │   │   ├── ActiveEncounter.jsx      # Screen 14
│   │   │   ├── CheckinLog.jsx           # Screen 15
│   │   │   └── EncounterClose.jsx       # Screen 16
│   │   ├── patient/                     # Future
│   │   └── clinician/                   # Future
│   ├── data/
│   │   └── demoData.js             # All hardcoded names, dates, messages
│   └── styles/
│       └── globals.css
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 8. Key Architectural Principles for the Builder

1. **All data is hardcoded.** No API calls. No localStorage persistence needed (though state should persist during a session).
2. **State machine driven.** The volunteer workflow is a linear state machine with 16 states. The demo controls allow jumping to any state. Forward navigation follows the natural flow.
3. **The phone frame is important.** On desktop, this should look like an investor is seeing the actual iPhone app. The phone bezel/frame sells the illusion.
4. **The LLM safety intervention in chat (Screen 13) is a key demo moment.** Hamid will specifically want to show investors that if someone types a phone number, the system catches it. Make this work reliably.
5. **Keep the code modular.** The patient and clinician apps will be added later using the same component library (ChatBubble, StatusBadge, etc.).
6. **The encounter close disclaimer (Screen 16) is legally important.** The specific language about communications being "outside of CareTaker Match's safety protocols" needs to be visible and clear. This is the "Liability Air Gap" in action.

---

## 9. Reference Documents

- CareTaker Match: System Architecture & Workflow Specification (extracted from Gemini sessions)
- CareTaker Match: PRD v1.1 (contains full clinical scoring algorithm and TEAM alignment)
- CareTaker Match: Personas & Workflow Presentation (10-slide investor deck)
- SpineLinQ deck (2016) — reference for how Hamid presented app mockups to investors previously

---

*This spec is ready for Claude Code. Start with Screens 1–8 (signup through coffee meet scheduling), verify the flow works, then build Screens 9–16 (coffee meet through encounter close).*
