import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/'
import { store } from './store/'
import ElementPlus from './plugins/element-plus'
// 加载全局样式,只能加载非变量、mixin
import './styles/index.scss'
import Module from 'module'
const app = createApp(App)
app.use(store).use(router).use(ElementPlus)
const modules: Record<string, any> = import.meta.glob(
  './components/**/index.ts',
  { eager: true }
)
for (let path in modules) {
  app.use(modules[path].default)
}

app.mount('#app')
