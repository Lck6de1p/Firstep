import type { Ref } from 'vue'
import { onBeforeUpdate, ref } from 'vue';

export type TemplateRefsList<T> = T[] & {
  set(el: Object | null): void
}

export function useTemplateRefsList<T = Element>(): Readonly<Ref<Readonly<TemplateRefsList<T>>>> {
  const refs = ref<unknown>([]) as Ref<TemplateRefsList<T>>
  refs.value.set = (el: Object | null) => {
    console.log(el)
    if (el)
      refs.value.push(el as T)
  }
  onBeforeUpdate(() => {
    refs.value.length = 0
  })
  return refs
}
