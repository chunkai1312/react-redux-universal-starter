var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

var projectRootPath = path.resolve(__dirname, '../')
var assetsPath = path.resolve(projectRootPath, './static/dist')

var config = require('../src/config')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: projectRootPath,
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
    './src/client'
  ],
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: 'http://' + config.host + ':' + (config.port + 1) + '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react-hmre']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer({ browsers: ['last 2 versions'] })]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer({ browsers: ['last 2 versions'] })]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "theme/_config.scss";',
              includePaths: [path.join(projectRootPath, 'src')]
            }
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10240
        }
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __SERVER__: false
    }),
    new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools')).development()
  ]
}
