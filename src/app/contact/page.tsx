import type { Metadata } from "next";
import { MessageCircle, Mail, Clock, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig, whatsappLink } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send an enquiry to EasyTaxPlanners for CA-led help with income tax filing, GST returns, company filings, registrations, and financial statements.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us how we can help"
        subtitle="Share a few details and we will reply with a clear next step. Nothing sensitive is needed to get started."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <Section background="surface">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <LeadForm />
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-line bg-background p-6">
              <h2 className="text-lg font-bold text-navy">Reach us directly</h2>
              <div className="mt-4 flex flex-col gap-4 text-sm">
                <a
                  href={whatsappLink("Hi, I would like help with tax or business compliance.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-ink hover:text-brand"
                >
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-navy">WhatsApp</span>
                    {siteConfig.whatsappDisplay}
                  </span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-ink hover:text-brand"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-navy">Email</span>
                    {siteConfig.email}
                  </span>
                </a>
                <div className="flex items-start gap-3 text-ink">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-navy">What happens next</span>
                    We review your enquiry and reply with a document checklist and scope before any
                    work begins.
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-2 rounded-lg bg-brand-soft p-3 text-xs leading-relaxed text-navy">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  Please do not share PAN, Aadhaar, portal passwords, bank statements, or documents
                  in your first message. We will guide you on what is needed, securely, once we
                  understand your requirement.
                </span>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
