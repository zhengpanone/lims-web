import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from '@/store'
import elementPlus from './plugins/element-plus'
// 加载全局样式,只能加载非变量、mixin
import './styles/index.scss'

createApp(App).use(router).use(store).use(elementPlus).mount('#app')
