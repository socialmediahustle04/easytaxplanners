import type { TrustItem } from "@/content/types";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function TrustBadge({
  item,
  variant = "card",
}: {
  item: TrustItem;
  variant?: "card" | "compact";
}) {
  const Icon = iconMap[item.icon];

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold text-navy">{item.label}</span>
      </div>
    );
  }

  return (
    <div className={cn("rounded-xl border border-line bg-surface p-5")}>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-success-soft text-success">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-bold text-navy">{item.label}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
    </div>
  );
}
