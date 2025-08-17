<script setup lang="ts">
import { Motion, motion } from "motion-v";
</script>
<template>
  <div
    class="relative flex gap-4 text-[14px] flex-col justify-center items-center w-[60%] mx-auto min-h-screen pb-15 @max-md:w-full @max-md:px-5 @max-md:items-baseline">
    <Motion :in-view="{ y: [-20, -10, 0], opacity: [0.5, 0.75, 1.0] }" :transition="{ duration: 0.8 }"
      class="mask-[url(/mask-img.svg)] bg-[url(/hero-img.jpg)] mask-contain bg-size-[100%] w-[500px] aspect-square mb-[-130px] z-0">
    </Motion>
    <motion.h1 :in-view="{ y: [5, 2.5, 0], opacity: [0.5, 0.75, 1.0] }"
      class="text-[48px] font-bold dark:text-darkText text-text @max-md:text-[40px] z-10 drop-shadow-md">Moiz Ur
      Rehman</motion.h1>
    <motion.h3 :in-view="{ y: [5, 2.5, 0], opacity: [0.5, 0.75, 1.0] }"
      class="text-[24px] font-bold text-darkCyan z-10 drop-shadow-md">Full - Stack Developer</motion.h3>
    <motion.p :in-view="{ y: [5, 2.5, 0], opacity: [0.5, 0.75, 1.0] }"
      class="text-[20px] text-center max-md:text-left font-bold z-10 drop-shadow-md">Creating beautiful and functional
      web experiences with modern
      technologies.
      Passionate about clean code,user experience,and bringing ides to life through
      innovative solutions.</motion.p>
    <motion.div :in-view="{ y: [5, 2.5, 0], opacity: [0.5, 0.75, 1.0] }"
      class="flex gap-4 text-[14px] font-bold @max-md:mt-10 z-10 drop-shadow-md">
      <NuxtLink to="/projects" class="px-[25px] py-[15px] rounded-full bg-darkCyan text-white font-display">
        View Projects
      </NuxtLink>
      <NuxtLink to="/contacts"
        class="px-[25px] py-[15px] rounded-full border-[1px] border-darkCyan text-darkCyan font-display">
        Contact Me
      </NuxtLink>
    </motion.div>
  </div>
</template>
<style scoped></style>