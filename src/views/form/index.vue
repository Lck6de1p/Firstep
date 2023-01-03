<template>
  <div>
    <Form
      :form-config="formConfig"
      :init-form-data="initFormData"
      @confirm="confirm"
    />
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
  {
    key: "select",
    label: "选择",
    type: "select",
    props: {
      options: [
        {
          label: "Drive My Car",
          value: "song1",
        },
        {
          label: "Norwegian Wood",
          value: "song2",
        },
      ],
    },
    rules: {
      required: true,
      message: "请选择select",
      trigger: ["input", "blur"],
    },
  },
  {
    key: "checkbox",
    label: "选择",
    type: "checkbox",
    props: {
      options: [
        { value: "lckTest1", label: "lckLabel1" },
        { value: "lckTest2", label: "lckLabel2" },
        { value: "lckTest3", label: "lckLabel3" },
        { value: "lckTest4", label: "lckLabel4" },
      ],
    },
  },
  {
    key: "sex",
    label: "性别",
    type: "radio",
    props: {
      options: [
        { label: "男", value: "male" },
        { label: "女", value: "female" },
      ],
    },
  },
  {
    key: "enable",
    label: "启用",
    type: "switch",
  },
]);

const initFormData = ref({
  name: "lck",
  sex: "male",
});
const confirm = (e: any) => {
  console.log(e);
};
</script>

<style scoped></style>
