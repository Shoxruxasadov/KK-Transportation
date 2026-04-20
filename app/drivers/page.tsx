import type { Metadata } from "next";
import DriversBenefits from "@/components/sections/DriversBenefits";
import DriversRequirements from "@/components/sections/DriversRequirements";
import DriversSay from "@/components/sections/DriversSay";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Drivers",
  description:
    "Join K&K Transportation: competitive pay per mile, modern fleet, weekly direct deposit, and dispatch that respects your time.",
};

export default function DriversPage() {
  return (
    <>
      <DriversBenefits />
      <DriversRequirements />
      <DriversSay />
      <FAQ />
    </>
  );
}
