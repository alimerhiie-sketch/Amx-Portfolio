import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMX — Videographer & Video Editor",
  description: "Videographer and video editor specializing in short-form content and AI-powered video production.",
  openGraph: {
    title: "AMX — Videographer & Video Editor",
    description: "Videographer and video editor specializing in short-form content and AI-powered video production.",
    url: "https://amx-portfolio.vercel.app",
    siteName: "AMX Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMX — Videographer & Video Editor",
    description: "Videographer and video editor specializing in short-form content and AI-powered video production.",
  },
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
