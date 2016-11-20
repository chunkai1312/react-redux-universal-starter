'use strict'

const path = require('path')
const express = require('express')
const proxy = require('http-proxy-middleware')
const historyApiFallback = require('connect-history-api-fallback')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevConfig = require('./build/webpack.dev.config')
const config = require('./config')

const app = express()

//
// HTTP proxy settings
// -----------------------------------------------------------------------------
Object.keys(config.proxyTable).forEach(context => {
  const options = (typeof config.proxyTable[context] === 'string')
    ? { target: config.proxyTable[context], changeOrigin: true }
    : config.proxyTable[context]
  app.use(proxy(context, options))
})

//
// Express middlewares
// -----------------------------------------------------------------------------
if (app.get('env') === 'development') {
  const compiler = webpack(webpackDevConfig)
  app.use(historyApiFallback())
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackDevConfig.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
  app.set('appPath', config.path.client)
}

if (app.get('env') === 'production') {
  app.set('appPath', config.path.dist)
}

app.use(express.static(app.get('appPath')))

//
// Routes
// -----------------------------------------------------------------------------
app.get('*', (req, res) => {
  res.sendFile(path.join(app.get('appPath'), 'index.html'))
})

//
// Error handling
// -----------------------------------------------------------------------------
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Internal Server Error')
})

//
// Launch the server
// -----------------------------------------------------------------------------
app.listen(config.port, () => {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'))
})
