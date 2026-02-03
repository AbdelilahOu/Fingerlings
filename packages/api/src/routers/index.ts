import type { RouterClient } from "@orpc/server";

import { router as ghRoutes } from "./github";

export const appRouter = {
  ...ghRoutes,
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
