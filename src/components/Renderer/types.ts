import { cmpType } from "./components/components/index";

export type Options = {
  label: string;
  value: string | number;
};

export type RuleRequiredType = {
  required: boolean;
  message: string;
};

export type RulePatternType = {
  pattern: RegExp;
  message: string;
};

type RuleArrayType = Array<RulePatternType | RuleRequiredType>;

export type RulesType =
  | RuleRequiredType
  | RulePatternType
  | RuleArrayType
  | undefined;

export type RuleType = RuleRequiredType | RulePatternType;

export type DependenceType = {
  label: string;
  value: any;
};

export type SubProps = {
  label?: string;
  dependence?: DependenceType;
  type: cmpType;
  value: any;
  props: any;
  rules?: RulesType;
};

type TabProps = {
  title: string;
  content: Record<string, SubProps>;
};

export type Config = Record<string, TabProps>;
