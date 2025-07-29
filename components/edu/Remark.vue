<template>
  <div class="remark-block" :class="remarkClasses">
    <!-- Simple Header -->
    <div class="remark-header">
      <div class="header-left">
        <span class="icon">{{ remarkIcon }}</span>
        <span class="title">{{ remarkTitle }}</span>
      </div>
      <div class="header-tags" v-if="type">
        <span class="tag">{{ type }}</span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="remark-content" role="region" :aria-label="remarkTitle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface RemarkProps {
  /** The type of remark */
  type?: "observation" | "insight" | "caution" | "remember" | string;
}

const props = defineProps<RemarkProps>();

// Compute the appropriate icon based on type
const remarkIcon = computed(() => {
  switch (props.type) {
    case 'observation': return '👁️';
    case 'insight': return '💭';
    case 'caution': return '⚡';
    case 'remember': return '🧠';
    default: return '💬';
  }
});

// Compute the title based on type
const remarkTitle = computed(() => {
  switch (props.type) {
    case 'observation': return 'Observation';
    case 'insight': return 'Insight';
    case 'caution': return 'Caution';
    case 'remember': return 'Remember';
    default: return 'Remark';
  }
});

// Compute classes for styling
const remarkClasses = computed(() => {
  return {
    [`remark-${props.type}`]: props.type
  };
});
</script>

<style scoped>
/* Base Remark Block */
.remark-block {
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  background: white;
  border: 1px solid #64748b;
  border-left: 4px solid #64748b;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Header Section */
.remark-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1.1rem;
  line-height: 1;
}

.title {
  font-size: 0.8rem;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

/* Tags */
.header-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  background: white;
  border: 1px solid #cbd5e1;
  color: #64748b;
  border-radius: 9999px;
  font-weight: 500;
}

/* Content Section */
.remark-content {
  padding: 1rem 1.25rem;
  color: #374151;
  line-height: 1.6;
  font-size: 0.95rem;
  font-style: italic;
}

/* Enhanced Math Content Styling */
:deep(.remark-content) {
  /* Inline math */
  .katex {
    font-size: 0.95em;
    font-style: normal;
  }

  /* Display math */
  .katex-display {
    margin: 1em 0;
    overflow-x: auto;
    overflow-y: hidden;
    font-style: normal;
  }

  /* Lists and paragraphs */
  ul, ol {
    margin: 0.75em 0;
    padding-left: 1.5em;
  }

  li {
    margin: 0.4em 0;
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

  /* Emphasis styling */
  strong {
    font-weight: 700;
    font-style: normal;
  }

  em {
    font-style: italic;
  }
}

/* Type-specific Styling */
.remark-observation {
  border-color: #3b82f6;
  border-left-color: #3b82f6;
}

.remark-observation .remark-header {
  background: #eff6ff;
  border-bottom-color: #dbeafe;
}

.remark-observation .icon {
  color: #2563eb;
}

.remark-observation .title {
  color: #1e40af;
}

.remark-observation .tag {
  border-color: #93c5fd;
  color: #2563eb;
}

.remark-insight {
  border-color: #06b6d4;
  border-left-color: #06b6d4;
}

.remark-insight .remark-header {
  background: #ecfeff;
  border-bottom-color: #cffafe;
}

.remark-insight .icon {
  color: #0891b2;
}

.remark-insight .title {
  color: #0e7490;
}

.remark-insight .tag {
  border-color: #67e8f9;
  color: #0891b2;
}

.remark-caution {
  border-color: #f59e0b;
  border-left-color: #f59e0b;
}

.remark-caution .remark-header {
  background: #fffbeb;
  border-bottom-color: #fef3c7;
}

.remark-caution .icon {
  color: #d97706;
}

.remark-caution .title {
  color: #92400e;
}

.remark-caution .tag {
  border-color: #fde68a;
  color: #d97706;
}

.remark-remember {
  border-color: #10b981;
  border-left-color: #10b981;
}

.remark-remember .remark-header {
  background: #f0fdf4;
  border-bottom-color: #dcfce7;
}

.remark-remember .icon {
  color: #059669;
}

.remark-remember .title {
  color: #047857;
}

.remark-remember .tag {
  border-color: #86efac;
  color: #059669;
}

/* Dark Mode */
.dark .remark-block {
  background: #1f2937;
  border-color: #6b7280;
}

.dark .remark-header {
  background: #111827;
  border-bottom-color: #374151;
}

.dark .title {
  color: #d1d5db;
}

.dark .remark-content {
  color: #e5e7eb;
}

.dark .tag {
  background: #374151;
  border-color: #4b5563;
  color: #9ca3af;
}

/* Dark mode type variations */
.dark.remark-observation .remark-header {
  background: #1e293b;
  border-bottom-color: #334155;
}

.dark.remark-observation .icon {
  color: #60a5fa;
}

.dark.remark-observation .title {
  color: #93c5fd;
}

.dark.remark-insight .remark-header {
  background: #164e63;
  border-bottom-color: #155e75;
}

.dark.remark-insight .icon {
  color: #22d3ee;
}

.dark.remark-insight .title {
  color: #67e8f9;
}

.dark.remark-caution .remark-header {
  background: #78350f;
  border-bottom-color: #92400e;
}

.dark.remark-caution .icon {
  color: #fbbf24;
}

.dark.remark-caution .title {
  color: #fde68a;
}

.dark.remark-remember .remark-header {
  background: #064e3b;
  border-bottom-color: #065f46;
}

.dark.remark-remember .icon {
  color: #34d399;
}

.dark.remark-remember .title {
  color: #86efac;
}

/* Responsive */
@media (max-width: 640px) {
  .remark-header {
    padding: 0.5rem 0.75rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .icon {
    font-size: 1rem;
  }

  .title {
    font-size: 0.75rem;
  }

  .remark-content {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
  }
}
</style>