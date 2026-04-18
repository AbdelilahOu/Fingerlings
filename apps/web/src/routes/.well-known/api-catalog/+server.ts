import { buildApiCatalog } from "$lib/server/agent-discovery";

export function GET({ url }) {
  return new Response(JSON.stringify(buildApiCatalog(url.origin)), {
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
