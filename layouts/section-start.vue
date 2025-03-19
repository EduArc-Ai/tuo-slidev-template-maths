<template>
  <div class="slidev-layout section-start">
    <div class="section-content">
      <div class="section-indicator">
        {{ $slidev.configs.section || "Section" }}
      </div>
      <div class="section-title">
        <slot />
      </div>
      <div v-if="subsection" class="section-subtitle">
        {{ subsection }}
      </div>
      <div class="section-decoration">
        <div class="line"></div>
        <div class="dot"></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  subsection?: string;
}>();
</script>

<style scoped>
.section-start {
  @apply h-full;
  background: linear-gradient(
    150deg,
    var(--slidev-theme-primary) 0%,
    #262686 100%
  );
  padding: 4rem;
  color: white;
}

.section-content {
  @apply h-full flex flex-col items-center justify-center text-center;
}

.section-indicator {
  @apply text-xl font-light mb-6 opacity-80;
  font-family: var(--english-heading-fonts);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* Override default h1 styles from theme */
.section-title :deep(h1) {
  @apply text-5xl font-bold;
  font-family: var(--chinese-heading-fonts);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.02em;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  background: none;
  width: auto;
  margin-bottom: 0.5em;
}

.section-subtitle {
  @apply text-2xl font-normal mb-8 opacity-90;
  font-family: var(--chinese-fonts);
  letter-spacing: 0.01em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.section-decoration {
  @apply flex items-center gap-5 mt-8;
}

.line {
  width: 60px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
}

/* Dark mode adjustments */
.dark .section-start {
  color: rgba(255, 255, 255, 0.9);
}

.dark .section-subtitle {
  opacity: 0.85;
}
</style>
