import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ServiceLike } from "@/content/types";
import { offeringHref } from "@/content/offerings";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

// Original EasyTaxPlanners tonal card system. Soft, calm tints only.
// Blue maps to the brand colour (#2563eb) and green to success (#16a34a),
// so these stay consistent with the rest of the site; teal/indigo/amber
// extend the palette for a premium, scannable multi-service grid.
type Tone = "blue" | "teal" | "indigo" | "green" | "amber";

const toneStyles: Record<
  Tone,
  { card: string; badge: string; divider: string; check: string; cta: string; ring: string }
> = {
  blue: {
    card: "bg-blue-50 border-blue-100 hover:border-blue-300",
    badge: "bg-blue-100 text-blue-600 ring-blue-200/60",
    divider: "border-blue-100",
    check: "text-blue-600",
    cta: "text-blue-700",
    ring: "focus-visible:ring-blue-500",
  },
  teal: {
    card: "bg-teal-50 border-teal-100 hover:border-teal-300",
    badge: "bg-teal-100 text-teal-600 ring-teal-200/60",
    divider: "border-teal-100",
    check: "text-teal-600",
    cta: "text-teal-700",
    ring: "focus-visible:ring-teal-500",
  },
  indigo: {
    card: "bg-indigo-50 border-indigo-100 hover:border-indigo-300",
    badge: "bg-indigo-100 text-indigo-600 ring-indigo-200/60",
    divider: "border-indigo-100",
    check: "text-indigo-600",
    cta: "text-indigo-700",
    ring: "focus-visible:ring-indigo-500",
  },
  green: {
    card: "bg-green-50 border-green-100 hover:border-green-300",
    badge: "bg-green-100 text-green-600 ring-green-200/60",
    divider: "border-green-100",
    check: "text-green-600",
    cta: "text-green-700",
    ring: "focus-visible:ring-green-500",
  },
  amber: {
    card: "bg-amber-50 border-amber-100 hover:border-amber-300",
    badge: "bg-amber-100 text-amber-600 ring-amber-200/60",
    divider: "border-amber-100",
    check: "text-amber-600",
    cta: "text-amber-700",
    ring: "focus-visible:ring-amber-500",
  },
};

// Stable, content-driven tone assignment per offering.
const toneBySlug: Record<string, Tone> = {
  "income-tax-filing": "blue",
  "gst-return-filing": "teal",
  "company-return-filing": "indigo",
  "gst-registration": "green",
  "company-incorporation": "amber",
  "financial-statements": "blue",
};

const toneOrder: Tone[] = ["blue", "teal", "indigo", "green", "amber"];

function toneForSlug(slug: string): Tone {
  const mapped = toneBySlug[slug];
  if (mapped) return mapped;
  // Deterministic fallback so future offerings still get a stable colour.
  let sum = 0;
  for (let i = 0; i < slug.length; i += 1) sum += slug.charCodeAt(i);
  return toneOrder[sum % toneOrder.length];
}

export function ServiceCard({ offering }: { offering: ServiceLike }) {
  const Icon = iconMap[offering.icon];
  const href = offeringHref(offering);
  const tone = toneStyles[toneForSlug(offering.slug)];

  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col rounded-2xl border p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:p-7",
        tone.card,
        tone.ring,
      )}
    >
      <span
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-transform duration-200 group-hover:scale-105",
          tone.badge,
        )}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </span>

      <h3 className="mt-5 text-lg font-bold text-navy sm:text-xl">{offering.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{offering.summary}</p>

      <ul className={cn("mt-5 space-y-2.5 border-t pt-4", tone.divider)}>
        {offering.cardBullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink">
            <span className="mt-0.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-surface shadow-[0_1px_2px_rgba(11,31,58,0.08)]">
              <Check className={cn("h-3 w-3", tone.check)} strokeWidth={2.75} aria-hidden="true" />
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <span className={cn("mt-6 inline-flex items-center gap-1.5 text-sm font-bold", tone.cta)}>
        Get help
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
