import { procedure } from "../index";
import type { RouterClient } from "@orpc/server";
import { env } from "cloudflare:workers";
import { z } from "zod";


export const appRouter = {
  healthCheck: procedure.handler(() => {
    return "OK";
  }),
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
