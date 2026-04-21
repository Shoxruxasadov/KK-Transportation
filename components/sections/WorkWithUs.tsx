"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Timer,
  MapPin,
  ShieldCheck,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { fadeUp } from "@/lib/animations";

const FEATURES: { icon: LucideIcon; label: string }[] = [
  { icon: Timer, label: "On-Time, Every Time" },
  { icon: MapPin, label: "Real-Time Visibility" },
  { icon: ShieldCheck, label: "Reliable & Secure Handling" },
  { icon: Handshake, label: "Dedicated Support" },
];

export default function WorkWithUs() {
  return (
    <AnimatedSection stagger className="pt-[50px] pb-[100px]">
      <Container>
        <motion.div
          variants={fadeUp}
          className="grid lg:grid-cols-[520px_1fr] rounded-2xl bg-white overflow-hidden"
        >
          <div className="relative min-h-[300px] lg:min-h-[464px]">
            <Image
              src="/images/apply-cta.png"
              alt="K&K Transportation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
          <div className="p-8 flex flex-col gap-6 justify-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-text-muted leading-[1.4]">
                Work with{" "}
                <span className="font-semibold text-dark">
                  K&amp;K Transportation
                </span>{" "}
                today
              </h2>
              <p className="text-base font-normal text-text-muted leading-[1.5]">
                Start moving your freight with confidence — backed by a team
                committed to precision, safety, and on-time delivery.
              </p>
            </div>
            <Link
              href="/contact"
              className="self-start group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-semibold"
            >
              Apply Now
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <div className="flex flex-col gap-3">
              {FEATURES.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-base font-medium text-dark leading-[1.5]"
                >
                  <Icon size={20} className="shrink-0 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
