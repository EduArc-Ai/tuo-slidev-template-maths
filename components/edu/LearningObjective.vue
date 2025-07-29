<template>
  <div class="learning-objective-block">
    <!-- Header Section -->
    <div class="objective-header">
      <div class="header-content">
        <div class="header-title-row">
          <span class="icon">🎯</span>
          <h3 class="header-title">Learning Objectives</h3>
        </div>
        <p class="header-subtitle">By the end of this lesson, you will be able to:</p>
      </div>
    </div>

    <!-- Main Container -->
    <div class="learning-objective-container">
      <div class="content-wrapper">
        <!-- Content Section -->
        <div
          class="learning-objective-content"
          role="region"
          aria-label="Learning objectives"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props needed as per requirement
</script>

<style scoped>
/* Layout & Positioning */
.learning-objective-block {
  margin: 1.5rem 0;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Header Section */
.objective-header {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  padding: 1rem 1.5rem;
  position: relative;
  overflow: hidden;
}

.objective-header::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -10%;
  width: 40%;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(25deg);
  pointer-events: none;
}

.header-content {
  position: relative;
  z-index: 1;
}

.header-title-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.icon {
  font-size: 1.75rem;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.15));
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.header-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-subtitle {
  margin: 0;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  padding-left: 2.25rem;
  font-weight: 400;
}

/* Container */
.learning-objective-container {
  background: white;
  margin: 0;
}

.content-wrapper {
  padding: 1.5rem;
}

/* Content Styles */
.learning-objective-content {
  color: #1f2937;
}

/* Enhanced Content Styling with Custom Bullets */
:deep(.learning-objective-content) {
  color: inherit;

  /* Force all direct text nodes and elements to be list items */
  > * {
    position: relative;
    display: flex;
    align-items: center;
    margin: 1.25rem 0;
    padding-left: 3rem;
    line-height: 1.75;
    min-height: 2rem;
  }

  /* Custom bullet style */
  > *::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.125rem;
    width: 2rem;
    height: 2rem;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(251, 191, 36, 0.3);
  }

  /* Checkmark inside bullet */
  > *::after {
    content: "✓";
    position: absolute;
    left: 0.625rem;
    top: 0.375rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }

  /* Handle inline math */
  .katex {
    font-size: 1em;
    display: inline;
  }

  /* Display math should not have bullet */
  .katex-display {
    display: block !important;
    margin: 1em 0;
    padding-left: 0;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .katex-display::before,
  .katex-display::after {
    display: none !important;
  }

  /* If content already has ul/ol, style them appropriately */
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul > li, ol > li {
    position: relative;
    display: flex;
    align-items: center;
    margin: 1.25rem 0;
    padding-left: 3rem;
    line-height: 1.75;
    min-height: 2rem;
  }

  ul > li::before, ol > li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.125rem;
    width: 2rem;
    height: 2rem;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(251, 191, 36, 0.3);
  }

  ul > li::after, ol > li::after {
    content: "✓";
    position: absolute;
    left: 0.625rem;
    top: 0.375rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }

  /* Nested lists */
  ul ul > li, ol ul > li {
    margin-left: 1.5rem;
  }

  ul ul > li::before, ol ul > li::before {
    width: 1.25rem;
    height: 1.25rem;
    background: linear-gradient(135deg, #fde68a 0%, #fbbf24 100%);
  }

  ul ul > li::after, ol ul > li::after {
    font-size: 0.75rem;
    left: 0.4rem;
    top: 0.4rem;
  }

  /* Handle paragraphs */
  p {
    position: relative;
    display: flex;
    align-items: center;
    margin: 1.25rem 0;
    padding-left: 3rem;
    line-height: 1.75;
    min-height: 2rem;
  }

  p::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.125rem;
    width: 2rem;
    height: 2rem;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(251, 191, 36, 0.3);
  }

  p::after {
    content: "✓";
    position: absolute;
    left: 0.625rem;
    top: 0.375rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }

  /* Empty paragraphs should not show bullet */
  p:empty {
    display: none;
  }

  /* Line breaks should not show bullets */
  br {
    display: block;
  }

  br::before,
  br::after {
    display: none !important;
  }
}

/* Dark Mode Styles */
.dark {
  .learning-objective-block {
    background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
  }

  .objective-header {
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  }

  .learning-objective-container {
    background: rgba(17, 24, 39, 0.9);
  }

  .learning-objective-content {
    color: #e5e7eb;
  }

  :deep(.learning-objective-content) {
    .katex {
      color: #e5e7eb;
    }

    > *::before,
    ul > li::before,
    ol > li::before,
    p::before {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);
    }

    ul ul > li::before,
    ol ul > li::before {
      background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
    }
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .objective-header {
    padding: 0.75rem 1rem;
  }

  .header-title {
    font-size: 1.125rem;
  }

  .header-subtitle {
    font-size: 0.8rem;
    padding-left: 2rem;
  }

  .icon {
    font-size: 1.5rem;
  }

  .content-wrapper {
    padding: 1rem;
  }

  :deep(.learning-objective-content) {
    > *, ul > li, ol > li, p {
      padding-left: 2.5rem;
    }

    > *::before, ul > li::before, ol > li::before, p::before {
      width: 1.75rem;
      height: 1.75rem;
    }

    > *::after, ul > li::after, ol > li::after, p::after {
      font-size: 0.875rem;
      left: 0.5rem;
      top: 0.25rem;
    }
  }
}</style>