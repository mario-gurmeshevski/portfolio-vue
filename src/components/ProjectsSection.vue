<template>
  <main class="container mx-auto px-4 py-12 sm:py-16 max-w-6xl">
    <section class="text-center mb-10 sm:mb-14">
      <h1 class="text-3xl sm:text-5xl md:text-6xl font-light text-white mb-4">Projects</h1>
      <p class="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2">
        A showcase of my projects.
      </p>
    </section>

    <section>
      <div id="projects" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px] flex flex-col touch-manipulation"
          :aria-label="`Project: ${project.name}`"
        >
          <h3 class="text-lg sm:text-xl font-medium text-white mb-3 sm:mb-4">
            {{ project.name }}
          </h3>

          <div class="flex-grow">
            <p class="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm">
              {{ project.description }}
            </p>
          </div>

          <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="px-2 sm:px-3 py-1 bg-white/10 border border-white/20 text-white text-xs rounded-full whitespace-nowrap"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <span
              v-if="project.status === ProjectStatus.DEPRECATED"
              class="text-red-400 bg-red-500/10 border border-red-500/30 px-4 py-3 rounded-lg font-medium text-center cursor-not-allowed text-sm min-h-[44px] flex items-center justify-center"
            >
              Deprecated
            </span>

            <span
              v-else-if="project.status === ProjectStatus.COMING_SOON"
              class="pointer-events-none opacity-50 bg-blue-500/10 border border-blue-500/30 text-blue-300 px-4 py-3 rounded-lg font-medium text-center text-sm min-h-[44px] flex items-center justify-center"
            >
              Coming Soon
            </span>

            <a
              v-else
              :href="project.liveUrl"
              rel="noopener noreferrer"
              :aria-label="`View live demo of ${project.name}`"
              class="bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 px-4 py-3 rounded-lg font-medium transition-all duration-200 text-center text-sm hover:border-blue-400/50 min-h-[44px] flex items-center justify-center touch-manipulation"
              target="_blank"
            >
              Live Demo
            </a>

            <a
              :href="project.githubUrl"
              rel="noopener noreferrer"
              :aria-label="`View GitHub repository for ${project.name}`"
              :class="
                project.githubUrl === '#'
                  ? 'pointer-events-none opacity-50'
                  : 'hover:bg-white/10 hover:border-white/30'
              "
              class="bg-white/5 border border-white/20 text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 text-center text-sm min-h-[44px] flex items-center justify-center touch-manipulation"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

enum ProjectStatus {
  LIVE = 'live',
  DEPRECATED = 'deprecated',
  COMING_SOON = 'coming_soon',
}

interface Project {
  id: number
  name: string
  type: string
  description: string
  techStack: string[]
  liveUrl: string
  githubUrl: string
  status: ProjectStatus
}

const projects = ref<Project[]>([
  {
    id: 3,
    name: 'E-commerce Honey Store',
    type: 'site',
    description:
      'Online store website built with React(Vite), Tailwind CSS, Nest JS and PostgreSQL database. Backend repository is private, but frontend is available for review.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Nest JS', 'PostgreSQL'],
    liveUrl: 'https://makmela-app.vercel.app/',
    githubUrl: 'https://github.com/mario-gurmeshevski/makmela-app',
    status: ProjectStatus.LIVE,
  },
  {
    id: 2,
    name: 'Portfolio Website',
    type: 'site',
    description: 'Responsive portfolio website built with Vue, Tailwind CSS and Vite.',
    techStack: ['Vue', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://gurmeshevskimario.com/',
    githubUrl: 'https://github.com/mario-gurmeshevski/portfolio-vue',
    status: ProjectStatus.LIVE,
  },
  {
    id: 1,
    name: 'Personal Website(Old)',
    type: 'site',
    description: 'Responsive personal website built with HTML, CSS, JavaScript and Tailwind CSS.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://mario-gurmeshevski.github.io/portfolio-basic/',
    githubUrl: 'https://github.com/mario-gurmeshevski/portfolio-basic',
    status: ProjectStatus.LIVE,
  },
  {
    id: 4,
    name: 'Social Media',
    type: 'site',
    description:
      'Social Media website built with Angular, Tailwind CSS, Nest JS and PostgreSQL database.',
    techStack: ['Angular', 'Tailwind CSS', 'Nest JS', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    status: ProjectStatus.COMING_SOON,
  },
  {
    id: 5,
    name: 'Crypto Alert Tool',
    type: 'tool',
    description:
      'Telegram bot for tracking cryptocurrency portfolios and market data with real-time updates and notifications.',
    techStack: ['Python', 'Selenium'],
    liveUrl: 'Deprecated',
    githubUrl: 'https://github.com/mario-gurmeshevski/crypto-telegram-bot',
    status: ProjectStatus.DEPRECATED,
  },
])
</script>
