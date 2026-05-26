import type { Metadata } from "next";
import Header from "@/components/ctm-redesign/Header";
import Footer from "@/components/ctm-redesign/Footer";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function UpdatedCTMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--color-warm-cream)" }}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
