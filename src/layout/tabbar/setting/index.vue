<template>
  <el-button circle icon="Refresh" size="small"></el-button>
  <el-button circle icon="FullScreen" size="small"></el-button>
  <el-button circle icon="Setting" size="small"></el-button>
  <img
    src="../../../public/naulogo.png"
    style="width: 24px; height: 24px; margin: 0px 10px"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
