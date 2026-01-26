import { ImageResponse } from "@ethercorps/sveltekit-og";
import { CustomFont, resolveFonts } from "@ethercorps/sveltekit-og/fonts";
import OgHome from "$lib/components/og/OgHome.svelte";
import fontSource from "$lib/assets/fonts/JetBrainsMono-Regular.ttf";
import { read } from "$app/server";

export const GET = async () => {
  const fonts = [
    new CustomFont("JetBrainsMono", () => read(fontSource).arrayBuffer(), { weight: 400 }),
  ];

  return new ImageResponse(
    OgHome,
    {
      width: 1200,
      height: 630,
      fonts: await resolveFonts(fonts),
    },
    {},
  );
};

export const prerender = true;
