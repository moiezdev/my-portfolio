<template>
  <div class="py-[50px] ">
  <SectionTitle title="Let’s Work Together" subtitle="Have a project in mind? I had love to hear about it and discuss how
we can bring your ideas to life"/>
  <div class="px-26 @max-md:px-5">
    <div class="grid grid-cols-11">
      <!--    right side-->
      <div class="col-span-6 @max-md:col-span-11 @max-md:mb-10">
        <h3 class="text-[22px] font-semibold mb-[50px]">Get In Touch</h3>
        <p class="text-[16px] font-semibold mb-[50px] xl:pr-26">I’m always interested in new opportunities and exciting
          projects. whether
          you’re a company looking to hire,or you’re a fellow developer waiting to
          collaborate, don’t hesitate to reach out! </p>
        <div class="flex flex-col gap-[20px] mb-[50px]">
          <a v-for="contact in contacts" class="flex align-items-center" :href="contact.attr">
            <div class="dark:bg-[#374151] aspect-square text-white bg-darkButton rounded-xl py-[10px] px-[10px]">
              <img class="w-[24] aspect-square" :src="`/${contact.icon}`" :alt="contact.icon">
            </div>
            <div class="flex-1 flex flex-col justify-between px-[12px]">
              <p class="text-[16px] font-semibold">{{ contact.name }}</p>
              <p class="text-[14px]">{{ contact.contact_id }}</p>
            </div>
          </a>
        </div>
        <div class="flex gap-4">
          <a target="_blank" href="https://www.linkedin.com/in/moiezdev/">
            <img src="/linkedin.svg" alt="">
          </a>
          <a target="_blank" href="https://www.instagram.com/dev.moiz">
            <img src="/insta.svg" alt="">
          </a>
          <a target="_blank" href="https://www.instagram.com/dev.moiz">
            <img src="/insta.svg" alt="">
          </a>
        </div>
      </div>
      <!--      left side-->
      <form @submit.prevent="sendMessage"
            class="col-span-5 @max-md:col-span-11 dark:bg-dark-5 bg-darkButton text-white rounded-3xl p-[50px] @max-md:p-5">
        <div class="flex flex-col gap-[20px] mb-[30px]">
          <label for="name">Name*</label>
          <input required v-model="message.name" class="dark:bg-[#374151] bg-[#98A1AE] p-[15px] rounded-xl cursor-text"
                 id="name" type="text"
                 placeholder="Enter your name" autocomplete="name"/>
        </div>
        <div class="flex flex-col gap-[20px] mb-[30px]">
          <label for="email">Email*</label>
          <input required v-model="message.email" class="dark:bg-[#374151] bg-[#98A1AE] p-[15px] rounded-xl cursor-text"
                 id="email" type="email"
                 placeholder="Enter your email" autocomplete="email"/>
        </div>
        <div class="flex flex-col gap-[20px] mb-[30px]">
          <label for="message">Message*</label>
          <div class="flex flex-col">
            <textarea required v-model="message.message"
                      class="dark:bg-[#374151] bg-[#98A1AE] p-[15px] rounded-xl cursor-text" id="message"
                      type="email" placeholder="Tell me about your project ....."/>
            <span class="w-full text-right">{{ message.message.length }}/1000</span>
          </div>
        </div>
        <div>
          <button
              class="px-[25px] py-[15px] mt-[30px] rounded-xl cursor-pointer bg-darkCyan text-white font-display w-full disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              :disabled="loading"
          >
          <span class="flex mx-auto items-center justify-center" v-if="loading">
            <svg class="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
  </svg>
            Sending...</span>
            <span v-else>Send Message</span>
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";

const contacts = reactive([
  {
    name: "Email",
    icon: "mail.png",
    contact_id: "moiezdev@gmail.com",
    attr:'mailto:moiezdev@gmail.com',
  },
  {
    name: "Phone number",
    icon: "phone.png",
    contact_id: "+966573240913",
    attr:'tel:+966573240913',
  },
  {
    name: "Location",
    icon: "location.png",
    contact_id: "Al Jubail/ SaudiArabia",
    attr:'mailto:moiezdev@gmail.com',
  },
])

const message = reactive({
  name: "",
  email: "",
  message: "",
})

const loading = ref(false)

const sendMessage = async () => {
  loading.value = true
  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: {...message}
    })

    if (res.success) {
      Object.assign(message, {name: '', email: '', message: ''})
      alert('Message sent successfully!')
    } else {
      alert('Failed to send message.')
    }
  } catch (err) {
    console.error(err)
    alert('An error occurred. Try again later.')
  } finally {
    loading.value = false
  }
}
//
// const sendMessage = async () => {
//   try {
//     const res = await $fetch('/api/contact', {
//       method: 'POST',
//       body: {
//         name: message.name,
//         email: message.email,
//         message: message.message
//       }
//     })
//
//     if (res.success) {
//       message.name=''
//       message.email=''
//       message.message=''
//       alert('Message sent successfully!')
//     } else {
//       alert('Failed to send message.')
//     }
//   } catch (err) {
//     console.error(err)
//     alert('An error occurred. Try again later.')
//   }
// }

</script>

<style scoped>

</style>