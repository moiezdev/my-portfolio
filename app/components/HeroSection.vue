<script setup lang="ts">

</script>
<template>
<div class="flex gap-4 text-[14px] flex-col justify-center items-center w-[60%] mx-auto min-h-screen pb-15 @max-md:w-full @max-md:px-10 @max-md:items-baseline">
  <h1 class="text-[48px] font-bold dark:text-darkText text-text">Hi, <br class="hidden @max-md:block"> I am Moiz Ur Rehman</h1>
  <h3 class="text-[24px] font-bold text-darkCyan">Front - End Developer</h3>
  <p class="text-[20px] font-bold">Creating beautiful and functional web experiences with modern technologies.
    Passionate about clean code,user experience,and bringing ides to life through
    innovative solutions.</p>
  <div class="flex gap-4 text-[14px] font-bold @max-md:mt-10">
    <NuxtLink to="/projects" class="px-[25px] py-[15px] rounded-full bg-darkCyan text-white font-display">
      View Projects
    </NuxtLink>
    <NuxtLink to="/contacts" class="px-[25px] py-[15px] rounded-full border-[1px] border-darkCyan text-darkCyan font-display">
      Contact Me
    </NuxtLink>
  </div>
</div>
</template>
<style scoped>

</style>