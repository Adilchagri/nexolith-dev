"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NexolithLogo } from "@/components/brand/NexolithLogo";
import { ArrowRight, Moon, Menu, X } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: "/#hero", active: true },
    { label: t.projects, href: "/#projets" },
    { label: t.services, href: "/#services" },
    { label: t.about, href: "/#notre-equipe" },
    { label: t.team, href: "/#notre-equipe" },
    { label: t.contact, href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#040A12]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90 group shrink-0"
          >
            <NexolithLogo size={36} showText={true} glow={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-sans text-[#8C98A8]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors relative py-1 hover:text-white ${
                  link.active ? "text-white font-medium" : ""
                }`}
              >
                {link.label}
                {link.active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#2ECC71] rounded-full shadow-[0_0_8px_#2ECC71]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Area: Language Switcher + CTA + Palette */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center p-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono">
              {(["fr", "en", "ar"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    language === lang
                      ? "bg-[#2ECC71] text-black font-bold shadow-md"
                      : "text-[#8C98A8] hover:text-white"
                  }`}
                  aria-label={`Switch language to ${lang.toUpperCase()}`}
                >
                  {lang === "fr" ? "FR" : lang === "en" ? "EN" : "عربي"}
                </button>
              ))}
            </div>

            {/* CTA Pill button */}
            <Link
              href="/#configurateur"
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#07191E] hover:bg-[#0A262D] text-[#5CFFD0] hover:text-white border border-[#2ECC71]/40 hover:border-[#2ECC71] text-xs font-sans tracking-wide transition-all shadow-[0_0_15px_rgba(46,204,113,0.2)] hover:shadow-[0_0_20px_rgba(46,204,113,0.4)]"
            >
              <span>{t.cta}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
            </Link>

            {/* Dark Mode / Command Palette Icon */}
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-[#8C98A8] hover:text-white border border-white/10 transition-colors"
              title="Recherche (Ctrl+K)"
              aria-label="Recherche et raccourcis"
            >
              <Moon className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/[0.04] text-white border border-white/10"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#050B12]/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-[#8C98A8] uppercase">Langue / Language</span>
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono">
                {(["fr", "en", "ar"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setMobileOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full transition-all ${
                      language === lang
                        ? "bg-[#2ECC71] text-black font-bold"
                        : "text-[#8C98A8]"
                    }`}
                  >
                    {lang === "fr" ? "Français" : lang === "en" ? "English" : "العربية"}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-display font-medium text-white hover:text-[#5CFFD0] transition-colors py-1.5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className={`w-4 h-4 text-[#8C98A8] ${isRTL ? "rotate-180" : ""}`} />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <Link
              href="/#configurateur"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0D3B2F] text-[#5CFFD0] border border-[#2ECC71]/50 text-sm font-medium shadow-xl"
            >
              <span>{t.cta}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
