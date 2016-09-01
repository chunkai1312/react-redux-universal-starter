'use strict'

const _ = require('lodash')
const localConfig = require('./local')
const envConfig = require(`./env/${localConfig.env}`)
const config = _.merge(localConfig, envConfig)

module.exports = config
