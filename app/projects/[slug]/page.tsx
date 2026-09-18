import { notFound, redirect } from "next/navigation";
import { projects } from "@/data/projects";
import { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(
    (p) => p.id === params.slug || p.liveUrl.includes(params.slug)
  );
  if (!project) return { title: "Projet non trouvé — NEXOLITH DEV" };

  return {
    title: `${project.title} — NEXOLITH DEV`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find(
    (p) => p.id === params.slug || p.liveUrl.includes(params.slug)
  );

  if (!project) {
    notFound();
  }

  redirect(project.liveUrl);
}
