import type { Metadata } from "next";
import Metric from "@/components/sections/Metric";
import AboutCompany from "@/components/sections/AboutCompany";
import WorkWithUs from "@/components/sections/WorkWithUs";
import DriversSay from "@/components/sections/DriversSay";

export const metadata: Metadata = {
  title: "About",
  description:
    "Six years of precision logistics across the United States. Meet the people and the standards behind K&K Transportation.",
};

export default function AboutPage() {
  return (
    <>
      <AboutCompany />
      <div className="h-10"></div>
      <Metric />
      <div className="h-12"></div>
      <WorkWithUs />
      <DriversSay />
    </>
  );
}
