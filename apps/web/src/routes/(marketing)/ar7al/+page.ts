import { getLatestProjects } from "$lib/data/projects";
import { getPosts } from "$lib/data/posts";

export const prerender = true;

export async function load({ url, data }) {
  const posts = await getPosts();

  return {
    ...data,
    featuredProjects: getLatestProjects(2),
    latestPosts: posts.slice(0, 2),
    origin: url.origin,
  };
}
