<script setup lang="ts">
defineOgImage({
  component: "root",
  props: {
    title: "hi",
    description: "",
    bgImage: "",
  },
});
</script>

<template>
  <NuxtWelcome />
</template>
