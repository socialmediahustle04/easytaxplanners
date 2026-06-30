import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { registrations } from "@/content/registrations";
import { howItWorks } from "@/content/homepage";

export const metadata: Metadata = {
  title: "GST & Company Registration Services",
  description:
    "CA-led GST registration and company incorporation in India. Start with a clear document checklist and professional handling from application to approval.",
};

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Start your business on the right footing"
        subtitle="GST registration and company incorporation handled with a clear checklist and guidance on what comes next."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Registration", href: "/registration" },
        ]}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {registrations.map((offering) => (
            <ServiceCard key={offering.slug} offering={offering} />
          ))}
        </div>
      </Section>

      <Section background="surface">
        <SectionHeader
          eyebrow="How it works"
          title="A clear, guided registration process"
          subtitle="You know what is required and what happens next at every stage."
        />
        <div className="mt-12">
          <ProcessSteps steps={howItWorks} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
