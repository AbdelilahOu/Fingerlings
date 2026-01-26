import { publicProcedure } from "../index";
import type { RouterClient } from "@orpc/server";
import { env } from "cloudflare:workers";
import { z } from "zod";

interface GitHubContributionDay {
  contributionCount: number;
  date: string;
}

interface GitHubContributionWeek {
  contributionDays: GitHubContributionDay[];
}

interface GitHubGraphQLResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: GitHubContributionWeek[];
        };
      };
    };
  };
}

export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return "OK";
  }),
  githubContributions: publicProcedure
    .input(z.object({ year: z.number() }))
    .handler(async ({ input }) => {
    const currYr = input.year;
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
								contributionsCollection(from: "${currYr}-01-01T00:00:00", to: "${currYr}-12-31T23:59:59") {
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
            // @ts-ignore
            cal[day.date].github = day.contributionCount;
          }
        }
      }

      return { cal, totalGH };
    } catch (error) {
      console.error("GitHub API error:", error);
      return { cal: {}, totalGH: 0 };
    }
  }),
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
