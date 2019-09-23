import Vue from 'vue'
import {Button} from 'mint-ui'

import './validate'
import './mock/mockServer'
import store from './vuex/store'
import router from './router'
import App from './App.vue'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import * as API from './api'
import i18n from './i18n'

Vue.config.productionTip = false

// 将包含所有接口请求函数方法的对象保存到Vue原型对象上
Vue.prototype.$API = API

// 注册全局组件标签
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button)


new Vue({
  render: h => h(App),
  router,
  i18n, // 所有的组件多了: $t(key) / $i18n
  store
}).$mount('#app')
