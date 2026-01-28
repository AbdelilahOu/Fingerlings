import { getPosts } from "$lib/data/posts";
import { json } from "@sveltejs/kit";

export const prerender = true;

export function GET() {
  const posts = getPosts();
  return json(posts);
}
