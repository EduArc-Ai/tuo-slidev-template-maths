<template>
  <div class="answer-block">
    <!-- Floating Label -->
    <div class="floating-label" aria-label="Answer type">Answer</div>

    <!-- Main Container -->
    <div class="answer-container">
      <div class="accent-border" aria-hidden="true"></div>
      <div class="content-wrapper">
        <!-- Header Section -->
        <header class="answer-header">
          <div class="title-area">
            <span class="icon" aria-hidden="true">💡</span>
            <h3 class="title">{{ title || "Solution" }}</h3>
          </div>
        </header>

        <!-- Content Section -->
        <div
          class="answer-content"
          role="region"
          :aria-label="title || 'Answer content'"
        >
          <slot />
        </div>
      </div>
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
/* Layout & Positioning */
.answer-block {
  position: relative;
  margin: 1rem 0.5rem;
}

.answer-container {
  position: relative;
  overflow: hidden;
  background: white;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.1);
}

.content-wrapper {
  padding: 0.75rem 0.75rem 0.75rem;
}

.answer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  min-height: 2rem;
}

/* Floating Label Styles */
.floating-label {
  position: absolute;
  top: -0.6rem;
  left: 1rem;
  z-index: 1;
  padding: 0.15rem 0.6rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  background: #d97706;
  color: white;
  border-radius: 0.3rem;
  box-shadow: 0 2px 4px rgba(217, 119, 6, 0.2);
}

/* Accent Border */
.accent-border {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #d97706, #fbbf24);
}

/* Title Area Styles */
.title-area {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1.25rem;
  color: #d97706;
}

.title {
  margin: 0;
  font-size: 1.25rem;
  color: #d97706;
}

/* Content Styles */
.answer-content {
  color: #1f2937;
  padding: 0.5rem;
  max-height: calc(100vh - 250px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(217, 119, 6, 0.3) transparent;
  background: rgba(245, 158, 11, 0.03);
  border-radius: 0.3rem;
  font-size: 0.9375rem;
}

.answer-content::-webkit-scrollbar {
  width: 6px;
}

.answer-content::-webkit-scrollbar-track {
  background: transparent;
}

.answer-content::-webkit-scrollbar-thumb {
  background-color: rgba(217, 119, 6, 0.3);
  border-radius: 3px;
}

/* Enhanced Math Content Styling */
:deep(.answer-content) {
  color: inherit;

  /* Inline math */
  .katex {
    font-size: 0.95em;
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

/* Dark Mode Styles */
.dark {
  .answer-container {
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(245, 158, 11, 0.2);
  }

  .title {
    color: #fbbf24;
  }

  .icon {
    color: #fbbf24;
  }

  .answer-content {
    color: #e5e7eb;
    background: rgba(245, 158, 11, 0.05);
  }

  :deep(.answer-content) {
    .katex {
      color: #e5e7eb;
    }
  }
}
</style>
