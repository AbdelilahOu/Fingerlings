import type { RouterClient } from "@orpc/server";

import { contributions } from "./github";
import { health } from "./health";

export const appRouter = {
  github: {
    contributions,
  },
  health,
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
