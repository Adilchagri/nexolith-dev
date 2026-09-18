export interface Service {
  number: string;
  id: string;
  title: string;
  title_en?: string;
  subtitle: string;
  subtitle_en?: string;
  description: string;
  description_en?: string;
  items: string[];
  items_en?: string[];
  deliverables: string[];
  deliverables_en?: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    number: "01",
    id: "web-development",
    title: "WEB DEVELOPMENT",
    subtitle: "Sites d'exception, plateformes performantes et applications web",
    subtitle_en: "Bespoke websites, high-performance web platforms & SaaS apps",
    description: "Nous bâtissons des architectures web robustes, rapides comme l'éclair et fidèles aux grilles de design les plus exigeantes. Pas de compromis entre performance technique et raffinement visuel.",
    description_en: "We build robust, lightning-fast web architectures engineered to the highest design standards. No compromise between technical performance and visual refinement.",
    items: [
      "Sites vitrines haut de gamme & identité digitale",
      "Plateformes web interactives et portails métiers",
      "Applications web complètes & SaaS réactifs",
      "Optimisation Core Web Vitals, SEO technique & Edge CDN"
    ],
    items_en: [
      "Premium showcase websites & digital brand identities",
      "Interactive business platforms & internal web portals",
      "Full-stack web applications & responsive SaaS tools",
      "Core Web Vitals optimization, technical SEO & Edge CDN"
    ],
    deliverables: [
      "Code source modulaire & documenté",
      "Déploiement continu et infrastructure Vercel / Cloud",
      "Scores Lighthouse 95+ garantis",
      "Design adaptatif mobile, tablette et écrans 4K"
    ],
    deliverables_en: [
      "Modular, clean & documented codebase",
      "Continuous deployment on global Vercel / Cloud infrastructure",
      "Guaranteed 95+ Lighthouse performance scores",
      "Adaptive responsive design across mobile, tablet, and 4K displays"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"]
  },
  {
    number: "02",
    id: "mobile-development",
    title: "MOBILE ENGINEERING",
    subtitle: "Applications natives et cross-platform ergonomiques",
    subtitle_en: "Ergonomic native and cross-platform mobile apps",
    description: "Conception d'expériences mobiles fluides, réactives et respectueuses des ressources matérielles. Du premier prototype tactile jusqu'au déploiement sur les stores, nous garantissons une ergonomie irréprochable.",
    description_en: "Crafting fluid, reactive mobile experiences engineered with efficiency. From the initial tactile prototype to App Store and Google Play launch, we deliver flawless mobile ergonomics.",
    items: [
      "Applications mobiles iOS & Android",
      "Développement cross-platform avec React Native",
      "Architectures Privacy-First & stockage local chiffré",
      "Synchronisation temps réel & gestion du mode hors-ligne"
    ],
    items_en: [
      "Native iOS & Android mobile applications",
      "Cross-platform mobile engineering with React Native",
      "Privacy-first architectures & encrypted local storage",
      "Real-time data synchronization & robust offline mode"
    ],
    deliverables: [
      "Application multiplateforme nativement fluide",
      "Intégration des APIs et capteurs d'appareils",
      "Design systems tactiles avec micro-gestes fluides",
      "Préparation aux audits App Store et Google Play"
    ],
    deliverables_en: [
      "Natively fluid cross-platform application",
      "Integration of native device APIs and hardware sensors",
      "Tactile design systems with smooth micro-gestures",
      "Audit preparation for App Store and Google Play releases"
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Tailwind", "Local Storage", "State Machines"]
  },
  {
    number: "03",
    id: "ai-and-vision",
    title: "AI & INTELLIGENT SYSTEMS",
    subtitle: "Modèles d'intelligence artificielle, LLMs et automatisation avancée",
    subtitle_en: "Artificial intelligence models, LLMs & advanced automation",
    description: "Nous intégrons la puissance des modèles d'apprentissage automatique et d'intelligence artificielle générative dans des produits concrets, des assistants contextuels aux pipelines de traitement intelligent.",
    description_en: "We integrate machine learning and generative AI into tangible digital products, from context-aware assistants to automated data intelligence pipelines.",
    items: [
      "Intégration de modèles LLM & Generative AI",
      "Assistants IA conversationnels spécialisés",
      "Pipelines d'automatisation de workflows complexes",
      "Traitement et structuration intelligente de données"
    ],
    items_en: [
      "LLM & Generative AI model integrations",
      "Specialized conversational AI assistants",
      "Automation pipelines for complex workflows",
      "Intelligent data processing, parsing & structuring"
    ],
    deliverables: [
      "Pipelines d'inférence haute cadence",
      "Fine-tuning et contextualisation de modèles",
      "Tableaux de bord analytiques et monitoring",
      "APIs performantes pour l'exploitation en production"
    ],
    deliverables_en: [
      "High-throughput inference pipelines",
      "Model fine-tuning, prompt engineering & RAG context",
      "Analytical observability dashboards & monitoring",
      "High-performance APIs ready for enterprise production"
    ],
    technologies: ["Python", "FastAPI", "Transformers", "LLMs", "Vector DB", "LangChain"]
  },
  {
    number: "04",
    id: "digital-products",
    title: "DIGITAL PRODUCTS & UI/UX",
    subtitle: "Direction artistique, design de produit et prototypage",
    subtitle_en: "Artistic direction, digital product design & rapid prototyping",
    description: "Nous ne nous contentons pas d'aligner des pixels ou du code : nous concevons des produits complets où chaque interaction a une intention et chaque écran sert un objectif de clarté ou de conversion.",
    description_en: "We do not merely align pixels or code: we engineer end-to-end digital products where every interaction has clear intent and every screen drives conversion.",
    items: [
      "Direction artistique sur-mesure & identité de marque",
      "UI/UX Design de haut niveau & wireframing interactif",
      "Prototypage rapide haute fidélité",
      "Design systems scalables avec documentation exhaustive"
    ],
    items_en: [
      "Bespoke artistic direction & brand design systems",
      "High-level UI/UX design & interactive wireframing",
      "Rapid high-fidelity clickable prototyping",
      "Scalable design tokens with exhaustive engineering documentation"
    ],
    deliverables: [
      "Fichiers de conception complets",
      "Composants UI prêts pour l'implémentation",
      "Directives d'accessibilité (a11y) & typographie",
      "Tests d'utilisabilité et parcours clients optimisés"
    ],
    deliverables_en: [
      "Complete Figma design asset files",
      "Production-ready UI component libraries",
      "Accessibility (a11y) standards & typographic guidelines",
      "Usability testing & optimized user conversion funnels"
    ],
    technologies: ["Figma", "Design Systems", "Motion Prototyping", "Design Tokens", "Micro-interactions"]
  }
];
