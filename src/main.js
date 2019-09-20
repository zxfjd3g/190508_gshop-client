import Vue from 'vue'

import store from './vuex/store'
import router from './router'
import App from './App.vue'
import Header from './components/Header/Header.vue'

Vue.config.productionTip = false

// 注册全局组件标签
Vue.component('Header', Header)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
