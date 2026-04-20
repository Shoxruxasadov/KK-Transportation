"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { fadeUp } from "@/lib/animations";

const FEATURES = [
  "Guaranteed on-time delivery",
  "Real-time cargo tracking",
  "Safe and reliable freight handling",
  "Dedicated customer support",
];

export default function AboutCompany() {
  return (
    <AnimatedSection stagger className="pt-[100px] pb-[50px]">
      <Container>
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-[390px] shrink-0 flex items-start gap-2.5 py-4">
              <span className="block w-[18px] h-[18px] rounded-full bg-primary" />
              <span className="text-base font-semibold text-dark leading-[1.5]">
                About Company
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-text-muted leading-[1.4]">
                We specialize in freight transportation, delivering cargo with
                precision, reliability, and full visibility — ensuring your
                goods move safely and on time, every time.
              </h2>
              <p className="text-base font-normal text-text-muted leading-[1.5]">
                Supporting businesses with end-to-end freight transportation
                solutions built on trust, precision, and reliability. We ensure
                every shipment is carefully managed from pickup to delivery,
                maintaining full visibility and control at every stage of the
                journey
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[390px_1fr] gap-10 items-center">
            <div className="flex flex-col gap-5">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature}
                  variants={fadeUp}
                  className="flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-base"
                >
                  <div className="shrink-0 min-w-12 px-5 py-3 rounded-full bg-[#F8D614] flex items-center justify-center">
                    <span className="text-base font-semibold text-black leading-[1.5]">
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-base font-medium text-dark leading-[1.21]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={fadeUp}
              className="relative aspect-[850/316] w-full rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/about-companys.png"
                alt="K&K Transportation fleet"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 850px, 100vw"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
