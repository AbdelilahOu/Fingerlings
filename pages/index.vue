<script setup lang="ts">
defineOgImage({
  component: "root",
  props: {
    title: "",
    description: "",
    bgImage: "",
  },
});
</script>

<template>
  <NuxtWelcome />
</template>
