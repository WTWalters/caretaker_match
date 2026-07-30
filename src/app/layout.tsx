import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://caretakermatch.com";

export const metadata: Metadata = {
  // Without this, `alternates.canonical` and OG image paths emit as relative
  // URLs, which crawlers and social scrapers ignore.
  metadataBase: new URL(SITE_URL),
  title: "CareTaker Match — Connecting Care with Compassion",
  description: "CareTaker Match connects vetted peer volunteers with recovering surgical patients who have no home support. Reducing nursing facility costs through human connection.",
  openGraph: {
    title: "CareTaker Match — Connecting Care with Compassion",
    description: "Nobody should recover from surgery alone. CareTaker Match pairs patients with trained peer volunteers for 30-day post-surgical support.",
    type: "website",
    url: "https://caretakermatch.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
