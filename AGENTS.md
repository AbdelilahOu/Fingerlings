# Repository Guidelines

## Project Overview
**Fingerlings**: A personal portfolio website built as a modern TypeScript monorepo. The project showcases career history, projects, and blog posts with a full-stack architecture using edge computing and type-safe APIs.

### Tech Stack
- **Frontend**: SvelteKit 5 + Svelte 5 with TailwindCSS v4, mdsvex for markdown posts
- **Backend**: Hono 4 running on Cloudflare Workers with compatibility: "node"
- **API Layer**: oRPC (OpenAPI + RPC handlers) for end-to-end type safety
- **Build & Deploy**: Turborepo monorepo, Alchemy for local dev & Cloudflare deployment
- **Code Quality**: oxlint + oxfmt for linting/formatting
- **Utilities**: Zod for schema validation, shiki for syntax highlighting, @ethercorps/sveltekit-og for OG images

## Project Structure & Module Organization
```
portfolio/
├── apps/
│   ├── web/              # SvelteKit frontend (port 5173 in dev)
│   │   ├── src/
│   │   │   ├── routes/   # SvelteKit routes
│   │   │   │   ├── (marketing)/  # Layout group for public pages
│   │   │   │   │   ├── ar7al/    # Personal name route (Arabic)
│   │   │   │   │   ├── blog/     # Blog listing & posts
│   │   │   │   │   ├── career/   # Career/experience page
│   │   │   │   │   ├── projects/ # Projects portfolio
│   │   │   │   │   └── social.png/ # Social image generation
│   │   │   │   ├── api/     # Server-side API routes (unused currently)
│   │   │   │   ├── 404/     # 404 error page
│   │   │   │   └── sitemap.xml/ # Dynamic sitemap route
│   │   │   ├── posts/   # Markdown blog posts (mdsvex)
│   │   │   ├── lib/     # Shared utilities & components
│   │   │   └── app.{css,html,d.ts} # Global styles & app shell
│   │   ├── static/      # Static assets
│   │   ├── svelte.config.js
│   │   ├── vite.config.ts
│   │   └── .env         # Example: PUBLIC_SERVER_URL=http://localhost:3000
│   │
│   └── server/          # Cloudflare Worker API (port 3000 in dev)
│       ├── src/
│       │   └── index.ts # Hono app with oRPC handlers
│       ├── dist/        # Compiled output
│       ├── env.d.ts     # Cloudflare env types
│       ├── tsdown.config.ts
│       └── .env         # Example: CORS_ORIGINS=http://localhost:5173
│
├── packages/
│   ├── api/             # Shared oRPC router & context
│   │   ├── src/
│   │   │   ├── routers/
│   │   │   │   └── index.ts  # appRouter with oRPC procedures
│   │   │   ├── context.ts    # Context factory for API requests
│   │   │   └── index.ts      # Exports procedure builder
│   │   └── package.json (exports "." and "./*" for tree-shaking)
│   │
│   └── config/          # Shared build/lint config presets
│
├── alchemy.run.ts       # Alchemy dev/deploy config
├── turbo.json          # Turborepo config
├── .oxlintrc.json      # oxlint rules
├── .oxfmtrc.json       # oxfmt config
└── package.json        # Workspace root config

```

## Key Features
- **Type-Safe API**: oRPC with Zod validation ensures type safety from database to frontend
- **Markdown Blog**: mdsvex converts .md files to Svelte components; shiki syntax highlighting
- **OG Image Generation**: SvelteKit endpoint for dynamic social media card images
- **OpenAPI Docs**: oRPC auto-generates `/api-reference` documentation
- **CORS-Enabled**: Hono CORS middleware routes configured in .env
- **Deployment**: Alchemy manages local dev & Cloudflare Workers deployment in one command

## Build, Test, and Development Commands
- `npm run dev`: Run all apps via Alchemy (web + server).
- `npm run dev:web`: Run only the SvelteKit app (port 5173).
- `npm run dev:server`: Run only the API worker (port 3000).
- `npm run build`: Build all apps with Turborepo.
- `npm run deploy`: Deploy via Alchemy to Cloudflare.
- `npm run destroy`: Tear down Alchemy environment.
- `npm run check`: Lint/auto-fix with `oxlint --fix --fix-suggestions --fix-dangerously`.
- `npm run check-types`: Type-check all packages with Turborepo.
- `npm run fmt` / `npm run fmt:check`: Format with `oxfmt`.

## Coding Style & Naming Conventions
- **TypeScript-first**: All source code is `.ts` or `.svelte` files; ESM modules.
- **SvelteKit routing**: Use `+page.svelte`, `+page.ts`, `+server.ts`, `+layout.svelte` naming.
- **API routers**: Define procedures in `packages/api/routers/*.ts`, export from `routers/index.ts`.
- **Markdown posts**: Place `.md` files in `apps/web/src/posts/` for mdsvex processing.
- **Tailwind**: Use TailwindCSS v4 utilities; no custom CSS classes unless necessary.
- **Zod schemas**: Use for API validation and type inference; define in api layer.
- **Formatting/linting**: Run `npm run check` and `npm run fmt` before commits.

## Testing Guidelines
- No dedicated test framework configured yet.
- Use `npm run check-types` for TypeScript compilation checks.
- Use `npm run check` for static linting (oxlint can catch many bugs).
- Integration testing: manually via `npm run dev` during development.
- If adding tests, document the command and location in this section.

## Deployment & Environment
- **Alchemy**: Single command dev/deploy via `alchemy.run.ts`.
- **Bindings**: Configured in `alchemy.run.ts` for web/server; synced from `.env` files.
- **Web bindings**: `PUBLIC_SERVER_URL` (API endpoint URL).
- **Server bindings**: `CORS_ORIGINS` (comma-separated allowed origins); `GH_TOKEN` (GitHub token for GitHub API calls if needed).
- **Cloudflare Workers**: Node.js compatibility mode enabled (`compatibility: "node"`).
- **Environment files**:
  - `.env` (root): `SECRET_PASSPHRASE` for Alchemy.
  - `apps/web/.env`: `PUBLIC_SERVER_URL`.
  - `apps/server/.env`: `CORS_ORIGINS`, `GH_TOKEN`.

## Commit & Pull Request Guidelines
- Commit history mixes conventional (`feat:`/`fix:`) and simple (`Update ...`).
- Recommendation: use short, imperative messages; prefer `feat:` or `fix:` when meaningful.
- PRs should include: clear summary, linked issues (if any), and screenshots for UI changes.
- Always format before committing: `npm run fmt && npm run check` (auto-fixes linting issues).

## oRPC & API Architecture
- **oRPC Router**: Defined in `packages/api/routers/index.ts` as `appRouter`.
- **Procedures**: Each function in `appRouter` is an oRPC procedure with optional input/output Zod schemas.
- **Server Handler**: `apps/server/src/index.ts` runs `RPCHandler` (for JSON-RPC calls) and `OpenAPIHandler` (for REST docs).
- **RPC Prefix**: `/rpc/*` for JSON-RPC calls; `/api-reference` for OpenAPI docs.
- **Client Usage**: Import `AppRouter` type in frontend for end-to-end type safety.

## Common Development Workflows
- **Add a new blog post**: Create `apps/web/src/posts/my-post.md`, mdsvex auto-renders it in `/blog` route.
- **Add an API endpoint**: Define procedure in `packages/api/routers/index.ts`, re-run dev server.
- **Update styling**: Edit Tailwind classes in `.svelte` files; v4 auto-scans and compiles.
- **Add environment variable**: Update `.env` file, restart dev server (Alchemy reloads bindings).
- **Test API**: Use `/api-reference` OpenAPI docs or make POST request to `/rpc/<procedure-name>`.
