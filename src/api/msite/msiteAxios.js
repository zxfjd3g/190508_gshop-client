import axios from 'axios'
import { Toast, Indicator } from 'mint-ui'
import store from '../../vuex/store'
import router from '../../router'

const msiteAxios = axios.create({
  timeout: 10000
})

msiteAxios.interceptors.request.use(config => {
  Indicator.open()

  // 如果请求配置标识了需要携带token
  const { needToken } = config.headers
  if (needToken) {
    // 取出state中的token
    const token = store.state.user.token
    // 如果token有值, 添加授权的头, 值为token
    if (token) {
      config.headers.Authorization = token
    } else {
      // 抛出异常, 直接进行错误处理流程(不发请求)
      const error = new Error('没有token, 不用发请求')
      error.status = 401 // 添加一个标识
      throw error
    }
  }

   // 对params参数进行处理
  if(config.url === "/4000/position"){
    config.url = config.url+"/"+config.params.latitude+","+config.params.longitude
    config.params = {}
  }
})

msiteAxios.interceptors.response.use(
  response => {
    Indicator.close()
    // 返回response中的data数据, 这样请求成功的数据就是data了
    return response.data
  },

  error => {
    Indicator.close()
    // 发请求前的异常
    if (!error.response) {
      if (error.status===401) { // 发需要授权的请求前发现没有token(没有登陆)
        // 如果当前没在登陆界面
        if (router.currentRoute.path!=='/login') {
          router.replace('/login')
          Toast(error.message)
        } else {
          console.log('没有token, 请求前取消的请求, 已在login, 不需要跳转')
        }
      }
    // 发请求后的异常
    } else {
      const status = error.response.status
      const msg = error.message
      if (status === 401) { // 授权过期
        if (router.currentRoute.path !== '/login') {
          // 退出登陆
          store.dispatch('logout')
          router.replace('/login')
          Toast(error.response.data.message)
        } else {
          console.log('token过期的请求, 已在login')
        }
        
      } else if (status === 404) {
        Toast('请求的资源不存在')
      } else {
        Toast('请求异常: ' + msg)
      }
    }

    // return error
    // return Promise.reject(error)
    return new Promise(() => {})  // 中断promise链
  }
)

export default msiteAxios