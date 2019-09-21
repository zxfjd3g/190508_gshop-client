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
    a. 利用请求拦截器, 对所有post请求的请求参数转换为urlencoded格式字符串: name=xxx&pwd=yyy
    b. 利用响应拦截器的成功回调, 让请求成功接收到的数据不是response, 而是response.data
    c. 利用响应拦截器的失败回调, 对请求异常进行统一的处理, 具体的请求不需要单独再做请求异常处理

### 4). 封装接口请求函数
    根据接口文档定义

### 5). 解决ajax的跨越域问题
    配置代理: vue.config.js ==> devServer.proxy => webpack-dev-server ==> http-proxy-middleware
    对代理的理解: 对前台应用发出的特定请求进行转发操作

# day02
## 1. 异步显示数据
    1). 封装ajax: 
        ajax请求的函数: 封装axios
        接口请求函数: 根据接口文档定义
        解决ajax的跨越域问题: 配置代理, 对代理的理解
    2). vuex编码
        创建所有相关的模块: vuex/store|state|mutations|actions|getters|mutation-types
        设计state: 从后台获取的数据
        实现actions: 
            定义异步action: async/await
            流程:　发ajax获取数据, commit给mutation
        实现mutations: 给状态赋值
        实现store: 创建store对象
        main.js: 配置store
    3). 组件异步显示数据
        在mounted()通过$store.dispatch('actionName')来异步获取后台数据到state中
        mapState(['xxx'])读取state中数据到组件中
        在模板中显示xxx的数据

## 2. 异步显示分类轮播
    通过vuex获取categorys数组(发请求, 读取)
    对数据进行整合一计算(一维为特定的二维数组)
        lodash的chunk工具方法
    使用Swiper显示轮播, 如何在界面更新之后创建Swiper对象?
        1). 使用watch+$nextTick( () =>{界面更新之后立即执行})
        2). 使用自定义回调+$nextTick()
        3). 利用dispatch()返回的promise	
    使用svg图片实现loading的效果

## 3. Star组件
    创建组件, 设计组件的props
    使用组件标签, 并传入相应的标签属性
    完成组件编码: 使用计算属性

## 4. Login组件的纯前台交互功能 
    1). 切换2种登陆方式: loginWay
    2). 手机号格式验证: isRightPhone计算属性
    3). 倒计时的效果: computeTime + setInterval()
    4). 切换密码的显示/隐藏: isShowPwd + transition
    5). 前台表单验证: 使用vee-validate进行声明式表单验证

# day03
## 1. Login组件的前后台交互功能
    1). 一次性图形验证码
        通过<img src="url">请求后台获取验证码图片显示
        点击回调中更新img的src, 并携带时间戳参数, 更新验证码
    2). 一次性短信验证码
        使用第三方短信平台接口
        请求发送验证码短信
        使用mint-ui实现对不同结果的不同提示效果
    3).  手机号/验证码登陆
    4). 用户名/密码/验证码登陆
        发送ajax请求, 得到返回的结果
        根据结果的标识(code)来判断登陆请求是否成功
            1: 不成功, 显示提示
            0: 成功, 保存user到state, 保存token到storage, 返回到个人中心

## 2. token的理解和使用
    1). 作用
        a. 是一个包含特定信息的字符串:　id / 失效的时间
        a. 对请求进行一定的检查限制, 防止恶意请求
        b. 后台部分接口需要进行token验证  ==> 只有请求这些接口时才携带token
    2). 使用流程
        a. 客户端发送登陆的请求, 服务器端进行用户名和密码查询, 
            如果user存在, 根据user的id值生成token(指定了有效期), 将user和token返回给客户端
        b. 客户端接收到登陆成功的响应后, 将token保存localStorage, 将user和token保存在vuex的state
        c. 在请求需要授权检查的接口前(在请求拦截器做)
            如果token不存在, 不发请求, 直接进行错误流程(响应拦截器的错误处理): throw error对象(status: 401)
            如果token存在, 将token添加到请求头中: config.headers.Authorization = token
        d. 在响应拦截器中处理错误
            1). 如果error中没有response
                判断error的status为401, 如果当前没有在登陆页面, 跳转到登陆页面
            2). 如果error中有response, 取出response中的status
                status为: 401: token过期了, 退出登陆(清除local中的token和state中user与token), 并跳转到登陆页面
                status为: 404: 提示访问的资源不存在