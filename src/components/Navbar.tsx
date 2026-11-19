"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { DipkopLogo } from "./DipkopLogo";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 48);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const sectionIds = ["home", "story", "menu", "gallery", "location"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          isScrolled
            ? "bg-[#172820]/92 backdrop-blur-md border-[#E9E1D2]/22 py-3.5 shadow-[0_8px_30px_rgba(11,19,15,0.28)]"
            : "bg-[#172820]/35 backdrop-blur-[2px] border-[#E9E1D2]/22 py-4"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">
          <a
            href="#home"
            aria-label="DIPKOP Coffee & Matcha Home"
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7D5A5]"
          >
            <DipkopLogo />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                  className={`group relative py-1.5 text-xs uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7D5A5] ${
                    isActive
                      ? "text-[#C7D5A5]"
                      : "text-[#E9E1D2]/85 hover:text-[#C7D5A5]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="navbar-active-line"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-x-0 bottom-0 h-[1.5px] bg-[#C7D5A5]"
                    />
                  ) : (
                    <span className="absolute inset-x-0 bottom-0 h-[1.5px] origin-left scale-x-0 bg-[#C7D5A5]/60 transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center lg:flex">
            <a
              href="#location"
              className="group inline-flex items-center gap-2 border border-[#E9E1D2]/30 bg-[#172820]/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-[#F5F1E8] transition-all duration-300 hover:border-[#C7D5A5] hover:bg-[#C7D5A5] hover:text-[#172820] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7D5A5]"
            >
              <span>Visit Us</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#E9E1D2]/20 text-[#F5F1E8] transition-colors hover:border-[#C7D5A5] hover:text-[#C7D5A5] lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Editorial Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#172820] px-6 py-6 sm:px-10 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <DipkopLogo showSubtext />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center border border-[#E9E1D2]/20 text-[#F5F1E8] transition-colors hover:border-[#C7D5A5] hover:text-[#C7D5A5]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile Links" className="my-auto flex flex-col gap-5">
              {NAV_LINKS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  className="font-serif text-4xl font-normal tracking-wide text-[#F5F1E8] transition-colors hover:text-[#C7D5A5]"
                >
                  <span className="mr-4 font-sans text-xs tracking-[0.2em] text-[#C7D5A5]/70">
                    0{idx + 1}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="border-t border-[#E9E1D2]/15 pt-6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B8C2B5]">
                Indonesian Coffee &amp; Matcha
              </span>
              <a
                href="#location"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 bg-[#C7D5A5] px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#172820]"
              >
                Visit Us
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
