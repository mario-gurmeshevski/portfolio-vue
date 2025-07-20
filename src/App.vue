<script setup lang="ts">
import { RouterView } from 'vue-router'
import AboutMeSidebar from './components/AboutMeSidebar.vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="bg text-white flex flex-col min-h-screen relative">
    <AboutMeSidebar />

    <div class="flex-1 overflow-y-auto">
      <NavBar />
      <main class="flex-1">
        <RouterView />
      </main>
      <FooterSection />
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image:
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0.5px, transparent 0.7px),
    linear-gradient(rgba(255, 255, 255, 0.03) 0.5px, transparent 0.7px),
    radial-gradient(circle farthest-corner at center center, #0c4a6e 0%, #06283b 50%, #030712 100%);
  background-size:
    30px 30px,
    30px 30px,
    auto;
  background-repeat: repeat, repeat, no-repeat;
  background-attachment: fixed;
}

.bg {
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .bg {
    background-size:
      20px 20px,
      20px 20px,
      auto;
  }
}

@media (prefers-contrast: high) {
  .bg {
    background-image:
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.7px),
      linear-gradient(rgba(255, 255, 255, 0.1) 0.5px, transparent 0.7px),
      radial-gradient(
        circle farthest-corner at center center,
        #0c4a6e 0%,
        #06283b 50%,
        #030712 100%
      );
  }
}

@media (prefers-reduced-motion: reduce) {
  .bg {
    background-attachment: scroll;
  }
}
</style>
