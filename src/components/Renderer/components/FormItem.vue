<template>
  <div class="form-item-blank">
    <div class="form-item">
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
    <!-- <div>error</div> -->
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { useGetComponent } from "./components/useGetComponent";
import { SubProps, StringAnyType, Options } from "../types";
import { cmpType } from "./components";
interface Props {
  propKey: string | number;
  config: SubProps;
}

const props = defineProps<Props>();

const modifyProps = computed(() => {
  let modifyProps: StringAnyType = {};
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

const modifyValue = computed(() => {
  return formData[props.propKey];
});

const setFormDataByKey: any = inject("setFormDataByKey");
const handleInput = (e: any) => {
  setFormDataByKey(props.propKey, e);
};

const validate = () => {
  return false;
};
defineExpose({
  validate,
});
</script>

<style lang="less" scoped>
.form-item-blank {
  flex: 1;
}
.form-item {
  min-height: 34px;
  display: flex;
  align-items: center;
}
</style>
