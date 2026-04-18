import { buildAgentSkillsIndex } from "$lib/server/agent-discovery";
import { json } from "@sveltejs/kit";

export async function GET({ url }) {
  return json(await buildAgentSkillsIndex(url.origin), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
