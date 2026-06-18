import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const setOg = (property, content) => {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useSeo() {
  const { t, locale } = useI18n()

  const updateSeo = () => {
    const title = t('seo.title')
    const description = t('seo.description')

    document.title = title
    setMeta('description', description)
    setOg('og:title', title)
    setOg('og:description', description)
    setOg('og:locale', locale.value === 'id' ? 'id_ID' : 'en_US')
  }

  watch(locale, updateSeo, { immediate: true })
}
