"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  image?: string;
  variant?: "full" | "compact";
}

const heightClass: Record<NonNullable<Props["variant"]>, string> = {
  full: "h-[min(calc(100vh-40px),1440px)]",
  compact: "h-[min(50vh,1440px)] min-h-[360px]",
};

const paddingClass: Record<NonNullable<Props["variant"]>, string> = {
  full: "pt-24 lg:pt-28 pb-8 lg:pb-12",
  compact: "pt-28 lg:pt-32 pb-10 lg:pb-12",
};

const alignClass: Record<NonNullable<Props["variant"]>, string> = {
  full: "items-center",
  compact: "items-end",
};

const titleClass: Record<NonNullable<Props["variant"]>, string> = {
  full: "text-4xl sm:text-5xl lg:text-[64px]",
  compact: "text-3xl sm:text-4xl lg:text-[48px]",
};

export default function Hero({
  title,
  description,
  primaryCta,
  image = "/hero.png",
  variant = "full",
}: Props) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-dark text-white",
        heightClass[variant]
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        className={cn(
          "relative h-full w-full flex",
          alignClass[variant],
          paddingClass[variant]
        )}
      >
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
              <motion.h1
                variants={fadeUp}
                className={cn(
                  "font-bold tracking-tight leading-[1.05] text-white",
                  titleClass[variant]
                )}
              >
                {title}
              </motion.h1>

              {description && (
                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl"
                >
                  {description}
                </motion.p>
              )}

              {primaryCta && (
                <motion.div variants={fadeUp} className="mt-10">
                  <Link
                    href={primaryCta.href}
                    className="group inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold"
                  >
                    <span className="pr-1">{primaryCta.label}</span>
                    <span className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center transition-transform group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>
                </motion.div>
              )}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
