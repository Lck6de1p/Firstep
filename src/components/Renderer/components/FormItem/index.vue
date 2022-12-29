<template>
  <div class="form-item" v-show="isShow">
    <div class="form-item-label">
      <span v-if="isRequired">*</span>
      {{ props.config.label }}:
    </div>
    <div class="form-item-blank">
      <div class="form-item-content">
        <component
          :is="useGetComponent(props.config.type)"
          v-bind="modifyProps"
          :value="modifyValue"
          :on-input="handleInput"
          :on-update:value="handleInput"
        >
          <component
            v-for="(item, index) in subCmpOptions.options"
            :is="useGetComponent(subCmpOptions.type)"
            :key="index"
            :value="item.value"
            :label="item.label"
          />
        </component>
      </div>
      <error-msg-tips :error-msg="errorMsg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import ErrorMsgTips from "./ErrorMsg.vue";
import { SubProps } from "../../types";
import { useValidate } from "../../utils/useValidate";
import { useShowFormItem } from "../../utils/useShowFormItem";
import {
  useGetComponent,
  useGetSubComponent,
  useModifyProps,
} from "@/composables/useComponentsRender";
interface Props {
  propKey: string | number;
  config: SubProps;
}

const props = defineProps<Props>();

const { modifyProps } = useModifyProps(props.config);

const { subCmpOptions } = useGetSubComponent(props.config);

const formData: any = inject("formData");

const isShow = computed(() => {
  return useShowFormItem(props.config, formData);
});

const modifyValue = computed(() => {
  return formData.value[props.propKey];
});

const setFormDataByKey: any = inject("setFormDataByKey");
const handleInput = (e: any) => {
  setFormDataByKey(props.propKey, e);
  validate();
};

const { validate, errorMsg, isRequired } = useValidate(
  props.config,
  modifyValue,
  formData
);

defineExpose({
  validate,
});
</script>

<style lang="less" scoped>
.form-item {
  display: flex;
  margin-bottom: 10px;
  &-label {
    width: 80px;
    margin-right: 12px;
    text-align: right;
    height: 34px;
    line-height: 34px;
  }
  &-blank {
    flex: 1;
  }
  &-content {
    min-height: 34px;
    display: flex;
    align-items: center;
  }
}
</style>
