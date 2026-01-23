import { getLatestProjects } from "$lib/data/projects";
import { getPosts } from "$lib/data/posts";
import { client } from "$lib/orpc";

export const prerender = false;

export async function load() {
  const featuredProjects = getLatestProjects(2);
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 2);

  // Don't await - return promise for streaming/non-blocking
  const githubContributions = client.githubContributions().catch((e) => {
    console.error("Failed to fetch GitHub contributions:", e);
    return null;
  });

  return {
    featuredProjects,
    latestPosts,
    githubContributions,
  };
}
