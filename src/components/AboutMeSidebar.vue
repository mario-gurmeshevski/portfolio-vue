<script setup lang="ts">
import { ref, watch } from 'vue'
import AboutMe from './AboutMeSection.vue'

const isAboutMeOpen = ref(false)

const toggleAboutMe = () => {
  isAboutMeOpen.value = !isAboutMeOpen.value
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    toggleAboutMe()
  }
}

watch(isAboutMeOpen, (newValue) => {
  if (newValue) {
    document.addEventListener('keydown', handleKeydown)
  } else {
    document.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<template>
  <div class="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
    <button
      v-if="!isAboutMeOpen"
      @click="toggleAboutMe"
      class="button bg-transparent border hover:cursor-pointer border-solid border-[rgba(255, 255, 255, 0.3)] text-white px-2 py-4 rounded-r-lg shadow-lg min-h-[120px] w-10 flex items-center justify-center"
    >
      <span class="text-sm font-medium whitespace-nowrap [writing-mode:sideways-lr]">
        Learn more about me
      </span>
    </button>
  </div>

  <Transition name="slide">
    <div
      v-if="isAboutMeOpen"
      class="fixed bg left-0 top-0 h-full w-80 backdrop-blur-sm z-40 shadow-2xl"
    >
      <div class="h-full overflow-y-auto p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-white">About Me</h2>
          <button
            @click="toggleAboutMe"
            class="text-gray-400 hover:text-white text-2xl hover:cursor-pointer"
          >
            <HiXMark />
          </button>
        </div>
        <AboutMe />
      </div>
    </div>
  </Transition>

  <Transition name="fade">
    <div v-if="isAboutMeOpen" @click="toggleAboutMe" class="fixed inset-0 bg-black/50 z-30"></div>
  </Transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.button {
  transition: all 0.3s ease;
}

.button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.bg {
  background-image: linear-gradient(to bottom, rgba(12, 74, 110, 0.2), rgba(3, 7, 18, 0.2));
  background-size: 100% 100%;
}
</style>
