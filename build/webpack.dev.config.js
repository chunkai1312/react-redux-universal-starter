var webpack = require('webpack')
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var config = require('../src/config')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: config.rootPath,
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
    './src/client.js'
  ],
  output: {
    path: config.assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: 'http://' + config.host + ':' + (config.port + 1) + '/dist/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true  // <-------- DISABLE redux-devtools HERE
    }),

    new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools')).development()
  ]
}
