"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { ReactNode } from "react";

interface Props extends Omit<HTMLMotionProps<"section">, "children"> {
  children: ReactNode;
  stagger?: boolean;
  amount?: number | "some" | "all";
}

export default function AnimatedSection({
  children,
  stagger = false,
  amount = "some",
  ...rest
}: Props) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={stagger ? staggerContainer : fadeUp}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
