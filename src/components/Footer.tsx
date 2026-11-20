import React from "react";
import { ArrowUpRight } from "lucide-react";
import { LOCATION_INFO } from "@/data/dipkop";
import { DipkopLogo } from "./DipkopLogo";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function Footer() {
  return (
    <footer className="bg-[#F5F0E6] border-t border-[#1E3B2F]/18 py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand Statement */}
          <div className="md:col-span-5">
            <DipkopLogo showSubtext />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#2F443A]">
              An Indonesian coffee and ceremonial matcha house built around
              botanical calm, natural textures, and unhurried daily rituals.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5B684A]">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[#1E3B2F]/85 transition-colors hover:text-[#8C5D3B]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Social */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5B684A]">
              Connect &amp; Visit
            </p>
            <p className="mt-4 text-sm font-medium text-[#1E3B2F]">
              {LOCATION_INFO.addressLine1}
            </p>
            <p className="text-sm text-[#4A5D52]">
              {LOCATION_INFO.addressLine2}
            </p>
            <p className="mt-2 text-sm font-semibold text-[#8C5D3B]">
              {LOCATION_INFO.phoneDisplay}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href={LOCATION_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#1E3B2F] transition-colors hover:text-[#8C5D3B]"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={LOCATION_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#1E3B2F] transition-colors hover:text-[#8C5D3B]"
              >
                <span>Instagram</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={LOCATION_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border-b border-[#1E3B2F]/45 pb-0.5 text-xs font-medium uppercase tracking-[0.2em] text-[#1E3B2F] transition-colors hover:border-[#8C5D3B] hover:text-[#8C5D3B]"
              >
                <span>Google Maps</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#1E3B2F]/12 pt-8 text-xs text-[#4A5D52] sm:flex-row sm:items-center">
          <p>© 2026 DIPKOP Coffee &amp; Matcha. All rights reserved.</p>
          <p className="tracking-wide">
            Crafted with Indonesian coffee &amp; ceremonial Uji matcha.
          </p>
        </div>
      </div>
    </footer>
  );
}
