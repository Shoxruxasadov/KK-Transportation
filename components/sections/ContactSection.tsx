import Image from "next/image";
import { Mail, Phone, MapPin, Clock, type LucideIcon } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/constants";

type InfoCard = { icon: LucideIcon; lines: string[] };

const INFO_CARDS: InfoCard[] = [
  { icon: MapPin, lines: SITE.footerAddress.split("\n") },
  {
    icon: Phone,
    lines: [
      `Main: ${SITE.phones.main}`,
      `Sales: ${SITE.phones.sales}`,
      `Support: ${SITE.phones.support}`,
    ],
  },
  {
    icon: Mail,
    lines: [
      `Drivers: ${SITE.emails.drivers}`,
      `Sales: ${SITE.emails.sales}`,
      `Support: ${SITE.emails.support}`,
    ],
  },
  {
    icon: Clock,
    lines: [
      SITE.businessHours.weekdays,
      SITE.businessHours.saturday,
      SITE.businessHours.emergency,
    ],
  },
];

export default function ContactSection() {
  return (
    <AnimatedSection className="py-[50px]">
      <Container>
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-5 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-text-muted leading-[1.4]">
              Get in touch with our{" "}
              <span className="text-dark">logistic experts</span>
            </h2>
            <p className="text-base font-normal text-text-muted leading-[1.5]">
              Have questions or need a tailored freight solution? Our team is
              ready to help you plan and manage your shipments with confidence
            </p>
          </div>

          <div className="grid lg:grid-cols-[720px_1fr] gap-10 items-stretch">
            <ContactForm />
            <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-0">
              <Image
                src="/images/contact-section.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INFO_CARDS.map(({ icon: Icon, lines }, i) => (
              <div
                key={i}
                className="flex flex-col gap-5 p-5 rounded-2xl bg-white"
              >
                <div className="self-start p-2.5 rounded-full bg-primary/[0.12]">
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="flex flex-col gap-3">
                  {lines.map((line, j) => (
                    <span
                      key={j}
                      className="text-sm font-medium text-dark leading-[1.43]"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
