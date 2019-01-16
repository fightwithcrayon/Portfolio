import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Project from '@/views/Project.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Index',
  component: Home
},
{
  path: '/project/:slug',
  name: 'Project',
  component: Project
}]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.name === 'Project' && from.name === 'Index') {
      return new Promise(resolve => {
        router.app.$root.$once('readyForScroll', () => {
          resolve({ x: 0, y: 0 })
        })
      })
    }
  }
})

export default router
