var webpack = require('webpack')
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'))
var config = require('../src/config')

module.exports = {
  devtool: 'cheap-module-source-map',
  context: config.rootPath,
  entry: './src/client.js',
  output: {
    path: config.assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('fonts'),
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false  // <-------- DISABLE redux-devtools HERE
    }),
    webpackIsomorphicToolsPlugin
  ]
}
