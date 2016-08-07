'use strict';  /* eslint no-unused-vars: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevConfig = require('./webpack.dev.config');
const config = require('./config');
const app = express();

//
// Express middlewares
// -----------------------------------------------------------------------------
if (app.get('env') === 'development') {
  const compiler = webpack(webpackDevConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
  app.set('appPath', path.join(config.root, 'src'));
}

if (app.get('env') === 'production' || app.get('env') === 'test') {
  app.set('appPath', path.join(config.root, 'dist'));
}

app.use(express.static(app.get('appPath')));

//
// Routes
// -----------------------------------------------------------------------------
app.get('/*', (req, res) => {
  res.sendFile(path.join(app.get('appPath'), 'index.html'));
});

//
// Error handling
// -----------------------------------------------------------------------------
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

//
// Launch the server
// -----------------------------------------------------------------------------
app.listen(config.port, () => {
  console.log('Express server listening on port %d', config.port);
});
