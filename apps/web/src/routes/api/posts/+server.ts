import { getPosts } from "$lib/data/posts";
import { json } from "@sveltejs/kit";

export const prerender = true;

export async function GET() {
  const posts = await getPosts();
  return json(posts);
}
