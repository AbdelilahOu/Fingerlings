import { getExperienceBySlug, experiences } from "$lib/data/experiences";
import { error } from "@sveltejs/kit";

export function load({ params, url }) {
  const experience = getExperienceBySlug(params.slug);

  if (!experience) {
    throw error(404, "Experience not found");
  }

  return { experience, origin: url.origin };
}

export const prerender = true;

export function entries() {
  return experiences.map((e) => ({ slug: e.slug }));
}
