import type { AppRouterClient } from "@portfolio/api/routers/index";

import { PUBLIC_SERVER_URL } from "$env/static/public";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";

export const link = new RPCLink({
  url: `${PUBLIC_SERVER_URL}/rpc`,
});

export const client: AppRouterClient = createORPCClient(link);
