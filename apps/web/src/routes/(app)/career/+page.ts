import { getExperiences } from "$lib/data/experiences";

export const prerender = true;

export function load({ url }) {
  return { experiences: getExperiences(), origin: url.origin };
}
