<template>
  <div>
    <h1>一级路由home</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import useUserStore from '@/store/modules/user.ts'

let userStore = useUserStore()
onMounted(() => {
  userStore.userInfo()
})
</script>

<style lang="scss" scoped></style>
