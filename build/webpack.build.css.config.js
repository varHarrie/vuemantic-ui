var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var root = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    'index': path.resolve(root, 'src/styles/index.styl'),
    'base': path.resolve(root, 'src/styles/base.styl'),
    'color': path.resolve(root, 'src/styles/color.styl'),
    'flex': path.resolve(root, 'src/styles/flex.styl'),
    'font-size': path.resolve(root, 'src/styles/font-size.styl'),
    'line-height': path.resolve(root, 'src/styles/line-height.styl'),
    'size': path.resolve(root, 'src/styles/size.styl'),
    'space': path.resolve(root, 'src/styles/space.styl')
  },
  output: {
    path: path.join(root, 'dist/styles'),
    filename: '[name].css'
  },
  resolve: {
    extensions: ['', '.styl']
  },
  module: {
    loaders: [
      // {test: /\.css$/, loader: ExtractTextPlugin.extract('style!css')},
      {test: /\.styl$/, loader: ExtractTextPlugin.extract('css!stylus')}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new ExtractTextPlugin('[name].css')
  ],
  devtool: '#eval-source-map'
}
