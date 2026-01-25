import OgHome from "$lib/components/og/OgHome.svelte";
import { render } from "svelte/server";
import { html } from "satori-html";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { read } from "$app/server";
import fontSource from "$lib/assets/fonts/JetBrainsMono-Regular.ttf";

const width = 1200;
const height = 630;

const fontData = read(fontSource).arrayBuffer();
export async function GET() {
  const result = render(OgHome, {});
  const markup = html(`${result.body}`);

  const svg = await satori(markup, {
    height,
    width,
    fonts: [
      {
        name: "JetBrainsMono",
        data: await fontData,
        style: "normal",
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: width,
    },
  });

  const png = resvg.render();
  //@ts-ignore
  return new Response(png.asPng(), {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
}
