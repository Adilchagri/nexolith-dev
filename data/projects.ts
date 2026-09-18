export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: "Web" | "Mobile" | "Digital Product";
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string | null;
  featured: boolean;
  year: string;
  role: string;
  technologies: string[];
  tags: string[];
  overview: {
    client: string;
    timeline: string;
    deliverables: string[];
    summary: string;
  };
  challenge: string;
  approach: string;
  experience: string;
  technology: string[];
  result: string;
}

export const projects: Project[] = [
  {
    id: "atlas-ascenseurs",
    title: "Atlas Ascenseurs",
    subtitle: "Site web corporate",
    category: "Site web corporate",
    type: "Web",
    description: "Conception et développement de la plateforme corporate pour Atlas Ascenseurs : ingénierie de l'élévation verticale, maintenance certifiée et solutions architecturales.",
    image: "/projects/atlas-ascenseurs.svg",
    liveUrl: "https://atlas-ascenseur.vercel.app/",
    githubUrl: null,
    featured: true,
    year: "2024",
    role: "Direction Artistique & Développement Frontend",
    technologies: ["React", "Vite", "Tailwind CSS", "Vercel"],
    tags: ["React", "Vite", "Vercel"],
    overview: {
      client: "Atlas Ascenseurs",
      timeline: "3 semaines",
      deliverables: ["Architecture UI/UX", "Développement frontend", "Optimisation SEO & Vercel"],
      summary: "Une interface industrielle élégante qui incarne la précision mécanique et inspire une confiance totale aux promoteurs et bureaux d'études.",
    },
    challenge: "Moderniser l'image de marque d'un acteur majeur de l'ascensorisme en créant une plateforme bilingue, rapide et capable de convertir les demandes de devis et d'appels d'offres en temps réel.",
    approach: "Adoption d'une esthétique technique structurée combinant un bleu industriel profond, une typographie géométrique robuste et des visualisations interactives des cabines d'ascenseur.",
    experience: "Navigation intuitive par secteurs (résidentiel, tertiaire, santé, industrie) avec accès direct aux certifications de sécurité et configurateur de maintenance en 3 clics.",
    technology: [
      "Application React ultra-performante générée avec Vite",
      "Tailwind CSS pour une mise en page fluide et adaptative",
      "Architecture de formulaires sécurisés pour les demandes de devis instantanées",
      "Déploiement sur réseau CDN mondial Vercel avec temps de chargement inférieur à 0.8s"
    ],
    result: "Une présence digitale premium renforçant la crédibilité institutionnelle et générant une hausse de 45% des demandes de devis en ligne.",
  },
  {
    id: "zakat-app",
    title: "Zakat App",
    subtitle: "Application mobile",
    category: "Application mobile",
    type: "Mobile",
    description: "Application mobile intuitive et respectueuse de la vie privée pour le calcul précis de la Zakat selon les cours mondiaux de l'or et de l'argent en temps réel.",
    image: "/projects/zakat-app.png",
    liveUrl: "https://zakat-app-alpha.vercel.app/",
    githubUrl: null,
    featured: true,
    year: "2024",
    role: "Ingénierie Mobile & Ergonomie",
    technologies: ["React Native", "TypeScript", "Tailwind CSS", "Vercel"],
    tags: ["React Native", "Mobile", "Fintech"],
    overview: {
      client: "Projet Indépendant / Communautaire",
      timeline: "4 semaines",
      deliverables: ["Application mobile native", "Algorithmes de calcul financier", "Flux de cotation en direct"],
      summary: "Calculez votre Zakat avec sérénité. Une expérience financière islamique moderne, transparente et 100% confidentielle.",
    },
    challenge: "Rendre le calcul rigoureux de la Zakat accessible à tous sans compromis sur la confidentialité des avoirs patrimoniaux ni sur l'exactitude des règles juridiques.",
    approach: "Nous avons conçu une architecture 'Privacy-First' où aucune donnée bancaire ou patrimoniale ne transite par un serveur tiers. L'interface utilise une atmosphère vert émeraude et or mat, propice au recueillement et à la précision chiffrée.",
    experience: "L'utilisateur configure en un geste son référentiel (seuil argent ou seuil or), consulte la valeur en direct du Nisab et répartit ses actifs (liquidités, investissements, or) avec des curseurs fluides et un calcul automatisé à 2,5%.",
    technology: [
      "Architecture React Native & TypeScript pour une exécution ultra-rapide",
      "Moteur de cache local chiffré garantissant 0% d'envoi vers le cloud",
      "Intégration d'API financières de cotation des métaux précieux en temps réel",
      "Export PDF local des récapitulatifs annuels"
    ],
    result: "Une application épurée, respectueuse de la vie privée et saluée pour sa clarté pédagogique et son esthétique soignée.",
  },
  {
    id: "fpk-pulse",
    title: "FPK Pulse",
    subtitle: "Plateforme campus & IA",
    category: "Plateforme campus",
    type: "Web",
    description: "Plateforme numérique officielle du Parcours d'Excellence SIIA de la Faculté Polydisciplinaire de Khouribga : tableau de bord, mentorat, passeport numérique et assistant conversationnel IA.",
    image: "/projects/fpk-pulse.png",
    liveUrl: "https://fpk-final.vercel.app/",
    githubUrl: null,
    featured: true,
    year: "2025",
    role: "Architecture Logicielle & Direction Produit",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Assistant IA", "Vercel"],
    tags: ["Next.js", "IA", "Tailwind"],
    overview: {
      client: "Faculté Polydisciplinaire de Khouribga",
      timeline: "6 semaines",
      deliverables: ["Plateforme étudiante & enseignant", "Assistant IA FPK GPT", "Arbre de compétences"],
      summary: "Le campus devient intelligent. Un environnement d'apprentissage moderne conçu pour valoriser l'excellence académique et dynamiser l'insertion des futurs ingénieurs.",
    },
    challenge: "Fédérer au sein d'un outil unique les besoins des étudiants du cycle d'excellence (cours, projets, évaluations, certifications) et des jurys pédagogiques, tout en intégrant des technologies d'IA générative adaptées.",
    approach: "Conception d'une interface inspirée des environnements de développement professionnels (thème sombre, grille millimétrée, indicateurs de progression en temps réel) et intégration de l'agent FPK GPT pour répondre instantanément aux interrogations sur le cursus.",
    experience: "Navigation claire entre le tableau de bord individuel, l'arbre de compétences interactif, les sessions de mentorat programmées et le passeport numérique vérifiable.",
    technology: [
      "Next.js App Router & TypeScript avec architecture Server Components",
      "API conversationnelle FPK GPT avec contexte vectoriel du cursus",
      "Système d'authentification sécurisé et gestion des rôles (étudiants, jury, mentors)",
      "Interface réactive optimisée pour mobile et écrans haute résolution"
    ],
    result: "Une plateforme adoptée par la promotion 2025/2026, transformant le suivi pédagogique en une expérience valorisante et interactive.",
  },
  {
    id: "psicad",
    title: "PSICAD",
    subtitle: "Architecture 3D & agencement",
    category: "Architecture 3D",
    type: "Web",
    description: "Plateforme web de référence pour PSICAD : solutions complètes en conception 3D, fabrication sur-mesure et aménagement intérieur et extérieur de qualité professionnelle.",
    image: "/projects/psicad.png",
    liveUrl: "https://psicad-react-app.vercel.app/",
    githubUrl: null,
    featured: true,
    year: "2024",
    role: "Conception UI/UX & Développement Web",
    technologies: ["React", "Three.js / WebGL", "Tailwind CSS", "Vercel"],
    tags: ["React", "Three.js", "Vercel"],
    overview: {
      client: "PSICAD",
      timeline: "4 semaines",
      deliverables: ["Identité visuelle digitale", "Catalogue immersif 3D", "Générateur de devis"],
      summary: "Concevez votre espace & Donnez-lui vie. Une plateforme digitale haute fidélité qui magnifie les créations architecturales et le mobilier sur-mesure.",
    },
    challenge: "Permettre aux clients particuliers et professionnels de visualiser concrètement l'expertise de PSICAD (+10 ans d'expérience, fabrication sur mesure, qualité premium) et d'estimer rapidement leurs projets d'agencement.",
    approach: "Une composition visuelle chaleureuse et lumineuse, mettant en scène des rendus 3D photo-réalistes à travers des découpes géométriques organiques, complétées par un parcours de devis sans friction.",
    experience: "Mise en avant des réalisations clés en main, découpage par typologie d'espace (salons contemporains, bureaux, terrasses) et affichage des engagements de livraison et d'installation.",
    technology: [
      "React & composants interactifs optimisés pour le rendu de photographies haute définition",
      "Système de formulaires dynamiques de devis sur-mesure",
      "Architecture CSS ultra-légère garantissant une fluidité parfaite sur smartphones et tablettes"
    ],
    result: "Un outil commercial stratégique qui a considérablement accru les demandes de devis qualifiés pour les projets d'aménagement haut de gamme.",
  },
  {
    id: "vitimac71",
    title: "Vitimac71",
    subtitle: "Prestations viticoles en Bourgogne",
    category: "Site vitrine",
    type: "Web",
    description: "Site internet pour Vitimac71, prestataire viticole basé à Azé en Bourgogne : taille, palissage, travaux en vert et vendanges menés avec rigueur dans le respect de chaque parcelle.",
    image: "/projects/vitimac71.png",
    liveUrl: "https://vitimac71.vercel.app/",
    githubUrl: null,
    featured: true,
    year: "2024",
    role: "Identité Digitale & Développement Frontend",
    technologies: ["React", "Tailwind CSS", "Lucide Icons", "Vercel"],
    tags: ["React", "Tailwind CSS", "Responsive"],
    overview: {
      client: "Vitimac71",
      timeline: "3 semaines",
      deliverables: ["Direction artistique", "Site vitrine adaptatif", "Module saisonnier dynamique"],
      summary: "La vigne au juste geste, saison après saison. L'alliance harmonieuse entre tradition terrienne bourguignonne et élégance digitale contemporaine.",
    },
    challenge: "Valoriser un métier de terrain exigeant en créant une interface épurée, capable de séduire les régisseurs de domaines viticoles renommés de Saône-et-Loire tout en reflétant l'authenticité de la vigne.",
    approach: "Palette organique associant vert feuillage et teintes crème terreuses, typographie à empattements raffinée pour le titre et mise en scène interactive d'un rang de vigne avec son système de palissage.",
    experience: "Module interactif 'En ce moment' qui s'adapte automatiquement à la saison agricole (vendanges d'automne, taille d'hiver, ébourgeonnage de printemps) et double accès 'Demander un devis' ou 'Appeler le domaine'.",
    technology: [
      "React pour une interface ultra-rapide avec bascule jour/nuit intégrée",
      "Illustrations vectorielles légères et micro-interactions soignées",
      "Conception responsive pensée en priorité pour une consultation directe sur smartphone par les exploitants"
    ],
    result: "Une présence numérique distinctive et crédible qui positionne Vitimac71 comme le partenaire de confiance des domaines viticoles bourguignons.",
  },
];
