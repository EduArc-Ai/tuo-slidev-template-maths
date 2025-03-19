<template>
  <div class="definition-container">
    <!-- Banner / Header -->
    <div class="definition-banner">
      <div class="icon-and-text">
        <span class="definition-icon">📚</span>
        <h3 class="definition-title">{{ title }}</h3>
      </div>
      <div class="definition-tags">
        <span v-if="subject" class="tag subject">{{ subject }}</span>
        <span v-if="topic" class="tag topic">{{ topic }}</span>
      </div>
    </div>

    <!-- Main body content -->
    <div class="definition-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  subject?: string;
  topic?: string;
}>();
</script>

<style scoped>
/* Root container */
.definition-container {
  margin: 0.75rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 3px 6px rgba(0, 0, 0, 0.05);
  background-color: #fff;
}
.dark .definition-container {
  background-color: rgba(30, 41, 59, 0.9);
}

/* Banner Header */
.definition-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eab308;
  padding: 0.75rem 1rem;
}
.dark .definition-banner {
  background: #ca8a04;
}

/* Icon + Title */
.icon-and-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.definition-icon {
  font-size: 1.25rem;
}
.definition-title {
  font-size: 1.25rem;
  margin: 0;
  color: #fff;
}

/* Tag styling in the header */
.definition-tags {
  display: flex;
  gap: 0.5rem;
}
.tag {
  font-size: 0.875rem;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  background: #fff;
  color: #1f2937;
}
.dark .tag {
  background: #fefce8;
  color: #1f2937;
}
.tag.subject::before,
.tag.topic::before {
  content: "#";
  margin-right: 0.2rem;
}

/* Body */
.definition-body {
  padding: 1.25rem 1.5rem;
  color: #1f2937;
  background: linear-gradient(
      135deg,
      rgba(248, 250, 252, 0.9) 0%,
      rgba(241, 245, 249, 0.9) 100%
    ),
    url("https://www.transparenttextures.com/patterns/asfalt-light.png");
  background-size: cover;
}
.dark .definition-body {
  color: #f1f5f9;
  background: linear-gradient(
      135deg,
      rgba(51, 65, 85, 0.8) 0%,
      rgba(31, 41, 55, 0.8) 100%
    ),
    url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
  background-size: cover;
}

/* Math content styling */
:deep(.definition-body) {
  /* Inline math */
  .katex {
    font-size: 1rem;
  }

  /* Display math */
  .katex-display {
    margin: 1em 0;
    overflow-x: auto;
    overflow-y: hidden;
  }

  /* Lists and paragraphs */
  ul,
  ol {
    margin: 0.5em 0;
    padding-left: 1.5em;
    font-size: 0.9375rem;
  }

  li {
    margin: 0.25em 0;
  }

  p {
    margin: 0.5em 0;
    font-size: 0.9375rem;
  }
}
</style>
