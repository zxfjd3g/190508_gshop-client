// vue.config.js
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:4000', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      },
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'zh_CN',
      fallbackLocale: 'zh_CN',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
