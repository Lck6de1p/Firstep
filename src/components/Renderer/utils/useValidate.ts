import { ref, unref } from "vue";
import { SubProps, RuleRequiredType, RulePatternType, RuleType } from '../types';
import { useShowFormItem } from './useShowFormItem';

function isRuleRequiredType(rule: RuleType): rule is RuleRequiredType {
  return (rule as RuleRequiredType).required !== undefined
}

function isRulePatternType(rule: RuleType): rule is RulePatternType {
  return (rule as RulePatternType).pattern !== undefined
}

export function useValidate(config: SubProps, value: any, formData: any) {
  const { rules, dependence } = config;
  const errorMsg = ref<string>('');
  const isRequired = ref(Array.isArray(rules) ?
    rules.some(v => isRuleRequiredType(v))
    : rules ? isRuleRequiredType(rules)
      : false
  )
  const validate = () => {
    if (dependence) {
      if (!useShowFormItem(config, formData)) {
        return true;
      }
    }
    if (!rules) {
      return true;
    }
    if (Array.isArray(rules)) {
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (!validateOneRule(rule, value)) {
          return false;
        }
      }
    }
    else {
      if (!validateOneRule(rules, value)) return false;
    }
    errorMsg.value = "";
    return true;
  };

  function validateOneRule(rule: RuleType, value: any) {
    const _value = unref(value)
    if (isRuleRequiredType(rule)) {
      if (
        (typeof _value === "string" && _value === "") ||
        _value === null ||
        _value === undefined ||
        _value.length === 0
      ) {
        errorMsg.value = rule.message;
        return false;
      }
    } else if (isRulePatternType(rule)) {
      if (
        !new RegExp(rule.pattern, "g").test(_value)
      ) {
        errorMsg.value = rule.message;
        return false;
      }
    }

    return true;
  }


  return { validate, errorMsg, isRequired }
}