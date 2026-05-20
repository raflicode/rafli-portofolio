<script setup>
import { onMounted } from 'vue'
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

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Global reveal animation untuk section-section yang membutuhkan trigger scroll tambahan
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
})
</script>

<template>
  <div class="min-h-screen bg-bg-dark text-white font-sans transition-colors duration-300 antialiased selection:bg-accent selection:text-bg-dark">
    <Navbar />
    
    <main>
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