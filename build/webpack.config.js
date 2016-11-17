'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../config')

module.exports = {
  devtool: 'cheap-module-source-map',
  context: config.path.client,
  entry: 'index.js',
  output: {
    path: config.path.dist,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    root: config.path.client
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: [ 'babel' ], exclude: /node_modules/ },
      { test: /(\.scss|\.css)$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass') },
      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url?limit=10000' },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url?limit=10000' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "theme/_config.scss";',
    includePaths: [config.path.client]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(config.path.client, 'index.html'),
      favicon: path.join(config.path.client, 'static/favicon.ico'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ]
}
