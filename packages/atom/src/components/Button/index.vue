<template>
  <Button @click="onClick" :type="props.type">{{ label }} </Button>
</template>

<script lang="ts" setup>

import './index.css';
import { Button } from 'ant-design-vue'

const props = withDefaults(defineProps<{
  block?: boolean,
  /**
   * The label of the button
   */
  label: string,
  /**
   * 设置危险按钮	
   */
  danger?: boolean,
  /**
   * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致	
   */
  href?: string,
  /**
   * 设置按钮大小
   */
  size?: 'large' | 'middle' | 'small',
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default',
  /**
   * 幽灵属性，使按钮背景透明	
   */
  ghost?: boolean,
  /**
   * 点击按钮时的回调
   * @param e 
   */
   onClick?: (e: MouseEvent) => void,

}>(), { type: 'default', size:'middle',block: false, ghost: false, danger: false, onClick: () => {} });

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();


const onClick = () => {
  emit("click", 1)
};

</script>
