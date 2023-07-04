<template>
  <!--  :collapse="!!LayoutSettingStore.fold"-->
  <!--  :class="{ fold: !!LayoutSettingStore.fold }"-->
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="!!LayoutSettingStore.fold"
          :collapse-transition="false"
          :default-active="$route.path"
          background-color="#001529"
          text-color="white"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div :class="{ fold: !!LayoutSettingStore.fold }" class="layout_tabbar">
      <Tabbar></Tabbar>
    </div>
    <div :class="{ fold: !!LayoutSettingStore.fold }" class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from '@/layout/logo/index.vue'
import Menu from '@/layout/menu/index.vue'
import useUserStore from '@/store/modules/user.ts'
import Main from '@/layout/main/index.vue'
import { useRoute } from 'vue-router'
import Tabbar from '@/layout/tabbar/index.vue'
import useLayoutSettingStore from '@/store/modules/setting.ts'

let LayoutSettingStore = useLayoutSettingStore()
let $route = useRoute()
const userStore = useUserStore()
</script>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;

    //&.fold {
    //  width: $base-menu-min-width;
    //}

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
<!--<el-menu-item index="1">首页</el-menu-item>-->
<!--<el-menu-item index="2">数据大屏</el-menu-item>-->
<!--<el-sub-menu index="3">-->
<!--<template #title>-->
<!--  <span>权限管理</span>-->
<!--</template>-->
<!--<el-menu-item index="2-1">用户管理</el-menu-item>-->
<!--<el-menu-item index="2-2">角色管理</el-menu-item>-->
<!--<el-menu-item index="2-3">菜单管理</el-menu-item>-->
<!--</el-sub-menu>-->
