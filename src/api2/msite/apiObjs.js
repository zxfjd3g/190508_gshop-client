/* 
接口请求函数的配置
*/
export default {
  getAddress:{
    url: "/position",
    method:"get",
    corsUrl:"/4000",
    isForm: true,
  },
  getCategorys:{
    url: "/index_category",
    method:"get",
    corsUrl:"/4000",
    isForm: true,
    checkToken: true
  },
  getShops:{
    url: "/shops",
    method:"get",
    corsUrl:"/4000",
    isForm: true,
    checkToken: true
  }
}