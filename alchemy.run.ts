import alchemy from "alchemy";
import { SvelteKit, Worker } from "alchemy/cloudflare";
import { config } from "dotenv";

config({ path: "./.env" });
config({ path: "./apps/web/.env" });
config({ path: "./apps/server/.env" });

const app = await alchemy("Personal-website");

export const web = await SvelteKit("web", {
  cwd: "apps/web",
  name: "personal-website",
  adopt: true,
  bindings: {
    PUBLIC_SERVER_URL: alchemy.env.PUBLIC_SERVER_URL!,
  },
});

export const server = await Worker("server", {
  cwd: "apps/server",
  name: "api-personal-website",
  adopt: true,
  entrypoint: "src/index.ts",
  compatibility: "node",
  bindings: {
    CORS_ORIGINS: alchemy.env.CORS_ORIGINS!,
    GH_TOKEN: alchemy.env.GH_TOKEN!,
  },
  dev: {
    port: 3000,
  },
});

console.log(`Web    -> ${web.url}`);
console.log(`Server -> ${server.url}`);

await app.finalize();
