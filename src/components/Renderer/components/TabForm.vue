<template>
  <div v-for="(value, key) in config" :key="key" class="form-item">
    <div class="form-item-label">{{ value.label }}:</div>
    <FormItem
      :key="key"
      :propKey="key"
      :config="value"
      :ref="(el) => getRef(key, el)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FormItem from "./FormItem/index.vue";
import { SubProps } from "../types";
import { useRefList } from "@/hooks/useRefsList";
interface Config {
  [key: string]: SubProps;
}

interface Props {
  config: Config;
}

const props = defineProps<Props>();

const config = ref(props.config);

const { getRef, validate } = useRefList(FormItem);

defineExpose({
  validate,
});
</script>

<style lang="less" scoped>
.form-item {
  display: flex;
  margin-bottom: 10px;
  &-label {
    width: 80px;
    margin-right: 12px;
    text-align: right;
    height: 34px;
    line-height: 34px;
  }
}
</style>
