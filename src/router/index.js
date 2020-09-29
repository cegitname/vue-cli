import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home/home'),
    meta: {
      title: '首页',
    }
  },
  {
    path: '*',
    name: 'err',
    component: () => import('@/pages/404/404'),
    meta: {
      title: '404',
    }
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({
    y: 0
  }),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  }
  next()
})
export default router
