import { getLatestProjects } from "$lib/data/projects";
import { getPosts } from "$lib/data/posts";
import { client } from "$lib/orpc";

export async function load({ url }) {
  const featuredProjects = getLatestProjects(2);
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 2);

  const year = new Date().getFullYear() - 1;
  const githubContributions = client.githubContributions({ year }).catch((e) => {
    console.error("Failed to fetch GitHub contributions:", e);
    return null;
  });

  return {
    featuredProjects,
    latestPosts,
    githubContributions,
    url: url.origin,
    year,
  };
}
