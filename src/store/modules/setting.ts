import { defineStore } from 'pinia'

const useLayoutSettingStore = defineStore('SettingStroe', {
  state: () => {
    return {
      fold: false,
      refsh: false,
    }
  },
})

export default useLayoutSettingStore
