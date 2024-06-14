<template>
  <Button @click="onClick" :type="props.type">{{ label }} </Button>
</template>

<script lang="ts" setup>
import './index.css';
import { Button } from 'ant-design-vue'
const props = withDefaults(defineProps<{
  /**
   * The label of the button
   */
  label: string,
  /**
   * primary or secondary button
   */
  primary?: boolean,
  /**
   * size of the button
   */
  size?: 'small' | 'medium' | 'large',
  type?: 'primary',
  /**
   * background color of the button
   */
  backgroundColor?: string,

}>(), { primary: false });

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();


const onClick = () => {
  emit("click", 1)
};

</script>
