import type { Post, PostMetadata } from "../types";

export function getPosts(): Post[] {
  const paths = import.meta.glob<{ metadata: PostMetadata }>("/src/posts/*.md", { eager: true });

  const posts: Post[] = [];

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").pop()?.replace(".md", "") ?? "";

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as PostMetadata;

      if (metadata.published) {
        posts.push({
          ...metadata,
          slug,
        });
      }
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export function getLatestPosts(count: number): Post[] {
  return getPosts().slice(0, count);
}
