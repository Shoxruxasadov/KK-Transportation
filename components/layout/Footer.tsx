import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE, FOOTER_NAV } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-white">
      <Container>
        <div className="flex flex-col gap-10 py-10">
          {/* Top: Logo + description on left, nav on right */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-md">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="relative w-8 h-[26px] shrink-0">
                  <Image
                    src="/logo.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-medium text-xl leading-[1.4] tracking-tight">
                  {SITE.name}
                </span>
              </Link>
              <p className="text-sm font-normal leading-[1.43] text-white whitespace-pre-line">
                {SITE.footerDescription}
              </p>
            </div>

            <nav className="flex flex-wrap items-center">
              {FOOTER_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium leading-[1.43] text-white hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <hr className="border-t border-white/12" />

          {/* Bottom: 4 contact columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            <div className="flex flex-col gap-[9px] px-0 lg:px-6 py-2">
              <div className="flex items-center gap-[9px]">
                <MapPin size={24} className="shrink-0" />
                <span className="text-sm font-medium leading-[1.43]">
                  Address
                </span>
              </div>
              <p className="text-sm font-medium leading-[1.43] whitespace-pre-line">
                {SITE.footerAddress}
              </p>
            </div>

            <div className="flex flex-col gap-[9px] px-0 lg:px-6 py-2">
              <div className="flex items-center gap-[9px]">
                <Phone size={24} className="shrink-0" />
                <span className="text-sm font-medium leading-[1.43]">
                  Phone
                </span>
              </div>
              <div className="flex flex-col">
                <a
                  href={`tel:${SITE.phones.main}`}
                  className="text-sm font-medium leading-[1.43] hover:text-accent transition-colors"
                >
                  Main: {SITE.phones.main}
                </a>
                <a
                  href={`tel:${SITE.phones.sales}`}
                  className="text-sm font-medium leading-[1.43] hover:text-accent transition-colors"
                >
                  Sales: {SITE.phones.sales}
                </a>
                <a
                  href={`tel:${SITE.phones.support}`}
                  className="text-sm font-medium leading-[1.43] hover:text-accent transition-colors"
                >
                  Support: {SITE.phones.support}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-[9px] px-0 lg:px-6 py-2">
              <div className="flex items-center gap-[9px]">
                <Mail size={24} className="shrink-0" />
                <span className="text-sm font-medium leading-[1.43]">
                  Email
                </span>
              </div>
              <div className="flex flex-col">
                <a
                  href={`mailto:${SITE.emails.drivers}`}
                  className="text-sm font-medium leading-[1.43] hover:text-accent transition-colors break-all"
                >
                  Drivers: {SITE.emails.drivers}
                </a>
                <a
                  href={`mailto:${SITE.emails.sales}`}
                  className="text-sm font-medium leading-[1.43] hover:text-accent transition-colors break-all"
                >
                  Sales: {SITE.emails.sales}
                </a>
                <a
                  href={`mailto:${SITE.emails.support}`}
                  className="text-sm font-medium leading-[1.43] hover:text-accent transition-colors break-all"
                >
                  Support: {SITE.emails.support}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-[9px] px-0 lg:px-6 py-2">
              <div className="flex items-center gap-[9px]">
                <Clock size={24} className="shrink-0" />
                <span className="text-sm font-medium leading-[1.43]">
                  Business hours
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium leading-[1.43]">
                  {SITE.businessHours.weekdays}
                </span>
                <span className="text-sm font-medium leading-[1.43]">
                  {SITE.businessHours.saturday}
                </span>
                <span className="text-sm font-medium leading-[1.43]">
                  {SITE.businessHours.emergency}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar — Figma 86:1093 */}
      <div className="bg-[#242424] py-2">
        <Container>
          <p className="text-center text-sm font-normal leading-[1.43] text-white">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved
          </p>
        </Container>
      </div>
    </footer>
  );
}
