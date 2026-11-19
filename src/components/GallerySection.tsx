"use client";

import React from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/dipkop";
import { Reveal } from "./MotionPrimitives";

const SPAN_CLASSES = [
  "lg:col-span-7 aspect-[16/10]",
  "lg:col-span-5 aspect-[4/5]",
  "lg:col-span-4 aspect-[4/5]",
  "lg:col-span-4 aspect-square lg:mt-14",
  "lg:col-span-4 aspect-[4/3]",
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative bg-[#F5F0E6] border-t border-[#1E3B2F]/12 py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col justify-between gap-6 border-b border-[#1E3B2F]/15 pb-10 sm:flex-row sm:items-end">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#5B684A]">
              Visual Diary
            </p>
            <h2
              id="gallery-heading"
              className="mt-4 font-serif text-4xl font-normal leading-tight text-[#1E3B2F] sm:text-5xl lg:text-[3.5rem]"
            >
              Frames from{" "}
              <span className="italic text-[#7F8C6A]">DIPKOP.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-[#4A5D52]">
              A quiet study of morning shadows, ceramic textures, and daily
              pours.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric Magazine Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {GALLERY_ITEMS.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={0.05 * idx}
              className={SPAN_CLASSES[idx] ?? "lg:col-span-4 aspect-[4/5]"}
            >
              <figure className="group flex h-full flex-col">
                <div className="relative h-full min-h-[280px] w-full overflow-hidden bg-[#1E3B2F]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 45vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172820]/30 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-35"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs">
                  <span className="font-serif text-base italic text-[#1E3B2F]">
                    {item.caption}
                  </span>
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8C5D3B]">
                    {item.issueNumber}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
