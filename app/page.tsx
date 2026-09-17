import React from "react";
import { Hero } from "@/components/sections/Hero";
import { StatsRibbon } from "@/components/sections/StatsRibbon";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { ValuePillars } from "@/components/sections/ValuePillars";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ProjectConfigurator } from "@/components/sections/ProjectConfigurator";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#040910] text-[#F5F7FA]">
      {/* 01: Hero Section (Split Composition matching exact mockup) */}
      <Hero />

      {/* 02: Stats Ribbon (Unified 5-stats pill matching mockup) */}
      <StatsRibbon />

      {/* 03: Projects Showcase (5 projects carousel matching mockup) */}
      <ProjectsShowcase />

      {/* 04: Value Pillars & Quote ("Better Products A Brighter Tomorrow.") */}
      <ValuePillars />

      {/* 05: Engineering Process (Notre Processus) */}
      <ProcessSection />

      {/* 06: Services & Capabilities */}
      <ServicesSection />

      {/* 07: Team (Adil & Amine) */}
      <TeamSection />

      {/* 08: Client Conversion Configurator */}
      <ProjectConfigurator />
    </main>
  );
}