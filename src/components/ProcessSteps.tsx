"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ProcessStep } from "@/content/types";

// Numbered process. Numbering is meaningful here: the steps are an ordered
// sequence the visitor moves through.
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  const reduce = useReducedMotion();

  return (
    <ol className="relative grid gap-8 md:grid-cols-5 md:gap-6">
      <div
        aria-hidden="true"
        className="absolute bottom-7 left-5 top-5 w-px bg-success/15 md:bottom-auto md:left-[2%] md:right-[2%] md:top-5 md:h-px md:w-auto"
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-7 left-5 top-5 w-0.5 origin-top rounded-full bg-success md:bottom-auto md:left-[2%] md:right-[2%] md:top-5 md:h-0.5 md:w-auto md:origin-left"
        initial={reduce ? false : { scaleY: 0, scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleY: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          className="relative z-10 grid grid-cols-[2.5rem_1fr] gap-4 md:block"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-success/20 bg-navy text-sm font-bold text-white shadow-[0_12px_28px_-18px_rgba(15,35,62,0.8)]"
            initial={false}
            whileInView={reduce ? undefined : { scale: [0.92, 1.08, 1] }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {index + 1}
          </motion.span>
          <div>
            <h3 className="text-base font-bold text-navy md:mt-4">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
