<script setup>
defineOptions({
  name: 'EduTwoColumn'
})
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="col-left">
      <slot name="left"></slot>
    </div>
    <div class="col-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.col-left,
.col-right {
  width: 100%;
}
</style> 