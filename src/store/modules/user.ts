import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user'
import type { loginForm, loginResponseData } from '@/api/user/type.ts'
import type { UserState } from '@/store/modules/types/type.ts'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token.ts'
import { constantRoute } from '@/router/routes.ts'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    async userInfo() {
      const res = await reqUserInfo()
      if (res.code == 200) {
        this.username = res.data.checkUser.username
        this.avatar = res.data.checkUser.avatar
        return 'ok'
      } else {
        return Promise.reject('获取用户失败')
      }
    },
    Logout() {
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    },
  },
  getters: {},
})

export default useUserStore
