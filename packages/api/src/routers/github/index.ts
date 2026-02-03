import { env } from "cloudflare:workers";
import { z } from "zod";

import { procedure } from "../..";
import { fetchGitHubContributions } from "../../utils/github";

export const contributions = procedure
  .route({ method: "GET", path: "/contributions" })
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
  });
