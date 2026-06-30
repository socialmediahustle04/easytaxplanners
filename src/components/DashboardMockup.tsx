import {
  ShieldCheck,
  Check,
  Clock,
  FileCheck2,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

// Original, illustrative compliance dashboard for the hero. This is brand
// artwork built from layout primitives (not a screenshot and not copied from
// any competitor UI). Decorative for assistive tech.
export function DashboardMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full select-none rounded-2xl border border-line bg-surface p-4 shadow-[var(--shadow-card-hover)] sm:p-5"
    >
      {/* header */}
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white">
            <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <p className="text-sm font-bold text-navy">Compliance overview</p>
            <p className="text-xs text-muted">CA-led guidance</p>
          </div>
        </div>
        <span className="rounded-full bg-success-soft px-2.5 py-1 text-xs font-semibold text-success">
          On track
        </span>
      </div>

      {/* selected service */}
      <div className="mt-4 rounded-xl bg-brand-soft p-3">
        <p className="text-xs font-medium text-brand">Service selected</p>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-sm font-semibold text-navy">GST Return Filing</p>
          <ChevronRight className="h-4 w-4 text-brand" />
        </div>
      </div>

      {/* checklist */}
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          Document checklist
        </p>
        <ul className="mt-2 space-y-2">
          {["Sales summary received", "Purchase summary received", "Input credit reviewed"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success-soft text-success">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ),
          )}
        </ul>
      </div>

      {/* status row */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-line p-2.5 text-center">
          <FileCheck2 className="mx-auto h-4 w-4 text-brand" />
          <p className="mt-1 text-[11px] font-semibold text-navy">Checklist ready</p>
        </div>
        <div className="rounded-lg border border-warning/30 bg-warning-soft p-2.5 text-center">
          <Clock className="mx-auto h-4 w-4 text-warning" />
          <p className="mt-1 text-[11px] font-semibold text-navy">Pending review</p>
        </div>
        <div className="rounded-lg border border-line p-2.5 text-center">
          <Check className="mx-auto h-4 w-4 text-muted" />
          <p className="mt-1 text-[11px] font-semibold text-muted">Filed</p>
        </div>
      </div>

      {/* whatsapp prompt */}
      <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-navy p-3 text-white">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
          <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <div className="text-xs">
          <p className="font-semibold">Need a hand?</p>
          <p className="text-white/70">Reach us on WhatsApp</p>
        </div>
      </div>
    </div>
  );
}
