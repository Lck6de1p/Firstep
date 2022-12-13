<template>
  <n-layout class="layout" :position="fixedMenu" has-sider>
    <n-layout-sider class="layout-sider">
      <sider-menu />
    </n-layout-sider>
    <div class="layout-body">
      <router-view />
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { NLayout, NLayoutSider } from "naive-ui";
import SiderMenu from "./components/menu/index.vue";

const fixedMenu = computed(() => {
  return Math.random() > 0.5 ? "absolute" : "static";
});
</script>

<style lang="less" scoped>
.layout {
  &-sider {
    min-height: 100vh;
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
    position: relative;
    z-index: 13;
    transition: all 0.2s ease-in-out;
  }
  &-body {
    flex: auto;
    padding: 16px;
    min-height: 100vh;
  }
}
</style>
