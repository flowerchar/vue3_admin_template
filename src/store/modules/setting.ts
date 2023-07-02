import { defineStore } from 'pinia'

const useLayoutSettingStore = defineStore('SettingStroe', {
  state: () => {
    return {
      fold: false,
    }
  },
})

export default useLayoutSettingStore
