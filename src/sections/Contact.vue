<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowRight } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const contactSection = ref(null)

const { t } = useI18n()

const formData = ref({ name: '', email: '', message: '' })

const handleSubmit = async () => {
  try {
    // Replace these env variables in your .env file at project root:
    // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      alert('Email service not configured. Please set EmailJS env variables.')
      return
    }

    const templateParams = {
      from_name: formData.value.name,
      from_email: formData.value.email,
      message: formData.value.message
    }

    await emailjs.send(serviceId, templateId, templateParams, publicKey)

    alert('Pesan berhasil dikirim! Terima kasih.')
    formData.value = { name: '', email: '', message: '' }
  } catch (err) {
    console.error('EmailJS error:', err)
    alert('Gagal mengirim pesan. Silakan coba lagi nanti.')
  }
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
  <section id="contact" ref="contactSection" class="w-full bg-bg-dark px-4 sm:px-6 lg:px-20 py-20 md:py-32 border-b border-white/5">
    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      
      <div class="lg:col-span-5">
        <p class="contact-reveal text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{{ t('contact.badge') }}</p>
        <h2 class="contact-reveal text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight font-sans">
          {{ t('contact.title_normal') }} <span class="text-accent italic font-medium">{{ t('contact.title_accent') }}</span>
        </h2>
      </div>

      <form @submit.prevent="handleSubmit" class="lg:col-span-7 flex flex-col gap-8 sm:gap-10 w-full contact-reveal">
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

        <button type="submit" class="group self-start bg-white text-black font-bold text-[11px] sm:text-xs tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-2 hover:bg-accent transition-all duration-300 cursor-pointer">
          <span>{{ t('contact.form.send') }}</span>
          <ArrowRight :size="14" class="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

    </div>
  </section>
</template>

<!--
VITE_EMAILJS_SERVICE_ID=service_lev7let
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=public_xxx
-->
