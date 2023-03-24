import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({}), viteMockServe({
    mockPath: "src/mock",//设置mock文件存储目录
    localEnabled: true,//设置是否启用本地mock文件
    prodEnabled: true,//设置打包是否启用 mock 功能
    watchFiles: true,//设置是否监视mockPath对应的文件夹内文件中的更改
    injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,//如果生产环境开启了 mock 功能,即prodEnabled=true.则该代码会被注入到injectFile对应的文件的底部。默认为main.{ts,js}
    logger: true,//是否在控制台显示请求日志
  }
  )],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
  envDir: path.resolve(__dirname, './env'),
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:8081',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''), // 路径重写
  //     },
  //   },
  // },
})
