import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const LOCALE_KEY = 'locale'

export function initLocale() {
  if (typeof window === 'undefined') return 'en'
  return localStorage.getItem(LOCALE_KEY) || 'en'
}

export function useLocale() {
  const { locale } = useI18n()

  const setLocale = (lang) => {
    locale.value = lang
  }

  watch(
    locale,
    (lang) => {
      localStorage.setItem(LOCALE_KEY, lang)
      document.documentElement.lang = lang
    },
    { immediate: true }
  )

  return { locale, setLocale }
}
