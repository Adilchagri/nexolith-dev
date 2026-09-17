"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "./Navbar";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { EasterEggTerminal } from "@/components/ui/EasterEggTerminal";
import { ContactFooter } from "@/components/sections/ContactFooter";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <LanguageProvider>
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onTriggerTerminal={() => setIsTerminalOpen(true)}
      />

      <EasterEggTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <div className="relative z-10">{children}</div>

      <ContactFooter />
    </LanguageProvider>
  );
}