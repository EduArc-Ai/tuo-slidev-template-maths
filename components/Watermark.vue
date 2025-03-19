<template>
  <div class="watermark" :style="watermarkStyle" v-if="!useImage">
    {{ watermarkText }}
  </div>
  <div class="watermark-image" :style="imageWatermarkStyle" v-else></div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Props with default values that can be customized
const props = defineProps({
  text: {
    type: String,
    default: "拓课堂", // Default text
  },
  opacity: {
    type: Number,
    default: 0.05, // Default opacity
  },
  rotate: {
    type: Number,
    default: -30, // Default rotation in degrees
  },
  fontSize: {
    type: String,
    default: "120px", // Default font size
  },
  color: {
    type: String,
    default: "rgba(0, 0, 0, 0.05)", // Default color
  },
  useImage: {
    type: Boolean,
    default: false, // Whether to use image instead of text
  },
  imageUrl: {
    type: String,
    default: "/logo/company-logo.png", // Default image path
  },
  imageWidth: {
    type: String,
    default: "300px", // Default image width
  },
  imageHeight: {
    type: String,
    default: "300px", // Default image height
  },
});

// Computed property for the watermark text
const watermarkText = computed(() => {
  return props.text;
});

// Computed property for text watermark style
const watermarkStyle = computed(() => {
  return {
    opacity: props.opacity,
    transform: `translate(-50%, -50%) rotate(${props.rotate}deg)`,
    fontSize: props.fontSize,
    color: props.color,
  };
});

// Computed property for image watermark style
const imageWatermarkStyle = computed(() => {
  return {
    opacity: props.opacity,
    transform: `translate(-50%, -50%) rotate(${props.rotate}deg)`,
    width: props.imageWidth,
    height: props.imageHeight,
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
});
</script>

<style scoped>
.watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  white-space: nowrap;
  z-index: -1;
  pointer-events: none;
  font-weight: bold;
  user-select: none;
}

.watermark-image {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  pointer-events: none;
  user-select: none;
}
</style>
