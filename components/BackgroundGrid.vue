<script setup lang="ts">
defineProps<{
    bgColor?: string;
}>();

const svgElement = ref<HTMLElement | null>(null);
const width = computed(() => svgElement.value?.clientWidth || 768);
const height = computed(() => svgElement.value?.clientHeight || 768);
const size = computed(() => {
    const widthPercentage = window.innerWidth <= 768 ? 0.05 : 0.02;
    return Math.floor(width.value * widthPercentage);
});
</script>

<template>
    <svg
        ref="svgElement"
        data-nosnippet
        class="absolute left-0 top-0 z-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <template v-for="x in Math.ceil(width / size)">
            <rect
                v-for="y in Math.floor(Math.random() * (height / 2 / size))"
                :key="`${x}-${y}`"
                :x="(x - 1) * size"
                :y="height - size * y"
                :width="size"
                :height="size"
                :style="{
                    // animationDelay: `${Math.random() * 5}s`,
                    // animationDuration: `${Math.random() * 5 + 2}s`,
                    fill: bgColor || '#0c0c0c',
                    stroke: bgColor || '#0c0c0c',
                    opacity: Number(Math.random().toFixed(2)),
                }"
            />
            <!-- class="opacity-0 animate-pulse" -->
            <rect
                v-for="y in Math.floor(Math.random() * (height / 2 / size))"
                :key="`${x}-${y}`"
                :x="(x - 1) * size"
                :y="size * (y - 1)"
                :width="size"
                :height="size"
                :style="{
                    // animationDelay: `${Math.random() * 5}s`,
                    // animationDuration: `${Math.random() * 5 + 2}s`,
                    fill: bgColor || '#0c0c0c',
                    stroke: bgColor || '#0c0c0c',
                    opacity: Number(Math.random().toFixed(2)),
                }"
            />
            <!-- class="opacity-0 animate-pulse" -->
        </template>
    </svg>
</template>
