var path = require('path')
var webpack = require('webpack')
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

var projectRootPath = path.resolve(__dirname, '../')
var assetsPath = path.resolve(projectRootPath, './static/dist')

module.exports = {
  devtool: 'cheap-module-source-map',
  context: projectRootPath,
  entry: './dist/client',
  output: {
    path: assetsPath,
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
                plugins: () => [ autoprefixer({ browsers: ['last 2 versions'] }) ]
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
                plugins: () => [ autoprefixer({ browsers: ['last 2 versions'] }) ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                data: '@import "theme/_config.scss";',
                includePaths: [path.join(projectRootPath, 'dist')]
              }
            }
          ]
        })
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
    new ExtractTextPlugin({
      filename: '[name]-[chunkhash].css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      __SERVER__: false
    }),
    new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'))
  ]
}
