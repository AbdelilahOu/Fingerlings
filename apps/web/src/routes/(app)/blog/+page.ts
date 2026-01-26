import { getPosts } from "$lib/data/posts";

export const prerender = true;

export async function load({ url }) {
  const posts = await getPosts();
  return { posts, url: url.origin };
}
