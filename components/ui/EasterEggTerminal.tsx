"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, ArrowRight, CheckCircle2 } from "lucide-react";

interface EasterEggTerminalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function EasterEggTerminal({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
}: EasterEggTerminalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [typedBuffer, setTypedBuffer] = useState("");
  const [step, setStep] = useState(0);

  const isVisible = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalOpen(false);
    }
    setStep(0);
  };

  // Keyboard listener for "sudo hire-nexolith"
  useEffect(() => {
    const targetString = "sudo hire-nexolith";

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing inside an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "Escape" && isVisible) {
        handleClose();
        return;
      }

      const nextChar = e.key.toLowerCase();
      if (nextChar.length === 1 || nextChar === " " || nextChar === "-") {
        setTypedBuffer((prev) => {
          const updated = (prev + nextChar).slice(-targetString.length);
          if (updated === targetString) {
            setInternalOpen(true);
            return "";
          }
          return updated;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  // Terminal progression sequence
  useEffect(() => {
    if (!isVisible) {
      setStep(0);
      return;
    }

    const t1 = setTimeout(() => setStep(1), 400);
    const t2 = setTimeout(() => setStep(2), 1100);
    const t3 = setTimeout(() => setStep(3), 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isVisible]);

  const handleStartProject = () => {
    handleClose();
    const target = document.getElementById("configurateur");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg rounded-xl overflow-hidden bg-nexolith-dark border border-nexolith-mint/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] font-mono text-sm"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-nexolith-navy/90 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-nexolith-muted ml-2 flex items-center gap-1.5 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-nexolith-mint" />
                  nexolith-core :: terminal-session
                </span>
              </div>
              <button
                onClick={handleClose}
                className="text-nexolith-muted hover:text-white transition-colors p-1"
                aria-label="Fermer le terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 space-y-3 min-h-[190px] text-nexolith-white">
              <div className="text-nexolith-muted text-xs">
                $ sudo hire-nexolith --priority=instant
              </div>

              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-nexolith-muted flex items-center gap-2"
                >
                  <span className="text-nexolith-blue">›</span> Initializing collaboration protocol...
                </motion.div>
              )}

              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-nexolith-muted flex items-center gap-2"
                >
                  <span className="text-nexolith-blue">›</span> Checking studio requirements & bandwidth...
                </motion.div>
              )}

              {step >= 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4 pt-2"
                >
                  <div className="flex items-center gap-2 text-nexolith-emerald font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-nexolith-mint" />
                    <span>✓ READY TO BUILD</span>
                  </div>

                  <p className="text-xs text-nexolith-muted leading-relaxed font-sans">
                    Architecture frontend, vision IA ou produit complet : nos ingénieurs sont prêts à donner vie à votre vision.
                  </p>

                  <button
                    onClick={handleStartProject}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-nexolith-blue hover:bg-nexolith-blue/90 text-white font-sans font-medium text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-nexolith-blue/20"
                  >
                    <span>DÉMARRER UN PROJET</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </div>

            {/* Terminal Footer Info */}
            <div className="px-4 py-2 bg-nexolith-navy/50 border-t border-white/5 text-[11px] text-nexolith-muted/70 flex justify-between">
              <span>status: unlocked</span>
              <span>ESC pour quitter</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
