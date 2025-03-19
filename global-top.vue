<template>
  <Frankfurt />
  <LogoHeader v-if="!isCoverSlide" />
  <InfoLine v-if="$slidev.configs.infoLine ?? true" />
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

const isCoverSlide = computed(() => {
  const currentSlide = $slidev.nav.currentPage;
  return currentSlide === 1;
});

// Add the watermark control based on frontmatter
onMounted(() => {
  const watermarkEnabled = $slidev.configs.watermarkEnabled ?? false;
  document.documentElement.setAttribute(
    "data-watermark-enabled",
    watermarkEnabled.toString()
  );
});
</script>
