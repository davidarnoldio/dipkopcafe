"use client";

import React from "react";
import Image from "next/image";
import { ParallaxFrame, Reveal, HairlineRule } from "./MotionPrimitives";

const STORY_PILLARS = [
  {
    label: "01 · Origin",
    title: "Indonesian Terroir",
    detail: "Direct relationships with growers across Aceh Gayo, West Java, and Flores.",
  },
  {
    label: "02 · Matcha",
    title: "First-Harvest Uji",
    detail: "Stone-milled shade-grown leaves whisked to order in small stoneware bowls.",
  },
  {
    label: "03 · Space",
    title: "Botanical Calm",
    detail: "Warm teak, textured plaster, and living foliage shaped for unhurried hours.",
  },
];

export function BrandStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="relative bg-[#172820] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Asymmetric Large Interior Photography */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative">
                <ParallaxFrame
                  offset={24}
                  className="aspect-[4/3] sm:aspect-[16/11] w-full bg-[#253D30]"
                >
                  <Image
                    src="/images/brand-story.jpg"
                    alt="DIPKOP dark teakwood coffee bar with forest green plaster walls and morning sunlight"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1023px) 100vw, 56vw"
                    className="object-cover scale-[1.08]"
                  />
                </ParallaxFrame>
                <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#B8C2B5]">
                  <span>The Espresso &amp; Matcha Bar</span>
                  <span>Morning Light</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Editorial Storytelling Copy */}
          <div className="lg:col-span-5 lg:pt-6">
            <Reveal delay={0.1}>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#C7D5A5]">
                Our Story
              </p>
              <h2
                id="story-heading"
                className="mt-4 font-serif text-4xl font-normal leading-[1.06] tracking-[-0.01em] text-[#F5F1E8] sm:text-5xl lg:text-[3.4rem]"
              >
                Slow mornings,
                <br />
                <span className="italic text-[#E9E1D2]">rooted in ritual.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-7 space-y-5 text-[15px] leading-[1.75] text-[#E9E1D2]/80 sm:text-base">
                <p>
                  DIPKOP began with a simple idea: a neighborhood coffee house
                  doesn’t have to rush. Born in Indonesia, we pair the depth of
                  local volcanic-soil coffee with the quiet precision of
                  Japanese ceremonial matcha.
                </p>
                <p>
                  Whether you stop by for a hand-whisked bowl of Uji matcha
                  before the city wakes, or linger over a single-origin pour
                  under the leaves, every cup is prepared to give you a moment
                  back.
                </p>
              </div>
            </Reveal>

            <div className="mt-10">
              <HairlineRule />
              <div className="divide-y divide-[#E9E1D2]/12">
                {STORY_PILLARS.map((pillar, index) => (
                  <Reveal key={pillar.label} delay={0.1 + index * 0.08} y={14}>
                    <div className="py-5 grid grid-cols-1 gap-1 sm:grid-cols-12 sm:gap-4 items-baseline">
                      <span className="sm:col-span-4 text-[11px] uppercase tracking-[0.2em] text-[#C7D5A5]">
                        {pillar.label}
                      </span>
                      <div className="sm:col-span-8">
                        <h3 className="font-serif text-xl text-[#F5F1E8]">
                          {pillar.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#B8C2B5]">
                          {pillar.detail}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
