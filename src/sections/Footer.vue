<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="w-full bg-bg-dark px-6 lg:px-20 py-12 border-t border-white/5">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold tracking-widest text-text-muted/50">
      <div>
        © {{ currentYear }} RAFLI AULIA AL GIFFARI. {{ t('footer.rights') }}
      </div>
      <div class="flex gap-8">
        <a href="#about" class="hover:text-white transition-colors">{{ t('footer.top') }}</a>
        <a href="https://github.com/raflicode" target="_blank" class="hover:text-white transition-colors">GITHUB</a>
      </div>
    </div>
  </footer>
</template>
