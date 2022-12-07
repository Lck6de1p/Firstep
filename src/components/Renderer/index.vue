<template>
  <div>
    <n-tabs type="line" v-model:value="tabValue">
      <n-tab-pane
        v-for="(value, key) in config"
        :key="key"
        :name="key"
        :tab="value.title"
        display-directive="show"
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
import { useRefList } from "@/hooks/useRefsList";

interface Props {
  config: any;
}

const props = defineProps<Props>();
const initValue = Object.entries(props.config)[0][0];
const tabValue = ref<number | string>(initValue);
const config = ref(props.config);

const cb = (key: string | number) => {
  tabValue.value = key;
};
const { getRef, validate } = useRefList(TabForm, cb);

defineExpose({
  validate,
});
</script>

<style scoped></style>
