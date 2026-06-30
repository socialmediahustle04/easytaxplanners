import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { homepageOfferings } from "@/content/offerings";
import { howItWorks } from "@/content/homepage";

export const metadata: Metadata = {
  title: "Tax & Compliance Services",
  description:
    "CA-led tax and compliance services for India: income tax filing, GST returns, company filings, registrations, and financial statement preparation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="CA-led services for tax and business compliance"
        subtitle="Pick the help you need. Every service starts with a clear document checklist and a scope you agree before any work begins."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homepageOfferings.map((offering) => (
            <ServiceCard key={offering.slug} offering={offering} />
          ))}
        </div>
      </Section>

      <Section background="surface">
        <SectionHeader
          eyebrow="How it works"
          title="The same clear process for every service"
          subtitle="No surprises, no sensitive details requested on the website."
        />
        <div className="mt-12">
          <ProcessSteps steps={howItWorks} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
