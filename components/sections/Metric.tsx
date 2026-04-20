"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { fadeUp } from "@/lib/animations";

type Metric =
  | { end: number; suffix?: string; label: string }
  | { text: string; label: string };

const METRICS: Metric[] = [
  { end: 6, suffix: "+", label: "Years Experience" },
  { end: 83, suffix: "%", label: "On-Time Delivery Rate" },
  { text: "24/7", label: "GPS Tracking" },
  { end: 899, suffix: "+", label: "Fulfilled monthly orders" },
];

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const controls = animate(0, end, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, end]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Metric() {
  return (
    <AnimatedSection stagger className="py-[80px] bg-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className="flex flex-col gap-3 px-6 py-10 rounded-xl bg-surface text-center"
            >
              <p className="text-4xl lg:text-[48px] font-semibold text-dark leading-[1.16]">
                {"text" in m ? m.text : <CountUp end={m.end} suffix={m.suffix} />}
              </p>
              <p className="text-sm font-medium text-[#8F8F8F] leading-[1.43]">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
