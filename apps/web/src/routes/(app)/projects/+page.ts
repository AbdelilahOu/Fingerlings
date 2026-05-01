import { getProjects } from "$lib/data/projects";

export const prerender = true;

export function load({ url }) {
  return { projects: getProjects(), origin: url.origin };
}
