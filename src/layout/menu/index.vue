<template>
  <!--  <p></p>-->
  <template v-for="(item, index) in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.meta.icon" />
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        v-if="!item.children[0].meta.hidden"
        :index="item.children[0].path"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon" />
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <el-sub-menu
      v-if="item.children && item.children.length > 1"
      :index="item.path"
    >
      <el-icon>
        <component :is="item.meta.icon" />
      </el-icon>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menu-list="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

let $router = useRouter()
defineProps(['menuList'])
const goRoute = (vc: any) => {
  console.log(vc.index)
  $router.push(vc.index)
}
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>
<style lang="scss" scoped></style>
