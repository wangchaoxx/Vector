<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
import { ref, computed, unref } from 'vue';
import { useMessage } from '@/hooks/web/useMessage';
import { BasicForm, useForm } from '@/components/Form';
import { BasicModal, useModalInner } from '@/components/Modal';
import { formSchema } from './index.data';

defineOptions({ name: 'TemplateModal' });

const { createMessage } = useMessage();

const emit = defineEmits(['success', 'register']);

const isUpdate = ref(true);

const [registerForm, { validate, resetFields, setFieldsValue }] = useForm({
  labelWidth: 100,
  baseColProps: { span: 24 },
  schemas: formSchema,
  showActionButtonGroup: false,
});

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  resetFields();
  setModalProps({ confirmLoading: false });
  isUpdate.value = !!data?.isUpdate;
  if (unref(isUpdate)) {
    setFieldsValue({
      ...data.record,
    });
  }
});

const getTitle = computed(() => '弹框标题');

async function submitFunc(values: any) {
  setModalProps({ confirmLoading: true });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(values);
    }, 1000);
  });
}

async function handleSubmit() {
  try {
    const values = await validate();

    const res = await submitFunc(values);
    if (res) {
      createMessage.success('操作成功');
    } else {
      createMessage.error('操作失败');
    }
    closeModal();
    emit('success');
  } finally {
    setModalProps({ confirmLoading: false });
  }
}
</script>
