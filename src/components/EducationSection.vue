<template>
  <main class="container mx-auto px-4 max-w-4xl">
    <section class="text-center mb-10 sm:mb-14">
      <h1 class="text-3xl sm:text-5xl md:text-6xl font-light text-white mb-4">
        Education & Courses
      </h1>
    </section>

    <section>
      <div class="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6">
        <div class="space-y-4 sm:space-y-6">
          <div
            v-for="(edu, index) in education"
            :key="index"
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-white/10 transition-colors duration-400 rounded-lg p-2 sm:p-1 gap-2 sm:gap-0"
          >
            <div class="flex-grow">
              <h3 class="text-base sm:text-lg font-medium text-white mb-1 sm:mb-2">
                {{ edu.institution }}
              </h3>
              <p class="text-sky-300 font-medium text-sm sm:text-base">
                {{ edu.degree }}
              </p>
            </div>
            <span class="text-sm text-gray-400 self-start sm:self-auto">
              {{ edu.duration }}
            </span>
          </div>
        </div>

        <hr class="my-4 sm:my-6 border-gray-600" />

        <div class="space-y-3 sm:space-y-4">
          <div
            v-for="(course, index) in courses"
            :key="index"
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-white/10 transition-colors duration-400 rounded-lg p-2 sm:p-1 gap-2 sm:gap-0"
          >
            <div class="flex-grow">
              <h4 class="text-sm sm:text-base font-medium text-white mb-1 sm:mb-2">
                {{ course.provider }}
              </h4>
              <p class="text-indigo-300 font-medium text-xs sm:text-sm">
                {{ course.name }}
              </p>
            </div>
            <span class="text-sm text-gray-400 self-start sm:self-auto">
              {{ course.year }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Education {
  institution: string
  degree: string
  duration: string
}

interface Course {
  name: string
  provider: string
  year: string
}

const education = ref<Education[]>([
  {
    institution: 'Faculty of Computer Science and Engineering',
    degree: 'Internet, Networks and Security',
    duration: '2024 - Present',
  },
  {
    institution: 'High School Algoritam',
    degree: 'Human Sciences A',
    duration: '2020 - 2024',
  },
])

const courses = ref<Course[]>([
  {
    name: 'Full-Stack Web Development',
    provider: 'Qinshift',
    year: '2022-2023',
  },
  {
    name: 'Basics of C++',
    provider: 'Semos',
    year: '2018',
  },
  {
    name: 'Basics of Html & Css',
    provider: 'Semos',
    year: '2017',
  },
])
</script>
