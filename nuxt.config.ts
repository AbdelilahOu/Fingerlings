// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  site: {
    url: "http://localhost:300",
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxt/fonts",
    "@nuxt/content",
  ],

  fonts: {
    families: [
      {
        name: "IBM Plex Sans Condensed",
        provider: "google",
      },
      {
        name: "Barlow Semi Condensed",
        provider: "google",
      },
    ],
  },

  nitro: {
    preset: "cloudflare-pages",
  },

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    viewer: false,
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
