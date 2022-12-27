<template>
  <div id="app">
    <application>
      <router-view />
    </application>
  </div>
</template>

<script setup lang="ts">
import Application from "@/components/Application/index.vue";
</script>

<style lang="less" scoped>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
