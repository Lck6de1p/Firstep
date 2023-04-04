<template>
  <n-modal :show="visible" preset="dialog" title="Dialog" @close="onClose">
    <template #header>
      <div>{{ title }}</div>
    </template>
    <div>
      <Form
        ref="form"
        :labelWidth="100"
        :form-config="formConfig"
        :init-form-data="initFormData"
        :show-btn="false"
        @confirm="handleConfirm"
      />
    </div>
    <template #action>
      <div>
        <n-button
          type="primary"
          :style="{ marginRight: '12px' }"
          @click="handleValidate"
          >确定</n-button
        >
        <n-button @click="onClose">取消</n-button>
      </div>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Form from "./Form/index.vue";
import { FormConfigType } from "./Form/type";
interface Props {
  visible: boolean;
  title: string;
  formConfig: FormConfigType[];
  initFormData: Record<string, any>;
}
const props = defineProps<Props>();
const emit = defineEmits(["onClose", "onConfirm"]);
const onClose = () => {
  emit("onClose");
};

const form = ref<InstanceType<typeof Form>>();

const handleValidate = () => {
  form.value?.handleValidate();
};

const handleConfirm = (e: any) => {
  emit("onConfirm", e);
};

watch(
  () => props.visible,
  (e) => {
    if (e) {
      form.value?.handleReset();
    }
  }
);
</script>

<style scoped>
.nth-2 {
  margin-left: 12px;
}
</style>
