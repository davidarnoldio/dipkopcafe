"use client";

import React from "react";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { LOCATION_INFO } from "@/data/dipkop";
import { Reveal, HairlineRule } from "./MotionPrimitives";

export function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="relative bg-[#13221B] py-24 sm:py-32 lg:py-36 border-t border-[#E9E1D2]/10"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-stretch">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#C7D5A5]">
                  Visit DIPKOP
                </p>
                <h2
                  id="location-heading"
                  className="mt-4 font-serif text-4xl font-normal leading-[1.06] text-[#F5F1E8] sm:text-5xl"
                >
                  Find your table{" "}
                  <span className="italic text-[#C7D5A5]">under the leaves.</span>
                </h2>
              </Reveal>

              <div className="mt-10 space-y-7">
                <HairlineRule />

                <Reveal delay={0.08}>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#C7D5A5]" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#B8C2B5]">
                        Address
                      </p>
                      <p className="mt-1.5 font-serif text-2xl text-[#F5F1E8]">
                        {LOCATION_INFO.addressLine1}
                      </p>
                      <p className="text-sm text-[#E9E1D2]/80">
                        {LOCATION_INFO.addressLine2}
                      </p>
                      <p className="mt-1 text-xs italic text-[#B8C2B5]/80">
                        {LOCATION_INFO.neighborhoodNote}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.14}>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-4 w-4 shrink-0 text-[#C7D5A5]" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#B8C2B5]">
                        Opening Hours
                      </p>
                      <dl className="mt-2 space-y-1.5 text-sm">
                        {LOCATION_INFO.hours.map((row) => (
                          <div
                            key={row.days}
                            className="flex flex-wrap gap-x-6 gap-y-0.5"
                          >
                            <dt className="text-[#E9E1D2]/90 min-w-[140px]">
                              {row.days}
                            </dt>
                            <dd className="text-[#C7D5A5]">{row.time}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex items-start gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-[#C7D5A5]"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#B8C2B5]">
                        Journal &amp; Updates
                      </p>
                      <a
                        href={LOCATION_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 font-serif text-2xl text-[#F5F1E8] transition-colors hover:text-[#C7D5A5]"
                      >
                        <span>{LOCATION_INFO.instagramHandle}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.24}>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-4 w-4 shrink-0 text-[#C7D5A5]" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#B8C2B5]">
                        WhatsApp &amp; Reservations
                      </p>
                      <a
                        href={LOCATION_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 font-serif text-2xl text-[#F5F1E8] transition-colors hover:text-[#C7D5A5]"
                      >
                        <span>{LOCATION_INFO.phoneDisplay}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={LOCATION_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#E9E1D2] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-[#172820] transition-colors duration-300 hover:bg-[#C7D5A5]"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={LOCATION_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 border border-[#E9E1D2]/30 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-[#F5F1E8] transition-colors duration-300 hover:border-[#C7D5A5] hover:text-[#C7D5A5]"
                >
                  <span>WhatsApp Us</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Google Maps Embed */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12} className="h-full">
              <div className="relative h-[380px] sm:h-[460px] lg:h-full min-h-[420px] w-full overflow-hidden border border-[#E9E1D2]/15 bg-[#253D30]">
                <iframe
                  title="DIPKOP Coffee & Matcha Location Map"
                  src={LOCATION_INFO.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0 grayscale contrast-110 invert-[0.9] hue-rotate-180 opacity-85 transition-opacity duration-500 hover:opacity-100"
                />
                <div className="pointer-events-none absolute bottom-4 left-4 bg-[#172820]/90 px-4 py-2 backdrop-blur-sm border border-[#E9E1D2]/15">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#C7D5A5]">
                    Jl. Kembang Beji No. 56 · Depok
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
