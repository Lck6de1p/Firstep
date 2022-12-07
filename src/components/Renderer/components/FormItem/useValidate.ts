import { ref, unref } from "vue";
import { RulesType, RuleRequiredType, RulePatternType, RuleType } from '../../types';


function isRuleRequiredType(rule: RuleType): rule is RuleRequiredType {
  return (rule as RuleRequiredType).required !== undefined
}
export function useValidate(rules: RulesType, value: any) {
  const errorMsg = ref<string>('')
  const validate = () => {
    if (rules === undefined) {
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
    }

    return true;
  }


  return { validate, errorMsg }
}