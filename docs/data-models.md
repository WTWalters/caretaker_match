# CareTaker Match — Data Models

**Version:** 1.0  
**Source:** Extracted from demo source code + matching algorithm spec + MVP-to-production reconciliation doc  
**Date:** May 2026

---

## Notation

- **Source screen** refers to the demo page route where the data is captured
- **Validation** refers to rules visible in the demo UI or algorithm spec
- Production will add AES-256 encryption for all PII fields; PII is stored in a separate `identity_vault` table (see `mvp-to-production-reconciliation.md`)

---

## 1. Patient

Represents a joint replacement patient enrolled in CareTaker Match.

### 1.1 Identity (PII — encrypted at rest)

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `patientUuid` | UUID | system-generated | unique, non-null | Primary key across all tables |
| `firstName` | string | Patient enrollment Screen 1 | required | Encrypted in `identity_vault` |
| `lastName` | string | Patient enrollment Screen 1 | required | Encrypted in `identity_vault` |
| `phone` | string (E.164) | Patient enrollment Screen 1 | required | Stored as hash for lookup + encrypted blob |
| `email` | string | Not collected from patient (volunteer only) | — | Absent in patient flow; add in production if SMS backup needed |
| `homeAddress` | string | Patient enrollment Screen 6 | required | Used for proximity scoring; never exposed to volunteers |

### 1.2 Surgery Details

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `procedureType` | enum | Patient enrollment Screen 2 | required | `knee_replacement` / `hip_replacement` / `shoulder_replacement` / `other_joint_surgery` |
| `surgeryDate` | date | Patient enrollment Screen 2 | required, ISO date | Used for timeline compatibility check in matching |
| `surgeon` | string | Patient enrollment Screen 2 | required | Free-select from provider list; "not-listed" option available |

### 1.3 Home Support & Eligibility

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `homeSupport` | enum | Patient enrollment Screen 3 | required | `alone` / `family-works` / `not-sure` / `full-support` |
| `ctmEligible` | boolean | derived from `homeSupport` | — | `false` if `homeSupport === "full-support"` (program exit) |

### 1.4 Physical Readiness

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `walkingDistance` | enum | Patient enrollment Screen 4 | required | `>2blocks` / `1-2blocks` / `<1block` |
| `assistiveDevice` | enum | Patient enrollment Screen 4 | required | `none` / `cane` / `walker` |
| `ageRange` | enum | Patient enrollment Screen 4 | required | `under65` / `65-75` / `over75` |
| `ctmScore` | integer (0–9) | Computed on Screen 4 Continue | 0–9 | See formula below |

**CTM Score formula:**
```
walk    = ">2blocks" → 2, "1-2blocks" → 1, "<1block" → 0
assist  = "none" → 2, "cane" → 1, "walker" → 0
age     = "under65" → 2, "65-75" → 1, "over75" → 0
support = "alone" → 3, "family-works" → 2, ("not-sure" | other) → 1
ctmScore = walk + assist + age + support   // range 0–9
```

### 1.5 Lifestyle & Preferences

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `smoking` | enum | Patient enrollment Screen 5 | required | `no` / `yes-tobacco` / `yes-marijuana-or-other` |
| `foodAllergies` | string[] | Patient enrollment Screen 5 | required (can be ["None"]) | Multi-select; "None" is exclusive |
| `dietaryNeeds` | enum | Patient enrollment Screen 5 | required | `no-restrictions` / `vegetarian` / `vegan` / `diabetic-diet` / `kosher` / `halal` / `other` |
| `pets` | enum | Patient enrollment Screen 5 | required | `no-pets` / `dogs` / `cats` / `both` / `other` |

### 1.6 Home Environment

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `housingType` | enum | Patient enrollment Screen 6 | required | `house` / `apartment` / `condo` / `mobile-home` / `other` |
| `entryStairs` | enum | Patient enrollment Screen 6 | required | `none` / `few` (1–4 steps) / `full` (full flight) |
| `interiorLayout` | enum | Patient enrollment Screen 6 | required | `main` (bedroom on main floor) / `stairs` (must navigate stairs inside) |

### 1.7 Emergency Contact

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `emergencyName` | string | Patient enrollment Screen 7 | required | PII — encrypted |
| `emergencyRelationship` | enum | Patient enrollment Screen 7 | required | `spouse-partner` / `parent` / `child` / `sibling` / `friend` / `neighbor` / `other` |
| `emergencyPhone` | string | Patient enrollment Screen 7 | required | PII — encrypted |

### 1.8 Reciprocity & Consent

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `reciprocity` | enum | Patient enrollment Screen 8 | required | `yes-give-back` / `maybe` / `no` / `tell-me-more` |
| `consentScrolled` | boolean | Patient enrollment Screen 10 | required true | Gate: signature canvas disabled until scrolled |
| `signature` | string (base64 PNG) | Patient enrollment Screen 10 | required, non-empty | Canvas drawing; stored as encrypted blob |
| `consentTimestamp` | ISO timestamp | Patient enrollment Screen 10 | required | Set by `new Date().toISOString()` on "I agree and sign" |

### 1.9 System / Triage

| Field | Type | Source | Validation | Notes |
|-------|------|--------|------------|-------|
| `triageStatus` | enum | System-computed post-submission | — | `ELIGIBLE` / `FLAGGED` / `BLOCKED` |
| `triageFlags` | string[] | System-computed | — | e.g., ["HIGH_ALCOHOL", "LOW_MOBILITY"] |
| `submittedAt` | timestamp | system | — | |
| `approvalStatus` | enum | Overseer Dashboard | — | `pending` / `approved` / `failed` |
| `approvedAt` | timestamp | Overseer Dashboard | — | |
| `approvedBy` | UUID | Overseer Dashboard | — | References overseer user |
| `failedCheckName` | string | Background check service | — | e.g., "Criminal history" |

---

## 2. Volunteer

Represents a registered volunteer companion.

### 2.1 Identity (PII — encrypted at rest)

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `volunteerUuid` | UUID | system-generated | unique, non-null | Primary key |
| `firstName` | string | Volunteer registration Screen 1 | required | |
| `lastName` | string | Volunteer registration Screen 1 | required | |
| `phone` | string (E.164) | Volunteer registration Screen 1 | required | |
| `email` | string | Volunteer registration Screen 1 | required | Volunteers provide email; patients do not |
| `homeAddress` | string | Volunteer registration Screen 7 | required | Used for proximity matching only; not shared with patients |

### 2.2 Surgery Experience

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `hadSurgery` | boolean | Volunteer registration Screen 2 | required | |
| `surgeryJoint` | enum | Volunteer registration Screen 2 | required if `hadSurgery === true` | `hip` / `knee` / `shoulder` / `other` |
| `surgeryRecency` | enum | Volunteer registration Screen 2 | required if `hadSurgery === true` | `within-1-year` / `1-3-years` / `3-5-years` / `more-than-5-years` |
| `recoveryQuality` | enum | Volunteer registration Screen 2 | required if `hadSurgery === true` | `smooth` / `average` / `difficult` |
| `hadHelpAtHome` | enum | Volunteer registration Screen 2 | required if `hadSurgery === true` | `family` / `professional` / `alone` / `facility` |

### 2.3 Physical Readiness

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `walkingDistance` | enum | Volunteer registration Screen 3 | required | `>2blocks` / `1-2blocks` / `<1block` |
| `assistiveDevice` | enum | Volunteer registration Screen 3 | required | `none` / `cane` / `walker` |
| `ageRange` | enum | Volunteer registration Screen 3 | required | `under65` / `65-75` / `over75` |
| `readinessScore` | integer (0–9) | System-computed | 0–9 | Analogous to ctmScore; formula TBD for volunteers |

**Readiness Score interpretation (from Overseer dashboard):**
- 7+ → "Strong volunteer — mobile, experienced, full commitment available"
- Below 7 → "Review availability and physical readiness before approving"

### 2.4 Commitment & Availability

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `commitment` | enum | Volunteer registration Screen 4 | required | `yes` / `no` — `no` triggers hard exit |
| `driveRadius` | enum | Volunteer registration Screen 4 | required if `commitment === "yes"` | `up-to-15-min` / `up-to-30-min` / `up-to-45-min` / `up-to-1-hour` |

### 2.5 Lifestyle

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `smokingDrugs` | enum | Volunteer registration Screen 5 | required | `no` / `tobacco` / `recreational` / `both` — `recreational` or `both` triggers hard exit |
| `foodAllergies` | string[] | Volunteer registration Screen 5 | required | Multi-select; "None" is exclusive |
| `petAllergies` | enum | Volunteer registration Screen 5 | required | `no-allergies` / `cats` / `dogs` / `both` / `other` |
| `petsAtHome` | enum | Volunteer registration Screen 5 | required | `no-pets` / `dogs` / `cats` / `both` / `other` |
| `cookingComfort` | boolean | Volunteer registration Screen 5 | required | Willing to help with light cooking/groceries |

### 2.6 Capabilities

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `vehicle` | enum | Volunteer registration Screen 6 | required | `own` / `borrow` / `none` |
| `stairs` | enum | Volunteer registration Screen 6 | required | `yes` / `slowly` / `no` |
| `physicalTasks` | enum | Volunteer registration Screen 6 | required | `yes` / `somewhat` / `no` |

### 2.7 Role Preference

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `rolePreference` | enum | Volunteer registration Screen 8 | required | `primary` (3-day full presence) / `followup` (check-ins/errands) / `either` |

### 2.8 Consent

| Field | Type | Source Screen | Validation | Notes |
|-------|------|---------------|------------|-------|
| `consentScrolled` | boolean | Volunteer registration Screen 10 | required true | Same scroll gate as patient |
| `signature` | string (base64 PNG) | Volunteer registration Screen 10 | required non-empty | Canvas drawing |
| `consentTimestamp` | ISO timestamp | Volunteer registration Screen 10 | required | |

### 2.9 System / Vetting

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| `approvalStatus` | enum | Overseer Dashboard | `pending` / `approved` / `failed` |
| `backgroundCheckPassed` | boolean | Background check service | |
| `trainingModulesCompleted` | integer (0–7) | Training service | 7 total modules |
| `trainingCompletedAt` | timestamp | Training service | |
| `failedCheckName` | string | Background check service | e.g., "Criminal history" |
| `submittedAt` | timestamp | system | |
| `approvedAt` | timestamp | Overseer | |
| `approvedBy` | UUID | Overseer | |

---

## 3. Match

Represents the pairing of one patient with one volunteer, created by the matching algorithm and confirmed by the Overseer.

| Field | Type | Source | Validation | Notes |
|-------|------|--------|------------|-------|
| `matchId` | UUID | system-generated | unique | |
| `patientUuid` | UUID | system | FK → Patient | |
| `volunteerUuid` | UUID | system | FK → Volunteer | |
| `matchScore` | decimal (0–100) | matching algorithm | — | Percentage displayed in UI (e.g., 94%) |
| `matchComponents` | JSON | matching algorithm | — | Breakdown: proximity, age, sex, lifestyle sub-scores |
| `distanceMiles` | decimal | matching algorithm | ≤ 15 (UI shows < 15 mi) | Haversine distance between addresses |
| `matchReasons` | string[] | matching algorithm | — | Human-readable chips shown in UI: e.g., ["Same joint: right knee", "8 miles away"] |
| `isTopMatch` | boolean | algorithm ranking | — | True for rank-1 result |
| `status` | enum | system | — | `pending_overseer_selection` / `proposed` / `confirmed` / `coffee_meet_scheduled` / `active` / `completed` / `cancelled` |
| `confirmedAt` | timestamp | Overseer matching screen | — | When "Confirm Match" clicked |
| `confirmedBy` | UUID | Overseer | — | Overseer user who confirmed |
| `patientNotifiedAt` | timestamp | system | — | |
| `volunteerNotifiedAt` | timestamp | system | — | Simultaneous with patient |
| `volunteerResponse` | enum | Volunteer notification screen | — | `accepted` / `declined` / `no_response` |
| `volunteerRespondedAt` | timestamp | — | — | 24-hour response window |
| `createdAt` | timestamp | system | — | |

---

## 4. CoffeeMeet

Represents the scheduled pre-surgery coffee meeting between a matched patient and volunteer.

| Field | Type | Source | Validation | Notes |
|-------|------|--------|------------|-------|
| `coffeeMeetId` | UUID | system-generated | unique | |
| `matchId` | UUID | system | FK → Match | |
| `patientUuid` | UUID | system | FK → Patient | |
| `volunteerUuid` | UUID | system | FK → Volunteer | |
| `selectedTimeSlotId` | string | Coffee Meet Scheduler Step 1 | required | e.g., `t1` / `t2` / `t3` |
| `scheduledDay` | string | Coffee Meet Scheduler | required | e.g., "Tomorrow, Jun 15" |
| `scheduledTime` | string | Coffee Meet Scheduler | required | e.g., "10:00 AM" |
| `locationId` | string | Coffee Meet Scheduler Step 2 | required | e.g., `l1` / `l2` / `l3` / `l4` |
| `locationName` | string | Coffee Meet Scheduler | required | e.g., "Starbucks" |
| `locationAddress` | string | Coffee Meet Scheduler | required if physical | |
| `locationDistanceMiles` | decimal | system | — | Calculated midpoint proximity |
| `isVirtual` | boolean | Coffee Meet Scheduler | — | True if `l4` selected |
| `virtualLink` | string (URL) | system (if virtual) | — | CTM-generated secure video link |
| `confirmedAt` | timestamp | Coffee Meet Scheduler | — | When "Confirm Coffee Meet" tapped |
| `calendarInvitesSentAt` | timestamp | system | — | Sent to both parties |
| `status` | enum | system | — | `scheduled` / `completed` / `cancelled` / `no_show` |

---

## 5. BackgroundCheckResult

Records the outcome of the background check run on a patient or volunteer.

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| `checkId` | UUID | system-generated | |
| `subjectType` | enum | — | `patient` / `volunteer` |
| `subjectUuid` | UUID | — | FK → Patient or Volunteer |
| `vendorName` | string | — | e.g., "Checkr" |
| `vendorCheckId` | string | — | External reference ID |
| `criminalHistory` | enum | — | `clear` / `flag_found` / `pending` |
| `identityVerification` | enum | — | `verified` / `failed` / `pending` |
| `sexOffenderRegistry` | enum | — | `clear` / `flag_found` / `pending` |
| `volunteerTraining` | enum | — | `complete` / `incomplete` / `n/a` (volunteers only) |
| `overallStatus` | enum | — | `passed` / `failed` / `pending` |
| `failedCheckName` | string | — | Human-readable label of the failing check |
| `initiatedAt` | timestamp | — | When check was started |
| `completedAt` | timestamp | — | |
| `retentionPolicy` | string | — | Per pilot data retention policy |

---

## 6. ProgressStatus

Tracks where a patient or volunteer sits in their individual journey (the 5-step user-facing tracker, distinct from the 8-step encounter lifecycle).

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| `progressId` | UUID | system-generated | |
| `personType` | enum | — | `patient` / `volunteer` |
| `personUuid` | UUID | — | FK → Patient or Volunteer |
| `currentStep` | integer (1–5) | system | |
| `stepLabel` | string | — | Human-readable label of active step |
| `stepStatus` | enum | — | `complete` / `active` / `pending` |
| `statusMessage` | string | — | The contextual message shown on the active step |
| `updatedAt` | timestamp | system | |

**Patient steps (ordered):**
1. Enrolled
2. Approved
3. Finding Match
4. Coffee Meet
5. Recovery Support

**Volunteer steps (ordered):**
1. Applied
2. Background Check
3. Training
4. Approved
5. Available

---

## 7. VolunteerPipelineStage

Tracks aggregate counts in the volunteer vetting funnel for a given practice or region. Used by the Volunteer Pipeline Dashboard.

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| `stageId` | UUID | system-generated | |
| `practiceId` | UUID | — | FK → Practice (future entity) |
| `region` | string | — | e.g., "Colorado" |
| `reportDate` | date | — | Snapshot date |
| `stageOrder` | integer (1–4) | — | |
| `stageLabel` | string | — | e.g., "Referral" / "Background Check" / "Training & Onboarding" / "Verified Pool" |
| `count` | integer | — | Number of volunteers at this stage |
| `conversionPct` | decimal | — | Computed: count / stage_1_count |
| `sublabel` | string | — | e.g., "cleared (96%)" |
| `isHighlighted` | boolean | — | True for the final "Available" stage |

**Demo values (Colorado Region):**

| Stage | Count | Sublabel |
|-------|-------|---------|
| 1. Referral | 2,847 | referred |
| 2. Background Check | 2,412 | cleared (96%) |
| 3. Training & Onboarding | 2,241 | certified (93%) |
| 4. Verified Pool | 412 | available this week |

**Supporting metrics:**
- Average onboarding: 3.2 days
- Available now: 412
- Average response time: 4.2 hours
- Match success rate: 94%

---

## 8. Encounter

Represents an active patient-volunteer pairing from coffee meet through the 30-day recovery window (from the Overseer monitoring dashboard).

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| `encounterId` | string | system | e.g., "E001" |
| `matchId` | UUID | system | FK → Match |
| `patientName` | string | — | Displayed to Overseer |
| `patientAge` | integer | — | |
| `surgery` | string | — | Procedure name |
| `caretakerName` | string | — | Volunteer name displayed to Overseer |
| `surgeryDate` | date | — | |
| `daysSinceSurgery` | integer or null | — | Null = pre-surgery |
| `status` | enum | — | `pending_meetup` / `active_green` / `active_red` |
| `matchDate` | date | — | When the match was confirmed |
| `currentStep` | integer (1–8) | — | Current position in 8-step lifecycle |
| `flags` | string[] | AI content moderation | Toxicity flag descriptions |
| `communicationChannel` | string | — | "Twilio Anonymous Proxy" |
| `messages` | Message[] | — | See below |

### 8.1 Message (sub-entity of Encounter)

| Field | Type | Notes |
|-------|------|-------|
| `messageId` | string | |
| `sender` | enum | `patient` / `caretaker` |
| `senderName` | string | First name only |
| `text` | string | Message content |
| `timestamp` | string | Display format: "Mar 13, 8:05 AM" |
| `flagged` | boolean | True if AI toxicity flag raised |
| `aiFlag` | string | AI analysis text (visible to Overseer only) |

---

## 9. Production Split Schema Notes

Per `mvp-to-production-reconciliation.md`, PHI must be separated at the database level:

**Table 1: `identity_vault`** — Encrypted PII
```sql
patient_uuid UUID PRIMARY KEY
first_name_enc BYTEA       -- AES-256
last_name_enc BYTEA        -- AES-256
phone_hash TEXT UNIQUE     -- For lookup
email_enc BYTEA            -- AES-256
address_enc BYTEA          -- AES-256
```

**Table 2: `clinical_intake`** — Plain, available for ML
```sql
submission_id SERIAL PRIMARY KEY
patient_uuid UUID REFERENCES identity_vault
mobility_range VARCHAR(20)
assistive_device VARCHAR(20)
alcohol_intake VARCHAR(20)
cannabis_context VARCHAR(20)
can_drive VARCHAR(20)
role VARCHAR(10)
created_at TIMESTAMP
```

**Table 3: `triage_decisions`** — Immutable audit trail
```sql
decision_id SERIAL PRIMARY KEY
patient_uuid UUID
triage_status VARCHAR(20)
flags JSONB
provider_override BOOLEAN
override_reason TEXT
decided_at TIMESTAMP
decided_by UUID
```

**Table 4: `matches`** — Match records with scoring
```sql
match_id SERIAL PRIMARY KEY
giver_uuid UUID REFERENCES identity_vault
receiver_uuid UUID REFERENCES identity_vault
total_score DECIMAL(5,2)
score_components JSONB
distance_miles DECIMAL(5,2)
status VARCHAR(20) DEFAULT 'PENDING_REVIEW'
reviewed_by UUID
reviewed_at TIMESTAMP
provider_notes TEXT
outcome VARCHAR(20)
outcome_notes TEXT
created_at TIMESTAMP DEFAULT NOW()
```

**Match outcomes:** `SUCCESS` / `PATIENT_CANCELLED` / `GIVER_CANCELLED` / `ESCALATED_TO_SNF` / `NO_RESPONSE`
