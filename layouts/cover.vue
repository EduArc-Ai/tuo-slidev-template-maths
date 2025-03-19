<template>
  <div class="slidev-layout cover">
    <div v-if="$slidev.configs.logo" class="absolute bottom-12 right-4">
      <img :src="$slidev.configs.logo" class="h-10" alt="Company Logo" />
    </div>
    <div class="my-auto w-full text-center">
      <slot />
    </div>
  </div>
</template>
