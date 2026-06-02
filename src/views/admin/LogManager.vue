<template>
  <Table
    :columns="columns"
    :data-driver="globalApi['logs']"
    :data-pk-names="['id']"
    :show-add="false"
    :show-delete="false"
    :show-update="false"
  >
  </Table>
</template>

<script setup>
import Table from '@/components/TableComponent.vue'
import { globalApi } from '@/api/global';

const columns = [
  {
    prop: 'username',
    label: '操作用户',
  },
  {
    prop: 'roleKey',
    label: '角色',
  },
  {
    prop: 'userIp',
    label: '操作IP',
  },
  {
    prop: 'userAgent',
    label: '终端信息',
  },
  {
    prop: 'requestPath',
    label: '请求路径',
  },
  {
    prop: 'requestMethod',
    label: '请求方法',
  },
  {
    prop: 'requestParams',
    label: '请求参数',
  },
  {
    prop: 'result',
    label: '请求结果',
  },
  {
    prop: 'createTime',
    label: '操作时间',
    formatter: (row) => {
      return row.createTime.replace('T', ' ')
    },
  },
  {
    prop: 'costTime',
    label: '请求耗时',
    formatter: (row) => {
      return row.costTime + 'ms'
    },
  }
]
</script>
