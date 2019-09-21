import Vue from 'vue'

import './validate'
import store from './vuex/store'
import router from './router'
import App from './App.vue'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import * as API from './api'

Vue.config.productionTip = false

// 将包含所有接口请求函数方法的对象保存到Vue原型对象上
Vue.prototype.$API = API

// 注册全局组件标签
Vue.component('Header', Header)
Vue.component('Star', Star)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
