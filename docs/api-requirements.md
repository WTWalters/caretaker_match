# CareTaker Match — API Requirements

**Version:** 1.0  
**Source:** Derived from demo source code + MVP-to-production reconciliation doc  
**Date:** May 2026

---

## Overview

This document specifies the REST API endpoints the production backend must implement. All endpoints simulate behavior that the demo currently handles client-side with static data. The backend will be FastAPI + Pydantic (Python) per the production architecture spec.

### Auth model

| Role | Description |
|------|-------------|
| `patient` | Authenticated patient (phone/email + OTP) |
| `volunteer` | Authenticated volunteer (phone/email + OTP) |
| `overseer` | CTM staff member with review privileges |
| `admin` | CTM administrator with full access |
| `system` | Internal service-to-service (background jobs, matching engine) |

All endpoints require JWT bearer token unless marked `public`. Role appears in the JWT claims.

### Base URL

`/api/v1`

---

## Resource: Patients

### POST /patients/enroll

**Auth:** `public` (no auth required — kiosk intake)  
**Demo screen trigger:** Patient enrollment Screen 10 ("I agree and sign")  
**Purpose:** Submit the complete patient enrollment form and initiate triage.

**Request body:**
```json
{
  "identity": {
    "firstName": "string",
    "lastName": "string",
    "phone": "string (E.164)",
    "homeAddress": "string"
  },
  "surgery": {
    "procedureType": "knee_replacement | hip_replacement | shoulder_replacement | other_joint_surgery",
    "surgeryDate": "ISO date string",
    "surgeon": "string"
  },
  "homeSupport": "alone | family-works | not-sure | full-support",
  "physicalReadiness": {
    "walkingDistance": ">2blocks | 1-2blocks | <1block",
    "assistiveDevice": "none | cane | walker",
    "ageRange": "under65 | 65-75 | over75"
  },
  "lifestyle": {
    "smoking": "no | yes-tobacco | yes-marijuana-or-other",
    "foodAllergies": ["string"],
    "dietaryNeeds": "no-restrictions | vegetarian | vegan | diabetic-diet | kosher | halal | other",
    "pets": "no-pets | dogs | cats | both | other"
  },
  "homeEnvironment": {
    "housingType": "house | apartment | condo | mobile-home | other",
    "entryStairs": "none | few | full",
    "interiorLayout": "main | stairs"
  },
  "emergencyContact": {
    "name": "string",
    "relationship": "spouse-partner | parent | child | sibling | friend | neighbor | other",
    "phone": "string (E.164)"
  },
  "reciprocity": "yes-give-back | maybe | no | tell-me-more",
  "consent": {
    "consentScrolled": true,
    "signature": "string (base64 PNG)",
    "consentTimestamp": "ISO timestamp"
  }
}
```

**Response `201`:**
```json
{
  "patientUuid": "uuid",
  "ctmScore": 7,
  "triageStatus": "ELIGIBLE | FLAGGED | BLOCKED",
  "triageFlags": ["string"],
  "blockedReason": "string | null",
  "submittedAt": "ISO timestamp"
}
```

**Response `400`:** Validation error (missing required fields, invalid enums)  
**Response `409`:** Duplicate submission (phone already enrolled)

**Side effects:**
- Splits data into `identity_vault` + `clinical_intake` tables
- Computes and stores `ctmScore`
- Runs triage evaluation → writes to `triage_decisions`
- Initiates background check (async)

---

### GET /patients/{patientUuid}

**Auth:** `patient` (own record only), `overseer`, `admin`  
**Demo screen trigger:** Overseer Approval Dashboard — patient detail panel  
**Purpose:** Retrieve patient record for review or display.

**Response `200`:**
```json
{
  "patientUuid": "uuid",
  "name": "string",
  "procedureType": "string",
  "surgeryDate": "ISO date",
  "surgeon": "string",
  "ctmScore": 7,
  "triageStatus": "ELIGIBLE | FLAGGED | BLOCKED",
  "triageFlags": ["string"],
  "approvalStatus": "pending | approved | failed",
  "submittedAt": "ISO timestamp"
}
```

**Note:** PII decrypted for `overseer` and `admin` roles. Patient sees own record with full PII.

---

### GET /patients

**Auth:** `overseer`, `admin`  
**Demo screen trigger:** Overseer Approval Dashboard — patient queue list  
**Purpose:** List patients in the approval queue.

**Query params:**
- `status`: filter by `approvalStatus` (`pending` | `approved` | `failed`)
- `limit`: integer (default 50)
- `offset`: integer (default 0)

**Response `200`:**
```json
{
  "patients": [
    {
      "patientUuid": "uuid",
      "name": "string",
      "procedure": "string",
      "surgeryDate": "string",
      "submitted": "string (formatted display)",
      "status": "pending | approved | failed",
      "ctmScore": 7,
      "failedCheck": "string | null",
      "isNew": true
    }
  ],
  "total": 42
}
```

---

## Resource: Volunteers

### POST /volunteers/register

**Auth:** `public`  
**Demo screen trigger:** Volunteer registration Screen 10 ("I agree and sign")  
**Purpose:** Submit volunteer registration and initiate vetting.

**Request body:**
```json
{
  "identity": {
    "firstName": "string",
    "lastName": "string",
    "phone": "string (E.164)",
    "email": "string (email)",
    "homeAddress": "string"
  },
  "surgeryExperience": {
    "hadSurgery": true,
    "surgeryJoint": "hip | knee | shoulder | other | null",
    "surgeryRecency": "within-1-year | 1-3-years | 3-5-years | more-than-5-years | null",
    "recoveryQuality": "smooth | average | difficult | null",
    "hadHelpAtHome": "family | professional | alone | facility | null"
  },
  "physicalReadiness": {
    "walkingDistance": ">2blocks | 1-2blocks | <1block",
    "assistiveDevice": "none | cane | walker",
    "ageRange": "under65 | 65-75 | over75"
  },
  "availability": {
    "commitment": "yes",
    "driveRadius": "up-to-15-min | up-to-30-min | up-to-45-min | up-to-1-hour"
  },
  "lifestyle": {
    "smokingDrugs": "no | tobacco",
    "foodAllergies": ["string"],
    "petAllergies": "no-allergies | cats | dogs | both | other",
    "petsAtHome": "no-pets | dogs | cats | both | other",
    "cookingComfort": true
  },
  "capabilities": {
    "vehicle": "own | borrow | none",
    "stairs": "yes | slowly | no",
    "physicalTasks": "yes | somewhat | no"
  },
  "rolePreference": "primary | followup | either",
  "consent": {
    "consentScrolled": true,
    "signature": "string (base64 PNG)",
    "consentTimestamp": "ISO timestamp"
  }
}
```

**Note:** `commitment === "no"` and `smokingDrugs === "recreational" | "both"` are blocked client-side before submission reaches the API. The API should validate and reject these as well.

**Response `201`:**
```json
{
  "volunteerUuid": "uuid",
  "readinessScore": 8,
  "approvalStatus": "pending",
  "submittedAt": "ISO timestamp",
  "backgroundCheckInitiated": true,
  "trainingModulesRequired": 7
}
```

---

### GET /volunteers/{volunteerUuid}

**Auth:** `volunteer` (own record), `overseer`, `admin`  
**Demo screen trigger:** Overseer Approval Dashboard — volunteer detail panel  
**Purpose:** Retrieve volunteer record for review.

**Response `200`:**
```json
{
  "volunteerUuid": "uuid",
  "name": "string",
  "surgeryHistory": "string",
  "readinessScore": 8,
  "approvalStatus": "pending | approved | failed",
  "trainingModulesCompleted": 3,
  "trainingModulesRequired": 7,
  "backgroundCheckStatus": "pending | passed | failed",
  "submittedAt": "ISO timestamp"
}
```

---

### GET /volunteers

**Auth:** `overseer`, `admin`  
**Demo screen trigger:** Overseer Approval Dashboard — volunteer queue list  
**Purpose:** List volunteers in the approval queue.

**Query params:** Same as `GET /patients` (`status`, `limit`, `offset`)

**Response `200`:**
```json
{
  "volunteers": [
    {
      "volunteerUuid": "uuid",
      "name": "string",
      "surgeryHistory": "string",
      "submitted": "string",
      "status": "pending | approved | failed",
      "readinessScore": 8,
      "failedCheck": "string | null",
      "isNew": false
    }
  ],
  "total": 28
}
```

---

## Resource: Background Checks

### POST /background-checks/initiate

**Auth:** `system`  
**Demo screen trigger:** Overseer Approval Dashboard — animated check sequence (simulated)  
**Purpose:** Start a background check for a patient or volunteer. Called asynchronously after enrollment/registration.

**Request body:**
```json
{
  "subjectType": "patient | volunteer",
  "subjectUuid": "uuid",
  "vendorName": "checkr"
}
```

**Response `202`:**
```json
{
  "checkId": "uuid",
  "vendorCheckId": "string",
  "status": "pending",
  "estimatedCompletionHours": 48
}
```

---

### GET /background-checks/{subjectUuid}

**Auth:** `overseer`, `admin`  
**Demo screen trigger:** Overseer Approval Dashboard — background check panel (animated steps)  
**Purpose:** Get the current background check status with per-check results. Overseer polls this to drive the animated check UI.

**Response `200`:**
```json
{
  "checkId": "uuid",
  "subjectType": "patient | volunteer",
  "overallStatus": "pending | passed | failed",
  "checks": [
    {
      "label": "Criminal history",
      "result": "Clear | Flag found | Pending",
      "state": "waiting | running | done"
    },
    {
      "label": "Identity verification",
      "result": "Verified | Failed | Pending",
      "state": "waiting | running | done"
    },
    {
      "label": "Sex offender registry",
      "result": "Clear | Flag found | Pending",
      "state": "waiting | running | done"
    }
  ],
  "completedAt": "ISO timestamp | null"
}
```

**Note for volunteers:** A fourth check item `{ "label": "Volunteer training", "result": "Complete | Incomplete" }` is included.

---

### POST /background-checks/{subjectUuid}/webhook

**Auth:** vendor webhook secret  
**Purpose:** Receive status updates from the background check vendor (Checkr or similar).

**Request body:** vendor-specific payload  
**Response `200`:** ACK

---

## Resource: Approvals

### POST /approvals/patient

**Auth:** `overseer`  
**Demo screen trigger:** Overseer Approval Dashboard — "Send Approval to Patient →" button  
**Purpose:** Record the Overseer's approval decision for a patient and send the notification.

**Request body:**
```json
{
  "patientUuid": "uuid",
  "decision": "approved | rejected",
  "overrideTriage": false,
  "overrideReason": "string | null",
  "notes": "string | null"
}
```

**Response `200`:**
```json
{
  "approvalId": "uuid",
  "patientUuid": "uuid",
  "decision": "approved",
  "notificationSent": true,
  "notificationText": "Great news, Jennifer! You've been approved. We're now finding your perfect volunteer match.",
  "decidedAt": "ISO timestamp"
}
```

**Side effects:**
- Updates `triage_decisions` with provider decision
- Triggers push notification / SMS to patient
- Moves patient to matching queue if approved

---

### POST /approvals/volunteer

**Auth:** `overseer`  
**Demo screen trigger:** Overseer Approval Dashboard — "Send Approval to Volunteer →" button  
**Purpose:** Record the Overseer's approval decision for a volunteer.

**Request body:**
```json
{
  "volunteerUuid": "uuid",
  "decision": "approved | rejected",
  "notes": "string | null"
}
```

**Response `200`:**
```json
{
  "approvalId": "uuid",
  "volunteerUuid": "uuid",
  "decision": "approved",
  "notificationSent": true,
  "notificationText": "Welcome aboard, Robert! Your background check cleared. You're approved as a CareTaker Match volunteer.",
  "decidedAt": "ISO timestamp"
}
```

---

## Resource: Matching

### POST /matches/run

**Auth:** `overseer`, `system`  
**Demo screen trigger:** Patient Volunteer Selection page — "Run Matching Algorithm →" button  
**Purpose:** Run the matching algorithm for a given patient and return ranked candidate volunteers.

**Request body:**
```json
{
  "patientUuid": "uuid"
}
```

**Response `200`:**
```json
{
  "patientUuid": "uuid",
  "funnelStats": {
    "totalNetworkVolunteers": 247,
    "passedBackgroundChecks": 89,
    "withinRadius": 31,
    "withMatchingExperience": 12,
    "topCandidates": 3
  },
  "candidates": [
    {
      "volunteerUuid": "uuid",
      "name": "string",
      "age": 71,
      "location": "string",
      "distanceMiles": 8.0,
      "surgeryHistory": "string",
      "availability": "string",
      "matchScore": 94,
      "isTopMatch": true,
      "matchReasons": [
        { "icon": "string (emoji)", "text": "string" }
      ],
      "scoreBreakdown": {
        "proximity": 9.0,
        "ageMatch": 5.0,
        "sexMatch": 3.0,
        "lifestyle": 3.5
      }
    }
  ],
  "computedAt": "ISO timestamp"
}
```

**Algorithm notes (from matching-algorithm-v1.md):**
- Hard filters first: role compatibility, geographic proximity (≤ 15 mi for UI, ≤ 10 mi per algorithm), triage status, timeline compatibility (≥ 14 days between surgeries)
- Soft scoring: proximity (max 10 pts), age match (max 5 pts), sex match (3 pts), lifestyle alignment (variable, penalties apply for smoking mismatch and high-alcohol giver)
- `MINIMUM_MATCH_THRESHOLD = 5.0` — candidates below this score are excluded
- Batch processing via Hungarian algorithm for global optimality (run every 4 hours or on-demand)

---

### POST /matches/confirm

**Auth:** `overseer`  
**Demo screen trigger:** Patient Volunteer Selection page — "Confirm Match with [name] →" button  
**Purpose:** Confirm a selected candidate as the patient's volunteer and trigger simultaneous notifications.

**Request body:**
```json
{
  "patientUuid": "uuid",
  "volunteerUuid": "uuid",
  "matchScore": 94
}
```

**Response `200`:**
```json
{
  "matchId": "uuid",
  "patientUuid": "uuid",
  "volunteerUuid": "uuid",
  "status": "confirmed",
  "patientNotification": {
    "sent": true,
    "text": "Great news, Jennifer! We've found your CaretakerMatch volunteer. Robert M. will be your caregiver for your knee surgery on Jun 18."
  },
  "volunteerNotification": {
    "sent": true,
    "text": "You have a new match request from Jennifer W. Please review and respond within 24 hours."
  },
  "confirmedAt": "ISO timestamp"
}
```

---

### GET /matches/{matchId}

**Auth:** `patient` (own match), `volunteer` (own match), `overseer`, `admin`  
**Demo screen trigger:** Volunteer notification screen (match details card)  
**Purpose:** Retrieve match details.

**Response `200`:**
```json
{
  "matchId": "uuid",
  "status": "confirmed | coffee_meet_scheduled | active | completed | cancelled",
  "patient": {
    "uuid": "uuid",
    "name": "string (first name + last initial)",
    "age": 67,
    "location": "city, state",
    "surgery": "string",
    "surgeryDate": "ISO date",
    "supportNeeded": "string",
    "note": "string"
  },
  "volunteer": {
    "uuid": "uuid",
    "name": "string",
    "matchScore": 94,
    "distanceMiles": 8.0,
    "surgeryHistory": "string"
  },
  "volunteerResponse": "pending | accepted | declined",
  "volunteerRespondedAt": "ISO timestamp | null",
  "responseDeadlineAt": "ISO timestamp"
}
```

---

### POST /matches/{matchId}/respond

**Auth:** `volunteer`  
**Demo screen trigger:** Volunteer notification screen — "✓ Accept & Propose Coffee Times" / "✗ Decline" buttons  
**Purpose:** Volunteer accepts or declines the match request.

**Request body:**
```json
{
  "response": "accepted | declined",
  "declineReason": "string | null"
}
```

**Response `200`:**
```json
{
  "matchId": "uuid",
  "volunteerResponse": "accepted | declined",
  "respondedAt": "ISO timestamp",
  "nextStep": "schedule_coffee_meet | rematch_triggered"
}
```

**Side effects (on acceptance):** Patient notified; Coffee Meet scheduling flow unlocked.  
**Side effects (on decline):** Re-matching triggered for patient; volunteer returned to available pool.

---

## Resource: Coffee Meets

### POST /coffee-meets

**Auth:** `patient` or `volunteer`  
**Demo screen trigger:** Coffee Meet Scheduler — "Confirm Coffee Meet ☕" button  
**Purpose:** Create and confirm a coffee meet appointment.

**Request body:**
```json
{
  "matchId": "uuid",
  "timeSlot": {
    "day": "string",
    "time": "string"
  },
  "location": {
    "locationId": "string",
    "name": "string",
    "address": "string | null",
    "isVirtual": false
  }
}
```

**Response `201`:**
```json
{
  "coffeeMeetId": "uuid",
  "matchId": "uuid",
  "scheduledAt": "string (formatted display)",
  "location": {
    "name": "string",
    "address": "string | null",
    "isVirtual": false,
    "virtualLink": "string | null"
  },
  "calendarInvitesSentAt": "ISO timestamp",
  "whatToExpect": ["string"]
}
```

**Side effects:** Calendar invites sent to both patient and volunteer; match status updated to `coffee_meet_scheduled`.

---

### GET /coffee-meets/available-slots/{matchId}

**Auth:** `patient`, `volunteer`  
**Demo screen trigger:** Coffee Meet Scheduler — Step 1 time slots  
**Purpose:** Return time slots proposed by the volunteer.

**Response `200`:**
```json
{
  "timeSlots": [
    { "id": "t1", "day": "string", "time": "string" }
  ],
  "locations": [
    {
      "id": "l1",
      "name": "string",
      "address": "string | null",
      "distanceFromPatient": "string",
      "isVirtual": false
    }
  ]
}
```

---

## Resource: Progress Tracker

### GET /progress/{personType}/{personUuid}

**Auth:** `patient` (own record), `volunteer` (own record), `overseer`  
**Demo screen trigger:** Progress Tracker page  
**Purpose:** Return the current journey step state for a patient or volunteer.

**Path params:**
- `personType`: `patient` | `volunteer`
- `personUuid`: UUID

**Response `200`:**
```json
{
  "personType": "patient | volunteer",
  "personUuid": "uuid",
  "currentStepLabel": "Finding Match",
  "steps": [
    {
      "label": "string",
      "status": "complete | active | pending",
      "message": "string | null"
    }
  ],
  "updatedAt": "ISO timestamp"
}
```

---

## Resource: Encounters (Overseer Monitoring)

### GET /encounters

**Auth:** `overseer`, `admin`  
**Demo screen trigger:** Overseer Monitoring Dashboard — encounter table  
**Purpose:** List all active encounters.

**Query params:**
- `status`: filter by encounter status (`pending_meetup` | `active_green` | `active_red`)
- `limit`, `offset`

**Response `200`:**
```json
{
  "encounters": [
    {
      "encounterId": "string",
      "patientName": "string",
      "patientAge": 72,
      "surgery": "string",
      "caretakerName": "string",
      "surgeryDate": "ISO date",
      "daysSinceSurgery": 2,
      "status": "pending_meetup | active_green | active_red",
      "matchDate": "ISO date",
      "currentStep": 6,
      "flags": ["string"]
    }
  ],
  "stats": {
    "total": 3,
    "awaitingCoffeeMeet": 1,
    "activeInRecovery": 2,
    "flagged": 1
  }
}
```

---

### GET /encounters/{encounterId}

**Auth:** `overseer`, `admin`  
**Demo screen trigger:** Overseer Monitoring Dashboard — encounter detail view  
**Purpose:** Retrieve full encounter details including 8-step timeline and message log.

**Response `200`:**
```json
{
  "encounterId": "string",
  "patientName": "string",
  "patientAge": 72,
  "surgery": "string",
  "caretakerName": "string",
  "surgeryDate": "ISO date",
  "daysSinceSurgery": 2,
  "status": "pending_meetup | active_green | active_red",
  "matchDate": "ISO date",
  "currentStep": 6,
  "flags": ["string"],
  "communicationChannel": "Twilio Anonymous Proxy",
  "timeline": [
    {
      "stepNumber": 1,
      "label": "Assessment & Enrollment",
      "sublabel": "iPad Intake",
      "completed": true,
      "current": false
    }
  ],
  "messageCount": 11
}
```

---

### GET /encounters/{encounterId}/messages

**Auth:** `overseer`, `admin`  
**Demo screen trigger:** Overseer Monitoring Dashboard — communication log view  
**Purpose:** Retrieve full message thread for an encounter (read-only for Overseer).

**Response `200`:**
```json
{
  "encounterId": "string",
  "messages": [
    {
      "messageId": "string",
      "sender": "patient | caretaker",
      "senderName": "string",
      "text": "string",
      "timestamp": "string",
      "flagged": false,
      "aiFlag": "string | null"
    }
  ],
  "totalMessages": 11,
  "flaggedMessages": 1
}
```

---

### POST /encounters/{encounterId}/flags/{flagId}/dismiss

**Auth:** `overseer`  
**Demo screen trigger:** Overseer communication log — "Dismiss Flag" button  
**Purpose:** Mark an AI toxicity flag as reviewed and dismissed.

**Request body:**
```json
{
  "dismissalReason": "string | null"
}
```

**Response `200`:** `{ "dismissed": true, "dismissedAt": "ISO timestamp" }`

---

### POST /encounters/{encounterId}/escalate

**Auth:** `overseer`  
**Demo screen trigger:** Overseer encounter detail — "Escalate to Clinician" button  
**Purpose:** Escalate a flagged encounter to a clinical review.

**Request body:**
```json
{
  "escalationType": "toxicity | safety | clinical",
  "notes": "string"
}
```

**Response `200`:** `{ "escalationId": "uuid", "escalatedAt": "ISO timestamp", "assignedTo": "string | null" }`

---

## Resource: Notifications

### POST /notifications/send

**Auth:** `system`, `overseer`  
**Demo screen trigger:** All iPhone notification overlays in the demo  
**Purpose:** Send a push notification or SMS to a patient or volunteer.

**Request body:**
```json
{
  "recipientType": "patient | volunteer",
  "recipientUuid": "uuid",
  "channel": "push | sms | both",
  "message": "string"
}
```

**Response `202`:**
```json
{
  "notificationId": "uuid",
  "queued": true,
  "scheduledAt": "ISO timestamp"
}
```

---

## Resource: Volunteer Pipeline (Admin Analytics)

### GET /analytics/volunteer-pipeline

**Auth:** `admin`, `overseer`  
**Demo screen trigger:** Volunteer Pipeline Dashboard  
**Purpose:** Return aggregate volunteer funnel metrics for a region.

**Query params:**
- `practiceId`: UUID (optional)
- `region`: string (optional, e.g., "Colorado")
- `reportDate`: ISO date (optional, defaults to today)

**Response `200`:**
```json
{
  "region": "Colorado",
  "reportDate": "ISO date",
  "sources": [
    {
      "name": "string",
      "count": "string",
      "note": "string",
      "active": true
    }
  ],
  "pipelineStages": [
    {
      "stageOrder": 1,
      "label": "Referral",
      "count": 2847,
      "sublabel": "referred",
      "isHighlighted": false
    }
  ],
  "availablePool": {
    "totalAvailable": 412,
    "avgResponseHours": 4.2,
    "byProcedure": [
      { "label": "Hip Replacement", "count": 180, "pct": 44 }
    ],
    "byRegion": [
      { "region": "Denver Metro", "count": 245 }
    ]
  },
  "avgOnboardingDays": 3.2,
  "matchSuccessRate": 0.94
}
```

---

## Error Responses

All endpoints return a consistent error envelope:

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "field": "string | null"
  }
}
```

**Common error codes:**

| Code | HTTP Status | Meaning |
|------|-------------|---------|
| `VALIDATION_ERROR` | 400 | Missing or invalid field |
| `UNAUTHORIZED` | 401 | Missing or invalid JWT |
| `FORBIDDEN` | 403 | Authenticated but insufficient role |
| `NOT_FOUND` | 404 | Resource does not exist |
| `CONFLICT` | 409 | Duplicate submission (e.g., phone already enrolled) |
| `UNPROCESSABLE` | 422 | Business logic rejection (e.g., commitment=no) |
| `INTERNAL_ERROR` | 500 | Unexpected server error |

---

## Webhook Integrations

### Background Check Vendor (Checkr)

**Inbound webhook:** `POST /webhooks/background-check`  
**Auth:** vendor-signed HMAC signature header  
**Purpose:** Receive real-time status updates for criminal history, identity, and sex offender checks.

### Communication Platform (Twilio)

**Anonymous proxy:** All patient-volunteer messaging routes through Twilio Proxy. Patient and volunteer never exchange real phone numbers.  
**Inbound messages:** `POST /webhooks/twilio/message` — receives new messages for AI content moderation  
**Side effect of each message:** Run through AI toxicity model; set `flagged = true` and generate `aiFlag` text if threshold exceeded; trigger Overseer notification.

---

## Rate Limits

| Endpoint group | Limit |
|----------------|-------|
| `POST /patients/enroll` | 10 req/min per IP |
| `POST /volunteers/register` | 10 req/min per IP |
| `POST /matches/run` | 60 req/min per overseer |
| All other endpoints | 120 req/min per auth token |
