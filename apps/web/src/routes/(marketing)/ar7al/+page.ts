import { getLatestProjects } from "$lib/data/projects";
import { getLatestPosts } from "$lib/data/posts";

export const prerender = true;

export function load({ url, data }) {
  return {
    ...data,
    featuredProjects: getLatestProjects(2),
    latestPosts: getLatestPosts(2),
    origin: url.origin,
  };
}
