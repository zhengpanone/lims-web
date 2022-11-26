import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { store } from './store'
import ElementPlus from './plugins/element-plus'
// 加载全局样式,只能加载非变量、mixin
import './styles/index.scss'
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
