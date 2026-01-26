import { projects } from "$lib/data/projects";

export const prerender = true;

export function load({ url }) {
  return { projects, url: url.origin };
}
