import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture Diagram — CareTaker Match",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}