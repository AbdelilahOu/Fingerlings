import { getSkillDocument } from "$lib/server/agent-discovery";

export function GET() {
  const body = getSkillDocument("markdown-negotiation");

  if (!body) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
