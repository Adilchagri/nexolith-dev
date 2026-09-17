"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { NexolithLogo } from "@/components/brand/NexolithLogo";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language, isRTL } = useLanguage();
  const t = translations[language].hero;

  // Subtle 3D tilt responding to mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), {
    damping: 25,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), {
    damping: 25,
    stiffness: 150,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#030810]"
    >
      {/* 1. Atmospheric Mountain Landscape Background (Full Section) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/brand/hero-landscape.jpg"
          alt="Dark Mountain Cinematic Landscape"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
          sizes="100vw"
        />

        {/* Cinematic atmospheric depth vignettes & cyan glows */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030810] via-[#030810]/75 to-[#030810]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030810] via-transparent to-[#030810]/60" />
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[400px] opacity-25 blur-[120px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #2ECC71 0%, #1769FF 50%, transparent 80%)",
          }}
        />
      </div>

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-0.5"
            >
              <div className="text-[11px] font-mono tracking-[0.25em] text-[#8C98A8] uppercase">
                {t.eyebrow_1}
              </div>
              <div className="text-[11px] font-mono tracking-[0.25em] text-[#8C98A8] uppercase">
                {t.eyebrow_2}
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-none">
                <span className="text-white">{t.title_main}</span>{" "}
                <span className="text-[#2ECC71] drop-shadow-[0_0_30px_rgba(46,204,113,0.55)]">
                  {t.title_accent}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-display text-white/95 font-medium mt-3 tracking-tight">
                {t.subtitle}
              </h2>
            </motion.div>

            {/* Philosophy Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`font-serif italic text-lg sm:text-xl text-white/90 font-light leading-relaxed border-[#2ECC71]/40 ${
                isRTL ? "border-r-2 pr-4" : "border-l-2 pl-4"
              }`}
            >
              {t.quote}
            </motion.blockquote>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm text-[#8C98A8] max-w-lg leading-relaxed font-sans"
            >
              {t.desc}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-5"
            >
              {/* Primary CTA */}
              <Link
                href="/#projets"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0E3D31] hover:bg-[#135242] text-white border border-[#2ECC71]/50 text-xs sm:text-sm font-sans font-medium tracking-wide transition-all shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:shadow-[0_0_35px_rgba(46,204,113,0.55)] active:scale-95 group"
              >
                <span>{t.cta_primary}</span>
                <ArrowRight className={`w-4 h-4 text-[#5CFFD0] transition-transform ${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/#notre-equipe"
                className="inline-flex items-center gap-3 text-xs sm:text-sm text-white/90 hover:text-white group transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-white/[0.12] transition-all group-hover:scale-105">
                  <Play className={`w-3.5 h-3.5 fill-white text-white ${isRTL ? "mr-0.5 rotate-180" : "ml-0.5"}`} />
                </div>
                <span className="font-sans">{t.cta_secondary}</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 3D Faceted Logo Centerpiece & Pedestal Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[460px]"
          >
            {/* Ambient Cyan Ground Glow */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-[#1769FF]/20 blur-[90px] pointer-events-none" />
            <div className="absolute w-[280px] h-[280px] rounded-full bg-[#2ECC71]/20 blur-[70px] pointer-events-none" />

            {/* Vertical Branding on the side */}
            <div className={`hidden md:block absolute top-4 text-[10px] font-mono tracking-widest text-[#8C98A8]/70 uppercase leading-relaxed ${isRTL ? "left-0 text-left" : "right-0 text-right"}`}>
              <div className="text-white font-bold">{t.more_than_code}</div>
              <div className="mt-2 text-[9px] text-[#5CFFD0]/80">{t.pillars_vertical}</div>
            </div>

            {/* 3D Tilting Logo Assembly */}
            <motion.div
              style={{ rotateX, rotateY, perspective: 1000 }}
              className="relative flex flex-col items-center cursor-default z-10"
            >
              {/* Massive 3D Faceted NEXOLITH Symbol */}
              <div className="relative p-8 group">
                <NexolithLogo size={180} glow={true} />
              </div>

              {/* Glowing Pedestal Base with Concentric Rings */}
              <div className="relative -mt-4 flex flex-col items-center">
                {/* Upper Platform Rim */}
                <div className="w-64 sm:w-80 h-10 rounded-full border-2 border-[#5CFFD0]/60 bg-gradient-to-b from-[#081F26] to-[#040E14] shadow-[0_0_30px_rgba(92,255,208,0.4)] flex items-center justify-center relative overflow-hidden">
                  <div className="w-52 sm:w-64 h-5 rounded-full border border-[#1769FF]/50 bg-[#02070D]" />
                  {/* Glowing neon center point */}
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[#5CFFD0] shadow-[0_0_12px_#5CFFD0] animate-pulse" />
                </div>

                {/* Pedestal Stem with Inscription */}
                <div className="w-48 sm:w-56 py-3 px-4 rounded-xl bg-gradient-to-b from-[#071724] to-[#030910] border border-white/10 shadow-2xl mt-1 text-center space-y-1">
                  <div className="font-display font-extrabold tracking-widest text-white text-sm sm:text-base">
                    NEXOLITH <span className="text-[#2ECC71]">DEV</span>
                  </div>
                  <div className="text-[8px] sm:text-[9px] font-mono tracking-[0.3em] text-[#8C98A8] uppercase">
                    C O D E &nbsp;×&nbsp; I D E A S &nbsp;×&nbsp; I M P A C T
                  </div>
                  <div className="pt-1 border-t border-white/5 text-[9px] font-mono tracking-wider text-[#5CFFD0]">
                    {t.built_by}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Handwritten Mint Accent "Ideas into Reality" */}
            <div className={`mt-6 ${isRTL ? "self-start pl-8" : "self-end pr-8"}`}>
              <div className="font-serif italic text-xl sm:text-2xl text-[#5CFFD0] drop-shadow-[0_0_15px_rgba(92,255,208,0.6)]">
                {t.ideas_into_reality}
              </div>
              <svg width="120" height="12" viewBox="0 0 120 12" fill="none" className="mt-1">
                <path d="M 4 8 Q 60 2 116 7" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}