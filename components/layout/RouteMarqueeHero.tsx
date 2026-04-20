"use client";

import { Fragment, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

type RouteConfig = { text: string; image: string };

const ROUTE_CONFIG: Record<string, RouteConfig | undefined> = {
  "/about": { text: "About Company", image: "/about.png" },
  "/drivers": { text: "Join as a Driver", image: "/drivers.png" },
  "/asdriver": { text: "Driver Application", image: "/drivers.png" },
  "/contact": { text: "Contact Us", image: "/about.png" },
  "/terms": { text: "Terms of Service", image: "/about.png" },
};

const REPEAT = 6;

function Sparkle() {
  return (
    <svg
      viewBox="0 0 54 54"
      width="54"
      height="54"
      fill="none"
      aria-hidden
      className="shrink-0 text-white w-10 h-10 lg:w-[54px] lg:h-[54px]"
    >
      <path
        d="M30.4678 1L30.3262 19.5361L30.3125 21.2725L31.8213 20.4131L49.002 10.6289L52.623 16.9775L35.7744 26.0469L34.1514 26.9209L35.7695 27.8047L52.6191 37.0127L49.0088 43.2295L31.8213 33.4424L30.3125 32.583L30.3262 34.3184L30.4678 53H23.5322L23.6738 34.3184L23.6875 32.583L22.1787 33.4424L4.99023 43.2295L1.38184 37.0156L18.377 27.8066L20.0117 26.9209L18.3711 26.0459L1.37793 16.9736L4.99707 10.6289L22.1787 20.4131L23.6875 21.2725L23.6738 19.5361L23.5322 1H30.4678Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function RouteMarqueeHero() {
  const pathname = usePathname();
  const config = ROUTE_CONFIG[pathname];
  if (!config) return null;
  return <RouteMarqueeInner pathname={pathname} config={config} />;
}

function RouteMarqueeInner({
  pathname,
  config,
}: {
  pathname: string;
  config: RouteConfig;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  const pairs = Array.from({ length: REPEAT });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-dark text-white h-[min(50vh,1440px)] min-h-[360px]"
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={config.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={config.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative h-full w-full flex items-end justify-center pt-16 lg:pt-20 pb-6 lg:pb-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex will-change-transform"
          >
            <motion.div
              style={{ x: scrollX }}
              className="flex whitespace-nowrap items-center gap-10 lg:gap-16 will-change-transform"
            >
              <span className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.25] tracking-tight text-white shrink-0">
                {config.text}
              </span>
              {pairs.map((_, i) => (
                <Fragment key={i}>
                  <Sparkle />
                  <span className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.25] tracking-tight text-white shrink-0">
                    {config.text}
                  </span>
                </Fragment>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
