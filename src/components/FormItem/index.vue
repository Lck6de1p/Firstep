<template>
  <component
    :is="useGetComponent(type)"
    v-bind="modifyProps"
    :value="value"
    :on-input="handleInput"
    :on-update:value="handleInput"
  >
  </component>
</template>

<script setup lang="ts">
import { useGetComponent } from "./utils/useGetComponent";
import { FormConfigType } from "../Form/type";
import { computed, ref } from "vue";

type Props = {
  itemConfig: FormConfigType;
  modelValue: any;
};
const props = defineProps<Props>();

const type = ref(props.itemConfig.type);
const modifyProps = computed(() => {
  return props.itemConfig.props || {};
});
const value = computed(() => {
  return props.modelValue;
});
const emit = defineEmits(["update:modelValue"]);
const handleInput = (e: any) => {
  emit("update:modelValue", e);
};
</script>

<style scoped></style>
