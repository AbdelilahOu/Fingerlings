import { fetchGitHubContributions } from "$lib/server/github";

export const prerender = true;

export function load() {
  return {
    githubContributions: fetchGitHubContributions(2025),
    year: 2025,
  };
}
