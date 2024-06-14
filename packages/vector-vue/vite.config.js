import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'), // 入口文件路径
      name: 'VectorVue',
      fileName: (format) => `vector-vue.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})
