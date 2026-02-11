import { getLatestProjects } from "$lib/data/projects";
import { client } from "$lib/orpc";
import type { Post } from "$lib/types";

export const ssr = true;
export const prerender = false;

export function load({ fetch, url }) {
  const latestPosts = fetch("/api/posts?limit=2").then(
    async (response) => (await response.json()) as Post[],
  );

  return {
    featuredProjects: getLatestProjects(2),
    latestPosts,
    githubContributions: client.github.contributions({ year: 2025 }),
    year: 2025,
    origin: url.origin,
  };
}
