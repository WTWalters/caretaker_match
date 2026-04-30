# CareTaker Match — Website Redesign Design Spec

**Date:** 2026-04-26  
**Author:** Whit Walters  
**Status:** Approved — ready for implementation planning

---

## Overview

Replace the current placeholder homepage with a world-class consumer-facing website that converts individual volunteers, inspires patients, and projects mission credibility to community-focused hospitals and orthopedic clinics. The `/demo` hub remains separate and unlisted.

---

## Audience & Goals

| Audience | Goal | Primary Action |
|---|---|---|
| Individual volunteers | Get excited, feel called to act | Sign up on Volunteer Signup page |
| Surgical patients | Feel inspired and safe; understand the program | Ask their care team about CareTaker Match |
| Volunteer organizations | Understand partnership opportunity | Contact via Contact page |
| Hospitals & orthopedic clinics | See mission credibility and professionalism | Contact via Contact page |

The website is **community-first, consumer-facing**. The hospital and clinic audience sees professionalism and mission alignment as a secondary signal — not the lead pitch.

---

## Visual Direction

**Direction:** Warm & Human  
**Palette:** Warm cream/parchment (`#faf6f0`, `#f0e8dc`) · Navy (`#1a3a4a`) · Teal (`#2d8c7b`) · Coral accent (`#c87d5a`) · Earth neutrals  
**Typography:** Georgia serif for all headlines; clean sans-serif body (existing stack)  
**Photography:** Existing `hero-image.webp` (older woman in chair, younger woman in warm embrace) for hero. Real volunteer/patient photography throughout as available.  
**Tone:** Warm, editorial, evidence-based. Trust shown through real voices, not claims. Agency language for patients — they *choose* a resource, they are not receiving charity.  

**Forbidden patterns:**
- Cold blues or sterile whites
- Sympathy/pity framing for patients
- "Alone" directed at patients in product-facing copy (okay in mission statements)
- Dark navy overlays on hero photography (use warm amber/cream tints instead)

---

## Tagline

> **No one heals alone.**

Used as the primary homepage headline. Applies to both audiences simultaneously: volunteers hear *"your experience matters to someone else's healing"*; patients hear *"you don't have to do this by yourself."*

---

## Site Architecture

```
/ (Homepage)
/volunteer          — Volunteer signup page
/for-patients       — Patient information page
/about              — Team & founding story
/contact            — Contact page (3 audiences)
/download           — App download stub (placeholder until launch)
/demo/*             — Unlisted, separate, unchanged

blog.caretakermatch.com  — Ghost-powered blog (separate subdomain, not built for MVP)
```

Nav items: **About · For Patients · Contact · [Volunteer →]** (Volunteer CTA is always highlighted in teal)

Footer includes **Blog** link to `blog.caretakermatch.com` — greyed out / hidden until go-live.

---

## Homepage — Section Flow

### 1. Sticky Navigation
- Logo (CareTaker Match, serif) left
- About · For Patients · Contact links center/right
- "Volunteer →" button in teal, right-aligned, always visible on scroll

### 2. Hero
**Desktop (B — Split):** Warm cream/parchment left half with copy; real photography right half (hero-image.webp).  
**Mobile (C — Warm Amber Tint):** Full-bleed photography with warm amber/peach overlay (not dark navy); copy stacks over it.

**Copy structure:**
```
[Teal left border quote]
"I had my knee replaced three years ago. I had my daughter, so I was 
okay. A lot of people don't have that."
— Linda, volunteer · Denver, CO

No one heals alone.

We connect recovering surgical patients with trained peer volunteers —
people who've been through it and want to give back.

[Become a Volunteer]  [I'm a Patient →]
```

### 3. Origin Story — "Why We Built This"
Dark navy background (`#1a3a4a`). White text. This is the emotional anchor of the site.

**Copy structure:**
- Eyebrow: "Why We Built This"
- Headline: "An orthopedic surgeon noticed something troubling."
- Body: Tom Eichmann saw highly successful, accomplished patients — executives, educators, retired professionals — who had no one to call when surgery came. Not because they'd failed at life. Because modern life doesn't build those networks the way it used to. The result: a $23,000 nursing facility stay for patients who were perfectly capable of recovering at home.
- Tom pull quote: *"What if patients who'd already been through it could be the ones to help? People who understood — because they'd been there."*
- Whit's personal connection: As CareTaker Match's CTO, Whit Walters knows this feeling firsthand. After his own shoulder replacement, his teenager was the only support available — before school, after school, and hoping nothing happened in between.

**Design note:** This section reframes the target patient from "vulnerable person needing charity" to "accomplished person facing a modern-life gap." Critical for the Margaret archetype.

### 4. How It Works
White background. Three numbered steps.

1. **Your care team connects you** — Your surgeon or clinic identifies you as a match candidate and introduces the program.
2. **Meet over coffee first** — Before surgery, you meet your matched volunteer. No commitment. Just a conversation.
3. **Recover with community** — 30 days of check-ins, rides, and real companionship — on your schedule, your terms.

### 5. For Volunteers
Warm cream background. Photo left, copy right (desktop). Stacked on mobile.

- Eyebrow: "For Volunteers"
- Headline: "You've been there. Now go back for someone else."
- Body: If you've had joint replacement surgery, you know what those first 30 days feel like. Your experience — and your presence — is exactly what another patient needs.
- Pill tags: Vetted & trained · You set the schedule · 30-day commitment
- CTA: "Sign Up to Volunteer" → `/volunteer`

### 6. For Patients
White background. Copy left, photo right (desktop). Stacked on mobile.

- Eyebrow: "For Patients"  
- Headline: "Your recovery. Your choice. Your terms."
- Body: CareTaker Match isn't a service you sign up for — it's a resource your care team connects you with. You meet your volunteer before surgery. If it feels right, you proceed. If not, that's okay too.
- Note (no CTA button): *Ask your surgeon or clinic if CareTaker Match is available at your facility.*

**Design note:** No direct signup CTA here — patients onboard through the clinical workflow, not the website. The copy preserves agency throughout.

### 7. Stats + Credibility Strip
Warm cream background. Three stats, then credibility line.

| Stat | Label |
|---|---|
| 1 in 5 | surgical patients lack home support |
| $23K+ | average SNF stay that could be avoided |
| 30 days | of recovery support under CMS TEAM |

Credibility line: *Piloting with a leading community health system · Founded by orthopedic surgeons · HIPAA-compliant platform*

### 8. Team
White background. Four founding team members in a grid.

| Name | Title |
|---|---|
| Tom Eickmann, MD | Co-founder & Chief Medical Officer |
| Hamid Sabet | Co-founder & CEO |
| Vivek Mohan | Co-founder |
| Whit Walters | Co-founder & CIO/CTO |

Full bios and advisor section live on `/about`.

### 9. Contact CTA Strip
Dark navy. Text-centered.

- Headline: "Organizations & Clinics"
- Body: Volunteer groups, hospitals, and orthopedic practices — we'd love to talk about how CareTaker Match can serve your community.
- CTA: "Get in Touch" → `/contact`

### 10. Footer
Deep navy (`#0f2030`). © 2026 CareTaker Match, Inc. · Privacy Policy · Terms · Download App · Blog · Contact

**Blog link** points to `blog.caretakermatch.com`. Rendered greyed-out or omitted until the blog goes live.

---

## Page Specs

### /volunteer — Volunteer Signup
- Warm header with "No one heals alone." tagline
- What to expect: the 30-day commitment, training, vetting process
- Eligibility: prior joint replacement surgery required
- Signup form: name, email, phone, surgery type, zip code, availability
- Submit → confirmation email + follow-up from Hamid / ops team
- No backend required for MVP: form submits to email or simple form service (Formspree / Resend)

### /for-patients — For Patients
- Full page version of the patient section
- Emphasizes agency throughout — patient controls every step
- Explains the Coffee Meet, the 30-day encounter, the graduated privacy model (no personal info shared until Day 30 mutual opt-in)
- FAQ section: "Is this charity?" / "What if I don't like my volunteer?" / "Is my health information safe?"
- No signup CTA — ends with "Ask your care team" and a soft "Know a clinic that should offer this?" link to `/contact`

### /about — Team & Founding Story

**Section 1 — Founding Story**
- Full founding narrative (Tom's observation + Whit's personal experience)
- Same copy as homepage Origin Story section, expanded

**Section 2 — Founding Team**
Four members, warm cream cards with photo placeholder and LinkedIn link:

| Name | Title | LinkedIn | Bio (from public deck) |
|---|---|---|---|
| Dr. Tom Eickmann, MD | Co-founder & Chief Medical Officer | https://www.linkedin.com/in/tom-eickmann-007303349/ | Orthopedic Surgeon and Chief Medical Officer at Orthopedic Centers of Colorado. Healthcare Consultant and Entrepreneur with significant experience in post-acute care economics. |
| Hamid Sabet | Co-founder & CEO | https://www.linkedin.com/in/hasabet/ | Senior healthcare executive with leadership roles at Kaiser Permanente, Johnson & Johnson, and Boston Scientific. Deep expertise across clinical operations, innovation leadership, and the total joint replacement ecosystem — with a track record of improving outcomes, cutting costs, and driving growth. |
| Vivek Mohan | Co-founder | https://www.linkedin.com/in/vivek-mohan-02a5008/ | Mechanical Engineer with a 25-year history in process re-engineering who has successfully constructed care delivery pathways and created surgical Centers of Excellence. As a surgeoneer, he blends engineering and surgical philosophy to improve the value of care. His absolute passion remains the practice of Total Joint Replacement surgery. |
| Whit Walters | Co-founder & CIO/CTO | https://www.linkedin.com/in/whitwalters/ | 2x CTO and former Chief Architect in healthcare with 30+ years building clinical data platforms and EMR integrations. Led enterprise cloud and AI/ML practices managing $15M+ portfolios, with five Google Cloud certifications including ML Engineer. Industry analyst covering cloud, data, and AI infrastructure at GigaOm. |

**Section 3 — Advisors**
Three advisors, same card style as Founding Team. Bios are placeholders — to be filled in when content is available.

| Name | LinkedIn | Bio |
|---|---|---|
| Jay Swartz | https://www.linkedin.com/in/jaywswartz/ | **Data Science & AI Advisor.** AI and machine learning pioneer with deep expertise spanning decades, from early contributions as a committer on IBM Watson to leading Neural Nexus Strategies' research lab at the frontier of AI. Specializes in sovereign AI systems and healthcare AI governance. Advises CareTaker Match on AI architecture, clinical AI best practices, and responsible deployment in healthcare environments. |
| Todd Johnson | https://www.linkedin.com/in/toddjohnson10/ | [Bio TBD] |
| Stephanie (McCray) Scoggins | https://www.linkedin.com/in/stephanie-mccray/ | [Bio TBD] |

**Section 4 — Future Placeholders** (not built now, reserved in layout)
- "Hospital Partners" — unlocked when CommonSpirit goes public
- "Volunteer Organization Partners"

**Technical note:** Migrate and deprecate existing `/team` route once `/about` is live.

### /contact — Contact Page
Three clearly routed paths, not a generic form:

1. **I want to volunteer as an individual** → redirect to `/volunteer`
2. **I represent a volunteer organization** → contact form (org name, contact, message)
3. **I represent a hospital or orthopedic clinic** → contact form (institution, role, contact, message)

Forms submit to ops team. No backend required for MVP.

### /download — App Download Stub
- Simple page: "The app is coming soon."
- Email capture for launch notification
- App Store and Google Play badge placeholders (greyed out / "coming soon")

---

## Future Placeholders (not built now, accounted for in nav/footer)

- Hospital partner logos section (on /about) — unlocked when partnerships go public
- Volunteer organization partner logos — same
- Patient/volunteer testimonials — real quotes as pilot produces them
- Blog — Ghost hosted at `blog.caretakermatch.com`. Non-technical team members publish independently. Content triggers: funding announcements, volunteer milestone stories, hospital pilot news, leadership speaking events. Footer link is greyed-out until go-live. No Next.js integration required for MVP — subdomain handles its own rendering. Ghost Content API available later if native blog feed is desired on the main site.

---

## Technical Notes

- Remains Next.js App Router (no framework change)
- All new pages follow existing `src/app/` structure
- Existing color tokens (navy, teal, coral) extended with warm cream palette
- Volunteer and contact forms: Formspree or similar for MVP (no backend)
- `/demo/*` routes untouched
- `/team` page (existing) merged into `/about`
- `hero-image.webp` used in hero; additional photography sourced or used as placeholder gradients
- `.superpowers/` added to `.gitignore` ✓

---

## What Success Looks Like

- A volunteer who lands on the homepage understands what to do and signs up
- A patient who Googles CareTaker Match feels inspired and safe, asks their doctor
- A community-focused hospital administrator who visits sees a credible, mission-driven organization
- The site is ready to add real pilot stories, partner logos, and app download links without structural changes
