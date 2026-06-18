import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/css/main.css'

import en from './locales/en.json'
import id from './locales/id.json'
import { initLocale } from './composables/useLocale'

const savedLocale = initLocale()

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    id
  }
})

document.documentElement.lang = savedLocale

const app = createApp(App)
app.use(i18n)
app.mount('#app')
