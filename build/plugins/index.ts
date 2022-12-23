import type { PluginOption } from 'vite';
import mock from './mock';
import vue from "@vitejs/plugin-vue";

export function setupVitePlugins(): PluginOption[] {
  return [vue(), mock]
}