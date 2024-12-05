// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook', '@pinia/nuxt', '@element-plus/nuxt'],
  css: ['~/assets/css/main.css'],
  // plugins: ['~/plugins/fontawesome.js'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})