<template>
  <HelloWorld :num=12 />
</template>

<script setup lang="ts">
import HelloWorld from '../../components/HelloWorld.vue';

const props = defineProps({
  num: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped></style>