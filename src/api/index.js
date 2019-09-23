/* 
包含n个接口请求函数的模块
每个函数的返回值都是promise对象
*/
import ajax from './ajax'

/* 
根据经纬度获取位置详情
*/
export const reqAddress = (longitude, latitude) => ajax({
  // method: 'GET',
  url: `/position/${latitude},${longitude}`
})
// ajax(`/position/${latitude},${longitude}`)
// ajax.get(`/position/${latitude},${longitude}`)

/* 
获取食品分类列表
*/
export const reqCategorys = () => ajax('/index_category', {
  headers: {
    checkToken: true
  }
})

/* 
根据经纬度获取商铺列表
*/
export const reqShops = ({longitude, latitude}) => ajax.get('/shops', {
  params: {
    latitude,
    longitude
  },
  headers: {
    checkToken: true
  }
})

/* 
7、发送短信验证码
*/
export const reqSendCode = (phone) => ajax({
  url: "/sendcode",
  params: {
    phone
  }
})

/* 
用户名密码登陆
*/
export const reqPwdLogin = ({name, pwd, captcha}) => ajax({
  url: '/login_pwd',
  method: 'POST',
  data: {
    name,
    pwd,
    captcha
  }
})

/* 
手机号验证码登陆
*/
export const reqSmsLogin = ({phone, code}) => ajax({
  url: '/login_sms',
  method: 'POST',
  data: {
    phone, 
    code
  }
})

/* 
自动登陆
*/
export const reqAutoLogin = () => ajax('/auto_login', {
/*   headers: {
    needToken: true
  } */
})

export const reqInfo = () => ajax('/info')
export const reqGoods = () => ajax('/goods')
export const reqRatings = () => ajax('/ratings')
