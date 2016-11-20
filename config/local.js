'use strict'

const path = require('path')
const ip = require('ip')

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  ip: ip.address(),

  path: {
    root: path.resolve(__dirname, '..'),
    client: path.resolve(__dirname, '..', 'src'),
    dist: path.resolve(__dirname, '..', 'dist')
  },

  proxyTable: {}
}
