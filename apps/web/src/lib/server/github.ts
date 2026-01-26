import { env } from "$env/dynamic/private";
import { type GitHubGraphQLResponse } from "$lib/types";

export async function fetchGitHubContributions(year: number) {
  const username = "AbdelilahOu";

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${env.GH_TOKEN}`,
        "User-Agent": "portfolio-app",
      },
      body: JSON.stringify({
        query: `
          query ($username: String!) {
            user(login: $username) {
              contributionsCollection(from: "${year}-01-01T00:00:00", to: "${year}-12-31T23:59:59") {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { username },
      }),
    });

    const data = (await response.json()) as GitHubGraphQLResponse;

    const cal: { [date: string]: { github: number } } = {};
    let totalGH = 0;

    if (data?.data?.user?.contributionsCollection?.contributionCalendar) {
      const calendar = data.data.user.contributionsCollection.contributionCalendar;
      totalGH = calendar.totalContributions || 0;
      const ghCalData = calendar.weeks || [];

      for (const week of ghCalData) {
        for (const day of week.contributionDays) {
          if (!cal[day.date]) cal[day.date] = { github: 0 };
          cal[day.date].github = day.contributionCount;
        }
      }
    }

    return { cal, totalGH };
  } catch (error) {
    console.error("GitHub API error:", error);
    return { cal: {}, totalGH: 0 };
  }
}
