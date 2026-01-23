import { getLatestProjects } from "$lib/data/projects";
import { getPosts } from "$lib/data/posts";

export const prerender = false;

export async function load() {
  const featuredProjects = getLatestProjects(2);
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 2);

  return {
    featuredProjects,
    latestPosts,
  };
}
