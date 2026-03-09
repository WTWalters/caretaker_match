import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team — CareTaker Match",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}