
const merge = require('webpack-merge')
const ip = require('ip')
const baseConfig = require('base.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  // 监听文件更新
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    // 监听到变化后等300ms后再执行
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停地去询问系统
    poll: 1000
  },
  devServer: {
    proxy: {},
    // 启动热模块替换
    hot: true,
    host: ip.address(),
    port: 3000,
    // 客户端的日志等级
    // none|error|warning|info
    clientLogLevel: 'none',
    open: true,
    // 是否开启gzip压缩
    compress: true,
  },
  devtool: 'source-map'
})