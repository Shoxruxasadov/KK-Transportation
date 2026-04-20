import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a freight quote, ask about driver positions, or reach 24/7 dispatch — we reply within one business hour.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <FAQ />
    </>
  );
}
