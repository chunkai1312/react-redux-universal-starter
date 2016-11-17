'use strict'

const ora = require('ora')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const config = require('../config')

require('shelljs/global')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

const spinner = ora('building for production...')
spinner.start()

rm('-rf', config.path.dist)
mkdir('-p', config.path.dist)

webpack(webpackConfig, (err, stats) => {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
