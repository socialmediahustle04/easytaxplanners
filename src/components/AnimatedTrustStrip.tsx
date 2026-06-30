"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { TrustItem } from "@/content/types";
import { iconMap } from "@/lib/icon-map";

export function AnimatedTrustStrip({ items }: { items: TrustItem[] }) {
  const reduce = useReducedMotion();
  const marqueeItems = [...items, ...items];

  return (
    <div className="overflow-hidden border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex w-max items-center gap-4"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={reduce ? undefined : { duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {marqueeItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={`${item.id}-${index}`}
                aria-hidden={index >= items.length}
                className="group inline-flex min-w-max items-center gap-3 rounded-2xl border border-line bg-background px-4 py-3 shadow-[0_12px_36px_-28px_rgba(15,35,62,0.55)]"
              >
                <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <span className="absolute inset-0 rounded-xl bg-brand/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Icon className="relative h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-navy">{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
