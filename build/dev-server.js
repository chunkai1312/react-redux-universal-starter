var webpack = require('webpack')
var express = require('express')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackDevConfig = require('./webpack.dev.config')
var port = require('../src/config').devServer.port

var app = express()
var compiler = webpack(webpackDevConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackDevConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' }
}))

app.use(webpackHotMiddleware(compiler))

app.listen(port, function () {
  console.log('Dev Server is running on port %d', port)
})
