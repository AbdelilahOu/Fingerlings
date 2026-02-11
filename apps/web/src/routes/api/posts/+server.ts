import { getPosts } from "$lib/data/posts";

export const prerender = false;

export function GET({ url }) {
  const limitParam = url.searchParams.get("limit");
  const parsedLimit = limitParam ? Number.parseInt(limitParam, 10) : Number.NaN;
  const limit = Number.isFinite(parsedLimit) && parsedLimit > 0 ? parsedLimit : null;

  const posts = getPosts();
  const data = limit ? posts.slice(0, limit) : posts;

  return Response.json(data);
}
