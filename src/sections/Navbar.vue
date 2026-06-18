<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDark } from '../composables/useDark'
import { useLocale } from '../composables/useLocale'
import { Menu, X, Moon, Sun } from 'lucide-vue-next'

const { t } = useI18n()
const { locale, setLocale } = useLocale()
const { isDark, toggleDarkMode } = useDark()

const isMenuOpen = ref(false)
const activeSection = ref('')

const navLinks = [
  { href: '#about', key: 'about', label: 'nav.about' },
  { href: '#skills', key: 'skills', label: 'nav.skills' },
  { href: '#projects', key: 'projects', label: 'nav.projects' },
  { href: '#experience', key: 'experience', label: 'nav.experience' },
  { href: '#certificates', key: 'certificates', label: 'nav.certificates' },
  { href: '#contact', key: 'contact', label: 'nav.contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const navClass = (key) => {
  const isActive = activeSection.value === key
  return isActive
    ? 'text-accent'
    : 'text-text-muted hover:text-white'
}

let observer = null

onMounted(() => {
  const sections = navLinks
    .map((link) => document.querySelector(link.href))
    .filter(Boolean)

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  )

  sections.forEach((section) => observer.observe(section))
})

onUnmounted(() => {
  observer?.disconnect()
  document.body.style.overflow = ''
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-bg-dark/85 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 lg:px-16 py-3.5 sm:py-5 flex items-center justify-between"
    aria-label="Main navigation"
  >
    <a href="#" class="text-base sm:text-xl font-black tracking-tighter text-white font-sans">
      RAFLI.AULIA
    </a>

    <div class="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest">
      <a
        v-for="link in navLinks"
        :key="link.key"
        :href="link.href"
        :class="['transition-colors', navClass(link.key)]"
        :aria-current="activeSection === link.key ? 'page' : undefined"
      >
        {{ t(link.label) }}
      </a>
    </div>

    <div class="flex items-center gap-2 sm:gap-4">
      <div
        class="bg-bg-card border border-white/10 rounded-full px-2.5 sm:px-3 py-1 flex items-center gap-2 text-[10px] font-bold tracking-tight"
        role="group"
        :aria-label="t('a11y.language_switcher')"
      >
        <button
          type="button"
          @click="setLocale('en')"
          :class="locale === 'en' ? 'text-accent' : 'text-text-muted'"
          class="transition-colors cursor-pointer"
          :aria-pressed="locale === 'en'"
          aria-label="English"
        >
          EN
        </button>
        <span class="text-white/20" aria-hidden="true">|</span>
        <button
          type="button"
          @click="setLocale('id')"
          :class="locale === 'id' ? 'text-accent' : 'text-text-muted'"
          class="transition-colors cursor-pointer"
          :aria-pressed="locale === 'id'"
          aria-label="Bahasa Indonesia"
        >
          ID
        </button>
      </div>

      <button
        type="button"
        @click="toggleDarkMode"
        class="h-8 w-8 flex items-center justify-center text-text-muted hover:text-white transition-colors cursor-pointer"
        :aria-label="isDark ? t('a11y.switch_light') : t('a11y.switch_dark')"
      >
        <Sun v-if="!isDark" :size="18" aria-hidden="true" />
        <Moon v-else :size="18" aria-hidden="true" />
      </button>

      <button
        type="button"
        @click="toggleMenu"
        class="md:hidden h-8 w-8 flex items-center justify-center text-text-muted hover:text-white transition-colors cursor-pointer"
        :aria-expanded="isMenuOpen"
        :aria-label="isMenuOpen ? t('a11y.close_menu') : t('a11y.open_menu')"
      >
        <X v-if="isMenuOpen" :size="20" aria-hidden="true" />
        <Menu v-else :size="20" aria-hidden="true" />
      </button>
    </div>
  </nav>

  <Transition
    enter-active-class="transition-opacity duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
      @click="closeMenu"
      aria-hidden="true"
    />
  </Transition>

  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-200 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="isMenuOpen"
      class="fixed top-0 right-0 z-50 h-full w-[min(100%,20rem)] bg-bg-dark border-l border-white/10 pt-20 px-6 pb-8 flex flex-col gap-1 md:hidden"
      role="dialog"
      aria-modal="true"
      :aria-label="t('a11y.mobile_menu')"
    >
      <a
        v-for="link in navLinks"
        :key="link.key"
        :href="link.href"
        @click="closeMenu"
        :class="[
          'py-3.5 text-sm font-semibold tracking-widest border-b border-white/5 transition-colors',
          navClass(link.key)
        ]"
        :aria-current="activeSection === link.key ? 'page' : undefined"
      >
        {{ t(link.label) }}
      </a>
    </div>
  </Transition>
</template>
