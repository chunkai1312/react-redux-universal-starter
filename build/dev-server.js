var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackDevConfig = require('./webpack.dev.config')
var config = require('../src/config')

var compiler = webpack(webpackDevConfig)
var port = config.port + 1

var app = express()

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackDevConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.listen(port, (error) => {
  if (error) console.error(error)
  console.info(`==> 🚧  Webpack dev-server is running at ${port}.`)
})
