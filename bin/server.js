#!/usr/bin/env node

require('dotenv').config()

var path = require('path')
var WebpackIsomorphicTools = require('webpack-isomorphic-tools')
var rootPath = path.resolve(__dirname, '..')

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false
global.__SERVER__ = true
global.__DISABLE_SSR__ = false // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production'

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
if (process.env.NODE_ENV === 'production') {
  global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../build/webpack-isomorphic-tools'))
    .server(rootPath, function () {
      require('../dist/server')
    })
} else {
  global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../build/webpack-isomorphic-tools'))
    .server(rootPath, function () {
      require('babel-register')
      require('../src/server')
    })
}
