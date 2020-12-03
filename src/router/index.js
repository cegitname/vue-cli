import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Layout from '@/layout/index'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard'}
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404/404.vue')
  },
]

const router = new VueRouter({
  routes: constantRoutes,
  scrollBehavior: () => ({
    y: 0
  }),
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  }
  next()
})
export default router
