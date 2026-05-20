<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowUpRight, Award } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const certSection = ref(null)

const { t } = useI18n()

const certificates = [
  { title: 'Advanced Fullstack Web Development', issuer: 'HackerRank', date: '2025', url: '#' },
  { title: 'Generative AI Engineering Foundations', issuer: 'DeepLearning.AI', date: '2025', url: '#' }
]

onMounted(() => {
  const ctx = gsap.context(() => {
    gsap.from('.cert-reveal', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: certSection.value,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })
  }, certSection.value)
})
</script>

<template>
  <section id="certificates" ref="certSection" class="w-full bg-bg-dark px-6 lg:px-20 py-32 border-b border-white/5">
    <div class="max-w-4xl mx-auto">
      
      <div class="mb-16">
        <p class="cert-reveal text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-3">{{ t('certificates.badge') }}</p>
        <h2 class="cert-reveal text-3xl md:text-4xl font-black tracking-tight text-white font-sans">{{ t('certificates.title') }}</h2>
      </div>

      <div class="flex flex-col border-t border-white/5">
        <a 
          v-for="(cert, idx) in certificates" 
          :key="idx"
          :href="cert.url"
          target="_blank"
          class="cert-reveal group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/5 hover:bg-white/[0.01] px-4 -mx-4 transition-all duration-300"
        >
          <div class="flex items-start gap-4">
            <Award :size="18" class="text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 class="text-sm md:text-base font-bold text-white group-hover:text-accent transition-colors">{{ cert.title }}</h4>
              <p class="text-xs text-text-muted mt-1">{{ cert.issuer }} — {{ cert.date }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 text-[10px] font-bold tracking-widest text-text-muted group-hover:text-white transition-colors mt-4 sm:mt-0">
            <span>{{ t('certificates.view') }}</span>
            <ArrowUpRight :size="12" class="text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>

    </div>
  </section>
</template>