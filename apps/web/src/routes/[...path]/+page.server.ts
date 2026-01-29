import { error } from "@sveltejs/kit";

export const ssr = true;

export function load() {
  error(404, "Not Found");
}
