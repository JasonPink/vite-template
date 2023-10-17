import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [vue(), VueSetupExtend()],
  css: {
    preprocessorOptions: {
      scss: {
        // 配置全局变量
        additionalData: `@import "@/styles/variable.scss";`,
      },
    },
  },
});
