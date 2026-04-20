import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DriverApplicationForm from "@/components/sections/DriverApplicationForm";

export const metadata: Metadata = {
  title: "Driver Application",
  description:
    "Driver Application K&K Transportation. Competitive pay, modern fleet, and dispatch that respects your time.",
};

export default function AsDriverPage() {
  return (
    <AnimatedSection className="py-12 lg:py-[50px]">
      <Container>
        <div className="flex flex-col items-center gap-[60px]">
          <div className="flex flex-col gap-5 text-center w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-[1.4] text-dark">
              Fill form to apply as a driver
            </h2>
            <p className="text-base leading-[1.5] text-text-muted">
              Join to K&K Transportation team and start work with us
            </p>
          </div>
          <DriverApplicationForm />
        </div>
      </Container>
    </AnimatedSection>
  );
}
