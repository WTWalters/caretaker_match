import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overseer Dashboard — CareTaker Match",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OverseerDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
