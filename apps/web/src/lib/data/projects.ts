export interface ProjectMetadata {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  web?: string;
  createdAt: string;
  published: boolean;
}

export interface Project extends ProjectMetadata {
  slug: string;
}

export function getProjects(): Project[] {
  const paths = import.meta.glob<{ metadata: ProjectMetadata }>("/src/content/projects/*.md", {
    eager: true,
  });

  const projects: Project[] = [];

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").pop()?.replace(".md", "") ?? "";

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as ProjectMetadata;

      if (metadata.published) {
        projects.push({ ...metadata, slug });
      }
    }
  }

  return projects.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}

export function getLatestProjects(count: number): Project[] {
  return getProjects().slice(0, count);
}
