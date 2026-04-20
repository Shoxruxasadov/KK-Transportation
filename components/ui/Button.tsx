"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "dark" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonAsButton extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

type Props = ButtonAsLink | ButtonAsButton;

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-white text-dark hover:bg-surface border border-border",
  accent: "bg-accent text-dark hover:bg-accent-dark",
  dark: "bg-dark text-white hover:bg-darker",
  ghost: "bg-transparent text-dark hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-base px-7 py-3.5 gap-2.5",
};

export default function Button(props: Props) {
  const {
    children,
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
  } = props;

  const baseClass = cn(
    "inline-flex items-center justify-center font-semibold rounded-[100px] transition-colors select-none whitespace-nowrap",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          className={cn(
            "shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            size === "lg" ? "w-5 h-5" : "w-4 h-4"
          )}
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex"
      >
        <Link href={props.href} className={cn(baseClass, "group")}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={"disabled" in props ? props.disabled : false}
      className={cn(baseClass, "group disabled:opacity-60 disabled:cursor-not-allowed")}
    >
      {content}
    </motion.button>
  );
}
