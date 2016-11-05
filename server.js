'use strict'

const path = require('path')
const express = require('express')
const historyApiFallback = require('connect-history-api-fallback')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevConfig = require('./webpack.dev.config')
const config = require('./config')
const app = express()

//
// Express middlewares
// -----------------------------------------------------------------------------
if (app.get('env') === 'development') {
  const compiler = webpack(webpackDevConfig)
  app.use(historyApiFallback())
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackDevConfig.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
  app.set('appPath', path.join(config.root, 'src'))
}

if (app.get('env') === 'production' || app.get('env') === 'test') {
  app.set('appPath', path.join(config.root, 'dist'))
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
  console.log(err)
  res.status(500).send('Internal Server Error')
})

//
// Launch the server
// -----------------------------------------------------------------------------
app.listen(config.port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', config.port, config.port)
  }
})
