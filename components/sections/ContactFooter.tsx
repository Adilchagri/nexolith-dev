"use client";

import React from "react";
import Link from "next/link";
import { NexolithLogo } from "@/components/brand/NexolithLogo";
import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function ContactFooter() {
  const currentYear = new Date().getFullYear();
  const { language, isRTL } = useLanguage();
  const t = translations[language].footer;
  const navT = translations[language].nav;

  const contactEmail = "contact@nexolith.dev";
  const githubUrl = "https://github.com/nexolith-dev";
  const linkedinUrl = "https://linkedin.com/company/nexolith-dev";
  const whatsappUrl = "https://wa.me/212000000000";

  return (
    <footer id="contact" className="relative bg-[#03070C] text-nexolith-white pt-24 pb-12 border-t border-white/10 overflow-hidden">
      {/* Glow background accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-20 blur-[140px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, #1769FF 0%, #2ECC71 40%, transparent 80%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Final CTA Banner */}
        <div className="pb-20 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-nexolith-mint uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-nexolith-mint" />
                {t.tag}
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tightest leading-tight">
                {t.title.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {idx === 0 ? (
                      <span>{line}</span>
                    ) : (
                      <span className="block gradient-text-blue-emerald">{line}</span>
                    )}
                  </React.Fragment>
                ))}
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-nexolith-white hover:bg-white text-nexolith-dark font-display font-bold text-xs tracking-wider uppercase transition-all shadow-xl hover:scale-105"
              >
                <Mail className="w-4 h-4 text-nexolith-blue" />
                <span>{t.cta_email}</span>
              </a>

              <Link
                href="/#configurateur"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 font-mono text-xs tracking-wider uppercase transition-all"
              >
                <span>{t.cta_config}</span>
                <ArrowUpRight className={`w-4 h-4 ${isRTL ? "rotate-[-90deg]" : ""}`} />
              </Link>
            </div>
          </div>
        </div>

        {/* Studio Details & Navigation Columns */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <NexolithLogo size={42} showText={true} glow={true} />
            <p className="font-serif italic text-sm text-nexolith-mint/90 max-w-sm leading-relaxed">
              {t.quote}
            </p>
            <p className="text-xs text-nexolith-muted font-sans max-w-sm leading-relaxed">
              {t.desc}
            </p>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-nexolith-white font-semibold">
              {t.channels}
            </div>
            <ul className="space-y-2 text-xs font-mono text-nexolith-muted">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-nexolith-mint transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-nexolith-blue" />
                  <span>{contactEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nexolith-mint transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-nexolith-blue" />
                  <span>LinkedIn / nexolith-dev</span>
                </a>
              </li>
              <li>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nexolith-mint transition-colors flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-nexolith-emerald" />
                  <span>GitHub / nexolith-dev</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nexolith-mint transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-nexolith-emerald" />
                  <span>WhatsApp Business</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-nexolith-white font-semibold">
              {t.architecture}
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-nexolith-muted">
              <Link href="/#hero" className="hover:text-white transition-colors">
                {isRTL ? "◂" : "↳"} {navT.home}
              </Link>
              <Link href="/#projets" className="hover:text-white transition-colors">
                {isRTL ? "◂" : "↳"} {navT.projects}
              </Link>
              <Link href="/#services" className="hover:text-white transition-colors">
                {isRTL ? "◂" : "↳"} {navT.services}
              </Link>
              <Link href="/#notre-equipe" className="hover:text-white transition-colors">
                {isRTL ? "◂" : "↳"} {navT.team}
              </Link>
              <Link href="/#configurateur" className="hover:text-white transition-colors">
                {isRTL ? "◂" : "↳"} {t.cta_config}
              </Link>
              <Link href="/#contact" className="hover:text-white transition-colors">
                {isRTL ? "◂" : "↳"} {navT.contact}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-nexolith-muted">
          <div className="flex items-center gap-2">
            <span>© {currentYear} NEXOLITH DEV. {t.rights}</span>
          </div>

          <div className="text-[11px] tracking-widest text-nexolith-white/80 font-bold uppercase">
            {t.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}
