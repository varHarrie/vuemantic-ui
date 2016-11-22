var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')

var baseConfig = require('./webpack.base.config')
var root = path.resolve(__dirname, '../')

module.exports = merge(baseConfig, {
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: root,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: root,
        exclude: /node_modules/
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
})

console.log(module.exports)
