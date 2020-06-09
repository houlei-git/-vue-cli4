import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  { path: '*', redirect: '/home' },//访问意料之外的路由时重定向到/personal
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页', keepAlive: false }
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页', keepAlive: false }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { title: '其他', keepAlive: false }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue'),
    meta: { title: '注册', keepAlive: false }
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
