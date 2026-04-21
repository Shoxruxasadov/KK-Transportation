"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { DRIVER_TESTIMONIALS } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

const BASE_COUNT = 9;

export default function DriversSay() {
  const [showAll, setShowAll] = useState(false);
  const base = DRIVER_TESTIMONIALS.slice(0, BASE_COUNT);
  const extra = DRIVER_TESTIMONIALS.slice(BASE_COUNT);
  const canShowMore = extra.length > 0;

  const columns: (typeof DRIVER_TESTIMONIALS)[] = [[], [], []];
  const extraColumns: (typeof DRIVER_TESTIMONIALS)[] = [[], [], []];
  base.forEach((t, i) => columns[i % 3].push(t));
  extra.forEach((t, i) => extraColumns[i % 3].push(t));

  const renderCard = (t: (typeof DRIVER_TESTIMONIALS)[number]) => (
    <div className="p-5 rounded-[10px] bg-white">
      <div className="flex items-center gap-2.5 pb-4">
        <div className="relative shrink-0 w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={t.image}
            alt={t.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-primary leading-[1.43]">
            {t.name}
          </span>
          <span className="text-sm text-text-muted leading-[1.4]">
            {t.username}
          </span>
        </div>
      </div>
      <p className="text-base text-dark leading-[1.5]">{t.text}</p>
    </div>
  );

  return (
    <AnimatedSection stagger className="pt-12 lg:pt-[50px] pb-10 lg:pb-[40px]">
      <Container>
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-5 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium leading-[1.4] text-text-muted">
              What our{" "}
              <span className="font-semibold text-dark">drivers</span> say
            </h2>
            <p className="text-base leading-[1.5] text-text-muted">
              We are committed to delivering reliable freight services, and our
              clients trust us for consistency, safety, and efficiency at every
              step of the journey.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
              {[0, 1, 2].map((colIdx) => (
                <div
                  key={colIdx}
                  className={`${
                    colIdx === 0 || showAll ? "flex" : "hidden sm:flex"
                  } flex-col gap-5`}
                >
                  {columns[colIdx].map((t) => (
                    <motion.div key={t.username} variants={fadeUp}>
                      {renderCard(t)}
                    </motion.div>
                  ))}
                  <AnimatePresence initial={false}>
                    {showAll &&
                      extraColumns[colIdx].map((t) => (
                        <motion.div
                          key={t.username}
                          initial={{ opacity: 0, y: -12, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -12, height: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <div>{renderCard(t)}</div>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {!showAll && (
                <motion.div
                  key="fade"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-base via-base/85 to-transparent"
                />
              )}
            </AnimatePresence>
          </div>

          {canShowMore && (
            <motion.div layout className="flex justify-center -mt-10 relative z-10">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-semibold shadow-lg"
              >
                {showAll ? "Show less" : "Show more"}
              </button>
            </motion.div>
          )}
        </div>
      </Container>
    </AnimatedSection>
  );
}
