import { procedure } from "../..";

export const health = procedure
  .route({ method: "GET", path: "/health" })
  .handler(async ({ context }) => {
    return {
      cf: context.cf ?? null,
    };
  });
