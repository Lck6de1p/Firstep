<template>
  <div v-show="props.errorMsg" class="error-tips">{{ props.errorMsg }}</div>
</template>

<script setup lang="ts">

interface Props {
  errorMsg: string;
}

const props = withDefaults(defineProps<Props>(), {
  errorMsg: "",
});
</script>

<style scoped>
.error-tips {
  color: #f53f3f;
}
</style>
