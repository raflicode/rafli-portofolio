<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const expSection = ref(null)

const { t } = useI18n()

// Data Array Timeline Experience
const experiences = [
  {
    id: '01',
    key: 'exp_1'
  },
  {
    id: '02',
    key: 'exp_2'
  }
]

onMounted(() => {
  const ctx = gsap.context(() => {
    // Animasi Reveal Title
    gsap.from('.exp-title-reveal', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: expSection.value,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

    // Animasi Reveal Setiap Card Timeline
    gsap.utils.toArray('.exp-card-reveal').forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    })
  }, expSection.value)
})
</script>

<template>
  <section 
    id="experience" 
    ref="expSection" 
    class="w-full bg-bg-dark px-6 lg:px-20 py-32 border-b border-white/5 overflow-hidden"
  >
    <div class="max-w-4xl mx-auto flex flex-col items-center">
      
      <div class="text-center mb-24">
        <p class="exp-title-reveal text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-3">
          {{ t('experience.badge') }}
        </p>
        <h2 class="exp-title-reveal text-3xl md:text-4xl font-black tracking-tight text-white font-sans">
          {{ t('experience.title') }}
        </h2>
      </div>

      <div class="relative w-full flex flex-col items-center">
        <div class="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[1px] bg-white/10 pointer-events-none"></div>

        <div 
          v-for="(item, index) in experiences" 
          :key="index"
          class="exp-card-reveal relative w-full flex flex-col md:flex-row items-center mb-16 last:mb-0"
        >
          <div class="w-full flex" :class="index % 2 === 0 ? 'md:justify-start md:pr-12' : 'md:justify-end md:pl-12 md:order-2'">
            
            <div class="relative w-full md:max-w-[400px] bg-bg-card p-8 border border-white/5 hover:border-accent/30 transition-colors duration-500 group">
              <div 
                class="absolute bottom-4 right-6 text-7xl font-black text-white/[0.02] tracking-tighter select-none font-sans group-hover:text-white/[0.04] transition-colors duration-500"
                :class="index % 2 === 0 ? 'right-6' : 'left-6 text-left'"
              >
                {{ item.id }}
              </div>

              <span class="text-[10px] font-bold tracking-widest text-accent mb-3 block">
                {{ t(`experience.items.${item.key}.date`) }}
              </span>

              <h4 class="text-base md:text-lg font-black tracking-tight text-white mb-4 font-sans">
                {{ t(`experience.items.${item.key}.role`) }}
              </h4>

              <p class="text-text-muted text-xs md:text-sm leading-relaxed tracking-wide relative z-10">
                {{ t(`experience.items.${item.key}.desc`) }}
              </p>
            </div>

          </div>

          <div class="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent border-4 border-bg-dark box-content z-20"></div>

          <div class="hidden md:block w-full" :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'"></div>
        </div>
      </div>

    </div>
  </section>
</template>