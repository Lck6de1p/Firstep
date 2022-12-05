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
import FormItem from "./FormItem.vue";
import { SubProps } from "../types";

interface Config {
  [key: string]: SubProps;
}

interface Props {
  config: Config;
}

const props = defineProps<Props>();

const config = ref(props.config);

type tabFormRef = {
  key: string | number;
  el: InstanceType<typeof FormItem>;
};

const refs = ref<tabFormRef[]>([]);
const getRef = (key: string | number, el: any) => {
  if (
    !refs.value.some((v) => {
      return v.key === key;
    })
  ) {
    refs.value.push({ key, el });
  }
};
const validate = () => {
  const refsList = Object.entries(refs.value);
  for (const [, { key, el }] of refsList) {
    const isSuccess = el.validate();
    if (!isSuccess) {
      return false;
    }
  }
  return true;
};
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
