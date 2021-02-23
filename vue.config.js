const { title, pcTarget, devPort } = require('./src/config/settings')

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = title
      return args
    })
  },
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: devPort,
    https: false,
    disableHostCheck: true,
    hotOnly: false,
    proxy: {
      '/pc': {
        target: pcTarget,
        ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "src/assets/styles/variables.scss";'
      }
    }
  }
}
