/* 
包含n个用于间接更新状态数据的方法的对象
可以包含异步/逻辑操作代码
*/
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS
} from './mutation-types'

export default {
  
  /* 
  请求获取当前求地址的异步action
  */
  async getAddress ({commit, state}) {
    // 1. 发异步ajax请求
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    // 2. 请求成功后, 提交mutation
    if (result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

   /* 
  请求获取商品分类列表的异步action
  */
  async getCategorys ({commit, state}) {
    // 1. 发异步ajax请求
    const result = await reqCategorys()
    // 2. 请求成功后, 提交mutation
    if (result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

   /* 
  请求获取商家列表的异步action
  */
  async getShops ({commit, state}) {
    // 1. 发异步ajax请求
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    // 2. 请求成功后, 提交mutation
    if (result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
}