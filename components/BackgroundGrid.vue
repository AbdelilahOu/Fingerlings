<script setup lang="ts">
defineProps<{
  bgColor?: string;
}>();

const svgElement = ref<HTMLElement | null>(null);
const width = computed(() => svgElement.value?.clientWidth || 768);
const height = computed(() => svgElement.value?.clientHeight || 768);
</script>

<template>
  <svg
    ref="svgElement"
    class="absolute left-0 top-0 z-0 w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <template v-for="y in Math.ceil(height / 16)">
      <rect
        v-for="x in Math.ceil(width / 16)"
        :key="`${x}-${y}`"
        :x="(x - 1) * 16"
        :y="(y - 1) * 16"
        width="16"
        height="16"
        :style="{
          animationDelay: `${Math.random() * 2000}ms`,
          fill: bgColor || '#0c0c0c',
          stroke: bgColor || '#0c0c0c',
        }"
        class="opacity-10 absolute animate-pulse duration-500"
      ></rect>
    </template>
  </svg>
</template>
