<template>
  <el-icon style="margin-left: 10px" @click="changeIcon">
    <component :is="LayoutSettingStore.fold ? 'Fold' : 'Expand'" />
  </el-icon>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting.ts'

let LayoutSettingStore = useLayoutSettingStore()
const changeIcon = () => {
  LayoutSettingStore.fold = !LayoutSettingStore.fold
}
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>
<style lang="scss" scoped></style>
