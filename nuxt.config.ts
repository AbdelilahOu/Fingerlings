// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxtjs/seo"],
  $development: {
    site: {
      url: "http://localhost:3002",
      name: "Ar7al",
    },
    runtimeConfig: {
      public: {
        ghToken: process.env.NUXT_GITHUB_TOKEN,
        siteUrl: "http://localhost:3002",
      },
    },
  },
  $production: {
    routeRules: {
      "/": { swr: 60 * 60 * 24 },
    },
    site: {
      url: "https://ar7al.com",
      name: "Ar7al",
    },
    runtimeConfig: {
      public: {
        ghToken: process.env.NUXT_GITHUB_TOKEN,
        siteUrl: "https://ar7al.com",
      },
    },
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
  fonts: {
    families: [
      {
        name: "JetBrains Mono",
        provider: "google",
        weights: [400],
      },
    ],
    preload: true,
    subsets: ["latin"],
  },
  tailwindcss: {
    viewer: false,
    configPath: "tailwind.config.ts",
    cssPath: "~/assets/css/tailwind.css",
  },
});