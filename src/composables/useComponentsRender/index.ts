import { computed } from "vue";
import * as cmps from "./importComponents";

import { cmpType, subOptions } from "./importComponents";
export function useGetComponent(cmpType: cmpType) {
  if (cmpType === "") return "";
  return cmps[cmpType];
}

export function useModifyProps(config: any) {
  const modifyProps = computed(() => {
    const modifyProps: Record<string, string> = {};
    const { label } = config;
    switch (config.type) {
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
      ...config.props,
    };
  });
  return { modifyProps };
}

export function useGetSubComponent(config: any) {
  const type: cmpType = config.type;
  const props: any = config.props;
  const subCmpOptions = computed(() => {
    const subCmpOptions: subOptions = {
      type: "",
      options: [],
    };
    switch (type) {
      case "checkbox":
        subCmpOptions.type = "checkboxItem";
        subCmpOptions.options = props.options;
        break;
      default:
        break;
    }

    return subCmpOptions;
  });

  return {
    subCmpOptions,
  };
}
