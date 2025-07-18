<template>
  <div class="max-w-[600px] mx-auto overflow-hidden">
    <section
      class="tech-bar w-max flex overflow-hidden whitespace-nowrap"
      :style="{ animationPlayState: animationState }"
    >
      <div
        class="inline-block mb-8 mr-6 group relative flex-shrink-0 mt-[3px]"
        v-for="technology in technologies"
        :key="technology.id"
      >
        <component
          :is="technology.icon"
          class="w-8 h-8 tech-icon transition-all duration-300 ease-in-out group-hover:scale-110 opacity-30 hover:opacity-100"
          @mouseenter="pauseAnimation"
          @mouseleave="resumeAnimation"
          :style="{ '--hover-color': technology.color || '#2aaaea' }"
          :aria-label="technology.name"
        />
        <span
          class="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none"
        >
          {{ technology.name }}
        </span>
      </div>

      <div
        class="inline-block mb-8 mr-6 group relative flex-shrink-0 mt-[3px]"
        v-for="technology in technologies"
        :key="'dup-' + technology.id"
      >
        <component
          :is="technology.icon"
          class="w-8 h-8 tech-icon transition-all duration-300 ease-in-out group-hover:scale-110 opacity-30 hover:opacity-100"
          @mouseenter="pauseAnimation"
          @mouseleave="resumeAnimation"
          :style="{ '--hover-color': technology.color || '#2aaaea' }"
          :aria-label="technology.name"
        />
        <span
          class="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none"
        >
          {{ technology.name }}
        </span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Technology {
  id: number
  name: string
  icon: string
  color: string
}

const technologies = ref<Technology[]>([
  { id: 17, name: 'HTML5', icon: 'SiHtml5', color: '#E54C20' },
  { id: 18, name: 'CSS3', icon: 'SiCss3', color: '#274DE3' },
  { id: 2, name: 'Javascript', icon: 'SiJavascript', color: '#FCDC00' },
  { id: 3, name: 'Typescript', icon: 'SiTypescript', color: '#2E79C7' },
  { id: 11, name: 'React', icon: 'SiReact', color: '#58C4DC' },
  { id: 12, name: 'Angular', icon: 'SiAngular', color: '#DD002E' },
  { id: 13, name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06b6d4' },
  { id: 4, name: 'C++', icon: 'SiCplusplus', color: '#659AD1' },
  { id: 1, name: 'Python', icon: 'SiPython', color: '#FFD846' },
  { id: 10, name: 'Node.js', icon: 'SiNodedotjs', color: '#69A063' },
  { id: 9, name: 'NestJS', icon: 'SiNestjs', color: '#EA2845' },
  { id: 5, name: 'C#', icon: 'SiCsharp', color: '#A279DD' },
  { id: 6, name: 'PostgreSQL', icon: 'SiPostgresql', color: '#346793' },
  { id: 7, name: 'Firebase', icon: 'SiFirebase', color: '#F9A01B' },
  { id: 8, name: 'MongoDB', icon: 'SiMongodb', color: '#016949' },
  { id: 14, name: 'GitHub', icon: 'SiGithub', color: '#8D31AB' },
  { id: 15, name: 'Git', icon: 'SiGit', color: '#F05233' },
  { id: 16, name: 'Visual Studio Code', icon: 'SiVisualstudiocode', color: '#1F9CF0' },
])

const animationState = ref<'running' | 'paused'>('running')

const pauseAnimation = (): void => {
  animationState.value = 'paused'
}

const resumeAnimation = (): void => {
  animationState.value = 'running'
}
</script>

<style scoped>
.tech-bar {
  animation: scrollRightToLeft 40s linear infinite;
}

.tech-icon:hover {
  color: var(--hover-color);
}

@keyframes scrollRightToLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
