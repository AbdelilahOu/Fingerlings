// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxtjs/seo"],
  runtimeConfig: {
    ghToken: process.env.NUXT_GITHUB_TOKEN || process.env.NUXT_HUB_GITHUB_TOKEN,
    public: {
      siteUrl:
        process.env.NODE_ENV !== "production"
          ? "http://localhost:3002"
          : "https://ar7al.com",
    },
  },
  routeRules: {
    "/": { ssr: true },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  ogImage: {
    zeroRuntime: true,
  },
  site: {
    url:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3002"
        : "https://ar7al.com",
    name: "Ar7al",
  },
  fonts: {
    families: [
      {
        name: "VT323",
        provider: "google",
      },
    ],
  },
  tailwindcss: {
    viewer: false,
    configPath: "tailwind.config.ts",
    cssPath: "~/assets/css/tailwind.css",
  },
});
