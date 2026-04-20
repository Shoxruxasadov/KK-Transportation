"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

/**
 * Figma 86:645 Partners CTA
 * Design reference (1440 wide):
 *  - Section total height ≈ 710px (120 top padding + 470 content + 120 bottom padding)
 *  - Blue background #1481F8
 *  - Container image 935×391 (≈65% of 1440), bottom-anchored, horizontally centered
 *  - Gradient overlay across the whole section: #191919 (5%) → #191919/80 (29%) → transparent (100%)
 *  - Text column centered: title (40px/700) + description (16px, max 504) + yellow pill button
 */
export default function DriverCTA() {
  return (
    <section className="relative w-full bg-primary min-h-[400px] lg:min-h-[600px]">
      {/* Image + gradient clipping layer (overflow isolated from sticky parent) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Container image — bottom-anchored, centered, ≈65% of design width */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="relative mx-auto w-[88%] sm:w-[75%] lg:w-[65%] max-w-[935px] aspect-[935/391]">
            <Image
              src="/container.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 935px, (min-width: 640px) 75vw, 88vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Dark gradient overlay across the whole section */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, #191919 5%, rgba(25,25,25,0.8) 29%, rgba(25,25,25,0) 100%)",
          }}
        />
      </div>

      {/* Content — text column anchored near the top of the section
          Desktop: sticky under the header (header ≈ ~70px + 70px offset = top-[130px])
          Container stretches to section height so the sticky element has room */}
      <Container className="relative min-h-[inherit]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col items-center gap-5 text-center pt-16 lg:pt-[50px] lg:sticky lg:top-[78px]"
        >
          <motion.h2
            variants={fadeUp}
            className="text-white font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.4] tracking-tight"
          >
            Join as a driver Today
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white text-base leading-[1.5] max-w-[504px]"
          >
            Take control of your schedule, earn consistently, and work with a
            team that values your time and effort
          </motion.p>
          <motion.div variants={fadeUp} className="mt-3">
            <Link
              href="/asdriver"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-dark transition-colors text-dark text-sm font-semibold"
            >
              Apply as a driver
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
