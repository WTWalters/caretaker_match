# CareTaker Match — Product Specification

**Version:** 1.0  
**Source:** Extracted from interactive demo (Next.js/TypeScript)  
**Date:** May 2026

---

## 1. Overview

CareTaker Match connects joint replacement surgery patients who need post-operative care with volunteer companions who have been through the same experience. The platform operates on a two-persona model with an Overseer coordinator role sitting between them.

### 1.1 Personas

| Persona | Description | App surface |
|---------|-------------|-------------|
| **Patient** | Joint replacement surgery patient who lacks full-time family support at home | iPhone app (enrollment + ongoing) |
| **Volunteer** | Former joint replacement patient or community member willing to provide 3-day post-op support plus ~1 month of follow-up | iPhone app (registration + ongoing) |
| **Overseer** | CareTaker Match staff member who reviews approvals, monitors active encounters, and intervenes when flags are raised | Web dashboard (desktop) |

### 1.2 Lifecycle Stages

The platform defines an 8-step encounter lifecycle (from the Overseer webapp):

1. Assessment & Enrollment (iPad Intake)
2. Clinician Approval (EMR Trigger)
3. Matching Algorithm (1–3 Candidates)
4. Anonymous Introduction (In-App Only)
5. Coffee Meet & Consent (Barcode Verified)
6. Active Recovery (Days 0–30)
7. Monitor Encounter (Overseer Escalation)
8. Close & Evaluate (Outcomes)

---

## 2. Patient Enrollment Flow

**Duration estimate shown to user:** "About 8 minutes"  
**Progress bar:** Steps 1–11 of 11 screens  
**Platform:** iPhone (390px wide, 812px tall frame)

### Screen 0 — Welcome / Splash

**Purpose:** Introduce the program.  
**Content:**
- CTM logo
- Headline: "CareTaker Match"
- Body copy explaining the peer-recovery concept
- Teal info banner: "About 8 minutes to get started. We'll keep you updated at every step."

**Action:** "Let's get started" button → Screen 1  
**Data collected:** None

---

### Screen 1 — Identity & Contact

**Purpose:** Collect basic identity and contact info.  
**Fields:**

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `firstName` | text | yes | Non-empty |
| `lastName` | text | yes | Non-empty |
| `phone` | tel | yes | Non-empty |

**UI details:**
- "Your safety comes first" badge in header
- Security banner: "Your information is encrypted and never shared without your permission."
- Safety commitment callout listing: "Caregivers are background checked / We use bank-level encryption / You control your information"
- Phone field displays privacy note: "We'll never share your number."

**Continue condition:** All three fields non-empty  
**Action:** "Continue securely →"  
**Data collected:** `firstName`, `lastName`, `phone`

---

### Screen 2 — Your Surgery

**Purpose:** Capture procedure details.  
**Fields:**

| Field | Type | Options | Required |
|-------|------|---------|----------|
| `procedureType` | select-one | Knee replacement / Hip replacement / Shoulder replacement / Other joint surgery | yes |
| `surgeryDate` | date | ISO date input | yes |
| `surgeon` | select | Dr. Sarah Chen / Dr. Michael Torres / Dr. James Okafor / Dr. Emily Walsh / Dr. Robert Kim / "My surgeon isn't listed" | yes |

**Continue condition:** All three fields non-empty  
**Data collected:** `procedureType`, `surgeryDate`, `surgeon`

---

### Screen 3 — Home Support Screening (Gating Screen)

**Purpose:** Determine if the patient actually needs CTM. This screen contains the primary eligibility gate.

**Question:** "After your surgery, who will typically be at home with you?"

| Value | Label |
|-------|-------|
| `alone` | "I live alone" |
| `family-works` | "Family or friends will be around, but they work during the day" |
| `not-sure` | "I'm not sure yet" |
| `full-support` | "Family or friends who can be with me most of the time" |

**Exit condition:** If `homeSupport === "full-support"` → navigate to `exit-home-support` screen (graceful exit, no data retained).

**Continue condition:** Any other value selected  
**Data collected:** `homeSupport`

---

### Screen 4 — Physical Readiness (CTM Score Inputs)

**Purpose:** Assess mobility and collect the inputs for the CTM Score calculation.

**Questions and options:**

**Walking distance** (`walkingDistance`):
- `>2blocks` — "More than 2 blocks"
- `1-2blocks` — "1 to 2 blocks"
- `<1block` — "Less than 1 block"

**Assistive device** (`assistiveDevice`):
- `none` — "Nothing, I walk on my own"
- `cane` — "A cane or walking stick"
- `walker` — "A walker"

**Age range** (`ageRange`):
- `under65` — "Under 65"
- `65-75` — "65 to 75"
- `over75` — "Over 75"

**CTM Score formula** (computed on Continue, stored as `ctmScore`):

```
walk  = (walkingDistance === ">2blocks") ? 2 : (walkingDistance === "1-2blocks") ? 1 : 0
assist = (assistiveDevice === "none") ? 2 : (assistiveDevice === "cane") ? 1 : 0
age   = (ageRange === "under65") ? 2 : (ageRange === "65-75") ? 1 : 0
support = (homeSupport === "alone") ? 3 : (homeSupport === "family-works") ? 2 : 1

ctmScore = walk + assist + age + support
```

**Score range:** 0–9  
**Interpretation (from Overseer dashboard):**
- 6+ → "Strong candidate for home recovery"
- Below 6 → "Borderline — review mobility detail before approving"

**Note:** The CTM Score is internal and is never shown to the patient.

**Continue condition:** All three fields selected  
**Data collected:** `walkingDistance`, `assistiveDevice`, `ageRange`, `ctmScore` (computed)

---

### Screen 5 — Lifestyle & Match Preferences

**Purpose:** Collect lifestyle factors used in the matching algorithm.

**Smoking** (`smoking`), select-one:
- "No"
- "Yes, tobacco"
- "Yes, marijuana or other"

**Food allergies** (`foodAllergies`), multi-select (pill buttons):
- Peanuts / Tree nuts / Shellfish / Fish / Dairy/lactose / Gluten/wheat / Eggs / Soy / None / Other
- Selecting "None" clears all other selections
- Selecting any other option removes "None"

**Dietary needs** (`dietaryNeeds`), select-one:
- No restrictions / Vegetarian / Vegan / Diabetic diet / Kosher / Halal / Other

**Pets** (`pets`), select-one:
- No pets / Dog(s) / Cat(s) / Both dogs and cats / Other

**Continue condition:** `smoking`, `dietaryNeeds`, and `pets` all selected  
**Data collected:** `smoking`, `foodAllergies`, `dietaryNeeds`, `pets`

---

### Screen 6 — Home Environment

**Purpose:** Assess the patient's home for recovery suitability.

**Housing type** (`housingType`), select-one:
- House / Apartment / Condo / Mobile home / Other

**Entry stairs** (`entryStairs`), select-one:
- `none` — "No, ground floor or elevator access"
- `few` — "Yes, a few steps (1–4)"
- `full` — "Yes, a full flight of stairs"

**Interior layout** (`interiorLayout`), select-one:
- `main` — "Yes, I won't need to use stairs inside"
- `stairs` — "No, I'll need to navigate stairs inside"

**Home address** (`homeAddress`), text field (free text, placeholder "123 Main St, Denver, CO")

**Continue condition:** All four fields populated  
**Data collected:** `housingType`, `entryStairs`, `interiorLayout`, `homeAddress`

---

### Screen 7 — Emergency Contact

**Purpose:** Capture emergency contact for safety.

**Fields:**

| Field | Type | Options | Required |
|-------|------|---------|----------|
| `emergencyName` | text | — | yes |
| `emergencyRelationship` | select | Spouse/Partner / Parent / Child / Sibling / Friend / Neighbor / Other | yes |
| `emergencyPhone` | tel | — | yes |

**Data collected:** `emergencyName`, `emergencyRelationship`, `emergencyPhone`

---

### Screen 8 — Reciprocity / Paying It Forward

**Purpose:** Gauge openness to becoming a volunteer after recovery.

**Question:** "After you recover, would you be open to helping someone else the same way?"

**Options** (`reciprocity`), select-one:
- "Yes, I'd love to give back"
- "Maybe, ask me again after I've recovered"
- "I don't think so — that's okay"
- "Tell me more about what that involves"

**Note:** All answers are accepted; this is preference data, not a gate.  
**Data collected:** `reciprocity`

---

### Screen 9 — Consent Preview ("Before You Sign")

**Purpose:** Present a plain-English summary of the five consent terms before showing the full legal text.

**Consent items shown:**
1. Background checks — "We run background checks on both patients and volunteers"
2. Monitored communications — "All conversations through CareTaker Match are monitored by our team"
3. Your data is never sold
4. Anonymous research — "De-identified data may be used to improve the program through HIPAA-compliant studies"
5. Safety commitment — "CareTaker Match is not a medical service and cannot be held liable for outcomes"

**Action:** "Continue to Agreement" → Screen 10  
**Data collected:** None

---

### Screen 10 — Consent Agreement & Signature

**Purpose:** Obtain informed consent and a drawn signature.

**Behavior:**
- Scrollable consent document in a bordered box
- Signature canvas only appears after the user has scrolled to the bottom of the document (`consentScrolled === true`)
- If user taps "I don't want to sign" → modal warning appears
  - "Go back and sign" → dismisses modal
  - "Exit program" → resets all form data, returns to Screen 0

**Consent sections (7 clauses):**
1. Liability Release
2. HIPAA Compliance
3. Background Check Authorization
4. Communication Monitoring
5. Location Sharing
6. De-identified Research Data
7. Data Sale Prohibition

**Note on document status:** Draft label "DRAFT — for legal review" is displayed in the UI. Full legal review required before production.

**Continue condition:** `consentScrolled === true` AND `signature` is non-empty (drawn on canvas)  
**Action:** "I agree and sign" — records `consentTimestamp` as ISO timestamp  
**Data collected:** `consentScrolled`, `signature` (base64 PNG from canvas), `consentTimestamp`

---

### Screen 11 — Enrollment Confirmation

**Purpose:** Confirm enrollment and set expectations for next steps.

**Content:**
- Teal header with checkmark: "You're Enrolled! Welcome to CareTaker Match, [firstName]."
- Three next-step cards:
  1. Background check — Status: "In progress" — "Usually done within 48 hours"
  2. Finding your match — Status: "Pending" — "We'll look for the right volunteer companion"
  3. Coffee meeting — Status: "Coming soon" — "You'll meet your companion for coffee — low-key, no commitment"
- SMS notification note: "We'll text you at [phone] to keep you updated."

**Bottom navigation bar (app chrome):** Home (active) / Messages / Profile

---

### Exit Screen — "exit-home-support"

**Trigger:** `homeSupport === "full-support"` on Screen 3  
**Message:** "You're in great hands! CareTaker Match is designed for patients who don't have that support at home, so you won't need us this time."  
**Privacy note:** "Your information has not been shared with anyone."  
**Exit action:** Returns to CommonSpirit demo hub

---

## 3. Volunteer Registration Flow

**Duration estimate shown to user:** "About 12 minutes"  
**Progress bar:** Steps 1–11 of 11 screens  
**Platform:** iPhone (same frame as patient)  
**Hard exit conditions:** Two screens that terminate registration permanently

---

### Screen 0 — Welcome / Splash

**Content:**
- CTM logo
- Headline: "Become a Companion"
- Body explaining the peer-volunteer role
- Info banner: "About 12 minutes to register. Your answers are private and protected under HIPAA."
- Blue info box: "After registration, you'll complete a brief training and background check before being matched."

**Action:** "Get started" → Screen 1

---

### Screen 1 — Identity & Contact

**Fields:**

| Field | Type | Required |
|-------|------|----------|
| `firstName` | text | yes |
| `lastName` | text | yes |
| `phone` | tel | yes |
| `email` | email | yes |

**Note:** Volunteer collects email (patients do not in this flow). Email note: "Used only to keep you updated."

**Continue condition:** All four fields non-empty  
**Data collected:** `firstName`, `lastName`, `phone`, `email`

---

### Screen 2 — Surgery Experience

**Purpose:** Capture the volunteer's own joint replacement history (not required to have had surgery, but it's a differentiator).

**Had surgery** (`hadSurgery`), select-one:
- `yes` — "Yes, I've had joint replacement surgery"
- `no` — "No, I haven't had this surgery myself"

**If `hadSurgery === "yes"` — conditional follow-up questions appear:**

**Which joint** (`surgeryJoint`), select-one:
- `hip` / `knee` / `shoulder` / `other`

**Surgery recency** (`surgeryRecency`), select-one:
- "Within the last year"
- "1–3 years ago"
- "3–5 years ago"
- "More than 5 years ago"

**Recovery quality** (`recoveryQuality`), select-one:
- `smooth` — "Smooth — I was up and moving quickly"
- `average` — "Average — took time but went as expected"
- `difficult` — "Difficult — had complications or a harder time"

**Home support during recovery** (`hadHelpAtHome`), select-one:
- `family` — "Yes, family or friends"
- `professional` — "Yes, a professional caregiver"
- `alone` — "No, I recovered largely on my own"
- `facility` — "I stayed at a rehabilitation facility first"

**Continue condition:** `hadSurgery` selected; if "yes", all four follow-up fields also required  
**Data collected:** `hadSurgery`, `surgeryJoint`, `surgeryRecency`, `recoveryQuality`, `hadHelpAtHome`

---

### Screen 3 — Physical Readiness

**Same questions as Patient Screen 4:**
- `walkingDistance`: `>2blocks` / `1-2blocks` / `<1block`
- `assistiveDevice`: `none` / `cane` / `walker`
- `ageRange`: `under65` / `65-75` / `over75`

**Note:** No CTM Score is computed for volunteers. These fields feed into a Volunteer Readiness Score shown to the Overseer (scale 0–9, see Section 4).

**Data collected:** `walkingDistance`, `assistiveDevice`, `ageRange`

---

### Screen 4 — Availability & Commitment (Gating Screen)

**Purpose:** Confirm the volunteer can meet the minimum commitment requirement. This is the first hard-exit gate.

**Commitment question** (`commitment`), select-one:
- `yes` — "Yes, I can do that"
- `no` — "No, I'm not able to commit to that"

**Commitment description shown:** "Are you able to bring the patient home from surgery, stay with them for the first 3 days, and then check in on them as they recover?"

**Warning shown if `commitment === "no"`:** "Full commitment is required to serve as a primary companion. Tapping Continue will let you know more."

**If `commitment === "yes"` — drive radius question appears:**

**Drive radius** (`driveRadius`), select-one:
- "Up to 15 minutes"
- "Up to 30 minutes"
- "Up to 45 minutes"
- "Up to 1 hour"

**Exit condition:** If `commitment === "no"` → navigate to `exit-no-commitment` (graceful hard exit)  
**Continue condition:** `commitment === "yes"` AND `driveRadius` selected  
**Data collected:** `commitment`, `driveRadius`

---

### Screen 5 — Lifestyle & Helper Profile (Gating Screen)

**Purpose:** Collect lifestyle factors and screen for disqualifying substance use. This is the second hard-exit gate.

**Smoking/drugs** (`smokingDrugs`), select-one:
- `no` — "No"
- `tobacco` — "Yes, tobacco"
- `recreational` — "Yes, recreational drugs"
- `both` — "Yes, both tobacco and recreational drugs"

**Warning shown if `recreational` or `both`:** Red banner — "Recreational drug use is a disqualifying factor for the CareTaker Match volunteer program."

**Exit condition:** If `smokingDrugs === "recreational"` or `smokingDrugs === "both"` → navigate to `exit-drugs` (hard exit with message: "CareTaker Match requires that all volunteers be free from recreational drug use to ensure the safety of our patients.")

**Food allergies** (`foodAllergies`), multi-select pills:
- None / Peanuts/tree nuts / Shellfish / Gluten/wheat / Dairy / Eggs / Soy / Vegetarian / Vegan / Halal / Kosher / Other

**Pet allergies** (`petAllergies`), select-one:
- No allergies / Allergic to cats / Allergic to dogs / Allergic to both / Other

**Pets at home** (`petsAtHome`), select-one:
- No pets / Yes — dog(s) / Yes — cat(s) / Yes — both / Yes — other

**Cooking comfort** (`cookingComfort`), select-one:
- `yes` — "Yes, happy to help" (context: may be asked to help with light cooking or groceries)
- `no` — "No, I'd prefer not to"

**Continue condition (non-exit path):** `smokingDrugs`, `petAllergies`, `petsAtHome`, `cookingComfort` all selected  
**Data collected:** `smokingDrugs`, `foodAllergies`, `petAllergies`, `petsAtHome`, `cookingComfort`

---

### Screen 6 — Home & Capabilities

**Vehicle access** (`vehicle`), select-one:
- `own` — "Yes, I have my own vehicle"
- `borrow` — "Sometimes — I can borrow one"
- `none` — "No vehicle"

**Stairs at patient's home** (`stairs`), select-one:
- `yes` — "Yes, no problem"
- `slowly` — "Yes, slowly"
- `no` — "No, I cannot manage stairs"

**Physical tasks** (`physicalTasks`), select-one (context: steadying while walking, in/out of chair, carrying groceries):
- `yes` — "Yes, comfortable"
- `somewhat` — "Somewhat — I'd need some guidance"
- `no` — "No, I'd prefer not to"

**Continue condition:** All three fields selected  
**Data collected:** `vehicle`, `stairs`, `physicalTasks`

---

### Screen 7 — Neighborhood / Address

**Purpose:** Capture home address for proximity matching only.

**Privacy note displayed:** "Your exact address is never shared with patients. It is used only to calculate proximity and find matches within your travel range."

**Field:**
- `homeAddress` (text, required)

**Data collected:** `homeAddress`

---

### Screen 8 — Role Preference

**Purpose:** Let the volunteer choose their preferred level of engagement.

**Options** (`rolePreference`), select-one:
- `primary` — "Primary companion — fully present for the first 3 days, available for a month"
- `followup` — "Follow-up visits — check-ins, rides, and errands during the recovery month"
- `either` — "Open to either — put me where I'm most needed"

**Data collected:** `rolePreference`

---

### Screen 9 — Consent Preview ("Before You Sign")

**Same five items as Patient Screen 9.** Identical structure.  
**Action:** "Continue to Agreement" → Screen 10

---

### Screen 10 — Volunteer Agreement & Signature

**Same scroll-to-unlock + canvas signature mechanism as Patient Screen 10.**

**Agreement has 8 clauses (vs. 7 for patients):**
1. Volunteer Role (not a medical professional)
2. Conduct Standards (no uninvited entry, confidentiality, complete training)
3. Background Check Authorization
4. HIPAA Compliance
5. Communication Monitoring
6. Data Use and Privacy
7. Withdrawal (may withdraw with adequate notice)
8. Liability

**Continue condition:** `consentScrolled === true` AND `signature` non-empty  
**Data collected:** `consentScrolled`, `signature`, `consentTimestamp`

---

### Screen 11 — Registration Confirmation

**Content:**
- Teal header: "You're Registered! Welcome to CareTaker Match, [firstName]."
- Four next-step cards:
  1. Background check — "In progress" — "Check your email for instructions — usually 3–5 business days"
  2. Training — "0 of 7 modules" — "Self-paced, about 45–60 minutes across multiple sessions" — "Start training" button
  3. Your first match — "Pending" — "We'll find a great fit once your background check clears and training is complete"
  4. Coffee meet — "Coming soon" — "A brief get-to-know-you before the patient's surgery"

**Note:** Training module count = 7; estimated total time = 45–60 minutes.

---

### Exit Screens

**`exit-no-commitment`** (triggered by `commitment === "no"`):
- "Thanks for considering it! CareTaker Match's primary companion role requires being available for the first 3 days after a patient's surgery."
- Tone: warm, no guilt. Invitation to return when schedule opens.

**`exit-drugs`** (triggered by `smokingDrugs === "recreational"` or `"both"`):
- "Thank you for your honesty. CareTaker Match requires that all volunteers be free from recreational drug use to ensure the safety of our patients."
- "Your information has not been shared with anyone."
- Tone: firm but appreciative.

---

## 4. Overseer Approval Dashboard

**Platform:** Desktop web application  
**Route:** `/demo/onboarding/approval`  
**Brand colors:** `CTM_GREEN = "#1e3a2f"`, `CTM_GOLD = "#c4922a"`

### 4.1 Queue Sidebar

- Tab toggle: Patients | Volunteers
- Approval Queue list cards showing:
  - Patient: name, procedure type, surgery date, submission time, status badge, "Just enrolled ↑" label for new submissions
  - Volunteer: name, surgery history, submission time, status badge, "Just registered ↑" label for new submissions

**Status badges:**
- `pending` → amber: "Pending"
- `approved` → green: "Approved"
- `failed` → red: "Failed"

**Header stats (updates live during demo):** Pending count / Approved count / Failed count

### 4.2 Detail Panel — Background Check

Clicking a queue item opens the detail panel. For the demo patient/volunteer, background checks run as an **animated sequential process** triggered on selection:

**Patient checks (3 steps, ~5 seconds total):**
1. Criminal history → "Clear" (runs at 0s, completes at 1.5s)
2. Identity verification → "Verified" (runs at 1.5s, completes at 3s)
3. Sex offender registry → "Clear" (runs at 3s, completes at 4.5s)
4. Phase transitions to "passed" at 5s

**Volunteer checks (4 steps, ~5.3 seconds total):**
1. Criminal history → "Clear"
2. Identity verification → "Verified"
3. Sex offender registry → "Clear"
4. Volunteer training → "Complete"
5. Phase transitions to "passed" at 5.3s

Each check displays one of three states: `waiting` (dash), `running` (animated spinner + "Checking…"), `done` (checkmark + result).

### 4.3 CTM Score Display

After background check passes, a CTM Score bar is revealed:
- Scale: 0–9
- Animated fill bar
- Label (internal): "(internal — not shown to patient)"
- Interpretation:
  - Score ≥ 6 → "Strong candidate for home recovery"
  - Score < 6 → "Borderline — review mobility detail before approving"
  - Failed background check → "Did not pass background check — score not used for matching"

**Volunteer Readiness Score** uses the same 0–9 scale and bar:
- Score ≥ 7 → "Strong volunteer — mobile, experienced, full commitment available"
- Score < 7 → "Review availability and physical readiness before approving"
- Failed check → "Did not pass background check — not eligible for matching"

### 4.4 Approval Action

After checks pass:
- "Send Approval to Patient →" button (green) appears
- On click → state transitions to "sent" + iPhone notification animation triggers

**Patient approval notification text:** "Great news, Jennifer! You've been approved. We're now finding your perfect volunteer match."  
**Volunteer approval notification text:** "Welcome aboard, Robert! Your background check cleared. You're approved as a CareTaker Match volunteer."

**Failed records** show: "Rejection notice sent to patient/volunteer" (red banner, no action button).

---

## 5. Patient Volunteer Selection (Matching Interface)

**Platform:** Desktop web application  
**Route:** `/demo/onboarding/matching`

### 5.1 Patient Summary Sidebar

Displays the patient awaiting match:
- Name, age, location
- Procedure + surgery date
- CTM Score (format: `7 / 9`)
- Approval status badge: "✓ Approved for program"
- Note: e.g., "Lives alone · Needs 3-day post-op support"

**Matching criteria listed:**
1. Joint type & procedure match
2. Geographic proximity (< 15 mi)
3. Schedule & availability
4. Volunteer experience level
5. Background check status

### 5.2 Matching Funnel Animation

Triggered by "Run Matching Algorithm →" button. Five funnel steps animate in with staggered delays (300ms apart):

| Count | Label |
|-------|-------|
| 247 | volunteers in the CaretakerMatch network |
| 89 | passed background & identity checks |
| 31 | within 15 miles of Chicago, IL |
| 12 | with joint replacement experience |
| **3** | **optimal matches identified** (highlighted) |

Total animation duration: ~3.4 seconds until match cards appear.

### 5.3 Match Cards

Each match card displays:
- Initials avatar (color coded: #1 green, #2 gold, #3 gray)
- Name, age, location, surgery history, availability
- Match score ring (0–100%): score ≥ 90 = green, ≥ 85 = gold, < 85 = gray
- "Top Match" badge for the #1 candidate
- Three match reason chips (icon + text)

**Demo top 3 matches:**

| Rank | Name | Score | Reasons |
|------|------|-------|---------|
| 1 | Robert M., 71, Oak Park IL, 8 mi | 94% | Same joint (right knee) / 8 miles away / Available Jun 18–21 |
| 2 | Linda K., 58, Evanston IL, 6 mi | 87% | Former surgical nurse / 6 miles away / 5-star rated volunteer |
| 3 | Maria S., 63, Berwyn IL, 10 mi | 81% | Similar joint (left knee) / 10 miles away / Bilingual (Spanish) |

**Auto-selection:** Top match is auto-selected 800ms after cards appear.

### 5.4 Confirm Action

"Confirm Match with Robert M. →" button appears when a match is selected.  
On click → state transitions to "confirmed" + simultaneous iPhone notification to both patient and volunteer.

**Patient notification:** "Great news, Jennifer! We've found your CaretakerMatch volunteer. Robert M. will be your caregiver for your knee surgery on Jun 18."  
**Note displayed:** "Robert M. also notified simultaneously"

---

## 6. Volunteer Notification

**Platform:** iPhone app  
**Route:** `/demo/onboarding/volunteer-notification`

### 6.1 What the Volunteer Sees

- App bar: CTM logo + "No One Recovers Alone" tagline + volunteer avatar (RM gold)
- Gold match request banner: "New Match Request! A patient has requested you as their volunteer. Review the details and respond within **24 hours**."

**Patient detail card displayed to volunteer:**

| Field | Value shown |
|-------|-------------|
| Procedure | Total Knee Replacement |
| Surgery Date | June 18, 2026 |
| Support Needed | 3-day post-op visits (approx. 2–3 weeks) |
| Distance | 8 miles from you |

**Patient blurb (italicized):** "Lives alone. Needs 3-day post-op support. Looking for someone reliable and compassionate."

### 6.2 Actions

- "✓ Accept & Propose Coffee Times" → navigates to Coffee Meet Scheduler
- "✗ Decline (Not Available)" → button (in demo, no destination; in production would trigger re-matching)

**Info banner:** "Coffee meet first: If you accept, you'll schedule a brief coffee meeting before surgery to get acquainted."

---

## 7. Coffee Meet Scheduler

**Platform:** iPhone app  
**Route:** `/demo/onboarding/coffee-meet`  
**Two states:** Scheduler → Confirmation

### 7.1 Scheduler Screen

**Great News banner:** "Robert M. has accepted your request! Let's schedule a coffee meet before your surgery."

**Robert summary card:** Name, match % and distance, surgery history, location and availability

**Step 1 — Pick a Time** (volunteer-proposed times):
| ID | Day | Time |
|----|-----|------|
| `t1` | Tomorrow, Jun 15 | 10:00 AM |
| `t2` | Tomorrow, Jun 15 | 2:00 PM |
| `t3` | Saturday, Jun 16 | 11:00 AM |

**Step 2 — Choose a Location** (suggested near midpoint):
| ID | Name | Address | Distance | Type |
|----|------|---------|----------|------|
| `l1` | Starbucks | 1234 Main St | 4.2 mi from you | Physical (MIDPOINT badge) |
| `l2` | Panera Bread | 567 Oak Ave | 4.8 mi from you | Physical (MIDPOINT badge) |
| `l3` | Corner Bakery | 890 Elm Blvd | 5.1 mi from you | Physical (MIDPOINT badge) |
| `l4` | Virtual Video Call | — | — | Virtual (VIRTUAL blue badge) |

**Note:** Virtual option = "CTM sets up a secure video link for both of you"

**Confirm button:** "Confirm Coffee Meet ☕" (gold color)

### 7.2 Confirmation Screen

After confirm:
- Success icon: ☕ in green circle
- "You're all set! Your coffee meet with Robert M. is confirmed. Calendar invites have been sent to both of you."
- Summary card: selected date/time + location
- "What to Expect" checklist:
  - 30–45 minute casual coffee chat
  - Discuss your recovery needs
  - Get to know each other before surgery
  - Robert will answer questions from experience
- CTA button: "Get Directions" (or "💻 Join Video Call" if virtual)
- Secondary button: "Contact Robert"

---

## 8. Progress Tracker

**Platform:** Web (desktop or mobile)  
**Route:** `/demo/onboarding/progress-tracker`  
**Toggle:** Patient View | Volunteer View

### 8.1 Patient Journey (5 steps)

| Step | Label | Status in demo |
|------|-------|----------------|
| 1 | Enrolled | complete (green) |
| 2 | Approved | complete (green) |
| 3 | Finding Match | **active** (gold) |
| 4 | Coffee Meet | pending (gray) |
| 5 | Recovery Support | pending (gray) |

**Active step message:** "Good news! We're matching you with qualified volunteers in your area. You'll see your top 3 matches within 24-48 hours."

### 8.2 Volunteer Journey (5 steps)

| Step | Label | Status in demo |
|------|-------|----------------|
| 1 | Applied | complete |
| 2 | Background Check | complete |
| 3 | Training | **active** (gold) |
| 4 | Approved | pending |
| 5 | Available | pending |

**Active step message:** "You're in training! Complete your online modules to become a certified CaretakerMatch volunteer."

### 8.3 Visual Design

- Horizontal stepper with connecting line
- Completed steps: filled green circle with checkmark
- Active step: filled gold circle with clock icon
- Pending steps: hollow circle with gray dot
- Progress line: gradient from green to gold, width proportional to active step index
- Active step label shown in gold; completed labels in green; pending in gray

---

## 9. Volunteer Pipeline Dashboard

**Platform:** Desktop web  
**Route:** `/demo/commonspirit/volunteer-pipeline`  
**Context:** CommonSpirit Health administrator view — Colorado Region

### 9.1 Volunteer Sources

| Source | Volume | Notes | Status |
|--------|--------|-------|--------|
| Idealist.org | 1,200+ CO volunteers | National platform | Active |
| Spark the Change | 450+ local volunteers | Denver metro focus | Active |
| Patient Reciprocity | 197 past patients | Self-sustaining pool | Active |
| Faith-Based Orgs | 600+ potential | Partnership underway | In Progress |

### 9.2 Vetting Pipeline (4 stages)

| Stage | Count | Conversion |
|-------|-------|------------|
| 1. Referral | 2,847 | — |
| 2. Background Check | 2,412 | 96% pass rate |
| 3. Training & Onboarding | 2,241 | 93% completion |
| 4. Verified Pool | **412** | Available this week (highlighted gold) |

**Average onboarding time:** 3.2 days from referral to availability

### 9.3 Available Pool Metrics

- **Available now:** 412
- **Average response time:** 4.2 hours

**By procedure experience:**
| Procedure | Count | % of pool |
|-----------|-------|-----------|
| Hip Replacement | 180 | 44% |
| Knee Replacement | 142 | 34% |
| Shoulder | 90 | 22% |

**Geographic distribution (Colorado):**
| Region | Count |
|--------|-------|
| Denver Metro | 245 |
| Colorado Springs | 89 |
| Fort Collins | 52 |
| Boulder | 26 |

**Match success rate:** 94%

---

## 10. Overseer Monitoring Dashboard

**Platform:** Desktop web application  
**Route:** `/demo/overseer`  
**Purpose:** Monitor active patient-volunteer encounters post-match, detect issues, and escalate when needed.

### 10.1 Navigation

Left sidebar with three sections:
- **Encounters** — all active pairings (badge shows total count)
- **Alerts** — flagged encounters (red badge with count)
- **Reports** — analytics (no badge)

### 10.2 Dashboard View Stats

Four metric cards:
- Total Encounters
- Awaiting Coffee Meet
- Active — In Recovery
- Flagged (red background when non-zero)

**Encounter table columns:** Status / Patient / Caretaker / Surgery / Days Post-Op / Step (x of 8) / Action

### 10.3 Encounter Statuses

| Status | Visual | Label |
|--------|--------|-------|
| `pending_meetup` | Yellow dot | Coffee Meet Pending |
| `active_green` | Green dot | Active — On Track |
| `active_red` | Red pulsing dot | Active — Flag Raised |

### 10.4 Encounter Detail View

Shows the 8-step encounter timeline with step progress, plus:
- Patient name, age
- Caretaker name
- Surgery date and procedure
- Days post-op
- Communication channel: "Twilio Anonymous Proxy"
- Message count

**For flagged encounters (`active_red`):** Red banner — "AI Toxicity Flag — Action Required" with three buttons:
- "View Communication →" → opens chat log
- "Contact Caretaker"
- "Escalate to Clinician"

### 10.5 Communication Log View

- Overseer-only read-only view of all messages between patient and caretaker
- Messages routed via Twilio anonymous proxy (neither party sees the other's real phone number)
- Flagged messages highlighted in red with `⚠ AI Flag` indicator
- AI toxicity analysis panel appears below flagged messages showing:
  - Specific harmful language identified
  - Reasoning for the flag
  - Recommended action
- Action bar: "Contact Caretaker" / "Escalate to Clinician" / "Dismiss Flag"

**Flagged message example trigger:** Message containing phrasing that "places emotional burden on a vulnerable post-surgical patient" (e.g., expressions of exhaustion/resentment toward patient's requests)

---

## 11. Encounter Lifecycle (8 Steps Detail)

From the Overseer webapp encounter timeline:

| Step | Label | Sublabel |
|------|-------|---------|
| 1 | Assessment & Enrollment | iPad Intake |
| 2 | Clinician Approval | EMR Trigger |
| 3 | Matching Algorithm | 1–3 Candidates |
| 4 | Anonymous Introduction | In-App Only |
| 5 | Coffee Meet & Consent | Barcode Verified |
| 6 | Active Recovery | Days 0–30 |
| 7 | Monitor Encounter | Overseer Escalation |
| 8 | Close & Evaluate | Outcomes |

**Step completion visualization:** Green fill with checkmark when completed; current step has a ring highlight; future steps are gray.
