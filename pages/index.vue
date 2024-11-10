<script setup lang="ts">
// GitHub contributions fetch logic
const { ghToken } = useRuntimeConfig();
const { data, error } = useLazyAsyncData<{ data: any }>(
  "github_contributions",
  () => {
    const currYr = new Date().getFullYear();
    return $fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${ghToken}`,
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
  }
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
    data.value.data &&
    data.value.data.user &&
    data.value.data.user.contributionsCollection
  ) {
    totalGH =
      data.value.data.user.contributionsCollection.contributionCalendar
        .totalContributions || 0;
    const ghCalData =
      data.value.data.user.contributionsCollection.contributionCalendar.weeks ||
      [];
    for (const week of ghCalData) {
      for (const day of week.contributionDays) {
        if (!cal[day.date]) cal[day.date] = { github: 0 };
        cal[day.date].github = day.contributionCount;
      }
    }
  }
  return {
    cal,
    totalGH,
  };
});

// Projects data
const projects = [
  {
    title: "E-commerce Microservice",
    description:
      "High-performance e-commerce backend built with Go, featuring product management, order processing, and inventory tracking.",
    tech: ["Go", "gRPC", "PostgreSQL", "Docker"],
    github: "https://github.com/AbdelilahOu/ecommerce-service",
  },
  {
    title: "Real-time Chat System",
    description:
      "Scalable chat application backend using WebSocket protocol and Go channels for real-time message delivery.",
    tech: ["Go", "WebSocket", "Redis", "MongoDB"],
    github: "https://github.com/AbdelilahOu/chat-system",
  },
  {
    title: "API Gateway",
    description:
      "Custom API gateway implementing rate limiting, request routing, and authentication middleware.",
    tech: ["Go", "JWT", "Redis", "Docker"],
    github: "https://github.com/AbdelilahOu/api-gateway",
  },
];
</script>

<template>
  <div class="w-screen min-h-screen bg-[#0c0c0c] py-8 px-4">
    <div class="w-full max-w-3xl space-y-8 m-auto">
      <!--  -->
      <section class="space-y-4">
        <h1 class="font-vermin font-semibold text-4xl text-slate-50">
          Abdelilah Ouaadouch
        </h1>
        <div class="text-slate-300">
          <p class="text-lg mb-4">
            Backend Developer specializing in Go (Golang)
          </p>
          <p class="text-base opacity-90">
            Passionate about building scalable and efficient backend systems
            using Go. Experienced in developing microservices, RESTful APIs, and
            distributed systems.
          </p>
        </div>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-slate-50">
          Languages & Frameworks I use
        </h2>
        <div class="bg-zinc-700 p-4"></div>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-slate-50">
          GitHub Contributions
        </h2>
        <div class="bg-zinc-700 p-4">
          <p class="text-slate-300 mb-4">
            Total Contributions in {{ new Date().getFullYear() }}:
            <span class="font-semibold text-green-400">{{
              githubContributions.totalGH
            }}</span>
          </p>
          <ClientOnly>
            <GithubGraph :data="githubContributions" />
          </ClientOnly>
        </div>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-slate-50">Featured Projects</h2>
        <div class="grid gap-4">
          <div
            v-for="project in projects"
            :key="project.title"
            class="bg-zinc-700 p-4"
          >
            <h3 class="text-xl font-medium text-slate-50">
              {{ project.title }}
            </h3>
            <p class="text-slate-300 mt-2">{{ project.description }}</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-2 py-1 bg-zinc-600 text-slate-300 text-sm"
              >
                {{ tech }}
              </span>
            </div>
            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mt-3 text-blue-400 hover:text-blue-300"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
