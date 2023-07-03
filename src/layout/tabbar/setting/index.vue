<template>
  <el-button
    circle
    icon="Refresh"
    size="small"
    @click="updateRefsh"
  ></el-button>
  <el-button
    circle
    icon="FullScreen"
    size="small"
    @click="fullScreen"
  ></el-button>
  <el-button circle icon="Setting" size="small"></el-button>
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import useLayoutSettingStore from '@/store/modules/setting.ts'
import useUserStore from '@/store/modules/user.ts'
import { useRoute, useRouter } from 'vue-router'

let $route = useRoute()
let $router = useRouter()
let userStore = useUserStore()
let LayoutSettingStore = useLayoutSettingStore()
const updateRefsh = () => {
  LayoutSettingStore.refsh = !LayoutSettingStore.refsh
}
const logout = () => {
  userStore.Logout()
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
const fullScreen = () => {
  let full = document.fullscreenElement
  // console.log(full)
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
    // console.log(full)
  }
}
</script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style lang="scss" scoped></style>
