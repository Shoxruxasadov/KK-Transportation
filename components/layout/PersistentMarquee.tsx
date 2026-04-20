"use client";

import { usePathname } from "next/navigation";
import AnnouncementsMarquee from "@/components/sections/AnnouncementsMarquee";

export default function PersistentMarquee() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <AnnouncementsMarquee />;
}
