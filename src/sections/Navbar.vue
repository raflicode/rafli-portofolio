<script setup>
import { useI18n } from 'vue-i18n'
import { useDark } from '../composables/useDark'
import { Moon, Sun } from 'lucide-vue-next'

const { locale, t } = useI18n()
const { isDark, toggleDarkMode } = useDark()

const changeLang = (lang) => {
  locale.value = lang
}
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-bg-dark/80 backdrop-blur-md border-b border-white/5 px-6 lg:px-16 py-5 flex items-center justify-between">
    <a href="#" class="text-xl font-black tracking-tighter text-white font-sans">
      RAFLI.AULIA
    </a>

    <div class="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-text-muted">
      <a href="#about" class="hover:text-white transition-colors">{{ t('nav.about') }}</a>
      <a href="#skills" class="hover:text-white transition-colors">{{ t('nav.skills') }}</a>
      <a href="#projects" class="hover:text-white transition-colors">{{ t('nav.projects') }}</a>
      <a href="#experience" class="hover:text-white transition-colors">{{ t('nav.experience') }}</a>
      <a href="#certificates" class="hover:text-white transition-colors">{{ t('nav.certificates') }}</a>
      <a href="#contact" class="hover:text-white transition-colors">{{ t('nav.contact') }}</a>
    </div>

    <div class="flex items-center gap-4">
      <div class="bg-bg-card border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 text-[10px] font-bold tracking-tight">
        <button 
          @click="changeLang('en')" 
          :class="locale === 'en' ? 'text-accent' : 'text-text-muted'" 
          class="transition-colors cursor-pointer"
        >EN</button>
        <span class="text-white/20">|</span>
        <button 
          @click="changeLang('id')" 
          :class="locale === 'id' ? 'text-accent' : 'text-text-muted'" 
          class="transition-colors cursor-pointer"
        >ID</button>
      </div>

      <button @click="toggleDarkMode" class="text-text-muted hover:text-white transition-colors cursor-pointer">
        <Sun v-if="!isDark" :size="18" />
        <Moon v-else :size="18" />
      </button>
    </div>
  </nav>
</template>
