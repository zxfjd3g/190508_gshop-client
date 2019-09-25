/* 
自动组装接口请求函数的函数模块
返回一个包含多个接口请求函数的对象
*/
import qs from 'qs'

export default (apiObjs, axiosInstance) => {
  return Object.keys(apiObjs).reduce((pre, key) => {
    // 取出接口请求函数的相关配置
    let { url, method='GET', corsUrl='', isForm=false, checkToken=false} = apiObjs[key]
    // 处理大小写问题
    method = method.toUpperCase()
    // 处理跨域
    if (corsUrl) {
      url = corsUrl + url
    }

    // 给pre添加发ajax请求的方法
    pre[key] = async (data={}, config={}) => { 
      let promise
      // 准备options
      let options = {url, method, headers: {checkToken}}
      if (method==='GET' || method==='DELETE') {
        options = Object.assign(options, {params: data}, config)
      } else {
        if (data instanceof Object && isForm) {
          data = qs.stringify(data)
        }
        options = Object.assign(options, {data}, config)
      }

      try {
        // 使用axiosInstance发ajax请求
        const result = await axiosInstance(options)
        config.onSuccess && config.onSuccess(result)
        promise = Promise.resolve(result)
      } catch (error) {
        config.onError && config.onError(error)
        // 返回一个pending的promise中断promise链
        return new Promise(() => {})
      }

      return promise
    }

    return pre
  }, {})
}