import { getLatestProjects } from "$lib/data/projects";
import { getPosts } from "$lib/data/posts";
import { client } from "$lib/orpc";

export const ssr = true;
export const prerender = false;

export async function load({ url }) {
  const featuredProjects = getLatestProjects(2);
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 2);

  const githubContributions = client.githubContributions().catch((e) => {
    console.error("Failed to fetch GitHub contributions:", e);
    return null;
  });

  return {
    featuredProjects,
    latestPosts,
    githubContributions,
    title: "Abdelilah Ouaadouch - Fullstack Developer",
    description:
      "Fullstack Developer specializing in Go (Golang), Rust, and TypeScript. Building fast, reliable systems with modern tech stacks.",
    ogImage: `${url.origin}/og/image/og.png`,
  };
}
