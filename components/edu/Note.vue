<template>
  <div class="note-block">
    <!-- Floating Label -->
    <div class="floating-label" aria-label="Note type">Note</div>

    <!-- Main Container -->
    <div class="note-container">
      <div class="accent-border" aria-hidden="true"></div>
      <div class="content-wrapper">
        <!-- Header Section -->
        <header class="note-header" v-if="type || importance">
          <div class="header-right">
            <span class="icon" aria-hidden="true">📝</span>
            <div class="tags">
              <span v-if="type" class="tag type" :title="`Type: ${type}`">
                <span class="dot" aria-hidden="true"></span>
                {{ type }}
              </span>
              <span
                v-if="importance"
                class="tag importance"
                :title="`Importance: ${importance}`"
              >
                <span class="dot" aria-hidden="true"></span>
                {{ importance }}
              </span>
            </div>
          </div>
        </header>

        <!-- Content Section -->
        <div
          class="note-content"
          role="region"
          :aria-label="'Note content'"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NoteProps {
  /** The type of note (tip, warning, important, etc.) */
  type?: "tip" | "warning" | "important" | string;
  /** The importance level of the note */
  importance?: "low" | "medium" | "high" | string;
}

defineProps<NoteProps>();
</script>

<style scoped>
/* Layout & Positioning */
.note-block {
  position: relative;
  margin: 1.5rem 0.5rem 1rem;
}

.note-container {
  position: relative;
  overflow: hidden;
  background: white;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.content-wrapper {
  padding: 1.25rem 1rem 1rem;
}

.note-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  background: #7c3aed;
  color: white;
  border-radius: 0.3rem;
  box-shadow: 0 2px 4px rgba(124, 58, 237, 0.2);
}

/* Header Right Styles */
.header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.icon {
  font-size: 1.25rem;
  color: #7c3aed;
}

/* Container Styles */
.note-container {
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
  background: linear-gradient(to bottom, #7c3aed, #a78bfa);
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
  border: 1px solid #7c3aed;
  color: #7c3aed;
  border-radius: 0.25rem;
}

.dot {
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: currentColor;
}

/* Content Styles */
.note-content {
  color: #1f2937;
  padding: 0.5rem;
  background: rgba(124, 58, 237, 0.03);
  border-radius: 0.3rem;
}

/* Enhanced Math Content Styling */
:deep(.note-content) {
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

/* Type-specific colors */
.tag.type[data-type="warning"] {
  border-color: #f59e0b;
  color: #f59e0b;
}

.tag.type[data-type="important"] {
  border-color: #ef4444;
  color: #ef4444;
}

/* Importance-specific colors */
.tag.importance[data-importance="high"] {
  border-color: #ef4444;
  color: #ef4444;
}

.tag.importance[data-importance="medium"] {
  border-color: #f59e0b;
  color: #f59e0b;
}

.tag.importance[data-importance="low"] {
  border-color: #10b981;
  color: #10b981;
}

/* Dark Mode Styles */
.dark {
  .note-container {
    background: rgba(17, 24, 39, 0.8);
  }

  .tag {
    background: rgba(124, 58, 237, 0.1);
    border-color: rgba(124, 58, 237, 0.2);
  }

  .note-content {
    color: #e5e7eb;
    background: rgba(124, 58, 237, 0.05);
  }

  :deep(.note-content) {
    .katex {
      color: #e5e7eb;
    }
  }
}
</style>
