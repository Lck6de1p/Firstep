<template>
  <div>
    <n-button type="primary" @click="handleClickSave">保存</n-button>
  </div>
  <div class="container">
    <Preview :formData="formData" />
    <div class="renderer-wrapper">
      <Renderer :config="config" ref="renderer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import { NButton } from "naive-ui";
import Renderer from "@/components/Renderer/index.vue";
import Preview from "@/components/Preview/index.vue";
import { config } from "./config";

const formData = ref<any>({ input: "", select: "" });
provide("formData", formData);

const setFormDataByKey = (key: string, value: any) => {
  formData.value[key] = value;
};
provide("setFormDataByKey", setFormDataByKey);

const renderer = ref<InstanceType<typeof Renderer> | null>(null);
const handleClickSave = () => {
  console.log(renderer.value?.validate());
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
}
.renderer-wrapper {
  flex: 1;
  padding: 16px;
}
</style>
