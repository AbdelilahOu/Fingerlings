import type { RouterClient } from "@orpc/server";

import { procedure } from "../index";

export const appRouter = {
  healthCheck: procedure.handler(() => {
    return "OK";
  }),
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
