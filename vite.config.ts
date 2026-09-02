import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 相对路径，确保部署到任意子路径（如 GitHub Pages 的 /tomatoClock/）都能正常加载资源
  base: './',
  // 构建产物输出到 dist/（Cloudflare Pages 默认读取目录）
  build: {
    outDir: 'dist'
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    open: true
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.spec.ts']
  }
})
