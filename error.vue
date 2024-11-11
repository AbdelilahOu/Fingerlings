<script setup lang="ts">
defineProps<{
  error: any
}>()
</script>

<template>
  <div class="w-screen h-screen bg-[#0c0c0c] items-center flex">
    <h1 class="m-auto text-center text-white text-3xl">
      oopsi! {{ error }}
    </h1>
  </div>
</template>
