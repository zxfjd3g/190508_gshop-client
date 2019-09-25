/* 
对应msite功能模块的配置对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
} from '../mutation-types'

import API from '@/api'

const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {}, // 地址信息对象
  categorys: [], // 分类数组
  shops: [], //商家数组
}

const mutations = {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
}

const actions = {
   /* 
  请求获取当前求地址的异步action
  */
  async getAddress ({commit, state}, callback) {
    // 1. 发异步ajax请求
    const {longitude, latitude} = state
    const result = await API.msite.getAddress({longitude, latitude})
    // 2. 请求成功后, 提交mutation
    if (result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address}) // 同步执行mutation方法
      // 在commit()更新状态数据之后调用回调函数
      typeof callback==='function' && callback()
    }
  },

  /* 
  请求获取商品分类列表的异步action
  */
  async getCategorys ({commit}, callback) {
    // 1. 发异步ajax请求
    const result = await API.msite.getCategorys()
    debugger
    // 2. 请求成功后, 提交mutation
    if (result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
      // 在commit()更新状态数据之后调用回调函数
      typeof callback==='function' && callback()
    }
  },

  /* 
  请求获取商家列表的异步action
  */
  async getShops ({commit, state}, callback) {
    // 1. 发异步ajax请求
    const {longitude, latitude} = state
    const result = await API.msite.getShops({longitude, latitude}, {
      onSuccess() {},
      onError () {}
    })
    // 2. 请求成功后, 提交mutation
    if (result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
      // 在commit()更新状态数据之后调用回调函数
      typeof callback==='function' && callback()
    }
  },
}
const getters = {}

export default  {
  state,
  mutations,
  actions,
  getters
}