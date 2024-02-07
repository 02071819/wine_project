import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Base from '../views/Bases/Base.vue'
import BaseDetail from '../views/Bases/BaseDetail.vue'
import Cocktail from '../views/Cocktails/Cocktail.vue'
import CocktailDetail from '../views/Cocktails/CocktailDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/base',
      name: 'Base',
      component: Base
    },
    {
      path: '/base/:id',
      name: 'BaseDetail',
      component: BaseDetail,
      // props: true
    },
    {
      path: '/cocktail',
      name: 'Cocktail',
      component: Cocktail
    },
    {
      path: '/cocktail/:id',
      name: 'CocktailDetail',
      component: CocktailDetail,
      props: true
    },
  ]
})

export default router
