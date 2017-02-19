import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import config from '../../config'

const App = ({ children }) => {
  return (
    <div>
      <Helmet {...config.app.head} />
      <Link to="/">Home</Link>
      {' '}
      <Link to="/about">About</Link>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default App
