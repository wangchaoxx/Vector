<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Button type="primary" @click="handleCreatedAdd">添加</Button>
      </template>
      <template #bodyCell="{ record, column }">
        <template v-if="column.key === 'userAvatar'">
          <div v-if="!record.userAvatar">-</div>
          <div v-else>
            <Image :width="40" style="border-radius: 50%" :src="globSetting.staticUrl + record.userAvatar" />
          </div>
        </template>
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            {
              label: '删除',
              color: 'error',
              onClick: handleDelete.bind(null, record),
            },
          ]" />
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script setup lang="ts">
// 引入表格的
import { BasicTable, useTable, TableAction } from '@/components/Table';
//引入 表格内容和头部查询框
import { columns, searchFormSchema } from './index.data';
// 引入 ant-design-vue的button和image
import { Button, Image } from 'ant-design-vue';
// 引入 列表的接口
import { welcomeMessageListApi } from '@/api/content/welcome-message/index';
// 引入 图片的前缀
import { useGlobSetting } from '@/hooks/setting';
const globSetting = useGlobSetting();
//表格的相关配置
const [registerTable, { reload }] = useTable({
  title: '表格标题',
  columns,
  formConfig: {
    labelWidth: 100,
    schemas: searchFormSchema,
    autoSubmitOnEnter: true,
  },
  api: welcomeMessageListApi,
  useSearchForm: true,
  showTableSetting: true,
  bordered: true,
  showIndexColumn: false,
  rowKey: 'id',
  actionColumn: {
    width: 80,
    title: '操作',
    dataIndex: 'action',
    fixed: 'right',
  },
});
//添加的相关操作
const handleCreatedAdd = () => { };
// 删除相关操作
const handleDelete = (record: any) => {
  console.log(record);
  reload();
};
</script>
