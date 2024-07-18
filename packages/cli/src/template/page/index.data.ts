import { BasicColumn, FormSchema } from '@/components/Table';
export const columns: BasicColumn[] = [
  { title: '用户ID', dataIndex: 'userNo' },
  { title: '用户昵称', dataIndex: 'userNickname' },
  { title: '用户头像', dataIndex: 'userAvatar' },
  { title: '欢迎语内容', dataIndex: 'welcomeContent' },
  { title: '提交时间', dataIndex: 'createTime' },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userNo',
    label: '用户ID',
    component: 'Input',
    defaultValue: '',
    componentProps: {
      placeholder: '请输入用户ID',
    },
    colProps: {
      xs: 12, // 屏幕小于576
      xl: 8, // 屏幕大于1200
      xxl: 6, // 屏幕大于1600
    },
  },
];
