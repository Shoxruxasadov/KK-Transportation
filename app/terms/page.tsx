import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service governing the use of K&K Transportation services.",
};

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: "By engaging K&K Transportation (\"Carrier\", \"we\", \"us\") for freight, dispatch, or related logistics services, the shipper, broker, or driver (\"you\") agrees to these Terms of Service. Continued use of our services constitutes acceptance of the terms as updated from time to time.",
  },
  {
    id: "services",
    title: "2. Services",
    body: "We provide over-the-road trucking, dispatch, tracking, refrigerated freight, and expedited shipping services across the 48 contiguous United States. Specific lanes, equipment, and pricing are agreed on a per-load or per-contract basis. We reserve the right to refuse loads that fall outside of our safety, compliance, or operational capacity.",
  },
  {
    id: "driver",
    title: "3. Driver Responsibilities",
    body: "All drivers engaged by K&K Transportation must maintain a valid Class A CDL, current DOT medical card, and comply with Hours of Service regulations. Drivers are responsible for pre-trip inspections, accurate electronic logs, and reporting any incident, accident, or delay to dispatch without delay.",
  },
  {
    id: "shipper",
    title: "4. Shipper Obligations",
    body: "Shippers are responsible for accurate freight description, proper packaging, legal loading, and complete shipping documentation (BOL). Loads that exceed declared weight, violate hazmat regulations, or conceal cargo characteristics may be refused at origin without liability to the Carrier.",
  },
  {
    id: "liability",
    title: "5. Liability & Insurance",
    body: "K&K Transportation maintains $1,000,000 auto liability and $100,000 cargo insurance. Claims must be filed in writing within nine (9) months of delivery. Liability is limited to the lesser of documented replacement cost or the limits set forth in the applicable BOL, subject to Carmack Amendment.",
  },
  {
    id: "payment",
    title: "6. Payment Terms",
    body: "Unless otherwise agreed in writing, invoices are due net-30 from receipt. Disputes must be submitted in writing within five (5) business days of invoice date. Interest may be charged on past-due balances at 1.5% per month or the maximum rate permitted by law.",
  },
  {
    id: "privacy",
    title: "7. Privacy",
    body: "We collect limited personal and business information necessary to perform services — contact details, freight information, and payment data. We do not sell personal information. Information may be shared with subcontractors, auditors, or regulators where required. You may request access or deletion of your data by contacting us.",
  },
  {
    id: "changes",
    title: "8. Changes to These Terms",
    body: "We may update these Terms at any time. Material changes will be posted on this page with a revised effective date. Continued use of our services after changes take effect constitutes acceptance.",
  },
  {
    id: "contact",
    title: "9. Contact",
    body: "Questions about these Terms should be directed to our dispatch team at dispatch@kktransportation.com or by calling the number listed in our Contact section.",
  },
];

export default function TermsPage() {
  return (
    <>
      <AnimatedSection className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                On this page
              </p>
              <nav className="flex flex-col gap-1">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-sm text-text-secondary hover:text-primary transition-colors py-1.5"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            <article className="flex flex-col gap-10 max-w-3xl">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-dark mb-3">
                    {s.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">{s.body}</p>
                </section>
              ))}
            </article>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
