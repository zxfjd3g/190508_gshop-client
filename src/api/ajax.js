/* 
封装axios的模块
*/
import axios from 'axios'
import qs from 'qs'

// 创建一个新的Axios的实例(功能上)
const instance = axios.create({
  timeout: 10000, // 设置请求超时时间为10
  baseURL: '/api' // 所有请求都有一个基础路径
})

/* 
添加请求拦截器, 处理Post请求参数(从对象转换为urlencoding)
*/
instance.interceptors.request.use((config) => {
  if (config.method.toUpperCase()==='POST' && config.data instanceof Object) {
    config.data = qs.stringify(config.data) // username=tom&pwd=123
  }
  return config
})
/* 
添加响应拦截器
    成功回调: 成功的结果不再是response, 而是response.data
    失败回调: 统一处理请求异常
*/
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    alert(error.message)
    return new Promise(() => {}) // 返回一个pending状态的promise
  }
)

export default instance