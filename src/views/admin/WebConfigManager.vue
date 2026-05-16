<template>
  <Table
    title="系统配置管理"
    description="管理系统的配置。"
    :data-driver="adminApi['web-configs']"
    :data-pk-names="['key']"
    :columns="columns"
    :add-rules="rules"
    :update-rules="rules"
    :table-attr="tableAttr"
  >
    <template #addDialogForm="{ formRef, form, rules }">
        <el-form :ref="formRef" :model="form" :rules="rules" label-width="120px">
           <el-form-item label="配置项" prop="key">
              <el-input v-model="form.key" placeholder="请输入配置项"></el-input>
            </el-form-item>
            <el-form-item label="配置值" prop="value">
              <el-input v-model="form.value" placeholder="请输入配置值"></el-input>
            </el-form-item>
        </el-form>
    </template>

    <template #updateDialogForm="{ formRef, form, rules }">
        <el-form :ref="formRef" :model="form" :rules="rules" label-width="120px">
            <el-form-item label="配置项" prop="key">
              <el-input v-model="form.key" placeholder="请输入配置项"></el-input>
            </el-form-item>
            <el-form-item label="配置值" prop="value">
                <el-input v-model="form.value" placeholder="请输入配置值"></el-input>
            </el-form-item>
        </el-form>
    </template>
  </Table>
</template>

<script setup>
import Table from "@/components/TableComponent.vue";
import { adminApi } from "@/api/admin/index.js";

const tableAttr = {
  rowKey: 'key',
}

const columns = [
  {
    prop: 'key',
    label: '配置项',
    align: 'center',
  },
  {
    prop: 'value',
    label: '配置值',
    align: 'center',
  }
]

const rules = {
    key: [
        { required: true, message: '请输入配置项', trigger: 'blur' },
    ],
    value: [
        { required: true, message: '请输入配置值', trigger: 'blur' },
    ],
}

</script>
