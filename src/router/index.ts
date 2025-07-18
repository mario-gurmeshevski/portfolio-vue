import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillsView from '../views/SkillsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Mario Gurmeshevski - Home',
      },
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
      meta: {
        title: 'Mario Gurmeshevski - Skills',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Mario Gurmeshevski - Contact',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Mario Gurmeshevski'
  next()
})

export default router
