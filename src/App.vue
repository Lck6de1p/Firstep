<template>
  <div id="app">
    <n-config-provider :theme="theme">
      <router-view />
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { darkTheme, NConfigProvider } from "naive-ui";
import type { GlobalTheme } from "naive-ui";

const theme = ref<GlobalTheme | null>(null);
</script>

<style lang="less" scoped>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
