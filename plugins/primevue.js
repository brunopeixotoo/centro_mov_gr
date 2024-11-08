// plugins/primevue.js
import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import 'primeicons/primeicons.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue)
    nuxtApp.vueApp.component('Menubar', Menubar)
})
