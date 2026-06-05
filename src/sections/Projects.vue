<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from '../components/ProjectCard.vue'

gsap.registerPlugin(ScrollTrigger)
const projectsSection = ref(null)

const { t } = useI18n()

// Data Array Projects sesuai instruksi & deskripsi Figma kamu
const featuredProjects = ref([
  {
    key: 'kami_yayuk',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
      'https://images.unsplash.com/photo-161153273656-6dadb2a7b5a5?q=80&w=1200'
    ],
    categories: ['web_app', 'ui_ux'],
    techStack: ['PHP', 'MySQL','Bootstrap'],
    liveUrl: 'https://youtu.be/NFY0su55GA8',
    repoUrl: 'https://github.com/raflicode/project-mua-final.git'
  }
])

onMounted(() => {
  const ctx = gsap.context(() => {
    // Animasi Reveal Header Proyek
    gsap.from('.project-header-reveal', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: projectsSection.value,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

    // Animasi Reveal List Kartu Proyek
    gsap.from('.project-item-reveal', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.project-item-reveal',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  }, projectsSection.value)
})
</script>

<template>
  <section 
    id="projects" 
    ref="projectsSection" 
    class="w-full bg-bg-dark px-6 lg:px-20 py-32 border-b border-white/5"
  >
    <div class="max-w-6xl mx-auto flex flex-col">
      
      <div class="flex flex-row items-end justify-between mb-20 w-full">
        <div>
          <p class="project-header-reveal text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-3">
            {{ t('projects.badge') }}
          </p>
          <h2 class="project-header-reveal text-3xl md:text-4xl font-black tracking-tight text-white font-sans">
            {{ t('projects.title') }}
          </h2>
        </div>
        
        <a 
          href="https://github.com/rafliaulia" 
          target="_blank" 
          class="project-header-reveal text-[10px] font-black tracking-widest text-accent border-b border-accent/20 pb-1 hover:text-white hover:border-white transition-colors"
        >
          {{ t('projects.browse_archive') }}
        </a>
      </div>

      <div class="project-item-reveal w-full flex flex-col gap-24">
        <ProjectCard 
          v-for="(project, index) in featuredProjects" 
          :key="index" 
          :project="project" 
        />
      </div>

    </div>
  </section>
</template>
