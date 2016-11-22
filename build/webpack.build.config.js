var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')

var baseConfig = require('./webpack.base.config')
var root = path.resolve(__dirname, '../')

module.exports = merge(baseConfig, {
  entry: './src/index.js',
  output: {
    path: path.join(root, 'dist'),
    filename: 'vuemantic-ui.js',
    library: 'vuemantic-ui',
    libraryTarget: 'umd'
  },
  devtool: '#source-map',
  externals: {
    'vue': 'vue'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
})

console.log(module.exports)
