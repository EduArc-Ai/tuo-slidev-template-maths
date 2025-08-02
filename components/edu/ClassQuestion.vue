<template>
  <div class="class-question-block">
    <!-- Simple Header -->
    <div class="question-header">
      <div class="header-left">
        <span class="icon">🤔</span>
        <span class="title">{{ title || "Class Question" }}</span>
      </div>
      <div class="header-tags" v-if="time || difficulty || source">
        <span v-if="time" class="tag time-tag">{{ time }}</span>
        <span v-if="difficulty" class="tag" :class="`difficulty-${difficulty.toLowerCase()}`">{{ difficulty }}</span>
        <span v-if="source" class="tag source-tag">{{ source }}</span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="question-content" role="region" aria-label="Class question content">
      <slot />
    </div>

    <!-- Interactive Footer -->
    <div class="question-footer" v-if="showTimer || showPause">
      <div class="footer-left">
        <span v-if="showTimer" class="timer-info">⏱️ Think about it!</span>
      </div>
      <div class="footer-right">
        <span v-if="showPause" class="pause-hint">Press space to continue</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ClassQuestionProps {
  /** The title of the question */
  title?: string;
  /** Time allocated for thinking */
  time?: string;
  /** Difficulty level */
  difficulty?: "Easy" | "Medium" | "Hard" | string;
  /** Source of the question (e.g., "Past Paper", "CIE 2023") */
  source?: string;
  /** Show timer info */
  showTimer?: boolean;
  /** Show pause hint */
  showPause?: boolean;
}

defineProps<ClassQuestionProps>();
</script>

<style scoped>
/* Base Class Question Block */
.class-question-block {
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  background: white;
  border: 2px solid #8b5cf6;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.15);
  position: relative;
}

/* Animated border effect */
.class-question-block::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #8b5cf6, #a78bfa, #c4b5fd, #8b5cf6);
  background-size: 400% 400%;
  border-radius: 0.5rem;
  z-index: -1;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Header Section */
.question-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: #faf5ff;
  border-bottom: 1px solid #e9d5ff;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1.25rem;
  line-height: 1;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(-2px);
  }
}

.title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #7c3aed;
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
  border: 1px solid #e9d5ff;
  color: #7c3aed;
  border-radius: 9999px;
  font-weight: 500;
}

.tag.time-tag {
  background: #fef3c7;
  border-color: #fde68a;
  color: #d97706;
}

.tag.source-tag {
  background: #dbeafe;
  border-color: #93c5fd;
  color: #1d4ed8;
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
.question-content {
  padding: 1.5rem;
  color: #374151;
  line-height: 1.7;
  font-size: 1.1rem;
  text-align: left;
  background: linear-gradient(135deg, #fafafa 0%, #f8fafc 100%);
}

/* Enhanced Math Content Styling */
:deep(.question-content) {
  /* Inline math */
  .katex {
    font-size: 1.1em;
  }

  /* Display math */
  .katex-display {
    margin: 1.5em 0;
    overflow-x: auto;
    overflow-y: hidden;
  }

  /* Lists and paragraphs */
  ul, ol {
    margin: 1em 0;
    padding-left: 1.5em;
    text-align: left;
  }

  li {
    margin: 0.5em 0;
  }

  p {
    margin: 1em 0;
  }

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  /* Emphasis styling */
  strong {
    color: #7c3aed;
    font-weight: 700;
  }

  em {
    color: #6366f1;
    font-style: italic;
  }
}

/* Interactive Footer */
.question-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  border-top: 1px solid #e5e7eb;
  font-size: 0.8rem;
  color: #6b7280;
}

.timer-info {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  animation: pulse 1.5s ease-in-out infinite;
}

.pause-hint {
  font-style: italic;
  opacity: 0.8;
}

/* Dark Mode */
.dark .class-question-block {
  background: #1f2937;
  border-color: #8b5cf6;
}

.dark .question-header {
  background: #4c1d95;
  border-bottom-color: #6d28d9;
}

.dark .title {
  color: #c4b5fd;
}

.dark .tag {
  background: #581c87;
  border-color: #7c3aed;
  color: #c4b5fd;
}

.dark .tag.time-tag {
  background: #92400e;
  border-color: #d97706;
  color: #fde68a;
}

.dark .tag.source-tag {
  background: #1e3a8a;
  border-color: #3b82f6;
  color: #93c5fd;
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

.dark .question-content {
  color: #e5e7eb;
  background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
}

.dark :deep(.question-content) {
  .katex {
    color: #e5e7eb;
  }

  strong {
    color: #c4b5fd;
  }

  em {
    color: #a78bfa;
  }
}

.dark .question-footer {
  background: #111827;
  border-top-color: #374151;
  color: #9ca3af;
}

/* Responsive */
@media (max-width: 640px) {
  .question-header {
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

  .question-content {
    padding: 1rem;
    font-size: 1rem;
  }

  .question-footer {
    padding: 0.4rem 0.75rem;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }
}
</style>