import type { RouterClient } from "@orpc/server";

import { contributions } from "./github";

export const appRouter = {
  github: {
    contributions,
  },
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
