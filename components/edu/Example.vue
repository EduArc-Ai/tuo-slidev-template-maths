<template>
  <div class="example-block">
    <!-- Floating Label -->
    <div class="floating-label" aria-label="Example type">
      <span class="index-badge" v-if="index">{{ index }}</span>
      Example
    </div>

    <!-- Main Container -->
    <div class="example-container">
      <div class="accent-border" aria-hidden="true"></div>
      <div class="content-wrapper">
        <!-- Header Section -->
        <header class="example-header" v-if="topic || difficulty">
          <div class="tags">
            <span v-if="topic" class="tag topic" :title="`Topic: ${topic}`">
              <span class="dot" aria-hidden="true"></span>
              {{ topic }}
            </span>
            <span
              v-if="difficulty"
              class="tag difficulty"
              :title="`Difficulty: ${difficulty}`"
            >
              <span class="dot" aria-hidden="true"></span>
              {{ difficulty }}
            </span>
          </div>
        </header>

        <!-- Content Section -->
        <div
          class="example-content"
          role="region"
          :aria-label="'Example content'"
        >
          <slot />
        </div>
      </div>
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
/* Layout & Positioning */
.example-block {
  position: relative;
  margin: 1rem 0.5rem;
}

.example-container {
  position: relative;
  overflow: hidden;
  background: white;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(13, 148, 136, 0.1);
}

.content-wrapper {
  padding: 0.75rem 0.75rem 0.75rem;
}

.example-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  min-height: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
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
  background: #0d9488;
  color: white;
  border-radius: 0.3rem;
  box-shadow: 0 2px 4px rgba(13, 148, 136, 0.2);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.index-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.1rem 0.3rem;
  border-radius: 0.2rem;
  font-size: 0.75rem;
  min-width: 1.2rem;
  text-align: center;
}

/* Accent Border */
.accent-border {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #0d9488, #2dd4bf);
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
  border: 1px solid #0d9488;
  color: #0d9488;
  border-radius: 0.25rem;
}

.tag.topic {
  border-color: #8b5cf6;
  color: #8b5cf6;
}

.tag.difficulty[title*="Easy"] {
  border-color: #10b981;
  color: #10b981;
}

.tag.difficulty[title*="Medium"] {
  border-color: #f59e0b;
  color: #f59e0b;
}

.tag.difficulty[title*="Hard"] {
  border-color: #ef4444;
  color: #ef4444;
}

.dot {
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: currentColor;
}

/* Content Styles */
.example-content {
  padding: 0.75rem;
  background: rgba(13, 148, 136, 0.03);
  border-radius: 0.3rem;
  color: #1f2937;
}

/* Enhanced Math Content Styling */
:deep(.example-content) {
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

/* Dark Mode Styles */
.dark {
  .example-container {
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(13, 148, 136, 0.2);
  }

  .tag {
    background: rgba(13, 148, 136, 0.1);
    border-color: rgba(13, 148, 136, 0.2);
  }

  .tag.topic {
    background: rgba(139, 92, 246, 0.1);
    border-color: rgba(139, 92, 246, 0.2);
    color: #a78bfa;
  }

  .example-content {
    color: #e5e7eb;
    background: rgba(13, 148, 136, 0.05);
  }

  :deep(.example-content) {
    .katex {
      color: #e5e7eb;
    }
  }
}
</style>
