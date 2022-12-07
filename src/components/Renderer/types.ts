import { cmpType } from './components/components/index';

export type StringAnyType = {
  [key: string]: any
}

export type Options = {
  label: string,
  value: string | number
}

export type RuleRequiredType = {
  required: boolean,
  message: string,
}

export type RulePatternType = {
  pattern: RegExp
  message: string,
}

type RuleArrayType = Array<RulePatternType | RuleRequiredType>

export type RulesType = RuleRequiredType | RulePatternType | RuleArrayType | undefined

export type RuleType = RuleRequiredType | RulePatternType

export type SubProps = {
  label?: string
  type: cmpType
  value: any
  props: any
  rules: RulesType
}
