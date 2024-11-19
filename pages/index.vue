<script setup lang="ts">
definePageMeta({
  colorMode: "dark",
});

// defineOgImageComponent(
//   'HomeOgImage',
//   {},
//   {
//     fonts: [
//       {
//         name: 'Pixelify Sans',
//       },
//     ],
//   },
// )

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
      cal: {
        "2024-01-01": {
          github: 7
        },
        "2024-01-02": {
          github: 11
        },
        "2024-01-03": {
          github: 7
        },
        "2024-01-04": {
          github: 10
        },
        "2024-01-05": {
          github: 2
        },
        "2024-01-06": {
          github: 4
        },
        "2024-01-07": {
          github: 5
        },
        "2024-01-08": {
          github: 9
        },
        "2024-01-09": {
          github: 1
        },
        "2024-01-10": {
          github: 1
        },
        "2024-01-11": {
          github: 7
        },
        "2024-01-12": {
          github: 4
        },
        "2024-01-13": {
          github: 3
        },
        "2024-01-14": {
          github: 5
        },
        "2024-01-15": {
          github: 4
        },
        "2024-01-16": {
          github: 4
        },
        "2024-01-17": {
          github: 2
        },
        "2024-01-18": {
          github: 7
        },
        "2024-01-19": {
          github: 3
        },
        "2024-01-20": {
          github: 2
        },
        "2024-01-21": {
          github: 9
        },
        "2024-01-22": {
          github: 6
        },
        "2024-01-23": {
          github: 4
        },
        "2024-01-24": {
          github: 13
        },
        "2024-01-25": {
          github: 8
        },
        "2024-01-26": {
          github: 2
        },
        "2024-01-27": {
          github: 2
        },
        "2024-01-28": {
          github: 1
        },
        "2024-01-29": {
          github: 12
        },
        "2024-01-30": {
          github: 8
        },
        "2024-01-31": {
          github: 3
        },
        "2024-02-01": {
          github: 9
        },
        "2024-02-02": {
          github: 6
        },
        "2024-02-03": {
          github: 14
        },
        "2024-02-04": {
          github: 8
        },
        "2024-02-05": {
          github: 3
        },
        "2024-02-06": {
          github: 4
        },
        "2024-02-07": {
          github: 6
        },
        "2024-02-08": {
          github: 21
        },
        "2024-02-09": {
          github: 6
        },
        "2024-02-10": {
          github: 2
        },
        "2024-02-11": {
          github: 3
        },
        "2024-02-12": {
          github: 6
        },
        "2024-02-13": {
          github: 7
        },
        "2024-02-14": {
          github: 6
        },
        "2024-02-15": {
          github: 9
        },
        "2024-02-16": {
          github: 9
        },
        "2024-02-17": {
          github: 5
        },
        "2024-02-18": {
          github: 3
        },
        "2024-02-19": {
          github: 12
        },
        "2024-02-20": {
          github: 6
        },
        "2024-02-21": {
          github: 7
        },
        "2024-02-22": {
          github: 7
        },
        "2024-02-23": {
          github: 4
        },
        "2024-02-24": {
          github: 8
        },
        "2024-02-25": {
          github: 11
        },
        "2024-02-26": {
          github: 10
        },
        "2024-02-27": {
          github: 15
        },
        "2024-02-28": {
          github: 6
        },
        "2024-02-29": {
          github: 5
        },
        "2024-03-01": {
          github: 6
        },
        "2024-03-02": {
          github: 8
        },
        "2024-03-03": {
          github: 5
        },
        "2024-03-04": {
          github: 8
        },
        "2024-03-05": {
          github: 15
        },
        "2024-03-06": {
          github: 22
        },
        "2024-03-07": {
          github: 10
        },
        "2024-03-08": {
          github: 10
        },
        "2024-03-09": {
          github: 8
        },
        "2024-03-10": {
          github: 1
        },
        "2024-03-11": {
          github: 1
        },
        "2024-03-12": {
          github: 3
        },
        "2024-03-13": {
          github: 2
        },
        "2024-03-14": {
          github: 4
        },
        "2024-03-15": {
          github: 3
        },
        "2024-03-16": {
          github: 2
        },
        "2024-03-17": {
          github: 3
        },
        "2024-03-18": {
          github: 7
        },
        "2024-03-19": {
          github: 8
        },
        "2024-03-20": {
          github: 3
        },
        "2024-03-21": {
          github: 5
        },
        "2024-03-22": {
          github: 2
        },
        "2024-03-23": {
          github: 3
        },
        "2024-03-24": {
          github: 12
        },
        "2024-03-25": {
          github: 8
        },
        "2024-03-26": {
          github: 8
        },
        "2024-03-27": {
          github: 8
        },
        "2024-03-28": {
          github: 9
        },
        "2024-03-29": {
          github: 7
        },
        "2024-03-30": {
          github: 2
        },
        "2024-03-31": {
          github: 8
        },
        "2024-04-01": {
          github: 1
        },
        "2024-04-02": {
          github: 2
        },
        "2024-04-03": {
          github: 7
        },
        "2024-04-04": {
          github: 4
        },
        "2024-04-05": {
          github: 6
        },
        "2024-04-06": {
          github: 4
        },
        "2024-04-07": {
          github: 5
        },
        "2024-04-08": {
          github: 2
        },
        "2024-04-09": {
          github: 5
        },
        "2024-04-10": {
          github: 6
        },
        "2024-04-11": {
          github: 3
        },
        "2024-04-12": {
          github: 1
        },
        "2024-04-13": {
          github: 6
        },
        "2024-04-14": {
          github: 2
        },
        "2024-04-15": {
          github: 12
        },
        "2024-04-16": {
          github: 8
        },
        "2024-04-17": {
          github: 2
        },
        "2024-04-18": {
          github: 1
        },
        "2024-04-19": {
          github: 5
        },
        "2024-04-20": {
          github: 5
        },
        "2024-04-21": {
          github: 1
        },
        "2024-04-22": {
          github: 0
        },
        "2024-04-23": {
          github: 0
        },
        "2024-04-24": {
          github: 2
        },
        "2024-04-25": {
          github: 5
        },
        "2024-04-26": {
          github: 3
        },
        "2024-04-27": {
          github: 2
        },
        "2024-04-28": {
          github: 1
        },
        "2024-04-29": {
          github: 3
        },
        "2024-04-30": {
          github: 3
        },
        "2024-05-01": {
          github: 7
        },
        "2024-05-02": {
          github: 1
        },
        "2024-05-03": {
          github: 1
        },
        "2024-05-04": {
          github: 1
        },
        "2024-05-05": {
          github: 1
        },
        "2024-05-06": {
          github: 6
        },
        "2024-05-07": {
          github: 2
        },
        "2024-05-08": {
          github: 3
        },
        "2024-05-09": {
          github: 2
        },
        "2024-05-10": {
          github: 1
        },
        "2024-05-11": {
          github: 4
        },
        "2024-05-12": {
          github: 2
        },
        "2024-05-13": {
          github: 1
        },
        "2024-05-14": {
          github: 7
        },
        "2024-05-15": {
          github: 1
        },
        "2024-05-16": {
          github: 7
        },
        "2024-05-17": {
          github: 4
        },
        "2024-05-18": {
          github: 1
        },
        "2024-05-19": {
          github: 1
        },
        "2024-05-20": {
          github: 19
        },
        "2024-05-21": {
          github: 3
        },
        "2024-05-22": {
          github: 1
        },
        "2024-05-23": {
          github: 2
        },
        "2024-05-24": {
          github: 0
        },
        "2024-05-25": {
          github: 4
        },
        "2024-05-26": {
          github: 3
        },
        "2024-05-27": {
          github: 1
        },
        "2024-05-28": {
          github: 3
        },
        "2024-05-29": {
          github: 8
        },
        "2024-05-30": {
          github: 8
        },
        "2024-05-31": {
          github: 3
        },
        "2024-06-01": {
          github: 2
        },
        "2024-06-02": {
          github: 0
        },
        "2024-06-03": {
          github: 0
        },
        "2024-06-04": {
          github: 7
        },
        "2024-06-05": {
          github: 4
        },
        "2024-06-06": {
          github: 1
        },
        "2024-06-07": {
          github: 5
        },
        "2024-06-08": {
          github: 0
        },
        "2024-06-09": {
          github: 4
        },
        "2024-06-10": {
          github: 8
        },
        "2024-06-11": {
          github: 0
        },
        "2024-06-12": {
          github: 14
        },
        "2024-06-13": {
          github: 3
        },
        "2024-06-14": {
          github: 1
        },
        "2024-06-15": {
          github: 0
        },
        "2024-06-16": {
          github: 1
        },
        "2024-06-17": {
          github: 0
        },
        "2024-06-18": {
          github: 0
        },
        "2024-06-19": {
          github: 3
        },
        "2024-06-20": {
          github: 4
        },
        "2024-06-21": {
          github: 1
        },
        "2024-06-22": {
          github: 2
        },
        "2024-06-23": {
          github: 0
        },
        "2024-06-24": {
          github: 6
        },
        "2024-06-25": {
          github: 0
        },
        "2024-06-26": {
          github: 3
        },
        "2024-06-27": {
          github: 2
        },
        "2024-06-28": {
          github: 0
        },
        "2024-06-29": {
          github: 1
        },
        "2024-06-30": {
          github: 3
        },
        "2024-07-01": {
          github: 7
        },
        "2024-07-02": {
          github: 4
        },
        "2024-07-03": {
          github: 6
        },
        "2024-07-04": {
          github: 1
        },
        "2024-07-05": {
          github: 4
        },
        "2024-07-06": {
          github: 10
        },
        "2024-07-07": {
          github: 3
        },
        "2024-07-08": {
          github: 3
        },
        "2024-07-09": {
          github: 0
        },
        "2024-07-10": {
          github: 6
        },
        "2024-07-11": {
          github: 1
        },
        "2024-07-12": {
          github: 4
        },
        "2024-07-13": {
          github: 5
        },
        "2024-07-14": {
          github: 7
        },
        "2024-07-15": {
          github: 1
        },
        "2024-07-16": {
          github: 5
        },
        "2024-07-17": {
          github: 2
        },
        "2024-07-18": {
          github: 1
        },
        "2024-07-19": {
          github: 2
        },
        "2024-07-20": {
          github: 2
        },
        "2024-07-21": {
          github: 1
        },
        "2024-07-22": {
          github: 10
        },
        "2024-07-23": {
          github: 7
        },
        "2024-07-24": {
          github: 5
        },
        "2024-07-25": {
          github: 9
        },
        "2024-07-26": {
          github: 7
        },
        "2024-07-27": {
          github: 7
        },
        "2024-07-28": {
          github: 6
        },
        "2024-07-29": {
          github: 2
        },
        "2024-07-30": {
          github: 10
        },
        "2024-07-31": {
          github: 13
        },
        "2024-08-01": {
          github: 6
        },
        "2024-08-02": {
          github: 4
        },
        "2024-08-03": {
          github: 5
        },
        "2024-08-04": {
          github: 1
        },
        "2024-08-05": {
          github: 0
        },
        "2024-08-06": {
          github: 2
        },
        "2024-08-07": {
          github: 1
        },
        "2024-08-08": {
          github: 1
        },
        "2024-08-09": {
          github: 0
        },
        "2024-08-10": {
          github: 2
        },
        "2024-08-11": {
          github: 2
        },
        "2024-08-12": {
          github: 2
        },
        "2024-08-13": {
          github: 2
        },
        "2024-08-14": {
          github: 9
        },
        "2024-08-15": {
          github: 5
        },
        "2024-08-16": {
          github: 1
        },
        "2024-08-17": {
          github: 1
        },
        "2024-08-18": {
          github: 4
        },
        "2024-08-19": {
          github: 4
        },
        "2024-08-20": {
          github: 3
        },
        "2024-08-21": {
          github: 5
        },
        "2024-08-22": {
          github: 5
        },
        "2024-08-23": {
          github: 7
        },
        "2024-08-24": {
          github: 3
        },
        "2024-08-25": {
          github: 1
        },
        "2024-08-26": {
          github: 10
        },
        "2024-08-27": {
          github: 5
        },
        "2024-08-28": {
          github: 4
        },
        "2024-08-29": {
          github: 5
        },
        "2024-08-30": {
          github: 3
        },
        "2024-08-31": {
          github: 10
        },
        "2024-09-01": {
          github: 4
        },
        "2024-09-02": {
          github: 2
        },
        "2024-09-03": {
          github: 2
        },
        "2024-09-04": {
          github: 1
        },
        "2024-09-05": {
          github: 1
        },
        "2024-09-06": {
          github: 3
        },
        "2024-09-07": {
          github: 2
        },
        "2024-09-08": {
          github: 1
        },
        "2024-09-09": {
          github: 1
        },
        "2024-09-10": {
          github: 0
        },
        "2024-09-11": {
          github: 0
        },
        "2024-09-12": {
          github: 0
        },
        "2024-09-13": {
          github: 0
        },
        "2024-09-14": {
          github: 1
        },
        "2024-09-15": {
          github: 0
        },
        "2024-09-16": {
          github: 0
        },
        "2024-09-17": {
          github: 0
        },
        "2024-09-18": {
          github: 0
        },
        "2024-09-19": {
          github: 0
        },
        "2024-09-20": {
          github: 0
        },
        "2024-09-21": {
          github: 0
        },
        "2024-09-22": {
          github: 0
        },
        "2024-09-23": {
          github: 0
        },
        "2024-09-24": {
          github: 0
        },
        "2024-09-25": {
          github: 0
        },
        "2024-09-26": {
          github: 0
        },
        "2024-09-27": {
          github: 0
        },
        "2024-09-28": {
          github: 0
        },
        "2024-09-29": {
          github: 1
        },
        "2024-09-30": {
          github: 1
        },
        "2024-10-01": {
          github: 3
        },
        "2024-10-02": {
          github: 1
        },
        "2024-10-03": {
          github: 2
        },
        "2024-10-04": {
          github: 2
        },
        "2024-10-05": {
          github: 1
        },
        "2024-10-06": {
          github: 8
        },
        "2024-10-07": {
          github: 9
        },
        "2024-10-08": {
          github: 3
        },
        "2024-10-09": {
          github: 5
        },
        "2024-10-10": {
          github: 5
        },
        "2024-10-11": {
          github: 4
        },
        "2024-10-12": {
          github: 5
        },
        "2024-10-13": {
          github: 1
        },
        "2024-10-14": {
          github: 1
        },
        "2024-10-15": {
          github: 1
        },
        "2024-10-16": {
          github: 1
        },
        "2024-10-17": {
          github: 1
        },
        "2024-10-18": {
          github: 0
        },
        "2024-10-19": {
          github: 9
        },
        "2024-10-20": {
          github: 5
        },
        "2024-10-21": {
          github: 7
        },
        "2024-10-22": {
          github: 1
        },
        "2024-10-23": {
          github: 3
        },
        "2024-10-24": {
          github: 6
        },
        "2024-10-25": {
          github: 5
        },
        "2024-10-26": {
          github: 4
        },
        "2024-10-27": {
          github: 7
        },
        "2024-10-28": {
          github: 2
        },
        "2024-10-29": {
          github: 10
        },
        "2024-10-30": {
          github: 2
        },
        "2024-10-31": {
          github: 12
        },
        "2024-11-01": {
          github: 6
        },
        "2024-11-02": {
          github: 13
        },
        "2024-11-03": {
          github: 16
        },
        "2024-11-04": {
          github: 4
        },
        "2024-11-05": {
          github: 13
        },
        "2024-11-06": {
          github: 20
        },
        "2024-11-07": {
          github: 21
        },
        "2024-11-08": {
          github: 18
        },
        "2024-11-09": {
          github: 14
        },
        "2024-11-10": {
          github: 8
        },
        "2024-11-11": {
          github: 20
        },
        "2024-11-12": {
          github: 3
        },
        "2024-11-13": {
          github: 9
        },
        "2024-11-14": {
          github: 3
        },
        "2024-11-15": {
          github: 16
        },
        "2024-11-16": {
          github: 15
        },
        "2024-11-17": {
          github: 0
        },
        "2024-11-18": {
          github: 0
        },
        "2024-11-19": {
          github: 0
        },
        "2024-11-20": {
          github: 0
        },
        "2024-11-21": {
          github: 0
        },
        "2024-11-22": {
          github: 0
        },
        "2024-11-23": {
          github: 0
        },
        "2024-11-24": {
          github: 0
        },
        "2024-11-25": {
          github: 0
        },
        "2024-11-26": {
          github: 0
        },
        "2024-11-27": {
          github: 0
        },
        "2024-11-28": {
          github: 0
        },
        "2024-11-29": {
          github: 0
        },
        "2024-11-30": {
          github: 0
        },
        "2024-12-01": {
          github: 0
        }
      },
      totalGH: 1484
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
      = data.value.data.user.contributionsCollection.contributionCalendar.weeks
      || [];
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

const languages = ["Golang", "Rust", "Typescript", "Javascript", "Html", "Css", "Sql", "PostgreSQl"];
const frameworks = ["Gin (golang)", "Chi (golang)", "Actix (rust)", "Express.js", "Nitro.js", "Nuxt.js", "Tailwindcss", "Vue.js", "Next.js", "Tauri"];
const tools = ["Docker", "Git", "Github", "Postman"];

// Projects data
const projects = [
  {
    title: "Mahalli",
    description: "A web app that makes running your business easier. Keep track of inventory, manage client relationships, and create professional quotes and orders all in one place.",
    tech: ["Nuxt3", "Typescript", "Tailwindcss", "Golang", "PostgreSQL", "Gin", "SQLC", "Clerk"],
    web: "https://trymahalli.com",
    github: "",
  },
  {
    title: "Cobracase E-commerce",
    description: "An online store where you can design your own unique phone cases. Upload photos, add text, and create cases that tell your story.",
    tech: ["NextJs", "Typescript", "Tailwindcss", "DrizzleOrm", "PostgreSQL", "Stripe", "Kind"],
    web: "https://case-ecommerce.vercel.app/",
    github: "https://github.com/AbdelilahOu/Case-ecommerce",
  },
  {
    title: "Pet Setting App",
    description: "A friendly platform where pet owners can find trusted pet sitters in their area. Browse sitters on a map, chat with them, schedule visits, and share reviews. Perfect for both pet owners looking for care and sitters looking for work.",
    tech: ["Vue.js", "Firebase", "Tailwindcss"],
    web: "",
    github: "https://github.com/AbdelilahOu/Pets-vue",
  },
  {
    title: "Wikipedia Proxy",
    description: "A Go-based tool I built for a coding challenge that sits between you and Wikipedia, tweaking the links you see as you browse. It was a fun way to explore how web proxies work.",
    tech: ["Go"],
    web: "",
    github: "https://github.com/AbdelilahOu/Online-test",
  },
  {
    title: "Rusty School API",
    description: "A simple but reliable backend for managing school data, built with Rust. Handles things like student records and school tasks, with Google login to keep everything secure.",
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
        <h1 class="font-display font-semibold uppercase text-5xl text-white">
          Abdelilah Ouaadouch
        </h1>
        <p class="text-xl text-slate-300">
          Backend Developer specializing in Go (Golang) and Typescript
          <br>
          Backend wizard who speaks fluent Go/Gin, dabbles in Rust for that
          extra speed boost, and crafts slick frontends with TypeScript +
          Nuxt.js. Building fast, reliable systems is my jam. <br>
          let's ship some awesome code!
        </p>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-3xl font-medium text-white">
          Contacts
        </h2>
        <div class="bg-zinc-800 text-slate-300 space-y-2 p-4">
          <NuxtLink
            to="mailto:abdelilah4dev@gmail.com"
            title="abdelilah4dev@gmail.com"
            alt="email address"
            class="text-xl block underline underline-offset-2 hover:border-l hover:pl-2 border-slate-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ "<Email>" }} abdelilah4dev@gmail.com
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/abdelilah-ouaadouch-464060295/"
            title="Abdelilah ouaadouch"
            alt="linkedin profile"
            class="text-xl block underline underline-offset-2 hover:border-l hover:pl-2 border-slate-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ "<Linkedin>" }} Abdelilah ouaadouch
          </NuxtLink>
          <NuxtLink
            to="https://github.com/AbdelilahOu"
            title="@AbdelilahOu"
            alt="github profile"
            class="text-xl block underline underline-offset-2 hover:border-l hover:pl-2 border-slate-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ "<Github>" }} @AbdelilahOu
          </NuxtLink>
          <NuxtLink
            to="https://x.com/Abdelilah4dev"
            title="@Abdelilah4dev"
            alt="twitter profile"
            class="text-xl block underline underline-offset-2 hover:border-l hover:pl-2 border-slate-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ "<Twitter/x>" }} @Abdelilah4dev
          </NuxtLink>
        </div>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-3xl font-medium text-white">
          Languages, Frameworks & tools I use
        </h2>
        <div class="flex flex-wrap gap-4 bg-zinc-800 text-slate-300 p-4 text-lg">
          <span v-for="language in languages" :key="language" class="whitespace-nowrap px-2 py-1 bg-zinc-600 text-slate-300">
            {{ language }}
          </span>
        </div>
        <div class="flex flex-wrap gap-4 bg-zinc-800 text-slate-300 p-4 text-lg">
          <span v-for="framework in frameworks" :key="framework" class="whitespace-nowrap px-2 py-1 bg-zinc-600 text-slate-300">
            {{ framework }}
          </span>
        </div>
        <div class="flex flex-wrap gap-4 bg-zinc-800 text-slate-300 p-4 text-lg">
          <span v-for="tool in tools" :key="tool" class="whitespace-nowrap px-2 py-1 bg-zinc-600 text-slate-300">
            {{ tool }}
          </span>
        </div>
      </section>

      <!--  -->
      <section class="space-y-4">
        <h2 class="text-3xl font-medium text-white">
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
        <h2 class="text-3xl font-medium text-white">
          Featured Projects
        </h2>
        <div class="grid gap-4 relative">
          <article
            v-for="project in projects" :key="project.title"
            class="bg-zinc-800 p-4"
          >
            <h3 class="text-2xl font-medium text-white">
              {{ project.title }}
            </h3>
            <p class="text-slate-300 mt-2 text-xl">
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
          </article>
        </div>
      </section>

      <footer class="font-display uppercase text-lg my-4 h-11 m-auto text-center text-white flex items-center justify-center">
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
