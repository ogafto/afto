import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetails from "../../components/ProjectDetails";
import { getProjectBySlug, projects } from "../../data/projects";
import { siteConfig } from "../../lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projekt",
      description: "Szczegoly projektu w portfolio Aftobrowser.",
    };
  }

  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | ${siteConfig.name}`,
      description: project.description,
      url: `/portfolio/${project.slug}`,
      images: [project.cover || siteConfig.ogImage],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${siteConfig.name}`,
      description: project.description,
      images: [project.cover || siteConfig.ogImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
