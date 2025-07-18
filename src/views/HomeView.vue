<template>
  <main class="container mx-auto px-4 py-12">
    <section class="text-center mb-16">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Hi, I'm Mario Gurmeshevski</h1>
      <p class="text-xl md:text-2xl text-gray-300 mb-8">
        Frontend Developer & Cyber Security Student
      </p>
      <TechnologiesBar />
      <div class="flex gap-4 justify-center">
        <button
          @click="downloadResume"
          class="button bg-transparent text-white border border-solid border-[rgba(255, 255, 255, 0.3)] rounded-md py-3 px-6 text-sm inline-block cursor-pointer"
        >
          Download Resume
        </button>

        <a
          href="#projects"
          class="button bg-transparent text-white border border-solid border-[rgba(255, 255, 255, 0.3)] rounded-md py-3 px-6 text-sm inline-block"
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

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/resume-mario-gurmeshevski.pdf'
  link.download = 'Mario_Gurmeshevski_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style scoped>
.button {
  transition: all 0.3s ease;
}

.button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  translate: 0 -2px;
}
</style>
