module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || (process.env.NODE_ENV === 'production' ? 8080 : 3000),

  app: {
    title: 'React Redux Boilerplate',
    description: 'React/Redux application boilerplate',
    head: {
      titleTemplate: 'React Redux Boilerplate: %s',
      meta: [
        {
          name: 'description',
          content: 'React/Redux application boilerplate'
        },
        { charset: 'utf-8' }
      ]
    }
  },

  proxyTable: {}
}
