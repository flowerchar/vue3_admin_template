import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from '@/store'
import useUserStore from '@/store/modules/user.ts'
import setting from '@/setting.ts'

const userStore = useUserStore(pinia)
nprogress.configure({ showSpinner: false })
router.beforeEach(async (to: any, from: any, next) => {
  document.title = `${setting.title}-${to.meta.title}`
  nprogress.start()
  const token = userStore.token
  const username = userStore.username
  if (token) {
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        try {
          await userStore.userInfo()
          next()
        } catch (e) {
          userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
  next()
})

router.afterEach((to: any, from: any) => {
  nprogress.done()
})
