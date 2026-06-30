import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBadge } from "@/components/TrustBadge";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ResourceCard } from "@/components/ResourceCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { iconMap } from "@/lib/icon-map";
import { homepageOfferings } from "@/content/offerings";
import { trustItems } from "@/content/trust";
import { resources } from "@/content/resources";
import {
  helpSegments,
  howItWorks,
  trustSection,
  problemPrompts,
} from "@/content/homepage";

const latestResources = [...resources]
  .sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1))
  .slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust strip (directly below hero, not inside it) */}
      <div className="border-b border-line bg-surface">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-5">
          {trustItems.map((item) => (
            <TrustBadge key={item.id} item={item} variant="compact" />
          ))}
        </Container>
      </div>

      {/* Core services */}
      <Section>
        <SectionHeader
          eyebrow="Our services"
          title="Six ways we help you stay compliant"
          subtitle="Clear, CA-led support across the filings and registrations small businesses and individuals need most."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homepageOfferings.map((offering, index) => (
            <Reveal key={offering.slug} delay={index * 0.05} className="h-full">
              <ServiceCard offering={offering} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Who we help */}
      <Section background="surface">
        <SectionHeader
          eyebrow="Who we help"
          title="Built for the people who need practical compliance help"
          subtitle="We focus on new businesses, professionals, and individuals, not big audit clients who already have a CA."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {helpSegments.map((segment) => {
            const Icon = iconMap[segment.icon];
            return (
              <div
                key={segment.title}
                className="flex gap-4 rounded-xl border border-line bg-background p-5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy">{segment.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {segment.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          eyebrow="How it works"
          title="A clear path from enquiry to filing"
          subtitle="You always know the scope before any work begins."
        />
        <div className="mt-12">
          <ProcessSteps steps={howItWorks} />
        </div>
      </Section>

      {/* CA-led trust section */}
      <Section background="navy">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader inverted title={trustSection.title} subtitle={trustSection.intro} />
            <ul className="mt-6 space-y-3">
              {trustSection.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <div className="grid gap-3">
              {trustItems.map((item) => (
                <TrustBadge key={item.id} item={item} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Problem-led CTA */}
      <Section background="surface">
        <SectionHeader
          eyebrow="Sorting out a problem?"
          title="If any of these sound familiar, we can help"
          subtitle="Tell us where you are stuck and we will explain the next step clearly."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problemPrompts.map((prompt) => {
            const Icon = iconMap[prompt.icon];
            return (
              <div key={prompt.question} className="rounded-xl border border-line bg-background p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-warning-soft text-warning">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">{prompt.question}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{prompt.description}</p>
              </div>
            );
          })}
          <div className="flex flex-col justify-center rounded-xl border border-dashed border-brand/40 bg-brand-soft p-5">
            <p className="text-base font-bold text-navy">Not sure where to start?</p>
            <p className="mt-1.5 text-sm text-muted">Speak to us and we will point you the right way.</p>
            <div className="mt-4">
              <Button href="/contact" withArrow>
                Speak to us
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Resources preview */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow="Resources"
            title="Plain-language guides for business compliance"
            subtitle="Practical explanations of common tax, GST, and company filing questions."
          />
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2"
          >
            View all resources
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {latestResources.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.05}>
              <ResourceCard article={article} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
