import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import BasketPage from '../views/BasketPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/basketPage',
    name: 'BasketPage',
    component: BasketPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
