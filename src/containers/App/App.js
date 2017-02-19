import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import config from '../../config'
import logo from './logo.svg'
import style from './style.css'

const App = ({ children }) => {
  return (
    <div className={style.app}>
      <Helmet {...config.app.head} />
      <div className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        <Link to="/">Home</Link>
        {' '}
        <Link to="/about">About</Link>
      </p>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default App
