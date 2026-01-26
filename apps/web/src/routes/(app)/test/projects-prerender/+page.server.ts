import { getLatestProjects } from "$lib/data/projects";

export const prerender = true;

export async function load() {
  const featuredProjects = getLatestProjects(2);
  return { featuredProjects };
}
