# Portfolio

Personal portfolio website built with a modern TypeScript monorepo stack.

## Tech Stack

- **SvelteKit** - Web framework for building Svelte apps
- **TailwindCSS v4** - Utility-first CSS for rapid UI development
- **Hono** - Lightweight, performant server framework
- **oRPC** - End-to-end type-safe APIs
- **Cloudflare Workers** - Edge runtime environment
- **Turborepo** - Optimized monorepo build system

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

- Web app: [http://localhost:5173](http://localhost:5173)
- API server: [http://localhost:3000](http://localhost:3000)

## Environment Variables

```bash
# apps/web/.env
PUBLIC_SERVER_URL=http://localhost:3000

# apps/server/.env
CORS_ORIGINS=http://localhost:5173
GH_TOKEN=your_GH_TOKEN
```

## Project Structure

```
portfolio/
├── apps/
│   ├── web/         # Frontend application (SvelteKit)
│   └── server/      # Backend API (Hono, oRPC)
├── packages/
│   ├── api/         # API routes & business logic
│   └── config/      # Shared configuration
```

## Scripts

- `bun run dev` - Start all apps in development mode
- `bun run build` - Build all applications
- `bun run deploy` - Deploy to Cloudflare Workers
- `bun run dev:web` - Start only the web app
- `bun run dev:server` - Start only the server
