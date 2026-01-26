import { getPosts } from "$lib/data/posts";
import { getLatestProjects } from "$lib/data/projects";
import { fetchGitHubContributions } from "$lib/server/github";

export const prerender = true;

export async function load() {
  const featuredProjects = getLatestProjects(2);
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 2);

  const year = new Date().getFullYear() - 1;
  const githubContributions = await fetchGitHubContributions(year).catch((e) => {
    console.error("Failed to fetch GitHub contributions:", e);
    return null;
  });

  return {
    featuredProjects,
    latestPosts,
    githubContributions,
    year,
  };
}
