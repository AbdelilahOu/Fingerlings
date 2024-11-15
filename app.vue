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

useSchemaOrg([
  defineWebPage({
    name: 'Abdelilah - Portfolio',
    description: 'Welcome to my personal portfolio',
  }),
  definePerson({
    name: 'Abdelilah ouaadouch',
    jobTitle: 'Backend developer',
    email: 'mailto:abdelilah4dev@gmail.com',
    telephone: '+212603539796',
    url: 'https://ar7al.com',
    sameAs: [
      'https://www.linkedin.com/in/abdelilah-ouaadouch-464060295/',
      'https://github.com/AbdelilahOu',
      'https://x.com/Abdelilah4dev',
    ],
  }),
])

useSeoMeta({
  title: 'Abdelilah Ouaadouch',
  description:
    'Personal website of Abdelilah ouaadouch - Developer specializing in Typescript + Nuxt and Golang',
  twitterTitle: 'Abdelilah Ouaadouch - Backend Developer',
  twitterDescription:
    'Personal website of Abdelilah ouaadouch - Developer specializing in Typescript + Nuxt and Golang',
  twitterCard: 'summary_large_image',
  twitterImage: '/og.png',
  twitterCreator: '@Abdelilah4dev',
  ogTitle: 'Abdelilah Ouaadouch - Backend Developer',
  ogDescription:
    'Personal website of Abdelilah ouaadouch - Developer specializing in Typescript + Nuxt and Golang',
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
