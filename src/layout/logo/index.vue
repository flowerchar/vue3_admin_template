<template>
  <div v-if="setting.logoHidden" class="logo">
    <img :src="setting.logo" style="border-radius: 50%" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script lang="ts" setup>
import setting from '@/setting.ts'
</script>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
