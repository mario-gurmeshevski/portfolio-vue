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
      class="button bg-transparent border hover:cursor-pointer border-solid border-[rgba(255, 255, 255, 0.3)] text-white px-1 sm:px-2 py-3 sm:py-4 rounded-r-lg shadow-lg min-h-[100px] sm:min-h-[120px] w-8 sm:w-10 flex items-center justify-center touch-manipulation"
    >
      <span class="text-xs sm:text-sm font-medium whitespace-nowrap [writing-mode:sideways-lr]">
        Learn more about me
      </span>
    </button>
  </div>

  <Transition name="slide">
    <div
      v-if="isAboutMeOpen"
      class="fixed bg left-0 top-0 h-full w-full sm:w-80 backdrop-blur-sm z-40 shadow-2xl"
    >
      <div class="h-full overflow-y-auto p-4 sm:p-6 safe-area-inset">
        <div class="flex justify-between items-center mb-4 sm:mb-6">
          <h2 class="text-xl sm:text-2xl font-bold text-white">About Me</h2>
          <button
            @click="toggleAboutMe"
            class="text-gray-400 hover:text-white text-2xl hover:cursor-pointer p-2 touch-manipulation"
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
.safe-area-inset {
  padding-top: max(1rem, env(safe-area-inset-top));
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  padding-left: max(1rem, env(safe-area-inset-left));
  padding-right: max(1rem, env(safe-area-inset-right));
}

@media (max-width: 640px) {
  .button:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: none;
  }
}

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
