import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { sveltekitOG } from "@ethercorps/sveltekit-og/plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit(), sveltekitOG()],
  logLevel: "info",
});
