<template>
  <main class="container mx-auto px-4 py-8 sm:py-12">
    <section class="text-center mb-12 sm:mb-16">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
      >
        Hi, I'm Mario Gurmeshevski
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-2">
        Frontend Developer & Cyber Security Student
      </p>
      <TechnologiesBar />
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
        <a
          v-if="resumeAvailable"
          :href="resumeUrl"
          download="Mario_Gurmeshevski_Resume.pdf"
          class="button bg-transparent text-white border border-solid border-[rgba(255, 255, 255, 0.3)] rounded-md py-3 px-6 text-sm w-full sm:w-auto text-center min-h-[44px] flex items-center justify-center touch-manipulation"
        >
          Download Resume
        </a>
        <a
          href="#projects"
          class="button bg-transparent text-white border border-solid border-[rgba(255, 255, 255, 0.3)] rounded-md py-3 px-6 text-sm w-full sm:w-auto text-center min-h-[44px] flex items-center justify-center touch-manipulation"
        >
          View My Projects
        </a>
      </div>
    </section>
    <EducationSection />
    <ProjectsSection />
  </main>
</template>

<script setup lang="ts">
import ProjectsSection from '../components/ProjectsSection.vue'
import EducationSection from '../components/EducationSection.vue'
import TechnologiesBar from '../components/TechnologiesBar.vue'
import { ref } from 'vue'

const resumeAvailable = ref(false)
const resumeUrl = ref('/resume.pdf')
</script>

<style scoped>
.button {
  transition: all 0.3s ease;
  min-height: 44px;
}

.button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 640px) {
  .button:hover {
    transform: none;
  }
}
</style>
