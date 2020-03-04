// 路由器
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import login from '@/views/login' // 简写形式 同理 @/views/login/index.vue
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home' // 强制跳转到home页
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
  // 按需加载 当需要用到该组件的时候才会请求
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
