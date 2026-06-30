import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";

interface Crumb {
  label: string;
  href: string;
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-line bg-gradient-to-b from-brand-soft to-background">
      <Container className="py-12 md:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-1">
                  {index > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="font-medium text-ink" aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-brand">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && <p className="mb-3 text-sm font-semibold text-brand">{eyebrow}</p>}
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-navy md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
