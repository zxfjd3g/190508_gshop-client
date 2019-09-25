/* 
包含当前功能模块所有接口请求参数的对象
*/
import apiObjs from './apiObjs'
import msiteAxios from './msiteAxios'
import utils from '@/api2/utils'

export default utils(apiObjs, msiteAxios)