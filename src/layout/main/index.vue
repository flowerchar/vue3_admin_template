<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import useLayoutSettingStore from '@/store/modules/setting.ts'
import { ref, watch, nextTick } from 'vue'

let flag = ref(true)
let LayoutSettingStore = useLayoutSettingStore()
watch(
  () => LayoutSettingStore.refsh,
  () => {
    flag.value = flag
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>
<script lang="ts">
export default {
  name: 'Main',
}
</script>

<style lang="scss" scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-to {
  opacity: 1;
}
</style>
