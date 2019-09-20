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
export const reqCategorys = () => ajax('/index_category')

/* 
根据经纬度获取商铺列表
*/
export const reqShops = ({longitude, latitude}) => ajax.get('/shops', {
  params: {
    latitude,
    longitude
  }
})