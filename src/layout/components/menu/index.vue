<template>
  <n-menu :options="menuOptions" accordion v-model:value="routerKey" />
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { NMenu } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { routeModuleList } from "@/router/index";
import { RouteRecordRaw, useRouter, useRoute } from "vue-router";

const genMenu = (moduleList: RouteRecordRaw[]) => {
  const menu: MenuOption[] = [];
  for (let module of moduleList) {
    const routeItem: MenuOption = {
      title: (module.meta || {}).title || "未命名",
      key: module.path,
      label: module.path,
    };
    if (module.children) {
      routeItem.children = genMenu(module.children);
    }
    menu.push(routeItem);
  }
  return menu;
};

const menuOptions: MenuOption[] = genMenu(routeModuleList);
const routerKey = ref("");
const router = useRouter();
watch(routerKey, (val) => {
  console.log(val);
  router.push({
    path: val,
  });
});
</script>
