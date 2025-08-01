<template>
  <div :class="type=='page'?'min-h-screen':''" class="py-[40px]">
    <SectionTitle v-if="type !== 'page'" title="Featured Projects" subtitle="Take a look at some of my recent work and creative solutions"/>
    <SectionTitle v-else title="My Projects" subtitle="Take a look at some of my recent work and solutions"/>
    <div class="grid grid-cols-3 @max-md:grid-cols-1 dark:bg-dark-5 bg-darkMuted py-[50px] px-50 @max-md:px-5 gap-4">
      <!--      projects card-->
      <div v-for="project in projects" class="dark:bg-darkBackground bg-darkButton col-span-1 rounded-3xl cursor-pointer overflow-hidden relative hover:z-10 hover:scale-105">
        <div class="relative">
          <a class="" :href="project.link" target="_blank">
            <img :src="`/${project.image}`" alt="">
            <svg class="absolute bottom-[10px] left-[10px]" width="27" height="27" viewBox="0 0 27 27"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="27" height="27" fill="url(#pattern0_2112_70)"/>
              <defs>
                <pattern id="pattern0_2112_70" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_2112_70" transform="scale(0.00390625)"/>
                </pattern>
                <image id="image0_2112_70" width="256" height="256" preserveAspectRatio="none"
                       xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
          </a>
        </div>
        <div class="px-[25px] py-[20px]">
          <h1 class="text-[26px] mb-[15px] text-white">{{project.name}}</h1>
          <div class="flex flex-wrap justify-baseline gap-2">
            <div v-for="tag in project.tags" class="py-[3px] px-[5px] dark:bg-[#374151] not-dark:border-white border-transparent border-1 not-dark:text-white dark:text-darkCyan bg-darkButton rounded-full">
              <p class="text-[12px] font-medium">{{tag}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="type !== 'page'" class="flex justify-center">
      <NuxtLink to="/projects" class="px-[25px] py-[15px] mt-[30px] rounded-full bg-darkCyan text-white font-display">
        View All Projects
      </NuxtLink>
    </div>
  </div>
</template>


<script setup lang="ts">
import { defineProps, reactive} from "vue";

const props = defineProps(['type'])
const projects = reactive([
  {
    image:'scmborba.png',
    description:'',
    name:'Scmborba',
    link:'https://www.scmborba.pt/',
    tags:['Laravel + Vue.js','Keyframe Animations'],
  },
  {
    image:'aatourism.png',
    description:'',
    name:'AATourism',
    link:'https://www.aatourism.ca/',
    tags:['Nuxt2','Keyframe Animations','Api Integrations'],
  },
  {
    image:'ain_saiss.png',
    description:'',
    name:'Ain Saiss',
    link:'https://ain-saiss.ma/',
    tags:['Frontend','Javascript Solutions'],
  },
  {
    image:'city_arrivals.png',
    description:'',
    name:'City Arrivals',
    link:'https://cityarrivals.ca/',
    tags:['UX Development','Javascript Solutions','Api Integration'],
  },
])
</script>