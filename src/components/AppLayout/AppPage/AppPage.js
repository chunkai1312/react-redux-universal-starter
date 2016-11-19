import React, { PropTypes } from 'react'
import style from './style.scss'

const AppPage = ({ children }) => {
  return (
    <section className={style.appPage}>
      {children}
    </section>
  )
}

AppPage.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppPage
