<template>
  <n-menu
    :options="menuOptions"
    accordion
    :value="activeKey"
    :expanded-keys="expandedKeys"
    @update:value="clickMenuItem"
    @update:expanded-keys="handleUpdateExpandedKeys"
  />
</template>
<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { NMenu } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { routeModuleList } from "@/router/index";
import { RouteRecordRaw } from "vue-router";
import { useRouterPush } from "@/hooks/router";
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
const { routerPush, route } = useRouterPush();
function clickMenuItem(val: string) {
  routerPush(val);
}

const activeKey = computed(() => {
  return route.path;
});

const expandedKeys = ref<string[]>([]);
function handleUpdateExpandedKeys(keys: string[]) {
  expandedKeys.value = keys;
}
watch(
  () => route.path,
  () => {
    expandedKeys.value = route.path.split("/").map((v) => {
      return `/${v}`;
    });
  },
  { immediate: true }
);
</script>
