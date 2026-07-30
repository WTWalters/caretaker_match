"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site-config";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header id="topnav">
        <div className="wrap">
          <Link href="/" className="brand">
            <img src="/site/logo.png" alt="" width={32} height={32} />
            <span>CaretakerMatch</span>
          </Link>

          <nav className="links ctm-nav" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="btn btn-primary to-contact ctm-header-cta"
            data-type="Health System / Physician"
          >
            Explore a Pilot
          </Link>

          <button
            type="button"
            className="ctm-nav-toggle"
            aria-expanded={open}
            aria-controls="ctm-mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          id="ctm-mobile-nav"
          className={`ctm-mobile-panel${open ? " is-open" : ""}`}
        >
          <div className="wrap">
            <nav aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={close}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="btn btn-primary to-contact"
                data-type="Health System / Physician"
                onClick={close}
              >
                Explore a Pilot
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
