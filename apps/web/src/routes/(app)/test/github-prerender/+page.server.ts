import { fetchGitHubContributions } from "$lib/server/github";

export const prerender = true;

export async function load() {
  const year = new Date().getFullYear() - 1;
  const githubContributions = await fetchGitHubContributions(year).catch((e) => {
    console.error("Failed to fetch GitHub contributions:", e);
    return null;
  });

  return { githubContributions, year };
}
