import { fetchGitHubContributions } from "$lib/server/github";
import { getLatestProjects } from "$lib/data/projects";
import { getLatestPosts } from "$lib/data/posts";

export const prerender = true;

export function load({ url }) {
  return {
    featuredProjects: getLatestProjects(2),
    latestPosts: getLatestPosts(2),
    githubContributions: fetchGitHubContributions(2025),
    year: 2025,
    origin: url.origin,
  };
}
