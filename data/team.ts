export interface TeamMember {
  id: string;
  name: string;
  role: string;
  disciplines: string[];
  bio: string;
  badge: string;
  philosophy: string;
  avatar: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "adil",
    name: "ADIL",
    role: "Development · AI · Product",
    disciplines: ["Frontend Architecture", "Artificial Intelligence", "Product Design", "Interactive Systems"],
    bio: "Ingénieur passionné par l'intersection entre l'expérience utilisateur de pointe, les architectures web modernes et les modèles d'intelligence artificielle appliqués aux problématiques concrètes.",
    badge: "FOUNDER & ENGINEER",
    philosophy: "Le design sans ingénierie rigoureuse est une illusion. L'ingénierie sans souci du détail reste invisible.",
    avatar: "/brand/adil-avatar.svg"
  },
  {
    id: "amine",
    name: "AMINE",
    role: "Development · Engineering",
    disciplines: ["Full-Stack Engineering", "Systems Architecture", "Performance Optimization", "Data Pipelines"],
    bio: "Ingénieur focalisé sur la robustesse logicielle, l'efficacité algorithmique et la conception d'infrastructures résilientes capables d'évoluer de zéro à l'échelle mondiale.",
    badge: "FOUNDER & ENGINEER",
    philosophy: "Chaque ligne de code doit justifier sa présence. La simplicité maîtrisée est l'ultime sophistication.",
    avatar: "/brand/amine-avatar.svg"
  }
];
