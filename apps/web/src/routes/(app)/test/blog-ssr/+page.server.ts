import { getPosts } from "$lib/data/posts";

export const ssr = true;

export async function load() {
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 2);
  return { latestPosts };
}
