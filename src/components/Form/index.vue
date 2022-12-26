<template>
  <n-form ref="formRef" :model="formData" label-placement="left">
    <n-form-item
      v-for="item in props.formConfig"
      :key="item.key"
      :label="item.label"
      :path="item.key"
      :rule="item.rules"
    >
      <component
        :is="useGetComponent(item.type)"
        v-bind="item.props"
        :value="formData[item.key]"
        :on-input="(e:any) => handleInput(item.key ,e)"
        :on-update:value="(e:any) => handleInput(item.key ,e)"
      >
      </component>
    </n-form-item>
  </n-form>
  {{ formData }}
</template>

<script setup lang="ts">
import { NForm, NFormItem, NInput } from "naive-ui";
import { reactive } from "vue";
import { FormConfigType } from "./type";
import { useGetComponent } from "../Renderer/components/components/useGetComponent";

const formData = reactive<any>({});

type Props = {
  formConfig: FormConfigType[];
};
const props = defineProps<Props>();

const handleInput = (key: string, e: any) => {
  formData[key] = e;
};
</script>

<style scoped></style>
