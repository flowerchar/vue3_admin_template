<template>
  <el-icon style="margin-left: 10px" @click="changeIcon">
    <component :is="LayoutSettingStore.fold ? 'Fold' : 'Expand'" />
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      v-show="item.meta.title"
      :key="index"
      :to="item.path"
    >
      <el-icon style="margin: 0px 5px">
        <!--        //可以不用动态-->
        <component :is="item.meta.icon" />
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting.ts'
import { useRoute } from 'vue-router'

let $route = useRoute()
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
