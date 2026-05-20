<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const aboutSection = ref(null)

const { t } = useI18n()

onMounted(() => {
  const ctx = gsap.context(() => {
    gsap.from('.about-reveal', {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutSection.value,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })
  }, aboutSection.value)
})
</script>

<template>
  <section 
    id="about" 
    ref="aboutSection" 
    class="min-h-screen w-full bg-bg-dark px-6 lg:px-20 py-32 flex flex-col justify-center border-b border-white/5"
  >
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      
      <div class="lg:col-span-7 flex flex-col items-start">
        <div class="about-reveal flex items-center gap-2 border border-accent/30 bg-accent-muted px-3 py-1.5 mb-8">
          <span class="w-1.5 h-1.5 bg-accent"></span>
          <span class="text-[10px] font-bold tracking-widest text-accent uppercase">{{ t('about.badge') }}</span>
        </div>

        <h2 class="about-reveal text-3xl md:text-5xl font-black tracking-tight text-white mb-8 leading-tight font-sans">
          {{ t('about.title_normal') }}
          <span class="text-accent italic font-medium">{{ t('about.title_accent') }}</span>
          {{ t('about.title_normal_2') }}
        </h2>

        <p class="about-reveal text-text-muted text-sm md:text-base leading-relaxed tracking-wide mb-6">
          {{ t('about.p1') }}
        </p>
        <p class="about-reveal text-text-muted text-sm md:text-base leading-relaxed tracking-wide mb-12">
          {{ t('about.p2') }}
        </p>

        <div class="about-reveal flex gap-16 pt-4 border-t border-white/5 w-full">
          <div>
            <h3 class="text-3xl md:text-4xl font-light text-accent tracking-tight">3+</h3>
            <p class="text-[10px] font-bold tracking-widest text-text-muted mt-1">{{ t('about.exp_years') }}</p>
          </div>
          <div>
            <h3 class="text-3xl md:text-4xl font-light text-accent tracking-tight">24+</h3>
            <p class="text-[10px] font-bold tracking-widest text-text-muted mt-1">{{ t('about.global_proj') }}</p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 about-reveal flex justify-center lg:justify-end w-full">
        <div class="relative w-full max-w-[360px] aspect-[4/5] p-2 gold-border-glow bg-bg-card">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600" 
            alt="Rafli Aulia Al Giffari" 
            class="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

    </div>
  </section>
</template>
