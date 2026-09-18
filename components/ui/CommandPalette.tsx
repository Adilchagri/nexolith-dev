"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FolderGit2,
  Cpu,
  Users,
  Layers,
  Sparkles,
  Mail,
  Terminal,
  ArrowRight,
  X,
} from "lucide-react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerTerminal?: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onTriggerTerminal,
}: CommandPaletteProps) {
  const router = useRouter();
  const { language } = useLanguage();
  const isEn = language === "en";
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Global key listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Reset query on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const navigationItems = isEn
    ? [
        {
          id: "projects",
          title: "Explore Projects",
          subtitle: "Web platforms, mobile apps & client case studies",
          icon: FolderGit2,
          action: () => {
            onClose();
            const el = document.getElementById("projets");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#projets");
          },
        },
        {
          id: "process",
          title: "Our Process",
          subtitle: "Engineering and software development lifecycle",
          icon: Cpu,
          action: () => {
            onClose();
            const el = document.getElementById("process");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#process");
          },
        },
        {
          id: "services",
          title: "Services & Expertise",
          subtitle: "Web, Mobile, Artificial Intelligence, Cloud",
          icon: Layers,
          action: () => {
            onClose();
            const el = document.getElementById("services");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#services");
          },
        },
        {
          id: "team",
          title: "Our Team",
          subtitle: "Adil & Amine — Founding Software Engineers",
          icon: Users,
          action: () => {
            onClose();
            const el = document.getElementById("notre-equipe");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#notre-equipe");
          },
        },
        {
          id: "start",
          title: "Configure a Project",
          subtitle: "Interactive studio configurator & quote transmission",
          icon: Sparkles,
          action: () => {
            onClose();
            const el = document.getElementById("configurateur");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#configurateur");
          },
        },
        {
          id: "contact",
          title: "Contact the Studio",
          subtitle: "Direct exchange with founders (nexolithdev@gmail.com)",
          icon: Mail,
          action: () => {
            onClose();
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#contact");
          },
        },
      ]
    : [
        {
          id: "projects",
          title: "Voir les projets",
          subtitle: "Réalisations web, mobiles et études de cas",
          icon: FolderGit2,
          action: () => {
            onClose();
            const el = document.getElementById("projets");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#projets");
          },
        },
        {
          id: "process",
          title: "Notre processus",
          subtitle: "Méthodologie d'ingénierie et de développement",
          icon: Cpu,
          action: () => {
            onClose();
            const el = document.getElementById("process");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#process");
          },
        },
        {
          id: "services",
          title: "Services & Expertises",
          subtitle: "Web, Mobile, Intelligence Artificielle, Cloud",
          icon: Layers,
          action: () => {
            onClose();
            const el = document.getElementById("services");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#services");
          },
        },
        {
          id: "team",
          title: "Notre équipe",
          subtitle: "Adil & Amine — Ingénieurs fondateurs",
          icon: Users,
          action: () => {
            onClose();
            const el = document.getElementById("notre-equipe");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#notre-equipe");
          },
        },
        {
          id: "start",
          title: "Démarrer un projet",
          subtitle: "Configurateur interactif & transmission directe",
          icon: Sparkles,
          action: () => {
            onClose();
            const el = document.getElementById("configurateur");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#configurateur");
          },
        },
        {
          id: "contact",
          title: "Contactez le studio",
          subtitle: "Échange direct avec les fondateurs (nexolithdev@gmail.com)",
          icon: Mail,
          action: () => {
            onClose();
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else router.push("/#contact");
          },
        },
      ];

  // Project search results
  const projectItems = projects.map((p) => ({
    id: `project-${p.id}`,
    title: p.title,
    subtitle: `${isEn ? p.subtitle_en || p.subtitle : p.subtitle} (${p.technologies.slice(0, 3).join(", ")})`,
    icon: FolderGit2,
    badge: p.type,
    action: () => {
      onClose();
      window.open(p.liveUrl, "_blank", "noopener,noreferrer");
    },
  }));

  // Easter egg command check
  const isEasterEggQuery =
    query.trim().toLowerCase() === "sudo hire-nexolith" ||
    query.trim().toLowerCase() === "hire-nexolith";

  // Filter items
  const filteredNav = navigationItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  const totalFiltered = [
    ...(isEasterEggQuery
      ? [
          {
            id: "easter-egg",
            title: "sudo hire-nexolith",
            subtitle: "Exécuter la commande d'embauche prioritaire",
            icon: Terminal,
            action: () => {
              onClose();
              if (onTriggerTerminal) onTriggerTerminal();
            },
          },
        ]
      : []),
    ...filteredNav,
    ...filteredProjects,
  ];

  // Keyboard arrow selection
  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (!isOpen || totalFiltered.length === 0) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % totalFiltered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + totalFiltered.length) % totalFiltered.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (totalFiltered[selectedIndex]) {
          totalFiltered[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [isOpen, selectedIndex, totalFiltered]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9998] flex items-start justify-center pt-20 sm:pt-28 p-4 bg-black/75 backdrop-blur-md">
          {/* Backdrop click */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl rounded-2xl bg-nexolith-navy/95 border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-4 border-b border-white/10 gap-3">
              <Search className="w-5 h-5 text-nexolith-mint shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder={
                  isEn
                    ? "SEARCH THE STUDIO... (projects, services, team, contact)"
                    : "RECHERCHER DANS LE STUDIO... (projets, services, équipe, contact)"
                }
                className="w-full bg-transparent text-nexolith-white placeholder:text-nexolith-muted text-sm sm:text-base outline-none font-sans"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-nexolith-muted hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-nexolith-muted bg-nexolith-dark px-2 py-1 rounded border border-white/10">
                <span>ESC</span>
              </div>
            </div>

            {/* Results Container */}
            <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
              {/* Easter egg special entry if detected */}
              {isEasterEggQuery && (
                <div>
                  <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-nexolith-mint">
                    {isEn ? "System Command Detected" : "Commande Système Détectée"}
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      if (onTriggerTerminal) onTriggerTerminal();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-nexolith-blue/20 border border-nexolith-mint/40 text-left hover:bg-nexolith-blue/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Terminal className="w-5 h-5 text-nexolith-mint" />
                      <div>
                        <div className="text-sm font-mono font-bold text-nexolith-white">
                          sudo hire-nexolith
                        </div>
                        <div className="text-xs text-nexolith-muted">
                          {isEn
                            ? "Initialize high-priority collaboration terminal"
                            : "Initialiser le terminal de collaboration prioritaire"}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-nexolith-mint" />
                  </button>
                </div>
              )}

              {/* Navigation Actions */}
              {filteredNav.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-nexolith-muted">
                    {isEn ? "Studio Navigation" : "Navigation Studio"}
                  </div>
                  <div className="space-y-1">
                    {filteredNav.map((item, idx) => {
                      const isSelected = selectedIndex === (isEasterEggQuery ? idx + 1 : idx);
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={item.action}
                          onMouseEnter={() => setSelectedIndex(isEasterEggQuery ? idx + 1 : idx)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-left ${
                            isSelected
                              ? "bg-nexolith-surface border border-white/10 text-white"
                              : "text-nexolith-white/90 hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg ${
                                isSelected
                                  ? "bg-nexolith-blue text-white"
                                  : "bg-white/5 text-nexolith-muted"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-medium">{item.title}</div>
                              <div className="text-xs text-nexolith-muted">
                                {item.subtitle}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-nexolith-muted font-mono">
                            →
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Projects List */}
              {filteredProjects.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-nexolith-muted">
                    {isEn ? `Selected Projects (${filteredProjects.length})` : `Projets Réalisés (${filteredProjects.length})`}
                  </div>
                  <div className="space-y-1">
                    {filteredProjects.map((item, idx) => {
                      const computedIndex =
                        (isEasterEggQuery ? 1 : 0) + filteredNav.length + idx;
                      const isSelected = selectedIndex === computedIndex;
                      return (
                        <button
                          key={item.id}
                          onClick={item.action}
                          onMouseEnter={() => setSelectedIndex(computedIndex)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-left ${
                            isSelected
                              ? "bg-nexolith-surface border border-nexolith-blue/30 text-white"
                              : "text-nexolith-white/90 hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg ${
                                isSelected
                                  ? "bg-nexolith-emerald/20 text-nexolith-mint border border-nexolith-mint/30"
                                  : "bg-white/5 text-nexolith-muted"
                              }`}
                            >
                              <FolderGit2 className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-nexolith-white">
                                {item.title}
                              </div>
                              <div className="text-xs text-nexolith-muted">
                                {item.subtitle}
                              </div>
                            </div>
                          </div>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-nexolith-mint">
                            {item.badge}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {totalFiltered.length === 0 && (
                <div className="py-12 text-center text-nexolith-muted text-sm">
                  {isEn
                    ? `No results found for “${query}”.`
                    : `Aucun résultat trouvé pour “${query}”.`}
                </div>
              )}
            </div>

            {/* Footer shortcuts */}
            <div className="px-4 py-3 bg-nexolith-dark/80 border-t border-white/5 flex items-center justify-between text-[11px] text-nexolith-muted font-mono">
              <div className="flex items-center gap-3">
                <span>{isEn ? "↑↓ navigate" : "↑↓ naviguer"}</span>
                <span>{isEn ? "↵ open" : "↵ valider"}</span>
              </div>
              <div className="text-[10px] text-nexolith-muted/70">
                NEXOLITH DEV COMMAND CENTER
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
