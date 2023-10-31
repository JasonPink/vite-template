import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://qqlykm.cn',
        changeOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[dir]-[name]'
    }),
    VueSetupExtend()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 配置全局变量
        additionalData: `@import "@/styles/variable.scss";`
      }
    }
  }
});
