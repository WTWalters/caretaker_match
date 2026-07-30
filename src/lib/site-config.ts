/**
 * CaretakerMatch marketing site configuration.
 *
 * FORM HANDLING
 * -------------
 * The static pages Hamid supplied submitted via `mailto:` links, which fail
 * silently on mobile and webmail and leave no record of the lead. These forms
 * now POST to Formspree when an endpoint is configured, and fall back to the
 * original mailto behaviour when it is not — so nothing is worse than before
 * while the endpoints are being set up.
 *
 * TO GO LIVE: create two forms at https://formspree.io and set these in
 * Vercel (Project → Settings → Environment Variables) and in .env.local:
 *
 *   NEXT_PUBLIC_FORMSPREE_CONTACT=https://formspree.io/f/xxxxxxxx
 *   NEXT_PUBLIC_FORMSPREE_PARTNER=https://formspree.io/f/yyyyyyyy
 *
 * Until then both forms degrade to mailto and CONTACT_EMAIL receives them.
 */

export const CONTACT_EMAIL = "hamid.sabet@caretakermatch.com";

export const FORMSPREE_CONTACT =
  process.env.NEXT_PUBLIC_FORMSPREE_CONTACT ?? "";

export const FORMSPREE_PARTNER =
  process.env.NEXT_PUBLIC_FORMSPREE_PARTNER ?? "";

export const SITE_URL = "https://caretakermatch.com";

/**
 * `match` is the pathname that should mark the link as the current page.
 * Section anchors on the homepage deliberately have no match — only the
 * "Home" link represents `/` as a destination, so it alone carries it.
 */
export const NAV_LINKS = [
  { href: "/#hero", label: "Home", match: "/" },
  { href: "/#how", label: "How It Works" },
  { href: "/#story", label: "Our Story" },
  { href: "/#value", label: "Partners" },
  { href: "/health-systems", label: "Health Systems", match: "/health-systems" },
  {
    href: "/community-care-partner",
    label: "Community Care Partners",
    match: "/community-care-partner",
  },
  { href: "/#contact", label: "Contact" },
] as const satisfies ReadonlyArray<{
  href: string;
  label: string;
  match?: string;
}>;
