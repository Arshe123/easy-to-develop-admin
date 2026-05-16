<template>
  <router-view />
</template>

<script setup>
import { adminApi } from '@/api/admin';
import Store from "@/store/index.js";
import { onMounted } from 'vue';
import { ElMessage } from 'element-plus';

onMounted(() => {
  adminApi['web-configs'].get(null, (data) => {
    let webConfig = {};
    for(let config of data){
      webConfig[config.key] = config.value;
    }
    Store.set('web-config', webConfig);
  }, () => {
    ElMessage.error('获取系统配置失败，请稍后再试');
  });
});

</script>
