"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Compass, Code2, ShieldCheck, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function ProcessSection() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].process;

  const steps = [
    {
      number: "01",
      title: t.s1_title,
      description: t.s1_desc,
      icon: Lightbulb,
    },
    {
      number: "02",
      title: t.s2_title,
      description: t.s2_desc,
      icon: Compass,
    },
    {
      number: "03",
      title: t.s3_title,
      description: t.s3_desc,
      icon: Code2,
    },
    {
      number: "04",
      title: t.s4_title,
      description: t.s4_desc,
      icon: ShieldCheck,
    },
    {
      number: "05",
      title: t.s5_title,
      description: t.s5_desc,
      icon: Rocket,
    },
  ];

  return (
    <section className="relative py-28 bg-[#06101B] border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (No AI grid background, pure clean contrast) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#2ECC71] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]" />
            {t.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            {t.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8C98A8] font-sans">
            {t.desc}
          </p>

          {/* Sequential chain */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-[#5CFFD0]/90 bg-white/[0.03] px-4 py-2.5 rounded-full border border-white/10 inline-flex">
            {t.flow.map((item, idx) => (
              <React.Fragment key={item}>
                <span className={idx === t.flow.length - 1 ? "text-white font-bold" : ""}>
                  {item}
                </span>
                {idx < t.flow.length - 1 && (
                  <span className="text-[#8C98A8]/60">
                    {isRTL ? "←" : "→"}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl p-6 bg-[#040A12]/95 border border-white/10 hover:border-[#2ECC71]/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-display font-extrabold text-white/30 group-hover:text-[#5CFFD0] transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-white/[0.04] text-[#5CFFD0] border border-white/5">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8C98A8] leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-[#5CFFD0]/70 flex items-center gap-1.5">
                  <span className="text-[#2ECC71] font-bold">{isRTL ? "◂" : "↳"}</span>
                  <span>PHASE {step.number}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
