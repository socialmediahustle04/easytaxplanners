import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustBadge } from "@/components/TrustBadge";
import { CTASection } from "@/components/CTASection";
import { trustItems } from "@/content/trust";

export const metadata: Metadata = {
  title: { absolute: "About EasyTaxPlanners — CA-Led Compliance Support" },
  description:
    "EasyTaxPlanners provides CA-led compliance support, handled by qualified tax professionals, for individuals, startups, and small businesses across India.",
  alternates: { canonical: "/about" },
};

const differences = [
  "We focus on clarity, not speed claims or automation promises.",
  "You see the scope and document checklist before any work begins.",
  "We support new businesses and people with pending or messy filings.",
  "Practical follow-up happens with a real person over WhatsApp.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="CA-led compliance support you can rely on"
        subtitle="EasyTaxPlanners helps individuals, startups, and small businesses handle tax and compliance without confusion or last-minute stress."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <Section background="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Why we exist</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-ink">
              <p>
                For many business owners and individuals, tax and compliance feel confusing and
                stressful. Deadlines pass, returns get filed incorrectly, and it is hard to know
                what is actually required.
              </p>
              <p>
                EasyTaxPlanners was built to change that. We provide CA-led compliance support,
                handled by qualified tax professionals, so you understand what is needed, see the
                scope before you commit, and have your filing and registration work guided with
                care.
              </p>
              <p>
                Our focus is practical help for new businesses, professionals, GST-registered
                businesses, private limited companies, and individuals, especially those with
                pending filings or returns that need correcting.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">What makes us different</h2>
            <ul className="mt-4 space-y-3">
              {differences.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-ink">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="How we work"
          title="The standards we hold on every engagement"
          subtitle="These are the commitments behind the EasyTaxPlanners name."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <TrustBadge key={item.id} item={item} variant="card" />
          ))}
        </div>
      </Section>

      <CTASection title="Have a question about your compliance?" />
    </>
  );
}
