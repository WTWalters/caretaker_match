# ADR 001 — Demo-to-Production Architecture Decisions

**Status:** Accepted  
**Date:** May 2026  
**Authors:** Whit Walters  
**Sources:** Demo source code, `matching-algorithm-v1.md`, `mvp-to-production-reconciliation.md`

---

## ADR 001-A: CTM Score Algorithm and Threshold

### Context

The demo computes a "CTM Score" (CareTaker Match Score) for each patient during the physical readiness screen (Screen 4). The score is derived from four inputs: walking distance, assistive device use, age range, and home support level. The Overseer dashboard displays this score on a 0–9 scale but explicitly marks it as "(internal — not shown to patient)."

The score is used to help Overseers quickly assess whether a patient is a good candidate for home recovery vs. SNF referral, and it feeds into the matching algorithm as a triage signal.

### Decision

The CTM Score formula as implemented in the demo is adopted for production:

```
walk    = ">2blocks" → 2 | "1-2blocks" → 1 | "<1block" → 0
assist  = "none" → 2 | "cane" → 1 | "walker" → 0
age     = "under65" → 2 | "65-75" → 1 | "over75" → 0
support = "alone" → 3 | "family-works" → 2 | "not-sure" → 1
ctmScore = walk + assist + age + support   // range 0–9
```

**Interpretation thresholds (Overseer dashboard):**
- Score ≥ 6 → "Strong candidate for home recovery"
- Score < 6 → "Borderline — review mobility detail before approving"

The CTM Score is always treated as advisory. It is never surfaced to patients. Overseer can approve any patient regardless of score, with documented reasoning.

### Consequences

**Positive:**
- Simple and explainable to clinical staff
- Computed client-side on mobile with no backend round-trip needed
- Provides a consistent signal across all intake forms
- Score range (0–9) aligns with the Volunteer Readiness Score scale, enabling easy comparisons

**Negative:**
- The formula uses a uniform integer weighting scheme that may not reflect clinical nuance (e.g., age >75 and walker-dependent may be higher risk than the sum suggests)
- `homeSupport = "alone"` (score 3) is the largest contributor, making it disproportionately influential
- No validation against real-world recovery outcomes yet (pre-data)

**Open questions for Tom Eickmann:**
1. Should low-mobility patients (walkingDistance `<1block` + walker) be auto-flagged regardless of total score?
2. Is age >75 a harder clinical concern than the current 1-point penalty reflects?
3. What real-world CTM Score cutoff correlates with SNF avoidance success?

---

## ADR 001-B: Two-Persona Enrollment (Separate Flows vs. Unified)

### Context

The platform serves two distinct user types — patients recovering from surgery and volunteers who provide care. An alternative design would present a single intake flow that branches by role selection. The demo implements fully separate flows at separate routes:
- Patient: `/demo/onboarding/patient`
- Volunteer: `/demo/onboarding/volunteer`

The two flows share surface-level UI patterns (iPhone frame, progress bar, teal color scheme, consent structure) but differ substantially in field content, hard-exit logic, and tone.

### Decision

Maintain fully separate enrollment flows for patients and volunteers in production.

**Key differences justifying separation:**

| Concern | Patient | Volunteer |
|---------|---------|-----------|
| Duration | ~8 min | ~12 min |
| Identity fields | firstName, lastName, phone | + email |
| Surgery section | Upcoming surgery details | Past surgery experience (4 sub-questions) |
| Hard exits | home-support = full (graceful) | commitment = no; drugs = recreational (firm) |
| Commitment question | N/A | Required gate (3-day + 1-month) |
| Role preference | Reciprocity interest only | Primary / follow-up / either |
| Consent clauses | 7 | 8 (adds "Volunteer Role" and "Withdrawal") |
| Post-consent next steps | Background check + matching | Background check + 7-module training |
| Tone | Reassurance-first, vulnerability acknowledged | Purpose-driven, responsibility-forward |

### Consequences

**Positive:**
- Each flow optimized for its audience's psychology and information needs
- Hard-exit conditions can be cleanly implemented per persona without confusing branching
- Separate routes simplify routing, analytics, and QR code attribution (e.g., volunteer QR from flyer goes directly to volunteer flow)
- Legal agreements can differ per role without conditional rendering complexity

**Negative:**
- Two codebases to maintain instead of one
- Shared UI components (IPhone frame, Opt/Field/Btn/Back) must be kept in sync
- Future changes (e.g., new consent clause) require updates in both flows

**Implementation note:** Extract shared components (`IPhone`, `Opt`, `Field`, `Btn`, `Back`) to a shared component library in production.

---

## ADR 001-C: Hard Exit Conditions in Volunteer Screening

### Context

The volunteer registration flow contains two screens where specific user answers result in a permanent exit from the registration process. These are not soft warnings — they navigate the user to a terminal screen with no path forward into the program.

The two hard-exit conditions:
1. **Commitment refusal** (Screen 4): Selecting `commitment === "no"` — unable to provide 3-day post-op presence
2. **Recreational drug use** (Screen 5): Selecting `smokingDrugs === "recreational"` or `"both"` — any recreational drug use

In both cases, a warning banner is shown on the selection screen before the user proceeds. The exit screen is shown only after the user taps Continue.

### Decision

Both hard-exit conditions are retained and enforced in production. They are non-negotiable for the following reasons:

**Commitment refusal:** The core value proposition of CareTaker Match is reliable post-op support for the first 72 hours after surgery, which is the period of highest physical vulnerability and fall risk. A volunteer who cannot commit to this window cannot fulfill the primary companion role. The exit screen uses warm, non-judgmental language and invites the volunteer to return when their schedule allows.

**Recreational drug use:** Volunteers will be alone with vulnerable post-surgical patients in their homes. Patient safety requires that volunteers be free from impairment risk. The exit screen acknowledges the volunteer's honesty, uses non-shaming language, and confirms that no information has been shared with anyone.

**These conditions are also enforced server-side in the registration API** — the backend rejects submissions with `commitment === "no"` or `smokingDrugs === "recreational" | "both"` with a `422 UNPROCESSABLE` error, even if a client-side bypass is attempted.

### Consequences

**Positive:**
- Protects patients from being matched with unavailable or impaired volunteers
- Creates a bright-line policy that is easy to communicate and audit
- Reduces matching failures by filtering at intake rather than post-approval
- Client-side warning banner allows volunteers to reconsider before final exit

**Negative:**
- Tobacco use is allowed but recreational drug use is not — this line may require periodic review as cannabis legality evolves
- "Recreational drug use" is self-reported with no verification mechanism at intake (background check is the real gate)
- Some valuable volunteers may be lost due to schedule constraints that could have been accommodated through a follow-up companion role

**Open question:** Should a "follow-up companion only" role be offered as an alternative path for volunteers who cannot commit to the full 3-day primary role but could do weekly check-ins and errands?

---

## ADR 001-D: Coffee Meet as Required Trust Step Before Surgery

### Context

After a match is confirmed, the patient and volunteer are required to schedule and complete a coffee meeting before surgery. This step is non-optional — the volunteer's "Accept" button is labeled "✓ Accept & Propose Coffee Times" (not "Accept" alone), and the encounter lifecycle lists step 5 as "Coffee Meet & Consent (Barcode Verified)."

The coffee meet is positioned throughout the UX as a low-stakes, no-commitment first contact: "30–45 minute casual coffee chat." However, it serves as a functional consent and compatibility verification step.

### Decision

The coffee meet is a required step in the lifecycle (Step 5 of 8) and must be completed before the Active Recovery stage begins. Virtual video call is offered as an alternative to physical meeting.

**Rationale:**
1. **Safety:** Patients and volunteers physically meet before a stranger enters the patient's home post-surgery. This provides a natural compatibility check and final opportunity to opt out.
2. **Trust foundation:** A patient who is incapacitated post-surgery needs prior trust with their volunteer. Meeting in advance substantially reduces anxiety and improves recovery outcomes.
3. **Compliance documentation:** "Barcode Verified" sublabel in the encounter timeline implies a future in-person verification mechanism (e.g., QR code shown at meeting) to confirm the meeting occurred.
4. **Dropout prevention:** Patients and volunteers who meet in person are less likely to withdraw close to surgery date.

**Virtual option rationale:** The scheduler includes "Virtual Video Call" with a CTM-generated secure link. This accommodates geographic edge cases (patients outside the normal radius), mobility-limited volunteers, and situations where a physical meeting is infeasible on short notice.

### Consequences

**Positive:**
- Adds a human layer to what is otherwise a technology-mediated relationship
- Provides a natural exit point if either party is uncomfortable before any care obligation begins
- Reduces post-match cancellation rate
- The "No One Recovers Alone" brand promise is demonstrated in person before surgery

**Negative:**
- Adds a scheduling coordination step that could delay the timeline if availability doesn't align
- Virtual option reduces the trust-building value if overused
- Requires CTM infrastructure to generate secure video links (Twilio or similar)
- "Barcode Verified" attendance confirmation requires physical kiosk or mobile scan capability to be built

---

## ADR 001-E: Overseer as Human-in-the-Loop Gatekeeper

### Context

Every major lifecycle transition in CareTaker Match is mediated by a human Overseer rather than being fully automated:

1. **Enrollment approval:** Overseer views background check results + CTM Score and explicitly clicks "Send Approval" — the system does not auto-approve even when all checks pass
2. **Match confirmation:** Overseer selects which of the top 3 algorithm-generated candidates to confirm — the algorithm does not auto-confirm
3. **Encounter monitoring:** Overseer reviews flagged communications and decides whether to contact the caretaker, escalate to clinician, or dismiss the flag

This design is explicit in the MVP-to-production reconciliation doc which cites FDA Clinical Decision Support (CDS) exemption requirements: "System provides recommendations, not autonomous decisions. Provider always has override capability."

### Decision

The Overseer human-in-the-loop role is mandatory and hardcoded into the lifecycle at three gates:

1. **Post-background-check approval gate** (Overseer Approval Dashboard)
2. **Post-algorithm match confirmation gate** (Patient Volunteer Selection)
3. **AI toxicity flag review gate** (Overseer Monitoring Dashboard)

The system will not automatically transition a patient/volunteer to "approved" status, confirm a match, or suppress a communication flag without explicit Overseer action. All Overseer decisions are logged in the `triage_decisions` audit table with timestamp and user ID.

### Consequences

**Positive:**
- Maintains FDA CDS tool exemption by keeping autonomous medical decision-making out of scope
- Creates an immutable audit trail for every approval and match decision (liability protection)
- Allows experienced staff to catch edge cases the algorithm misses (e.g., mobility mismatch, cultural considerations)
- Supports the "Learned Intermediary" defense documented in the production architecture spec

**Negative:**
- Creates a staffing bottleneck — Overseer availability gates patient flow
- Not scalable to high volumes without either automation or additional staff
- Background check review adds latency to the approval timeline (estimated 48 hours for patients, 3–5 business days for volunteers)

**Scaling path:** As the algorithm matures and outcome data accumulates, specific approval gates can be automated with configurable thresholds (e.g., auto-approve patients where CTM Score ≥ 7 and all background checks clear, with Overseer notified but action not required within 24 hours).

---

## ADR 001-F: Volunteer Sourcing via Community Partner Network

### Context

The Volunteer Pipeline Dashboard reveals the sourcing strategy for building the volunteer pool. Rather than growing volunteers purely from patient reciprocity, CTM has pre-built partnerships with community organizations:

- **Idealist.org** — national volunteer platform, 200K organizations, 1,200+ Colorado volunteers
- **Spark the Change Colorado** — Denver metro focus, 450+ local volunteers
- **Patient reciprocity** — 197 past patients who indicated willingness to give back after recovery
- **Faith-based organizations** — 600+ potential volunteers, partnership underway

### Decision

The multi-source volunteer pipeline strategy is adopted for production launch. The three active sources (Idealist, Spark the Change, Patient Reciprocity) provide the initial pool; Faith-Based Organizations are the Phase 2 expansion.

**Patient reciprocity as self-sustaining mechanism:** Patients who select "Yes, I'd love to give back" or "Maybe, ask me again after I've recovered" on the reciprocity screen (Screen 8) are flagged for follow-up contact after recovery. This creates a flywheel: patients become volunteers, growing the pool automatically with people who have firsthand experience.

**Onboarding speed:** The pipeline shows an average of 3.2 days from referral to verified availability. This must be maintained in production to ensure a responsive volunteer supply.

### Consequences

**Positive:**
- Eliminates cold-start problem — volunteer pool exists before patient demand materializes
- Community partner network brings brand trust and pre-screened candidates
- Patient reciprocity creates organic, self-sustaining growth
- Diverse sources (Idealist = national scale; Spark = local depth; Faith = community trust) provide resilience

**Negative:**
- Community partner relationships require ongoing maintenance and partner management staff
- Idealist/Spark volunteers have no personal surgery experience (unlike patient-turned-volunteer pool)
- Faith-based partnership introduces potential cultural and values alignment considerations that must be managed carefully
- Pipeline conversion (2,847 referrals → 412 available) means significant dropout — optimizing this funnel is an ongoing operational priority

---

## ADR 001-G: Progress Tracker as Patient-Facing Transparency Tool

### Context

The demo includes a Progress Tracker screen that shows both patients and volunteers their current position in a 5-step journey. The patient journey steps are: Enrolled → Approved → Finding Match → Coffee Meet → Recovery Support. The volunteer journey is: Applied → Background Check → Training → Approved → Available.

This is distinct from the 8-step Overseer encounter lifecycle. The progress tracker is simplified for the consumer and shows only user-visible milestones, not internal system states.

### Decision

Both patient-facing and volunteer-facing progress trackers are built into the mobile app as persistent features (not just demo screens). The tracker is:

- Visible from the app home screen
- Updated in real-time as status changes occur (push-triggered)
- Shows a contextual "Good news!" message on the active step that explains what is happening and what to expect

**Design principles:**
- The tracker shows only positive-framing steps — there is no "Failed" step shown to the user (rejection is handled via direct notification with a human explanation, not by a tracker state)
- Users should never feel stalled — the active step always includes a status message explaining the wait
- The Overseer approval step is abstracted — patients see "Approved" as a single step, not "Waiting for Overseer review"

### Consequences

**Positive:**
- Reduces inbound support inquiries by setting clear expectations at each stage
- Demonstrates platform transparency, supporting patient trust
- "24-48 hour" match timeline message sets a concrete expectation that can be monitored for SLA compliance
- Reduces patient anxiety during the waiting period between enrollment and match (typically the highest-anxiety window)

**Negative:**
- Status must be kept accurately up-to-date — a stale or incorrect tracker damages trust more than no tracker
- The simplified 5-step patient view hides complexity (e.g., background check happens between Enrolled and Approved but isn't shown as its own step)
- "Finding Match" message promising top 3 matches within "24-48 hours" sets an SLA that operations must consistently meet

**Implementation note:** Progress status should be event-driven (not polled) — each system event (background check cleared, Overseer approved, match confirmed) triggers an atomic update to `ProgressStatus` and a push notification to the relevant user.
