var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var baseConfig = require('./webpack.base.config')
var root = path.resolve(__dirname, '../')

module.exports = merge(baseConfig, {
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: root,
        exclude: /(node_modules)|(dist)/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: root,
        exclude: /(node_modules)|(dist)/
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  devServer: {
    historyApiFallback: {index: '/dist/'},
    hot: true,
    inline: true,
    progress: true,
    noInfo: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      template: 'demo/index.html',
      filename: 'index.html'
    })
  ]
})
