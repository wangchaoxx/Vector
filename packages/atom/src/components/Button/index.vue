<template>
  <Button v-bind="getBindValue" @click="onClick" :class="getButtonClass">
    <slot></slot>
  </Button>
</template>

<script lang="ts" setup>
import { computed, unref } from 'vue';
import './index.less';
import { Button } from 'ant-design-vue'

import { useAttrs } from '@yf/core'

const props = withDefaults(defineProps<{
  /**
   * 设置按钮的颜色
   */
  color?: 'primary' | 'error' | 'warning' | 'success' | '',
  /**
   * 将按钮宽度调整为其父宽度的选项
   */
  block?: boolean,
  /**
   * 按钮失效状态
   */
  disabled?: boolean,
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
  /**
   * 设置按钮类型
   */
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

}>(), { type: 'default', size: 'middle', block: false, ghost: false, danger: false, onClick: () => { } });


const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();


const onClick = () => {
  emit("click", 1)
};

const attrs = useAttrs({ excludeDefaultKeys: false });

const getButtonClass = computed(() => {
  const { color, disabled } = props;
  return [
    {
      [`ant-btn-${color}`]: !!color,
      [`is-disabled`]: disabled,
    },
  ];
});

const getBindValue = computed(() => ({ ...unref(attrs), ...props }));

</script>
