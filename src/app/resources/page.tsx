import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ResourceCard } from "@/components/ResourceCard";
import { CTASection } from "@/components/CTASection";
import { resources, resourceCategories } from "@/content/resources";

export const metadata: Metadata = {
  title: "Tax & Compliance Resources",
  description:
    "Plain-language guides on income tax, GST, company compliance, registrations, and business finance for individuals and small businesses in India.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const grouped = resourceCategories
    .map((category) => ({
      category,
      articles: resources.filter((article) => article.category === category),
    }))
    .filter((group) => group.articles.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides for tax and business compliance"
        subtitle="Clear, practical explanations of the questions small businesses and individuals ask most. Educational only, not individual advice."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
        ]}
      />

      <Section>
        <div className="space-y-16">
          {grouped.map((group) => (
            <div key={group.category}>
              <h2 className="text-2xl font-bold text-navy">{group.category}</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.articles.map((article) => (
                  <ResourceCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection title="Have a question we have not covered?" />
    </>
  );
}
