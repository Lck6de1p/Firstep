<template>
  <div>
    counter: <div data-testid="count">{{ count }}</div>
    <button @click="handleIncrease">increase</button>
    <button @click="handleDecrease">decrease</button>
  </div>


</template>

<script setup lang="ts">
import { ref } from "vue"
interface Props {
  initCount: number,
  min?: number
  max?: number
}
const props = withDefaults(defineProps<Props>(), {
  initCount: 0,
  min: 0,
  max: 100,
})

const count = ref(props.initCount);
const handleIncrease = () => {
  if (props.max === count.value) {
    return;
  }
  count.value++;
}
const handleDecrease = () => {
  if (props.min === count.value) {
    return;
  }
  count.value--;
}
</script>

<style scoped>

</style>