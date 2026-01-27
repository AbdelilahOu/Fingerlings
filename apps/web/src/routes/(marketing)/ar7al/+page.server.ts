import { fetchGitHubContributions } from "$lib/server/github";
import { getLatestProjects } from "$lib/data/projects";
import { getPosts } from "$lib/data/posts";

export const prerender = true;

export async function load({ url }) {
  const featuredProjects = getLatestProjects(2);
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 2);

  const githubContributions = fetchGitHubContributions(2025).catch((e) => {
    console.error("Failed to fetch GitHub contributions:", e);
    return null;
  });

  return {
    featuredProjects,
    latestPosts,
    githubContributions,
    year: 2025,
    origin: url.origin,
  };
}
