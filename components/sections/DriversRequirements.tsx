"use client";

import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  DRIVER_REQUIREMENTS,
  DRIVER_COMPENSATION,
} from "@/lib/constants";

function Card({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-xl bg-white h-full">
      <h3 className="text-2xl font-semibold text-dark leading-[1.33]">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="shrink-0 text-primary mt-0.5">
              <Check size={24} />
            </span>
            <span className="text-sm font-medium text-dark leading-[1.43]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DriversRequirements() {
  return (
    <AnimatedSection className="py-12 lg:py-[50px]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-5 items-start">
          <div className="lg:sticky lg:top-28 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-dark leading-[1.25]">
                Joining Our Driver Network
              </h2>
              <p className="text-sm font-medium text-dark leading-[1.43] max-w-lg">
                A few essential criteria to ensure safety, reliability, and
                professionalism across our freight transportation system.
              </p>
            </div>
            <Link
              href="/asdriver"
              className="self-start group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-dark transition-colors text-dark text-sm font-semibold"
            >
              Apply as a driver
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <Card title="Requirements" items={DRIVER_REQUIREMENTS} />
            <Card title="Compensation & Benefits" items={DRIVER_COMPENSATION} />
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
