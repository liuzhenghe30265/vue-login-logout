<template>
  <div class="login">
    <input type="text"
           placeholder="用户名"
           v-model="loginForm.username">
    <input type="text"
           placeholder="密码"
           v-model="loginForm.password">
    <input type="button"
           :disabled='buttonDisabled'
           :value="buttonValue"
           @click="handleLogin">
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      buttonDisabled: false,
      buttonValue: '登录',
      loginForm: {
        username: 'admin',
        password: '123456',
      }
    }
  },
  methods: {
    handleLogin() {
      this.buttonValue = '登录中...'
      this.buttonDisabled = true
      setTimeout(() => {
        // 模拟登录接口，请求成功返回用户信息，存储到 vuex 中
        let userInfo = {
          name: this.loginForm.username,
          password: this.loginForm.password,
          token: 'usertoken',
        }
        this.$store.dispatch('setUserInfo', userInfo).then(() => {
          this.$router.push('/')
        })
        this.buttonValue = '登录'
        this.buttonDisabled = false
      }, 1000)
    }
  }
}
</script>