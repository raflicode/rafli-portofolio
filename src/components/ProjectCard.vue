<script setup>
import { useI18n } from 'vue-i18n'
import { ExternalLink, Github } from 'lucide-vue-next'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const { t } = useI18n()

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const modules = [Autoplay]
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-16 items-center w-full">
    
    <div class="lg:col-span-7 w-full overflow-hidden border border-white/10 bg-bg-card light-image-frame p-2 sm:p-3 group">
      <Swiper
        :modules="modules"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :loop="true"
        class="relative w-full"
      >
        <SwiperSlide v-for="(image, idx) in (Array.isArray(project.images) ? project.images : [project.image])" :key="idx">
          <div class="relative overflow-hidden aspect-[16/11] sm:aspect-[16/10] lg:aspect-[16/10] w-full bg-slate-900">
            <img 
              :src="image" 
              :alt="`${t(`projects.items.${project.key}.title`)} - Slide ${idx + 1}`"
              class="w-full h-full object-cover group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700 ease-out"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none dark:from-black/30"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="lg:col-span-5 flex flex-col items-start w-full">
      <div class="flex flex-wrap gap-2 mb-4 sm:mb-6">
        <span 
          v-for="(cat, cIdx) in project.categories" 
          :key="cIdx"
          class="text-[9px] font-black tracking-widest text-accent border border-accent/20 bg-accent-muted px-2.5 py-1 uppercase"
        >
          {{ t(`projects.categories.${cat}`) }}
        </span>
      </div>

      <h3 class="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-4 sm:mb-6 font-sans group-hover:text-accent transition-colors">
        {{ t(`projects.items.${project.key}.title`) }}
      </h3>

      <p class="text-text-muted text-sm md:text-base leading-relaxed tracking-wide mb-6 sm:mb-8 max-w-xl">
        {{ t(`projects.items.${project.key}.description`) }}
      </p>

      <div class="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-extrabold tracking-widest text-text-muted/70 mb-7 sm:mb-10 border-b border-white/5 pb-4 w-full">
        <span v-for="(tech, tIdx) in project.techStack" :key="tIdx" class="hover:text-white transition-colors">
          {{ tech }}
        </span>
      </div>

      <div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-bold tracking-widest">
        <a 
          :href="project.liveUrl" 
          target="_blank" 
          class="flex items-center gap-2 text-white hover:text-accent transition-colors group/link"
        >
          <ExternalLink :size="14" class="text-accent group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          <span>{{ t('projects.links.live') }}</span>
        </a>
        <a 
          :href="project.repoUrl" 
          target="_blank" 
          class="flex items-center gap-2 text-text-muted hover:text-white transition-colors"
        >
          <Github :size="14" />
          <span>{{ t('projects.links.repo') }}</span>
        </a>
      </div>
    </div>

  </div>
</template>
