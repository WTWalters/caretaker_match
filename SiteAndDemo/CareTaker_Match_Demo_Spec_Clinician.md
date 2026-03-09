# CareTaker Match — Interactive Demo Build Specification
## Clinician iPad Workflow (App 3 of 3)

**Version:** 1.0  
**Author:** Whit Walters, CTO  
**Target Builder:** Claude Code  
**Date:** March 2026  
**Fidelity:** Medium — clean, professional UI that clearly functions as a demo but looks like a real app  
**Prerequisite:** Read the Volunteer and Patient Workflow specs first. This spec shares the same demo scenario and component library.

---

## 1. Project Context

This is the **Clinician persona** — the gatekeeper of the entire CareTaker Match system. Nothing happens until the clinician approves. This app runs on an **iPad** in the pre-op clinic and at the discharge planning desk.

The clinician demo serves a different pitch purpose than the volunteer or patient apps. It shows investors that:
1. CareTaker Match integrates into existing clinical workflows (not a separate system to learn)
2. The proprietary algorithm (Tom's Modified RAPT) provides clinical decision support
3. The physician maintains full clinical accountability — the system recommends, the doctor decides
4. EMR integration is real (SMART on FHIR, Epic interoperability)
5. Encounter monitoring gives the hospital visibility into post-discharge outcomes

**This app renders at tablet width (768px–1024px)** inside an iPad frame on desktop. It should feel like a native iPadOS app — split-view capable, larger touch targets, more information density than the phone apps.

---

## 2. Technical Requirements

### Shared With Other Apps
- Same React project, same Tailwind config, same component library
- Same color palette base: Teal (#0B8A7E), Navy (#1A3550), Coral (#E8634A), Off-white (#F7F5F0)

### Clinician-Specific
- **Navy (#1A3550)** is the dominant accent color for the clinician app (authoritative, clinical)
- Render inside an **iPad frame** on desktop (similar to the phone frame but wider — landscape or portrait orientation, builder's choice, but landscape is more typical for clinical apps)
- Navigation: **Sidebar** (iPadOS-style) rather than bottom tabs. Sections:
  - Dashboard
  - Patients
  - Encounters
  - Reports
  - Settings
- Typography can be slightly denser than the phone apps — clinicians are used to information-heavy interfaces
- Use a clinical aesthetic: clean whites, subtle borders, data-dense cards. Think Epic MyChart or Doximity.

### Entry Point
- Top-level persona selector: "View as: Volunteer | Patient | **Clinician**"
- Selecting "Clinician" loads this workflow

---

## 3. The Algorithm: Tom's Modified RAPT Score

This is the proprietary clinical scoring system developed by Dr. Tom Eickmann. The demo must show this algorithm in action — it's core IP.

### 3.1 Candidacy Score (9-Point Scale)

The Modified RAPT determines if a patient can safely recover at home with peer support instead of a Skilled Nursing Facility.

| # | Question | Options | Points |
|---|----------|---------|--------|
| Q2 | Do you have friends or family that can take care of you after surgery? | A) Yes = 3 pts / B) No = 0 pts / C) Planning via CareTaker Match = 3 pts | 0–3 |
| Q3 | How far can you walk without stopping? | A) >2 blocks = 2 pts / B) 1–2 blocks = 1 pt / C) <1 block = 0 pts | 0–2 |
| Q4 | Do you use an assistive device to walk? | A) No = 2 pts / B) Cane = 1 pt / C) Walker = 0 pts / D) Wheelchair = **DQ** | 0–2 |
| Q5 | Which best describes your age? | A) <65 = 2 pts / B) 65–75 = 1 pt / C) >75 = 0 pts | 0–2 |

**Threshold:** Score ≥ 5/9 = Eligible for CareTaker Match home discharge  
**RAPT Equivalence:** Score of 5/9 ≈ standard RAPT score of 8/12  

### 3.2 Hard Disqualifiers (Gate Layer)

These conditions immediately flag the patient as ineligible:
- Wheelchair user (Q4 = D)
- Recreational drug use by caregiver candidate (Q7 options C or D)
- Unwilling to commit to availability (Q8 = No)
- Background check failure (caregiver pool only)

### 3.3 Matching Factors (Match Layer)

Once the patient passes the gate and scoring threshold, the algorithm scores potential volunteers:

| Factor | Weight | Source | Type |
|--------|--------|--------|------|
| Procedure Type | High | EMR (MS-DRG/HCPCS) | Compatibility — same procedure = premium match |
| Geographic Proximity | High | Address / ZIP | Constraint — 15-minute drive radius target |
| Gender Match | Medium | Intake form (Q6) | Strong preference, not hard gate |
| Age Proximity | Low | Intake form (Q5) | Ideal: similar age bracket |
| Smoking Alignment | High (penalty) | Intake form (Q7) | Mismatch = heavy penalty (–8 pts) |
| Driving Capability | Medium | Intake form (Q9) | Required for hospital pickup |
| Reliability Score | High (Phase 2+) | Platform data | Star rating × completion rate |

### 3.4 Physician Selection Interface

The algorithm produces a ranked shortlist of **4–5 candidates**. The clinician sees:
- Match score (composite)
- Background check status
- Procedure experience
- Availability calendar alignment
- Patient ratings (when available)
- Recommender notes

**The physician selects the final match** — maintaining clinical accountability. The system recommends, the doctor decides.

---

## 4. Demo Scenario — Clinician Perspective

Dr. Tom Eickmann's day at Saint Joseph Hospital. He has a pre-op clinic in the morning with several patients. James Morrison is one of them — a 68-year-old facing a total knee replacement with no home support.

The demo shows Tom using the iPad to:
1. Review his patient list
2. See James flagged as "No Home Support"
3. Initiate the CareTaker Match assessment
4. Review the algorithm score
5. Review matched volunteer candidates
6. Approve the match
7. Track the encounter through surgery and recovery
8. View outcomes

---

## 5. Screen-by-Screen Specification

### Screen 1: Login
**Purpose:** Clinician authentication. Shows this is a secure, HIPAA-compliant application.

**Content:**
- CareTaker Match logo (clinical variant — more subdued than patient/volunteer apps)
- "Clinical Portal"
- Institution: "Intermountain Health — Saint Joseph Hospital"
- Username field: pre-filled "t.eickmann"
- Password field: pre-filled with dots
- "Sign in with Epic SSO" button (secondary — shows EMR integration)
- Touch ID / Face ID icon
- HIPAA compliance badge at bottom: "🔒 HIPAA Compliant · Encrypted · Audit Logged"

**Demo behavior:** Any tap advances to Screen 2.

---

### Screen 2: Dashboard — Patient List
**Purpose:** Tom's main view. A list of his upcoming surgical patients with discharge disposition flags.

**Content:**
- Sidebar (persistent from here on):
  - Dashboard (active)
  - Patients
  - Encounters
  - Reports
  - Settings
- Header: "Good morning, Dr. Eickmann" with date "Tuesday, March 25, 2026"
- Summary cards row:
  - "Upcoming Surgeries: 8" (this week)
  - "Active CareTaker Match Encounters: 3"
  - "Pending Approvals: 1" (highlighted with coral badge)
  - "TEAM Episodes This Quarter: 12"

- **Patient list table** — the core of this screen:

| Patient | Procedure | Surgery Date | Insurance | Home Support | CM Status |
|---------|-----------|-------------|-----------|-------------|-----------|
| Morrison, James | TKR (Right) | Apr 15 | Medicare A&B | ⚠️ None | 🟡 Pending Assessment |
| Kowalski, Patricia | TKR (Left) | Apr 17 | Aetna | ✅ Spouse | N/A |
| Nguyen, David | THA (Right) | Apr 22 | Medicare A&B | ✅ Daughter | N/A |
| Fitzgerald, Ruth | TKR (Right) | Apr 24 | Medicare A&B | ⚠️ None | 🟢 Matched (Vol: Mike R.) |
| Chen, Robert | Revision TKR | Apr 29 | UHC | ✅ Wife | N/A |

- The "⚠️ None" flag on James's row is the visual trigger — orange/coral warning that this patient has no home support
- The "CM Status" column shows CareTaker Match status: Pending Assessment, Matched, Active Encounter, Completed, or N/A (has home support)
- James's row should be visually highlighted or have a subtle pulsing indicator to draw the presenter's eye

**Demo behavior:** Tapping James Morrison's row advances to Screen 3.

---

### Screen 3: Patient Detail — James Morrison
**Purpose:** Detailed patient view with EMR data and the discharge planning decision point.

**Content — Split layout (left panel + right panel):**

**Left panel — Patient info (from EMR):**
- Name: James Morrison
- DOB: 09/12/1957 (Age: 68)
- MRN: 4821903
- Insurance: Medicare Parts A & B
- Procedure: Total Knee Replacement (Right Knee)
- Surgeon: Dr. Tom Eickmann
- Surgery Date: April 15, 2026
- Anesthesia: General
- ICD-10: M17.11 — Primary osteoarthritis, right knee
- CPT: 27447 — Arthroplasty, knee
- MS-DRG: 470 — Major Joint Replacement (TEAM Track 1)

**Right panel — Discharge Planning:**
- "Discharge Disposition" section:
  - Current plan: "⚠️ Undetermined — No home support identified"
  - Options:
    - Skilled Nursing Facility (SNF) — estimated cost: $23,400 / 14 days
    - Home Alone — ⚠️ elevated readmission risk
    - **Home with CareTaker Match** — "Assess eligibility" button (teal, prominent)
- TEAM Episode flag: "✅ This procedure qualifies for CMS TEAM Model (Track 1: LEJR). Discharge disposition affects quality score and episode cost."
- Prior surgical history: "Left Hip Replacement — 2019 (recovered at home with wife, now deceased)"

**Demo behavior:** Tapping "Assess eligibility" advances to Screen 4.

---

### Screen 4: CareTaker Match Suitability Assessment — Live Scoring
**Purpose:** This is the crown jewel of the clinician demo. Shows Tom's algorithm running in real-time as the patient's answers are entered. The MA has handed James the iPad; the clinician watches the score calculate.

**Content — Full-width assessment view:**

**Header:** "CareTaker Match Suitability Assessment — James Morrison"
**Subheader:** "Modified RAPT Score · Developed by Tom Eickmann, MD"

**Scoring Panel (persistent sidebar or top bar) — updates in real time:**
- Large circular score gauge: **7 / 9**
- Color: Green (≥5 = eligible)
- Label: "✅ Eligible for Home Discharge with Peer Support"
- RAPT equivalence note: "≈ RAPT 10/12"

**Questions (form — pre-filled for demo):**

**Q2: Home Support**
"Do you have friends or family that can take care of you after surgery?"
- ○ A) Yes, I have good support (+3)
- ○ B) No, I have no one (0)
- ● **C) I'm planning to use CareTaker Match (+3)** ← selected
- *Points awarded: 3* ✅

*Demo note: This is the key clinical intervention. The discharge coordinator changes James from "B" (0 points) to "C" (3 points) at the moment of enrollment. This is what CareTaker Match sells — we convert a "no support" patient into a "supported discharge" with one click.*

**Q3: Mobility**
"How far can you walk without stopping?"
- ● **A) More than 2 blocks (+2)** ← selected
- ○ B) 1–2 blocks (+1)
- ○ C) Less than 1 block (0)
- *Points awarded: 2* ✅

**Q4: Assistive Device**
"Do you use an assistive device to walk?"
- ● **A) No, I walk independently (+2)** ← selected
- ○ B) Cane (+1)
- ○ C) Walker (0)
- ○ D) Wheelchair (Disqualified)
- *Points awarded: 2* ✅

**Q5: Age**
"Which answer best describes your age?"
- ○ A) Under 65 (+2)
- ● **B) 65–75 (+1)** ← auto-populated from DOB
- ○ C) Over 75 (0)
- *Points awarded: 1*

**Score Breakdown (visible alongside):**

| Question | Category | Answer | Points |
|----------|----------|--------|--------|
| Q2 | Home Support | CareTaker Match | 3/3 |
| Q3 | Mobility | >2 blocks | 2/2 |
| Q4 | Assistive Device | None | 2/2 |
| Q5 | Age | 65–75 | 1/2 |
| | | **Total** | **7/9** |

**Gate Check (below scoring):**
- ✅ No wheelchair use
- ✅ No disqualifying drug use
- ✅ Medicare Parts A & B confirmed (TEAM eligible)
- ✅ LEJR procedure (TEAM Track 1)

**Bottom:** Two buttons:
- "✅ Approve for CareTaker Match" (primary, teal)
- "Recommend SNF Instead" (secondary, gray)

**Demo behavior:** The presenter can tap different answers and watch the score recalculate in real time. If they change Q4 to "Wheelchair," the score drops and the gate check shows a red ❌ with "Disqualified — SNF Recommended." This interactivity is a key demo moment. Tapping "Approve" advances to Screen 5.

---

### Screen 5: Approval Confirmation & EMR Write-Back
**Purpose:** The clinician has approved. The system writes back to Epic.

**Content:**
- "✅ James Morrison Approved for Home Discharge via CareTaker Match"
- EMR Write-Back status:
  - "📝 Discharge Disposition updated in Epic: 'Home with Caregiver Support (CareTaker Match)'"
  - "📝 CareTaker Match referral note added to patient chart"
  - "📝 TEAM episode flag: Quality metric captured"
- "Next Steps:"
  - "1. James will download the CareTaker Match app (instructions sent via text)"
  - "2. The matching algorithm will search for a volunteer within 15 minutes of his home"
  - "3. You'll receive a notification when a match is confirmed"
- Button: "View Matching Status" or "Return to Dashboard"

**Demo behavior:** Advances to Screen 6.

---

### Screen 6: Matching in Progress
**Purpose:** Shows the algorithm working. The clinician can see the matching status in real time.

**Content — Back in the patient detail view, "CareTaker Match" tab:**
- Status: "🔍 Matching Algorithm Running..."
- Algorithm visualization (the investor-wow moment):
  - "Searching volunteer pool within 15-minute radius of Lakewood, CO..."
  - "Found: 7 eligible volunteers"
  - "Applying matching factors..."
  - Animated filter funnel showing:
    - 7 candidates → Procedure match filter → 4 remain
    - 4 candidates → Availability filter → 3 remain
    - 3 candidates → Scoring (proximity, gender, smoking, reliability) → Ranked list

- **Ranked Results:**

| Rank | Volunteer | Match Score | Procedure | Distance | Rating | Availability |
|------|-----------|------------|-----------|----------|--------|-------------|
| 1 | Sarah C. | 94/100 | ✅ TKR (2024) | 8 mi | ⭐ 4.9 (5 enc.) | ✅ Full window |
| 2 | Michael R. | 81/100 | ❌ No surgical exp. | 6 mi | ⭐ 4.7 (3 enc.) | ✅ Full window |
| 3 | Jennifer W. | 76/100 | ✅ THA (2023) | 12 mi | ⭐ 4.5 (2 enc.) | ⚠️ Partial (wk 3–4) |

- Score breakdown expandable for each candidate:
  - Sarah C.: Proximity 9/10, Procedure Match 10/10, Gender Neutral, Smoking Match ✅, Reliability 9.8/10, Driving ✅
- "Patient has been presented with the top 3 candidates."
- Status timeline:
  - ✅ Algorithm complete — 3 candidates ranked
  - ✅ Patient reviewing profiles
  - 🔵 Waiting for patient selection...

**Demo behavior:** Demo controls can jump to Screen 7 (patient selected Sarah).

---

### Screen 7: Match Selection & Introduction Tracking
**Purpose:** Patient selected Sarah. The clinician tracks the introduction process.

**Content:**
- Patient: James Morrison → Selected: **Sarah Chen** (Rank 1, Score 94/100)
- Encounter status timeline:
  - ✅ Clinician approved — March 25
  - ✅ Algorithm matched — March 25
  - ✅ Patient selected Sarah C. — March 26
  - ✅ Sarah accepted introduction — March 26
  - 🔵 **Coffee meet scheduled — March 29, 10:00 AM** (current)
  - ⬜ Mutual consent pending
  - ⬜ Match confirmed
  - ⬜ Surgery — April 15
  - ⬜ 30-day encounter active
  - ⬜ Encounter close — May 15

- "Introduction Meeting" card:
  - "Saturday, March 29 — 10:00 AM"
  - "Starbucks — Union Blvd & Wadsworth"
  - "Barcode verification: Pending"
- Notification preference: "Notify me when: ☑ Meeting verified ☑ Mutual consent achieved ☑ Match confirmed"

**Demo behavior:** Demo controls advance through the timeline states. Jump to Screen 8 (meeting verified and match confirmed).

---

### Screen 8: Match Confirmed — Pre-Surgery View
**Purpose:** Both parties approved. The clinician sees the confirmed match before surgery.

**Content:**
- "✅ Match Confirmed — James Morrison & Sarah Chen"
- Confirmed encounter card:
  - Patient: James Morrison, 68, TKR (Right)
  - Volunteer: Sarah Chen, 42, TKR survivor (2024), 5 prior encounters, ⭐ 4.9
  - Match Score: 94/100
  - Coffee Meet: ✅ Verified (March 29)
  - Mutual Consent: ✅ Both approved (March 29)
- Surgery countdown: "Surgery in 17 days — April 15"
- Pre-op checklist (clinician's view):
  - ✅ CareTaker Match approved
  - ✅ Volunteer matched and confirmed
  - ✅ Discharge disposition: Home with caregiver support
  - ✅ TEAM episode registered
  - 🔵 Pre-op appointment — March 31 (Sarah invited to attend)
  - ⬜ Surgery — April 15
- "Clinical Notes" expandable: "Patient expressed significant relief at having matched support. No clinical concerns with home discharge plan."
- Button: "Final Sign-Off for Surgery" (this is the last clinical gate before the procedure)

**Demo behavior:** Advances to Screen 9 via demo controls (jump to active encounter).

---

### Screen 9: Active Encounter Monitoring — Day 7
**Purpose:** Post-surgery. The clinician monitors the encounter remotely via the dashboard.

**Content — Split view:**

**Left panel — Encounter Overview:**
- "Active Encounter — Day 7 of 30"
- Progress ring: 7/30
- Patient: James Morrison
- Volunteer: Sarah Chen
- Status: 🟢 On Track

**Right panel — Check-in Log (from Sarah's submissions):**

| Date | Day | Status | Mood | Notes | Duration |
|------|-----|--------|------|-------|----------|
| Apr 15 | 0 | ✅ | 😐 | Hospital pickup. Patient groggy but stable. | 3 hrs |
| Apr 16 | 1 | ✅ | 🙂 | First night went well. Pain managed. Ice packs helping. | 1.5 hrs |
| Apr 18 | 3 | ✅ | 🙂 | Moving with walker. Appetite returning. | 1 hr |
| Apr 22 | 7 | ✅ | 😊 | Walking with cane now! Good spirits. Pain 3/10. | 45 min |

**Communication Monitor:**
- "💬 42 messages exchanged"
- "🔒 0 safety flags"
- "📞 2 in-app calls (total: 28 min)"
- "Last message: Today, 4:22 PM"
- LLM Safety Status: "✅ All communications screened — no flags"
- Button: "View Conversation Log" (shows anonymized transcript — the admin can see all messages for clinical/safety purposes)

**Clinical Indicators:**
- Patient-reported pain: trending down (small sparkline chart: 7, 6, 5, 4, 3)
- Patient-reported mood: trending up (small sparkline: 😐, 🙂, 🙂, 😊)
- Volunteer attendance: 4/4 check-ins completed (100%)
- "No clinical escalations"

**Alert section (empty for this demo, but showing the UI):**
- "⚠️ Alerts" — "No active alerts"
- Example of what an alert would look like (grayed out):
  - "🔴 Medical Red Flag: Patient reported 'incision is bleeding heavily' — Escalate to care team"
  - "🟡 Missed Check-in: Volunteer did not check in for Day 3 visit — Contact discharge planner"

**Demo behavior:** Demo controls can advance to Screen 10 (encounter close) or Screen 11 (reports).

---

### Screen 10: Encounter Close — Clinical Summary
**Purpose:** Day 30. The encounter is complete. The clinician reviews the outcomes.

**Content:**
- "Encounter Complete — James Morrison"
- Outcome summary:

| Metric | Result |
|--------|--------|
| Discharge Disposition | Home with CareTaker Match (vs. SNF) |
| 30-Day Readmission | ✅ None |
| Check-ins Completed | 7/7 (100%) |
| Safety Flags | 0 |
| Patient Satisfaction | ⭐ 5/5 |
| Volunteer Rating | ⭐ 5/5 |
| Patient-Reported Pain (Day 30) | 1/10 |
| Patient-Reported Mobility | Walking independently, no assistive device |
| Cost Avoidance | $23,400 (SNF avoided) |
| TEAM Quality Impact | ✅ Positive — below episode target price |

- "Community Metric" (from both surveys):
  - Patient: "Would stay in touch as friends" — Yes
  - Volunteer: "Would stay in touch as friends" — Yes
  - "Match classified as: **Lasting Social Connection**"

- TEAM Episode Summary:
  - Episode type: LEJR (Track 1)
  - Target price: $28,500
  - Actual episode cost: $19,200 (including CareTaker Match platform fee)
  - **Savings: $9,300 below target** ✅
  - "Quality measures met: THA/TKA Complications (CMIT 167), HCAHPS (CMIT 166)"

- Button: "Archive Encounter" | "Generate Report for Payer"

**Demo behavior:** Advances to Screen 11.

---

### Screen 11: Reports Dashboard
**Purpose:** The aggregate reporting view for the hospital, showing CareTaker Match program performance.

**Content:**

**Header:** "CareTaker Match — Program Performance"
**Filter bar:** "Intermountain Health — Saint Joseph | Q1 2026 | All Surgeons"

**Summary cards:**
- "Total Encounters: 12"
- "SNF Diversions: 9"
- "30-Day Readmission Rate: 2.4%" (vs. national avg 8.1%)
- "Total Cost Avoidance: $187,200"

**Chart 1: Encounters by Month** (bar chart)
- Jan: 2, Feb: 4, Mar: 6 (trending up)

**Chart 2: Discharge Disposition Mix** (donut chart)
- Home with Family: 58%
- Home with CareTaker Match: 24%
- SNF: 14%
- Other: 4%

**Chart 3: Patient Satisfaction** (horizontal bar)
- Average rating: 4.8/5
- "Would recommend CareTaker Match": 96%
- "Community metric (lasting connection)": 89%

**TEAM Model Performance table:**

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Episode Target Price (LEJR) | $28,500 | $21,300 avg | ✅ Below target |
| 30-Day Readmission Rate | <8% | 2.4% | ✅ |
| Patient Satisfaction (HCAHPS) | >85th %ile | 94th %ile | ✅ |
| Complication Rate (CMIT 167) | <2% | 0.8% | ✅ |

**Exportable:** "Download Report (PDF)" | "Send to Payer Portal" buttons

**Demo behavior:** This is the final clinician screen. Investors should see hard numbers here — even as demo data, the format shows exactly what hospitals and payers will receive.

---

## 6. Key Demo Moments for the Presenter

These are the screens Hamid should spend the most time on during the pitch:

1. **Screen 2 (Dashboard)** — "See this ⚠️ flag? That's a patient with no home support about to be sent to a $23K nursing facility."

2. **Screen 4 (Live Scoring)** — "Watch what happens when we change the answer to 'Planning via CareTaker Match.' The score jumps from 4 to 7. That one change converts a nursing facility patient to a home discharge. That's the clinical intervention."

3. **Screen 6 (Algorithm Visualization)** — "The algorithm searches our volunteer pool, filters by procedure match and proximity, and produces a ranked shortlist. The doctor selects the final match — we recommend, they decide."

4. **Screen 9 (Encounter Monitoring)** — "Every check-in, every message, every call is tracked. The LLM screens for safety. The clinician has full visibility without having to pick up the phone."

5. **Screen 10 (Outcomes)** — "SNF avoided. No readmission. $9,300 below the TEAM target price. Patient made a friend. That's the business model in one screen."

---

## 7. Interactive Elements

### Real-Time Score Calculator (Screen 4)
This must be interactive. The presenter should be able to:
- Tap different answers for Q2, Q3, Q4, Q5
- Watch the score gauge update immediately
- See the eligibility status change (green → red if score drops below 5)
- See the gate check flag when "Wheelchair" is selected
- Reset to the demo defaults with one tap

### Algorithm Funnel Animation (Screen 6)
A simple animated visualization showing:
- Pool of 7 candidates (dots or cards)
- Filter steps remove candidates one by one
- Final 3 are ranked with scores
- This doesn't need to be computationally real — it's a choreographed animation that tells the story

---

## 8. Differences from Phone Apps

| Aspect | Phone Apps (Vol/Patient) | iPad App (Clinician) |
|--------|------------------------|---------------------|
| Width | 390px in phone frame | 768–1024px in iPad frame |
| Navigation | Bottom tab bar | Sidebar |
| Accent color | Teal / Coral | Navy |
| Tone | Warm, supportive | Clinical, data-driven |
| Information density | Low — one idea per screen | High — split panels, tables, charts |
| User sophistication | May be elderly, low-tech | Healthcare professional |
| Primary action | Emotional decisions (approve match) | Clinical decisions (approve discharge) |

---

## 9. File Structure Addition

```
src/screens/clinician/
├── Login.jsx                    # Screen 1
├── Dashboard.jsx                # Screen 2
├── PatientDetail.jsx            # Screen 3
├── SuitabilityAssessment.jsx    # Screen 4 (interactive scoring)
├── ApprovalConfirmation.jsx     # Screen 5
├── MatchingInProgress.jsx       # Screen 6 (algorithm viz)
├── IntroductionTracking.jsx     # Screen 7
├── MatchConfirmed.jsx           # Screen 8
├── EncounterMonitoring.jsx      # Screen 9
├── EncounterClose.jsx           # Screen 10
└── ReportsDashboard.jsx         # Screen 11

src/components/
├── iPadFrame.jsx                # iPad bezel wrapper (new)
├── Sidebar.jsx                  # iPadOS-style sidebar nav (new)
├── ScoreGauge.jsx               # Circular score indicator (new)
├── AlgorithmFunnel.jsx          # Animated matching viz (new)
├── SparklineChart.jsx           # Small inline charts (new)
├── EncounterTimeline.jsx        # Vertical timeline component (new)
└── ... (reuse existing shared components)
```

---

## 10. Data Consistency Across All Three Apps

The three demo apps show the **same encounter from three perspectives**. The following data must be consistent:

| Data Point | Value |
|------------|-------|
| Patient | James Morrison, DOB 09/12/1957, Medicare A&B |
| Procedure | Total Knee Replacement (Right), CPT 27447, MS-DRG 470 |
| Surgeon | Dr. Tom Eickmann |
| Hospital | Intermountain Health — Saint Joseph |
| Surgery Date | April 15, 2026 |
| Volunteer | Sarah Chen, age 42, had TKR March 2024, 5 prior encounters, ⭐ 4.9 |
| Match Score | 94/100 |
| CM Score | 7/9 (Modified RAPT) |
| Coffee Meet | March 29, 10:00 AM, Starbucks Union Blvd & Wadsworth |
| Encounter Window | April 15 – May 15, 2026 |
| Check-in dates | Days 0, 1, 3, 7, 14, 21, 28 + Day 30 close |
| SNF cost avoided | $23,400 |
| TEAM target price | $28,500 |
| Actual episode cost | $19,200 |

All three apps should reference this same data from a shared `demoData.js` file.

---

*This completes the three-app demo specification. Build order: Volunteer → Patient → Clinician. The clinician app has the most complex interactive elements (score calculator, algorithm funnel) but reuses many components from the first two apps. The shared `demoData.js` file should be created with the Volunteer app and extended as each persona is added.*
