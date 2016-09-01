'use strict'

const path = require('path')

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  ip: process.env.IP || '127.0.0.1',
  root: path.normalize(`${__dirname}/..`)
}
