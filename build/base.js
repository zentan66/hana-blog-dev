// const webpack = require('webpack')
const AssetUtils = require('./utils.js')

AssetUtils.setHappyPack({
  type: 'module',
  loader_types: [{
    type: 'babel',
    ext: 'js'
  }, {
    type: 'css',
    ext: 'css'
  }]
})

/*module.exports = {
  // context: path.resolve(__dirname, '')
  entry: path.resolve(__dirname, 'src'),

  output: {
    filename: '[id]_[hash:8].js',
    chunkFilename: '[chunkhash].js',
    path: path.resolve(__dirname, '/dist'),
    crossOriginLoading: 'anonymous', // 默认anonymous(不会带上用户的cookies)，use-credentials 带上用户cookies
    // 导出库的方式
    // libraryTarget: 'commonjs2',
    // 导出库的名称
    // library: ''
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', ]
      }
    ],
    // 不用解析和处理的模块
    noParse: []
  },
  // 告诉webpack JavaScript运行环境已经内置了哪些全局变量
  externals: {
    // jquery: 'jQuery'
  },
  resolve: {
    alias: {
      '@': '../src/'
    },
    extensions: ['.js', '.json'],
    modules: ['../src/components', 'node_modules']
  },
  performance: {
    // 有性能问题时输出的信息类型(warning|errors|false)
    hints: 'warning',
    maxAssetSize: 200000, // 单位(byte)
  },
  // 控制台输出日志控制
  stats: {
    assets: false,
    colors: false,
    errors: false,
    errorDetails: true,
    hash: true
  },
  // 是否捕捉webpack构建的性能信息
  profile: true,
  // 是否启用缓存提升构建速度
  cache: true,
}*/