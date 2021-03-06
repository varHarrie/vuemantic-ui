var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var baseConfig = require('./webpack.base.config')
var root = path.resolve(__dirname, '../')

module.exports = merge(baseConfig, {
  entry: [
    'webpack/hot/dev-server',
    path.resolve(root, 'demo/main.js')
  ],
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
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new HtmlWebpackPlugin({
      template: 'demo/index.html',
      filename: 'index.html'
    })
  ]
})
