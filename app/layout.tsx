import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santosh Kulkarni — Data & AI Executive",
  description:
    "Santosh Kulkarni — data and AI executive with 20+ years leading data engineering, AI, and cloud modernization across financial services and insurance.",
  openGraph: {
    title: "Santosh Kulkarni — Data & AI Executive",
    description:
      "20+ years leading data engineering, AI, and cloud modernization across financial services and insurance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
