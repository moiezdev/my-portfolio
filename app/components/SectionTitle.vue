<template>
  <div class="text-center mb-[40px]">
    <h1 class="text-[32px] font-bold">{{title}}</h1>
    <h2 class="text-[18] font-semibold">{{subtitle}}</h2>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  }
})
</script>