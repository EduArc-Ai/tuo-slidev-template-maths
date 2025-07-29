<template>
  <div class="note-block" :class="noteClasses">
    <!-- Simple Header -->
    <div class="note-header">
      <span class="icon">{{ noteIcon }}</span>
      <span class="note-title">{{ noteTitle }}</span>
    </div>

    <!-- Content Section -->
    <div class="note-content" role="region" :aria-label="noteTitle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface NoteProps {
  /** The type of note (tip, warning, important, etc.) */
  type?: "tip" | "warning" | "important" | string;
  /** The importance level of the note */
  importance?: "low" | "medium" | "high" | string;
}

const props = defineProps<NoteProps>();

// Compute the appropriate icon based on type
const noteIcon = computed(() => {
  switch (props.type) {
    case 'tip': return '💡';
    case 'warning': return '⚠️';
    case 'important': return '❗';
    default: return '📝';
  }
});

// Compute the title based on type
const noteTitle = computed(() => {
  switch (props.type) {
    case 'tip': return 'Tip';
    case 'warning': return 'Warning';
    case 'important': return 'Important';
    default: return 'Note';
  }
});

// Compute classes for styling
const noteClasses = computed(() => {
  return {
    [`note-${props.type}`]: props.type,
    [`importance-${props.importance}`]: props.importance
  };
});
</script>

<style scoped>
/* Base Note Block */
.note-block {
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Header Section */
.note-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.icon {
  font-size: 1.25rem;
  line-height: 1;
}

.note-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

/* Content Section */
.note-content {
  padding: 1.25rem 1.5rem;
  color: #374151;
  line-height: 1.6;
}

/* Enhanced Math Content Styling */
:deep(.note-content) {
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

/* Type-specific Styling */
.note-tip {
  border-color: #3b82f6;
}

.note-tip .note-header {
  background: #eff6ff;
  border-bottom-color: #dbeafe;
}

.note-tip .icon {
  color: #2563eb;
}

.note-tip .note-title {
  color: #1e40af;
}

.note-warning {
  border-color: #f59e0b;
}

.note-warning .note-header {
  background: #fffbeb;
  border-bottom-color: #fef3c7;
}

.note-warning .icon {
  color: #d97706;
}

.note-warning .note-title {
  color: #92400e;
}

.note-important {
  border-color: #ef4444;
}

.note-important .note-header {
  background: #fef2f2;
  border-bottom-color: #fee2e2;
}

.note-important .icon {
  color: #dc2626;
}

.note-important .note-title {
  color: #991b1b;
}

/* Importance-specific adjustments */
.importance-high {
  border-width: 2px;
}

/* Dark Mode */
.dark .note-block {
  background: #1f2937;
  border-color: #374151;
}

.dark .note-header {
  background: #111827;
  border-bottom-color: #374151;
}

.dark .note-title {
  color: #e5e7eb;
}

.dark .note-content {
  color: #e5e7eb;
}

/* Dark mode type variations */
.dark.note-tip .note-header {
  background: #1e293b;
  border-bottom-color: #334155;
}

.dark.note-tip .icon {
  color: #60a5fa;
}

.dark.note-tip .note-title {
  color: #93c5fd;
}

.dark.note-warning .note-header {
  background: #292524;
  border-bottom-color: #44403c;
}

.dark.note-warning .icon {
  color: #fbbf24;
}

.dark.note-warning .note-title {
  color: #fde68a;
}

.dark.note-important .note-header {
  background: #292524;
  border-bottom-color: #44403c;
}

.dark.note-important .icon {
  color: #f87171;
}

.dark.note-important .note-title {
  color: #fca5a5;
}

/* Responsive */
@media (max-width: 640px) {
  .note-header {
    padding: 0.5rem 0.75rem;
  }

  .icon {
    font-size: 1rem;
  }

  .note-title {
    font-size: 0.8rem;
  }

  .note-content {
    padding: 1rem;
  }
}
</style>
