<template>
  <div class="theorem-block">
    <!-- Floating Label -->
    <div class="floating-label" aria-label="Theorem type">Theorem</div>

    <!-- Main Container -->
    <div class="theorem-container">
      <div class="accent-border" aria-hidden="true"></div>
      <div class="content-wrapper">
        <!-- Header Section -->
        <header class="theorem-header">
          <div class="title-area">
            <h3 class="title">{{ title }}</h3>
          </div>
          <div class="tags" v-if="author || year">
            <span v-if="author" class="tag author" :title="`Author: ${author}`">
              <span class="dot" aria-hidden="true"></span>
              {{ author }}
            </span>
            <span v-if="year" class="tag year" :title="`Year: ${year}`">
              <span class="dot" aria-hidden="true"></span>
              {{ year }}
            </span>
          </div>
        </header>

        <!-- Content Section -->
        <div
          class="theorem-content"
          role="region"
          :aria-label="title || 'Theorem content'"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TheoremProps {
  /** The title of the theorem */
  title?: string;
  /** The author of the theorem */
  author?: string;
  /** The year the theorem was published/created */
  year?: string | number;
}

defineProps<TheoremProps>();
</script>

<style scoped>
/* Layout & Positioning */
.theorem-block {
  position: relative;
  margin: 1.5rem 0.5rem 1rem;
}

.theorem-container {
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  padding: 1.25rem 1rem 1rem;
}

.theorem-header {
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
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #1e40af;
  color: white;
  border-radius: 0.3rem;
  box-shadow: 0 2px 4px rgba(30, 64, 175, 0.2);
}

/* Container Styles */
.theorem-container {
  background: white;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.accent-border {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #1e40af, #3b82f6);
}

/* Title Area Styles */
.title-area {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.title {
  margin: 0;
  font-size: 1.25rem;
  color: #111827;
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
.theorem-content {
  color: #1f2937;
}

/* Enhanced Math Content Styling */
:deep(.theorem-content) {
  /* Base text styling */
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
  .theorem-container {
    background: rgba(17, 24, 39, 0.8);
  }

  .title {
    color: #f8fafc;
  }

  .tag {
    background: rgba(30, 64, 175, 0.1);
    border-color: rgba(30, 64, 175, 0.2);
  }

  .theorem-content {
    color: #e5e7eb;
  }

  :deep(.theorem-content) {
    .katex {
      color: #e5e7eb;
    }
  }
}
</style>
