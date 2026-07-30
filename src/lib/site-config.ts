/**
 * CaretakerMatch marketing site configuration.
 *
 * Form delivery is configured server-side in src/app/api/contact/route.ts and
 * driven by environment variables — see .env.example. Nothing about the
 * delivery provider is exposed to the browser.
 */

export const CONTACT_EMAIL = "hamid.sabet@caretakermatch.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://caretakermatch.com";

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
