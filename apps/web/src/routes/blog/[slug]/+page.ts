import { error } from "@sveltejs/kit";
import { getPosts } from "$lib/data/posts";

export const prerender = true;

export async function entries() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function load({ params }) {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);

    return {
      content: post.default,
      meta: post.metadata,
      slug: params.slug,
    };
  } catch {
    throw error(404, `Post not found: ${params.slug}`);
  }
}
