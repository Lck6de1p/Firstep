<template>
  <div v-for="(value, key) in config" :key="key">
    <FormItem
      :key="key"
      :propKey="key"
      :config="value"
      :ref="(el: any) => getRef(key, el)"
    />
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import FormItem from "./FormItem/index.vue";
import { SubProps } from "../types";
import { useRefList } from "@/hooks/useRefsList";

interface Props {
  config: Record<string, SubProps>;
}

const props = defineProps<Props>();

const config = ref(props.config);

const formData: any = inject("formData");

const isShowItem = ({ dependence }: SubProps) => {
  if (dependence) {
    return formData.value[dependence.label] === dependence.value;
  }
  return true;
};

const { getRef, validate } = useRefList(FormItem);

defineExpose({
  validate,
});
</script>
