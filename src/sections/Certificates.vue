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
  { key: 'cert_1', url: '/certifikat_figma.pdf' }
]

onMounted(() => {
  const ctx = gsap.context(() => {
    gsap.from('.cert-reveal', {
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: certSection.value,
        start: 'top 90%',
        toggleActions: 'play none none none'
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

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a 
          v-for="(cert, idx) in certificates" 
          :key="idx"
          :href="cert.url"
          target="_blank"
          class="cert-reveal group flex min-h-40 flex-col justify-between bg-bg-card border border-white/10 p-6 hover:border-accent/40 hover:bg-accent-muted transition-all duration-300"
        >
          <div class="flex items-start gap-4">
            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-accent/30 bg-accent-muted">
              <Award :size="18" class="text-accent" />
            </div>
            <div>
              <h4 class="text-sm md:text-base font-bold text-white group-hover:text-accent transition-colors">
                {{ t(`certificates.items.${cert.key}.title`) }}
              </h4>
              <p class="text-xs text-text-muted mt-1">
                {{ t(`certificates.items.${cert.key}.issuer`) }} - {{ t(`certificates.items.${cert.key}.date`) }}
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2 text-[10px] font-bold tracking-widest text-text-muted group-hover:text-white transition-colors mt-8">
            <span>{{ t('certificates.view') }}</span>
            <ArrowUpRight :size="12" class="text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>

    </div>
  </section>
</template>
