"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function ValuePillars() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].pillars;

  const pillars = [
    {
      icon: Zap,
      title: t.p1_title,
      description: t.p1_desc,
    },
    {
      icon: ShieldCheck,
      title: t.p2_title,
      description: t.p2_desc,
    },
    {
      icon: Users,
      title: t.p3_title,
      description: t.p3_desc,
    },
  ];

  return (
    <section className="relative z-20 py-12 bg-[#030810] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 3 Pillars */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-[#5CFFD0] shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-[#5CFFD0]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#8C98A8] mt-0.5 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Signature Quote matching mockup */}
          <div className={`lg:col-span-4 ${isRTL ? "lg:text-left" : "lg:text-right"}`}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <div className="font-serif italic text-xl sm:text-2xl text-white font-light leading-snug whitespace-pre-line">
                {t.quote}
              </div>
              <div className={`h-[2px] w-16 bg-[#2ECC71] mt-2 rounded-full shadow-[0_0_8px_#2ECC71] ${isRTL ? "mr-auto" : "ml-auto"}`} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}