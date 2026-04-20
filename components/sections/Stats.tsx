"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { STATS } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

export default function Stats() {
  return (
    <AnimatedSection stagger className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="By the numbers"
          title="Trusted capacity. Proven results."
          description="Six years of coast-to-coast operations, a modern fleet, and a dispatch team that keeps your freight moving."
          align="center"
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative p-6 lg:p-8 rounded-2xl bg-white border border-border hover:border-dark/20 transition-colors group"
            >
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
              <p className="text-4xl lg:text-5xl font-bold text-dark tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-text-muted font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
