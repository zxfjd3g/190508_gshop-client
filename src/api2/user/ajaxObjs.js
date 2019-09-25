export default {
  sendCode: {
    url: "/sendcode",
    method:"get",
    corsUrl:"/4000"
  },
  loginPwd: {
    url: "/login_pwd",
    method:"post",
    corsUrl:"/4000",
    isForm: true
  },
  loginSms: {
    url: "/login_sms",
    method:"post",
    corsUrl:"/4000",
    isForm: true
  },
  autoLogin: {
    url: "/auto_login",
    method:"get",
    corsUrl:"/4000",
    isForm: true
  }
}