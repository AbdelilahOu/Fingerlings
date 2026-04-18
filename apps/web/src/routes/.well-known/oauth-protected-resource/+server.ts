import { buildProtectedResourceMetadata } from "$lib/server/agent-discovery";
import { json } from "@sveltejs/kit";

export function GET() {
  return json(buildProtectedResourceMetadata(), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
