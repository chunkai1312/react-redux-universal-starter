import path from 'path'
import express from 'express'
import favicon from 'serve-favicon'
import proxy from 'http-proxy-middleware'
import compression from 'compression'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../common/store/configureStore'
import getRoutes from '../common/routes'
import Html from '../common/utils/Html'
import { host, port, proxyTable } from '../config'

const app = express()

Object.keys(proxyTable).forEach(context => {
  const options = (typeof proxyTable[context] === 'string')
    ? { target: proxyTable[context], changeOrigin: true }
    : proxyTable[context]
  app.use(proxy(context, options))
})

app.use(compression())
app.use(favicon(path.join(__dirname, '..', '..', 'static', 'favicon.ico')))
app.use(express.static(path.join(__dirname, '..', '..', 'static')))

app.use((req, res) => {
  global.__COOKIE__ = req.get('cookie')

  if (process.env.NODE_ENV !== 'production') {
    webpackIsomorphicTools.refresh()
  }

  const memoryHistory = createMemoryHistory(req.path)
  const store = configureStore()
  const history = syncHistoryWithStore(memoryHistory, store)
  const routes = getRoutes(store)

  function hydrateOnClient () {
    res.send('<!doctype html>\n' +
      renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store} />)
    )
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient()
    return
  }

  match({ history, routes, location: req.url }, (err, redirect, renderProps) => {
    if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (err) {
      res.status(500)
      hydrateOnClient()
      console.error('ROUTER ERROR:', err.stack)
    } else if (renderProps) {
      res.status(200)
      const component = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )
      res.send('<!doctype html>\n' +
        renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store} />)
      )
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(port, (error) => {
  if (error) console.error(error)
  console.info(`==> 🌎  Listening on port ${port}. Open up http://${host}:${port}/ in your browser.`)
})
