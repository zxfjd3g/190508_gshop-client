/* 
对应user功能模块的配置对象
*/

import {
  RECEIVE_USER,
  RECEIVE_TOKEN,
  LOGOUT,
} from '../mutation-types'

import API from '@/api'


const state = {
  user: {}, // 登陆的用户
  token: localStorage.getItem('token_key'), // 登陆token标识
}

const mutations = {
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
}

const actions = {
  /* 
  保存用户的同步action
  */
  saveUser ({commit}, user) {
    // 将token保存local中
    const token = user.token
    localStorage.setItem('token_key', token)
    delete user.token
    commit(RECEIVE_USER, {user})
    commit(RECEIVE_TOKEN, {token})
  },

  /* 
  退出登陆
  */
  logout ({commit}) {
    // 清除local中的token
    localStorage.removeItem('token_key')
    // 清除state中user/token
    commit(LOGOUT)
  },

  /* 
  自动登陆的异步action
  */
  async autoLogin ({commit}) {
    const result = await API.user.reqAutoLogin()
    if (result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
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