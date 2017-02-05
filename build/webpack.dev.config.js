'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const autoprefixer = require('autoprefixer')
const config = require('../config')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: config.path.client,
  entry: [
    'webpack-hot-middleware/client',
    'index.js'
  ],
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
        use: [
          'style-loader',
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
      },
      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, use: 'url-loader' },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, use: 'url-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(config.path.client, 'index.html'),
      favicon: path.join(config.path.client, 'static/favicon.ico'),
      inject: true
    }),
    new ProgressBarPlugin({ summary: false })
  ]
}
