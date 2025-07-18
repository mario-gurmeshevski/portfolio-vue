<template>
  <div class="text-white">
    <div class="space-y-4">
      <div class="flex items-center space-x-4">
        <div
          class="w-16 h-16 min-w-16 max-w-16 min-h-16 max-h-16 bg-sky-600 rounded-full flex items-center justify-center"
        >
          <span class="text-2xl font-bold">MG</span>
        </div>

        <div>
          <h3 class="text-xl font-semibold">Mario Gurmeshevski</h3>
          <p class="text-gray-400">Developer & Computer Enthusiast</p>
        </div>
      </div>

      <div class="space-y-3">
        <div>
          <h4 class="font-semibold text-sky-400 mb-2">About</h4>
          <p class="text-gray-300 text-sm leading-relaxed">
            I'm a full-stack developer with dedication for cybersecurity, currently pursuing
            specialization in cyber operations. I'm driven by curiosity about exploring new
            technologies and concepts, whether they're directly related to my programming or simply
            intrigue me.
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-sky-400 mb-2">Current Interests</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="interest in interests"
              :key="interest.id"
              class="bg-sky-800/30 text-xs px-2 py-1 rounded"
            >
              {{ interest.name }}
            </span>
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-sky-400 mb-2">Location</h4>
          <div class="flex items-center space-x-2">
            <Fa6LocationDot class="w-6 h-6 text-sky-400" />
            <span class="text-white text-sm font-bold">Macedonia, Skopje</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Interest {
  id: number
  name: string
}

const interests = ref<Interest[]>([
  { id: 1, name: 'Vue and Svelte' },
  { id: 2, name: 'Web Development' },
  { id: 3, name: 'Cyber Security' },
  { id: 4, name: 'Tennis' },
  { id: 5, name: 'Open Source Alternatives to Everyday apps' },
])
</script>
