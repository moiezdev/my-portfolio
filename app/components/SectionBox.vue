<template>
  <Motion
      :in-view="{
      x: [100,80,60,40,20,0],
    }"
      :in-view-options="{ margin: '100px' }"
  >
    <slot></slot>
  </Motion>
</template>
<script setup lang="ts">
defineProps({
  inView: {
    type: Boolean,
    default: {
      x: [100,80,60,40,20,0],
    },
  },
})
</script>