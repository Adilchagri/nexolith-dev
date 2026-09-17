import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, ExternalLink, Check } from "lucide-react";
import { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return { title: "Projet non trouv� � NEXOLITH DEV" };

  return {
    title: `${project.title} � �tude de Cas | NEXOLITH DEV`,
    description: project.description,
    openGraph: {
      title: `${project.title} � NEXOLITH DEV`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-nexolith-dark text-nexolith-white pt-24 pb-24">
      {/* Top Breadcrumb Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/#projets"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-nexolith-muted hover:text-nexolith-mint transition-colors py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETOUR � L&apos;EXHIBITION DES PROJETS</span>
        </Link>
      </div>

      {/* Hero Exhibition Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-nexolith-blue/20 text-nexolith-mint border border-nexolith-mint/30 text-xs font-mono uppercase">
              {project.category}
            </span>
            <span className="text-white/20">�</span>
            <span className="text-xs font-mono text-nexolith-muted">
              Ann�e {project.year}
            </span>
            <span className="text-white/20">�</span>
            <span className="text-xs font-mono text-nexolith-muted">
              {project.type}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-nexolith-white">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-nexolith-mint font-sans max-w-3xl">
            {project.subtitle}
          </p>
        </div>

        {/* Large Media Visual Preview Container */}
        <div className="mt-10 relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-nexolith-navy border border-white/10 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nexolith-dark/80 via-transparent to-transparent pointer-events-none" />

          {/* Quick External Live CTA Floating on Image */}
          <div className="absolute bottom-6 right-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-nexolith-blue hover:bg-blue-600 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-xl backdrop-blur-md"
            >
              <span>VISITER LE SITE EN DIRECT</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 7-Step Case Study Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 01 � OVERVIEW */}
        <div className="p-8 sm:p-10 rounded-2xl bg-nexolith-navy/70 border border-white/[0.08]">
          <div className="text-xs font-mono uppercase tracking-widest text-nexolith-mint mb-4">
            01 � APER�U G�N�RAL (OVERVIEW)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs font-mono border-y border-white/10 py-6 mb-6">
            <div>
              <div className="text-nexolith-muted uppercase">CLIENT / CADRE</div>
              <div className="text-white font-bold text-sm mt-1">{project.overview.client}</div>
            </div>
            <div>
              <div className="text-nexolith-muted uppercase">DUR�E DU CYCLE</div>
              <div className="text-white font-bold text-sm mt-1">{project.overview.timeline}</div>
            </div>
            <div>
              <div className="text-nexolith-muted uppercase">R�LE NEXOLITH</div>
              <div className="text-white font-bold text-sm mt-1">{project.role}</div>
            </div>
            <div>
              <div className="text-nexolith-muted uppercase">D�PLOIEMENT</div>
              <div className="text-nexolith-emerald font-bold text-sm mt-1">Production Vercel</div>
            </div>
          </div>

          <p className="text-base text-nexolith-white/90 leading-relaxed font-sans">
            {project.overview.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.overview.deliverables.map((deliv) => (
              <span
                key={deliv}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-nexolith-muted"
              >
                ? {deliv}
              </span>
            ))}
          </div>
        </div>

        {/* 02 � THE CHALLENGE & 03 � THE APPROACH (Split Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-nexolith-navy/50 border border-white/[0.08] space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-nexolith-blue">
              02 � LE D�FI (THE CHALLENGE)
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Contraintes & Objectifs
            </h3>
            <p className="text-sm text-nexolith-muted leading-relaxed font-sans">
              {project.challenge}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-nexolith-navy/50 border border-white/[0.08] space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-nexolith-emerald">
              03 � L&apos;APPROCHE (THE APPROACH)
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Direction Technique & UX
            </h3>
            <p className="text-sm text-nexolith-muted leading-relaxed font-sans">
              {project.approach}
            </p>
          </div>
        </div>

        {/* 04 � THE EXPERIENCE */}
        <div className="p-8 sm:p-10 rounded-2xl bg-nexolith-navy/70 border border-white/[0.08] space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-nexolith-mint">
            04 � L&apos;EXP�RIENCE (THE EXPERIENCE)
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Parcours utilisateur & ergonomie
          </h3>
          <p className="text-sm sm:text-base text-nexolith-muted leading-relaxed font-sans">
            {project.experience}
          </p>
        </div>

        {/* 05 � THE TECHNOLOGY */}
        <div className="p-8 sm:p-10 rounded-2xl bg-nexolith-navy/70 border border-white/[0.08] space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-nexolith-blue">
            05 � L&apos;ARCHITECTURE TECHNIQUE (THE TECHNOLOGY)
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Stack & Choix d&apos;ing�nierie
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.technology.map((techItem, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-nexolith-dark/80 border border-white/5 flex items-start gap-3"
              >
                <div className="p-1.5 rounded bg-nexolith-blue/20 text-nexolith-mint shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-nexolith-white/90 font-mono">
                  {techItem}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-nexolith-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 06 � THE RESULT */}
        <div className="p-8 sm:p-10 rounded-2xl bg-nexolith-navy/70 border border-white/[0.08] space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-nexolith-emerald">
            06 � LE R�SULTAT (THE RESULT)
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Ce qui a �t� livr�
          </h3>
          <p className="text-sm sm:text-base text-nexolith-muted leading-relaxed font-sans">
            {project.result}
          </p>
        </div>

        {/* 07 � LIVE PROJECT (Large Distinctive Banner) */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-nexolith-navy via-[#07192A] to-nexolith-navy border border-nexolith-blue/40 shadow-2xl text-center space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-nexolith-mint">
            07 � PROJET EN LIGNE (LIVE DEPLOYMENT)
          </div>

          <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Exp�rimentez le projet en direct
          </h3>

          <p className="text-sm sm:text-base text-nexolith-muted max-w-xl mx-auto font-sans">
            Le projet est d�ploy� et op�rationnel sur l&apos;infrastructure cloud Vercel. Cliquez ci-dessous pour ouvrir le site r�el dans un nouvel onglet.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-nexolith-blue hover:bg-blue-600 text-white font-display font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(23,105,255,0.4)] hover:scale-105"
            >
              <span>VISITER LE PROJET EN DIRECT</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <Link
              href="/#configurateur"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 font-mono text-xs uppercase tracking-wider font-semibold transition-all"
            >
              <span>PROPOSER UN PROJET SIMILAIRE</span>
            </Link>
          </div>

          <div className="text-xs font-mono text-nexolith-muted pt-2">
            URL officielle : {project.liveUrl}
          </div>
        </div>
      </section>
    </main>
  );
}
