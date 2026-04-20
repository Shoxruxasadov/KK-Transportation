import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export default function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20",
        className
      )}
      {...props}
    />
  );
}
