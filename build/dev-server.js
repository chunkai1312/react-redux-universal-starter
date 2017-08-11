const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevConfig = require('./webpack.dev.config')
const port = require('../src/config').devServer.port

const app = express()
const compiler = webpack(webpackDevConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackDevConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' }
}))

app.use(webpackHotMiddleware(compiler))

app.listen(port, function () {
  console.log('Dev Server is running on port %d', port)
})
