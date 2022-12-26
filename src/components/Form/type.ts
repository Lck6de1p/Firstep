import { FormItemRule } from 'naive-ui';
import { cmpType } from "../Renderer/components/components/index";
export type FormConfigType = {
  key: string,
  type: cmpType,
  label?: string,
  props?: any,
  rules?: FormItemRule | FormItemRule[]
}