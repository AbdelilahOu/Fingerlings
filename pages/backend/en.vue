<script setup>
import { Github, Phone, Linkedin, Mail } from "lucide-vue-next";
defineOgImage({
  component: "default",
});
useSeoMeta({
  lang: "en-US",
  title: "Abdelilah's Resume",
  titleTemplate: "%s | abdelilah4dev",
  ogLocale: "en-US",
  ogTitle: "Backend dev resume",
  description: "Backend dev role resume in english.",
  ogDescription: "Backend dev role resume in english.",
  ogImage: "http://localhost:300/backend-en.png",
  twitterTitle: "http://localhost:300/Backend dev resume",
  twitterDescription: "Backend dev role resume in english.",
  twitterImage: "backend-en.png",
});
</script>

<template>
  <main
    class="min-h-screen h-[11in] w-full bg-transparent relative z-20 flex justify-center text-black/80"
  >
    <div class="flex flex-col">
      <!-- HEADER -->
      <div
        class="flex flex-row h-40 px-8 text-white bg-blue-950 items-center justify-between py-2"
      >
        <div class="flex flex-col">
          <h1 class="text-5xl font-semibold">
            Abdelilah <span class="font-normal"> Ouaadouch </span>
          </h1>
          <p class="text-lg text-white">Backend Developer</p>
          <p class="text-base text-white">
            More than two years of experience in backend and fullstack
            development
          </p>
        </div>
        <ul class="flex flex-col items-end">
          <li class="ml-4 flex flex-row-reverse gap-2 items-center">
            <Phone size="17" /> +212 603539796
          </li>
          <li class="ml-4 flex flex-row-reverse gap-2 items-center">
            <Github size="17" /> github.com/AbdelilahOu
          </li>
          <li class="ml-4 flex flex-row-reverse gap-2 items-center">
            <Mail size="17" /> abdelilah4dev@gmail.com
          </li>
          <li class="ml-4 flex flex-row-reverse gap-2 items-center">
            <Linkedin size="17" /> abdelilah-ouaadouch-464060295
          </li>
        </ul>
      </div>
      <!-- CONTENT -->
      <div class="w-full grid h-full px-8 grid-cols-4">
        <!-- SIDE -->
        <div class="w-full h-full pr-2">
          <div class="w-full h-full border-r-2 border-blue-950">
            <div class="w-full flex flex-col h-full pt-2 gap-10">
              <div class="w-full h-fit">
                <h2
                  class="text-base font-bold uppercase underline text-blue-950"
                >
                  Skills
                </h2>
                <div class="flex flex-col space-y-1">
                  <ul class="list-none text-sm">
                    <li>Project Management (Notion)</li>
                    <li>Server Management (Digital Ocean)</li>
                  </ul>
                </div>
              </div>
              <div class="w-full h-fit">
                <h2
                  class="text-base font-bold uppercase underline text-blue-950"
                >
                  Languages
                </h2>
                <div class="flex flex-col space-y-1">
                  <ul class="list-none text-sm">
                    <li>Node.js</li>
                    <li>Javascript / Typescript</li>
                    <li>Golang</li>
                    <li>Rust</li>
                    <li>SQL (MySql, PostgreSQL)</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
              <div class="w-full h-fit">
                <h2
                  class="text-base font-bold uppercase underline text-blue-950"
                >
                  Frameworks
                </h2>
                <div class="flex flex-col space-y-1">
                  <ul class="list-none text-sm">
                    <li>Express.js (Typescript)</li>
                    <li>Next.js (Typescript)</li>
                    <li>Nuxt.js (Typescript)</li>
                    <li>Nest.js (Typescript)</li>
                    <li>Actix-web (Rust)</li>
                    <li>Chi (Golang)</li>
                  </ul>
                </div>
              </div>
              <div class="w-full h-fit">
                <h2
                  class="text-base font-bold uppercase underline text-blue-950"
                >
                  Tools
                </h2>
                <div class="flex flex-col space-y-1">
                  <ul class="list-none text-sm">
                    <li>Docker</li>
                    <li>Postman</li>
                    <li>Github</li>
                    <li>Git</li>
                    <li>Terminal</li>
                  </ul>
                </div>
              </div>
              <div class="w-full h-fit">
                <h2
                  class="text-base font-bold uppercase underline text-blue-950"
                >
                  Interest
                </h2>
                <div class="flex flex-col space-y-1">
                  <ul class="list-none text-sm">
                    <li>Open-source</li>
                    <li>Programming</li>
                    <li>Web Design</li>
                    <li>Music</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- MAIN -->
        <div class="w-full pt-2 flex px-2 flex-col gap-2 col-span-3">
          <!-- EXPR -->
          <div class="w-full flex flex-col space-y-2">
            <h2 class="text-base font-bold uppercase underline text-blue-950">
              Experience
            </h2>
            <div class="flex flex-col space-y-1 pl-1">
              <div class="flex items-center space-x-2">
                <div class="text-sm font-medium flex items-center gap-2">
                  <span class="font-semibold">Backend Developer</span> |
                  <p class="text-sm font-light">
                    Groupe Scolaire Cloude Bernard
                  </p>
                  <span class="text-xs font-light">(Oct 2023 - May 2024)</span>
                </div>
              </div>
              <ul class="list-disc text-sm pl-8">
                <li>
                  Developed performant APIs for mobile and web applications
                  using Golang.
                </li>
                <li>
                  Designed scalable database schema and migrations with
                  PostgreSQL.
                </li>
                <li>
                  Integrated push notification functionality for the mobile app.
                </li>
                <li>
                  Deployed applications on Railway using Docker containers.
                </li>
              </ul>
              <p class="text-sm italic pl-4 text-gray-500 font-light">
                <span class="underline mr-2"> Technologies:</span> Golang,
                PostgreSQL and Docker
              </p>
            </div>
            <div class="flex flex-col space-y-1 pl-1">
              <div class="flex items-center space-x-2">
                <div class="text-sm font-medium flex items-center gap-2">
                  <span class="font-semibold">Fullstack Developer</span> |
                  <p class="font-light">Modoock</p>
                  <span class="text-xs font-light">(May 2024)</span>
                </div>
              </div>
              <ul class="list-disc text-sm pl-8">
                <li>
                  Implemented secure and scalable APIs for Modoock's web
                  application using Express.js and Node.js.
                </li>
                <li>
                  Utilized an ORM to interact with the database (Prisma),
                  improving development experience for the team.
                </li>
              </ul>
              <p class="text-sm italic pl-4 text-gray-500 font-light">
                <span class="underline mr-2"> Technologies:</span> Node.js,
                MySQL, Prisma and Docker
              </p>
            </div>
            <div class="flex flex-col space-y-1 pl-1">
              <div class="flex items-center space-x-2">
                <div class="text-sm font-medium flex items-center gap-2">
                  <span class="font-semibold">Fullstack Intern</span> |
                  <p class="font-light">Sotralait</p>
                  <span class="text-xs font-light">(jun 2023 - july 2023)</span>
                </div>
              </div>
              <ul class="list-disc text-sm pl-8">
                <li>
                  Successfully migrated a Spring-boot backend to a newer version
                  of Java, ensuring improved performance and maintainability.
                </li>
                <li>
                  Mentored new interns, helping them get familiar with the
                  project and contributing to a more knowledgeable team.
                </li>
                <li>
                  Worked on internationalization of the app, expanding its reach
                  to a wider user base.
                </li>
              </ul>
              <p class="text-sm italic pl-4 text-gray-500 font-light">
                <span class="underline mr-2"> Technologies:</span> Java,
                Spring-boot, Angular, MySQL and Docker
              </p>
            </div>
          </div>
          <!-- PRJ -->
          <div class="w-full flex flex-col space-y-2">
            <h2 class="text-base font-bold uppercase underline text-blue-950">
              Projects
            </h2>
            <div class="flex flex-col space-y-1 pl-1">
              <div class="flex items-center space-x-2">
                <div class="text-sm font-medium flex items-center gap-2">
                  <span class="font-semibold">School Management API</span> |
                  <span class="text-sm font-light">
                    Rust-based API facilitates efficient school
                    administration</span
                  >
                </div>
              </div>
              <ul class="list-disc text-sm pl-8">
                <li>Developed a robust school management API using Rust.</li>
                <li>
                  Leverages pagination and indexing for efficient querying of
                  large datasets, ensuring fast performance.
                </li>
                <li>
                  Implemented database migrations using Docker, enabling
                  seamless database schema updates.
                </li>
                <li>
                  Integrated Google OAuth for secure user authentication,
                  enhancing user experience and data privacy.
                </li>
              </ul>
              <p class="text-sm pl-4 text-gray-500 font-light">
                <span class="underline italic mr-2"> Technologies:</span> Rust,
                Actix-web, Postgres and Google OAuth
              </p>
            </div>
            <div class="flex flex-col space-y-1 pl-1">
              <div class="flex items-center space-x-2">
                <div class="text-sm font-medium flex items-center gap-2">
                  <span class="font-semibold">Fullstack Pets Setting</span> |
                  <span class="text-sm font-light">
                    Real-time application designed to connect pet lovers</span
                  >
                </div>
              </div>
              <div class="flex flex-col space-y-1 pl-1">
                <ul class="list-disc text-sm pl-8">
                  <li>
                    Enables real-time communication between pet owners and pet
                    setters.
                  </li>
                  <li>
                    Utilizes Google Authentication for secure and convenient
                    user login.
                  </li>
                  <li>
                    Use Firebase as the backend, offering a scalable
                    infrastructure for real-time data management.
                  </li>
                </ul>
                <p class="text-sm pl-4 text-gray-500 font-light">
                  <span class="underline italic mr-2"> Technologies:</span>
                  Vue.js, Firebase (Authentication & Realtime Database), Google
                  Authentication
                </p>
              </div>
            </div>
          </div>
          <!-- EDU -->
          <div class="w-full flex flex-col space-y-2">
            <h2 class="text-base font-bold uppercase underline text-blue-950">
              Education
            </h2>
            <ul class="list-disc text-sm pl-8">
              <li>
                Technician specialized in web development - ESET marrakech (2020
                - 2022)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
