import { buildMcpServerCard } from "$lib/server/agent-discovery";
import { json } from "@sveltejs/kit";

export function GET({ url }) {
  return json(buildMcpServerCard(url.origin), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
