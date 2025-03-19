<template>
  <div class="drawing-layer">
    <button
      class="fixed top-1/2 -translate-y-1/2 right-4 z-[60] bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-colors duration-200"
      @click="toggleDraw"
      title="Toggle Drawing Mode"
    >
      <svg
        v-if="!isDrawing"
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div v-show="isDrawing" class="fixed inset-0 z-50">
      <tldraw class="w-full h-full" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDrawing = ref(false);

const toggleDraw = () => {
  isDrawing.value = !isDrawing.value;
};
</script>
