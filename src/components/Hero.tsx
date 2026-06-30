"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, LifeBuoy, Star } from "lucide-react";
import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import { Container } from "./Container";
import { HeroVisual } from "./HeroVisual";
import { hero } from "@/content/homepage";
import { iconMap } from "@/lib/icon-map";

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const cardsVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const visualTransition: Transition = { duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] };
const proofTransition: Transition = { duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] };

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(rgba(37,99,235,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.055)_1px,transparent_1px)] bg-[size:32px_32px] opacity-80 lg:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-28 h-[500px] bg-[radial-gradient(circle_at_18%_36%,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_80%_42%,rgba(236,72,153,0.12),transparent_30%)] lg:hidden"
      />

      <Container className="relative z-10 pt-6 pb-0 md:pt-8 lg:pt-9">
        <div className="grid min-w-0 items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <motion.div
            variants={groupVariants}
            initial={false}
            animate={reduce ? undefined : "show"}
            className="mx-auto min-w-0 max-w-2xl text-center lg:mx-0 lg:pt-1 lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex w-full max-w-[calc(100vw-2rem)] min-w-0 items-center justify-center gap-x-1.5 overflow-hidden rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] font-semibold text-navy shadow-[var(--shadow-card)] sm:w-auto sm:gap-x-3 sm:px-4 sm:py-2 sm:text-sm lg:justify-start">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-70 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <span className="whitespace-nowrap">{hero.trustPills[0]}</span>
                <span className="h-3.5 w-px bg-line sm:h-4" aria-hidden="true" />
                <span className="inline-flex items-center gap-0.5 text-warning" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" strokeWidth={1.75} />
                  ))}
                </span>
                <span>4.8</span>
                <span className="h-3.5 w-px bg-line sm:h-4" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate text-left underline decoration-line underline-offset-2 sm:flex-none sm:text-center">{hero.trustPills[2]}</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mx-auto mt-4 max-w-[21rem] text-[2.32rem] font-extrabold leading-[1.08] tracking-normal text-[#2b394f] sm:max-w-full sm:text-5xl lg:mx-0 lg:text-[50px]"
            >
              <span className="block">File ITR in minutes</span>
              <span className="block">
                with <span className="text-brand">CA-led Accuracy</span>
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-3">
              <span className="inline-flex items-center justify-center gap-2 rounded-lg bg-success-soft px-4 py-2 text-base font-extrabold text-success sm:text-lg">
                <CheckCircle2 className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                {hero.reassurance}
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mx-auto mt-4 flex max-w-full items-center gap-3 overflow-hidden rounded-xl border border-line bg-surface px-3 py-3 text-left text-xs text-navy shadow-[var(--shadow-card)] sm:max-w-xl sm:gap-4 sm:px-4 sm:text-sm lg:mx-0"
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand-soft text-brand sm:h-9 sm:w-9">
                <LifeBuoy className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="h-8 w-px bg-line sm:h-9" aria-hidden="true" />
              <span className="min-w-0 leading-relaxed">
                <strong>EasyTax Notice Support</strong> | {hero.support}
              </span>
            </motion.div>

            <motion.div variants={cardsVariants} className="mt-7 grid min-w-0 grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
              {hero.actionCards.map((card) => {
                const Icon = iconMap[card.icon];
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    aria-label={`${card.title} - ${card.ctaLabel}`}
                    className="group relative flex min-h-[180px] min-w-0 flex-col overflow-hidden rounded-[1.25rem] border border-line bg-surface p-4 text-left shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[var(--shadow-card-hover)] focus-visible:-translate-y-1 focus-visible:border-brand focus-visible:shadow-[var(--shadow-card-hover)] sm:min-h-[216px] sm:p-5"
                  >
                    <span
                      className="pointer-events-none absolute -top-3 left-5 inline-flex translate-y-1 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-brand to-indigo-600 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.6)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                      {card.activeLabel}
                    </span>

                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/10 transition-transform duration-200 group-hover:scale-105 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>

                    <div className="mt-3 sm:mt-4">
                      <p className="text-[1rem] font-extrabold leading-tight text-navy sm:text-xl">{card.title}</p>
                      <p className="mt-2 text-sm font-medium leading-normal text-muted sm:text-[15px]">{card.subtitle}</p>
                    </div>

                    <span className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-2 py-2.5 text-[11px] font-extrabold text-white transition-colors duration-200 group-hover:bg-brand-dark sm:rounded-xl sm:px-5 sm:py-3.5 sm:text-sm">
                      {card.ctaLabel}
                      <ArrowRight
                        className="hidden h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 sm:block"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? undefined : visualTransition}
            className="hidden lg:block lg:pt-1"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? undefined : proofTransition}
        className="relative z-0 mt-6 bg-surface lg:-mt-20 lg:bg-[#f4f5ff]"
      >
        <Container className="grid grid-cols-2 gap-4 py-7 sm:gap-8 lg:pl-[48%]">
          {hero.proofStats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div key={stat.label} className="flex items-center justify-center gap-4 text-center sm:text-left">
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface text-brand shadow-[var(--shadow-card)] sm:inline-flex">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-3xl font-extrabold tracking-normal text-[#2b394f] sm:text-4xl lg:text-5xl">{stat.label}</p>
                  <p className="mt-1 text-sm font-medium leading-snug text-muted sm:text-base sm:leading-relaxed">{stat.detail}</p>
                </div>
              </div>
            );
          })}
        </Container>
      </motion.div>
    </section>
  );
}
