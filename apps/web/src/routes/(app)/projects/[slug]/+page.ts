import { getProjectBySlug, projects } from "$lib/data/projects";
import { error } from "@sveltejs/kit";

export function load({ params, url }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    throw error(404, "Project not found");
  }

  return { project, origin: url.origin };
}

export const prerender = true;

export function entries() {
  return projects.map((p) => ({ slug: p.slug }));
}
