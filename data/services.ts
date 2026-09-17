export interface Service {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  deliverables: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    number: "01",
    id: "web-development",
    title: "WEB DEVELOPMENT",
    subtitle: "Sites d'exception, plateformes performantes et applications web",
    description: "Nous bâtissons des architectures web robustes, rapides comme l'éclair et fidèles aux grilles de design les plus exigeantes. Pas de compromis entre performance technique et raffinement visuel.",
    items: [
      "Sites vitrines haut de gamme & identité digitale",
      "Plateformes web interactives et portails métiers",
      "Applications web complètes & SaaS réactifs",
      "Optimisation Core Web Vitals, SEO technique & Edge CDN"
    ],
    deliverables: [
      "Code source modulaire & documenté",
      "Déploiement continu et infrastructure Vercel / Cloud",
      "Scores Lighthouse 95+ garantis",
      "Design adaptatif mobile, tablette et écrans 4K"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"]
  },
  {
    number: "02",
    id: "mobile-development",
    title: "MOBILE ENGINEERING",
    subtitle: "Applications natives et cross-platform ergonomiques",
    description: "Conception d'expériences mobiles fluides, réactives et respectueuses des ressources matérielles. Du premier prototype tactile jusqu'au déploiement sur les stores, nous garantissons une ergonomie irréprochable.",
    items: [
      "Applications mobiles iOS & Android",
      "Développement cross-platform avec React Native",
      "Architectures Privacy-First & stockage local chiffré",
      "Synchronisation temps réel & gestion du mode hors-ligne"
    ],
    deliverables: [
      "Application multiplateforme nativement fluide",
      "Intégration des APIs et capteurs d'appareils",
      "Design systems tactiles avec micro-gestes fluides",
      "Préparation aux audits App Store et Google Play"
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Tailwind", "Local Storage", "State Machines"]
  },
  {
    number: "03",
    id: "ai-and-vision",
    title: "AI & INTELLIGENT SYSTEMS",
    subtitle: "Modèles d'intelligence artificielle, LLMs et automatisation avancée",
    description: "Nous intégrons la puissance des modèles d'apprentissage automatique et d'intelligence artificielle générative dans des produits concrets, des assistants contextuels aux pipelines de traitement intelligent.",
    items: [
      "Intégration de modèles LLM & Generative AI",
      "Assistants IA conversationnels spécialisés",
      "Pipelines d'automatisation de workflows complexes",
      "Traitement et structuration intelligente de données"
    ],
    deliverables: [
      "Pipelines d'inférence haute cadence",
      "Fine-tuning et contextualisation de modèles",
      "Tableaux de bord analytiques et monitoring",
      "APIs performantes pour l'exploitation en production"
    ],
    technologies: ["Python", "FastAPI", "Transformers", "LLMs", "Vector DB", "LangChain"]
  },
  {
    number: "04",
    id: "digital-products",
    title: "DIGITAL PRODUCTS & UI/UX",
    subtitle: "Direction artistique, design de produit et prototypage",
    description: "Nous ne nous contentons pas d'aligner des pixels ou du code : nous concevons des produits complets où chaque interaction a une intention et chaque écran sert un objectif de clarté ou de conversion.",
    items: [
      "Direction artistique sur-mesure & identité de marque",
      "UI/UX Design de haut niveau & wireframing interactif",
      "Prototypage rapide haute fidélité",
      "Design systems scalables avec documentation exhaustive"
    ],
    deliverables: [
      "Fichiers de conception complets",
      "Composants UI prêts pour l'implémentation",
      "Directives d'accessibilité (a11y) & typographie",
      "Tests d'utilisabilité et parcours clients optimisés"
    ],
    technologies: ["Figma", "Design Systems", "Motion Prototyping", "Design Tokens", "Micro-interactions"]
  }
];
