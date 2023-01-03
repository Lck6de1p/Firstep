<template>
  <Form
    v-if="props.formConfig"
    :form-config="formConfig"
    inline
    label-width="auto"
    search-text="搜索"
    @confirm="confirm"
    @reset="confirm"
  />
  <n-data-table :columns="columns" :data="data" :bordered="false" />
  <div class="pagination-wrapper">
    <n-pagination v-bind="paginationReactive">
      <template #suffix="{ itemCount }"> 共 {{ itemCount }} 项 </template>
    </n-pagination>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import axios from "axios";
import { NDataTable, NPagination } from "naive-ui";
import type { DataTableColumns } from "naive-ui";
import Form from "@/components/Form/index.vue";
import { FormConfigType } from "@/components/Form/type";

type Props = {
  data?: any[];
  columns: DataTableColumns;
  formConfig?: FormConfigType[];
  requestUrl?: string;
};
const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
});

const formData = ref({});
const confirm = (e: any) => {
  formData.value = e;
  getList(1);
};

const data = ref([]);

const columns = computed(() => {
  return props.columns;
});

const paginationReactive = reactive({
  page: 1,
  pageSize: 10,
  itemCount: 100,
  showSizePicker: true,
  pageSizes: [10, 20, 30],
  onChange: (page: number) => {
    paginationReactive.page = page;
    getList();
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationReactive.pageSize = pageSize;
    paginationReactive.page = 1;
    getList();
  },
});

const getList = (pageNo?: number) => {
  if (pageNo) {
    paginationReactive.page = pageNo;
  }
  props.requestUrl &&
    axios
      .post(props.requestUrl, {
        pageSize: paginationReactive.pageSize,
        pageNo: paginationReactive.page,
        ...formData.value,
      })
      .then((res: any) => {
        data.value = res.data.data.list;
        paginationReactive.itemCount = res.data.data.total;
      });
};

getList(1);
</script>

<style lang="less" scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
</style>
