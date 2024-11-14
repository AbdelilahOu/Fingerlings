<script setup lang="ts">
useHead({
  title: 'Home',
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
  },
  titleTemplate: title => `Ar7al - %s`,
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
  title: 'Abdelilah Ouaadouch',
  description:
    'Backend Developer specializing in Go (Golang) and Typescript. Building fast, reliable systems.',
  twitterTitle: 'Abdelilah Ouaadouch - Backend Developer',
  twitterDescription:
    'Backend Developer specializing in Go (Golang) and Typescript. Building fast, reliable systems.',
  twitterCard: 'summary_large_image',
  twitterImage: '/og.png',
  twitterCreator: '@Abdelilah4dev',
  ogTitle: 'Abdelilah Ouaadouch - Backend Developer',
  ogDescription:
    'Backend Developer specializing in Go (Golang) and Typescript. Building fast, reliable systems.',
  ogType: 'website',
  ogSiteName: 'Abdelilah Ouaadouch',
  ogLocale: 'en',
  ogImage: '/og.png',
  ogUrl: 'https://ar7al.com',
})
</script>

<template>
  <NuxtPage />
</template>
