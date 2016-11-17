'use strict'

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    root: path.join(__dirname, 'src')
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /(\.scss|\.css)$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap' },
      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url?limit=10000' },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url?limit=10000' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "theme/_config.scss";',
    includePaths: [path.resolve(__dirname, './src')]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      favicon: 'src/static/favicon.ico'
    })
  ],
  stats: { children: false }
}
