import { experiences } from "$lib/data/experiences";

export const prerender = true;

export function load({ url }) {
  return { experiences, origin: url.origin };
}
