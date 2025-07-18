<template>
  <main class="container mx-auto px-4 py-16 max-w-4xl">
    <section class="text-center mb-14">
      <h1 class="text-5xl md:text-6xl font-light text-white mb-4">Skills</h1>
      <p class="text-lg text-gray-400 max-w-2xl mx-auto"></p>
    </section>

    <section class="mb-20">
      <h2 class="text-2xl font-light text-white mb-12 text-center">Technical Skills</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px]"
        >
          <h3 class="text-lg font-medium text-white mb-4 flex items-center">
            <component :is="category.icon" class="w-5 h-5 mr-3 text-gray-400" />
            {{ category.title }}
          </h3>
          <div class="space-y-2">
            <div v-for="skill in category.skills" :key="skill" class="text-sm text-gray-300 py-1">
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-20">
      <h2 class="text-2xl font-light text-white mb-12 text-center">Currently Learning</h2>

      <div class="max-w-2xl mx-auto">
        <div class="space-y-4">
          <div
            v-for="focus in currentFocus"
            :key="focus.topic"
            class="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <h4 class="text-base font-medium text-white mb-2">{{ focus.topic }}</h4>
            <p class="text-sm text-gray-400">{{ focus.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="text-center">
      <div class="max-w-xl mx-auto">
        <h3 class="text-2xl font-light text-white mb-4">Let's Work Together</h3>
        <p class="text-gray-400 mb-8">
          I'm always open for collaborations or any ideas for my next project.
        </p>
        <div class="flex gap-4 justify-center">
          <a
            href="/contact"
            class="button bg-transparent text-white border border-solid border-[rgba(255, 255, 255, 0.3)] rounded-md py-3 px-6 text-sm inline-block"
          >
            Get In Touch
          </a>
          <a
            href="/#projects"
            class="button bg-transparent text-white border border-solid border-[rgba(255, 255, 255, 0.3)] rounded-md py-3 px-6 text-sm inline-block"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

interface CurrentFocus {
  topic: string
  description: string
}

const skillCategories = ref<SkillCategory[]>([
  {
    title: 'Frontend Development',
    icon: 'PiBrowsersFill',
    skills: [
      'HTML5 & CSS3',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'React',
      'Angular',
      'Vue.js',
    ],
  },
  {
    title: 'Backend Development',
    icon: 'Fa6Server',
    skills: ['Node.js', 'NestJS', 'Python', 'C++', 'C#'],
  },
  {
    title: 'Database & Tools',
    icon: 'HiMiniWrenchScrewdriver',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Git & GitHub', 'Postman'],
  },
])

const currentFocus = ref<CurrentFocus[]>([
  {
    topic: 'Cybersecurity Fundamentals',
    description: 'Network security, ethical hacking, and security protocols',
  },
  {
    topic: 'JWT Token Authentication using NestJS',
    description: 'Implementing secure user authentication using JWT',
  },
  {
    topic: 'New Web Development Frameworks',
    description: 'Learning about Vue 3 and Svelte for more simple and efficient web apps',
  },
])
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
