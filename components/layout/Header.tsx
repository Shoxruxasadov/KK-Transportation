"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // Sync scroll 0 → 120px with these properties
  const marginTop = useTransform(scrollY, [0, 120], [0, 8], { clamp: true });
  const topRadius = useTransform(scrollY, [0, 120], [2, 24], { clamp: true });
  const boxShadow = useTransform(
    scrollY,
    [0, 120],
    [
      "0 4px 12px -4px rgba(0,0,0,0.04)",
      "0 12px 32px -8px rgba(0,0,0,0.15)",
    ],
    { clamp: true }
  );

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{ marginTop }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            borderTopLeftRadius: topRadius,
            borderTopRightRadius: topRadius,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            boxShadow,
          }}
          className="bg-white px-5 lg:px-6"
        >
          <div className="flex items-center justify-between gap-6 py-4">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="relative w-9 h-9 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt=""
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <span className="text-dark text-base tracking-tight">
                <span className="font-extrabold">K&amp;K</span>{" "}
                <span className="font-medium">Transportation</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {NAV_ITEMS.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors",
                      "after:content-[''] after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-[2px] after:rounded-full after:origin-left after:transition-transform",
                      active
                        ? "text-dark after:bg-dark after:scale-x-100 hover:text-primary hover:after:bg-primary"
                        : "text-dark/70 hover:text-primary after:bg-primary after:scale-x-0 hover:after:scale-x-100"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/asdriver"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 lg:px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors group"
              >
                Join as Driver
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <span className="relative block w-5 h-4">
                  <motion.span
                    className="absolute left-0 right-0 top-0 h-0.5 bg-white rounded-full origin-center"
                    animate={{ y: open ? 7 : 0, rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                  <motion.span
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-white rounded-full"
                    animate={{
                      scaleX: open ? 0 : 1,
                      opacity: open ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-white rounded-full origin-center"
                    animate={{ y: open ? -7 : 0, rotate: open ? -45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                </span>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pt-2 pb-4 flex flex-col items-start gap-1">
                  {NAV_ITEMS.map((item) => {
                    const active =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "relative px-4 py-3 text-base font-medium transition-colors",
                          "after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1.5 after:h-[2px] after:rounded-full after:origin-left after:transition-transform",
                          active
                            ? "text-dark after:bg-dark after:scale-x-100 hover:text-primary hover:after:bg-primary"
                            : "text-dark/70 hover:text-primary after:bg-primary after:scale-x-0 hover:after:scale-x-100"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <Link
                    href="/asdriver"
                    className="sm:hidden self-stretch mt-3 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-primary text-white text-base font-semibold"
                  >
                    Join as Driver <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </motion.header>
  );
}
