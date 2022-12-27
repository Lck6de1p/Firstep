<template>
  <div>
    <Form :form-config="formConfig" :init-form-data="initFormData" @confirm="confirm" />
  </div>
</template>

<script setup lang="ts">
import Form from "@/components/Form/index.vue";
import { FormConfigType } from "@/components/Form/type";
import { reactive, ref } from "vue";

const formConfig = reactive<FormConfigType[]>([
  {
    key: "name",
    label: "姓名",
    type: "input",
    rules: [
      {
        required: true,
        message: "请输入姓名",
        trigger: ["input", "blur"],
      },
    ],
  },
  {
    key: "age",
    label: "年龄",
    type: "input",
    rules: {
      required: true,
      message: "请输入年龄",
      trigger: ["input", "blur"],
    },
  },
  {
    key: "hobby",
    label: "爱好12313",
    type: "input",
    rules: {
      required: true,
      message: "请输入爱好",
      trigger: ["input", "blur"],
    },
  },
]);

const initFormData = ref({
  name: 'lck'
})
const confirm = (e: any) => {
  console.log(e);
};
</script>

<style scoped></style>
