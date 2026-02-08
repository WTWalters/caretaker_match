# CareTaker Match: Matching Algorithm v1

## Overview

This document defines the initial rule-based matching algorithm for pairing care givers with care receivers. This is a **heuristic approach** designed for cold-start (no training data). The algorithm will evolve as we collect outcome data on successful matches.

**Design Principles:**
1. Explainable - Every match score can be justified to providers and patients
2. Conservative - When in doubt, don't match (false negatives are safer than bad matches)
3. Auditable - All scoring factors logged for compliance and future ML training
4. Overridable - Providers can force or block matches with documented reasoning

---

## Matching Pipeline

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Eligible Pool  │────▶│  Hard Filters   │────▶│  Soft Scoring   │
│   (All BOTH +   │     │  (Must Pass)    │     │  (Weighted)     │
│  GIVER/RECEIVER)│     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
                        ┌─────────────────┐     ┌─────────────────┐
                        │ Provider Review │◀────│  Ranked Matches │
                        │  (Override OK)  │     │  (Top N)        │
                        └─────────────────┘     └─────────────────┘
```

---

## Phase 1: Hard Constraints (Must Pass)

These are binary filters. If any fail, the pair is not considered.

### 1.1 Role Compatibility

```python
def is_role_compatible(patient_a: Patient, patient_b: Patient) -> bool:
    """
    Valid pairings:
    - GIVER + RECEIVER
    - GIVER + BOTH (BOTH acts as receiver)
    - BOTH + RECEIVER (BOTH acts as giver)
    - BOTH + BOTH (one gives, one receives - need tiebreaker)
    
    Invalid:
    - GIVER + GIVER
    - RECEIVER + RECEIVER
    """
    roles = {patient_a.role, patient_b.role}
    
    # Two givers or two receivers can't match
    if roles == {"GIVER"} or roles == {"RECEIVER"}:
        return False
    
    return True
```

### 1.2 Geographic Proximity

```python
MAX_DISTANCE_MILES = 10  # Configurable per practice

def is_within_range(patient_a: Patient, patient_b: Patient) -> bool:
    """
    Calculate haversine distance between patient addresses.
    Reject if beyond MAX_DISTANCE_MILES.
    """
    distance = haversine_distance(
        patient_a.location.lat, patient_a.location.lng,
        patient_b.location.lat, patient_b.location.lng
    )
    return distance <= MAX_DISTANCE_MILES
```

### 1.3 Triage Status

```python
def is_triage_eligible(patient_a: Patient, patient_b: Patient) -> bool:
    """
    Both patients must have passed triage:
    - ELIGIBLE: Auto-approved
    - FLAGGED: Requires provider override to be in matching pool
    - BLOCKED: Never enters matching pool
    """
    eligible_statuses = {"ELIGIBLE", "FLAGGED_APPROVED"}
    
    return (
        patient_a.triage_status in eligible_statuses and
        patient_b.triage_status in eligible_statuses
    )
```

### 1.4 Timeline Compatibility

```python
MIN_DAYS_BETWEEN_SURGERIES = 14  # Giver must be recovered enough to help

def is_timeline_compatible(giver: Patient, receiver: Patient) -> bool:
    """
    The giver's surgery must be far enough in the past (or future)
    that they can actually provide care during receiver's recovery.
    
    Scenarios:
    1. Giver already recovered → Can help receiver now
    2. Giver surgery is 14+ days before receiver → Can help
    3. Giver surgery is after receiver's recovery window → Can help
    4. Overlapping recovery windows → Cannot match
    """
    if giver.surgery_date is None:
        # Giver-only patient (no surgery planned) - always available
        return True
    
    if receiver.surgery_date is None:
        # Receiver has no scheduled surgery yet - can't match
        return False
    
    giver_recovery_end = giver.surgery_date + timedelta(days=MIN_DAYS_BETWEEN_SURGERIES)
    receiver_recovery_end = receiver.surgery_date + timedelta(days=14)  # Typical recovery
    
    # Giver must be available when receiver needs help
    # Either: giver recovered before receiver's surgery
    # Or: giver's surgery is after receiver's recovery
    
    return (
        giver_recovery_end <= receiver.surgery_date or
        giver.surgery_date >= receiver_recovery_end
    )
```

---

## Phase 2: Soft Constraints (Weighted Scoring)

Patients that pass hard constraints are scored on compatibility. Higher score = better match.

### 2.1 Scoring Weights

```python
# Positive factors (add to score)
WEIGHT_PROXIMITY_BONUS = 10.0      # Max points for proximity (scales with distance)
WEIGHT_AGE_MATCH = 5.0             # Same age bracket
WEIGHT_SEX_MATCH = 3.0             # Same sex
WEIGHT_LIFESTYLE_ALIGNMENT = 4.0   # Smoking/alcohol/cannabis alignment

# Negative factors (subtract from score)
PENALTY_SMOKING_MISMATCH = -8.0    # One smokes, other doesn't
PENALTY_HIGH_ALCOHOL_GIVER = -5.0  # Giver has HIGH alcohol intake
PENALTY_DISTANCE_FAR = -3.0        # Applied per mile beyond 5 miles
```

### 2.2 Proximity Score

```python
def score_proximity(distance_miles: float) -> float:
    """
    Closer is better. Linear decay from max score.
    
    0-2 miles:  10 points (max)
    2-5 miles:  7-10 points (gradual decay)
    5-10 miles: 0-7 points (steeper decay)
    """
    if distance_miles <= 2:
        return WEIGHT_PROXIMITY_BONUS
    elif distance_miles <= 5:
        # Linear interpolation: 10 at 2mi, 7 at 5mi
        return 10 - ((distance_miles - 2) * 1.0)
    else:
        # Linear interpolation: 7 at 5mi, 0 at 10mi
        return max(0, 7 - ((distance_miles - 5) * 1.4))
```

### 2.3 Age Compatibility Score

```python
def score_age_match(patient_a: Patient, patient_b: Patient) -> float:
    """
    Same age bracket gets bonus points.
    Adjacent brackets get partial credit.
    
    Brackets: UNDER_65, 65_TO_75, OVER_75
    """
    if patient_a.age_range == patient_b.age_range:
        return WEIGHT_AGE_MATCH
    
    # Adjacent brackets get half credit
    adjacent_pairs = [
        ("UNDER_65", "65_TO_75"),
        ("65_TO_75", "OVER_75")
    ]
    pair = tuple(sorted([patient_a.age_range, patient_b.age_range]))
    if pair in adjacent_pairs:
        return WEIGHT_AGE_MATCH * 0.5
    
    return 0.0
```

### 2.4 Sex Match Score

```python
def score_sex_match(patient_a: Patient, patient_b: Patient) -> float:
    """
    Same sex pairing gets bonus.
    This is a preference, not a hard constraint.
    
    Future: Could add patient preference for same-sex matching.
    """
    if patient_a.sex == patient_b.sex:
        return WEIGHT_SEX_MATCH
    return 0.0
```

### 2.5 Lifestyle Alignment Score

```python
def score_lifestyle_alignment(giver: Patient, receiver: Patient) -> float:
    """
    Evaluate smoking, alcohol, and cannabis compatibility.
    
    Key insight: Mismatches where GIVER has the "negative" trait
    are worse than mismatches where RECEIVER does.
    (A non-smoker caring for a smoker is easier than vice versa)
    """
    score = 0.0
    
    # Smoking alignment
    if giver.smoker == receiver.smoker:
        score += 2.0  # Alignment bonus
    elif giver.smoker and not receiver.smoker:
        score += PENALTY_SMOKING_MISMATCH  # Giver smokes, receiver doesn't - bad
    else:
        score -= 1.0  # Receiver smokes, giver doesn't - minor issue
    
    # Alcohol alignment
    alcohol_levels = {"NONE": 0, "LOW": 1, "MODERATE": 2, "HIGH": 3}
    giver_level = alcohol_levels.get(giver.alcohol_intake, 0)
    receiver_level = alcohol_levels.get(receiver.alcohol_intake, 0)
    
    if giver_level == 3:  # HIGH
        score += PENALTY_HIGH_ALCOHOL_GIVER
    elif abs(giver_level - receiver_level) <= 1:
        score += 1.0  # Similar drinking habits
    
    # Cannabis alignment
    if giver.cannabis_user == receiver.cannabis_user:
        score += 1.0
    elif giver.cannabis_user and giver.cannabis_context == "RECREATIONAL":
        score -= 0.5  # Giver uses recreationally - minor flag
    
    return score
```

---

## Phase 3: Match Selection

### 3.1 Composite Score Calculation

```python
def calculate_match_score(giver: Patient, receiver: Patient) -> MatchScore:
    """
    Calculate total compatibility score and return detailed breakdown.
    """
    distance = haversine_distance(
        giver.location.lat, giver.location.lng,
        receiver.location.lat, receiver.location.lng
    )
    
    components = {
        "proximity": score_proximity(distance),
        "age_match": score_age_match(giver, receiver),
        "sex_match": score_sex_match(giver, receiver),
        "lifestyle": score_lifestyle_alignment(giver, receiver),
    }
    
    total = sum(components.values())
    
    return MatchScore(
        giver_id=giver.patient_uuid,
        receiver_id=receiver.patient_uuid,
        total_score=total,
        components=components,
        distance_miles=distance,
        computed_at=datetime.utcnow()
    )
```

### 3.2 Batch Matching (Hungarian Algorithm)

```python
def run_batch_matching(practice_id: str) -> List[Match]:
    """
    Run matching for all unmatched patients in a practice.
    Uses Hungarian Algorithm for optimal global assignment.
    
    Called on schedule (e.g., every 4 hours) or on-demand.
    """
    # Get eligible patients
    givers = get_eligible_givers(practice_id)
    receivers = get_eligible_receivers(practice_id)
    
    # Build score matrix
    # Rows = givers, Columns = receivers
    # Value = match score (or -inf if hard constraint fails)
    
    score_matrix = []
    for giver in givers:
        row = []
        for receiver in receivers:
            if passes_hard_constraints(giver, receiver):
                score = calculate_match_score(giver, receiver)
                row.append(score.total_score)
            else:
                row.append(float('-inf'))  # Invalid pair
        score_matrix.append(row)
    
    # Hungarian algorithm finds optimal assignment
    # Maximizing total score across all matches
    from scipy.optimize import linear_sum_assignment
    
    # Convert to cost matrix (negate scores since Hungarian minimizes)
    cost_matrix = [[-s for s in row] for row in score_matrix]
    row_ind, col_ind = linear_sum_assignment(cost_matrix)
    
    # Build match results
    matches = []
    for i, j in zip(row_ind, col_ind):
        if score_matrix[i][j] > MINIMUM_MATCH_THRESHOLD:
            matches.append(Match(
                giver=givers[i],
                receiver=receivers[j],
                score=score_matrix[i][j],
                status="PENDING_REVIEW"
            ))
    
    return matches
```

### 3.3 Minimum Match Threshold

```python
MINIMUM_MATCH_THRESHOLD = 5.0  # Don't propose matches below this score

"""
Score interpretation:
- 20+: Excellent match (close, same demographics, aligned lifestyle)
- 15-20: Good match
- 10-15: Acceptable match
- 5-10: Marginal match (provider should review carefully)
- <5: Don't match (better to wait for better option)
"""
```

---

## Phase 4: Provider Review & Override

### 4.1 Match Presentation

```python
@dataclass
class MatchProposal:
    """Presented to provider for review"""
    giver: PatientSummary
    receiver: PatientSummary
    score: float
    score_breakdown: Dict[str, float]
    distance_miles: float
    flags: List[str]  # e.g., ["SMOKING_MISMATCH", "AGE_GAP"]
    
    # Provider actions
    status: Literal["PENDING", "APPROVED", "REJECTED", "MODIFIED"]
    provider_notes: Optional[str]
    reviewed_by: Optional[str]
    reviewed_at: Optional[datetime]
```

### 4.2 Provider Override Rules

```python
def provider_can_override(match: MatchProposal, action: str) -> bool:
    """
    Providers can:
    - Approve any match above threshold
    - Reject any match with documented reason
    - Force a below-threshold match with documented justification
    
    Providers cannot:
    - Match patients who failed hard constraints (system blocked)
    - Match patients with BLOCKED triage status
    """
    if action == "FORCE_MATCH":
        # Require justification for forcing low-score matches
        return match.provider_notes is not None and len(match.provider_notes) > 10
    
    return True
```

---

## Data Model Extensions

### Required Additions to IntakeData

```typescript
// Add to src/types/intake.ts

interface IntakeData {
  // ... existing fields ...
  
  // NEW: Surgery timing (required for matching)
  surgeryDate: Date | null;           // Scheduled surgery date
  surgeryType: SurgeryType | null;    // hip | knee | shoulder | other
  estimatedRecoveryDays: number;      // Default 14, provider can adjust
  
  // NEW: Availability (for GIVER/BOTH roles)
  availableFrom: Date | null;         // When can they start giving care
  availableUntil: Date | null;        // When do they stop being available
  
  // NEW: Matching preferences (Phase 2)
  preferSameSex: boolean;             // Strong preference for same-sex match
  maxDistanceMiles: number | null;    // Patient's own distance preference
}
```

### Match Record Schema

```sql
-- Add to schema.sql

CREATE TABLE matches (
    match_id SERIAL PRIMARY KEY,
    giver_uuid UUID REFERENCES identity_vault(patient_uuid),
    receiver_uuid UUID REFERENCES identity_vault(patient_uuid),
    
    -- Scoring
    total_score DECIMAL(5,2),
    score_components JSONB,
    distance_miles DECIMAL(5,2),
    
    -- Status
    status VARCHAR(20) DEFAULT 'PENDING_REVIEW',
    -- PENDING_REVIEW, APPROVED, REJECTED, CONTACTED, CONFIRMED, COMPLETED, CANCELLED
    
    -- Provider review
    reviewed_by UUID,
    reviewed_at TIMESTAMP,
    provider_notes TEXT,
    
    -- Outcome tracking (for future ML)
    outcome VARCHAR(20),
    -- SUCCESS, PATIENT_CANCELLED, GIVER_CANCELLED, ESCALATED_TO_SNF, NO_RESPONSE
    outcome_notes TEXT,
    outcome_recorded_at TIMESTAMP,
    
    -- Audit
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    -- Constraints
    UNIQUE(giver_uuid, receiver_uuid),
    CHECK (giver_uuid != receiver_uuid)
);

CREATE INDEX idx_matches_status ON matches(status);
CREATE INDEX idx_matches_giver ON matches(giver_uuid);
CREATE INDEX idx_matches_receiver ON matches(receiver_uuid);
```

---

## Configuration Parameters

```python
# matching_config.py

class MatchingConfig:
    """Practice-level configuration for matching algorithm"""
    
    # Hard constraints
    max_distance_miles: float = 10.0
    min_days_between_surgeries: int = 14
    
    # Soft weights (can be tuned per practice)
    weight_proximity: float = 10.0
    weight_age_match: float = 5.0
    weight_sex_match: float = 3.0
    weight_lifestyle: float = 4.0
    
    penalty_smoking_mismatch: float = -8.0
    penalty_high_alcohol_giver: float = -5.0
    
    # Thresholds
    minimum_match_score: float = 5.0
    
    # Batch processing
    batch_interval_hours: int = 4
    max_matches_per_batch: int = 50
    
    # Notifications
    notification_method: str = "EMAIL"  # EMAIL, SMS, BOTH
    days_to_respond: int = 3
```

---

## Future Enhancements (Phase 2+)

### Lifestyle Compatibility Score (Political Proxy)

```python
def score_lifestyle_compatibility(patient_a: Patient, patient_b: Patient) -> float:
    """
    Phase 2: Add lifestyle preference questions that correlate with
    compatibility without explicit political identification.
    
    Questions to add:
    1. "Do you prefer a quiet, structured environment or flexible, social?"
    2. "Are you comfortable with TV/radio news during recovery?"
    3. "Do you have strong dietary preferences (vegan, organic, etc.)?"
    4. "How do you feel about pets in the home?"
    5. "Communication preference: frequent check-ins vs as-needed?"
    
    These proxy questions capture lifestyle compatibility without
    the liability of explicit political matching.
    """
    # Scoring logic TBD based on question design
    pass
```

### ML-Enhanced Scoring (Phase 3)

```python
def ml_enhanced_score(giver: Patient, receiver: Patient, model: MatchModel) -> float:
    """
    Phase 3: Use trained model to predict match success probability.
    
    Training data comes from:
    - outcome field in matches table
    - patient feedback surveys
    - readmission/escalation events
    
    Model input features:
    - All heuristic score components
    - Demographic similarities
    - Communication style alignment
    - Historical success rates for similar pairings
    
    Model output:
    - P(successful_match) ∈ [0, 1]
    
    Final score = (heuristic_score * 0.3) + (ml_score * 100 * 0.7)
    """
    pass
```

---

## Testing Strategy

### Unit Tests

```python
def test_role_compatibility():
    assert is_role_compatible(giver_only, receiver_only) == True
    assert is_role_compatible(giver_only, giver_only) == False
    assert is_role_compatible(both, both) == True

def test_proximity_scoring():
    assert score_proximity(0) == 10.0
    assert score_proximity(2) == 10.0
    assert score_proximity(5) == 7.0
    assert score_proximity(10) == 0.0
    assert score_proximity(15) == 0.0  # Beyond max, clamped

def test_smoking_mismatch_penalty():
    giver_smoker = Patient(smoker=True)
    receiver_nonsmoker = Patient(smoker=False)
    score = score_lifestyle_alignment(giver_smoker, receiver_nonsmoker)
    assert score < 0  # Should be penalized
```

### Integration Tests

```python
def test_batch_matching_produces_valid_pairs():
    matches = run_batch_matching(practice_id="test_practice")
    for match in matches:
        assert match.giver.role in ["GIVER", "BOTH"]
        assert match.receiver.role in ["RECEIVER", "BOTH"]
        assert match.distance_miles <= MAX_DISTANCE_MILES
        assert match.score >= MINIMUM_MATCH_THRESHOLD
```

---

## Open Questions for Tom

1. **Distance threshold**: Is 10 miles reasonable for Denver metro? Should it vary by urban/suburban/rural?

2. **Sex matching strength**: Current weight is +3 for same-sex. Should this be higher? Or should we add a patient preference flag?

3. **Age matching**: Current brackets are <65, 65-75, >75. Are these clinically meaningful for recovery compatibility?

4. **Surgery types**: Does hip vs knee vs shoulder affect matching? Different recovery needs?

5. **Giver capacity**: Can one giver support multiple receivers (sequentially)? Or one match at a time?

6. **Match expiration**: If a proposed match isn't acted on, when does it expire and go back to the pool?

7. **Feedback loop**: What data should we collect post-match to improve the algorithm?

---

*Document Version: 1.0*  
*Last Updated: February 5, 2026*  
*Authors: Whit Walters, Claude (Architecture Review)*
