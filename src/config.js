const path = require('path')

module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,

  rootPath: path.resolve(__dirname, '..'),
  assetsPath: path.resolve(__dirname, '../static/dist'),

  app: {
    title: 'Universal React Redux Starter Kit',
    description: 'A starter kit for building universal React/Redux apps',
    head: {
      titleTemplate: '%s | Universal React Redux Starter Kit',
      meta: [
        {
          name: 'description',
          content: 'A starter kit for building universal React/Redux apps'
        },
        { charset: 'utf-8' }
      ]
    }
  },

  devServer: {
    host: 'localhost',
    port: 3000
  },

  proxyTable: {}
}
