import { getLatestPosts } from "$lib/data/posts";
import { getLatestProjects } from "$lib/data/projects";
import { client } from "$lib/orpc";
import { buildHomepageLinkHeader } from "$lib/server/agent-discovery";

export const prerender = true;

export function load({ url, setHeaders }) {
  setHeaders({
    link: buildHomepageLinkHeader(url.origin),
  });

  return {
    featuredProjects: getLatestProjects(2),
    latestPosts: getLatestPosts(2),
    githubContributions: client.github.contributions({ year: 2025 }),
    year: 2025,
    origin: url.origin,
  };
}
