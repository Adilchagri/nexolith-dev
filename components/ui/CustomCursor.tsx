"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "project">("default");
  const [projectText, setProjectText] = useState("VOIR PROJET →");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 450, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    // Detect touch device or mobile screen
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest("[data-cursor='project']");
      const clickable = target.closest("a, button, [role='button'], input, select, textarea");

      if (projectCard) {
        setCursorType("project");
        const customLabel = projectCard.getAttribute("data-cursor-text");
        if (customLabel) setProjectText(customLabel);
        else setProjectText("VOIR PROJET →");
      } else if (clickable) {
        setCursorType("pointer");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => {
      mouseX.set(-100);
      mouseY.set(-100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!mounted || isTouch) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Primary Cursor Follower */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: cursorType === "project" ? "-50%" : "-50%",
          translateY: cursorType === "project" ? "-50%" : "-50%",
        }}
      >
        {cursorType === "default" && (
          <div className="w-2.5 h-2.5 rounded-full bg-nexolith-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        )}

        {cursorType === "pointer" && (
          <div className="w-8 h-8 rounded-full border border-nexolith-mint/60 bg-nexolith-blue/10 backdrop-blur-[2px] transition-all duration-200" />
        )}

        {cursorType === "project" && (
          <div className="px-3.5 py-1.5 rounded-full bg-nexolith-blue text-nexolith-white text-[11px] font-mono tracking-wider font-semibold border border-nexolith-mint/40 shadow-2xl flex items-center gap-1.5 whitespace-nowrap">
            <span>{projectText}</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
