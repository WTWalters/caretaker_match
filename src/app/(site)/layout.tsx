import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import "@/styles/ctm-site.css";

/**
 * Layout for the public marketing site (/, /community-care-partner,
 * /health-systems).
 *
 * The `.ctm-site` wrapper is load-bearing: every rule in ctm-site.css and the
 * three page stylesheets is scoped under it (or under .ctm-home / .ctm-ccp /
 * .ctm-hs), so none of this design leaks into /demo, /team, or /updatedCTM,
 * which still run on Tailwind + globals.css.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340;9..144,450;9..144,560;9..144,650&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="ctm-site">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
