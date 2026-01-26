import { getLatestProjects } from "$lib/data/projects";

export const ssr = true;

export async function load() {
  const featuredProjects = getLatestProjects(2);
  return { featuredProjects };
}
