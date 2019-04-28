const config = require('')

function HappyPack() {}

exports.setHappyPack = function({ type = 'module', ...arg }) {
  // return type === 'module' ? dynamicLoader(reg) : 
  console.log(dynamicPlugin(arg))
}

function dynamicLoader({ id, loader_type, ex = false }) {
  let obj = {
    test: new RegExp("\."+loader_type+"$"),
    use: [`happypack/loader?id=${id}`],
  }
  if (ex) {
    obj.exclude = /node_modules/
  }
  return obj
}

function dynamicPlugin ({ loader_types }) {
  let temp = [], flag = false
  for (let t of loader_types) {
    temp.push(new HappyPack({
      id: t.type,
      loaders: baseLoader[i.ext].loader(true)
    }))
  }
  flag && temp.push(baseLoader.css.compression({ type: 'plugin' }))
  return temp
}

const baseLoader = {
  js: {
    loader: function(cache = false) {
      return `babel-loader${cache?'?cacheDirectory': ''}`
    }
  },
  css: {
    loader: function() {
      return 'css-loader'
    },
    compression: function({ type = 'loader', id = '123' }) {
      return type === 'loader' ? ExtractTextPlugin.extract({
        use: [`happyPack/loader?id=${id}`]
      }) : new ExtractTextPlugin({
        filename: '[name].css'
      })
    },
  }
}