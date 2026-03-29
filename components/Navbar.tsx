"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";
import { SlideTabs } from "@/components/ui/slide-tabs";
import Image from "next/image";

const navLinks = [
  { label: "الخدمات", href: "#services" },
  { label: "آلية العمل", href: "#how-it-works" },
  { label: "أعمالنا", href: "#portfolio" },
  { label: "الهندسة والفريق", href: "#about" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "الأسئلة", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20" dir="rtl">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-0 shrink-0">
            <Image
              src="/logo-transparent.svg"
              alt="Qodency Logo"
              width={220}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </a>

          {/* Desktop Links — SlideTabs */}
          <div className="hidden md:block">
            <SlideTabs />
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold font-headline
              bg-[#a8ff78]/10 text-[#a8ff78] border border-[#a8ff78]/30
              hover:bg-[#a8ff78]/20 hover:border-[#a8ff78]/50 hover:shadow-[0_0_20px_rgba(168,255,120,0.15)]
              transition-all duration-300"
          >
            <Rocket className="w-4 h-4" />
            ابدأ مشروعك
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[110]"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="text-white text-3xl font-bold font-headline hover:text-[#a8ff78] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.08 }}
                className="mt-6 px-10 py-4 rounded-full text-lg font-bold font-headline
                  bg-[#a8ff78]/10 text-[#a8ff78] border border-[#a8ff78]/30
                  hover:bg-[#a8ff78]/20 transition-all duration-300"
              >
                ابدأ مشروعك
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
