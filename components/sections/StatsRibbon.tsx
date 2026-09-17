"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Monitor, Smartphone, Cpu, Infinity as InfinityIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function StatsRibbon() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].stats;

  const stats = [
    {
      icon: Layers,
      value: t.stat1_val,
      label: t.stat1_lbl,
    },
    {
      icon: Monitor,
      value: t.stat2_val,
      label: t.stat2_lbl,
    },
    {
      icon: Smartphone,
      value: t.stat3_val,
      label: t.stat3_lbl,
    },
    {
      icon: Cpu,
      value: t.stat4_val,
      label: t.stat4_lbl,
    },
    {
      icon: InfinityIcon,
      value: t.stat5_val,
      label: t.stat5_lbl,
    },
  ];

  return (
    <section className="relative z-20 py-8 bg-[#030810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-[#06111C]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.6)]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center divide-y sm:divide-y-0 lg:divide-x divide-white/[0.08]">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 ${
                    idx > 0 ? (isRTL ? "pt-4 sm:pt-0 lg:pr-6" : "pt-4 sm:pt-0 lg:pl-6") : ""
                  }`}
                >
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[#5CFFD0] shrink-0">
                    <Icon className="w-5 h-5 text-[#5CFFD0]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-none">
                      {item.value}
                    </div>
                    <div className="text-xs text-[#8C98A8] mt-1 font-sans">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}