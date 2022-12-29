export {
  NInput as input,
  NSelect as select,
  NCheckboxGroup as checkbox,
  NCheckbox as checkboxItem,
} from "naive-ui";

export type cmpType = "" | "input" | "select" | "checkbox" | "checkboxItem";

export type Options = {
  label: string;
  value: string | number;
};

export type subOptions = {
  type: cmpType;
  options: Options[];
};
