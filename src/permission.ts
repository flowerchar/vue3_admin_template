import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to: any, from: any, next) => {
  nprogress.start()
  next()
})

router.afterEach((to: any, from: any) => {
  nprogress.done()
})
