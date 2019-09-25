/* 
根据匹配组装ajax请求函数
*/
import qs from 'qs'

export default (apiObjs, axiosInstance) => {
  return Object.keys(apiObjs).reduce((pre, key) => {
    let {url, method='GET', corsUrl='', isForm=false, checkToken=false} = apiObjs[key]
    if (corsUrl) {
      url = corsUrl + url
    }
    method = method.toUpperCase()

    pre[key] = async (data={}, config={}) => {
      let promise
      let options = {url, method}
      if (method==='GET' || method==='DELETE') {
        options = Object.assign(options, {params: data, headers: {checkToken}}, config)
      } else if (method==='POST' || method==='PUT') {
        if (isForm) {
          data = qs.stringify(data)
        }
        options = Object.assign(options, {data, headers: {checkToken}}, config)
      }

      try {
        const result = await axiosInstance(options)
        promise = Promise.resolve(result)
        config.onSuccess && config.onSuccess(result)
      } catch (error) {
        // promise = Promise.reject(error)
        config.onSuccess && config.onError(error)
        return new Promise(() => { })
      }

      return promise
    }

    return pre
  }, {})
}