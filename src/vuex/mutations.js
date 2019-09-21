/* 
包含n个用于直接更新状态数据的方法的对象
*/

import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER,
  RECEIVE_TOKEN,
  LOGOUT,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },
  [RECEIVE_TOKEN] (state, {token}) {
    state.token = token
  },
  [LOGOUT] (state) {
    state.token = ''
    state.user = {}
  },

  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
}