// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  devtools: { enabled: true },
  runtimeConfig: {
    gmailUser: process.env.NUXT_PUBLIC_GMAIL_USER,
    gmailPass: process.env.NUXT_PUBLIC_GMAIL_PASS
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Moiz Dev Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Moiz Ur Rehman - Front-End Developer' }
      ]
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  nitro: {
    preset: 'netlify'
  },
})
