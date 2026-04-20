import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RouteMarqueeHero from "@/components/layout/RouteMarqueeHero";
import PersistentMarquee from "@/components/layout/PersistentMarquee";
import PersistentDriverCTA from "@/components/layout/PersistentDriverCTA";
import ScrollToTop from "@/components/layout/ScrollToTop";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "K&K Transportation — Reliable Logistics Across the United States",
    template: "%s | K&K Transportation",
  },
  description:
    "Precision-driven logistics that keeps your goods moving. OTR trucking, 24/7 dispatch, real-time tracking — delivering your cargo anywhere in the United States.",
  keywords: [
    "logistics",
    "trucking",
    "OTR",
    "freight",
    "transportation",
    "US",
    "dispatch",
  ],
  authors: [{ name: "K&K Transportation" }],
  openGraph: {
    title: "K&K Transportation",
    description:
      "Precision-driven logistics across the United States. No delays, no guesswork.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base text-text">
        <ScrollToTop />
        <Header />
        <RouteMarqueeHero />
        <PersistentMarquee />
        <main className="flex-1">{children}</main>
        <PersistentDriverCTA />
        <Footer />
      </body>
    </html>
  );
}
