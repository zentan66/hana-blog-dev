class BasicPlugin {
  constructor(options) {}
  apply(compiler) {
    compiler.plugin('compilation', function(compilation) {})
  }
}

module.exports = BasicPlugin;