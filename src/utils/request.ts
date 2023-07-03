import axios from 'axios'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/modules/user.ts'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

request.interceptors.request.use((config) => {
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers.token = userStore.token
  }
  return config
})

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'token过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器问题'
        break
      default:
        message = '网络问题'
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)
export default request
