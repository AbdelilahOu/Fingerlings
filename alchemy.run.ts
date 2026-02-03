import alchemy from "alchemy";
import { SvelteKit, Worker } from "alchemy/cloudflare";
import { config } from "dotenv";

config({ path: "./.env" });
config({ path: "./apps/web/.env" });
config({ path: "./apps/server/.env" });

const app = await alchemy("Personal-website", {
  password: alchemy.env.SECRET_PASSPHRASE!,
});

export const web = await SvelteKit("web", {
  cwd: "apps/web",
  name: "portfolio",
  adopt: true,
  bindings: {
    PUBLIC_SERVER_URL: alchemy.env.PUBLIC_SERVER_URL!,
  },
});

// export const AiWorkers = Ai();

export const server = await Worker("server", {
  cwd: "apps/server",
  name: "api-portfolio",
  adopt: true,
  entrypoint: "src/index.ts",
  compatibility: "node",
  bindings: {
    GH_TOKEN: alchemy.secret(process.env.GH_TOKEN!),
    CORS_ORIGINS: alchemy.env.CORS_ORIGINS!,
    // AI: AiWorkers,
  },
  dev: {
    port: 3000,
  },
});

console.log(`Web    -> ${web.url}`);
console.log(`Server -> ${server.url}`);

await app.finalize();
