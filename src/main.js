import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/css/main.css'

// Import database bahasa yang baru saja kamu timpa tadi
import en from './locales/en.json'
import id from './locales/id.json'

const i18n = createI18n({
  legacy: false, // Wajib bernilai false agar kompatibel dengan <script setup>
  locale: 'en',   // Bahasa utama saat web pertama kali dimuat
  fallbackLocale: 'en',
  messages: {
    en,
    id
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')