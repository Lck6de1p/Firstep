import { ref } from 'vue';

type TypeRef<T> = {
  key: string | number;
  el: T;
};

export function useRefList(cmpType: any, failCb?: () => {}) {
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
    const refsList = Object.entries(refs.value);
    for (const [, { key, el }] of refsList) {
      const isSuccess = el.validate();
      if (!isSuccess) {
        failCb && failCb();
        return false;
      }
    }
    return true;
  };
  return { refs, getRef, validate }
}