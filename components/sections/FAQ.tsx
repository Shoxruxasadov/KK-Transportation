"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <AnimatedSection className="pt-12 lg:pt-[50px] pb-16 lg:pb-[100px]">
      <Container>
        <div className="flex flex-col items-center gap-[60px]">
          <div className="flex flex-col gap-5 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-[1.4] text-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-base leading-[1.5] text-text-muted">
              Find answers to common questions about our freight transportation
              services and how we ensure smooth, reliable deliveries.
            </p>
          </div>

          <div className="w-full max-w-[800px] flex flex-col gap-5">
            {FAQ_ITEMS.map((item, i) => {
              const open = openIdx === i;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-5 rounded-2xl bg-white"
                >
                  <div className="flex-1 flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => setOpenIdx(open ? null : i)}
                      className="text-left font-semibold text-dark text-base leading-[1.5]"
                      aria-expanded={open}
                    >
                      {item.question}
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-base leading-[1.5] text-text-muted">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    aria-label={open ? "Collapse answer" : "Expand answer"}
                    className="shrink-0 p-2 rounded-full bg-surface text-dark transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    <motion.span
                      initial={false}
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="block"
                    >
                      {open ? <Minus size={24} /> : <Plus size={24} />}
                    </motion.span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
