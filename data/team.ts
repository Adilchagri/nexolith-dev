export interface TeamMember {
  id: string;
  name: string;
  role: string;
  role_en?: string;
  disciplines: string[];
  bio: string;
  bio_en?: string;
  badge: string;
  philosophy: string;
  philosophy_en?: string;
  avatar: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "adil",
    name: "ADIL",
    role: "Development · AI · Product",
    role_en: "Development · AI · Product Architecture",
    disciplines: ["Frontend Architecture", "Artificial Intelligence", "Product Design", "Interactive Systems"],
    bio: "Ingénieur passionné par l'intersection entre l'expérience utilisateur de pointe, les architectures web modernes et les modèles d'intelligence artificielle appliqués aux problématiques concrètes.",
    bio_en: "Software engineer fascinated by the intersection of cutting-edge user experience, modern web architectures, and applied artificial intelligence.",
    badge: "FOUNDER & ENGINEER",
    philosophy: "Le design sans ingénierie rigoureuse est une illusion. L'ingénierie sans souci du détail reste invisible.",
    philosophy_en: "Design without rigorous engineering is an illusion. Engineering without attention to detail remains invisible.",
    avatar: "/brand/adil-avatar.svg"
  },
  {
    id: "amine",
    name: "AMINE",
    role: "Development · Engineering",
    role_en: "Development · Systems Engineering",
    disciplines: ["Full-Stack Engineering", "Systems Architecture", "Performance Optimization", "Data Pipelines"],
    bio: "Ingénieur focalisé sur la robustesse logicielle, l'efficacité algorithmique et la conception d'infrastructures résilientes capables d'évoluer de zéro à l'échelle mondiale.",
    bio_en: "Software engineer focused on systems resilience, algorithmic efficiency, and scalable cloud architectures designed to grow from zero to global scale.",
    badge: "FOUNDER & ENGINEER",
    philosophy: "Chaque ligne de code doit justifier sa présence. La simplicité maîtrisée est l'ultime sophistication.",
    philosophy_en: "Every line of code must earn its place. Mastered simplicity is the ultimate sophistication.",
    avatar: "/brand/amine-avatar.svg"
  }
];
