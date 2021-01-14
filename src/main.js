import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 定义存储方式
sessionStorage.storageType = 'cookie' // session, cookie 两种存储方式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
