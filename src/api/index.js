/* 
包含n个接口请求函数的模块
每个函数返回的都是promise
*/
import msite from './msite'
import user from './user'
import shop from './shop'

export default {
  msite,
  user,
  shop
}