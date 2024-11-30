<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    web?: string;
  };
}>();
</script>

<template>
  <div class="bg-zinc-800 group relative p-[20px]">
    <ClientOnly>
      <BackgroundGrid class="group-hover:blur-sm" />
    </ClientOnly>

    <article class="relative z-10">
      <h3 class="text-2xl block w-full font-medium text-white">
        {{ project.title }}
      </h3>
      <p class="text-slate-300 block mt-2 text-xl">
        {{ project.description }}
      </p>
      <div class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-2 py-1 bg-zinc-600 text-slate-300 text-sm"
        >
          {{ tech }}
        </span>
      </div>
      <div class="space-x-5">
        <NuxtLink
          v-if="project.github"
          :to="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block mt-3 text-blue-400 hover:text-blue-300"
        >
          View on GitHub →
        </NuxtLink>
        <NuxtLink
          v-if="project.web"
          :to="project.web"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block mt-3 text-blue-400 hover:text-blue-300"
        >
          View Live →
        </NuxtLink>
      </div>
    </article>
  </div>
</template>
