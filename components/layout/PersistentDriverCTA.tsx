"use client";

import { usePathname } from "next/navigation";
import DriverCTA from "@/components/sections/DriverCTA";

export default function PersistentDriverCTA() {
  const pathname = usePathname();
  if (pathname === "/asdriver") return null;
  return <DriverCTA />;
}
