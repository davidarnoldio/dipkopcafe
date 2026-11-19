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
  "Signature Coffee",
  "Matcha",
  "Drinks & Tea",
  "Pastry & Bites",
  "Kitchen",
];

export function MenuShowcase() {
  const [activeCategory, setActiveCategory] =
    useState<MenuFilterCategory>("Signature Coffee");

  const visibleFeatured = FEATURED_DRINKS.filter(
    (item) => item.category === activeCategory
  );

  const visibleGroups = MENU_GROUPS.filter(
    (group) => group.filterCategory === activeCategory
  );

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative bg-[#F5F0E6] py-24 sm:py-32 lg:py-40 border-t border-[#1E3B2F]/12"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* Editorial Header & Category Filter */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#5B684A]">
              The House Menu
            </p>
            <h2
              id="menu-heading"
              className="mt-4 font-serif text-4xl font-normal leading-[1.02] text-[#1E3B2F] sm:text-5xl lg:text-[3.75rem]"
            >
              Crafted in{" "}
              <span className="italic text-[#7F8C6A]">small batches.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              role="tablist"
              aria-label="Menu Categories"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[#1E3B2F]/15 pb-3"
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
                    className={`relative px-1 py-1 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#1E3B2F]"
                        : "text-[#5B684A] hover:text-[#1E3B2F]"
                    }`}
                  >
                    {category}
                    {isActive && (
                      <motion.span
                        layoutId="menu-tab-underline"
                        className="absolute inset-x-0 -bottom-3 h-[2px] bg-[#1E3B2F]"
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
                      <div className="group relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/4.3] w-full overflow-hidden bg-[#1E3B2F]">
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
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172820]/35 via-transparent to-transparent"
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
                      <div className="flex items-center justify-between border-b border-[#1E3B2F]/18 pb-4">
                        <span className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#5B684A]">
                          {drink.category} · 0{idx + 1}
                        </span>
                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8C5D3B]">
                          IDR {drink.price}
                        </span>
                      </div>

                      <h3 className="mt-6 font-serif text-3xl font-normal leading-tight text-[#1E3B2F] sm:text-4xl lg:text-[3rem]">
                        {drink.name}
                      </h3>
                      <p className="mt-2 font-serif text-lg italic text-[#5B684A]">
                        {drink.subtitle}
                      </p>

                      <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-[#2F443A]">
                        {drink.description}
                      </p>

                      <div className="mt-8 pt-5 border-t border-[#1E3B2F]/12 flex flex-wrap items-center justify-between gap-4">
                        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#4A5D52]">
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
                <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#5B684A]">
                  Full Bar &amp; Kitchen Selection
                </p>
                <h3 className="mt-2 font-serif text-3xl text-[#1E3B2F]">
                  Complete DIPKOP Menu
                </h3>
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#4A5D52]">
                No Pork · No Lard · Prices in IDR (K)
              </p>
            </div>
          </Reveal>

          <HairlineRule />

          <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-14 lg:grid-cols-2">
            {visibleGroups.map((group) => (
              <div key={group.id} className="flex flex-col">
                <div className="flex items-baseline justify-between border-b border-[#1E3B2F]/25 pb-3">
                  <h4 className="font-serif text-2xl font-medium tracking-wide text-[#1E3B2F]">
                    {group.title}
                  </h4>
                  {group.hasHotCold && (
                    <div className="flex items-center gap-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#5B684A]">
                      <span className="w-9 text-right">Hot</span>
                      <span className="w-9 text-right">Cold</span>
                    </div>
                  )}
                </div>

                <ul className="divide-y divide-[#1E3B2F]/10">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="group py-3.5 flex items-baseline justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="text-[15px] font-medium text-[#1E3B2F] transition-colors group-hover:text-[#8C5D3B]">
                            {item.name}
                          </span>
                          {item.isSignature && (
                            <span className="border border-[#1E3B2F]/35 bg-[#1E3B2F] px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#F5F0E6]">
                              Signature
                            </span>
                          )}
                        </div>
                        {item.detail && (
                          <p className="mt-0.5 text-xs text-[#4A5D52]">
                            {item.detail}
                          </p>
                        )}
                      </div>

                      {group.hasHotCold ? (
                        <div className="flex shrink-0 items-center gap-5 text-sm font-semibold text-[#1E3B2F] tabular-nums">
                          <span className="w-9 text-right text-[#5B684A]">
                            {item.priceHot ?? "—"}
                          </span>
                          <span className="w-9 text-right">
                            {item.priceCold ?? "—"}
                          </span>
                        </div>
                      ) : (
                        <span className="shrink-0 text-sm font-semibold text-[#1E3B2F] tabular-nums">
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
          <div className="mt-14 border-t border-[#1E3B2F]/18 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="font-semibold uppercase tracking-[0.24em] text-[#1E3B2F]">
              Add-Ons
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[#2F443A]">
              {MENU_ADDONS.map((addon) => (
                <span key={addon.name}>
                  {addon.name}{" "}
                  <span className="font-semibold text-[#8C5D3B]">
                    ({addon.price})
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
