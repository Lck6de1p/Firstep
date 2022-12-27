import { ref } from "vue";

type TypeRef<T> = {
  key: string | number;
  el: T;
};

export function useRefList(cmpType: any, failCb?: any) {
  const refs = ref<TypeRef<InstanceType<typeof cmpType>>[]>([]);
  const getRef = (key: string | number, el: any) => {
    if (
      !refs.value.some((v) => {
        return v.key === key;
      })
    ) {
      refs.value.push({ key, el });
    }
  };

  const validate = () => {
    let isFirst = true;
    let isOk = true;
    const refsList = Object.entries(refs.value);
    for (const [, { key, el }] of refsList) {
      const isSuccess = el.validate();
      if (!isSuccess) {
        if (isFirst && failCb) {
          failCb(key);
          isFirst = false;
        }
        isOk = false;
      }
    }
    return isOk;
  };
  return { refs, getRef, validate };
}
