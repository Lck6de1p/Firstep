<template>
  <n-form
    ref="formRef"
    :model="formData"
    label-placement="left"
    :inline="props.inline"
    :label-width="150"
  >
    <n-form-item
      v-for="item in props.formConfig"
      :key="item.key"
      :label="item.label"
      :path="item.key"
      :rule="item.rules"
    >
      <form-item v-model="formData[item.key]" :item-config="item" />
    </n-form-item>
    <n-form-item label=" ">
      <n-button
        :style="{ marginRight: '10px' }"
        attr-type="button"
        @click="handleValidate"
      >
        验证
      </n-button>
      <n-button attr-type="button" @click="handleReset"> 重置 </n-button>
    </n-form-item>
  </n-form>
  {{ formData }}
</template>

<script setup lang="ts">
import { NForm, NFormItem, FormInst, NButton } from "naive-ui";
import { reactive, ref, unref } from "vue";
import { FormConfigType } from "./type";
import FormItem from "../FormItem/index.vue";
type Props = {
  formConfig: FormConfigType[];
  inline?: boolean;
  initFormData?: Record<string, any>;
};
const props = defineProps<Props>();

const emit = defineEmits(["confirm"]);

const formData = reactive<any>(
  props.initFormData ? unref(props.initFormData) : {}
);

const formRef = ref<FormInst | null>(null);

const handleValidate = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      emit("confirm", formData);
    }
  });
};

const handleReset = () => {
  for (const key in formData) {
    formData[key] = null;
  }
  formRef.value?.restoreValidation();
};
</script>

<style scoped></style>
