import { ref, unref } from "vue";
import { SubProps, RuleRequiredType, RulePatternType, RuleType } from '../../types';
import { useShowFormItem } from '../useShowFormItem';

function isRuleRequiredType(rule: RuleType): rule is RuleRequiredType {
  return (rule as RuleRequiredType).required !== undefined
}

function isRulePatternType(rule: RuleType): rule is RulePatternType {
  return (rule as RulePatternType).pattern !== undefined
}

export function useValidate(config: SubProps, value: any, formData: any) {
  const { rules, dependence } = config;
  const errorMsg = ref<string>('');
  const _rules = Array.isArray(rules) ? rules : rules ? [rules] : [];
  const isRequired = _rules.some(v => isRuleRequiredType(v));

  const validate = () => {
    if (dependence && !useShowFormItem(config, formData)) {
      return true;
    }
    if (!_rules.length) {
      return true;
    }
    for (let i = 0; i < _rules.length; i++) {
      const rule = _rules[i];
      if (!validateOneRule(rule, value)) {
        return false;
      }
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