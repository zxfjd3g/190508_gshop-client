# day01
## 1. 项目开发准备
    1). 项目描述
    2). 技术选型
    3). API接口

## 2. 开启项目开发
    1). 使用脚手架创建项目: vue-cli3
    2). 开发环境运行
    3). 生产环境打包与运行

## 3. 搭建项目整体界面结构
    1). 项目路由拆分
        确定路由组件显示的区域
        确定路由是几级路由
    2). App组件组成
        底部导航组件: FootGuide
        导航路由组件: MSite/Search/Order/Profile
    3). vue-router的理解和使用
        $router: 路由器对象, 包含一些操作路由的功能方法, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
    4). FootGuide: 底部导航组件
        动态class
        编程式路由导航

## 4. 拆分组件
    1). 导航路由组件
        MSite
        Search
        Order
        Profile
    2). 抽取头部组件
        Header
        通过props向子组件传递数据
        通过slot向子组件传递标签
    3). 抽取商家列表组件
        ShopList
    4). 登陆/注册路由组件
        Login
        FooterGuide的显示/隐藏: 通过路由的meta标识

## 5. 启动后台应用并测试
    运行后台项目(启动mongodb服务),
    使用postman测试后台接口, 如果不一致, 与后台工程师对接 / 修改接口文档

## 6. 封装ajax:
### 1). post请求携带数据的方式
    1). Content-Type : application/x-www-form-urlencoded;charset=utf-8
        用于键值对参数，参数的键值用=连接, 参数之间用&连接
        例如: name=%E5%B0%8F%E6%98%8E&age=12
    2). Content-Type : application/json;charset=utf-8
        用于json字符串参数
        例如: {"name": "%E5%B0%8F%E6%98%8E", "age": 12}
    说明:
        如果axiox配置的data是对象, 使用json方式传递参数, 如果data是字符串就用urlencoded方式

### 2). axios的理解和使用
    a. axios的特点
        在浏览器端: 使用XMLHttpRequest(xhr)对象发ajax请求
        在Node服务器端: 使用http包发请求
        使用Promise封装异步请求
        使用拦截器对请求和响应进行拦截处理
        对请求和响应数据进行转换处理
        取消请求
    
    b. axios的语法
        axios.create(config)
        axios(config)
        axios(url[, config])
        axios.get(url, config)
        axios.post(url, data, config)
        axios.defaults.xxx = value
        axios.interceptors.request.use(onResolved)
        axios.interceptors.response.use(onResolved, onRejected)

### 3). 封装axios
    a. 利用请求拦截器, 对所有post请求的请求参数转换为urlencode格式字符串: name=xxx&pwd=yyy
    b. 利用响应拦截器的成功回调, 让请求成功接收到的数据不是response, 而是response.data
    c. 利用响应拦截器的失败回调, 对请求异常进行统一的处理, 具体的请求不需要单独再做请求异常处理

### 4). 封装接口请求函数
    根据接口文档定义

### 5). 解决ajax的跨越域问题
    配置代理: vue.config.js ==> devServer.proxy => webpack-dev-server ==> http-proxy-middleware
    对代理的理解: 对前台应用发出的特定请求进行转发操作
