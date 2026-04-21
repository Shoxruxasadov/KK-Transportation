"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  DollarSign,
  Truck,
  Wallet,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { DRIVER_BENEFITS } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

const icons: Record<string, LucideIcon> = {
  DollarSign,
  Truck,
  Wallet,
  Headphones,
};

export default function DriversBenefits() {
  return (
    <AnimatedSection stagger className="py-12 lg:py-[50px]">
      <Container>
        <div className="flex flex-col gap-[60px]">
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-[1.4] text-text-muted">
              Why <span className="font-semibold text-dark">drive</span> with
              us?
            </h2>
            <p className="text-base leading-[1.5] text-text-muted">
              We provide the tools, support, and steady freight you need to
              grow your income and stay on the road with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {DRIVER_BENEFITS.map((b) => {
              const Icon = icons[b.icon];
              return (
                <motion.div
                  key={b.title}
                  variants={fadeUp}
                  className="flex flex-col gap-6 p-6 rounded-xl bg-white"
                >
                  <div className="self-start p-2.5 rounded-full bg-primary/10 text-primary">
                    {Icon && <Icon size={24} />}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-dark leading-[1.4]">
                      {b.title}
                    </h3>
                    <p className="text-sm font-medium text-dark leading-[1.43]">
                      {b.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            className="relative w-full aspect-[1280/501] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/drivers-benefits.png"
              alt=""
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
