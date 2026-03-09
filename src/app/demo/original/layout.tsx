import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Original Patient Demo — CareTaker Match",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OriginalDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}