<script setup lang="ts">
useSeoMeta({
  title: "Abdelilah Ouaadouch Backend developer",
  description: "",
  twitterTitle: "Abdelilah Ouaadouch Backend developer",
  twitterDescription: "",
  twitterCard: "summary_large_image",
  twitterCreator: "@Abdelilah4dev",
  twitterImage: "/__og-image__/image/og.png",
  ogTitle: "Abdelilah Ouaadouch Backend developer",
  ogDescription: "",
  ogType: "website",
  ogSiteName: "Ar7al",
  ogLocale: "en",
  ogImage: "/__og-image__/image/og.png",
  ogUrl: "https://ar7al.com",
});

defineOgImage({
  component: "HomeOgImage",
  fonts: [
    {
      name: "Pixelify Sans",
    },
  ],
});

const { ghToken } = useRuntimeConfig()
const { data, error } = useLazyAsyncData<{ data: any }>(
  'github_contributions',
  () => {
    const currYr = new Date().getFullYear()
    return $fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${ghToken}`,
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
        variables: { username: 'AbdelilahOu' },
      }),
    })
  },
)

const githubContributions = computed(() => {
  if (!data.value || error.value) {
    return {
      cal: {},
      totalGH: 0,
    }
  }
  const cal: { [date: string]: { github: number } } = {}
  let totalGH = 0
  if (
    data.value.data
    && data.value.data.user
    && data.value.data.user.contributionsCollection
  ) {
    totalGH
      = data.value.data.user.contributionsCollection.contributionCalendar
        .totalContributions || 0
    const ghCalData
      = data.value.data.user.contributionsCollection.contributionCalendar.weeks
      || []
    for (const week of ghCalData) {
      for (const day of week.contributionDays) {
        if (!cal[day.date])
          cal[day.date] = { github: 0 }
        cal[day.date].github = day.contributionCount
      }
    }
  }
  return {
    cal,
    totalGH,
  }
})

const languages = ['Golang', 'Rust', 'Typescript', 'Javascript', 'Html', 'Css', 'Sql', 'PostgreSQl']
const frameworks = ['Gin (golang)', 'Chi (golang)', 'Actix (rust)', 'Express.js', 'Nitro.js', 'Nuxt.js', 'Tailwindcss', 'Vue.js', 'Next.js', 'Tauri']
const tools = ['Docker', 'Git', 'Github', 'Postman']

// Projects data
const projects = [
  {
    title: 'Mahalli',
    description: 'A web app that makes running your business easier. Keep track of inventory, manage client relationships, and create professional quotes and orders all in one place.',
    tech: ['Nuxt3', 'Typescript', 'Tailwindcss', 'Golang', 'PostgreSQL', 'Gin', 'SQLC', 'Clerk'],
    web: 'https://trymahalli.com',
    github: '',
  },
  {
    title: 'Cobracase E-commerce',
    description: 'An online store where you can design your own unique phone cases. Upload photos, add text, and create cases that tell your story.',
    tech: ['NextJs', 'Typescript', 'Tailwindcss', 'DrizzleOrm', 'PostgreSQL', 'Stripe', 'Kind'],
    web: 'https://case-ecommerce.vercel.app/',
    github: 'https://github.com/AbdelilahOu/Case-ecommerce',
  },
  {
    title: 'Pet Setting App',
    description: 'A friendly platform where pet owners can find trusted pet sitters in their area. Browse sitters on a map, chat with them, schedule visits, and share reviews. Perfect for both pet owners looking for care and sitters looking for work.',
    tech: ['Vue.js', 'Firebase', 'Tailwindcss'],
    web: '',
    github: 'https://github.com/AbdelilahOu/Pets-vue',
  },
  {
    title: 'Wikipedia Proxy',
    description: 'A Go-based tool I built for a coding challenge that sits between you and Wikipedia, tweaking the links you see as you browse. It was a fun way to explore how web proxies work.',
    tech: ['Go'],
    web: '',
    github: 'https://github.com/AbdelilahOu/Online-test',
  },
  {
    title: 'Rusty School API',
    description: 'A simple but reliable backend for managing school data, built with Rust. Handles things like student records and school tasks, with Google login to keep everything secure.',
    tech: ['Rust', 'Actix', 'PostgreSQL', 'Google Auth', 'Docker'],
    web: '',
    github: 'https://github.com/AbdelilahOu/Rusty-school',
  },
]
</script>

<template>
  <div class="w-screen min-h-screen bg-[#0c0c0c] py-8 px-4">
    <div class="w-full max-w-3xl space-y-8 m-auto">
      <!--  -->
      <section class="space-y-4">
        <h1 class="font-vermin font-semibold uppercase text-4xl text-white">
          Abdelilah Ouaadouch
        </h1>
        <div class="text-slate-300">
          <p class="text-lg mb-4">
            Backend Developer specializing in Go (Golang) and Typescript
          </p>
          <p class="text-base opacity-90">
            Backend wizard who speaks fluent Go/Gin, dabbles in Rust for that
            extra speed boost, and crafts slick frontends with TypeScript +
            Nuxt.js. Building fast, reliable systems is my jam. <br>
            let's ship some awesome code!
          </p>
        </div>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-white">
          Contacts
        </h2>
        <div class="bg-zinc-800 text-slate-300 space-y-2 p-4">
          <NuxtLink
            to="mailto:abdelilah4dev@gmail.com"
            title="abdelilah4dev@gmail.com"
            alt="email address"
            class="block"
            target="_blank" rel="noopener noreferrer"
          >
            {{ "<Email>" }} abdelilah4dev@gmail.com
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/abdelilah-ouaadouch-464060295/"
            title="Abdelilah ouaadouch"
            alt="linkedin profile"
            class="block" target="_blank" rel="noopener noreferrer"
          >
            {{ "<Linkedin>" }} Abdelilah ouaadouch
          </NuxtLink>
          <NuxtLink
            to="https://github.com/AbdelilahOu"
            title="@AbdelilahOu"
            alt="github profile"
            class="block"
            target="_blank" rel="noopener noreferrer"
          >
            {{ "<Github>" }} @AbdelilahOu
          </NuxtLink>
          <NuxtLink
            to="https://x.com/Abdelilah4dev"
            title="@Abdelilah4dev"
            alt="twitter profile"
            class="block" target="_blank"
            rel="noopener noreferrer"
          >
            {{ "<Twitter/x>" }} @Abdelilah4dev
          </NuxtLink>
        </div>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-white">
          Languages, Frameworks & tools I use
        </h2>
        <div class="flex flex-wrap bg-zinc-800 text-slate-300 p-4">
          <span v-for="language in languages" :key="language" class="m-2 whitespace-nowrap">
            {{ language }}
          </span>
        </div>
        <div class="flex flex-wrap bg-zinc-800 text-slate-300 p-4">
          <span v-for="framework in frameworks" :key="framework" class="m-2 whitespace-nowrap">
            {{ framework }}
          </span>
        </div>
        <div class="flex flex-wrap bg-zinc-800 text-slate-300 p-4">
          <span v-for="tool in tools" :key="tool" class="m-2 whitespace-nowrap">
            {{ tool }}
          </span>
        </div>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-white">
          GitHub Contributions
        </h2>
        <div class="bg-zinc-800 p-4">
          <p class="text-slate-300 mb-4">
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
        <h2 class="text-2xl font-semibold text-white">
          Featured Projects
        </h2>
        <div class="grid gap-4">
          <div
            v-for="project in projects" :key="project.title"
            class="bg-zinc-800 p-4"
          >
            <h3 class="text-xl font-medium text-white">
              {{ project.title }}
            </h3>
            <p class="text-slate-300 mt-2">
              {{ project.description }}
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech" :key="tech"
                class="px-2 py-1 bg-zinc-600 text-slate-300 text-sm"
              >
                {{ tech }}
              </span>
            </div>
            <div class="space-x-5">
              <NuxtLink
                v-if="project.github"
                :to="project.github" target="_blank"
                rel="noopener noreferrer"
                class="inline-block mt-3 text-blue-400 hover:text-blue-300"
              >
                View on GitHub →
              </NuxtLink>
              <NuxtLink
                v-if="project.web"
                :to="project.web" target="_blank"
                rel="noopener noreferrer"
                class="inline-block mt-3 text-blue-400 hover:text-blue-300"
              >
                View Live →
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
