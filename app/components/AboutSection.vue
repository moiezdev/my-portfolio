<script setup lang="ts">

</script>

<template>
  <div class="py-[50px]">
    <div class="grid grid-cols-2 gap-x-4 px-26 h-full dark:bg-dark-5 bg-darkMuted">
      <!--  right section-->
      <div class="p-[100px] relative">
        <div class="relative w-full h-full">
        <span class="dark:opacity-100 opacity-50 bg-[#203441] absolute w-[87px] aspect-square top-[-20px] right-[-80px] rounded-full"></span>
        <span class="dark:opacity-100 opacity-50 bg-[#203441] absolute w-[118px] aspect-square bottom-[-15px] left-[-85px] rounded-full"></span>
        <img class="relative w-full h-full rounded-3xl object-cover z-10" src="/about.jpeg" alt="About.img"/>
        </div>
      </div>
      <!--  left section-->
      <div class="flex flex-col justify-between py-[80px]">
        <div>
        <h1 class="text-[32px] font-bold">About Me</h1>
        <p class="text-[16px] my-[50px]">I’m Moiz ur Rehman, a JavaScript developer with expertise in front-end
          and full-stack development. From 3D visuals to sleek user interfaces
          and powerful web applications, I turn ideas into engaging digital
          experiences.</p>
        <p class="text-[16px] my-[50px]">My journey in web began with a curiosity about how websites work,
          and it has evolved into a deep passion for crafting pixel-perfect interface
          that not only look great but also procide exceptional user experiences. I
          love the challenge of turning complex problems into simple, beautiful
          solutions</p>
        <p class="text-[16px] my-[50px]">When I’m not coding ,you can find me exploring new technologies,
          contributing to open source projects, or sharing my knowledge through
          technical writing and mentoring fellow developers.</p>
        </div>
        <div class="flex gap-4">
          <div class="py-[18px] px-[11px] dark:bg-[#374151] text-white bg-darkButton rounded-xl">
            <p class="text-[22px] font-semibold text-darkCyan">25+</p>
            <p>Completed Projects</p>
          </div>
          <div class="py-[18px] px-[11px] dark:bg-[#374151] text-white bg-darkButton rounded-xl">
            <p class="text-[22px] font-semibold text-darkCyan">20+</p>
            <p>Happy Clients</p>
          </div>
          <div class="py-[18px] px-[11px] dark:bg-[#374151] text-white bg-darkButton rounded-xl">
            <p class="text-[22px] font-semibold text-darkCyan">5+</p>
            <p>Year Experience</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>