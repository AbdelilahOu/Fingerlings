import { fetchGitHubContributions } from "$lib/server/github";
import { getLatestProjects } from "$lib/data/projects";
import { getPosts } from "$lib/data/posts";

export const prerender = true;

export async function load({ url }) {
  const posts = await getPosts();

  return {
    featuredProjects: getLatestProjects(2),
    latestPosts: posts.slice(0, 2),
    githubContributions: fetchGitHubContributions(2025),
    year: 2025,
    origin: url.origin,
  };
}
