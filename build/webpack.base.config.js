var path = require('path')

var root = path.resolve(__dirname, '../')

module.exports = {
  entry: './demo/main.js',
  output: {
    path: path.join(root, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.styl']
  },
  resolveLoader: {
    root: path.join(root, 'node_modules')
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.json$/, loader: 'json'},
      {test: /\.html$/, loader: 'vue-html'},
      {test: /\.css$/, loader: 'css'},
      {test: /\.styl$/, loader: 'css!stylus'},
      {test: /\.md$/, loader: 'html!highlight!markdown'},
      {test: /\.(png|jpg|gif|svg)$/, loader: 'url', query: {limit: 10000, name: '[name].[ext]?[hash]'}}
    ]
  },
  stylus: {
    use: [require('nib')()],
    import: ['~nib/lib/nib/index.styl']
  },
  devtool: '#eval-source-map'
}
