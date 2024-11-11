// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  runtimeConfig: {
    ghToken: process.env.GITHUB_TOKEN,
  },
  routeRules: {
    '/': { swr: 86400 },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  fonts: {
    families: [
      {
        name: 'Pixelify Sans',
        provider: 'google',
      },
    ],
  },
  tailwindcss: {
    viewer: false,
    configPath: 'tailwind.config.ts',
    cssPath: '~/assets/css/tailwind.css',
  },
})
