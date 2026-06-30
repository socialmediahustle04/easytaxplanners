import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ServiceLike } from "@/content/types";
import { offeringHref } from "@/content/offerings";
import { iconMap } from "@/lib/icon-map";

export function ServiceCard({ offering }: { offering: ServiceLike }) {
  const Icon = iconMap[offering.icon];
  const href = offeringHref(offering);

  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </span>

      <h3 className="mt-5 text-lg font-bold text-navy">{offering.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{offering.summary}</p>

      <ul className="mt-4 space-y-2">
        {offering.cardBullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" strokeWidth={2.25} aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Get help
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
