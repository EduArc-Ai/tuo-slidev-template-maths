<template>
  <div class="learning-objective-block">
    <!-- Header -->
    <div class="learning-objective-header">
      <div class="header-left">
        <span class="icon">🎯</span>
        <span class="title">Learning Objective</span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="learning-objective-content" role="region" aria-label="Learning Objective content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional props are needed since difficulty levels are removed
</script>

<style scoped>
/* Base Learning Objective Block */
.learning-objective-block {
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  background: white; /* Keep content area white */
  border: 1px solid #fca5a5; /* Light red border */
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Header Section */
.learning-objective-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: #ffe4e6; /* Light red background for the header */
  border-bottom: 1px solid #fca5a5; /* Light red border */
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
  color: #b91c1c; /* Dark red for the title */
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

/* Content Section */
.learning-objective-content {
  padding: 1.25rem 1.5rem;
  color: #374151; /* Same as the example block */
  line-height: 1.6;
}

/* Enhanced Math Content Styling */
:deep(.learning-objective-content) {
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
.dark .learning-objective-block {
  background: #1f2937;
  border-color: #f87171; /* Adjusted for light red */
}

.dark .learning-objective-header {
  background: #7f1d1d; /* Dark red for the header */
  border-bottom-color: #f87171; /* Slightly lighter red border */
}

.dark .title {
  color: #fecaca; /* Light red for the title in dark mode */
}

.dark .learning-objective-content {
  color: #e5e7eb;
}

.dark :deep(.learning-objective-content) {
  .katex {
    color: #e5e7eb;
  }
}

/* Responsive */
@media (max-width: 640px) {
  .learning-objective-header {
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

  .learning-objective-content {
    padding: 1rem;
  }
}
</style>