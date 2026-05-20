<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Code2, FileJson, Cpu, Database, Server, 
  Layers, Terminal, Github, Figma 
} from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)
const skillsSection = ref(null)

const { t } = useI18n()

// Data Array Skills terstruktur sesuai daftar yang kamu minta
const skillsData = [
  { name: 'HTML5', icon: Code2, label: 'HTML', status: 'expert' },
  { name: 'CSS3', icon: Layers, label: 'CSS', status: 'expert' },
  { name: 'JAVASCRIPT', icon: FileJson, label: 'JS', status: 'advanced' },
  { name: 'PHP', icon: Terminal, label: 'PHP', status: 'advanced' },
  { name: 'MYSQL', icon: Database, label: 'MYSQL', status: 'advanced' },
  { name: 'LARAVEL', icon: Server, label: 'Laravel', status: 'advanced' },
  { name: 'VUEJS', icon: Cpu, label: 'VUE.JS', status: 'advanced' },
  { name: 'GIT', icon: Code2, label: 'GIT', status: 'intermediate' },
  { name: 'GITHUB', icon: Github, label: 'GITHUB', status: 'intermediate' },
  { name: 'FIGMA', icon: Figma, label: 'FIGMA', status: 'advanced' }
]

onMounted(() => {
  const ctx = gsap.context(() => {
    gsap.from('.skill-card', {
      scale: 0.95,
      y: 20,
      duration: 0.6,
      stagger: 0.08,
      scrollTrigger: {
        trigger: skillsSection.value,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    })
  }, skillsSection.value)
})
</script>

<template>
  <section 
    id="skills" 
    ref="skillsSection" 
    class="w-full bg-bg-dark px-6 lg:px-20 py-32 border-b border-white/5"
  >
    <div class="max-w-6xl mx-auto">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <p class="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-3">
            {{ t('skills.badge') }}
          </p>
          <h2 class="text-3xl md:text-4xl font-black tracking-tight text-white font-sans">
            {{ t('skills.title') }}
          </h2>
        </div>
        <div class="text-[10px] font-bold tracking-widest text-text-muted/60 border-b border-white/10 pb-1">
          // {{ t('skills.updating') }}
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-5 border-t border-l border-white/10">
        <div 
          v-for="(skill, index) in skillsData" 
          :key="index"
          class="skill-card group relative bg-bg-card border-r border-b border-white/10 p-8 flex flex-col justify-between items-start aspect-square transition-all duration-500 hover:border-accent/40 hover:bg-accent-muted"
        >
          <span class="text-[10px] font-bold tracking-widest text-text-muted group-hover:text-accent transition-colors">
            {{ skill.label }}
          </span>

          <div class="my-auto flex flex-col gap-4">
            <component 
              :is="skill.icon" 
              :size="24" 
              class="text-accent/80 group-hover:text-accent transition-transform duration-500 group-hover:scale-110" 
            />
            <h4 class="text-sm md:text-base font-black tracking-wider text-white">
              {{ skill.name }}
            </h4>
          </div>

          <span class="text-[9px] font-bold tracking-widest text-text-muted/50 group-hover:text-white/80 transition-colors uppercase">
            {{ t(`skills.status.${skill.status}`) }}
          </span>

          <div class="absolute inset-0 bg-gradient-to-tr from-accent/0 via-transparent to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
      </div>

    </div>
  </section>
</template>
