import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMX — Content Creator",
  description: "Social media content creator showcasing reels, projects, and creative work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
