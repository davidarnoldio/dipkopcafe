"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FEATURED_DRINKS,
  MENU_LEDGER,
  type MenuCategory,
} from "@/data/dipkop";
import { Reveal, HairlineRule } from "./MotionPrimitives";

const CATEGORIES: ("All" | MenuCategory)[] = [
  "All",
  "Signature",
  "Matcha",
  "Coffee",
];

export function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState<"All" | MenuCategory>(
    "All"
  );

  const visibleFeatured =
    activeCategory === "All"
      ? FEATURED_DRINKS
      : FEATURED_DRINKS.filter((item) => item.category === activeCategory);

  const visibleLedger =
    activeCategory === "All"
      ? MENU_LEDGER
      : MENU_LEDGER.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative bg-[#13221B] py-24 sm:py-32 lg:py-40 border-t border-[#E9E1D2]/10"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* Editorial Header & Category Filter */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C7D5A5]">
              The House Menu
            </p>
            <h2
              id="menu-heading"
              className="mt-4 font-serif text-4xl font-normal leading-[1.02] text-[#F5F1E8] sm:text-5xl lg:text-[3.75rem]"
            >
              Crafted in{" "}
              <span className="italic text-[#C7D5A5]">small batches.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              role="tablist"
              aria-label="Menu Categories"
              className="flex flex-wrap items-center gap-2 sm:gap-6 border-b border-[#E9E1D2]/15 pb-3"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-2 py-1 text-xs uppercase tracking-[0.22em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#C7D5A5]"
                        : "text-[#B8C2B5] hover:text-[#F5F1E8]"
                    }`}
                  >
                    {category}
                    {isActive && (
                      <motion.span
                        layoutId="menu-tab-underline"
                        className="absolute inset-x-0 -bottom-3 h-px bg-[#C7D5A5]"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Asymmetric Editorial Product Spreads (No Generic Cards) */}
        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
          <AnimatePresence mode="popLayout">
            {visibleFeatured.map((drink, idx) => {
              const isReversed = idx % 2 === 1;
              return (
                <motion.article
                  key={drink.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
                >
                  {/* Image Block */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="group relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/4.3] w-full overflow-hidden bg-[#253D30]">
                      <Image
                        src={drink.image}
                        alt={drink.imageAlt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1023px) 100vw, 48vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#13221B]/50 via-transparent to-transparent"
                      />
                    </div>
                  </div>

                  {/* Editorial Typography Block */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed
                        ? "lg:order-1 lg:pr-8"
                        : "lg:order-2 lg:pl-8"
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-[#E9E1D2]/15 pb-4">
                      <span className="text-[11px] uppercase tracking-[0.26em] text-[#C7D5A5]">
                        {drink.category} · 0{idx + 1}
                      </span>
                      <span className="text-xs uppercase tracking-[0.18em] text-[#E9E1D2]/75">
                        {drink.pricePlaceholder}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-3xl font-normal leading-tight text-[#F5F1E8] sm:text-4xl lg:text-[3rem]">
                      {drink.name}
                    </h3>
                    <p className="mt-2 font-serif text-lg italic text-[#C7D5A5]/90">
                      {drink.subtitle}
                    </p>

                    <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-[#E9E1D2]/80">
                      {drink.description}
                    </p>

                    <div className="mt-8 pt-5 border-t border-[#E9E1D2]/10 flex flex-wrap items-center justify-between gap-4">
                      <span className="text-[11px] uppercase tracking-[0.22em] text-[#B8C2B5]">
                        Notes: {drink.tastingNotes}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* House Menu Ledger (Typographic List) */}
        <div className="mt-24 lg:mt-32">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#C7D5A5]">
                  Daily Bar Selection
                </p>
                <h3 className="mt-2 font-serif text-3xl text-[#F5F1E8]">
                  More from the Bar
                </h3>
              </div>
              <p className="text-xs text-[#B8C2B5]">
                * Prices shown are sample placeholders until seasonal menu
                release.
              </p>
            </div>
          </Reveal>

          <HairlineRule />

          <div className="grid grid-cols-1 gap-x-14 md:grid-cols-2">
            {visibleLedger.map((item) => (
              <div
                key={item.id}
                className="group border-b border-[#E9E1D2]/12 py-6 transition-colors duration-300 hover:border-[#C7D5A5]/45"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-2xl text-[#F5F1E8] transition-colors duration-300 group-hover:text-[#C7D5A5]">
                    {item.name}
                  </h4>
                  <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-[#E9E1D2]/75">
                    {item.pricePlaceholder}
                  </span>
                </div>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <p className="text-sm leading-relaxed text-[#B8C2B5]">
                    {item.description}
                  </p>
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-[#8C5D3B] bg-[#E9E1D2]/90 px-2 py-0.5 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
