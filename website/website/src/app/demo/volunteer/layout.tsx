import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer Demo — CareTaker Match",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VolunteerDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}