import { FormItemRule } from "naive-ui";
import { cmpType } from "@/composables/useComponentsRender/importComponents";
export type FormConfigType = {
  key: string;
  type: cmpType;
  label?: string;
  props?: any;
  rules?: FormItemRule | FormItemRule[];
};
