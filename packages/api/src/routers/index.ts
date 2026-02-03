import type { RouterClient } from "@orpc/server";

import { env } from "cloudflare:workers";
import { z } from "zod";

import { procedure } from "../index";
import { fetchGitHubContributions } from "../utils/github";

export const appRouter = {
  healthCheck: procedure.handler(() => {
    return "OK";
  }),
  githubContributions: procedure
    .input(
      z.object({
        year: z.number().int().min(2008),
      }),
    )
    .handler(async ({ input }) => {
      const token = env.GH_TOKEN;

      if (!token) {
        console.error("GH_TOKEN is not set in the server environment.");
        return { cal: {}, totalGH: 0 };
      }

      return fetchGitHubContributions({ year: input.year, token });
    }),
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
