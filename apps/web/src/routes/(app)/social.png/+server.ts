import OgHome from "$lib/components/og/OgHome.svelte";
import { render } from "svelte/server";
import { html } from "satori-html";
import satori from "satori";
import { Resvg, initWasm } from "@resvg/resvg-wasm";
import resvgWasm from "@resvg/resvg-wasm/index_bg.wasm?url";
import { read } from "$app/server";
import fontSource from "$lib/assets/fonts/JetBrainsMono-Regular.ttf";

const width = 1200;
const height = 630;

const fontData = read(fontSource).arrayBuffer();

let wasmInitialized = false;

export async function GET({ fetch }) {
  if (!wasmInitialized) {
    const wasmResponse = await fetch(resvgWasm);
    const wasmBuffer = await wasmResponse.arrayBuffer();
    await initWasm(wasmBuffer);
    wasmInitialized = true;
  }

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
