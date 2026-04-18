import { PUBLIC_SERVER_URL } from "$env/static/public";
import { redirect } from "@sveltejs/kit";

export function GET() {
  throw redirect(307, `${PUBLIC_SERVER_URL}/api-reference`);
}
