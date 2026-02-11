import type { Post } from "$lib/types";

export const prerender = false;

export function load({ fetch, url }) {
  const posts = fetch("/api/posts").then(async (response) => (await response.json()) as Post[]);

  return { posts, origin: url.origin };
}
