<template class="">
  <div :class="currentTheme"
    class="flex @container flex-col bg-[url(/app-background.png)] bg-size-[100%] justify-baseline bg-background min-h-screen max-w-[1680px] mx-auto font-display dark:bg-darkBackground dark:text-darkText">
    <Navbar :currentTheme="currentTheme" @changeTheme="changeTheme" />
    <div class="mx-auto max-w-full">
      <NuxtPage />
    </div>
    <Footer />
    <div class="fixed top-0 left-0 w-4 h-4 dark:bg-white bg-black z-50 rounded-full pointer-events-none"
      :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }" />
  </div>
</template>
<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import { useTheme } from "~~/composables/useTheme";
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from "vue"

const { theme } = useTheme()
const currentTheme = ref<string>('')
const route = useRoute()

watch(() => route.fullPath, () => {
  window.scrollTo(0, 0)
})

onMounted(() => {
  currentTheme.value = theme.value
})

function changeTheme() {
  if (currentTheme.value === "dark") {
    currentTheme.value = "light"
  } else {
    currentTheme.value = "dark"
  }
}

// cursor setup

const x = ref(0)
const y = ref(0)

onMounted(() => {
  window.addEventListener('mousemove', (e) => {
    x.value = e.clientX - 10
    y.value = e.clientY - 10
  })
})
</script>