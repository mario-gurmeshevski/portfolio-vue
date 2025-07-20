<script setup lang="ts">
import { RouterLink } from 'vue-router'
const navItems = [
  { to: '/', text: 'Home' },
  { to: '/skills', text: 'Skills' },
  { to: '/contact', text: 'Contact' },
]
</script>

<template>
  <header>
    <div>
      <nav
        class="flex text-center justify-center gap-4 sm:gap-8 md:gap-20 text-lg sm:text-xl md:text-2xl pt-4 tracking-wide sm:tracking-widest px-4"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="inline-block corner-brackets p-2 sm:p-1 touch-manipulation"
        >
          {{ item.text }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.corner-brackets {
  position: relative;
  border: 1px dashed transparent;
  --transform: scale(1);
  transform: var(--transform);
  transition:
    border-color 0.075s ease 0.075s,
    border-width 0.075s ease 0.075s,
    transform 0.3s ease;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.corner-brackets::before,
.corner-brackets::after {
  content: '';
  position: absolute;
  inset: -3px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.corner-brackets:hover::before,
.corner-brackets:hover::after {
  opacity: 1;
}
.corner-brackets:hover {
  border-color: rgba(255, 255, 255, 0.7);
  --transform: scale(1.05);
}

/* LEFT CORNERS: Creates top-left and bottom-left corner brackets */
.corner-brackets::before {
  clip-path: polygon(
    /* TOP-LEFT CORNER BRACKET */ 0 0,
    /* Start at top-left corner */ 10px 0,
    /* Horizontal line going right (top bracket) */ 10px 1px,
    /* Down to create bracket thickness */ 1px 1px,
    /* Left to inner edge */ 1px 10px,
    /* Down to end of vertical line */ 0 10px,

    /* Back to left edge (end of top bracket) */ /* BOTTOM-LEFT CORNER BRACKET */ 0 100%,
    /* Jump to bottom-left corner */ 10px 100%,
    /* Horizontal line going right (bottom bracket) */ 10px calc(100% - 1px),
    /* Up to create bracket thickness */ 1px calc(100% - 1px),
    /* Left to inner edge */ 1px calc(100% - 10px),
    /* Up to end of vertical line */ 0 calc(100% - 10px)
      /* Back to left edge (end of bottom bracket) */
  );
}

/* RIGHT CORNERS: Creates top-right and bottom-right corner brackets */
.corner-brackets::after {
  clip-path: polygon(
    /* TOP-RIGHT CORNER BRACKET */ calc(100% - 10px) 0,
    /* Start 10px from right edge (top bracket) */ 100% 0,
    /* Horizontal line to top-right corner */ 100% 10px,
    /* Down to end of vertical line */ calc(100% - 1px) 10px,
    /* Left to create bracket thickness */ calc(100% - 1px) 1px,
    /* Up to inner edge */ calc(100% - 10px) 1px,

    /* Left to end of horizontal line */ /* BOTTOM-RIGHT CORNER BRACKET */ calc(100% - 10px) 100%,
    /* Jump to bottom bracket start */ 100% 100%,
    /* Horizontal line to bottom-right corner */ 100% calc(100% - 10px),
    /* Up to end of vertical line */ calc(100% - 1px) calc(100% - 10px),
    /* Left to create bracket thickness */ calc(100% - 1px) calc(100% - 1px),
    /* Down to inner edge */ calc(100% - 10px) calc(100% - 1px) /* Left to end of horizontal line */
  );
}

@media (max-width: 768px) {
  .corner-brackets:hover {
    --transform: scale(1);
  }
}
</style>
