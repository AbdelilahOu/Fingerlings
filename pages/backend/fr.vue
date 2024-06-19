<script setup>
import { Github, Phone, Linkedin, Mail } from "lucide-vue-next";
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
          <p class="text-lg text-white">Développeur Backend</p>
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
                  class="text-base font-bold uppercase underline text-blue-900"
                >
                  Compétences
                </h2>
                <div class="flex flex-col space-y-1">
                  <ul class="list-none text-sm">
                    <li>Gestion de projet (Notion)</li>
                    <li>Gestion de serveur (Digital Ocean)</li>
                  </ul>
                </div>
              </div>
              <div class="w-full h-fit">
                <h2
                  class="text-base font-bold uppercase underline text-blue-900"
                >
                  Langues
                </h2>
                <div class="flex flex-col space-y-1">
                  <ul class="list-none text-sm">
                    <li>Node.js</li>
                    <li>Javascript / Typescript</li>
                    <li>Golang</li>
                    <li>Rust</li>
                    <li>SQL (MySQL, PostgreSQL)</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
              <div class="w-full h-fit">
                <h2
                  class="text-base font-bold uppercase underline text-blue-900"
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
                  class="text-base font-bold uppercase underline text-blue-900"
                >
                  Outils
                </h2>
                <div class="flex flex-col space-y-1">
                  <ul class="list-none text-sm">
                    <li>Docker</li>
                    <li>Postman</li>
                    <li>Git</li>
                    <li>Github</li>
                    <li>Terminal</li>
                  </ul>
                </div>
              </div>
              <div class="w-full h-fit">
                <h2
                  class="text-base font-bold uppercase underline text-blue-900"
                >
                  Intérêts
                </h2>
                <div class="flex flex-col space-y-1">
                  <ul class="list-none text-sm">
                    <li>Open-source</li>
                    <li>Programmation</li>
                    <li>Conception de sites Web</li>
                    <li>Musique</li>
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
            <h2 class="text-base font-bold uppercase underline text-blue-900">
              Expérience
            </h2>
            <div class="flex flex-col space-y-1 pl-1">
              <div class="flex items-center space-x-2">
                <div class="text-sm font-medium flex items-center gap-2">
                  <span class="font-semibold">Développeur Backend</span> |
                  <p class="text-sm font-light">
                    Groupe Scolaire Cloude Bernard
                  </p>
                  <span class="text-xs font-light">(Oct 2023 - Mai 2024)</span>
                </div>
              </div>
              <ul class="list-disc text-sm pl-8">
                <li>
                  Développé des API performantes pour les applications mobiles
                  et Web en utilisant Golang.
                </li>
                <li>
                  Conçu un schéma de base de données évolutif et des migrations
                  avec PostgreSQL.
                </li>
                <li>
                  Fonctionnalité de push notification intégrée pour
                  l'application mobile.
                </li>
                <li>
                  Déployé des applications sur Railway en utilisant Docker.
                </li>
              </ul>
              <p class="text-sm italic pl-4 text-gray-500 font-light">
                <span class="underline mr-2"> Technologies:</span> Golang,
                PostgreSQL et Docker
              </p>
            </div>
            <div class="flex flex-col space-y-1 pl-1">
              <div class="flex items-center space-x-2">
                <div class="text-sm font-medium flex items-center gap-2">
                  <span class="font-semibold">Développeur Fullstack</span> |
                  <p class="font-light">Modoock</p>
                  <span class="text-xs font-light">(Mai 2024)</span>
                </div>
              </div>
              <ul class="list-disc text-sm pl-8">
                <li>
                  Implémenté des API sécurisées et évolutives pour l'application
                  Web de Modoock en utilisant Express.js et Node.js.
                </li>
                <li>
                  Utilisé un ORM pour interagir avec la base de données
                  (Prisma), améliorant l'expérience de développement pour
                  l'équipe.
                </li>
              </ul>
              <p class="text-sm italic pl-4 text-gray-500 font-light">
                <span class="underline mr-2"> Technologies:</span> Node.js,
                MySQL, Prisma et Docker
              </p>
            </div>
            <div class="flex flex-col space-y-1 pl-1">
              <div class="flex items-center space-x-2">
                <div class="text-sm font-medium flex items-center gap-2">
                  <span class="font-semibold">Stagiaire Fullstack</span> |
                  <p class="font-light">Sotralait</p>
                  <span class="text-xs font-light"
                    >(juin 2023 - juillet 2023)</span
                  >
                </div>
              </div>
              <ul class="list-disc text-sm pl-8">
                <li>
                  Migration réussie d'un backend Spring-boot vers une version
                  plus récente de Java, garantissant des performances et une
                  maintenabilité améliorées.
                </li>
                <li>
                  Encadré de nouveaux stagiaires, les aidant à se familiariser
                  avec le projet et à contribuer à une équipe plus compétente.
                </li>
                <li>
                  Travaillé sur l'internationalisation de l'application,
                  élargissant sa portée à une base d'utilisateurs plus large.
                </li>
              </ul>
              <p class="text-sm italic pl-4 text-gray-500 font-light">
                <span class="underline mr-2"> Technologies:</span> Java,
                Spring-boot, Angular, MySQL et Docker
              </p>
            </div>
          </div>

          <!-- PRJ -->
          <div class="w-full flex flex-col space-y-2">
            <h2 class="text-base font-bold uppercase underline text-blue-900">
              Projets
            </h2>
            <div class="flex flex-col space-y-1 pl-1">
              <div class="flex items-center space-x-2">
                <div class="text-sm font-medium flex items-center gap-2">
                  <span class="font-semibold">API de gestion scolaire</span> |
                  <span class="text-sm font-light">
                    L'API basée sur Rust facilite l'administration scolaire
                    efficace
                  </span>
                </div>
              </div>
              <ul class="list-disc text-sm pl-8">
                <li>
                  Développé une API robuste de gestion scolaire en utilisant
                  Rust.
                </li>
                <li>
                  Exploite la pagination et l'indexation pour une interrogation
                  efficace des de grands ensembles de données, ce qui garantit
                  des performances rapides.
                </li>
                <li>
                  Mettre en œuvre des migrations de bases de données à l'aide de
                  Docker, permettant des mises à jour transparentes des schémas
                  de base de données.
                </li>
                <li>
                  Intégration de Google OAuth pour une authentification
                  sécurisée des utilisateurs, améliorant l'expérience
                  utilisateur et la confidentialité des données.
                </li>
              </ul>
              <p class="text-sm pl-4 text-gray-500 font-light">
                <span class="underline italic mr-2"> Technologies:</span> Rust,
                Actix-web, Postgres et Google OAuth
              </p>
            </div>
            <div class="flex flex-col space-y-1 pl-1">
              <div class="flex items-center space-x-2">
                <div class="text-sm font-medium flex items-center gap-2">
                  <span class="font-semibold">Fullstack Pets Setting</span> |
                  <span class="text-sm font-light">
                    Site web conçue pour connecter les amoureux des animaux
                  </span>
                </div>
              </div>
              <div class="flex flex-col space-y-1 pl-1">
                <ul class="list-disc text-sm pl-8">
                  <li>
                    Permet une communication en temps réel entre les
                    propriétaires d'animaux et les gardiens d'animaux.
                  </li>
                  <li>
                    Utilise l'authentification Google pour une connexion
                    utilisateur sécurisée et pratique.
                  </li>
                  <li>
                    Utilise Firebase comme backend, offrant une infrastructure
                    évolutive pour la gestion des données en temps réel.
                  </li>
                </ul>
                <p class="text-sm pl-4 text-gray-500 font-light">
                  <span class="underline italic mr-2"> Technologies:</span>
                  Vue.js, Firebase (Authentification et base de données en temps
                  réel), Authentification Google
                </p>
              </div>
            </div>
          </div>

          <!-- EDU -->
          <div class="w-full flex flex-col space-y-2">
            <h2 class="text-base font-bold uppercase underline text-blue-900">
              Formation
            </h2>
            <ul class="list-disc text-sm pl-8">
              <li>
                Technicien spécialisé en développement web - ESET marrakech
                (2020 - 2022)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
