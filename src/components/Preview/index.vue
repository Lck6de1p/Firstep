<template>
  <div class="preview">
    {{ props.formData }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  formData: any;
}

const props = defineProps<Props>();
</script>

<style lang="less" scoped>
.preview {
  width: 300px;
  margin-right: 20px;
}
</style>
