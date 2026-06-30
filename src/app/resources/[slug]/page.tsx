import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { resources, getResourceBySlug } from "@/content/resources";
import { getOfferingBySlug, offeringHref } from "@/content/offerings";
import { formatDate } from "@/lib/utils";
import type { ArticleBlock } from "@/content/types";

export function generateStaticParams() {
  return resources.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) return {};
  return {
    title: { absolute: article.metaTitle },
    description: article.metaDescription,
    alternates: { canonical: `/resources/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      url: `/resources/${article.slug}`,
      publishedTime: article.publishedDate,
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 className="mt-10 text-2xl font-bold text-navy">{block.text}</h2>;
    case "list":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return <p className="mt-4 leading-relaxed text-ink">{block.text}</p>;
  }
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) notFound();

  const related = article.relatedService
    ? getOfferingBySlug(article.relatedService)
    : undefined;

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: article.title, href: `/resources/${article.slug}` },
        ]}
      />

      <Section background="surface">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            {formatDate(article.publishedDate)} &middot; {article.readingTime}
          </p>

          <article className="mt-6 text-base">
            {article.body.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </article>

          {related && (
            <div className="mt-12 rounded-2xl border border-line bg-brand-soft p-6">
              <p className="text-sm font-semibold text-brand">Related service</p>
              <h2 className="mt-1 text-xl font-bold text-navy">{related.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink">{related.summary}</p>
              <Link
                href={offeringHref(related)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2"
              >
                Learn about {related.title}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}

          <p className="mt-10 rounded-lg bg-background p-4 text-xs leading-relaxed text-muted">
            This article is general information about tax and compliance in India and is not a
            substitute for advice on your specific situation. For help with your case, reach out and
            we will guide you.
          </p>
        </div>
      </Section>

      <CTASection title={`Need help with ${article.category.toLowerCase()}?`} />
    </>
  );
}
