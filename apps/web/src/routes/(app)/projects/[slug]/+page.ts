import { error } from "@sveltejs/kit";
import { getProjectBySlug, projects } from "$lib/data/projects";

export function load({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    throw error(404, "Project not found");
  }

  return { project };
}

export const prerender = true;

export function entries() {
  return projects.map((p) => ({ slug: p.slug }));
}
