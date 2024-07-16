<template>
  <div>
    <Table :dataSource="props.dataSource" :columns="props.columns" />
  </div>
</template>

<script setup lang="ts">
import { Table } from 'ant-design-vue'

const props = withDefaults(defineProps<{
  /**
 * 数据数组
 */
  dataSource: Array<{ key: string, name: string, age: number, address: string }>,
  /**
   * 列描述数据对象，是 columns 中的一项，Column 使用相同的 API。
   */
  columns: Array<{ title: string, dataIndex: string, key: string }>,

}>(), {
  dataSource: [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  }] as any, columns: [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }] as any
})


</script>

<style lang="scss" scoped></style>
