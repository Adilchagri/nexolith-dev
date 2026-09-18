"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function ProjectsShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { language, isRTL } = useLanguage();
  const t = translations[language].projects;

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projets" className="relative py-24 bg-[#030810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#8C98A8] uppercase mb-2">
              {t.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight whitespace-pre-line">
              {t.heading}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:text-right">
            <p className="text-xs sm:text-sm text-[#8C98A8] max-w-sm font-sans leading-relaxed">
              {t.desc}
            </p>

            <Link
              href="#configurateur"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 text-xs font-sans font-medium transition-all shrink-0 self-start sm:self-auto"
            >
              <span>{t.see_all}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-4 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-[300px] sm:w-[340px] md:w-[380px] shrink-0 snap-start rounded-2xl bg-[#06121D]/95 border border-white/10 hover:border-[#2ECC71]/40 transition-all duration-300 shadow-xl flex flex-col justify-between p-5 group"
              >
                <div>
                  {/* Top Text Header */}
                  <div className="mb-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <h3 className="text-lg font-display font-bold text-white group-hover:text-[#5CFFD0] transition-colors flex items-center gap-1.5">
                        <span>{project.title}</span>
                        <ArrowRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#5CFFD0] ${isRTL ? "rotate-180" : "-rotate-45"}`} />
                      </h3>
                    </a>
                    <p className="text-xs text-[#8C98A8] mt-0.5">
                      {language === "en" ? project.subtitle_en || project.subtitle : project.subtitle}
                    </p>
                  </div>

                  {/* Thumbnail Preview */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/40 border border-white/5 mb-4 group-hover:border-white/15 transition-all cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#8C98A8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link matching mockup: Voir le projet -> */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-white/90 hover:text-[#5CFFD0] transition-colors"
                  >
                    <span>{t.view_project}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-[#8C98A8] hover:text-[#2ECC71] flex items-center gap-1"
                    title="Ouvrir le site live dans un nouvel onglet"
                  >
                    <span>{t.live}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Navigation Button */}
          <div className="hidden sm:flex items-center gap-2 justify-end mt-4">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-white border border-white/10 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-white border border-white/10 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}