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
      <Container className="relative z-10 pt-12 pb-0 md:pt-16 lg:pt-20">
        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <motion.div
            variants={groupVariants}
            initial={false}
            animate={reduce ? undefined : "show"}
            className="min-w-0 max-w-2xl lg:pt-12"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-navy shadow-[var(--shadow-card)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-70 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <span>{hero.trustPills[0]}</span>
                <span className="h-4 w-px bg-line" aria-hidden="true" />
                <span className="inline-flex items-center gap-0.5 text-warning" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={1.75} />
                  ))}
                </span>
                <span>4.8</span>
                <span className="h-4 w-px bg-line" aria-hidden="true" />
                <span className="underline decoration-line underline-offset-2">{hero.trustPills[2]}</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 max-w-full text-5xl font-extrabold leading-[1.06] tracking-normal text-[#2b394f] sm:text-6xl lg:text-[58px]"
            >
              <span className="block">File ITR in minutes</span>
              <span className="block">
                with <span className="text-brand">CA-led Accuracy</span>
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-lg bg-success-soft px-4 py-2.5 text-lg font-extrabold text-success">
                <CheckCircle2 className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                {hero.reassurance}
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-5 flex max-w-xl items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 text-sm text-navy shadow-[var(--shadow-card)]"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand-soft text-brand">
                <LifeBuoy className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="h-10 w-px bg-line" aria-hidden="true" />
              <span className="min-w-0 leading-relaxed">
                <strong>EasyTax Notice Support</strong> | {hero.support}
              </span>
            </motion.div>

            <motion.div variants={cardsVariants} className="mt-12 grid min-w-0 gap-7 sm:grid-cols-2">
              {hero.actionCards.map((card) => {
                const Icon = iconMap[card.icon];
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    aria-label={`${card.title} - ${card.ctaLabel}`}
                    className="group flex min-h-[260px] flex-col rounded-[1.75rem] border border-line bg-surface p-8 shadow-[var(--shadow-card-hover)] transition-all duration-200 hover:-translate-y-1"
                  >
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <p className="mt-8 text-3xl font-extrabold leading-tight text-navy">{card.title}</p>
                    <p className="mt-3 text-2xl font-semibold leading-tight text-muted">
                      {card.subtitle}
                    </p>
                    <span className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-4 text-base font-extrabold text-white transition-colors duration-200 group-hover:bg-brand-dark">
                      {card.ctaLabel}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
            className="lg:pt-10"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? undefined : proofTransition}
        className="relative z-0 -mt-32 bg-[#f4f5ff]"
      >
        <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:pl-[48%]">
          {hero.proofStats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div key={stat.label} className="flex items-center justify-center gap-4 text-center sm:text-left">
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface text-brand shadow-[var(--shadow-card)] sm:inline-flex">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-4xl font-extrabold tracking-normal text-[#2b394f] lg:text-5xl">{stat.label}</p>
                  <p className="mt-1 text-base font-medium leading-relaxed text-muted">{stat.detail}</p>
                </div>
              </div>
            );
          })}
        </Container>
      </motion.div>
    </section>
  );
}
