<template>
  <div>
    <list :data="data"/>
  </div>
</template>

<script setup lang="ts">
import List from "@/components/List/index.vue";
import axios from "axios";
import { ref } from "vue";
interface Data {
  id: string;
  userName: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  userStatus?: any;
}

const data = ref<Data[]>([]);
axios.get("/mock/getList").then((res: any) => {
  console.log(res);
  data.value = res.data.data;
});
</script>

<style scoped></style>
