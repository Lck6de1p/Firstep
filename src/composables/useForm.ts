import { FormConfigType } from "@/components/Form/type";
import { computed, ref } from "vue";

export const useForm = (
  config: FormConfigType[],
  title: string,
  editDisableKeyArr?: string[]
) => {
  const visible = ref(false);
  const set = new Set(editDisableKeyArr || []);
  const isEdit = ref(false);
  const modifyTitle = computed(() => {
    return `${isEdit.value ? "编辑" : "创建"}${title}`;
  });

  const formConfig = ref<FormConfigType[]>(config);

  const handleConfirm = (e: any) => {
    console.log(e);
  };

  const toggleDisable = (edit: boolean) => {
    isEdit.value = edit;
    formConfig.value = formConfig.value.map((v) => {
      if (set.has(v.key)) {
        const props = v.props || {};
        return {
          ...v,
          props: { ...props, disabled: isEdit.value },
        };
      }
      return v;
    });
  };

  return {
    visible,
    formConfig,
    modifyTitle,
    handleConfirm,
    toggleDisable,
  };
};
