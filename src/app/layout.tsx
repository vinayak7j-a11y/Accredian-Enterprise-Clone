import type { Metadata } from "next";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/sora/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce at Scale",
  description:
    "Partner with IITs, IIMs, and global universities to upskill your enterprise teams with curated programs, live mentorship, and real-time analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-ink-900">
        {children}
      </body>
    </html>
  );
}
