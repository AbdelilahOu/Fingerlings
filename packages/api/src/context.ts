import type { IncomingRequestCfProperties } from "@cloudflare/workers-types";
import type { Context as HonoContext } from "hono";

export type CreateContextOptions = {
  context: HonoContext;
};

export async function createContext({ context }: CreateContextOptions) {
  const cf = (context.req.raw as Request & { cf?: IncomingRequestCfProperties })
    .cf;

  return {
    session: null,
    honoContext: context,
    cf,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
