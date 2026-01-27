import { read } from "$app/server";
import { CustomFont, resolveFonts } from "@ethercorps/sveltekit-og/fonts";
import { ImageResponse } from "@ethercorps/sveltekit-og";
import fontSource from "$lib/assets/fonts/JetBrainsMono-Regular.ttf";
import OgCareer from "$lib/components/og/OgCareer.svelte";

export const GET = async () => {
  const fonts = [
    new CustomFont("JetBrainsMono", () => read(fontSource).arrayBuffer(), { weight: 400 }),
  ];

  return new ImageResponse(
    OgCareer,
    {
      width: 1200,
      height: 630,
      fonts: await resolveFonts(fonts),
    },
    {},
  );
};

export const prerender = true;
