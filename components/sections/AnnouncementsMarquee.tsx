"use client";

import { useEffect, useRef, useState } from "react";
import { Megaphone } from "lucide-react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  wrap,
} from "framer-motion";
import { ANNOUNCEMENTS } from "@/lib/constants";

const VELOCITY = -40;

export default function AnnouncementsMarquee() {
  const doubled = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [halfWidth, setHalfWidth] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setHalfWidth(el.scrollWidth / 2);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_t, delta) => {
    if (!halfWidth) return;
    let next = x.get();
    if (!dragging) {
      next += VELOCITY * (delta / 1000);
    }
    x.set(wrap(-halfWidth, 0, next));
  });

  return (
    <section
      aria-label="Announcements"
      className="relative overflow-hidden bg-accent"
    >
      <motion.div
        ref={trackRef}
        style={{ x }}
        drag="x"
        dragMomentum={false}
        dragElastic={0}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        className="flex items-center whitespace-nowrap h-10 cursor-grab active:cursor-grabbing select-none touch-pan-y"
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 pr-14 shrink-0 text-xs font-semibold text-dark"
          >
            <Megaphone size={14} className="shrink-0" />
            <span>{item}</span>
            <span className="ml-14 w-1 h-1 rounded-full bg-dark" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
