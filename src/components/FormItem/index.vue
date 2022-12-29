<template>
  <component
    :is="useGetComponent(type)"
    v-bind="modifyProps"
    :value="value"
    :on-input="handleInput"
    :on-update:value="handleInput"
  >
    <component
      v-for="(item, index) in subCmpOptions.options"
      :is="useGetComponent(subCmpOptions.type)"
      :key="index"
      :value="item.value"
      :label="item.label"
    />
  </component>
</template>

<script setup lang="ts">
import {
  useGetComponent,
  useGetSubComponent,
  useModifyProps,
} from "@/composables/useComponentsRender";
import { FormConfigType } from "../Form/type";
import { computed, ref } from "vue";

type Props = {
  itemConfig: FormConfigType;
  modelValue: any;
};
const props = defineProps<Props>();

const type = ref(props.itemConfig.type);
const { modifyProps } = useModifyProps(props.itemConfig);
const value = computed(() => {
  return props.modelValue;
});

const { subCmpOptions } = useGetSubComponent(props.itemConfig);

const emit = defineEmits(["update:modelValue"]);
const handleInput = (e: any) => {
  emit("update:modelValue", e);
};
</script>

<style scoped></style>
