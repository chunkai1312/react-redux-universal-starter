import path from 'path'
import express from 'express'
import proxy from 'http-proxy-middleware'
import favicon from 'serve-favicon'
import compression from 'compression'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createMemoryHistory, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import getRoutes from './routes'
import Html from './utils/Html'
import Root from './containers/Root'
import { port, rootPath, proxyTable } from './config'

const app = express()

Object.keys(proxyTable).forEach(context => {
  const options = (typeof proxyTable[context] === 'string')
    ? { target: proxyTable[context], changeOrigin: true }
    : proxyTable[context]
  app.use(proxy(context, options))
})

app.use(compression())
app.use(favicon(path.join(rootPath, 'static/favicon.ico')))
app.use(express.static(path.join(rootPath, 'static')))

app.use((req, res) => {
  if (__DEVELOPMENT__) webpackIsomorphicTools.refresh()

  const memoryHistory = createMemoryHistory(req.url)
  const location = memoryHistory.createLocation(req.url)
  const store = configureStore(memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  const routes = getRoutes(store)
  const assets = webpackIsomorphicTools.assets()

  const hydrateOnClient = () => {
    const html = <Html assets={assets} store={store} />
    const renderedDomString = renderToString(html)
    res.send(`<!doctype html>${renderedDomString}`)
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient()
    return
  }

  match({ history, routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log('ROUTER ERROR:', error)
      res.status(500)
      hydrateOnClient()
    } else if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const component = <Root store={store} history={memoryHistory} renderProps={renderProps} />
      const html = <Html assets={assets} store={store} component={component} />
      const renderedDomString = renderToString(html)
      res.status(200).send(`<!doctype html>${renderedDomString}`)
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(port, () => console.log('Project is running on port: %d', port))
