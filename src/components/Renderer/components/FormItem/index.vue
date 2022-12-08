<template>
  <div class="form-item" v-show="isShow">
    <div class="form-item-label">
      <span v-if="isRequired">*</span>
      {{ props.config.label }}:</div>
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
            v-for="item in subCmpOptions.options"
            :is="useGetComponent(subCmpOptions.type)"
            :value="item.value"
            :label="item.label"
          />
        </component>
      </div>
      <error-msg :error-msg="errorMsg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import ErrorMsg from "./ErrorMsg.vue";
import { useGetComponent } from "../components/useGetComponent";
import { SubProps, Options } from "../../types";
import { cmpType } from "../components";
import { useValidate } from "../../utils/useValidate";
import { useShowFormItem } from "../../utils/useShowFormItem";

interface Props {
  propKey: string | number;
  config: SubProps;
}

const props = defineProps<Props>();

const modifyProps = computed(() => {
  let modifyProps: Record<string, string> = {};
  const { label } = props.config;
  switch (props.config.type) {
    case "input":
      modifyProps.placeholder = `请输入${label}`;
      break;
    case "select":
      modifyProps.placeholder = `请选择${label}`;
      break;
    default:
      break;
  }
  return {
    ...modifyProps,
    ...props.config.props,
  };
});

interface SubCmpOptions {
  type: cmpType;
  options: Options[];
}
const subCmpOptions = computed(() => {
  const subCmpOptions: SubCmpOptions = {
    type: "",
    options: [],
  };
  if (props.config.type === "checkbox") {
    subCmpOptions.type = "checkboxItem";
    subCmpOptions.options = props.config.props.options;
  }
  return subCmpOptions;
});

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

const { validate, errorMsg, isRequired } = useValidate(props.config, modifyValue, formData);

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
