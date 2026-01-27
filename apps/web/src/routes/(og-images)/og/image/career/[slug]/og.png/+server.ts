import { read } from "$app/server";
import { CustomFont, resolveFonts } from "@ethercorps/sveltekit-og/fonts";
import { ImageResponse } from "@ethercorps/sveltekit-og";
import fontSource from "$lib/assets/fonts/JetBrainsMono-Regular.ttf";
import OgExperience from "$lib/components/og/OgExperience.svelte";
import { getExperienceBySlug, experiences } from "$lib/data/experiences";

const fontData = read(fontSource).arrayBuffer();

export const GET = async ({ params }) => {
  const experience = getExperienceBySlug(params.slug);

  if (!experience) {
    return new Response("Not found", { status: 404 });
  }

  const fonts = [new CustomFont("JetBrainsMono", fontData, { weight: 400 })];

  return new ImageResponse(
    OgExperience,
    {
      width: 1200,
      height: 630,
      fonts: await resolveFonts(fonts),
    },
    {
      title: experience.title,
      company: experience.company,
      description: experience.description,
      technologies: experience.technologies || [],
    },
  );
};

export function entries() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export const prerender = true;
