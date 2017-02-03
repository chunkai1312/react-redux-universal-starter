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
    modules: [
      config.path.client,
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                data: '@import "theme/_config.scss";',
                includePaths: [config.path.client],
                sourceMap: true
              }
            }
          ]
        })
      },
      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, use: 'url-loader' },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, use: 'url-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
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
