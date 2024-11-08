
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  plugins: ['~/plugins/primevue.js'],

  app: {
    baseURL: '/centro_mov_gr/' // Coloque o nome do repositório aqui
  }

})

