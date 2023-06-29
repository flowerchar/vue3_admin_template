<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { reqLogin } from '@/api/user'

onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' })
})
</script>

<style scoped></style>
