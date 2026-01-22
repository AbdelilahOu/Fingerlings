import { error } from "@sveltejs/kit";
import type { PostMetadata } from "$lib/types";

export const prerender = true;

export async function load({ params }) {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);

    return {
      content: post.default,
      meta: post.metadata as PostMetadata,
      slug: params.slug,
    };
  } catch {
    throw error(404, `Post not found: ${params.slug}`);
  }
}
