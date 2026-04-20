import Hero from "@/components/sections/Hero";
import AnnouncementsMarquee from "@/components/sections/AnnouncementsMarquee";
import Metric from "@/components/sections/Metric";
import AboutCompany from "@/components/sections/AboutCompany";
import Partners from "@/components/sections/Partners";
import DriversSay from "@/components/sections/DriversSay";
import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Delivering Your Cargo, Anywhere in the United States"
        description="Precision-driven logistics that keeps your goods moving — no delays, no guesswork."
        primaryCta={{ label: "Read More", href: "/about" }}
      />
      <AnnouncementsMarquee />
      <Metric />
      <AboutCompany />
      <Partners />
      <DriversSay />
      <ContactSection />
      <FAQ />
    </>
  );
}
