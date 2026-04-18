import { getLatestPosts } from "$lib/data/posts";
import { getLatestProjects } from "$lib/data/projects";
import { client } from "$lib/orpc";

export const prerender = true;

export function load({ url }) {
  return {
    featuredProjects: getLatestProjects(2),
    latestPosts: getLatestPosts(2),
    githubContributions: client.github.contributions({ year: 2025 }),
    year: 2025,
    origin: url.origin,
  };
}
