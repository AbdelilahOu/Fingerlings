import type { Context as HonoContext } from "hono";

export type CreateContextOptions = {
  context: HonoContext;
};

export async function createContext({ context }: CreateContextOptions) {
  const rawRequest = context.req.raw;
  const headers = rawRequest.headers;
  const ip =
    headers.get("cf-connecting-ip") ??
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    null;

  return {
    honoContext: context,
    ip,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
