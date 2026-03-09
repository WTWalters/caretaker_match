# CareTaker Match — Website Specification
## caretakermatch.com

**Version:** 1.0  
**Author:** Whit Walters, CTO  
**Target Builder:** Claude Code  
**Date:** March 2026  
**Domain:** caretakermatch.com (owned, currently on GoDaddy)

---

## 1. Purpose

This is the public-facing website for CareTaker Match. At this stage, the website serves three purposes:

1. **Public Landing Page** — A "coming soon" page that establishes credibility, captures the mission, and looks professional if an investor Googles us after a pitch meeting
2. **Team Page** — An "about us" page showing the founding team, accessible but not prominently linked (we don't want random visitors finding this easily, but investors who receive the URL should see it)
3. **Demo Access** — The interactive demo apps (volunteer, patient, clinician) are hosted under caretakermatch.com URLs but are not linked from the public pages. The team shares these URLs directly during pitch meetings.

---

## 2. Site Architecture & URL Structure

```
caretakermatch.com/                    ← Public landing page (the only page indexed by search engines)
caretakermatch.com/team                ← About us / team page (not linked from main nav, not indexed)
caretakermatch.com/demo                ← Demo hub (not linked, not indexed)
caretakermatch.com/demo/volunteer      ← Volunteer workflow demo
caretakermatch.com/demo/patient        ← Patient workflow demo
caretakermatch.com/demo/clinician      ← Clinician iPad workflow demo
```

### Discoverability Rules
- **caretakermatch.com/** — Fully public. Indexed by Google. This is what someone sees if they Google "caretaker match."
- **caretakermatch.com/team** — Not linked from the landing page navigation. Not in sitemap. Add `<meta name="robots" content="noindex, nofollow">`. Accessible via direct URL only. We share this with investors, partners, and accelerator applications.
- **caretakermatch.com/demo/*** — Not linked from any public page. Not indexed. Add `<meta name="robots" content="noindex, nofollow">`. Accessible via direct URL only. These are the interactive demo apps from the three persona specs.

### How the Team Shares URLs
- Hamid sends an investor: "Check out our site at caretakermatch.com — and here's our team: caretakermatch.com/team"
- During a pitch meeting: "Let me show you the product — caretakermatch.com/demo/clinician"
- Nobody stumbles into the demo or team page from a Google search

---

## 3. Technical Requirements

### Stack
- **Next.js** (static export or server-rendered — builder's choice)
- **Tailwind CSS**
- **Deploy to:** Vercel, Netlify, or Railway (whichever is easiest for the builder to wire to the GoDaddy domain)
- The landing page and team page are simple static pages
- The /demo/* routes load the React demo apps from the separate demo specs

### Design Language
- **Warm, compassionate, trustworthy.** This is healthcare, not SaaS. Think One Medical, Devoted Health, or Oak Street Health websites.
- **Color palette:** Same as the demo apps — Teal (#0B8A7E), Navy (#1A3550), Coral (#E8634A), Warm off-white (#F7F5F0)
- **Typography:** A clean serif for headings (Georgia or similar) paired with a sans-serif for body text. The landing page should feel warmer than the demo apps.
- **Photography:** We need 1–2 hero images that evoke the GoDaddy placeholder Whit liked. The aesthetic: an elderly person and a younger companion, warm lighting, genuine human connection, ideally outdoors or in a home setting (not clinical). Options:
  - Use high-quality stock from Unsplash or Pexels (search: "elderly companion," "caregiver support home," "volunteer helping senior")
  - Or generate a subtle, warm abstract/illustrated header that conveys connection without specific faces
  - **Do not use any image that looks clinical, sterile, or corporate.** This should feel like the "after" — recovery with a friend, not recovery in a hospital.
- **The current GoDaddy tagline is good:** "Connecting Care with Compassion" — keep this or iterate on it.

---

## 4. Page 1: Landing Page (caretakermatch.com/)

### Layout

**Section 1: Hero**
- Full-width hero image or image section (warm healthcare photography — see note above)
- Logo: "CareTaker Match" text logo with a heart icon (same as demo apps)
- Tagline: "Connecting Care with Compassion"
- Subtitle: "Matching vetted peer volunteers with recovering surgical patients — because nobody should go home alone."
- Single CTA button: "Learn More" (scrolls to next section) or "Get In Touch" (scrolls to contact)
- No navigation menu visible (there's only one public page, so no nav needed — keeps it clean)

**Section 2: The Mission (brief)**
- Heading: "Recovery Is Better Together"
- Body (2–3 sentences max): "Every year, thousands of surgical patients are sent to expensive nursing facilities — not because they can't recover at home, but because they have no one to help. CareTaker Match bridges that gap by connecting these patients with trained, vetted peer volunteers who've been through similar surgeries. It's not just healthcare — it's human connection."
- Optional: Three small stat callouts (same as the pitch deck):
  - "1 in 5 surgical patients lack home support"
  - "$23K+ average SNF stay that could be avoided"
  - "30-day recovery window under CMS TEAM"

**Section 3: How It Works (simple)**
- Heading: "How CareTaker Match Works"
- Three columns or cards:
  1. Icon + "Match" — "Our algorithm matches patients with volunteers based on procedure type, proximity, and compatibility."
  2. Icon + "Meet" — "Patient and volunteer meet over a sponsored coffee before surgery. No commitment, no personal info shared."
  3. Icon + "Recover" — "The volunteer supports the patient's 30-day recovery with check-ins, rides, and companionship."
- Keep this high-level and simple. No technical detail. No mention of algorithms, FHIR, or HIPAA on the public page.

**Section 4: Coming Soon**
- Heading: "Coming Soon"
- "CareTaker Match is currently in development with pilot programs planned at leading health systems. If you're a healthcare organization, volunteer, or potential partner, we'd love to hear from you."
- Contact form:
  - Name
  - Email
  - "I am a..." dropdown: Healthcare Organization / Potential Volunteer / Potential Partner / Investor / Other
  - Message (optional)
  - Submit button
- Or: Simple email link to a contact address (hello@caretakermatch.com or info@caretakermatch.com)

**Section 5: Footer**
- "© 2026 CareTaker Match, Inc."
- Small links: "Privacy Policy" | "Terms of Service" (can be placeholder pages for now)
- No link to /team or /demo — these are hidden

---

## 5. Page 2: Team Page (caretakermatch.com/team)

### Meta Tags
```html
<meta name="robots" content="noindex, nofollow">
<title>Our Team — CareTaker Match</title>
```

### Layout

**Header**
- Logo: "CareTaker Match" (same as landing page)
- "Our Team" heading
- Brief intro: "CareTaker Match was founded by a team with deep experience in healthcare, medical devices, clinical practice, and technology. We're building the future of post-acute recovery."

**Team Cards — Ordered as specified:**

#### 1. Hamid Sabet — CEO & Co-Founder
- Photo placeholder (or actual photo if provided)
- Title: Chief Executive Officer & Co-Founder
- Bio: "Healthcare and medical device executive with decades of experience bringing innovative solutions to market. Previously led commercial strategy for major orthopedic device companies including DePuy Synthes (Johnson & Johnson). Hamid brings deep relationships across healthcare systems, payers, and device manufacturers."
- LinkedIn icon/link (if available)

#### 2. Tom Eickmann, MD — Founder & Clinical Champion
- Photo placeholder (or actual photo)
- Title: Founder & Clinical Champion
- Bio: "Board-certified orthopedic surgeon and the originator of the CareTaker Match concept. Dr. Eickmann developed the proprietary Modified RAPT clinical scoring algorithm that powers patient-volunteer matching. With decades of surgical experience and thousands of joint replacements, Tom saw firsthand how patients without home support face unnecessary nursing facility stays — and built CareTaker Match to fix it."
- Note: Tom is the originator. His bio should convey that this is his clinical vision brought to life.

#### 3. Vivek Mohan, MD — Clinical Advisor
- Photo placeholder
- Title: Clinical Advisor
- Bio: "Board-certified orthopedic surgeon with extensive experience across joint replacement and surgical recovery protocols. Dr. Mohan provides clinical protocol validation, peer network access, and surgical workflow expertise to ensure CareTaker Match integrates seamlessly into clinical practice."

#### 4. Whit Walters — CTO & Technical Co-Founder
- Photo placeholder
- Title: Chief Technology Officer & Technical Co-Founder
- Bio: "Two-time CTO with 30+ years spanning data architecture, cloud platforms, AI/ML, and enterprise consulting. Holds five Google Cloud Professional certifications including ML Engineer and Data Engineer. Healthcare data background includes Blue Cross/Blue Shield, Welltok (HL7, HIPAA, EMR integration), and extensive experience with Epic interoperability. Built the CareTaker Match MVP and matching algorithm. Currently also serves as Field CTO at GigaOm Research."

#### 5. Jay Swartz — Head of Data Science
- Photo placeholder
- Title: Head of Data Science
- Bio: "Co-develops the CareTaker Match matching algorithm IP with the CTO. Leads ML model development for candidacy scoring and peer-caregiver matching. Brings actuarial analysis capability for payer evidence generation — critical for demonstrating value to Medicare, United Healthcare, and Kaiser Permanente."

### Design Notes
- Clean, professional layout. Cards or grid format.
- Photos should be consistent size/shape (circular or rounded square)
- Use placeholder silhouettes if photos aren't available yet — but make them look intentional (gray circles with initials), not broken
- Keep bios tight — 2–3 sentences each. Investors skim.
- No "back to home" link in the navigation — if someone has this URL, they know where they are. But do include a small CareTaker Match logo in the header that links back to caretakermatch.com/ so they can navigate if needed.

---

## 6. Demo Hub (caretakermatch.com/demo)

### Meta Tags
```html
<meta name="robots" content="noindex, nofollow">
<title>CareTaker Match — Interactive Demo</title>
```

### Layout

This is a simple launcher page that the team uses during presentations.

**Content:**
- CareTaker Match logo
- "Interactive Product Demo"
- "Select a persona to experience CareTaker Match:"
- Three large cards:
  1. **Volunteer** — "Experience the volunteer journey from signup through recovery support" — Icon: shield — Button: "Launch Volunteer Demo" → /demo/volunteer
  2. **Patient** — "Experience the patient journey from intake through recovery" — Icon: people — Button: "Launch Patient Demo" → /demo/patient
  3. **Clinician** — "Experience the clinician's iPad workflow for discharge planning" — Icon: stethoscope — Button: "Launch Clinician Demo" → /demo/clinician
- Small note at bottom: "This is a demonstration environment with sample data. No real patient information is used."
- Version label: "Demo v1.0 — March 2026"

---

## 7. SEO & Metadata

### Landing Page (indexed)
```html
<title>CareTaker Match — Connecting Care with Compassion</title>
<meta name="description" content="CareTaker Match connects vetted peer volunteers with recovering surgical patients who have no home support. Reducing nursing facility costs through human connection.">
<meta property="og:title" content="CareTaker Match — Connecting Care with Compassion">
<meta property="og:description" content="Nobody should recover from surgery alone. CareTaker Match pairs patients with trained peer volunteers for 30-day post-surgical support.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://caretakermatch.com">
```

### All Other Pages (not indexed)
```html
<meta name="robots" content="noindex, nofollow">
```

### robots.txt
```
User-agent: *
Allow: /
Disallow: /team
Disallow: /demo
Disallow: /demo/
```

---

## 8. Deployment Notes

### Domain Configuration
- Domain is on GoDaddy: caretakermatch.com
- DNS needs to be pointed to wherever this is deployed (Vercel, Netlify, or Railway)
- Set up HTTPS (automatic with Vercel/Netlify)
- The GoDaddy site builder page should be replaced entirely

### Email
- If not already configured, set up a simple email forward: hello@caretakermatch.com or info@caretakermatch.com → Hamid's email
- This is for the contact form on the landing page

### Analytics (optional but recommended)
- Google Analytics or Plausible on the landing page only
- Useful to track if investors are visiting after pitch meetings

---

## 9. What NOT to Include on the Public Site

These things should not appear on caretakermatch.com/:
- Any mention of the algorithm, RAPT score, or technical architecture
- Any mention of HIPAA, FHIR, Epic, or specific technology
- Any mention of specific hospital partnerships (Intermountain Health) — until officially announced
- Any mention of CMS TEAM — too inside-baseball for a public page
- Any link to the team page or demo
- Any pricing, business model details, or financial projections
- Any investor-facing content

The public page should feel like a warm, simple "we're building something meaningful" presence. All the technical and business substance lives in the pitch deck, the architecture docs, and the demo — which are shared directly.

---

## 10. Build Priority

1. **Landing page** (caretakermatch.com/) — Build first. This is what people see if they Google us.
2. **Team page** (caretakermatch.com/team) — Build second. Needed for accelerator applications and investor follow-ups.
3. **Demo hub** (caretakermatch.com/demo) — Build as a simple launcher. The actual demo apps come from the three persona specs.
4. **Demo apps** — These are the separate React builds from the Volunteer, Patient, and Clinician specs. Wire them into /demo/volunteer, /demo/patient, /demo/clinician.

---

*This spec completes the CareTaker Match web presence. Combined with the three demo specs, Claude Code has everything needed to build: a public landing page, a hidden team page, and an interactive three-persona demo — all under caretakermatch.com.*
