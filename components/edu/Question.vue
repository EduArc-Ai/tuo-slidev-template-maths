<template>
  <div class="question-block">
    <!-- Floating Label -->
    <div class="floating-label" aria-label="Question type">
      <span class="points-badge" v-if="points">{{ points }}分</span>
      Question
    </div>

    <!-- Main Container -->
    <div class="question-container">
      <div class="accent-border" aria-hidden="true"></div>
      <div class="content-wrapper">
        <!-- Header Section -->
        <header class="question-header">
          <div class="title-area">
            <span class="icon" aria-hidden="true">❓</span>
            <h3 class="title">{{ title }}</h3>
          </div>
          <div class="tags" v-if="difficulty || points || source">
            <span
              v-if="difficulty"
              class="tag difficulty"
              :title="`Difficulty: ${difficulty}`"
            >
              <span class="dot" aria-hidden="true"></span>
              {{ difficulty }}
            </span>
            <span v-if="source" class="tag source" :title="`Source: ${source}`">
              <span class="dot" aria-hidden="true"></span>
              {{ source }}
            </span>
          </div>
        </header>

        <!-- Content Section -->
        <div
          class="question-content"
          role="region"
          :aria-label="title || 'Question content'"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface QuestionProps {
  /** The title of the question */
  title?: string;
  /** The difficulty level */
  difficulty?: "Easy" | "Medium" | "Hard" | string;
  /** Points worth for this question */
  points?: number;
  /** Source of the question (e.g., STEP 2024 Q1) */
  source?: string;
}

defineProps<QuestionProps>();
</script>

<style scoped>
/* Layout & Positioning */
.question-block {
  position: relative;
  margin: 1.5rem 0.5rem 1rem;
}

.question-container {
  position: relative;
  overflow: hidden;
  background: white;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(30, 64, 175, 0.1);
}

.content-wrapper {
  padding: 1.25rem 1rem 1rem;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

/* Floating Label Styles */
.floating-label {
  position: absolute;
  top: -0.75rem;
  left: 1rem;
  z-index: 1;
  padding: 0.2rem 0.8rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  background: #1e40af;
  color: white;
  border-radius: 0.3rem;
  box-shadow: 0 2px 4px rgba(30, 64, 175, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.points-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.1rem 0.4rem;
  border-radius: 0.2rem;
  font-size: 0.75rem;
}

/* Title Area Styles */
.title-area {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.icon {
  font-size: 1.25rem;
  color: #1e40af;
}

.title {
  margin: 0;
  font-size: 1.25rem;
  color: #1e40af;
}

/* Tags Styles */
.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  background: #fff;
  border: 1px solid #1e40af;
  color: #1e40af;
  border-radius: 0.25rem;
}

.dot {
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: currentColor;
}

/* Content Styles */
.question-content {
  color: #1f2937;
  padding: 0.5rem;
  background: rgba(30, 64, 175, 0.03);
  border-radius: 0.3rem;
}

/* Enhanced Math Content Styling */
:deep(.question-content) {
  color: inherit;

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
  ul,
  ol {
    margin: 0.5em 0;
    padding-left: 1.5em;
  }

  li {
    margin: 0.25em 0;
  }

  p {
    margin: 0.5em 0;
  }
}

/* Tag-specific colors */
.tag.difficulty[data-difficulty="Easy"] {
  border-color: #10b981;
  color: #10b981;
}

.tag.difficulty[data-difficulty="Medium"] {
  border-color: #f59e0b;
  color: #f59e0b;
}

.tag.difficulty[data-difficulty="Hard"] {
  border-color: #ef4444;
  color: #ef4444;
}

.tag.source {
  border-color: #8b5cf6;
  color: #8b5cf6;
}

/* Dark Mode Styles */
.dark {
  .question-container {
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(59, 130, 246, 0.2);
  }

  .title {
    color: #60a5fa;
  }

  .icon {
    color: #60a5fa;
  }

  .tag {
    background: rgba(30, 64, 175, 0.1);
    border-color: rgba(30, 64, 175, 0.2);
  }

  .tag.source {
    background: rgba(139, 92, 246, 0.1);
    border-color: rgba(139, 92, 246, 0.2);
    color: #a78bfa;
  }

  .question-content {
    color: #e5e7eb;
    background: rgba(30, 64, 175, 0.05);
  }

  :deep(.question-content) {
    .katex {
      color: #e5e7eb;
    }
  }
}
</style>
