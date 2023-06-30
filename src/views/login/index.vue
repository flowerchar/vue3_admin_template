<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          ref="loginForms"
          :model="loginForm"
          :rules="rules"
          class="login_form"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              show-password
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              size="default"
              type="primary"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import userUserStore from '@/store/modules/user.ts'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time.ts'

let loginForms = ref()
const rules = {
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    {
      required: true,
      min: 6,
      max: 10,
      message: '账号长度至少为6-10位',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 15,
      message: '密码长度至少为6位',
      trigger: 'change',
    },
  ],
}
let loading = ref(false)
let $router = useRouter()
let useStore = userUserStore()
let loginForm = reactive({ username: 'admin', password: '111111' })
const login = async () => {
  //为什么这里校验通过就可以了
  await loginForms.value.validate()
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `HI,${getTime()}好`,
    })
    loading.value = false
  } catch (e) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (e as Error).message,
    })
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%; //TODO 为什么这里不用vw也可以？
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat; //TODO np是什么意思
  background-size: cover; //TODO 这是什么意思

  .login_form {
    //TODO 这些意思
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
  }

  h1 {
    color: white;
    font-size: 40px;
  }

  h2 {
    font-size: 20px;
    color: white;
    margin: 20px 0px;
  }

  .login_btn {
    width: 100%;
  }
}
</style>
