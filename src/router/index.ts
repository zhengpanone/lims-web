import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ProductRoutes from './modules/product'
import AppLayout from '@/layout/AppLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      ProductRoutes,
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
] // 路由规则

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes,
})

export default router
