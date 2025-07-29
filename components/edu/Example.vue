<template>
  <div class="example-block">
    <!-- Simple Header -->
    <div class="example-header">
      <div class="header-left">
        <span class="icon">✏️</span>
        <span class="title">Example{{ index ? ` ${index}` : '' }}</span>
      </div>
      <div class="header-tags" v-if="topic || difficulty">
        <span v-if="topic" class="tag">{{ topic }}</span>
        <span v-if="difficulty" class="tag" :class="`difficulty-${difficulty.toLowerCase()}`">{{ difficulty }}</span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="example-content" role="region" aria-label="Example content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface ExampleProps {
  /** The index/number of the example */
  index?: number;
  /** The topic this example covers */
  topic?: string;
  /** The difficulty level */
  difficulty?: "Easy" | "Medium" | "Hard" | string;
}

defineProps<ExampleProps>();
</script>

<style scoped>
/* Base Example Block */
.example-block {
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  background: white;
  border: 1px solid #10b981;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Header Section */
.example-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: #f0fdf4;
  border-bottom: 1px solid #d1fae5;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1.25rem;
  line-height: 1;
}

.title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #059669;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

/* Tags */
.header-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  background: white;
  border: 1px solid #d1fae5;
  color: #059669;
  border-radius: 9999px;
  font-weight: 500;
}

/* Difficulty-specific tag colors */
.tag.difficulty-easy {
  border-color: #86efac;
  color: #16a34a;
}

.tag.difficulty-medium {
  border-color: #fde68a;
  color: #d97706;
}

.tag.difficulty-hard {
  border-color: #fca5a5;
  color: #dc2626;
}

/* Content Section */
.example-content {
  padding: 1.25rem 1.5rem;
  color: #374151;
  line-height: 1.6;
}

/* Enhanced Math Content Styling */
:deep(.example-content) {
  /* Inline math */
  .katex {
    font-size: 1em;
  }

  /* Display math */
  .katex-display {
    margin: 1em 0;
    overflow-x: auto;
    overflow-y: hidden;
  }

  /* Lists and paragraphs */
  ul, ol {
    margin: 0.75em 0;
    padding-left: 1.5em;
  }

  li {
    margin: 0.5em 0;
  }

  p {
    margin: 0.75em 0;
  }

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
}

/* Dark Mode */
.dark .example-block {
  background: #1f2937;
  border-color: #10b981;
}

.dark .example-header {
  background: #064e3b;
  border-bottom-color: #065f46;
}

.dark .title {
  color: #86efac;
}

.dark .tag {
  background: #065f46;
  border-color: #10b981;
  color: #86efac;
}

.dark .tag.difficulty-easy {
  border-color: #10b981;
  color: #86efac;
}

.dark .tag.difficulty-medium {
  border-color: #f59e0b;
  color: #fde68a;
}

.dark .tag.difficulty-hard {
  border-color: #ef4444;
  color: #fca5a5;
}

.dark .example-content {
  color: #e5e7eb;
}

.dark :deep(.example-content) {
  .katex {
    color: #e5e7eb;
  }
}

/* Responsive */
@media (max-width: 640px) {
  .example-header {
    padding: 0.5rem 0.75rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .icon {
    font-size: 1rem;
  }

  .title {
    font-size: 0.8rem;
  }

  .example-content {
    padding: 1rem;
  }
}
</style>
