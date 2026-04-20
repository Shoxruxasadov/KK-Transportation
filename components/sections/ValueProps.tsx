"use client";

import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  ShieldCheck,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { VALUE_PROPS } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

const icons: Record<string, LucideIcon> = {
  Clock,
  MapPin,
  ShieldCheck,
  Headphones,
};

export default function ValueProps() {
  return (
    <AnimatedSection stagger className="py-20 lg:py-28 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Why K&K"
          title="Logistics built on reliability, visibility, and respect."
          description="Every load we move is backed by modern equipment, transparent communication, and a team that treats your cargo like their own."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = icons[prop.icon];
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="p-7 rounded-2xl bg-white border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  {Icon && <Icon size={22} className="text-primary" />}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}
