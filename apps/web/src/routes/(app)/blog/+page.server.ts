import type { Post } from "$lib/types";

export const prerender = false;

export async function load({ fetch, url }) {
  const postsResponse = await fetch("/api/posts");
  const posts = (await postsResponse.json()) as Post[];

  return { posts, origin: url.origin };
}
