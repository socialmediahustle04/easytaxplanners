import { Check, FileText, HelpCircle } from "lucide-react";
import type { ServiceLike } from "@/content/types";
import { PageHero } from "./PageHero";
import { Section } from "./Section";
import { ProcessSteps } from "./ProcessSteps";
import { CTASection } from "./CTASection";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/content/site-config";

export function ServiceDetail({ offering }: { offering: ServiceLike }) {
  const isRegistration = offering.type === "registration";
  const sectionLabel = isRegistration ? "Registration" : "Service";
  const baseHref = isRegistration ? "/registration" : "/services";
  const baseLabel = isRegistration ? "Registration" : "Services";

  return (
    <>
      <PageHero
        eyebrow={sectionLabel}
        title={offering.title}
        subtitle={offering.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: baseLabel, href: baseHref },
          { label: offering.title, href: `${baseHref}/${offering.slug}` },
        ]}
      />

      <Section background="surface">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-navy">Who this is for</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {offering.whoItIsFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.25} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy">What is included</h2>
                <ul className="mt-4 space-y-3">
                  {offering.whatsIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Aside: documents + CTA */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-line bg-background p-6 lg:sticky lg:top-24">
              <div className="flex items-center gap-2 text-navy">
                <FileText className="h-5 w-5 text-brand" aria-hidden="true" />
                <h2 className="text-lg font-bold">Documents typically needed</h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {offering.documentsNeeded.map((doc) => (
                  <li key={doc} className="flex items-start gap-2 text-sm text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-brand-soft p-3 text-xs leading-relaxed text-navy">
                This is a general guide. We share the exact checklist after you reach out, and we
                never ask for sensitive details on the website.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Button href="/contact" size="lg" fullWidth withArrow>
                  {offering.ctaLabel}
                </Button>
                <Button
                  href={whatsappLink(`Hi, I would like help with ${offering.title}.`)}
                  size="lg"
                  variant="secondary"
                  fullWidth
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <Reveal>
          <h2 className="text-2xl font-bold text-navy md:text-3xl">How the process works</h2>
          <p className="mt-3 max-w-2xl text-muted">
            A clear, predictable path from your first enquiry to completion.
          </p>
        </Reveal>
        <div className="mt-10">
          <ProcessSteps steps={offering.process} />
        </div>
      </Section>

      {/* FAQs */}
      {offering.faqs && offering.faqs.length > 0 && (
        <Section background="surface">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Common questions</h2>
          <div className="mt-8 max-w-3xl space-y-3">
            {offering.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-line bg-background p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-navy">
                  <span className="flex items-start gap-2.5">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-brand transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
