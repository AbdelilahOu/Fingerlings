import { json } from "@sveltejs/kit";

export function GET({ url }) {
  return json({
    ok: true,
    service: "web",
    origin: url.origin,
    documentation: `${url.origin}/docs/api`,
  });
}
