# CareTaker Match — Website Context

## What we're building

A consumer-facing marketing website for CareTaker Match, built in Next.js App Router. This replaces a placeholder homepage. The `/demo/*` routes are a separate, unlisted hub and are out of scope for website work.

## Audiences

**Volunteer** — Someone who had joint replacement surgery and wants to give back. Primary action: sign up at `/volunteer`. Key motivation: paying forward their lived experience.

**Surgical Patient** — Person facing or recovering from joint replacement who lacks home support. Does NOT sign up via the website — they enter the program through their care team. The website should make them feel inspired and safe, ending with "Ask your care team."

**Volunteer Organization** — Groups (RSVP, Senior Companions, faith-based networks) who want to partner. Contact via `/contact`.

**Hospital / Orthopedic Clinic** — Community-focused health systems who see mission credibility as a secondary signal. Contact via `/contact`.

## Site architecture

```
/               — Homepage
/volunteer      — Volunteer signup (Formspree form, no backend)
/for-patients   — Patient information (no signup CTA)
/about          — Founding story + team
/contact        — Three-path contact page
/download       — App download stub (placeholder)
/demo/*         — Unlisted, unchanged, out of scope
blog.caretakermatch.com — Ghost blog (future, not built for MVP)
```

## Design language

**Tagline:** "No one heals alone."

**Palette:**
- Warm cream: `#faf6f0`, `#f0e8dc`
- Navy: `#1a3a4a`
- Teal: `#2d8c7b`
- Coral accent: `#c87d5a`

**Typography:** Georgia serif for all headlines; clean sans-serif body.

**Forbidden patterns:**
- Cold blues or sterile whites
- Sympathy/pity framing for patients
- "Alone" directed at patients in product-facing copy
- Dark navy overlays on hero photography (use warm amber/cream tints)

## Copy rules

- Patients **choose** a resource; they are not receiving charity
- Agency language throughout patient pages — "your recovery, your choice, your terms"
- "alone" is forbidden on patient-facing surfaces; fine in marketing taglines
- Trust shown through real voices, not claims

## Team (for /about page)

Founding team: Tom Eickmann MD (CMO), Hamid Sabet (CEO), Vivek Mohan (Co-founder), Whit Walters (CIO/CTO).
Advisors: Jay Swartz (Data Science & AI), Todd Johnson, Stephanie (McCray) Scoggins.

## Tech stack

- Next.js App Router (`src/app/`)
- React / TypeScript
- Tailwind CSS with existing color tokens (navy, teal, coral) extended with warm cream palette
- Forms: Formspree (no backend required for MVP)
- Images: `public/hero-image.webp` is the primary hero photo

## Out of scope for website work

- The clinical app (iPad intake, matching engine, Overseer dashboard)
- HIPAA infrastructure, EMR integration, backend API
- `/demo/*` routes
