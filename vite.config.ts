/// <reference types="vitest" />

import { defineConfig } from "vite";
import { resolve } from "path";
import { setupVitePlugins } from "./build/plugins";
// https://vitejs.dev/config/
export default defineConfig({
  test: {
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress}.config.*",
      "**/components/Counter.spec.tsx",
    ],
  },
  plugins: setupVitePlugins(),
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      views: "@/views",
    },
    // 省略后缀名
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
