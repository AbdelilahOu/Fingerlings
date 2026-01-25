import OgProject from "$lib/components/og/OgProject.svelte";
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

export async function GET({ url, fetch }) {
  if (!wasmInitialized) {
    const wasmResponse = await fetch(resvgWasm);
    const wasmBuffer = await wasmResponse.arrayBuffer();
    await initWasm(wasmBuffer);
    wasmInitialized = true;
  }

  const title = url.searchParams.get("title") ?? "";
  const description = url.searchParams.get("description") ?? "";
  const tech = url.searchParams.get("tech")?.split(",").filter(Boolean) ?? [];

  const result = render(OgProject, {
    props: {
      title,
      description,
      tech,
    },
  });

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
