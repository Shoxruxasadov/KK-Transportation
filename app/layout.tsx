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
  metadataBase: new URL("https://kktransportation.com"),
  title: {
    default: "K&K Transportation — Reliable Logistics Across the United States",
    template: "%s | K&K Transportation",
  },
  description:
    "Precision-driven logistics that keeps your goods moving. OTR trucking, 24/7 dispatch, real-time tracking — delivering your cargo anywhere in the United States.",
  applicationName: "K&K Transportation",
  keywords: [
    "K&K Transportation",
    "logistics company USA",
    "OTR trucking",
    "freight transportation",
    "dry van trucking",
    "reefer freight",
    "nationwide dispatch",
    "24/7 dispatch",
    "trucking jobs",
    "CDL driver jobs",
    "company drivers",
    "truck drivers hiring",
    "real-time freight tracking",
    "Wheaton IL trucking",
    "Illinois trucking company",
    "interstate freight",
    "cargo delivery US",
  ],
  authors: [{ name: "K&K Transportation" }],
  creator: "//shoxruxasadov.uz",
  publisher: "K&K Transportation",
  category: "Logistics",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kktransportation.com",
    siteName: "K&K Transportation",
    title: "K&K Transportation — Reliable Logistics Across the United States",
    description:
      "Precision-driven logistics across the United States. OTR trucking, 24/7 dispatch, real-time tracking — no delays, no guesswork.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "K&K Transportation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K&K Transportation — Reliable Logistics Across the United States",
    description:
      "Precision-driven logistics across the United States. OTR trucking, 24/7 dispatch, real-time tracking.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
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
