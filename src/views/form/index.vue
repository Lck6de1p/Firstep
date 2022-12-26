<template>
  <div>
    <Form :form-config="formConfig" />
  </div>
</template>

<script setup lang="ts">
import Form from "@/components/Form/index.vue";
import { FormConfigType } from "@/components/Form/type";
import { reactive } from "vue";

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
]);
</script>

<style scoped></style>
