<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowRight } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const contactSection = ref(null)

const { t } = useI18n()

const formData = ref({ name: '', email: '', message: '' })

const handleSubmit = () => {
  alert(`Message sent by ${formData.value.name}! (Simulated)`)
}

onMounted(() => {
  const ctx = gsap.context(() => {
    gsap.from('.contact-reveal', {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contactSection.value,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })
  }, contactSection.value)
})
</script>

<template>
  <section id="contact" ref="contactSection" class="w-full bg-bg-dark px-6 lg:px-20 py-32 border-b border-white/5">
    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      
      <div class="lg:col-span-5">
        <p class="contact-reveal text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{{ t('contact.badge') }}</p>
        <h2 class="contact-reveal text-3xl md:text-5xl font-black tracking-tight text-white leading-tight font-sans">
          Let's create something <span class="text-accent italic font-medium">extraordinary.</span>
        </h2>
      </div>

      <form @submit.prevent="handleSubmit" class="lg:col-span-7 flex flex-col gap-10 w-full contact-reveal">
        <div class="relative w-full">
          <input type="text" v-model="formData.name" required placeholder=" " class="peer w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors" />
          <label class="absolute left-0 top-3 text-[10px] font-bold tracking-widest text-text-muted/60 pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:top-[-16px] peer-focus:text-[10px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-[-16px] peer-[:not(:placeholder-shown)]:text-[10px]">
            {{ t('contact.form.name') }}
          </label>
        </div>

        <div class="relative w-full">
          <input type="email" v-model="formData.email" required placeholder=" " class="peer w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors" />
          <label class="absolute left-0 top-3 text-[10px] font-bold tracking-widest text-text-muted/60 pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:top-[-16px] peer-focus:text-[10px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-[-16px] peer-[:not(:placeholder-shown)]:text-[10px]">
            {{ t('contact.form.email') }}
          </label>
        </div>

        <div class="relative w-full">
          <textarea v-model="formData.message" rows="3" required placeholder=" " class="peer w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
          <label class="absolute left-0 top-3 text-[10px] font-bold tracking-widest text-text-muted/60 pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:top-[-16px] peer-focus:text-[10px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-[-16px] peer-[:not(:placeholder-shown)]:text-[10px]">
            {{ t('contact.form.message') }}
          </label>
        </div>

        <button type="submit" class="group self-start bg-white text-bg-dark font-bold text-xs tracking-widest px-8 py-4 flex items-center gap-2 hover:bg-accent hover:text-bg-dark transition-all duration-300 cursor-pointer">
          <span>{{ t('contact.form.send') }}</span>
          <ArrowRight :size="14" class="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

    </div>
  </section>
</template>