"use client";

import React from "react";
import Image from "next/image";
import { ParallaxFrame, Reveal } from "./MotionPrimitives";

const SENSORY_NOTES = [
  { label: "Light", value: "Dappled sun through indoor palms" },
  { label: "Craft", value: "92°C bloom & bamboo-whisked Uji" },
  { label: "Material", value: "Charred teak, basalt & stoneware" },
  { label: "Pace", value: "Unhurried mornings to late dusk" },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden bg-[#253D30] py-24 sm:py-32 lg:py-40"
    >
      {/* Soft warm coffee-brown ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[440px] w-[440px] rounded-full bg-[#8C5D3B]/15 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* Editorial Pull Quote Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#C7D5A5]">
                The Atmosphere
              </p>
              <h2
                id="experience-heading"
                className="mt-4 font-serif text-4xl font-normal leading-[1.05] text-[#F5F1E8] sm:text-5xl lg:text-[3.75rem]"
              >
                Designed for quiet{" "}
                <span className="italic text-[#E9E1D2]">presence</span>,
                <br className="hidden sm:block" /> not background noise.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.12}>
              <p className="text-[15px] leading-[1.75] text-[#E9E1D2]/80">
                Every corner of DIPKOP is composed around natural shadow, warm
                timber, and the gentle rhythm of hand-brewed coffee and whisked
                tea.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetric Diptych */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 lg:mt-16">
            <Reveal delay={0.08}>
              <ParallaxFrame
                offset={20}
                className="aspect-[4/5] w-full bg-[#172820]"
              >
                <Image
                  src="/images/experience-craft.jpg"
                  alt="Barista hands pouring water from a matte black gooseneck kettle into a ceramic V60 dripper"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover scale-[1.08]"
                />
              </ParallaxFrame>
              <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#C7D5A5]/85">
                <span>Hand-Poured Precision</span>
                <span>01</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.16}>
              <ParallaxFrame
                offset={28}
                className="aspect-[16/11] w-full bg-[#172820]"
              >
                <Image
                  src="/images/experience-space.jpg"
                  alt="Botanical cafe seating corner with rattan chair, dark stone table, matcha latte, and sunlit tropical leaves"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1023px) 100vw, 56vw"
                  className="object-cover scale-[1.08]"
                />
              </ParallaxFrame>
              <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#C7D5A5]/85">
                <span>The Botanical Corner</span>
                <span>02</span>
              </div>
            </Reveal>

            {/* Sensory Strip */}
            <Reveal delay={0.22}>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#E9E1D2]/15 pt-8 sm:grid-cols-4">
                {SENSORY_NOTES.map((note) => (
                  <div key={note.label}>
                    <p className="text-[10px] uppercase tracking-[0.26em] text-[#C7D5A5]">
                      {note.label}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-[#E9E1D2]/85">
                      {note.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
