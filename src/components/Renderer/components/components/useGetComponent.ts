import * as cmps from './index';
import { cmpType } from './index';
export function useGetComponent(cmpType: cmpType) {
  if (cmpType === '') return '';
  return cmps[cmpType];
}