import { cmpType } from './components/components/index';

export type SubProps = {
  label?: string
  type: cmpType
  value: any
  props: any
  rules: any
}

export type StringAnyType = {
  [key: string]: any
}

export type Options = {
  label: string,
  value: string | number
}
