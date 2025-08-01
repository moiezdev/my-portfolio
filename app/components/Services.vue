<template>
  <div class="py-[40px]">
    <SectionTitle title="Programming Languages & Technologies"
                  subtitle="Core Languages and technologies I use for full-stack development"/>
    <div class="px-26 @max-md:px-5">
      <div class="grid grid-cols-3 grid-rows-2 gap-4 @max-md:grid-cols-1">
        <!--      Front-end development Card-->
        <div class="col-span-1 row-span-2 rounded-3xl dark:bg-dark-5 bg-darkMuted overflow-hidden">
          <div class="px-[22px] py-[25px] bg-darkCyan text-white">
            <h2>Frontend Development</h2>
            <p>Creating Interactive and responsive user interfaces</p>
          </div>
          <div class="p-[35px] dark:bg-dark-5 bg-darkMuted flex flex-col gap-[30px]">
            <div v-for="language in devLanguages" class="flex">
              <div class="dark:bg-[#374151] text-white bg-darkButton rounded-xl py-[10px] px-[10px]">
                <img class="w-[24] mt-1 aspect-square" :src="`/${language.icon}`" :alt="language.icon">
              </div>
              <div class="flex-1 flex flex-col justify-between py-2 px-[12px]">
                <p class="text-[16px] font-semibold">{{ language.name }}</p>
                <p class="text-[12px] font-semibold">{{ language.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <!--      Backend Development Card-->
        <div class="col-span-1 row-span-1 rounded-3xl dark:bg-dark-5 bg-darkMuted overflow-hidden">
          <div class="px-[22px] py-[25px] bg-darkCyan text-white">
            <h2>Backend Development</h2>
            <p>Building robust server side applications and APIs </p>
          </div>
          <div class="p-[35px] flex flex-col gap-[30px]">
            <div v-for="language in backendLanguages" class="flex">
              <div class="dark:bg-[#374151] text-white bg-darkButton rounded-xl py-[10px] px-[10px]">
                <img class="w-[24] mt-1 aspect-square" :src="`/${language.icon}`" :alt="language.icon">
              </div>
              <div class="flex-1 flex flex-col justify-between py-2 px-[12px]">
                <p class="text-[16px] font-semibold">{{ language.name }}</p>
                <p class="text-[12px] font-semibold">{{ language.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <!--      TechStack Tools Card-->
        <div class="col-span-1 row-span-1 rounded-3xl dark:bg-dark-5 bg-darkMuted overflow-hidden">
          <div class="px-[22px] py-[25px] bg-darkCyan text-white">
            <h2>Backend Development</h2>
            <p>Building robust server side applications and APIs </p>
          </div>
          <div class="p-[35px] flex flex-col gap-[30px]">
            <div v-for="language in backendLanguages" class="flex">
              <div class="dark:bg-[#374151] text-white bg-darkButton rounded-xl py-[10px] px-[10px]">
                <img class="w-[24] mt-1 aspect-square" :src="`/${language.icon}`" :alt="language.icon">
              </div>
              <div class="flex-1 flex flex-col justify-between py-2 px-[12px]">
                <p class="text-[16px] font-semibold">{{ language.name }}</p>
                <p class="text-[12px] font-semibold">{{ language.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <!--      Development Philosophy-->
        <div
            class="col-span-2 row-span-1 rounded-3xl dark:bg-dark-5 bg-darkMuted overflow-hidden px-[22px] py-[25px] @max-md:col-span-1">

          <div class="flex flex-col justify-between gap-[30px]">
            <div class="flex flex-col gap-[30px]">
              <h1 class="text-[22px] font-semibold">Development Philosophy</h1>
              <p class="text-[12px] font-semibold">I believe in writing clean, maintainable code and staying current
                with industry best practices.
                <br>Always learning new technologies to deliver better solutions.</p>
            </div>
            <div class="flex flex-wrap gap-4 @max-md:gap-1">
              <div class="py-[8px] px-[13px] dark:bg-[#374151] text-white bg-darkButton rounded-full">
                <p class="text-[12px] font-medium">Clean Code</p>
              </div>
              <div class="py-[8px] px-[13px] dark:bg-[#374151] text-white bg-darkButton rounded-full">
                <p class="text-[12px] font-medium">Best Practices</p>
              </div>
              <div class="py-[8px] px-[13px] dark:bg-[#374151] text-white bg-darkButton rounded-full">
                <p class="text-[12px] font-medium">Continuous Learning</p>
              </div>
              <div class="py-[8px] px-[13px] dark:bg-[#374151] text-white bg-darkButton rounded-full">
                <p class="text-[12px] font-medium">Problem Solving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";

const devLanguages = reactive([
  {
    name: "JavaScript",
    text: "Dynamic web application",
    icon: "js.png",
  },
  {
    name: "HTML",
    text: "Semantic web structure",
    icon: "html.png",
  },
  {
    name: "CSS",
    text: "Modern web styling",
    icon: "css.png",
  },
  {
    name: "SCSS",
    text: "Enhanced CSS workflow",
    icon: "scss.png",
  },
  {
    name: "Sass",
    text: "CSS with superpower",
    icon: "sass.png",
  },
])
const backendLanguages = reactive([
  {
    name: "PHP",
    text: "Server- side development",
    icon: "php.png",
  },
  {
    name: "Python",
    text: "Versatile programmimg",
    icon: "python.png",
  },
])
</script>