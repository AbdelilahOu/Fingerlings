<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
    dir: "ltr",
  },
  titleTemplate: "Ar7al - %s",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
    {
      rel: "canonical",
      href: "https://ar7al.com",
    },
  ],
});

useSchemaOrg([
  defineWebPage({
    name: "Abdelilah Ouaadouch - Portfolio",
    description: "Backend Developer specializing in Go (Golang), Rust, and TypeScript. Building fast, reliable systems with modern tech stacks.",
  }),
  definePerson({
    name: "Abdelilah Ouaadouch",
    jobTitle: "Backend developer",
    email: "mailto:abdelilah4dev@gmail.com",
    telephone: "+212603539796",
    url: "https://ar7al.com",
    sameAs: [
      "https://www.linkedin.com/in/ar7al/",
      "https://github.com/AbdelilahOu",
      "https://x.com/Abdelilah4dev",
    ],
    knowsAbout: [
      "Go",
      "Golang",
      "Typescript",
      "Backend Development",
      "API Development",
      "Rust",
      "Javascript",
      "Html",
      "Css",
      "Next.js",
      "Tauri",
      "Hono.js",
      "Nuxt.js",
      "Gin",
      "Chi",
      "Actix",
      "Express.js",
      "Tailwindcss",
      "Docker",
      "Git",
      "Github",
      "Postman",
    ],
  }),
]);

useSeoMeta({
  title: "Abdelilah Ouaadouch - Backend Developer",
  description:
    "Backend Developer specializing in Go (Golang), Rust, and TypeScript. Building fast, reliable systems with modern tech stacks.",
  keywords: "Go, Golang, Typescript, Rust, Backend Developer, Software Engineer, Web Development, API Development",
  twitterTitle: "Abdelilah Ouaadouch - Backend Developer",
  twitterDescription:
    "Backend Developer specializing in Go (Golang), Rust, and TypeScript. Building fast, reliable systems with modern tech stacks.",
  twitterCard: "summary_large_image",
  twitterImage: "/og.png",
  twitterCreator: "@Abdelilah4dev",
  ogTitle: "Abdelilah Ouaadouch - Backend Developer",
  ogDescription:
    "Backend Developer specializing in Go (Golang), Rust, and TypeScript. Building fast, reliable systems with modern tech stacks.",
  ogType: "website",
  ogSiteName: "Abdelilah Ouaadouch",
  ogLocale: "en",
  ogImage: "/og.png",
  ogUrl: "https://ar7al.com",
});
</script>

<template>
  <NuxtPage />
</template>
