<template class="">
  <div :class="currentTheme"
       class="flex flex-col bg-[url(/app-background.png)] bg-size-[100%] justify-baseline bg-background min-h-screen max-w-[1680px] mx-auto font-display dark:bg-darkBackground dark:text-darkText">
    <Navbar :currentTheme="currentTheme" @changeTheme="changeTheme"/>
    <div class="mx-auto">
      <NuxtPage/>
    </div>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import {useTheme} from "~~/composables/useTheme";
import {useRoute} from 'vue-router'
import {onMounted, ref, watch} from "vue"

const {theme} = useTheme()
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
</script>