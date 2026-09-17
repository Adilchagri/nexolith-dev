"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id);
  const { language, isRTL } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="services" className="relative py-28 bg-[#030810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#5CFFD0] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CFFD0]" />
            {t.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            {t.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8C98A8] font-sans">
            {t.desc}
          </p>
        </div>

        {/* Editorial Numbered Rows */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {services.map((service, idx) => {
            const isCurrent = activeService === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveService(service.id)}
                className={`py-10 transition-all duration-300 ${
                  isCurrent ? "bg-white/[0.02]" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Number & Main Title */}
                  <div className="lg:col-span-4 flex items-baseline gap-6">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-[#8C98A8]/30 font-mono">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#5CFFD0] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-mono text-[#5CFFD0] mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-xs sm:text-sm text-[#8C98A8] leading-relaxed font-sans">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-white/90">
                          <Check className="w-3.5 h-3.5 text-[#2ECC71] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stack & Action */}
                  <div className={`lg:col-span-3 flex flex-col justify-between h-full space-y-4 ${isRTL ? "lg:pr-6" : "lg:pl-6"}`}>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[10px] font-mono text-[#8C98A8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/#configurateur"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-[#5CFFD0] transition-colors pt-2"
                    >
                      <span>{t.cta}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 text-[#5CFFD0] ${isRTL ? "rotate-90" : ""}`} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}