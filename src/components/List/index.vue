<template>
  <n-data-table
    :columns="columns"
    :data="props.data"
    :pagination="pagination"
    :bordered="false"
  />
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import { NButton, useMessage, NDataTable } from "naive-ui";
import type { DataTableColumns } from "naive-ui";

type Song = {
  no: number;
  title: string;
  length: string;
};

const createColumns = ({
  play,
}: {
  play: (row: Song) => void;
}): DataTableColumns<Song> => {
  return [
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
  
  ];
};

type Props = {
  data: any[]
}
const props = defineProps<Props>()

const message = useMessage();
const columns = ref(
  createColumns({
    play(row: Song) {
      message.info(`Play ${row.title}`);
    },
  })
);

const pagination = ref({
  pageSize: 10,
})
</script>
