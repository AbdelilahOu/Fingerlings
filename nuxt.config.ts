// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],
  runtimeConfig: {
    ghToken: process.env.GITHUB_TOKEN,
  },
  fonts: {
    families: [
      {
        name: "Pixelify Sans",
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
