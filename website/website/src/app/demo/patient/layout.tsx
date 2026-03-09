import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enhanced Patient Demo — CareTaker Match",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PatientDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}