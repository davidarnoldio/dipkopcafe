"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const EASE_EDITORIAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="DIPKOP Coffee & Matcha Hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#172820] pt-24 pb-12 sm:pt-28 lg:pt-24 lg:pb-10 flex flex-col justify-between"
    >
      {/* Subtle atmospheric dark botanical light & shadow layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -left-24 h-[460px] w-[460px] rounded-full bg-[#1E3B2F]/80 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-[#7F8C6A]/15 blur-[130px]" />
        <div className="editorial-grain absolute inset-0 opacity-60" />
      </div>

      <div className="relative z-10 mx-auto my-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Asymmetric Editorial Column */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#C7D5A5]/70" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#C7D5A5]">
                Indonesian Coffee &amp; Ceremonial Matcha
              </span>
            </motion.div>

            <motion.h1
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: EASE_EDITORIAL }}
              className="font-serif text-[clamp(3.15rem,7.2vw,6.15rem)] font-normal leading-[0.94] tracking-[-0.02em] text-[#F5F1E8]"
            >
              Coffee,{" "}
              <span className="italic text-[#C7D5A5] font-normal">Matcha</span>
              <br />
              &amp; Moments.
            </motion.h1>

            <motion.p
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: EASE_EDITORIAL }}
              className="mt-7 max-w-md text-base leading-relaxed text-[#E9E1D2]/80 sm:text-[1.0625rem]"
            >
              A quiet botanical sanctuary where Indonesian single-origin beans
              meet first-harvest Uji matcha—poured slowly for unhurried
              conversations and grounded mornings.
            </motion.p>

            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: EASE_EDITORIAL }}
              className="mt-9 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <a
                href="#menu"
                className="group inline-flex items-center gap-3 bg-[#E9E1D2] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-[#172820] transition-colors duration-300 hover:bg-[#C7D5A5]"
              >
                <span>Explore Menu</span>
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#story"
                className="group inline-flex items-center gap-2 border-b border-[#E9E1D2]/30 pb-1.5 text-xs uppercase tracking-[0.22em] text-[#F5F1E8]/90 transition-colors duration-300 hover:border-[#C7D5A5] hover:text-[#C7D5A5]"
              >
                <span>Our Story</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Subtle origin & craft metadata */}
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.42, ease: EASE_EDITORIAL }}
              className="mt-12 hidden border-t border-[#E9E1D2]/12 pt-5 sm:flex items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-[#B8C2B5]"
            >
              <span>Aceh Gayo &amp; West Java</span>
              <span className="h-1 w-1 rounded-full bg-[#C7D5A5]/60" />
              <span>First-Harvest Uji</span>
              <span className="h-1 w-1 rounded-full bg-[#C7D5A5]/60" />
              <span>Small-Batch Daily</span>
            </motion.div>
          </div>

          {/* Right Dominant Hero Photography */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-end">
            <motion.div
              initial={
                prefersReduced
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.97, y: 18 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.12, ease: EASE_EDITORIAL }}
              className="relative w-full max-w-[580px] lg:ml-auto"
            >
              {/* Subtle organic offset border frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-3 -right-3 bottom-4 left-4 border border-[#C8B48A]/30 hidden sm:block"
              />

              <div className="relative aspect-[3/4] w-full max-h-[72svh] lg:max-h-[78svh] overflow-hidden bg-[#253D30]">
                <Image
                  src="/images/hero-beverage.jpg"
                  alt="DIPKOP signature iced ceremonial matcha oat latte and Indonesian iced espresso latte in dappled botanical light"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1023px) 100vw, 46vw"
                  className="object-cover object-center transition-transform duration-[1800ms] ease-out hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172820]/70 via-transparent to-transparent"
                />

                {/* Editorial caption overlay */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#F5F1E8]">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.26em] text-[#C7D5A5]">
                      Featured Pairings
                    </p>
                    <p className="mt-1 font-serif text-lg italic text-[#E9E1D2]">
                      Uji Matcha Oat &amp; House Espresso
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#E9E1D2]/70">
                    01 / 26
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 mx-auto mt-8 hidden w-full max-w-[1440px] items-center justify-between px-6 sm:flex sm:px-10 lg:mt-4 lg:px-14"
      >
        <a
          href="#story"
          className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#B8C2B5] transition-colors hover:text-[#C7D5A5]"
        >
          <span className="relative flex h-6 w-px overflow-hidden bg-[#E9E1D2]/25">
            <motion.span
              animate={
                prefersReduced ? undefined : { y: ["-100%", "100%"] }
              }
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              }}
              className="h-3 w-full bg-[#C7D5A5]"
            />
          </span>
          <span>Scroll to explore</span>
        </a>

        <span className="text-[11px] uppercase tracking-[0.26em] text-[#B8C2B5]/70">
          Est. Indonesia
        </span>
      </motion.div>
    </section>
  );
}
