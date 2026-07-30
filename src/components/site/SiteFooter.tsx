import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <img src="/site/logo.png" alt="" width={26} height={26} />
              <span>CaretakerMatch</span>
            </div>
            <div className="foot-copy">
              © {new Date().getFullYear()} CaretakerMatch, Inc. · Denver,
              Colorado
            </div>
          </div>

          <div className="tagline">
            No Patient Heals Alone.
            <span className="sub2">
              Digital infrastructure &amp; community ecosystem for recovery at
              home.
            </span>
          </div>

          <div className="foot-links">
            <Link href="/">Home</Link>
            <Link href="/health-systems">Health Systems</Link>
            <Link href="/community-care-partner">Community Care Partners</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
