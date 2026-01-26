import { ImageResponse } from "@ethercorps/sveltekit-og";
import { CustomFont, resolveFonts } from "@ethercorps/sveltekit-og/fonts";
import OgProject from "$lib/components/og/OgProject.svelte";
import fontSource from "$lib/assets/fonts/JetBrainsMono-Regular.ttf";
import { getProjectBySlug, projects } from "$lib/data/projects";
import { read } from "$app/server";

const fontData = read(fontSource).arrayBuffer();

export const GET = async ({ params }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return new Response("Not found", { status: 404 });
  }

  const fonts = [new CustomFont("JetBrainsMono", fontData, { weight: 400 })];

  return new ImageResponse(
    OgProject,
    {
      width: 1200,
      height: 630,
      fonts: await resolveFonts(fonts),
    },
    {
      title: project.title,
      description: project.description,
      tech: project.tech || [],
    },
  );
};

export function entries() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const prerender = true;
