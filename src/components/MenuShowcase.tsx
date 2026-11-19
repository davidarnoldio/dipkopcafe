"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FEATURED_DRINKS,
  MENU_ADDONS,
  MENU_GROUPS,
  type MenuFilterCategory,
} from "@/data/dipkop";
import { Reveal, HairlineRule } from "./MotionPrimitives";

const CATEGORIES: MenuFilterCategory[] = [
  "All",
  "Signature",
  "Coffee",
  "Matcha",
  "Drinks & Tea",
  "Pastry & Bites",
  "Kitchen",
];

export function MenuShowcase() {
  const [activeCategory, setActiveCategory] =
    useState<MenuFilterCategory>("All");

  const visibleFeatured =
    activeCategory === "All"
      ? FEATURED_DRINKS.filter((item) => item.showOnAll)
      : activeCategory === "Signature"
        ? FEATURED_DRINKS.filter((item) => item.isSignature)
        : FEATURED_DRINKS.filter((item) => item.category === activeCategory);

  const visibleGroups = MENU_GROUPS.map((group) => {
    if (activeCategory === "All") return group;
    if (activeCategory === "Signature") {
      const sigItems = group.items.filter((i) => i.isSignature);
      return sigItems.length > 0 ? { ...group, items: sigItems } : null;
    }
    return group.filterCategory === activeCategory ? group : null;
  }).filter((g): g is NonNullable<typeof g> => g !== null);

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
              className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[#E9E1D2]/15 pb-3"
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
                    className={`relative px-1 py-1 text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
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
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Asymmetric Editorial Product Spreads */}
        {visibleFeatured.length > 0 && (
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
                        <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#E9E1D2]">
                          IDR {drink.price}
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
        )}

        {/* House Menu Ledger */}
        <div className="mt-20 lg:mt-28">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#C7D5A5]">
                  Full Bar &amp; Kitchen Selection
                </p>
                <h3 className="mt-2 font-serif text-3xl text-[#F5F1E8]">
                  Complete DIPKOP Menu
                </h3>
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#B8C2B5]">
                No Pork · No Lard · Prices in IDR (K)
              </p>
            </div>
          </Reveal>

          <HairlineRule />

          <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-14 lg:grid-cols-2">
            {visibleGroups.map((group) => (
              <div key={group.id} className="flex flex-col">
                <div className="flex items-baseline justify-between border-b border-[#E9E1D2]/20 pb-3">
                  <h4 className="font-serif text-2xl font-normal tracking-wide text-[#C7D5A5]">
                    {group.title}
                  </h4>
                  {group.hasHotCold && (
                    <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.22em] text-[#B8C2B5]">
                      <span className="w-9 text-right">Hot</span>
                      <span className="w-9 text-right">Cold</span>
                    </div>
                  )}
                </div>

                <ul className="divide-y divide-[#E9E1D2]/10">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="group py-3.5 flex items-baseline justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="text-[15px] text-[#F5F1E8] transition-colors group-hover:text-[#C7D5A5]">
                            {item.name}
                          </span>
                          {item.isSignature && (
                            <span className="border border-[#C7D5A5]/45 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-[#C7D5A5]">
                              Signature
                            </span>
                          )}
                        </div>
                        {item.detail && (
                          <p className="mt-0.5 text-xs text-[#B8C2B5]/85">
                            {item.detail}
                          </p>
                        )}
                      </div>

                      {group.hasHotCold ? (
                        <div className="flex shrink-0 items-center gap-5 text-sm font-medium text-[#E9E1D2]/90 tabular-nums">
                          <span className="w-9 text-right text-[#B8C2B5]">
                            {item.priceHot ?? "—"}
                          </span>
                          <span className="w-9 text-right">
                            {item.priceCold ?? "—"}
                          </span>
                        </div>
                      ) : (
                        <span className="shrink-0 text-sm font-medium text-[#E9E1D2]/90 tabular-nums">
                          {item.price}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Add-ons Strip */}
          <div className="mt-14 border-t border-[#E9E1D2]/15 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="uppercase tracking-[0.24em] text-[#C7D5A5]">
              Add-Ons
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[#E9E1D2]/85">
              {MENU_ADDONS.map((addon) => (
                <span key={addon.name}>
                  {addon.name}{" "}
                  <span className="text-[#C7D5A5]">({addon.price})</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
