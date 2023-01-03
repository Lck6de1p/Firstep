export {
  NInput as input,
  NSelect as select,
  NCheckboxGroup as checkbox,
  NCheckbox as checkboxItem,
  NRadioGroup as radio,
  NRadio as radioItem,
  NSwitch as switch,
} from "naive-ui";

export type cmpType =
  | ""
  | "input"
  | "select"
  | "checkbox"
  | "checkboxItem"
  | "radio"
  | "radioItem"
  | "switch";

export type Options = {
  label: string;
  value: string | number;
};

export type subOptions = {
  type: cmpType;
  options: Options[];
};
