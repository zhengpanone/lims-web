import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/index',
    name: '首页',
    component: () => import('@/views/home/index.vue'),
  },
] // 路由规则

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes,
})

export default router
