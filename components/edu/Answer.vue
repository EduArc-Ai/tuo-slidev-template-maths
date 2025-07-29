<template>
  <div class="answer-block">
    <!-- Simple Header -->
    <div class="answer-header">
      <div class="header-left">
        <span class="icon">💡</span>
        <span class="title">{{ title || "Solution" }}</span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="answer-content" role="region" :aria-label="title || 'Answer content'">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface AnswerProps {
  /** The title of the answer section */
  title?: string;
}

defineProps<AnswerProps>();
</script>

<style scoped>
/* Base Answer Block */
.answer-block {
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  background: white;
  border: 1px solid #f59e0b;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Header Section */
.answer-header {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #fffbeb;
  border-bottom: 1px solid #fef3c7;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1.25rem;
  line-height: 1;
  color: #f59e0b;
}

.title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #d97706;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

/* Content Section */
.answer-content {
  padding: 1.25rem 1.5rem;
  color: #374151;
  line-height: 1.6;
}

/* Enhanced Math Content Styling */
:deep(.answer-content) {
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

  /* Remove automatic numbering - let content use its own formatting */
}

/* Dark Mode */
.dark .answer-block {
  background: #1f2937;
  border-color: #f59e0b;
}

.dark .answer-header {
  background: #78350f;
  border-bottom-color: #92400e;
}

.dark .icon {
  color: #fbbf24;
}

.dark .title {
  color: #fde68a;
}

.dark .answer-content {
  color: #e5e7eb;
}

.dark :deep(.answer-content) {
  .katex {
    color: #e5e7eb;
  }

}

/* Responsive */
@media (max-width: 640px) {
  .answer-header {
    padding: 0.5rem 0.75rem;
  }

  .icon {
    font-size: 1rem;
  }

  .title {
    font-size: 0.8rem;
  }

  .answer-content {
    padding: 1rem;
  }
}
</style>
