# NEXOLITH DEV — Digital Studio Portfolio

> **“Three engineers from nowhere, building something for everywhere.”**

Official digital studio portfolio for **NEXOLITH DEV**, engineered by **Adil** & **Amine**.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## ✦ Overview

NEXOLITH DEV is a creative software studio specializing in high-performance web platforms, mobile applications, and intelligent systems. This repository contains the complete source code for our studio portfolio, featuring:

- **Cinematic Visual Identity**: Monolithic typography, deep slate tones (`#040910`), electric blue and emerald green accents (`#1769FF`, `#2ECC71`), and ambient landscape atmosphere.
- **Tri-Lingual Support (FR · EN · AR)**: Seamless localization in French, English, and Arabic, with native Right-to-Left (`dir="rtl"`) typography and bidirectional layout adaptation.
- **Static Site Generation (SSG)**: Blazing fast load times with pre-rendered static routes and sub-second page transitions.
- **Client Project Configurator**: Interactive step-by-step project scope builder and direct technical consultation flow.
- **Zero Generic AI Tropes**: Engineered with bespoke design systems, clean contrast, and purposeful typography.

---

## ✦ Selected Projects Showcase

The portfolio strictly highlights our 5 authentic client builds:

1. **[Atlas Ascenseurs](https://atlas-ascenseur.vercel.app/)** — *Corporate Web Platform* (React, Vite, Tailwind CSS, Vercel)
2. **[Zakat App](https://zakat-app-alpha.vercel.app/)** — *Islamic Fintech Mobile App* (React Native, TypeScript, Privacy-First Architecture)
3. **[FPK Pulse](https://fpk-final.vercel.app/)** — *Campus & AI Platform* (Next.js, TypeScript, Generative AI Agent, Tailwind CSS)
4. **[PSICAD](https://psicad-react-app.vercel.app/)** — *3D Architecture & Interior Design* (React, Three.js / WebGL, Interactive Estimator)
5. **[Vitimac71](https://vitimac71.vercel.app/)** — *Bespoke Viticultural Showcase* (React, Tailwind CSS, Seasonal Agricultural Modules)

---

## ✦ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing across components, models, and data dictionaries)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom brand palettes (`#050B12`, `#1769FF`, `#2ECC71`, `#5CFFD0`)
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/) (3D tilts, subtle entrances, fluid tab indicators)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) Edge Network

---

## ✦ Project Structure

```bash
nexolith-dev/
├── app/
│   ├── globals.css              # Custom utility classes & animations
│   ├── layout.tsx               # Root layout & ClientShell wrapper
│   ├── page.tsx                 # Monolithic home page orchestration
│   └── projects/[slug]/         # Static Case Study template (SSG)
├── components/
│   ├── brand/                   # Geometric NEXOLITH vector logos & assets
│   ├── navigation/              # Sticky Navbar, Language Switcher, Drawer
│   ├── sections/                # Modular studio sections:
│   │   ├── Hero.tsx             # 3D Tilt Centerpiece & ambient landscape
│   │   ├── StatsRibbon.tsx      # Unified 5-stat metric pill
│   │   ├── ProjectsShowcase.tsx # Horizontal carousel for the 5 builds
│   │   ├── ValuePillars.tsx     # Core tenets & signature quote
│   │   ├── ProcessSection.tsx   # Engineering methodology (5 phases)
│   │   ├── ServicesSection.tsx  # Editorial capability rows
│   │   ├── TeamSection.tsx      # Adil & Amine founder profiles
│   │   ├── ProjectConfigurator.tsx # Interactive inquiry generator
│   │   └── ContactFooter.tsx    # Direct channels & navigation
│   └── ui/                      # Interactive Command Palette & overlays
├── context/
│   └── LanguageContext.tsx      # Tri-lingual state management (FR/EN/AR) & RTL
├── data/
│   ├── projects.ts              # Registry of the 5 authentic client builds
│   ├── services.ts              # Capability definitions & deliverables
│   ├── team.ts                  # Founder bios & philosophies
│   └── translations.ts          # Centralized dictionary for all UI copy
└── public/
    ├── brand/                   # Studio marks & landscape imagery
    └── projects/                # Project previews & assets
```

---

## ✦ Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/nexolith-dev.git

# Navigate to project directory
cd nexolith-dev

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile and prerender static pages
npm run build

# Start production server locally
npm run start
```

---

## ✦ The Founders

- **Adil** — *Co-Founder & Full-Stack Software Engineer* (Frontend Architecture · Product Design · AI Systems)
- **Amine** — *Co-Founder & Mobile & Systems Architect* (Mobile Engineering · Systems Architecture · Data Infrastructure)

---

## ✦ Contact & Channels

- **Email**: [nexolithdev@gmail.com](mailto:nexolithdev@gmail.com)
- **Instagram**: [@nexolith_dev](https://instagram.com/nexolith_dev)

---

## ✦ License

Private & Proprietary © NEXOLITH DEV. All rights reserved.

