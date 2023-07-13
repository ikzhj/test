<template>
  <div>
    当前页面：{{ num }}
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  num: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped></style>