import { SubProps } from "../types";

export const useShowFormItem = ({ dependence }: SubProps, formData: any) => {
  if (dependence) {
    return formData.value[dependence.label] === dependence.value;
  }
  return true;
};