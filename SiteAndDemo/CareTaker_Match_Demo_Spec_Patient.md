# CareTaker Match — Interactive Demo Build Specification
## Patient Workflow (App 2 of 3)

**Version:** 1.0  
**Author:** Whit Walters, CTO  
**Target Builder:** Claude Code  
**Date:** March 2026  
**Fidelity:** Medium — clean, professional UI that clearly functions as a demo but looks like a real app  
**Prerequisite:** Read the Volunteer Workflow spec first. This spec shares the same design system, color palette, component library, and demo scenario.

---

## 1. Project Context

This is the **Patient persona** of the CareTaker Match interactive demo. It shows the experience from James Morrison's perspective — a 68-year-old Medicare patient facing a total knee replacement with no family or friends to help with recovery.

The patient journey is the emotional core of the pitch. Investors need to see how a vulnerable person goes from "I have nobody" to "I have Sarah" through a process that feels safe, private, and clinically sound. The graduated privacy model is the star of this workflow — the investor should come away understanding that the patient is always in control.

**Same demo scenario as the Volunteer spec.** Sarah Chen is the volunteer. Dr. Tom Eickmann is the clinician. Intermountain Health — Saint Joseph Hospital. Surgery date April 15, 2026.

---

## 2. Technical Requirements

### Shared With Volunteer App
- Same React project, same Tailwind config, same component library
- Same phone frame wrapper on desktop
- Same demo controls panel pattern
- Same color palette: Teal (#0B8A7E), Navy (#1A3550), Coral (#E8634A), Off-white (#F7F5F0)

### Patient-Specific
- The patient app should use **Coral (#E8634A)** as its accent color (vs. Teal for volunteer) so the presenter and investor can immediately tell which persona they're looking at
- Navigation: Bottom tab bar with: Home, My Recovery, Calendar, Messages, Support
- "Support" tab (instead of volunteer's "Profile") opens a help/FAQ screen — patients are less tech-savvy, so the app feels more guided and supportive

### Entry Point
- The top-level demo app should have a persona selector: "View as: Volunteer | Patient | Clinician"
- Selecting "Patient" loads this workflow

---

## 3. How the Patient Enters the System

Important context: **The patient does not download an app and sign up on their own.** The journey begins on the clinician's iPad during a pre-op consult. The Medical Assistant hands the patient an iPad, they complete a suitability questionnaire, and the clinician approves them for CareTaker Match. Only then does the patient receive instructions to download the app on their phone.

This means Screen 1 for the patient is **not** a generic welcome page — it's a personalized onboarding that already knows who they are and what procedure they're having. The hospital has pre-registered them.

---

## 4. Screen-by-Screen Specification

### Screen 1: iPad Intake — Suitability Questionnaire
**Purpose:** This is the first touchpoint. The patient is sitting in the pre-op clinic and has been handed an iPad by the Medical Assistant. This screen should render at **tablet width** (768px) even though the rest of the patient app is mobile-width — it's a different device.

**Content:**
- Header: CareTaker Match logo + "Patient Intake Assessment"
- Patient info bar (pre-populated from EMR):
  - "James Morrison"
  - DOB: 09/12/1957
  - Procedure: Total Knee Replacement (Right)
  - Surgeon: Dr. Tom Eickmann
  - Surgery Date: April 15, 2026
  - Insurance: Medicare Parts A & B
- Section: "Post-Surgical Support Assessment"
  - "Do you have a family member or friend who can stay with you for the first 3 days after surgery?" → Radio: **No** ← selected
  - "Do you have someone who can drive you home from the hospital?" → Radio: **No** ← selected
  - "Do you live alone?" → Radio: **Yes** ← selected
  - "Do you have any mobility limitations at home (stairs, narrow doorways)?" → Radio: "Some — 3 steps to front door"
  - "Have you had a previous surgical procedure with a recovery period longer than 1 week?" → Radio: **Yes** — "Hip replacement, 2019"
  - "How would you rate your comfort level with having a trained volunteer assist your recovery?" → Scale 1–5: **4** selected
- Section: "Consent"
  - Checkbox: "I understand that CareTaker Match uses a graduated privacy model. My personal information will not be shared with volunteers until I explicitly approve." ✅
  - Checkbox: "I consent to AI-monitored communications for my safety during the encounter." ✅
  - Checkbox: "I understand that all in-app communications are recorded for clinical and safety purposes." ✅
- Button: "Submit Assessment"

**Scoring indicator (visible to clinician, not patient):**
- After submission, show a brief "Assessment Complete" screen with:
  - "CareTaker Match Suitability Score: 87/100"
  - "Recommendation: ✅ Eligible for Home Discharge with Peer Support"
  - "This assessment has been sent to Dr. Eickmann for review."

**Demo behavior:** Advances to Screen 2. The demo controls should note: "In production, there is a gap here — the clinician reviews and approves on their iPad (see Clinician spec). The patient then receives an email/text with instructions to download the CareTaker Match app."

---

### Screen 2: App Download & Personalized Onboarding
**Purpose:** James has downloaded the app on his iPhone after receiving instructions from the hospital. The app recognizes him from the intake. **This screen and all following screens render at mobile width inside the phone frame.**

**Content:**
- CareTaker Match logo
- "Welcome, James"
- "Saint Joseph Hospital and Dr. Eickmann have enrolled you in CareTaker Match to help with your recovery from Total Knee Replacement on April 15."
- "Here's how it works:" — 3 simple steps with icons:
  1. 🔍 "We'll match you with a vetted volunteer who's been through a similar experience"
  2. ☕ "You'll meet them over coffee before your surgery — no commitment, no personal info shared"
  3. 🏠 "If you both agree, they'll support your recovery with check-ins, rides, and companionship"
- "Your privacy is our priority. You control what information is shared and when."
- Button: "Get Started"

**Demo behavior:** Advances to Screen 3.

---

### Screen 3: Profile Setup
**Purpose:** James confirms his info and adds anything the hospital intake didn't capture.

**Content — Form (pre-filled from intake):**
- Photo: Optional upload (show a placeholder avatar with "Add Photo (Optional)")
- Name: James Morrison (read-only, from EMR)
- Phone: (720) 555-0188 (editable)
- Home address: "1847 Garrison St, Lakewood, CO 80226" — with note: "Your exact address is never shared with volunteers. We use it only for proximity matching."
- Emergency contact: "Dr. Eickmann's office — (303) 555-0200" (pre-filled from hospital)
- "Anything your volunteer should know about your home setup?" — Text area: "I have 3 steps at the front door. My bedroom is on the main floor. My dog Buster is friendly."
- Button: "Save & Continue"

**Demo behavior:** Advances to Screen 4.

---

### Screen 4: Home — Waiting for Match
**Purpose:** James's home screen while the algorithm searches for a match.

**Content:**
- "Hi James" with a warm greeting
- Status card with visual timeline:
  - ✅ Assessment complete
  - ✅ Clinician approved
  - 🔵 Finding your match... (active, with a subtle animation)
  - ⬜ Introduction meeting
  - ⬜ Recovery begins
- Surgery countdown: "Your surgery is in 18 days"
- "What to expect next:" expandable card explaining the matching process: "Our algorithm is searching for a volunteer near you who has experience with knee replacement recovery. You'll see 1–3 candidates to review."
- Helpful resources card: "Preparing for Surgery" with links to generic prep content
- Bottom tab bar

**Demo behavior:** Demo controls or timed transition advances to Screen 5.

---

### Screen 5: Match Gallery
**Purpose:** The patient reviews 1–3 matched volunteer profiles. This is a critical screen — it shows the graduated privacy model in action.

**Content:**
- Header: "We Found Your Match!"
- Subtitle: "Based on your procedure, location, and recovery needs, we've selected these volunteers for you."
- **Card 1 (Recommended — highlighted):** Sarah Chen
  - Photo: Placeholder (friendly female avatar or silhouette with a note: "Photo available after mutual approval")
  - Name: "Sarah C."
  - Verification badge: "✅ Background Checked & Verified"
  - Procedure match: "🦵 Had a Total Knee Replacement — March 2024"
  - Experience: "5 successful recoveries · ⭐ 4.9 rating"
  - Distance: "~8 miles from you"
  - Bio: "After my own knee replacement, I know how hard recovery is when you're alone. I want to be the person I wish I'd had."
  - Button: "Request Introduction"

- **Card 2:** Michael R.
  - Verification badge: "✅ Verified"
  - Procedure match: "Expert Volunteer — 3 Successful Recoveries"
  - Rating: ⭐ 4.7
  - Distance: "~12 miles from you"
  - Bio: "Retired nurse. I love helping people get back on their feet."
  - Button: "Request Introduction" (secondary style)

- **Card 3:** (Optional — could show or not)
  - Less complete profile to show range

- Privacy callout at bottom: "🔒 You're seeing first name and last initial only. Full names and contact information are shared only after you both approve the match."

**Demo behavior:** Tapping "Request Introduction" on Sarah's card advances to Screen 6.

---

### Screen 6: Introduction Requested — Waiting for Volunteer
**Purpose:** James has selected Sarah. The system is now notifying her and waiting for her to accept.

**Content:**
- Header: "Introduction Requested!"
- Sarah's card (same info as match gallery)
- Status: "⏳ Waiting for Sarah to confirm availability..."
- "What happens next:" timeline:
  1. "Sarah reviews your recovery dates" (in progress)
  2. "You'll schedule a coffee meeting at a public location"
  3. "After meeting, you both decide if it's a good fit"
  4. "If you both approve, Sarah becomes your recovery partner"
- Reassurance: "Remember — no personal information has been shared. If Sarah isn't available, we'll connect you with your next match."

**Demo behavior:** Transitions (via demo control or timed) to Screen 7 when Sarah accepts.

---

### Screen 7: Introduction Accepted — Coffee Meet Scheduling
**Purpose:** Sarah has accepted. Time to schedule the introduction meeting.

**Content:**
- "Great News! Sarah has confirmed she's available for your recovery window. ☕"
- "Let's schedule your introduction meeting. CareTaker Match is buying the coffee!"
- Location card:
  - "Starbucks — Union Blvd & Wadsworth"
  - Small map placeholder
  - "~5 miles from you"
- Available time slots (radio buttons):
  - "Sat, March 29 — 10:00 AM" ← pre-selected
  - "Sun, March 30 — 2:00 PM"
  - "Mon, March 31 — 11:00 AM"
- "Can't make any of these times?" link (would open a rescheduling flow in production)
- Button: "Confirm Meeting"

**Demo behavior:** Advances to Screen 8.

---

### Screen 8: Coffee Meet Confirmed
**Purpose:** Confirmation screen with details and what to expect.

**Content:**
- "You're All Set! ☕"
- Meeting details card:
  - "Saturday, March 29 at 10:00 AM"
  - "Starbucks — Union Blvd & Wadsworth"
  - "Your coffee is on us — just show your barcode to the barista"
- "What to expect:"
  - "Sarah will introduce herself — you'll know her by the CareTaker Match notification on her phone"
  - "This is a casual, no-pressure conversation"
  - "Afterward, you'll both decide privately in the app if you'd like to proceed"
  - "If either of you prefers a different match, that's completely fine — no questions asked"
- "Your privacy:"
  - "Sarah knows your first name and surgery type only"
  - "Your phone number, address, and last name have not been shared"
- Calendar integration: "Added to your calendar" with a small calendar icon
- Button: "Got It"

**Demo behavior:** Advances to Screen 9.

---

### Screen 9: Coffee Meet — Day Of (Barcode Screen)
**Purpose:** James's barcode for the sponsored coffee.

**Content:**
- Header: "Your Coffee Meet with Sarah"
- "Saturday, March 29 — 10:00 AM"
- "Starbucks — Union Blvd & Wadsworth"
- Large QR code (placeholder/dummy)
- "Show this code to your barista for your complimentary drink."
- Status: "Waiting for Sarah to check in..." (pulsing)
- Helpful tip: "Look for Sarah near the entrance — she'll have the CareTaker Match app open on her phone too."

**Demo behavior:** Status updates to "✅ Both checked in!" then advances to Screen 10 after the meeting.

---

### Screen 10: Post-Coffee — Mutual Consent (Patient Side)
**Purpose:** After the meeting, James decides if he wants Sarah as his recovery partner.

**Content:**
- Header: "How did your meeting go?"
- "You met Sarah at Starbucks on March 29."
- Question: "Do you feel safe and comfortable having Sarah assist your recovery?"
- Two large buttons:
  - "✅ Yes, I'd Like Sarah as My Recovery Partner" (coral, primary)
  - "I'd prefer a different match" (gray, secondary)
- Reassurance text: "If you choose a different match, Sarah will not be told why. You'll be connected with your next-ranked volunteer immediately."
- Privacy note: "No personal contact information has been exchanged. If you approve, your full name and care calendar will be shared with Sarah."
- Small expandable: "What happens if I say no?" — "You'll see the next volunteer candidate from your original match list. This has no negative impact on you or on Sarah."

**Demo behavior:** Tapping "Yes" shows a brief "Waiting for Sarah to confirm..." interstitial, then advances to Screen 11.

---

### Screen 11: Match Confirmed! (Patient Side)
**Purpose:** Both parties approved. The encounter is active.

**Content:**
- Warm celebration moment
- "You Have a Recovery Partner! 🎉"
- "Sarah Chen will be supporting your recovery from Total Knee Replacement."
- Sarah's full profile card (now with full name visible):
  - "Sarah Chen"
  - "✅ Background Checked & Verified"
  - "Had Total Knee Replacement — March 2024"
  - "5 successful recoveries · ⭐ 4.9"
- "Your Surgery: April 15, 2026 — Saint Joseph Hospital"
- "Sarah will:"
  - "Pick you up from the hospital after discharge"
  - "Check in on Days 1, 3, 7, and weekly after that"
  - "Be available via in-app chat and calls throughout your recovery"
- "All communications happen securely within this app."
- Button: "Send Sarah a Message"

**Demo behavior:** Advances to Screen 12.

---

### Screen 12: In-App Chat (Patient Side)
**Purpose:** Show the chat from James's perspective. Same conversation as the volunteer spec but from the other side.

**Content — Pre-populated conversation:**
- System message: "This is a secure CareTaker Match conversation. All messages are monitored for safety. 🔒"
- James (4:15 PM): "Hi Sarah! Thanks for agreeing to help me out. I'm nervous about the surgery but feeling better knowing someone will be there."
- Sarah (4:18 PM): "Hi James! I totally understand the nerves. I had the same surgery two years ago and I promise you — you'll be great. I'll be there every step of the way."
- James (4:20 PM): "That means a lot. Quick question — what should I have ready at home for when I get back?"
- Sarah (4:22 PM): "Great question! I'll send you a checklist I put together from my own experience. The big things: ice packs, a grabber tool, and a shower chair."
- System message: "📋 Sarah shared: Post-Surgery Home Prep Checklist"

**UI elements:**
- James's messages on right (coral bubbles), Sarah's on left (gray)
- 🔒 indicator in header
- Same LLM safety intervention as volunteer spec — if presenter types a phone number, show warning

**Demo behavior:** Scrollable, interactive. Advances to Screen 13 via demo controls.

---

### Screen 13: Pre-Surgery Countdown
**Purpose:** The home screen in the days before surgery. Builds confidence.

**Content:**
- "Surgery in 3 Days"
- Visual countdown with a large number
- Checklist card: "Pre-Surgery Prep"
  - ✅ Met your recovery partner (Sarah)
  - ✅ Home prep checklist reviewed
  - ✅ Pre-op appointment with Dr. Eickmann — March 31
  - 🔵 Sarah confirmed for hospital pickup — April 15
  - ⬜ Surgery day — April 15
- Sarah's quick contact card:
  - "Sarah Chen — Your Recovery Partner"
  - "Chat" button | "Call" button (in-app VoIP)
- "Feeling anxious?" — expandable section with reassurance content and a link to "Talk to your care team"
- Bottom tab bar

**Demo behavior:** Advances to Screen 14 via demo controls (jump to post-surgery).

---

### Screen 14: Active Recovery — Home Dashboard (Patient Side)
**Purpose:** James's view during the 30-day recovery period.

**Content:**
- "Recovery Day 7" with a progress ring showing 7/30
- How are you feeling today? — Mood selector: 😟 😐 🙂 😊 😄 (pre-selected: 🙂)
- Sarah's card:
  - "Sarah Chen — Your Recovery Partner"
  - "Next visit: Tomorrow, April 22 at 10:00 AM"
  - Quick actions: "Chat" | "Call"
- Recovery milestones:
  - ✅ April 15: Sarah picked you up from the hospital
  - ✅ April 16: Day 1 check-in — "How was your first night?"
  - ✅ April 18: Day 3 check-in — "Pain level: 4/10. Mobility improving."
  - 🔵 April 22: Day 7 check-in (upcoming)
  - ⬜ April 29: Day 14 check-in
  - ⬜ May 6: Day 21 check-in
  - ⬜ May 13: Day 28 check-in
  - ⬜ May 15: Recovery complete 🎉
- "Need help now?" emergency card:
  - "If you're experiencing a medical emergency, call 911"
  - "Non-urgent clinical question? Contact Dr. Eickmann's office"
  - "Concern about your volunteer? Contact CareTaker Match support"
- Bottom tab bar

**Demo behavior:** Demo controls can jump to Screen 15 (encounter close).

---

### Screen 15: Encounter Close — Day 30 (Patient Side)
**Purpose:** The encounter is complete. Rating, community question, and the liability air gap.

**Content:**
- "Recovery Complete! 🎉"
- "Congratulations, James. Your 30-day recovery support is now officially complete."
- Rating section:
  - "How would you rate Sarah's support?" — 5 stars (pre-filled: 5)
  - "Did Sarah show up on time for visits?" — Yes / Mostly / No (pre-selected: Yes)
  - "Did you feel safe throughout the encounter?" — Yes / No (pre-selected: Yes)
- The Community Question:
  - "Did you find this match meaningful enough that you would consider staying in touch with Sarah as a friend?" — Radio: Yes / No (pre-selected: Yes)
- Recovery summary:
  - "Your Recovery Journey:"
  - Surgery: Total Knee Replacement — April 15
  - Recovery partner: Sarah Chen
  - Check-ins completed: 7 of 7
  - Days supported: 30
  - "You did it! 💪"
- Disclaimer box:
  - "The CareTaker Match communication portal will close in 24 hours. If you and Sarah wish to stay in touch, you are welcome to exchange contact information via the chat now. By doing so, you acknowledge that further communication is outside of CareTaker Match's safety protocols."
- Button: "Submit & Close"

**Demo behavior:** Final screen for patient workflow. Demo controls can loop back to any state.

---

## 5. Key Differences from Volunteer App

| Aspect | Volunteer (Sarah) | Patient (James) |
|--------|-------------------|-----------------|
| Accent color | Teal (#0B8A7E) | Coral (#E8634A) |
| Entry point | Self-signup in app | iPad intake at hospital, then app download |
| Tab bar | Home, My Matches, Calendar, Messages, Profile | Home, My Recovery, Calendar, Messages, Support |
| Tone | Empowering, "make a difference" | Reassuring, "you're not alone" |
| Match gallery | Receives notification of one patient | Reviews 1–3 volunteer candidates |
| Privacy emphasis | "Your info isn't shared" | "You control what's shared and when" |
| Post-encounter | Social Impact Score | Recovery summary |
| Complexity | More steps (vetting, availability) | Simpler flow (guided, supportive) |

---

## 6. Screens Unique to Patient App

These screens exist only in the patient workflow and have no volunteer equivalent:

- **Screen 1 (iPad Intake):** Renders at tablet width. This is the only screen in the patient app that isn't a phone-width screen. The demo should visually transition from "iPad view" to "phone view" between Screen 1 and Screen 2, perhaps with a brief interstitial: "James has downloaded the CareTaker Match app on his phone."
- **Screen 5 (Match Gallery):** The patient sees and chooses from candidates. The volunteer receives a single notification.
- **Screen 13 (Pre-Surgery Countdown):** Patient-specific. Builds confidence and shows the care coordination leading into surgery.

---

## 7. Shared Screens (Same Moment, Different Perspective)

These screens show the same encounter moment but from the patient's perspective:

| Moment | Volunteer Screen | Patient Screen |
|--------|-----------------|----------------|
| Coffee meet scheduling | Vol Screen 9 | Pat Screen 7 |
| Barcode at coffee shop | Vol Screen 10 | Pat Screen 9 |
| Mutual consent | Vol Screen 11 | Pat Screen 10 |
| Match confirmed | Vol Screen 12 | Pat Screen 11 |
| In-app chat | Vol Screen 13 | Pat Screen 12 |
| Active encounter dashboard | Vol Screen 14 | Pat Screen 14 |
| Encounter close | Vol Screen 16 | Pat Screen 15 |

**Important for the builder:** These screens should use the same underlying components (ChatBubble, StatusBadge, calendar view, etc.) but with the appropriate accent color and perspective-specific content. Don't duplicate the component code — parameterize the persona.

---

## 8. Demo Controls — Patient-Specific States

The demo controls panel for the patient app should list:

1. iPad Intake (tablet view)
2. App Onboarding (phone view starts here)
3. Profile Setup
4. Waiting for Match
5. Match Gallery ← key demo moment
6. Waiting for Volunteer
7. Coffee Meet Scheduling
8. Coffee Meet Confirmed
9. Barcode Screen
10. Mutual Consent ← key demo moment
11. Match Confirmed!
12. In-App Chat ← key demo moment (LLM safety)
13. Pre-Surgery Countdown
14. Active Recovery Dashboard
15. Encounter Close ← key demo moment (air gap)

---

## 9. Emotional Arc

The patient workflow has a deliberate emotional arc that the presenter should be able to walk through:

1. **Vulnerability** (Screens 1–3): "I have nobody. I'm scared."
2. **Hope** (Screens 4–5): "Someone wants to help me? And they've been through this too?"
3. **Cautious trust** (Screens 6–9): "I'm meeting Sarah. She seems kind. But I'm still protected."
4. **Commitment** (Screens 10–11): "I choose Sarah. She chose me. I'm not alone."
5. **Confidence** (Screens 12–14): "I have a plan. I have a partner. I can do this."
6. **Gratitude** (Screen 15): "I made it. And I made a friend."

**This emotional arc is the pitch.** When Hamid walks an investor through this, the investor should feel the transformation. The product isn't an app — it's the difference between going home alone and going home with Sarah.

---

## 10. File Structure Addition

Add these to the existing project structure:

```
src/screens/patient/
├── iPadIntake.jsx              # Screen 1 (tablet width)
├── AppOnboarding.jsx           # Screen 2
├── ProfileSetup.jsx            # Screen 3
├── WaitingForMatch.jsx         # Screen 4
├── MatchGallery.jsx            # Screen 5
├── WaitingForVolunteer.jsx     # Screen 6
├── CoffeeMeetSchedule.jsx      # Screen 7
├── CoffeeMeetConfirmed.jsx     # Screen 8
├── CoffeeMeetBarcode.jsx       # Screen 9
├── MutualConsent.jsx           # Screen 10
├── MatchConfirmed.jsx          # Screen 11
├── Chat.jsx                    # Screen 12
├── PreSurgeryCountdown.jsx     # Screen 13
├── ActiveRecovery.jsx          # Screen 14
└── EncounterClose.jsx          # Screen 15
```

---

*This spec is ready for Claude Code. Build after the Volunteer workflow is working. Reuse the shared component library — the patient app should feel like the same product with a different perspective, not a different product.*
