"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Transition } from "framer-motion";
import { FileText, Landmark, Receipt } from "lucide-react";
import { cn } from "@/lib/utils";

type RowStatus = "done" | "active" | "pending";

const rows = [
  { label: "Salary", Icon: FileText },
  { label: "F&O Profit", Icon: Receipt },
  { label: "Capital Gains", Icon: Landmark },
] as const;

const states: ReadonlyArray<{
  heading: string;
  statuses: readonly [RowStatus, RowStatus, RowStatus];
  statusLabels: readonly [string, string, string];
}> = [
  {
    heading: "Auto-checking your tax data from Form 16, AIS and bank records",
    statuses: ["done", "done", "done"],
    statusLabels: ["VALIDATED", "MATCHED", "MATCHED"],
  },
  {
    heading: "Auto-fetching all your data from PAN, Form 16 and AIS",
    statuses: ["done", "active", "pending"],
    statusLabels: ["VALIDATED", "FETCHING..", "FETCHING.."],
  },
  {
    heading: "CA review catches gaps before your return is filed",
    statuses: ["done", "done", "done"],
    statusLabels: ["CHECKED", "CHECKED", "READY"],
  },
];

const swapTransition: Transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] };

export function HeroCompliancePanel({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const state = states[index] ?? states[0];

  useEffect(() => {
    if (reduce) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % states.length);
    }, 3500);

    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "select-none rounded-2xl border border-line bg-surface p-5 shadow-[var(--shadow-card-hover)]",
        className,
      )}
    >
      <div className="relative min-h-[220px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={swapTransition}
          >
            <h3 className="mx-auto max-w-[15rem] text-center text-base font-extrabold leading-tight text-navy">
              {state.heading}
            </h3>

            <ul className="mt-7 space-y-3">
              {rows.map((row, i) => {
                const RowIcon = row.Icon;
                const status = state.statuses[i];
                return (
                  <li
                    key={row.label}
                    className={cn(
                      "flex items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-ink",
                      status === "done" && "bg-success-soft",
                      status === "active" && "bg-[#f1efff]",
                      status === "pending" && "bg-[#f5f3ff]",
                    )}
                  >
                    <span className="flex items-center gap-2.5">
                      <RowIcon className="h-4 w-4 text-muted" strokeWidth={1.75} />
                      <span>{row.label}</span>
                    </span>
                    <span
                      className={cn(
                        "text-xs font-extrabold",
                        status === "done" && "text-success",
                        status === "active" && "text-brand",
                        status === "pending" && "text-brand",
                      )}
                    >
                      {state.statusLabels[i]}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
