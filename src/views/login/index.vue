<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              show-password
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" size="default" type="primary">
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
import { reactive } from 'vue'

let loginForm = reactive({ username: 'admin', password: '111111' })
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
