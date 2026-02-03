import { getLatestPosts } from "$lib/data/posts";
import { getLatestProjects } from "$lib/data/projects";
import { client } from "$lib/orpc";

export const prerender = true;

export function load({ url }) {
  return {
    featuredProjects: getLatestProjects(2),
    latestPosts: getLatestPosts(2),
    githubContributions: client.githubContributions({ year: 2025 }),
    year: 2025,
    origin: url.origin,
  };
}
