<script setup lang="ts">
useHead({
  title: 'Home',
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
  },
  titleTemplate: title => `${title} - %s`,
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
    {
      rel: 'canonical',
      href: `https://ar7al.com`,
    },
  ],
})

useSeoMeta({
  title: 'Abdelilah Ouaadouch - Backend Developer',
  description:
    'Backend Developer specializing in Go (Golang) and Typescript. Building fast, reliable systems.',
  twitterTitle: 'Abdelilah Ouaadouch - Backend Developer',
  twitterDescription:
    'Backend Developer specializing in Go (Golang) and Typescript. Building fast, reliable systems.',
  twitterCard: 'summary_large_image',
  twitterCreator: '@Abdelilah4dev',
  twitterImage: '/__og-image__/image/og.png',
  ogTitle: 'Abdelilah Ouaadouch - Backend Developer',
  ogDescription:
    'Backend Developer specializing in Go (Golang) and Typescript. Building fast, reliable systems.',
  ogType: 'website',
  ogSiteName: 'Abdelilah Ouaadouch',
  ogLocale: 'en',
  ogImage: '/__og-image__/image/og.png',
  ogUrl: 'https://ar7al.com',
})

defineOgImage({
  component: 'HomeOgImage',
  fonts: [
    {
      name: 'Pixelify Sans',
    },
  ],
})
</script>

<template>
  <NuxtPage />
</template>
