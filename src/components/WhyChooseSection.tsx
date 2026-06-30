"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./Button";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { whyChoose } from "@/content/homepage";
import type { WhyChooseTone } from "@/content/types";

// Run layout measurement before paint on the client, plain effect on the
// server, so the active card is centred on first paint without a flash.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Tone styles mirror the soft service-card palette for a cohesive homepage.
const toneStyles: Record<
  WhyChooseTone,
  { card: string; panel: string; badge: string; check: string }
> = {
  blue: {
    card: "bg-blue-50 border-blue-100",
    panel: "bg-blue-100/50 ring-blue-200/50",
    badge: "bg-blue-100 text-blue-700 ring-blue-200/70",
    check: "text-blue-600",
  },
  teal: {
    card: "bg-teal-50 border-teal-100",
    panel: "bg-teal-100/50 ring-teal-200/50",
    badge: "bg-teal-100 text-teal-700 ring-teal-200/70",
    check: "text-teal-600",
  },
  indigo: {
    card: "bg-indigo-50 border-indigo-100",
    panel: "bg-indigo-100/50 ring-indigo-200/50",
    badge: "bg-indigo-100 text-indigo-700 ring-indigo-200/70",
    check: "text-indigo-600",
  },
};

const arrowBase =
  "inline-flex items-center justify-center rounded-full border border-line bg-surface text-navy shadow-card transition hover:border-brand hover:text-brand focus-visible:border-brand focus-visible:text-brand";

export function WhyChooseSection() {
  const reduce = useReducedMotion();
  const cards = whyChoose.cards;
  const count = cards.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const [animate, setAnimate] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count],
  );
  const goTo = useCallback((i: number) => setIndex(i), []);

  // Centre the active slide inside the viewport using measured geometry.
  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;
    const centred =
      viewport.clientWidth / 2 - (slide.offsetLeft + slide.offsetWidth / 2);
    setOffset(centred);
  }, [index]);

  useIsomorphicLayoutEffect(() => {
    measure();
  }, [measure]);

  // Recompute on container/viewport resize without a scroll listener.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => measure());
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [measure]);

  // Enable spring animation only after the first (snapped) measurement.
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Autoplay every 5s, paused on hover/focus and disabled for reduced motion.
  useEffect(() => {
    if (reduce || paused || count <= 1) return;
    const id = window.setInterval(next, 5000);
    return () => window.clearInterval(id);
  }, [reduce, paused, count, next]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  const motionTransition: Transition =
    animate && !reduce
      ? { type: "spring", stiffness: 260, damping: 30 }
      : { duration: 0 };

  return (
    <section
      className="overflow-hidden bg-surface py-16 md:py-24"
      aria-roledescription="carousel"
      aria-label={whyChoose.title}
      onKeyDown={onKeyDown}
    >
      <Container>
        <SectionHeader
          align="center"
          eyebrow={whyChoose.eyebrow}
          title={whyChoose.title}
          subtitle={whyChoose.subtitle}
        />
      </Container>

      <div
        className="relative mt-10 md:mt-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {/* Desktop side arrows (over the peeking cards) */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className={cn(arrowBase, "absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 p-3 lg:flex")}
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className={cn(arrowBase, "absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 p-3 lg:flex")}
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </button>

        {/* Carousel viewport */}
        <div ref={viewportRef} className="mx-auto max-w-7xl overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex"
            initial={false}
            animate={{ x: offset }}
            transition={motionTransition}
          >
            {cards.map((card, i) => {
              const tone = toneStyles[card.tone];
              const Icon = iconMap[card.icon];
              const active = i === index;
              return (
                <div
                  key={card.title}
                  className="w-full shrink-0 px-3 sm:px-4 lg:w-[860px]"
                >
                  <motion.article
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${count}: ${card.title}`}
                    aria-hidden={!active}
                    initial={false}
                    animate={{ scale: active ? 1 : 0.94, opacity: active ? 1 : 0.55 }}
                    transition={motionTransition}
                    className={cn(
                      "grid h-full gap-6 rounded-3xl border p-6 shadow-card sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-10",
                      tone.card,
                    )}
                  >
                    {/* Visual panel */}
                    <div
                      className={cn(
                        "overflow-hidden rounded-2xl ring-1",
                        tone.panel,
                      )}
                    >
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={card.image}
                          alt={card.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 88vw, 420px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1",
                          tone.badge,
                        )}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                        {card.tag}
                      </span>
                      <h3 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted">
                        {card.body}
                      </p>
                      <ul className="mt-5 space-y-3">
                        {card.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm text-ink"
                          >
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface shadow-[0_1px_2px_rgba(11,31,58,0.08)]">
                              <Check
                                className={cn("h-3 w-3", tone.check)}
                                strokeWidth={2.75}
                                aria-hidden="true"
                              />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Controls: pagination dots, with arrows on mobile */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className={cn(arrowBase, "p-2.5 lg:hidden")}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2" aria-label="Slide navigation">
            {cards.map((card, i) => {
              const active = i === index;
              return (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}: ${card.title}`}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    active ? "w-7 bg-brand" : "w-2.5 bg-navy/20 hover:bg-navy/40",
                  )}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className={cn(arrowBase, "p-2.5 lg:hidden")}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Dark CTA bar */}
      <Container className="mt-12 md:mt-16">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-navy px-6 py-8 text-center sm:px-10 md:flex-row md:justify-between md:gap-8 md:text-left">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {whyChoose.cta.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-white/80">
              {whyChoose.cta.subtitle}
            </p>
          </div>
          <Button
            href={whyChoose.cta.href}
            size="lg"
            variant="white"
            withArrow
            className="shrink-0"
          >
            {whyChoose.cta.ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
