<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './sections/Navbar.vue'
import Hero from './sections/Hero.vue'
import About from './sections/About.vue'
import Skills from './sections/Skills.vue'
import Projects from './sections/Projects.vue'
import Experience from './sections/Experience.vue'
import Certificates from './sections/Certificates.vue'
import Contact from './sections/Contact.vue'
import Footer from './sections/Footer.vue'
import { useSeo } from './composables/useSeo'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
useSeo()

const cursorRef = ref(null)
let cursorIdleTimer = null
let cursorAnimationFrame = null
const cursorTarget = { x: 0, y: 0 }
const cursorPosition = { x: 0, y: 0 }
let cursorAngle = 0
let cursorInitialized = false
let cursorVisible = false
let reducedMotion = false

const renderDirectionalCursor = () => {
  if (!cursorRef.value || reducedMotion) return

  const dx = cursorTarget.x - cursorPosition.x
  const dy = cursorTarget.y - cursorPosition.y

  cursorPosition.x += dx * 0.18
  cursorPosition.y += dy * 0.18

  if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2) {
    const targetAngle = Math.atan2(dy, dx)
    let angleDiff = targetAngle - cursorAngle

    if (angleDiff > Math.PI) angleDiff -= Math.PI * 2
    if (angleDiff < -Math.PI) angleDiff += Math.PI * 2

    cursorAngle += angleDiff * 0.22
  }

  cursorRef.value.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0) translate(-50%, -50%) rotate(${cursorAngle}rad)`
  cursorAnimationFrame = window.requestAnimationFrame(renderDirectionalCursor)
}

const moveDirectionalCursor = (event) => {
  if (!cursorRef.value || reducedMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

  cursorTarget.x = event.clientX
  cursorTarget.y = event.clientY

  if (!cursorInitialized) {
    cursorPosition.x = cursorTarget.x
    cursorPosition.y = cursorTarget.y
    cursorInitialized = true
  }

  if (!cursorVisible) {
    cursorVisible = true
    cursorRef.value.style.opacity = '1'
  }

  window.clearTimeout(cursorIdleTimer)
  cursorIdleTimer = window.setTimeout(hideDirectionalCursor, 420)
}

const hideDirectionalCursor = () => {
  if (cursorRef.value) cursorRef.value.style.opacity = '0'
  cursorVisible = false
  window.clearTimeout(cursorIdleTimer)
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!reducedMotion) {
    gsap.utils.toArray('.global-reveal').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    window.addEventListener('mousemove', moveDirectionalCursor)
    window.addEventListener('mouseleave', hideDirectionalCursor)
    cursorAnimationFrame = window.requestAnimationFrame(renderDirectionalCursor)
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveDirectionalCursor)
  window.removeEventListener('mouseleave', hideDirectionalCursor)
  window.clearTimeout(cursorIdleTimer)
  window.cancelAnimationFrame(cursorAnimationFrame)
})
</script>

<template>
  <a href="#main-content" class="skip-link">{{ t('a11y.skip_to_content') }}</a>

  <div class="min-h-screen bg-bg-dark text-white font-sans transition-colors duration-300 antialiased selection:bg-accent selection:text-bg-dark">
    <div ref="cursorRef" class="direction-cursor" aria-hidden="true"></div>
    <Navbar />

    <main id="main-content" tabindex="-1">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
    </main>

    <Footer />
  </div>
</template>
