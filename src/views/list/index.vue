<template>
  <div>
    <list
      request-url="/mock/getList"
      :form-config="formConfig"
      :data="data"
      :columns="columns"
    />
  </div>
</template>

<script setup lang="ts">
import { FormConfigType } from "@/components/Form/type";
import List from "@/components/List/index.vue";
import { reactive, ref } from "vue";
interface Data {
  id: string;
  userName: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  userStatus?: any;
}
const columns = ref([
  {
    title: "id",
    key: "id",
  },
  {
    title: "userName",
    key: "userName",
  },
  {
    title: "age",
    key: "age",
  },
  {
    title: "gender",
    key: "gender",
  },
  {
    title: "phone",
    key: "phone",
  },
  {
    title: "email",
    key: "email",
  },
]);
const formConfig = reactive<FormConfigType[]>([
  {
    key: "name",
    label: "姓名",
    type: "input",
  },
]);
const data = ref<Data[]>([]);
</script>

<style scoped></style>
