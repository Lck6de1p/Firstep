<template>
  <div>
    <n-tabs type="line" v-model:value="tabValue">
      <n-tab-pane
        v-for="(value, key) in config"
        :key="key"
        :name="key"
        :tab="value.title"
      >
        <TabForm :config="value.content" :ref="(el) => getRef(key, el)" />
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NTabs, NTabPane } from "naive-ui";
import TabForm from "./components/TabForm.vue";

interface Props {
  config: any;
}

const props = defineProps<Props>();
const initValue = Object.entries(props.config)[0][0];
const tabValue = ref<number | string>(initValue);
const config = ref(props.config);

type tabFormRef = {
  key: string | number;
  el: InstanceType<typeof TabForm>;
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
    const isSuccess = el?.validate();
    if (!isSuccess) {
      tabValue.value = key;
      return false;
    }
  }
  return true;
};

defineExpose({
  validate,
});
</script>

<style scoped></style>
