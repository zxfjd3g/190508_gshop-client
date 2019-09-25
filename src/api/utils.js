/* 
根据匹配组装ajax请求函数
*/
import qs from 'qs'

export default (apiObjs, axiosInstance) => {
  return Object.keys(apiObjs).reduce((pre, key) => {
    let {url, method='GET', corsUrl='', isForm=false} = apiObjs[key]
    if (corsUrl) {
      url = corsUrl + url
    }
    method = method.toUpperCase()

    pre[key] = async (data={}, config={}) => {
      let promise
      let options = {url, method}
      if (method==='GET' || method==='DELETE') {
        options = Object.assign(options, {params: data}, config)
      } else if (method==='POST' || method==='PUT') {
        if (isForm) {
          data = qs.stringify(data)
        }
        options = Object.assign(options, {data}, config)
      }

      try {
        const result = await axiosInstance(options)
        promise = Promise.resolve(result)
      } catch (error) {
        promise = Promise.reject(error)
      }

      return promise
    }

    return pre
  }, {})
}