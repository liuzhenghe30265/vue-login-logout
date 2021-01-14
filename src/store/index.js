import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from '@/Cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}, // 登录成功后的用户信息
  },
  mutations: {
    // 用户注销
    loginOut(state) {
      state.userInfo = {}
      sessionStorage.userInfo = {}
      Cookie.delCookie('userInfo')
    },
    // 用户登录
    setUserInfo(state, data) {
      state.userInfo = data
      // 将登录的用户信息存储一份到 sessionStorage / Cookie，防止刷新页面 vuex 中的用户信息清除，sessionStorage 和 Cookie 不能存储对象，转为字符串存储
      if (sessionStorage.storageType === 'cookie') {
        Cookie.setCookie('userInfo', JSON.stringify(data), 1)
      } else {
        sessionStorage.userInfo = JSON.stringify(data)
      }
    },
  },
  actions: {
    // 用户注销
    loginOut(ctx) {
      ctx.commit('loginOut')
    },
    // 用户登录
    setUserInfo(ctx, data) {
      ctx.commit('setUserInfo', data)
    },
  },
  modules: {}
})