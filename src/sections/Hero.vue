<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowUpRight, Download, Mail, Github } from 'lucide-vue-next'
import gsap from 'gsap'

const { t } = useI18n()
const heroContainer = ref(null)

onMounted(() => {
  const ctx = gsap.context(() => {
    // Animasi Timeline untuk Intro Hero yang Sinematik
    const tl = gsap.timeline()
    
    tl.from('.hero-tagline', { opacity: 0, y: -20, duration: 0.6, delay: 0.2 })
      .from('.hero-title', { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
      .from('.hero-sub', { opacity: 0, y: 20, duration: 0.6 }, '-=0.35')
      .from('.hero-btn', { y: 14, duration: 0.45, stagger: 0.12 }, '-=0.2')
      .from('.hero-social', { y: 10, duration: 0.5, stagger: 0.1 }, '-=0.15')
  }, heroContainer.value)
})
</script>

<template>
  <section 
    ref="heroContainer"
    class="relative min-h-screen w-full bg-bg-dark flex flex-col justify-center items-center px-4 overflow-hidden pt-20"
  >
    <div class="absolute inset-0 bg-[url('/src/assets/hero-bg-crystals.png')] bg-cover bg-center opacity-40 mix-blend-screen pointer-events-none"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark/50 pointer-events-none"></div>

    <div class="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
      <p class="hero-tagline text-accent text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
        {{ t('hero.tagline') }}
      </p>

      <h1 class="hero-title text-3xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6 font-sans">
        {{ t('hero.title_1') }}
      </h1>

      <p class="hero-sub typewriter-subtitle text-text-muted text-lg md:text-xl font-medium tracking-wide max-w-2xl mb-12">
        {{ t('hero.subtitle') }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-20">
        <a 
          href="#projects" 
          class="hero-btn group min-h-12 w-full sm:w-auto bg-accent hover:bg-amber-400 text-black shadow-[0_0_28px_rgba(229,184,66,0.35)] font-bold text-xs tracking-widest px-8 py-4 flex items-center justify-center gap-2 transition-all duration-300"
        >
          {{ t('hero.btn_works') }}
          <ArrowUpRight :size="14" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <a 
          href="/cv.pdf" 
          download
          class="hero-btn group min-h-12 w-full sm:w-auto bg-white text-black hover:bg-accent border border-white shadow-[0_0_24px_rgba(255,255,255,0.14)] font-bold text-xs tracking-widest px-8 py-4 flex items-center justify-center gap-2 transition-all duration-300"
        >
          <Download :size="14" class="group-hover:translate-y-0.5 transition-transform" />
          {{ t('hero.btn_resume') }}
        </a>
      </div>

      <div class="flex items-center gap-8 text-[11px] font-bold tracking-widest text-text-muted">
        <a href="mailto:hello@rafliaulia.dev" class="hero-social flex items-center gap-2 hover:text-white transition-colors group">
          <Mail :size="12" class="text-accent" />
          <span>EMAIL</span>
        </a>
        <a href="https://github.com/rafliaulia" target="_blank" class="hero-social flex items-center gap-2 hover:text-white transition-colors group">
          <Github :size="12" class="text-accent" />
          <span>GITHUB</span>
        </a>
      </div>
    </div>
  </section>
</template>
