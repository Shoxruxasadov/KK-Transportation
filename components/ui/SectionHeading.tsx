"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: Props) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-primary">
          <span className="w-6 h-px bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-dark",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
