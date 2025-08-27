<script setup lang="ts">
definePageMeta({
  colorMode: "dark",
});

// SEO Metadata
useHead({
  title: "Abdelilah Ouaadouch - Backend Developer",
  meta: [
    {
      name: "description",
      content:
                "Backend Developer specializing in Go (Golang) and Typescript with 2+ years of experience building performant and reliable systems.",
    },
    {
      name: "keywords",
      content:
                "Go, Golang, Typescript, Backend Developer, Software Engineer, Web Development, API Development",
    },
    // Open Graph
    {
      property: "og:title",
      content: "Abdelilah Ouaadouch - Backend Developer",
    },
    {
      property: "og:description",
      content:
                "Backend Developer specializing in Go (Golang) and Typescript with 2+ years of experience building performant and reliable systems.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://ar7al.com",
    },
    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Abdelilah Ouaadouch - Backend Developer",
    },
    {
      name: "twitter:description",
      content:
                "Backend Developer specializing in Go (Golang) and Typescript with 2+ years of experience building performant and reliable systems.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ar7al.com",
    },
  ],
});

// Structured Data (JSON-LD)
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Abdelilah Ouaadouch",
        "url": "https://ar7al.com",
        "jobTitle": "Backend Developer",
        "description":
                    "Backend Developer specializing in Go (Golang) and Typescript with 2+ years of experience building performant and reliable systems.",
        "knowsAbout": [
          "Go",
          "Golang",
          "Typescript",
          "Backend Development",
          "API Development",
        ],
        "sameAs": [
          "https://github.com/AbdelilahOu",
          "https://www.linkedin.com/in/ar7al/",
          "https://x.com/Abdelilah4dev",
        ],
      }),
    },
  ],
});

const { ghToken } = useRuntimeConfig().public;
const { data, error } = useLazyAsyncData<{ data: any }>(
  "github_contributions",
  () => {
    const currYr = new Date().getFullYear();
    return $fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${ghToken}`,
        "User-Agent": "request",
      },
      body: JSON.stringify({
        query: `
          query ($username: String!) {
            user(login: $username) {
              contributionsCollection(from: "${currYr}-01-01T00:00:00", to: "${currYr}-12-01T00:00:00") {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { username: "AbdelilahOu" },
      }),
    });
  },
);

const githubContributions = computed(() => {
  if (!data.value || error.value) {
    return {
      cal: {},
      totalGH: 0,
    };
  }
  const cal: { [date: string]: { github: number } } = {};
  let totalGH = 0;
  if (
    data.value.data
    && data.value.data.user
    && data.value.data.user.contributionsCollection
  ) {
    totalGH
            = data.value.data.user.contributionsCollection.contributionCalendar
        .totalContributions || 0;
    const ghCalData
            = data.value.data.user.contributionsCollection.contributionCalendar
              .weeks || [];
    for (const week of ghCalData) {
      for (const day of week.contributionDays) {
        if (!cal[day.date]) 
          cal[day.date] = { github: 0 };
        cal[day.date].github = day.contributionCount;
      }
    }
  }
  return {
    cal,
    totalGH,
  };
});

const languages = ["Golang", "Rust", "Typescript", "Javascript", "Html", "Css"];
const frameworks = [
  "Next.js",
  "Tauri",
  "Hono.js",
  "Nuxt.js",
  "Gin",
  "Chi",
  "Actix",
  "Express.js",
  "Tailwindcss",
];
const tools = ["Docker", "Git", "Github", "Postman"];

// Projects data
const projects = [
  {
    title: "Mahalli",
    description:
            "A web app that makes running your business easier. Keep track of inventory, manage client relationships, and create professional quotes and orders all in one place.",
    tech: [
      "Nuxt3",
      "Typescript",
      "Tailwindcss",
      "Golang",
      "PostgreSQL",
      "Gin",
      "SQLC",
      "Clerk",
    ],
    web: "https://trymahalli.com",
    github: "",
  },
  {
    title: "Cobracase E-commerce",
    description:
            "An online store where you can design your own unique phone cases. Upload photos, add text, and create cases that tell your story.",
    tech: [
      "NextJs",
      "Typescript",
      "Tailwindcss",
      "DrizzleOrm",
      "PostgreSQL",
      "Stripe",
      "Kind",
    ],
    web: "https://case-ecommerce.vercel.app/",
    github: "https://github.com/AbdelilahOu/Case-ecommerce",
  },
  {
    title: "Pet Setting App",
    description:
            "A friendly platform where pet owners can find trusted pet sitters in their area. Browse sitters on a map, chat with them, schedule visits, and share reviews. Perfect for both pet owners looking for care and sitters looking for work.",
    tech: ["Vue.js", "Firebase", "Tailwindcss"],
    web: "https://pets-app-sage.vercel.app/",
    github: "",
  },
  {
    title: "Wikipedia Proxy",
    description:
            "A Go-based tool I built for a coding challenge that sits between you and Wikipedia, tweaking the links you see as you browse. It was a fun way to explore how web proxies work.",
    tech: ["Go"],
    web: "",
    github: "https://github.com/AbdelilahOu/Online-test",
  },
  {
    title: "Go GraphQL api",
    description:
            "GoferQL API is a GraphQL server that provides a flexible API for managing posts, comments, users, categories, and tags. It uses SQLC for type-safe database operations and the graphql-go package for GraphQL implementation.",
    tech: ["Go", "GraphQl"],
    web: "",
    github: "https://github.com/AbdelilahOu/GoferQl-api",
  },
  {
    title: "Rusty School API",
    description:
            "A simple but reliable backend for managing school data, built with Rust. Handles things like student records and school tasks, with Google login to keep everything secure.",
    tech: ["Rust", "Actix", "PostgreSQL", "Google Auth", "Docker"],
    web: "",
    github: "https://github.com/AbdelilahOu/Rusty-school",
  },
];
</script>

<template>
  <div class="w-screen min-h-screen bg-[#0c0c0c] py-8 px-4">
    <div class="w-full max-w-3xl space-y-8 m-auto">
      <!--  -->
      <section class="space-y-4">
        <h1
          class="font-display font-semibold uppercase text-3xl md:text-4xl text-white"
        >
          Abdelilah Ouaadouch
        </h1>
        <p class="text-base md:text-lg text-white">
          Backend Developer specializing in Go (Golang) and Typescript
          <br>
          Backend developer with 2+ years of experience building
          performant and reliable systems. My primary focus is backend
          development with Go (Gin) and Typescript, complemented by
          experience creating frontends with Next.js.
        </p>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold text-white">
          <span class="text-accent">$</span> ls -contacts
        </h2>
        <div class="w-full relative group bg-neutral-800 text-white">
          <ClientOnly>
            <BackgroundGrid />
          </ClientOnly>
          <div class="space-y-2 relative z-10 p-[20px]">
            <NuxtLink
              to="mailto:abdelilah4dev@gmail.com"
              title="abdelilah4dev@gmail.com"
              alt="email address"
              class="text-base flex justify-between hover:border-l hover:pl-2 border-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="underline underline-offset-2">
                abdelilah4dev@gmail.com
              </span>
              <span class="inline-block"> Email </span>
            </NuxtLink>
            <NuxtLink
              to="https://www.linkedin.com/in/ar7al/"
              title="Abdelilah ouaadouch"
              alt="linkedin profile"
              class="text-base flex justify-between hover:border-l hover:pl-2 border-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="underline underline-offset-2">
                Abdelilah ouaadouch
              </span>
              <span class="inline-block"> Linkedin </span>
            </NuxtLink>
            <NuxtLink
              to="https://github.com/AbdelilahOu"
              title="@AbdelilahOu"
              alt="github profile"
              class="text-base flex justify-between hover:border-l hover:pl-2 border-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="underline underline-offset-2">
                @AbdelilahOu
              </span>
              <span class="inline-block"> Github </span>
            </NuxtLink>
            <NuxtLink
              to="https://x.com/Abdelilah4dev"
              title="@Abdelilah4dev"
              alt="twitter profile"
              class="text-base flex justify-between hover:border-l hover:pl-2 border-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="underline underline-offset-2">
                @Abdelilah4dev
              </span>
              <span class="inline-block"> Twitter/x </span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold text-white">
          <span class="text-accent">$</span> cat ./skills
        </h2>
        <div
          class="flex flex-wrap gap-[20px] bg-neutral-800 text-white p-[20px] text-base"
        >
          <span
            v-for="language in languages"
            :key="language"
            class="whitespace-nowrap px-2 py-1 border text-white flex-1 w-full text-center"
          >
            - {{ language }} -
          </span>
        </div>
        <div
          class="flex flex-wrap gap-[20px] bg-neutral-800 text-white p-[20px] text-base"
        >
          <span
            v-for="framework in frameworks"
            :key="framework"
            class="whitespace-nowrap px-2 py-1 border text-white flex-1 w-full text-center"
          >
            - {{ framework }} -
          </span>
        </div>
        <div
          class="flex flex-wrap gap-[20px] bg-neutral-800 text-white p-[20px] text-base"
        >
          <span
            v-for="tool in tools"
            :key="tool"
            class="whitespace-nowrap px-2 py-1 border text-white flex-1 w-full text-center"
          >
            - {{ tool }} -
          </span>
        </div>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold text-white">
          <span class="text-accent">$</span> git log --stat
        </h2>
        <div class="bg-neutral-800 p-[20px]">
          <p class="text-white mb-4">
            Total Contributions in {{ new Date().getFullYear() }}:
            <span class="font-semibold text-green-400">{{
              githubContributions.totalGH
            }}</span>
          </p>
          <GithubGraph :data="githubContributions" />
        </div>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold text-white">
          <span class="text-accent">$</span> ls ./projects
        </h2>
        <div class="grid gap-[20px] relative">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :project="project"
          />
        </div>
      </section>

      <footer
        class="font-display uppercase text-lg my-4 h-11 m-auto text-center text-white flex items-center justify-center"
      >
        made with
        <div class="size-12 tex-xs grid grid-cols-2 mx-2">
          <span>1</span>
          <span>0</span>
          <span>0</span>
          <span>1</span>
        </div>
        using
        <NuxtLink
          to="https://nuxt.com"
          title="Nuxt"
          alt="nuxtjs website"
          target="_blank"
          class="mx-1"
          rel="noopener noreferrer"
        >
          Nuxt
        </NuxtLink>
      </footer>
    </div>
  </div>
</template>
