"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function TeamSection() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].team;

  return (
    <section id="notre-equipe" className="relative py-28 bg-[#040A12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#2ECC71] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]" />
            {t.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            {t.title}
          </h2>
          <div className="font-serif italic text-xl sm:text-2xl text-[#5CFFD0] mt-3">
            {t.quote}
          </div>
          <p className="mt-4 text-xs sm:text-sm text-[#8C98A8] font-sans max-w-xl">
            {t.desc}
          </p>
        </div>

        {/* Team Members Grid (Adil & Amine) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group rounded-3xl p-8 bg-[#06121E]/95 border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  {/* Geometric Avatar */}
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-lg group-hover:scale-105 transition-transform">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono tracking-wider text-[#5CFFD0] font-semibold uppercase">
                    {member.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                    {member.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono text-[#1769FF] font-medium">
                    {member.role}
                  </div>
                  <p className="text-xs sm:text-sm text-[#8C98A8] leading-relaxed pt-3 font-sans">
                    {member.bio}
                  </p>
                </div>

                {/* Specialties */}
                <div className="mt-6 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#8C98A8]">
                    {language === "fr" ? "Domaines d'Expertise" : language === "en" ? "Areas of Expertise" : "مجالات التخصص"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.disciplines.map((disc) => (
                      <span
                        key={disc}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-white/90"
                      >
                        {disc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Philosophy Quote */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="font-serif italic text-xs text-[#5CFFD0]/90 leading-relaxed">
                  &ldquo;{member.philosophy}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collective Philosophy Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 text-xs font-mono text-[#8C98A8]">
            <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
            <span>{t.motto}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
