<script setup lang="ts">
useHead({
  title: 'Home',
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
  },
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
</script>

<template>
  <NuxtPage />
</template>
