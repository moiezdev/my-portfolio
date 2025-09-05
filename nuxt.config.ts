// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import process from 'node:process';

export default defineNuxtConfig({
  $development: undefined,
  $env: undefined,
  $meta: undefined,
  $production: undefined,
  $test: undefined,
  ssr: true,
  devtools: { enabled: true },
  runtimeConfig: {
    gmailUser: process.env.NUXT_PUBLIC_GMAIL_USER,
    gmailPass: process.env.NUXT_PUBLIC_GMAIL_PASS,
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Moiz Dev Portfolio',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Adjust href and type as needed
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Moiz Ur Rehman - Front-End Developer' },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    preset: 'vercel',
  },
  modules: ['motion-v/nuxt'],
});
